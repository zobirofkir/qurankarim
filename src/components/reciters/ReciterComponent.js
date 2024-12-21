import GetRecitersAction from '@/redux/actions/GetRecitersAction';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const ReciterComponent = () => {
  const dispatch = useDispatch();
  const {reciters, loading, error} = useSelector((state) => state.reciters);

  useEffect(() => {
    dispatch(GetRecitersAction());
  }, [dispatch])

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-xl mx-auto">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Reciter Information</h2>
      {reciters.map((reciter) => (
        <div key={reciter.id} className="mb-6 p-4 bg-gray-50 rounded-lg shadow-sm">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-lg font-semibold text-gray-700">{reciter.name}</h3>
            <span className="text-sm text-gray-500">{reciter.date}</span>
          </div>
          <p className="text-gray-600">Letter: {reciter.letter}</p>
          <div className="mt-4">
            <h4 className="text-md font-semibold text-gray-700">Mushaf Details:</h4>
            {reciter.moshaf.map((moshaf) => (
              <div key={moshaf.id} className="mt-2">
                <p className="text-gray-600">Name: {moshaf.name}</p>
                <p className="text-gray-600">Total Surahs: {moshaf.surah_total}</p>
                <p className="text-gray-600">Server URL: <a href={moshaf.server} className="text-blue-500 hover:underline">{moshaf.server}</a></p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReciterComponent;
