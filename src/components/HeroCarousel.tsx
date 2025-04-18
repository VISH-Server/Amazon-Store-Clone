
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://m.media-amazon.com/images/I/61lwJy4B8PL._SX3000_.jpg',
    alt: 'Prime Day deals',
  },
  {
    id: 2,
    image: 'https://m.media-amazon.com/images/I/71Ie3JXGfVL._SX3000_.jpg',
    alt: 'Electronics deals',
  },
  {
    id: 3,
    image: 'https://m.media-amazon.com/images/I/61zAjw4bqPL._SX3000_.jpg',
    alt: 'Home essentials',
  },
  {
    id: 4,
    image: 'https://m.media-amazon.com/images/I/71Q+c4-cnjL._SX3000_.jpg',
    alt: 'Fashion deals',
  },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  
  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  useEffect(() => {
    // Auto advance slides
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="relative w-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-amazon-dark/20 to-amazon-lightgray pointer-events-none"
        style={{ zIndex: 5 }}
      />
      
      {/* Carousel */}
      <div className="relative h-[300px] md:h-[600px] w-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
              index === current ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-black p-2 rounded-full shadow-lg z-10"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
      
      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 w-2 rounded-full ${
              index === current ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
