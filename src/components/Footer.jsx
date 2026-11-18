import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="footer py-5 mt-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="h5 mb-3 text-white">Gilang Wahyu Nugraha</h4>
            <p className="mb-0 footer-description">
              Computer Science graduate from Atma Jaya Yogyakarta University. Building full-stack web applications with modern technologies.
            </p>
          </div>
          
          <div className="col-md-4 mb-4 mb-md-0">
            <h4 className="h5 mb-3 text-white">Quick Links</h4>
            <ul className="list-unstyled footer-links">
              <li><a href="/#about">About Me</a></li>
              <li><a href="/#skills">Skills</a></li>
              <li><a href="/#services">What I Do</a></li>
              <li><a href="/#education">Education</a></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><a href="/#contact">Contact</a></li>
            </ul>
          </div>
          
          <div className="col-md-4">
            <h4 className="h5 mb-3 text-white">Connect With Me</h4>
            <div className="social-links">
              <a href="https://github.com/gilangwahyun" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/gilang-wahyu-nugraha-75a133319/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/gilangwnugraha/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Instagram">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-top mt-4 pt-4 text-center">
          <p className="mb-0 copyright-text">© {new Date().getFullYear()} Gilang Wahyu Nugraha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
