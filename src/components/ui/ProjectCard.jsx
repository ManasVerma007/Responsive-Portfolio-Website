import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import { fadeIn } from '../../utils/animations';
import placeholderImage from '../../assets/images/fallback.png';

export default function ProjectCard({ project }) {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <motion.div
      variants={fadeIn}
      className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageError ? placeholderImage : project.image || placeholderImage} 
          alt={project.title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {project.description}
        </p>
        
        {/* Rest of your component remains the same */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.slice(0, 3).map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-100 dark:bg-dark-bg rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 dark:bg-dark-bg rounded-full text-xs">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/projects/${project.id}`}
            className="text-accent hover:underline"
          >
            View Details
          </Link>
          
          <div className="flex gap-4">
            {project.github && (
              <a 
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repository for ${project.title}`}
                className="hover:text-accent transition-colors"
              >
                <FiGithub size={18} />
              </a>
            )}
            {project.demo && (
              <a 
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="hover:text-accent transition-colors"
              >
                <FiExternalLink size={18} />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}