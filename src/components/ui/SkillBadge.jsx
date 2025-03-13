import { motion } from 'framer-motion';

export default function SkillBadge({ skill, level = null }) {
  // You can use the level prop to display different styling based on proficiency level
  const getLevelClass = () => {
    switch (level) {
      case 'expert':
        return 'border-accent';
      case 'advanced':
        return 'border-green-500';
      case 'intermediate':
        return 'border-yellow-500';
      case 'beginner':
        return 'border-gray-400';
      default:
        return '';
    }
  };

  return (
    <motion.span 
      whileHover={{ scale: 1.05 }}
      className={`px-3 py-1 bg-white dark:bg-dark-card rounded-full text-sm shadow-sm ${level ? 'border-l-4 ' + getLevelClass() : ''}`}
    >
      {skill}
    </motion.span>
  );
}