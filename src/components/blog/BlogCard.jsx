import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

export default function BlogCard({ post }) {
  return (
    <motion.div
      variants={fadeIn}
      className="bg-white dark:bg-dark-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
    >
      {post.image && (
        <div className="h-48 overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}
      
      <div className="p-6">
        <p className="text-sm text-gray-500 mb-2">{post.date}</p>
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`}
          className="text-accent hover:underline"
        >
          Read More
        </Link>
      </div>
    </motion.div>
  );
}