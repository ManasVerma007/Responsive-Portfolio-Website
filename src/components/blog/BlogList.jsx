import { motion } from 'framer-motion';
import { stagger } from '../../utils/animations';
import { blogPosts } from '../../data/blogPosts';
import BlogCard from './BlogCard';

export default function BlogList() {
  return (
    <motion.div
      variants={stagger}
      initial="initial"
      animate="animate"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      {blogPosts.map(post => (
        <BlogCard key={post.id} post={post} />
      ))}
    </motion.div>
  );
}