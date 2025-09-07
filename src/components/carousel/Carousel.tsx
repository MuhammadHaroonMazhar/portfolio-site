import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

interface CarouselProps {
  children: React.ReactNode[];
  autoSlide?: boolean;
  autoSlideInterval?: number;
  onSlideChange?: (index: number) => void;
}

const Carousel = ({
  children: slides,
  autoSlide = false,
  autoSlideInterval = 3000,
  onSlideChange,
}: CarouselProps) => {
  const [curr, setCurr] = useState(0);

  const prev = () => {
    const newIndex = curr === 0 ? slides.length - 1 : curr - 1;
    setCurr(newIndex);
    onSlideChange?.(newIndex);
  };

  const next = () => {
    const newIndex = curr === slides.length - 1 ? 0 : curr + 1;
    setCurr(newIndex);
    onSlideChange?.(newIndex);
  };

  useEffect(() => {
    if (!autoSlide) return;
    const slideInterval = setInterval(next, autoSlideInterval);
    return () => clearInterval(slideInterval);
  }, []);

  return (
    <div className="overflow-hidden relative w-full aspect-video mx-auto">
      <div
        className="flex transition-transform ease-out duration-500 h-full"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides}
      </div>
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={next}
          className="p-2 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      {/* <div className="absolute bottom-4 right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-2 h-2 bg-white rounded-full ${
                curr === i ? "opacity-100 scale-125" : "opacity-50"
              }`}
            />
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default Carousel;
