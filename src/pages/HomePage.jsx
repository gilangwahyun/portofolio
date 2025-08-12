import { Link } from 'react-router-dom';
import profileImage from '../assets/image_profile.JPG';
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser';

import { FaReact, FaJsSquare, FaHtml5, FaBootstrap, FaLaravel, FaPhp, FaDatabase } from 'react-icons/fa';

export default function HomePage() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const animatedElements = useRef([]);
  const form = useRef();
  const printableCV = useRef();
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: ''
  });
  
  // Initialize EmailJS - You'll need to create an account at emailjs.com
  // and replace YOUR_PUBLIC_KEY with the actual public key from your EmailJS account
  useEffect(() => {
    // Get your public key from https://dashboard.emailjs.com/admin/account
    emailjs.init('Z-9jlnGArtMGWQRK6');
    console.log("EmailJS initialized");
  }, []);
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    setContactForm(prev => ({
      ...prev,
      [name === 'from_name' ? 'name' : 
       name === 'reply_to' ? 'email' : name]: value
    }));
  };
  
  // Function to print CV
  const printCV = () => {
    const printContent = printableCV.current;
    const originalContents = document.body.innerHTML;
    
    document.body.innerHTML = printContent.innerHTML;
    
    window.print();
    
    document.body.innerHTML = originalContents;
    window.location.reload(); // Reload to restore all event listeners
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });
    
    // EmailJS configuration
    // 1. Create an account at emailjs.com
    // 2. Add Gmail as a service (https://dashboard.emailjs.com/admin/services)
    // 3. Create an email template (https://dashboard.emailjs.com/admin/templates)
    // 4. Replace the placeholders below with your actual IDs
    
    const serviceId = "service_dkz6y8i"; // Your Gmail service ID from EmailJS
    const templateId = "template_dn6bw1m"; // Your email template ID from EmailJS
    
    // Create template parameters object - this ensures variables are properly formatted
    // Using only the essential parameters needed by the template
    const templateParams = {
      from_name: contactForm.name,
      reply_to: contactForm.email,
      subject: contactForm.subject,
      message: contactForm.message,
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };
    
    console.log("Sending email with parameters:", templateParams);
    console.log("Service ID:", serviceId);
    console.log("Template ID:", templateId);
    
    // Use emailjs.send instead of sendForm for better control over parameters
    emailjs.send(serviceId, templateId, templateParams)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        
        // Reset form
        setContactForm({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        
        setFormStatus({
          submitted: true,
          success: true,
          message: 'Message sent successfully! I will get back to you soon.'
        });
        
        // Clear success message after 5 seconds
        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: ''
          });
        }, 5000);
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
      
      // Check for elements to animate
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(el => {
        const rect = el.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        
        if (isVisible) {
          el.classList.add('visible');
        }
      });
    };

    // Initial check for elements in view
    setTimeout(() => {
      handleScroll();
    }, 100);

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-dark-theme">
      {/* Hero Section with Gradient Overlay */}
      <div className="position-relative overflow-hidden hero-section" style={{ marginTop: '56px' }}>
        <div className="position-absolute w-100 h-100" 
          style={{ 
            background: 'linear-gradient(135deg, rgba(93, 106, 248, 0.15) 0%, rgba(25, 25, 35, 0.98) 100%)',
            zIndex: 1 
          }}>
        </div>
        
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
                <h2 className="h3 mb-4" style={{ color: '#ffffff', textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>Gilang Wahyu Nugraha</h2>
                <p className="lead mb-4">
                  I am a Computer Science student at Atma Jaya Yogyakarta University, passionate about
                  web development. Currently focusing on building responsive and user-friendly 
                  applications using modern frameworks and technologies.
                </p>
                <div className="d-flex flex-wrap gap-2 mb-4 skill-tags">
                  <Skill>Laravel</Skill>
                  <Skill>React</Skill>
                  <Skill>HTML/CSS</Skill>
                  <Skill>MySQL</Skill>
                  <Skill>PHP</Skill>
                  <Skill>JavaScript</Skill>
                  <Skill>Bootstrap</Skill>
                </div>
                <div className="d-flex gap-3">
                  <Link 
                    to="/projects" 
                    className="btn btn-primary px-4 py-2"
                  >
                    View Portfolio
                  </Link>
                  <a 
                    href="#contact" 
                    className="btn btn-outline-primary px-4 py-2"
                  >
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
                {/* Decorative elements */}
                <div className="position-absolute top-0 start-0 translate-middle" 
                  style={{ 
                    width: '120px', 
                    height: '120px', 
                    background: 'var(--accent-color)', 
                    opacity: '0.1',
                    borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
                    zIndex: -1
                  }}>
                </div>
                
                {/* Profile Image with custom styling */}
                <div className="position-relative" style={{ zIndex: 1 }}>
                  <div className="profile-image-container">
                    <img 
                      src={profileImage} 
                      alt="Gilang Wahyu Nugraha" 
                      className="profile-image"
                    />
                    <div className="profile-glow"></div>
                    <div className="profile-frame"></div>
                    <div className="profile-dots-1"></div>
                    <div className="profile-dots-2"></div>
                  </div>
                </div>
                
                {/* More decorative elements */}
                <div className="position-absolute bottom-0 end-0 translate-middle" 
                  style={{ 
                    width: '160px', 
                    height: '160px', 
                    background: 'var(--accent-color)', 
                    opacity: '0.1',
                    borderRadius: '64% 36% 27% 73% / 55% 58% 42% 45%',
                    zIndex: -1
                  }}>
                </div>
                
                {/* Floating shapes */}
                <div className="position-absolute" 
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
                  }}>
                </div>
                <div className="position-absolute" 
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
                  }}>
                </div>
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

      {/* About Me section */}
      <div className="container py-5" id="about">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card border-0 shadow-lg animate-on-scroll fade-in-up" style={{ 
              backgroundColor: 'var(--dark-card)',
              background: 'linear-gradient(145deg, var(--dark-card) 0%, rgba(35, 35, 45, 1) 100%)'  
            }}>
              <div className="card-body p-4 p-lg-5">
                <h2 className="card-title fw-bold mb-4 border-bottom pb-3" style={{ color: 'var(--accent-color)' }}>
                  About Me
                </h2>
                <div className="card-text">
                  <p>
                    I'm a 6th semester student at Atma Jaya Yogyakarta University, pursuing a degree in Computer Science.
                    My journey in programming began with learning C, followed by Java, which built a strong foundation in
                    programming concepts and object-oriented design.
                  </p>
                  <p>
                    As I progressed in my studies, I developed a passion for both web and mobile development.
                    I started with HTML, CSS, and JavaScript for web development, then advanced to using frameworks
                    like Bootstrap for styling, Laravel for backend, and React with Vite for frontend.
                  </p>
                  <p className="mb-0">
                    While I'm still early in my career journey, I've collaborated with classmates on university projects.
                    I'm excited to continue learning and growing as a developer while building my portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Skills Section */}
      <div className="skills-section py-5" id="skills">
        <div className="container">
          <div className="text-center mb-5 animate-on-scroll fade-in-up">
            <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Technical Skills</h2>
            <p className="w-75 mx-auto">My expertise and proficiency across various technologies</p>
          </div>

          <div className="row g-4 text-center">
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaReact size={50} color="#61DBFB" />
              <h5 className="mt-3 text-white">React.js</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaJsSquare size={50} color="#F7DF1E" />
              <h5 className="mt-3 text-white">JavaScript</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaHtml5 size={50} color="#E34F26" />
              <h5 className="mt-3 text-white">HTML/CSS</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaBootstrap size={50} color="#7952B3" />
              <h5 className="mt-3 text-white">Bootstrap</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaLaravel size={50} color="#FF2D20" />
              <h5 className="mt-3 text-white">Laravel</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaPhp size={50} color="#777BB4" />
              <h5 className="mt-3 text-white">PHP</h5>
            </div>
            <div className="col-md-3 animate-on-scroll fade-in-up">
              <FaDatabase size={50} color="#4479A1" />
              <h5 className="mt-3 text-white">MySQL</h5>
            </div>
          </div>
        </div>
      </div>
      
      {/* Services Section */}
      <div className="container py-5" id="services">
        <div className="text-center mb-5 animate-on-scroll fade-in-up">
          <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>What I Do</h2>
          <p className="w-75 mx-auto">Areas of development I'm focusing on</p>
        </div>
        
        <div className="row g-4 justify-content-center">
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-lg service-card animate-on-scroll fade-in-up" data-delay="0.1">
              <div className="card-body p-4 text-center">
                <div className="service-icon mb-4">
                  <i className="bi bi-code-square"></i>
                </div>
                <h3 className="h4 mb-3">Web Development</h3>
                <p className="mb-0">
                  Creating responsive and interactive websites using modern frameworks like React 
                  and Laravel. Focus on clean code, user experience, and performance optimization.
                </p>
              </div>
            </div>
          </div>
          
          {/* <div className="col-md-4">
            <div className="card h-100 border-0 shadow-lg service-card animate-on-scroll fade-in-up" data-delay="0.3">
              <div className="card-body p-4 text-center">
                <div className="service-icon mb-4">
                  <i className="bi bi-phone"></i>
                </div>
                <h3 className="h4 mb-3">Mobile Development</h3>
                <p className="mb-0">
                  Building cross-platform mobile applications with Flutter. 
                  Creating intuitive interfaces and seamless user experiences for Android and iOS.
                </p>
              </div>
            </div>
          </div> */}
          
          <div className="col-md-6">
            <div className="card h-100 border-0 shadow-lg service-card animate-on-scroll fade-in-up" data-delay="0.5">
              <div className="card-body p-4 text-center">
                <div className="service-icon mb-4">
                  <i className="bi bi-database"></i>
                </div>
                <h3 className="h4 mb-3">Database Design</h3>
                <p className="mb-0">
                  Designing and implementing efficient database structures using MySQL.
                  Optimizing queries and ensuring data integrity for web applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Education Section */}
      <div className="container py-5" id="education">
        <div className="text-center mb-5 animate-on-scroll fade-in-up">
          <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Education</h2>
          <p className="w-75 mx-auto">My academic journey</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg animate-on-scroll fade-in-up">
              <div className="card-body p-4">
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h3 className="h4 mb-0">Atma Jaya Yogyakarta University</h3>
                  <span className="badge bg-primary px-3 py-2">Present</span>
                </div>
                <p className="text-accent mb-2">Bachelor of Computer Science</p>
                <p className="mb-0">
                  Currently in my 6th semester, focusing on web and mobile application development.
                  Relevant coursework includes Data Structures, Algorithms, Object-Oriented Programming,
                  Database Systems, Web Programming.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Projects Section - Link to Projects Page */}
      <div className="container py-5" id="projects-preview">
        <div className="text-center mb-5 animate-on-scroll fade-in-up">
          <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Projects</h2>
          <p className="w-75 mx-auto mb-4">
            Check out my projects page to see what I've been working on.
          </p>
          <Link to="/projects" className="btn btn-primary px-4 py-2">
            View All Projects
          </Link>
        </div>
      </div>
      
      {/* Contact Form Section */}
      <div className="container py-5" id="contact">
        <div className="text-center mb-5 animate-on-scroll fade-in-up">
          <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Get In Touch</h2>
          <p className="w-75 mx-auto">Have a question or want to work together? Send me a message!</p>
        </div>
        
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="card border-0 shadow-lg animate-on-scroll fade-in-up">
              <div className="card-body p-4 p-lg-5">
                {formStatus.submitted && (
                  <div className={`alert ${formStatus.success ? 'alert-success' : 'alert-info'} mb-4`}>
                    {formStatus.message}
                  </div>
                )}
                
                {/* IMPORTANT: To set up this form to send emails to your Gmail:
                    1. Sign up at emailjs.com
                    2. Add Gmail as a service under Email Services
                    3. Create an email template with variables {{from_name}}, {{reply_to}}, {{subject}}, {{message}}
                    4. Replace YOUR_PUBLIC_KEY, YOUR_SERVICE_ID, and YOUR_TEMPLATE_ID in this file 
                    5. Make sure to set your Gmail as the recipient in the template settings */}
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" 
                          name="from_name" 
                          placeholder="Your Name" 
                          value={contactForm.name}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="name">Your Name</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating mb-3">
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" 
                          name="reply_to"
                          placeholder="Your Email" 
                          value={contactForm.email}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="email">Your Email</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="subject" 
                          name="subject"
                          placeholder="Subject" 
                          value={contactForm.subject}
                          onChange={handleInputChange}
                          required
                        />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating mb-3">
                        <textarea 
                          className="form-control" 
                          id="message" 
                          name="message"
                          placeholder="Your Message" 
                          style={{ height: '150px' }}
                          value={contactForm.message}
                          onChange={handleInputChange}
                          required
                        ></textarea>
                        <label htmlFor="message">Your Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button 
                        type="submit" 
                        className="btn btn-primary btn-lg px-5"
                        disabled={formStatus.submitted && !formStatus.success}
                      >
                        {formStatus.submitted && !formStatus.success ? (
                          <>
                            <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                            Sending...
                          </>
                        ) : 'Send Message'}
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="footer py-5 mt-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="h5 mb-3 text-white">Gilang Wahyu Nugraha</h4>
              <p className="mb-0 footer-description">
                Computer Science student at Atma Jaya Yogyakarta University, focusing on web and mobile application development.
              </p>
            </div>
            
            <div className="col-md-4 mb-4 mb-md-0">
              <h4 className="h5 mb-3 text-white">Quick Links</h4>
              <ul className="list-unstyled footer-links">
                <li><a href="#about">About Me</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#services">What I Do</a></li>
                <li><a href="#education">Education</a></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            
            <div className="col-md-4">
              <h4 className="h5 mb-3 text-white">Connect With Me</h4>
              <div className="social-links">
                <a href="https://github.com/gilangwahyun" target="_blank" rel="noopener noreferrer" className="social-link"><i className="bi bi-github"></i></a>
                <a href="https://www.linkedin.com/in/gilang-wahyu-nugraha-75a133319/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="bi bi-linkedin"></i></a>
                <a href="https://www.instagram.com/gilangwnugraha/" target="_blank" rel="noopener noreferrer" className="social-link"><i className="bi bi-instagram"></i></a>
              </div>
            </div>
          </div>
          
          <div className="border-top mt-4 pt-4 text-center">
            <p className="mb-0 copyright-text">© {new Date().getFullYear()} Gilang Wahyu Nugraha. All rights reserved.</p>
          </div>
        </div>
      </footer>
      
      {/* Hidden Printable CV */}
      <div ref={printableCV} className="printable-cv d-none">
        <div className="cv-container">
          <div className="cv-header">
            <div className="cv-photo">
              <img src={profileImage} alt="Gilang Wahyu Nugraha" />
            </div>
            <div className="cv-title">
              <h1>Gilang Wahyu Nugraha</h1>
              <h2>Full Stack Developer</h2>
              <div className="cv-contact">
                <p><i className="bi bi-envelope"></i> contact@example.com</p>
                <p><i className="bi bi-telephone"></i> +62 123 4567 890</p>
                <p><i className="bi bi-github"></i> github.com/gilangwahyun</p>
                <p><i className="bi bi-linkedin"></i> www.linkedin.com/in/gilang-wahyu-nugraha</p>
                <p><i className="bi bi-instagram"></i> instagram.com/gilangwnugraha</p>
              </div>
            </div>
          </div>
          
          <div className="cv-section">
            <h3>Profile</h3>
            <p>Computer Science student at Atma Jaya Yogyakarta University, focusing on web and mobile application development. Passionate about building responsive and user-friendly applications using modern frameworks and technologies.</p>
          </div>
          
          <div className="cv-section">
            <h3>Education</h3>
            <div className="cv-item">
              <div className="cv-item-title">
                <h4>Atma Jaya Yogyakarta University</h4>
                <span className="cv-date">Present</span>
              </div>
              <p>Bachelor of Computer Science</p>
              <p>Currently in 6th semester, focusing on web and mobile application development.</p>
            </div>
          </div>
          
          <div className="cv-section">
            <h3>Skills</h3>
            <div className="cv-skills">
              <div className="cv-skill-category">
                <h4>Frontend Development</h4>
                <ul>
                  <li>React.js (75%)</li>
                  <li>JavaScript (80%)</li>
                  <li>HTML/CSS (85%)</li>
                  <li>Bootstrap (80%)</li>
                </ul>
              </div>
              <div className="cv-skill-category">
                <h4>Backend & Mobile Development</h4>
                <ul>
                  <li>Laravel (70%)</li>
                  <li>PHP (75%)</li>
                  <li>Flutter (65%)</li>
                  <li>MySQL (70%)</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="cv-section">
            <h3>Projects</h3>
            <p>For a detailed list of my projects, please visit my portfolio website.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Skill({ children }) {
  return (
    <span className="badge skill-badge">
      {children}
    </span>
  );
} 