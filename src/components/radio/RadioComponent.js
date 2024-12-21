import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetRadioAction from '@/redux/actions/RadioAction';

const RadioComponent = () => {
  const dispatch = useDispatch();
  const { radio, loading, error } = useSelector((state) => state.radio);
  const [playingRadio, setPlayingRadio] = useState(null);
  const [search, setSearch] = useState('');
  const [dateFilter, setDateFilter] = useState('');

  useEffect(() => {
    dispatch(GetRadioAction());
  }, [dispatch]);

  if (loading) return <p>جار التحميل...</p>;

  if (error) return <p>خطأ: {error}</p>;

  const filteredRadio = radio
    .filter((radioItem) =>
      radioItem.name.toLowerCase().includes(search.toLowerCase())
    )
    .filter((radioItem) => {
      if (dateFilter) {
        const createdAtDate = new Date(radioItem.recent_date);
        const filterYear = new Date(dateFilter).getFullYear();
        return createdAtDate.getFullYear() === filterYear;
      }
      return true;
    });

  const handlePlay = (url) => {
    setPlayingRadio(url);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-semibold text-gray-700 mb-4 text-center">
        محطات الراديو المتوفرة
      </h1>

      <div className="mb-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="ابحث حسب اسم المحطة..."
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="mb-4">
        <input
          type="number"
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          min="1900" max="2099"
          placeholder="أدخل السنة"
          className="w-full p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="space-y-4">
        {filteredRadio.map((radioItem) => (
          <div
            key={radioItem.id}
            className="flex items-center justify-between p-4 border border-gray-300 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="flex flex-col space-y-1">
              <span className="text-gray-700 font-medium">{radioItem.name}</span>
              <span className="text-sm text-gray-500">آخر تحديث: {radioItem.recent_date}</span>
              <span className="text-xs text-gray-400">تم الإنشاء في: {radioItem.recent_date}</span>
            </div>
            <button
              onClick={() => handlePlay(radioItem.url)}
              className="text-gray-500 hover:underline"
            >
              استمع
            </button>
            {playingRadio === radioItem.url && (
              <audio controls autoPlay>
                <source src={radioItem.url} type="audio/mp3" />
                متصفحك لا يدعم عنصر الصوت.
              </audio>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RadioComponent;
