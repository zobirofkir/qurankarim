"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";

const Page = () => {
    const searchParams = useSearchParams();
    const reciter_name = searchParams.get("reciter_name");
    const video_thumb_url = searchParams.get("video_thumb_url");
    const video_url = searchParams.get("video_url");

    if (!reciter_name || !video_thumb_url || !video_url) {
        return <p className="text-center text-gray-500 mt-8">جاري تحميل التفاصيل...</p>;
    }

    return (
        <div className="container mx-auto p-6 bg-gray-50 rounded-lg shadow-lg max-w-4xl">
            <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
                {reciter_name}
            </h1>

            <div className="video-container flex justify-center">
                <video
                    controls
                    className="rounded-lg w-full max-w-lg shadow-md"
                >
                    <source src={video_url} type="video/mp4" />
                    متصفحك لا يدعم تشغيل الفيديو.
                </video>
            </div>

            <p className="text-center text-gray-600 mt-4">
                استمتع بمشاهدة الفيديو من القارئ {reciter_name}.
            </p>
        </div>
    );
};

export default Page;
