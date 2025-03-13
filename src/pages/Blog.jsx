import { motion } from 'framer-motion';
import BlogList from '../components/blog/BlogList';

export default function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom section-padding pt-24"
    >
      <h1 className="heading-lg mb-8">Blog</h1>
      <p className="text-lg mb-12">Thoughts, insights, and tutorials on web development and tech.</p>
      
      <BlogList />
    </motion.div>
  );
}