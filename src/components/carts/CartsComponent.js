import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import GetQuranAction from "@/redux/actions/GetQuranAction";
import PaginationComponent from "../paginations/PaginationComponent";
import Link from "next/link";

const ITEMS_PER_PAGE = 30;

const CartsComponent = () => {
    const dispatch = useDispatch();
    const { quran, loading, error } = useSelector((state) => state.quran);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState(""); 

    useEffect(() => {
        dispatch(GetQuranAction());
    }, [dispatch]);

    if (loading) return <p>جار التحميل...</p>;
    if (error) return <p>خطأ: {error}</p>;

    // Filter the quran list based on the search term
    const filteredQuran = quran.filter((item) =>
        item.reciter_name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const totalPages = Math.ceil(filteredQuran.length / ITEMS_PER_PAGE);
    const currentData = filteredQuran.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    // Handle search term change
    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset to first page when search term changes
    };

    return (
        <div className="container mx-auto p-4">
            {/* Search input */}
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="ابحث عن طريق اسم القارئ..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="w-full p-2 border border-gray-300 rounded-md"
                />
            </div>

            {/* Wrapper for the carts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {currentData.map((item) => (
                    <Link
                        key={item.id}
                        href={{
                            pathname: `/quran/${item.id}`,
                            query: {
                                reciter_name: item.reciter_name,
                                video_thumb_url: item.video_thumb_url,
                                video_url: item.video_url,
                            },
                        }}
                        rel="noopener noreferrer"
                        className="flex items-center"
                    >
                        <Image
                            width={50}
                            height={50}
                            src={item.video_thumb_url}
                            alt={`Video Thumbnail ${item.id}`}
                            className="w-12 h-12 object-cover rounded-full mr-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800 mr-4">
                            {item.reciter_name}
                        </h3>
                    </Link>
                ))}
            </div>

            {/* Pagination */}
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
