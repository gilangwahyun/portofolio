export default function EducationSection() {
  return (
    <div className="container py-5" id="education">
      <div className="text-center mb-5 animate-on-scroll fade-in-up">
        <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Education</h2>
        <p className="w-75 mx-auto">Academic background</p>
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
                Sixth semester coursework includes Data Structures, Algorithms, Object-Oriented Programming, Database Systems, and Web Programming.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
