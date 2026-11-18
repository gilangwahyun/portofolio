import { FaReact, FaJsSquare, FaHtml5, FaBootstrap, FaLaravel, FaPhp, FaDatabase } from 'react-icons/fa';
import { SiNextdotjs } from 'react-icons/si';

export default function SkillsSection() {
  return (
    <div className="skills-section py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5 animate-on-scroll fade-in-up">
          <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Technical Skills</h2>
          <p className="w-75 mx-auto">Technologies I work with</p>
        </div>

        <div className="row g-4 text-center">
          <div className="col-md-3 animate-on-scroll fade-in-up">
            <FaReact size={50} color="#61DBFB" />
            <h5 className="mt-3 text-white">React.js</h5>
          </div>
          <div className="col-md-3 animate-on-scroll fade-in-up">
            <SiNextdotjs size={50} color="#ffffff" />
            <h5 className="mt-3 text-white">Next.js</h5>
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
  );
}
