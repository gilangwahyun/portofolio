import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import reusemartImg from '../assets/reusemart.png';
import reusemartLandingPage from '../assets/ReuseMart-LandingPage.png';
import reusemartLoginPage from '../assets/ReuseMart-LoginPage.png';
import reusemartProductPage from '../assets/ReuseMart-ProductPage.png';
import reusemartAdminPage from '../assets/ReuseMart-AdminPage.png';
import reusemartOwnerPage from '../assets/ReuseMart-OwnerPage.png';
import portfolioImg from '../assets/portofolio.png';

// Data proyek hardcode (sama dengan di ProjectsPage.jsx)
const PROJECTS_DATA = [
  {
    id: 1,
    title: "ReuseMart",
    category: "Web Development",
    description:
      "ReuseMart is an e-commerce platform for buying and selling second-hand goods in Yogyakarta. This project was developed as the final assignment for the Software Project Development course.\n\nThe website enables the general public to sell and purchase pre-owned items in good condition, encouraging reuse and helping reduce waste in the community.",
    thumbnail_url: reusemartImg,
    live_demo_url: "https://reusemartuajy.my.id",
    repo_url: "",
    technologies: ["Laravel", "MySQL", "Bootstrap", "JavaScript", "React"],
    created_at: "2023-09-15",
    pages: [
      {
        image: reusemartLandingPage,
        caption: "ReuseMart main page displaying the latest products."
      },
      {
        image: reusemartLoginPage,
        caption: "User login page to access the ReuseMart system."
      },
      {
        image: reusemartProductPage,
        caption: "Product page showing details, description, and purchase button."
      },
      {
        image: reusemartAdminPage,
        caption: "Admin dashboard for managing users, products, and transactions."
      },
      {
        image: reusemartOwnerPage,
        caption: "Owner dashboard for monitoring sales performance and reports."
      }
    ]
  },
  {
    id: 2,
    title: "Portfolio Website",
    category: "Web Development",
    description:
      "A personal portfolio website built with React and Bootstrap. This website showcases my projects, skills, and experience.\n\nIt features a modern dark theme design that is fully responsive across all devices.",
    thumbnail_url: portfolioImg,
    live_demo_url: "",
    repo_url: "https://github.com/gilangwahyun/portofolio",
    technologies: ["React", "Bootstrap", "JavaScript"],
    created_at: "2023-11-10"
  }
];


export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    // Simulasi loading untuk UX yang lebih baik
    const timer = setTimeout(() => {
      const foundProject = PROJECTS_DATA.find(p => p.id === parseInt(id));
      
      if (foundProject) {
        setProject(foundProject);
      } else {
        setNotFound(true);
      }
      
      setLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [id]);

  if (loading) {
    return (
      <div className="bg-dark-theme min-vh-100 d-flex justify-content-center align-items-center" style={{ paddingTop: '76px' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="bg-dark-theme min-vh-100 d-flex flex-column align-items-center" style={{ paddingTop: '76px' }}>
        <div className="mb-4">Project not found</div>
        <Link to="/projects" className="btn btn-outline-primary">
          &larr; Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-dark-theme min-vh-100 py-5" style={{ paddingTop: '76px' }}>
      <div className="container py-4">
        <div className="card border-0 shadow-lg mx-auto" style={{ 
          maxWidth: '900px',
        }}>
          {/* Project Header */}
          <div className="position-relative" style={{ height: '300px' }}>
            {project.thumbnail_url ? (
              <img 
                src={project.thumbnail_url} 
                alt={project.title} 
                className="card-img-top h-100 object-fit-cover"
              />
            ) : (
              <div className="w-100 h-100 d-flex align-items-center justify-content-center" 
                style={{ background: 'var(--dark-accent)' }}>
                <span className="text-secondary">No Image</span>
              </div>
            )}
          </div>
          
          {/* Project Content */}
          <div className="card-body p-4 p-md-5">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h1 className="h2 fw-bold" style={{ color: 'var(--accent-color)' }}>{project.title}</h1>
              <div className="small">
                {project.created_at}
              </div>
            </div>
            
            {/* Project Category */}
            {project.category && (
              <div className="mb-4">
                <span className="badge bg-primary rounded-pill px-3 py-2">
                  {project.category}
                </span>
              </div>
            )}
            
            {/* Project Description */}
            <div className="mb-4">
              {project.description ? (
                <p style={{ whiteSpace: 'pre-line' }}>{project.description}</p>
              ) : (
                <p className="fst-italic">No description available</p>
              )}
            </div>

            {/* Project Pages (Notion style) */}
            {project.pages && project.pages.length > 0 && (
              <div className="mt-5">
                <h3 className="h5 fw-semibold mb-3" style={{ color: 'var(--accent-color)' }}>Project Pages</h3>
                <div className="d-flex flex-column gap-4">
                  {project.pages.map((page, idx) => (
                    <div key={idx} className="text-center">
                      <img 
                        src={page.image} 
                        alt={`Page ${idx + 1}`} 
                        className="img-fluid rounded shadow-sm mb-2"
                        style={{ maxHeight: "500px", objectFit: "contain" }}
                      />
                      <p className="text-white">{page.caption}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Technologies */}
            {project.technologies && project.technologies.length > 0 && (
              <div className="mb-4">
                <h3 className="h5 fw-semibold mb-3" style={{ color: 'var(--accent-color)' }}>Technologies</h3>
                <div className="d-flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="badge bg-primary bg-opacity-10 text-primary px-3 py-2">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            )}
            
            {/* Project Links */}
            <div className="d-flex flex-wrap gap-3 mt-4">
              {project.live_demo_url && (
                <a 
                  href={project.live_demo_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              )}
              
              {project.repo_url && (
                <a 
                  href={project.repo_url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-outline-light"
                >
                  View Repository
                </a>
              )}
              
              <Link 
                to="/projects" 
                className="btn btn-outline-secondary"
              >
                &larr; Back to Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 