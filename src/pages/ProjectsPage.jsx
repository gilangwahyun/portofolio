import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS_DATA } from '../data/projects';
import Footer from '../components/Footer';


export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState(['all']);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setProjects(PROJECTS_DATA);
    
    // Extract unique categories
    const uniqueCategories = ['all'];
    PROJECTS_DATA.forEach(project => {
      if (project.category && !uniqueCategories.includes(project.category)) {
        uniqueCategories.push(project.category);
      }
    });
    setCategories(uniqueCategories);
    
    setLoading(false);
  }, []);

  // Filter projects by category
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="bg-dark-theme min-vh-100" style={{ paddingTop: '76px' }}>
      <div className="container py-5">
        <h1 className="text-center fw-bold mb-4" style={{ color: 'var(--accent-color)' }}>
          Projects
        </h1>
        <p className="text-center mb-5">Web applications and development projects</p>
        
        {/* Category filter */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`btn ${
                activeCategory === category
                  ? 'btn-primary'
                  : 'btn-outline-primary'
              } rounded-pill px-4`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {loading ? (
          <div className="text-center my-5">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center text-muted py-5">No projects found</div>
        ) : (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
            {filteredProjects.map(project => (
              <div className="col" key={project.id}>
                <ProjectCard project={project} />
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <Link to={`/projects/${project.id}`} className="text-decoration-none">
      <div className="card h-100 shadow-lg border-0">
        <div className="position-relative" style={{ height: '200px' }}>
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
          {project.category && (
            <span className="position-absolute top-0 end-0 m-2 badge bg-primary rounded-pill">
              {project.category}
            </span>
          )}
        </div>
        <div className="card-body">
          <h5 className="card-title text-white">{project.title}</h5>
          <p className="card-text small mb-3" style={{ 
            display: '-webkit-box', 
            WebkitLineClamp: 3, 
            WebkitBoxOrient: 'vertical', 
            overflow: 'hidden' 
          }}>
            {project.description || 'No description available'}
          </p>
          <div className="d-flex flex-wrap gap-1 mb-3">
            {project.technologies && project.technologies.map((tech, index) => (
              <span key={index} className="badge bg-primary bg-opacity-10 text-primary">
                {tech}
              </span>
            ))}
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <span className="text-primary small">
              View Details
            </span>
            {project.live_demo_url && (
              <a 
                href={project.live_demo_url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-sm btn-outline-primary"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
