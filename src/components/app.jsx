import { Header } from './layout/Header';
import { Home } from './main_pages/Home';
import { Projects } from './main_pages/Projects';
import { Blog } from './main_pages/Blog';
import { About } from './main_pages/About';
import { Footer } from './layout/Footer';
import { ContentDetail } from './content/ContentDetail';
import { Routes, Route } from 'react-router-dom';
import '../styles/App.css';
import '../styles/utils/site_color.css';

export const App = () => (
  <div className="app-container primary-text">
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:slug" element={<ContentDetail contentType="projects" />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<ContentDetail contentType="blog" />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
  </div>
);