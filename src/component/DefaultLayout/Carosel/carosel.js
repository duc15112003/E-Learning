import React, { useState } from "react";

const Carousel = () => {
    const slides = [
        "Slide 1",
        "Slide 2",
        "Slide 3",
        "Slide 4",
        "Slide 5",
        "Slide 6",
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrev = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative w-full max-w mx-auto mt-10 ">
            {/* Carousel Container */}
            <div className="flex items-center justify-center w-full h-56 bg-gradient-to-r from-pink-500 to-orange-500 rounded-lg shadow-lg mt-6">
                <div className="text-white text-5xl font-bold tracking-wider">
                    {slides[currentSlide]}
                </div>
            </div>
            <div className="">
                {/* Left Arrow */}
                <button
                    className="absolute top-[45%] left-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none"
                    onClick={handlePrev}
                    style={{ zIndex: 10 }} // Ensures button is on top
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 19l-7-7 7-7"
                        />
                    </svg>
                </button>

                {/* Right Arrow */}
                <button
                    className="absolute top-[45%] right-2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out focus:outline-none"
                    onClick={handleNext}
                    style={{ zIndex: 10 }} // Ensures button is on top
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-black"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 5l7 7-7 7"
                        />
                    </svg>
                </button>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-4 space-x-2">
                {slides.map((_, idx) => (
                    <div
                        key={idx}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === idx ? "bg-blue-400 scale-110" : "bg-gray-300"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Carousel;
