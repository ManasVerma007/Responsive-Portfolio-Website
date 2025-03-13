import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft, FiExternalLink, FiGithub } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function ProjectDetail() {
  const { id } = useParams();
  
  // This is a placeholder. You'll need to populate this from your projects data
  const project = projects.find(p => p.id === id) || {
    title: 'Project Not Found',
    description: 'The project you are looking for does not exist.',
    image: '/placeholder.jpg',
    tech: [],
    github: '',
    demo: '',
    details: ''
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom section-padding pt-24"
    >
      <Link to="/#projects" className="inline-flex items-center gap-2 text-accent mb-8 hover:underline">
        <FiArrowLeft /> Back to all projects
      </Link>
      
      <h1 className="heading-lg mb-4">{project.title}</h1>
      
      {project.image && (
        <div className="mb-8 overflow-hidden rounded-lg shadow-md">
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-full h-auto"
          />
        </div>
      )}
      
      <div className="flex gap-4 mb-8">
        {project.github && (
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <FiGithub /> View Code
          </a>
        )}
        {project.demo && (
          <a 
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:underline"
          >
            <FiExternalLink /> Live Demo
          </a>
        )}
      </div>
      
      <div className="flex flex-wrap gap-2 mb-8">
        {project.tech.map((tech, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-gray-100 dark:bg-dark-card rounded-full text-sm"
          >
            {tech}
          </span>
        ))}
      </div>
      
      <div className="prose dark:prose-invert max-w-none">
        <p className="text-lg mb-6">{project.description}</p>
        <div dangerouslySetInnerHTML={{ __html: project.details }} />
      </div>
    </motion.div>
  );
}