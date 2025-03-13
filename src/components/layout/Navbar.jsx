import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiMoon, FiSun, FiMenu, FiX } from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle navigation when hash changes in URL
  useEffect(() => {
    // Function to scroll to element
    const scrollToElement = (sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    };
    
    if (location.pathname === '/' && location.hash) {
      // Extract the ID without the # symbol
      const sectionId = location.hash.slice(1);
      
      // Add a longer delay for navigations from other pages
      // This gives the DOM time to fully render the home page
      const delay = sessionStorage.getItem('navigatingFromOtherPage') ? 500 : 100;
      sessionStorage.removeItem('navigatingFromOtherPage');
      
      setTimeout(() => {
        scrollToElement(sectionId);
      }, delay);
    } else if (location.pathname === '/' && !location.hash) {
      // If on home page with no hash, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  // Function to handle home navigation
  const handleHomeClick = (event) => {
    event.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    if (location.pathname === '/') {
      // If already on homepage, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If on another page, navigate to homepage
      navigate('/');
    }
  };

  // Function to handle section navigation
  const handleSectionClick = (sectionId, event) => {
    event.preventDefault();
    setIsOpen(false); // Close mobile menu if open
    
    if (location.pathname === '/') {
      // If already on homepage, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // If on another page, set a flag that we're navigating from another page
      sessionStorage.setItem('navigatingFromOtherPage', 'true');
      // Then navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  // Create combined link component that works both on home and other pages
  const SectionLink = ({ to, children }) => {
    // Extract section ID from the to prop (remove # symbol)
    const sectionId = to.replace('#', '');
    
    return (
      <a 
        href={to} 
        className="hover:text-accent transition-colors"
        onClick={(e) => handleSectionClick(sectionId, e)}
      >
        {children}
      </a>
    );
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-dark-card shadow-md' : 'bg-transparent'}`}>
      <nav className="container-custom flex items-center justify-between py-4">
        <a 
          href="/"
          onClick={handleHomeClick}
          className="text-2xl font-bold text-accent"
        >
          MV
        </a>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a 
            href="/"
            className="hover:text-accent transition-colors"
            onClick={handleHomeClick}
          >
            Home
          </a>
          <SectionLink to="#about">About</SectionLink>
          <SectionLink to="#experience">Experience</SectionLink>
          <SectionLink to="#projects">Projects</SectionLink>
          <SectionLink to="#contact">Contact</SectionLink>
          <Link to="/blog" className="hover:text-accent transition-colors">Blog</Link>
          <button 
            onClick={toggleTheme} 
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-dark-card transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <FiSun size={20} /> : <FiMoon size={20} />}
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-dark-card">
          <div className="container-custom py-4 flex flex-col gap-4">
            <a 
              href="/"
              className="hover:text-accent transition-colors"
              onClick={handleHomeClick}
            >
              Home
            </a>
            <SectionLink to="#about">About</SectionLink>
            <SectionLink to="#experience">Experience</SectionLink>
            <SectionLink to="#projects">Projects</SectionLink>
            <SectionLink to="#contact">Contact</SectionLink>
            <Link to="/blog" className="hover:text-accent transition-colors" onClick={() => setIsOpen(false)}>Blog</Link>
            <button 
              onClick={toggleTheme} 
              className="flex items-center gap-2 hover:text-accent transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <><FiSun size={20} /> Light mode</> : <><FiMoon size={20} /> Dark mode</>}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}