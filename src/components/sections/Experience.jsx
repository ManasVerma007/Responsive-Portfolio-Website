import { motion } from 'framer-motion';
import { fadeIn, stagger } from '../../utils/animations';
import { experience } from '../../data/experience';

export default function Experience() {
  return (
    <section id="experience" className="section-padding">
      <div className="container-custom">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="heading-lg mb-8">Work Experience</h2>
          
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="space-y-8"
          >
            {experience.map((job, index) => (
              <motion.div 
                key={index}
                variants={fadeIn}
                className="border-l-2 border-accent pl-6 relative"
              >
                <div className="absolute w-3 h-3 bg-accent rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-bold">{job.title}</h3>
                <p className="text-accent mb-1">{job.company}</p>
                <p className="text-sm text-gray-500 mb-3">{job.location} | {job.duration}</p>
                <ul className="list-disc list-inside space-y-1">
                  {job.description.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}