import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    title: 'Fresh Organic Products',
    subtitle: 'Farm to Your Table',
    description: 'Experience the taste of pure, organic farming with our premium selection of fresh products.',
    image: 'https://images.pexels.com/photos/1300972/pexels-photo-1300972.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: 'Shop Now',
  },
  {
    id: 2,
    title: 'Pure Desi Ghee',
    subtitle: 'Traditional & Authentic',
    description: 'Made from grass-fed cows using time-honored methods for the richest flavor and nutrition.',
    image: 'https://images.pexels.com/photos/4259140/pexels-photo-4259140.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: 'Explore Ghee',
  },
  {
    id: 3,
    title: 'Stone Ground Flour',
    subtitle: 'Nutrient-Rich & Wholesome',
    description: 'Traditionally milled flour that retains all the natural goodness and fiber.',
    image: 'https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1600',
    cta: 'View Products',
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-gray-900">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="max-w-4xl mx-auto px-4 text-center text-white">
              <p className="text-green-400 text-sm md:text-base font-semibold mb-2 tracking-wider uppercase">
                {slide.subtitle}
              </p>
              <h2 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                {slide.title}
              </h2>
              <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
                {slide.description}
              </p>
              <a
                href="/shop"
                className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white bg-opacity-20 hover:bg-opacity-30 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-200"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-green-500 w-8' : 'bg-white bg-opacity-50'
              }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
