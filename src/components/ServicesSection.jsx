export default function ServicesSection() {
  return (
    <div className="container py-5" id="services">
      <div className="text-center mb-5 animate-on-scroll fade-in-up">
        <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>What I Do</h2>
        <p className="w-75 mx-auto">Core development areas</p>
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
                Responsive web applications built with React and Laravel, focusing on clean architecture and fast load times.
              </p>
            </div>
          </div>
        </div>
        
        <div className="col-md-6">
          <div className="card h-100 border-0 shadow-lg service-card animate-on-scroll fade-in-up" data-delay="0.5">
            <div className="card-body p-4 text-center">
              <div className="service-icon mb-4">
                <i className="bi bi-database"></i>
              </div>
              <h3 className="h4 mb-3">Database Design</h3>
              <p className="mb-0">
                Normalized MySQL database schemas with structured relations, query optimization, and data integrity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
