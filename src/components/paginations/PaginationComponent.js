import React from "react";

const PaginationComponent = ({ currentPage, totalPages, onPrev, onNext }) => {
    return (
        <div className="flex justify-center items-center space-x-4 mt-6">
            <div className="flex flex-row justify-between w-full items-center">

                <button
                    onClick={onPrev}
                    disabled={currentPage === 1}
                    className={`flex items-center px-4 py-2 rounded-full border ${
                        currentPage === 1
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                    }`}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 ml-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5L15.75 12l-7.5 7.5"
                        />
                    </svg>

                    السابق
                </button>

                <span className="text-gray-600 font-medium text-center">
                    الصفحة {currentPage} من {totalPages}
                </span>

                <button
                    onClick={onNext}
                    disabled={currentPage === totalPages}
                    className={`flex items-center px-4 py-2 rounded-full border ${
                        currentPage === totalPages
                            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                            : "bg-white text-gray-700 hover:bg-gray-100 border-gray-300"
                    }`}
                >
                    التالي

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5 mr-2"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>

                </button>
            </div>
        </div>
    );
};

export default PaginationComponent;
