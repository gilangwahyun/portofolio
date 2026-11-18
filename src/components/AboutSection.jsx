export default function AboutSection() {
  return (
    <div className="container py-5" id="about">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div 
            className="card border-0 shadow-lg animate-on-scroll fade-in-up" 
            style={{ 
              backgroundColor: 'var(--dark-card)',
              background: 'linear-gradient(145deg, var(--dark-card) 0%, rgba(35, 35, 45, 1) 100%)'  
            }}
          >
            <div className="card-body p-4 p-lg-5">
              <h2 className="card-title fw-bold mb-4 border-bottom pb-3" style={{ color: 'var(--accent-color)' }}>
                About Me
              </h2>
              <div className="card-text">
                <p>
                  I study Computer Science at Atma Jaya Yogyakarta University in my sixth semester. I started programming with C and Java, learning object-oriented design and core algorithms.
                </p>
                <p>
                  Today I build web applications using React, Vite, Bootstrap, and Laravel with MySQL databases.
                </p>
                <p className="mb-0">
                  I collaborate on university team projects, focusing on responsive interfaces, database schemas, and clean code.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
