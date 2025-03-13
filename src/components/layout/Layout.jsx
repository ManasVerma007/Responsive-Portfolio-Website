import { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import useTheme from '../../hooks/useTheme';

export default function Layout({ children }) {
  const { theme } = useTheme();
  
  useEffect(() => {
    document.documentElement.className = theme === 'dark' ? 'dark' : '';
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
}