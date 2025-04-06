import { NavLink } from "react-router-dom";
import "../styles/Sidebar.css";

export const Sidebar = () => (
    <nav className="sidebar">
        <ul>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/experience">Experience</NavLink></li>
            <li><NavLink to="/blog">Blog</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
        </ul>
    </nav>
);