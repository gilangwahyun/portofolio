import { Link } from 'react-router-dom';
import profileImage from '../assets/image_profile.JPG';

export default function Hero() {
  return (
    <div className="position-relative overflow-hidden hero-section" style={{ marginTop: '56px' }}>
      <div 
        className="position-absolute w-100 h-100" 
        style={{ 
          background: 'linear-gradient(135deg, rgba(93, 106, 248, 0.15) 0%, rgba(25, 25, 35, 0.98) 100%)',
          zIndex: 1 
        }}
      />
      
      {/* Background shapes */}
      <div className="hero-bg-shape-1"></div>
      <div className="hero-bg-shape-2"></div>
      <div className="hero-bg-shape-3"></div>
      
      <div className="container position-relative py-5" style={{ zIndex: 2 }}>
        <div className="row py-5 align-items-center">
          <div className="col-lg-6">
            <div className="animate-on-scroll fade-in-left">
              <h1 className="display-4 fw-bold mb-3 text-white">
                <span style={{ color: 'var(--accent-color)' }}>Full Stack</span> Developer
              </h1>
              <h2 className="h3 mb-4" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                Gilang Wahyu Nugraha
              </h2>
              <p className="lead mb-4">
                Computer Science student at Atma Jaya Yogyakarta University. I build responsive web applications with React, Laravel, and Bootstrap.
              </p>
              <div className="d-flex flex-wrap gap-2 mb-4 skill-tags">
                <span className="badge skill-badge">Laravel</span>
                <span className="badge skill-badge">React</span>
                <span className="badge skill-badge">HTML/CSS</span>
                <span className="badge skill-badge">MySQL</span>
                <span className="badge skill-badge">PHP</span>
                <span className="badge skill-badge">JavaScript</span>
                <span className="badge skill-badge">Bootstrap</span>
              </div>
              <div className="d-flex gap-3">
                <Link to="/projects" className="btn btn-primary px-4 py-2">
                  View Portfolio
                </Link>
                <a href="#contact" className="btn btn-outline-primary px-4 py-2">
                  Contact Me
                </a>
                <a
                  href="/Gilang Wahyu Nugraha - CV.pdf"
                  download="Resume-Gilang Wahyu Nugraha.pdf"
                  className="btn btn-outline-primary px-4 py-2"
                >
                  <i className="bi bi-file-earmark-text me-2"></i>Resume
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5 mt-lg-0">
            <div className="position-relative animate-on-scroll fade-in-right">
              {/* Decorative background blur shapes */}
              <div 
                className="position-absolute top-0 start-0 translate-middle" 
                style={{ 
                  width: '120px', 
                  height: '120px', 
                  background: 'var(--accent-color)', 
                  opacity: '0.1',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  zIndex: -1
                }}
              />
              
              {/* Profile Image container */}
              <div className="position-relative" style={{ zIndex: 1 }}>
                <div className="profile-image-container">
                  <img 
                    src={profileImage} 
                    alt="Gilang Wahyu Nugraha" 
                    className="profile-image"
                    width="280"
                    height="280"
                  />
                  <div className="profile-glow"></div>
                  <div className="profile-frame"></div>
                  <div className="profile-dots-1"></div>
                  <div className="profile-dots-2"></div>
                </div>
              </div>
              
              <div 
                className="position-absolute bottom-0 end-0 translate-middle" 
                style={{ 
                  width: '160px', 
                  height: '160px', 
                  background: 'var(--accent-color)', 
                  opacity: '0.1',
                  borderRadius: '64% 36% 27% 73% / 55% 58% 42% 45%',
                  zIndex: -1
                }}
              />
              <div 
                className="position-absolute" 
                style={{ 
                  width: '40px', 
                  height: '40px', 
                  background: 'var(--accent-color)',
                  opacity: '0.3',
                  borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                  bottom: '30px',
                  right: '-20px',
                  zIndex: -1,
                  animation: 'float 6s ease-in-out infinite'
                }}
              />
              <div 
                className="position-absolute" 
                style={{ 
                  width: '25px', 
                  height: '25px', 
                  background: 'var(--accent-color)',
                  opacity: '0.2',
                  borderRadius: '50%',
                  top: '50px',
                  right: '50px',
                  zIndex: -1,
                  animation: 'float 4s ease-in-out infinite 1s'
                }}
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="text-center position-absolute bottom-0 start-50 translate-middle-x mb-4" style={{ zIndex: 2 }}>
        <div className="scroll-indicator">
          <div className="scroll-indicator-text">Scroll Down</div>
          <div className="chevron"></div>
          <div className="chevron"></div>
          <div className="chevron"></div>
        </div>
      </div>
    </div>
  );
}
