import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';
import profileImage from '../../assets/images/profile.jpg'; // 

export default function About() {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="heading-lg mb-8">About Me</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-7">
              <p className="text-lg mb-4">
                Hello! I'm Manas, a web developer passionate about creating digital experiences that are both functional and beautiful.
              </p>
              <p className="mb-4">
                My journey in web development started during college where I discovered my love for coding. Since then, I've been continuously learning and improving my skills.
              </p>
              <p>
                When I'm not coding, you can find me reading tech blogs, exploring new technologies, or enjoying outdoor activities.
              </p>
            </div>
            
            <div className="md:col-span-5 flex justify-center">
              <img 
                src={profileImage} 
                alt="Manas Verma - Profile Picture" 
                className="w-64 h-64 rounded-lg object-cover shadow-md transition-transform hover:scale-105"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}