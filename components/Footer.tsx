'use client';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-logo gradient-text">Lifestyle</h3>
            <p className="footer-description">
              Your destination for inspiring stories, creative living, and meaningful connections.
              Join our community of dreamers and doers.
            </p>
            <div className="social-links">
              <a href="#" className="social-link" aria-label="Instagram">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Pinterest">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.68 7.9 6.44 9.34-.09-.78-.17-1.98.03-2.83.18-.77 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.49 1.81 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.29.08.1.09.19.07.29-.08.31-.24 1.02-.28 1.17-.05.19-.17.23-.4.14-1.41-.66-2.29-2.72-2.29-4.38 0-3.17 2.3-6.08 6.64-6.08 3.49 0 6.2 2.48 6.2 5.81 0 3.46-2.18 6.25-5.21 6.25-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.85 1.98-1.27 2.66.96.3 1.98.46 3.03.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Twitter">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </a>
              <a href="#" className="social-link" aria-label="Facebook">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Explore</h4>
            <ul className="footer-links">
              <li><a href="/blog">All Articles</a></li>
              <li><a href="/blog">Lifestyle</a></li>
              <li><a href="/blog">Fashion</a></li>
              <li><a href="/blog">Wellness</a></li>
              <li><a href="/blog">Travel</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Company</h4>
            <ul className="footer-links">
              <li><a href="/about">About Us</a></li>
              <li><a href="/team">Our Team</a></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Resources</h4>
            <ul className="footer-links">
              <li><a href="/blog">Blog</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="#newsletter">Newsletter</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="copyright">
            © {currentYear} Lifestyle Stories. All rights reserved.
          </p>
          <div className="legal-links">
            <a href="/privacy">Privacy Policy</a>
            <span className="separator">•</span>
            <a href="/terms">Terms of Service</a>
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer {
          background: var(--color-dark);
          color: rgba(255, 255, 255, 0.8);
          padding: var(--space-5xl) 0 var(--space-xl);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: var(--space-4xl);
          margin-bottom: var(--space-4xl);
          padding-bottom: var(--space-4xl);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .footer-section {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .footer-logo {
          font-size: var(--text-3xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin-bottom: var(--space-sm);
        }

        .footer-description {
          font-size: var(--text-base);
          line-height: 1.6;
          max-width: 90%;
        }

        .social-links {
          display: flex;
          gap: var(--space-md);
          margin-top: var(--space-md);
        }

        .social-link {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-full);
          background: rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          transition: all var(--transition-base);
        }

        .social-link:hover {
          background: var(--gradient-primary);
          transform: translateY(-4px);
        }

        .footer-heading {
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          color: white;
          font-family: var(--font-heading);
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-md);
        }

        .footer-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: color var(--transition-base);
          font-size: var(--text-base);
        }

        .footer-links a:hover {
          color: white;
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: var(--space-xl);
        }

        .copyright {
          font-size: var(--text-sm);
          color: rgba(255, 255, 255, 0.6);
        }

        .legal-links {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          font-size: var(--text-sm);
        }

        .legal-links a {
          color: rgba(255, 255, 255, 0.6);
          transition: color var(--transition-base);
        }

        .legal-links a:hover {
          color: white;
        }

        .separator {
          color: rgba(255, 255, 255, 0.3);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: var(--space-2xl);
          }
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }

          .footer-bottom {
            flex-direction: column;
            gap: var(--space-lg);
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
}
