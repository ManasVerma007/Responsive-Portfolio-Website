import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import { projects } from '../../data/projects';
import ProjectsCarousel from '../ui/ProjectsCarousel';

export default function Projects() {
  const featuredProjects = projects.filter(project => project.featured);
  
  return (
    <section id="projects" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="heading-lg mb-8">Projects</h2>
          
          <ProjectsCarousel projects={featuredProjects} />
        </motion.div>
      </div>
    </section>
  );
}