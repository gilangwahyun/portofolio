import { Link } from 'react-router-dom';

export default function ProjectsPreview() {
  return (
    <div className="container py-5" id="projects-preview">
      <div className="text-center mb-5 animate-on-scroll fade-in-up">
        <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Projects</h2>
        <p className="w-75 mx-auto mb-4">
          Featured applications and university projects.
        </p>
        <Link to="/projects" className="btn btn-primary px-4 py-2">
          View All Projects
        </Link>
      </div>
    </div>
  );
}
