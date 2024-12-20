import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import GetQuranAction from "@/redux/actions/GetQuranAction";
import PaginationComponent from "../paginations/PaginationComponent";

const ITEMS_PER_PAGE = 10;

const CartsComponent = () => {
    const dispatch = useDispatch();
    const { quran, loading, error } = useSelector((state) => state.quran);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        dispatch(GetQuranAction());
    }, [dispatch]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    // Calculate the data for the current page
    const totalPages = Math.ceil(quran.length / ITEMS_PER_PAGE);
    const currentData = quran.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    return (
        <div className="container mx-auto p-4">
            {/* Wrapper for the carts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentData.map((item) => (
                    <div
                        key={item.id}
                        className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={item.video_thumb_url}
                            alt={`Video Thumbnail ${item.id}`}
                            className="w-12 h-12 object-cover rounded-full mr-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">
                            {item.reciter_name}
                        </h3>
                    </div>
                ))}
            </div>

            <PaginationComponent
                currentPage={currentPage}
                totalPages={totalPages}
                onPrev={handlePrevPage}
                onNext={handleNextPage}
            />
        </div>
    );
};

export default CartsComponent;
