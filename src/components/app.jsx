import { Header } from './Header';
import { Home } from './main_pages/Home';
import { Projects } from './main_pages/Projects';
import { Blog } from './main_pages/Blog';
import { About } from './main_pages/About';
import { Footer } from './Footer';
import { Routes, Route } from 'react-router-dom';
import '../styles/Layout.css';

export const App = () => (
  <div className="app-container">
    <Header />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
  </div>
);