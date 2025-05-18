import { NavLink } from 'react-router-dom';
import '../../styles/layout/Header.css';
import '../../styles/utils/site_color.css';

export const Header = () => {
  return (
    <header className="header primary-bg">
      <div className="header-content">
        <nav className='navigation'>
          <NavLink to="/" className={({ isActive }) => isActive ? "active accent-text" : "primary-text"}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => isActive ? "active accent-text" : "primary-text"}>Projects</NavLink>
          <NavLink to="/blog" className={({ isActive }) => isActive ? "active accent-text" : "primary-text"}>Blog</NavLink>
          <NavLink to="/about" className={({ isActive }) => isActive ? "active accent-text" : "primary-text"}>About</NavLink>
        </nav>
      </div>
    </header>
  );
};