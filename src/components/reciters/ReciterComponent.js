import GetRecitersAction from '@/redux/actions/GetRecitersAction';
import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReciterComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedServer, setSelectedServer] = useState(null);
  const [mp3Files, setMp3Files] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const audioRef = useRef(null); 
  const dispatch = useDispatch();
  const { reciters, loading, error } = useSelector((state) => state.reciters);

  useEffect(() => {
    dispatch(GetRecitersAction());
  }, [dispatch]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden) {
        if (audioRef.current) {
          audioRef.current.pause(); 
        }
      } else {
        if (audioRef.current) {
          audioRef.current.play(); 
        }
      }
    };
    
    document.addEventListener('visibilitychange', handleVisibilityChange);
    
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, []);

  const handleServerClick = async (serverUrl) => {
    setSelectedServer(serverUrl);
    setIsModalOpen(true);

    try {
      const response = await fetch(serverUrl);
      const data = await response.text();
      
      const mp3FilesList = data.match(/href="([^"]+\.mp3)"/g);
      if (mp3FilesList) {
        setMp3Files(mp3FilesList.map((file) => file.replace('href="', '').replace('"', '')));
      }
    } catch (error) {
      console.error('Error fetching MP3 files:', error);
    }
  };

  const handleFileClick = (file) => {
    setSelectedFile(file);
    if (audioRef.current) {
      audioRef.current.load(); 
      audioRef.current.play(); 
    }
  };

  const filteredReciters = reciters.filter((reciter) =>
    reciter.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto grid gap-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">معلومات القراء</h2>
      
      {/* Search input for filtering by name */}
      <input
        type="text"
        placeholder="ابحث عن القارئ"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="mb-4 p-2 border border-gray-300 rounded-md w-full"
      />

      {filteredReciters.map((reciter) => (
        <div key={reciter.id} className="bg-gray-50 p-6 rounded-lg shadow-sm grid gap-4">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold text-gray-700">{reciter.name}</h3>
            <span className="text-sm text-gray-500">{reciter.date.slice(0, 10)}</span>
          </div>
          <p className="text-gray-600">الحرف: {reciter.letter}</p>
          <div className="mt-4">
            <h4 className="text-lg font-semibold text-gray-700">تفاصيل المصحف:</h4>
            {reciter.moshaf.map((moshaf) => (
              <div key={moshaf.id} className="mt-2 p-4 bg-gray-100 rounded-md">
                <p className="text-gray-600">الاسم: {moshaf.name}</p>
                <p className="text-gray-600">إجمالي السور: {moshaf.surah_total}</p>
                <button
                  onClick={() => handleServerClick(moshaf.server)}
                  className="text-black-500 hover:underline"
                >
                  استمع
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal to display MP3 files */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999]">
          <div className="bg-white p-6 rounded-lg w-full h-full max-h-full overflow-auto relative">
            
            {/* Close Button with SVG Icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-700 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <h3 className="text-xl font-semibold text-gray-700 mb-4 text-center">اختار ملف MP3 للاستماع</h3>

            {/* Display audio player if a file is selected */}
            {selectedFile && (
              <div className="mb-4">
                <audio
                  ref={audioRef}
                  controls
                  autoPlay
                  muted={false}
                  preload="auto"
                >
                  <source src={`${selectedServer}${selectedFile}`} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            )}

            {/* List of MP3 files to select */}
            <ul className="space-y-2 overflow-y-auto max-h-[calc(100vh-100px)]">
              {mp3Files.map((file, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleFileClick(file)}
                    className="text-gray-500  hover:underline"
                  >
                    {file}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReciterComponent;
