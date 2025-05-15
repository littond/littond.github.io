import { About } from "./About";
import { Experience } from "./Experience";
import { Link } from "react-router-dom";
import "../../styles/Home.css";

export const Home = () => {
    return (
        <div className="home-container">
            <section className="hero-section">
                <h1>Welcome to My Personal Site</h1>
                <p>I'm a software developer showcasing my projects and sharing my thoughts.</p>
                <div className="cta-buttons">
                    <Link to="/projects" className="cta-button primary">View Projects</Link>
                    <Link to="/blog" className="cta-button secondary">Read Blog</Link>
                </div>
            </section>
            
            <About />
            <Experience showAll={false} />
        </div>
    );
}