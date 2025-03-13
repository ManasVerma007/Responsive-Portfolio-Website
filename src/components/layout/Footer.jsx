import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import { useEffect, useCallback } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();
  
  // Smooth scroll function with configurable behavior
  const smoothScrollTo = useCallback((element, duration = 1000) => {
    if (!element) return;
    
    const startPosition = window.pageYOffset;
    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;
    
    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      
      // Easing function for smoother acceleration/deceleration
      const ease = t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
      
      window.scrollTo(0, startPosition + distance * ease(progress));
      
      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };
    
    requestAnimationFrame(animation);
  }, []);
  
  // Function to handle section navigation
  const handleSectionClick = (sectionId, event) => {
    event.preventDefault();
    
    if (location.pathname === '/') {
      // If already on homepage, use custom smooth scroll
      const element = document.getElementById(sectionId);
      if (element) {
        smoothScrollTo(element, 1200); // Slower, smoother scroll (1.2 seconds)
      }
    } else {
      // If on another page, set a flag with timing preference
      sessionStorage.setItem('navigatingFromOtherPage', 'true');
      sessionStorage.setItem('scrollDuration', '1200'); // Store desired duration
      
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };
  
  // Function to handle home navigation
  const handleHomeClick = (event) => {
    if (location.pathname !== '/') {
      event.preventDefault();
      navigate('/');
    } else {
      event.preventDefault();
      // If already on homepage, smooth scroll to top
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };
  
  // Handle case where we navigate to home page with a section hash
  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const sectionId = location.hash.slice(1); // Remove the # symbol
      const element = document.getElementById(sectionId);
      
      if (element && sessionStorage.getItem('navigatingFromOtherPage')) {
        // Use the stored duration or default to 1000ms
        const duration = parseInt(sessionStorage.getItem('scrollDuration') || '1000');
        
        // Delay scroll to ensure page is fully loaded
        setTimeout(() => {
          smoothScrollTo(element, duration);
          
          // Clean up
          sessionStorage.removeItem('navigatingFromOtherPage');
          sessionStorage.removeItem('scrollDuration');
        }, 600); // Wait for page transition to complete
      }
    }
  }, [location, smoothScrollTo]);
  
  return (
    <footer className="bg-gray-100 dark:bg-dark-card">
      <div className="container-custom py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link 
              to="/" 
              className="text-xl font-bold text-accent"
              onClick={handleHomeClick}
            >
              MV
            </Link>
            <p className="mt-2 text-sm">Building innovative web solutions</p>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/ManasVerma007" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/manas-verma-0000ba227" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a 
              href="mailto:manasverma012345@gmail.com" 
              className="hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-500">
              © {currentYear} Manas Verma. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex gap-4">
              <a 
                href="/" 
                className="text-sm hover:text-accent transition-colors"
                onClick={handleHomeClick}
              >
                Home
              </a>
              <a 
                href="#about" 
                className="text-sm hover:text-accent transition-colors"
                onClick={(e) => handleSectionClick('about', e)}
              >
                About
              </a>
              <Link 
                to="/blog" 
                className="text-sm hover:text-accent transition-colors"
              >
                Blog
              </Link>
              <a 
                href="#contact" 
                className="text-sm hover:text-accent transition-colors"
                onClick={(e) => handleSectionClick('contact', e)}
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}