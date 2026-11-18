import { useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
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

  useEffect(() => {
    emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setContactForm(prev => ({
      ...prev,
      [name === 'from_name' ? 'name' : 
       name === 'reply_to' ? 'email' : name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus({ submitted: true, success: false, message: 'Sending message...' });

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

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

    emailjs.send(serviceId, templateId, templateParams)
      .then(() => {
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

        setTimeout(() => {
          setFormStatus({
            submitted: false,
            success: false,
            message: ''
          });
        }, 5000);
      })
      .catch(() => {
        setFormStatus({
          submitted: true,
          success: false,
          message: 'Failed to send message. Please try again later.'
        });
      });
  };

  return (
    <div className="container py-5" id="contact">
      <div className="text-center mb-5 animate-on-scroll fade-in-up">
        <h2 className="display-5 fw-bold" style={{ color: 'var(--accent-color)' }}>Get In Touch</h2>
        <p className="w-75 mx-auto">Questions or project collaboration? Send a message.</p>
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
                      />
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
  );
}
