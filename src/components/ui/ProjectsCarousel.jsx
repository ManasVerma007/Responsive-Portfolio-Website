import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import ProjectCard from './ProjectCard';

export default function ProjectsCarousel({ projects }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  
  // Determine number of cards to show based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  const maxIndex = Math.max(0, projects.length - cardsPerView);
  
  const nextSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex >= maxIndex ? 0 : prevIndex + 1
    );
  };
  
  const prevSlide = () => {
    setCurrentIndex(prevIndex => 
      prevIndex <= 0 ? maxIndex : prevIndex - 1
    );
  };
  
  // Get visible projects
  const getVisibleProjects = () => {
    return projects.slice(currentIndex, currentIndex + cardsPerView);
  };
  
  return (
    <div className="relative py-4">
      {/* Cards Container */}
      <div className="overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div 
            key={currentIndex}
            className="flex gap-8"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            {getVisibleProjects().map(project => (
              <div 
                key={project.id} 
                className="flex-shrink-0 w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
              >
                <ProjectCard project={project} />
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
      
      {/* Navigation Buttons */}
      {projects.length > cardsPerView && (
        <>
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 bg-white dark:bg-dark-card rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 z-10 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Previous projects"
          >
            <FiChevronLeft size={24} />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 bg-white dark:bg-dark-card rounded-full p-3 shadow-md hover:bg-gray-100 dark:hover:bg-gray-800 z-10 focus:outline-none focus:ring-2 focus:ring-accent"
            aria-label="Next projects"
          >
            <FiChevronRight size={24} />
          </button>
        </>
      )}
      
      {/* Pagination Indicators */}
      {projects.length > cardsPerView && (
        <div className="flex justify-center mt-8 gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent w-4' 
                  : 'bg-gray-300 dark:bg-gray-700'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}