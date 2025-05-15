import { NavLink } from 'react-router-dom';
import '../styles/Header.css';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <nav className='navigation'>
          <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>Projects</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>About</NavLink>
        </nav>
      </div>
    </header>
  );
};