import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./Layout";
import { Home } from "./main_pages/Home";
import { Experience } from "./main_pages/Experience";
import { Blog } from "./main_pages/Blog";
import { About } from "./main_pages/About";
import { Footer } from "./Footer";

export const App = () => (
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="experience" element={<Experience showAll={true} />} />
                <Route path="blog" element={<Blog />} />
                <Route path="about" element={<About />} />
            </Routes>
            <Footer />
        </Layout>
    </BrowserRouter>
);