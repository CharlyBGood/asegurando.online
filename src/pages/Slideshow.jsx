import { useState, useEffect } from 'react';
import Slides from './utilities/SlideImages'
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Slides.length) % Slides.length);
  };

  return (
    <div className="relative w-full h-[21em] overflow-hidden">
      {Slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="mb-2 p-2 opacity-75 absolute bg-bgDarkBlue bottom-4 left-0 right-0">
            <h4 className="text-lg md:text-2xl text-center">{slide.text}</h4>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-bgDarkBlue/50 hover:bg-bgDarkBlue/70 text-white text-2xl md:text-3xl p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Previous slide"
      >
        <FiChevronLeft />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-bgDarkBlue/50 hover:bg-bgDarkBlue/70 text-white text-2xl md:text-3xl p-2 rounded-full transition-colors cursor-pointer"
        aria-label="Next slide"
      >
        <FiChevronRight />
      </button>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 p-[.5em]">
        {Slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all ${index === currentSlide ? "bg-lightBlue scale-125" : "bg-blueGray/50"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};