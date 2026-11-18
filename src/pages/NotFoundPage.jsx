import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="bg-dark-theme min-vh-100 d-flex flex-column justify-content-center align-items-center" style={{ paddingTop: '76px' }}>
      <h1 className="display-1 fw-bold" style={{ color: 'var(--accent-color)' }}>404</h1>
      <p className="lead mb-4">Page not found</p>
      <Link to="/" className="btn btn-primary px-4 py-2">
        Back to Home
      </Link>
    </div>
  );
}
