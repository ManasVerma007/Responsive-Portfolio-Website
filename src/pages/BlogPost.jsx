import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowLeft } from 'react-icons/fi';
import BlogPostContent from '../components/blog/BlogPostContent';

export default function BlogPostPage() {
  const { id } = useParams();
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="container-custom section-padding pt-24"
    >
      <Link to="/blog" className="inline-flex items-center gap-2 text-accent mb-8 hover:underline">
        <FiArrowLeft /> Back to all posts
      </Link>
      
      <BlogPostContent id={id} />
    </motion.div>
  );
}