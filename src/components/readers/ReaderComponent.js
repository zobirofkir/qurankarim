"use client";

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import GetQuranAction from '@/redux/actions/GetQuranAction';
import Link from 'next/link';

const ReaderComponent = () => {
    const dispatch = useDispatch();
    const { quran, loading, error } = useSelector((state) => state.quran);
    const [hydrated, setHydrated] = useState(false);

    useEffect(() => {
        setHydrated(true);
        dispatch(GetQuranAction());
    }, [dispatch]);

    return (
        <div className='container bg-gray-100 md:px-0 px-10'>
            <div
                className={`flex flex-row gap-4 my-2 overflow-x-auto px-2 ${
                    hydrated ? 'animate-marquee' : ''
                }`}
            >
                {quran.map((name, index) => (
                    <div
                        key={index}
                        className='bg-white text-black font-bold px-4 py-2 rounded-md mb-4 font-bold shadow-lg'
                    >
                        <Link
                            href={{
                                pathname: `/quran/${name.id}`,
                                query: {
                                    reciter_name: name.reciter_name,
                                    video_thumb_url: name.video_thumb_url,
                                    video_url: name.video_url,
                                },
                            }}
                        >
                            <h1 className='whitespace-nowrap text-center'>{name.reciter_name}</h1>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReaderComponent;
