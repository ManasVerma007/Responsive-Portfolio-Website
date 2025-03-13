import { motion } from "framer-motion";
import { fadeIn } from "../../utils/animations";
import { skills } from "../../data/skills";
import SkillBadge from "../ui/SkillBadge";

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-gray-50 dark:bg-dark-bg">
      <div className="container-custom">
        <motion.div
          initial={fadeIn.initial}
          animate={fadeIn.animate}
          transition={fadeIn.transition}
        >
          <h2 className="heading-lg mb-8">Skills & Technologies</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {skills.languages.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Tools & Libraries</h3>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Cloud</h3>
              <div className="flex flex-wrap gap-2">
                {skills.cloud.map((skill, index) => (
                  <SkillBadge key={index} skill={skill} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
