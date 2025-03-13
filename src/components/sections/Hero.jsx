import { motion } from 'framer-motion';
import Button from '../ui/Button';
import { FiArrowDown, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center pt-16">
      <div className="container-custom">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-accent font-mono mb-4"
          >
            Hi, my name is
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="heading-xl mb-4"
          >
            Manas Verma.
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="heading-lg text-gray-500 dark:text-gray-400 mb-6"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
          >
            I'm a software developer specializing in building exceptional digital experiences. 
            Currently, I'm focused on building responsive and accessible web applications.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap gap-4"
          >
            <Button href="#projects" size="lg">
              View My Work
            </Button>
            
            <Button href="https://github.com/ManasVerma007" variant="outline" size="lg">
              <FiGithub className="mr-2" /> GitHub
            </Button>
            
            <Button href="https://www.linkedin.com/in/manas-verma-0000ba227" variant="outline" size="lg">
              <FiLinkedin className="mr-2" /> LinkedIn
            </Button>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
        >
          <a 
            href="#about"
            className="flex flex-col items-center text-sm gap-2 text-gray-500 hover:text-accent transition-colors"
          >
            <span>Scroll Down</span>
            <FiArrowDown className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}