import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top" style={{ 
      backgroundColor: 'var(--dark-bg)',
      borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container">
        <Link className="navbar-brand" to="/">Gilang Nugraha.</Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen ? "true" : "false"}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" onClick={() => setIsOpen(false)}>
                Home
              </NavLink>
            </li>
            
            <li className="nav-item">
              <NavLink className="nav-link" to="/projects" onClick={() => setIsOpen(false)}>
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
} 