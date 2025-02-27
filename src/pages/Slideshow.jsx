import { useState, useEffect } from 'react';
import Slides from './utilities/SlideImages'

export const Slideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Slides.length) % Slides.length);
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {Slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 p-4">
            <h4 className="text-white text-xl text-center">{slide.text}</h4>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:bg-black hover:bg-opacity-20 p-2 rounded-full transition-colors"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:bg-black hover:bg-opacity-20 p-2 rounded-full transition-colors"
      >
        &#10095;
      </button>
    </div>
  );
};