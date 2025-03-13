import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProjectDetail from './pages/ProjectDetail';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

export default App;