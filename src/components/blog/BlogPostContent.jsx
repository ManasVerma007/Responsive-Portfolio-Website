import { useEffect, useState } from 'react';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPostContent({ id }) {
  const [post, setPost] = useState(null);
  
  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === id);
    setPost(foundPost || { 
      title: 'Post Not Found',
      date: '',
      content: 'The blog post you are looking for does not exist.'
    });
  }, [id]);
  
  if (!post) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent"></div>
      </div>
    );
  }
  
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1>{post.title}</h1>
      {post.date && <p className="text-sm text-gray-500 mb-8">{post.date}</p>}
      
      {post.image && (
        <div className="my-6 overflow-hidden rounded-lg">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-auto"
          />
        </div>
      )}
      
      <div dangerouslySetInnerHTML={{ __html: post.content }}></div>
    </article>
  );
}