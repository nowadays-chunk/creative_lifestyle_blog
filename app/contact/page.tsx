'use client';

import { useState } from 'react';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <Navigation />

      <PageHeader
        title="Get In Touch"
        subtitle="Have a question, collaboration idea, or just want to say hello? We'd love to hear from you."
        image="/images/article-2.jpg"
        breadcrumbs={[
          { label: 'Contact', href: '/contact' }
        ]}
        compact
      />

      <main className="contact-page">
        <div className="container contact-container">
          <div className="contact-grid">
            {/* Contact Form */}
            <div className="form-section">
              <h2 className="section-title">Send us a message</h2>

              {submitted && (
                <div className="success-message glass">
                  <span className="success-icon">✓</span>
                  Thank you! We'll get back to you within 24-48 hours.
                </div>
              )}

              <form className="contact-form glass" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Emma Davidson"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="emma@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a topic</option>
                    <option value="general">General Inquiry</option>
                    <option value="collaboration">Collaboration</option>
                    <option value="press">Press / Media</option>
                    <option value="partnerships">Partnerships</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                <button type="submit" className="submit-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="info-section">
              <div className="info-card glass">
                <h3 className="info-title">Contact Information</h3>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Email</div>
                    <div className="info-value">hello@lifestylestories.com</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Location</div>
                    <div className="info-value">San Francisco, CA</div>
                  </div>
                </div>

                <div className="info-item">
                  <div className="info-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12,6 12,12 16,14" />
                    </svg>
                  </div>
                  <div>
                    <div className="info-label">Response Time</div>
                    <div className="info-value">24-48 hours</div>
                  </div>
                </div>
              </div>

              <div className="info-card glass">
                <h3 className="info-title">Follow Us</h3>
                <p className="follow-text">
                  Stay connected and get daily inspiration on social media
                </p>

                <div className="social-links">
                  <a href="#" className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
                      <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                    </svg>
                    Instagram
                  </a>

                  <a href="#" className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.68 7.9 6.44 9.34-.09-.78-.17-1.98.03-2.83.18-.77 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.49 1.81 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.29.08.1.09.19.07.29-.08.31-.24 1.02-.28 1.17-.05.19-.17.23-.4.14-1.41-.66-2.29-2.72-2.29-4.38 0-3.17 2.3-6.08 6.64-6.08 3.49 0 6.2 2.48 6.2 5.81 0 3.46-2.18 6.25-5.21 6.25-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.85 1.98-1.27 2.66.96.3 1.98.46 3.03.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                    </svg>
                    Pinterest
                  </a>

                  <a href="#" className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                    </svg>
                    Twitter
                  </a>

                  <a href="#" className="social-btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                    </svg>
                    Facebook
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Newsletter />
      </main>

      <Footer />

      <style jsx>{`
        .contact-page {
          background: white;
        }

        .contact-container {
          padding: var(--space-5xl) 0;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1.5fr 1fr;
          gap: var(--space-4xl);
        }

        .section-title {
          font-size: var(--text-4xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
          margin-bottom: var(--space-2xl);
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          border-radius: var(--border-radius-md);
          margin-bottom: var(--space-xl);
          background: rgba(16, 185, 129, 0.1);
          border-left: 4px solid #10b981;
          animation: fadeInUp 0.3s ease-out;
        }

        .success-icon {
          width: 30px;
          height: 30px;
          border-radius: var(--border-radius-full);
          background: #10b981;
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
          flex-shrink: 0;
        }

        .contact-form {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
        }

        .form-group {
          margin-bottom: var(--space-xl);
        }

        .form-group label {
          display: block;
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          color: var(--color-dark);
          margin-bottom: var(--space-sm);
        }

        .form-group input,
        .form-group select,
        .form-group textarea {
          width: 100%;
          padding: var(--space-md);
          border: 2px solid var(--color-light-tertiary);
          border-radius: var(--border-radius-md);
          font-size: var(--text-base);
          font-family: var(--font-body);
          transition: border-color var(--transition-base);
        }

        .form-group input:focus,
        .form-group select:focus,
        .form-group textarea:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .form-group textarea {
          resize: vertical;
        }

        .submit-btn {
          width: 100%;
          padding: var(--space-lg) var(--space-2xl);
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        .info-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
        }

        .info-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
        }

        .info-title {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-xl);
        }

        .info-item {
          display: flex;
          gap: var(--space-md);
          margin-bottom: var(--space-lg);
        }

        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-md);
          background: var(--color-light-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-primary);
          flex-shrink: 0;
        }

        .info-label {
          font-size: var(--text-sm);
          color: var(--color-dark-tertiary);
          margin-bottom: var(--space-xs);
        }

        .info-value {
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          color: var(--color-dark);
        }

        .follow-text {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
          margin-bottom: var(--space-xl);
        }

        .social-links {
          display: flex;
          flex-direction: column;
          gap: var(--space-sm);
        }

        .social-btn {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-md);
          background: var(--color-light-secondary);
          border-radius: var(--border-radius-md);
          color: var(--color-dark);
          font-weight: var(--weight-medium);
          transition: all var(--transition-base);
          text-decoration: none;
        }

        .social-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateX(4px);
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }

          .info-section {
            order: 2;
          }

          .form-section {
            order: 1;
          }
        }
      `}</style>
    </>
  );
}
