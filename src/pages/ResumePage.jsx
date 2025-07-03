import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import profileImage from '../assets/image_profile.JPG';
import { generatePDF } from '../components/ResumePDF';

export default function ResumePage() {
  const printResume = () => {
    generatePDF();
  };

  return (
    <div className="resume-page bg-dark-theme">

      {/* Resume Document */}
      <div className="resume-container">
        <div className="resume-document">
          {/* Print Button - Fixed Position */}
          <div className="print-button-fixed">
            <button onClick={printResume} className="btn btn-primary btn-sm">
              <i className="bi bi-file-earmark-pdf me-2"></i> Export PDF
            </button>
          </div>
          
          {/* Back Button - Fixed Position */}
          <div className="back-button-fixed">
            <Link to="/" className="btn btn-outline-primary btn-sm">
              <i className="bi bi-arrow-left me-2"></i> Back
            </Link>
          </div>
          
          {/* Header Section */}
          <header className="resume-header">
            <div className="resume-photo">
              <img src={profileImage} alt="Gilang Wahyu Nugraha" />
            </div>
            <div className="resume-title">
              <h1>Gilang Wahyu Nugraha</h1>
              <h2>Full Stack Developer</h2>
              <div className="resume-contact">
                <div className="contact-item">
                  <i className="bi bi-envelope"></i>
                  <span>gilangwahyu471@gmail.com</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-telephone"></i>
                  <span>+62 8223 2438 578</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-geo-alt"></i>
                  <span>Yogyakarta, Indonesia</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-github"></i>
                  <span>github.com/gilangwahyun</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-linkedin"></i>
                  <span>www.linkedin.com/in/gilang-wahyu-nugraha</span>
                </div>
                <div className="contact-item">
                  <i className="bi bi-instagram"></i>
                  <span>instagram.com/gilangwnugraha</span>
                </div>
              </div>
            </div>
          </header>

          {/* Summary */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Professional Summary</h3>
              <div className="section-line"></div>
            </div>
            <p>
              Computer Science student at Atma Jaya Yogyakarta University, passionate about
              web and mobile development. Currently focusing on building responsive and user-friendly 
              applications using modern frameworks and technologies. Skilled in creating clean, 
              efficient code and implementing best practices in web development.
            </p>
          </section>

          {/* Skills */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Technical Skills</h3>
              <div className="section-line"></div>
            </div>
            
            <div className="skills-container">
              <div className="skill-column">
                <h4>Frontend Development</h4>
                <div className="skill-item">
                  <span className="skill-name">React.js</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">HTML/CSS</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Bootstrap</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '80%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="skill-column">
                <h4>Backend & Mobile</h4>
                <div className="skill-item">
                  <span className="skill-name">Laravel</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">PHP</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '75%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">Flutter</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <span className="skill-name">MySQL</span>
                  <div className="skill-bar">
                    <div className="skill-level" style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Education</h3>
              <div className="section-line"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Bachelor of Computer Science</h4>
                  <span className="timeline-period">2022 - Present</span>
                </div>
                <h5>Atma Jaya Yogyakarta University</h5>
                <p>
                  Currently in 6th semester. Coursework includes Data Structures, Algorithms, 
                  Object-Oriented Programming, Database Systems, Web Programming, and Mobile 
                  Application Development.
                </p>
              </div>
            </div>
          </section>

          {/* Projects */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Projects</h3>
              <div className="section-line"></div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>Personal Portfolio Website</h4>
                  <span className="timeline-period">2025</span>
                </div>
                <p>
                  Developed a responsive portfolio website using React and Laravel. 
                  Implemented modern UI/UX principles with Bootstrap and custom CSS.
                  Features include project showcase, contact form, and admin dashboard.
                </p>
                <div className="project-technologies">
                  <span>React</span>
                  <span>Laravel</span>
                  <span>Bootstrap</span>
                  <span>MySQL</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-content">
                <div className="timeline-header">
                  <h4>E-Commerce Mobile App</h4>
                  <span className="timeline-period">2025</span>
                </div>
                <p>
                  Created a cross-platform mobile application for an e-commerce store
                  using Flutter. Implemented features such as product catalog, cart functionality,
                  and user authentication.
                </p>
                <div className="project-technologies">
                  <span>Flutter</span>
                  <span>Dart</span>
                  <span>Firebase</span>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Languages</h3>
              <div className="section-line"></div>
            </div>
            
            <div className="languages-container">
              <div className="language-item">
                <span className="language-name">Indonesian</span>
                <span className="language-level">Native</span>
              </div>
              <div className="language-item">
                <span className="language-name">English</span>
                <span className="language-level">B2 Upper Intermediate</span>
              </div>
              <div className="language-certification">
                British Council Certification (June 2024) - Score: 424/B2
              </div>
            </div>
          </section>

          {/* Interests */}
          <section className="resume-section">
            <div className="section-title">
              <h3>Interests</h3>
              <div className="section-line"></div>
            </div>
            
            <div className="interests-container">
              <div className="interest-item">
                <i className="bi bi-code-slash"></i>
                <span>Web Development</span>
              </div>
              <div className="interest-item">
                <i className="bi bi-phone"></i>
                <span>Mobile Apps</span>
              </div>
              <div className="interest-item">
                <i className="bi bi-book"></i>
                <span>Tech Books</span>
              </div>
              <div className="interest-item">
                <i className="bi bi-controller"></i>
                <span>Gaming</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
} 