"use client";

import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="not-found-page">
            <div className="container">
                <div className="not-found-content">
                    <div className="error-code">404</div>
                    <h1 className="error-title">Page Not Found</h1>
                    <p className="error-description">
                        Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
                    </p>

                    <div className="action-buttons">
                        <Link href="/" className="primary-btn">
                            Return Home
                        </Link>
                        <Link href="/blog" className="secondary-btn">
                            Browse Articles
                        </Link>
                    </div>

                    <div className="popular-links">
                        <h3>Popular Pages</h3>
                        <ul>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/blog">Blog</Link></li>
                            <li><Link href="/contact">Contact</Link></li>
                            <li><Link href="/team">Our Team</Link></li>
                        </ul>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .not-found-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          padding: var(--space-2xl);
        }

        .not-found-content {
          text-align: center;
          color: white;
          max-width: 600px;
        }

        .error-code {
          font-size: 180px;
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          line-height: 1;
          margin-bottom: var(--space-xl);
          background: linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.7) 100%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .error-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-lg);
        }

        .error-description {
          font-size: var(--text-xl);
          opacity: 0.95;
          margin-bottom: var(--space-3xl);
          line-height: 1.6;
        }

        .action-buttons {
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          margin-bottom: var(--space-4xl);
          flex-wrap: wrap;
        }

        .primary-btn,
        .secondary-btn {
          padding: var(--space-lg) var(--space-3xl);
          border-radius: var(--border-radius-full);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          transition: all var(--transition-base);
          text-decoration: none;
          font-family: var(--font-body);
        }

        .primary-btn {
          background: white;
          color: var(--color-primary);
        }

        .primary-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        }

        .secondary-btn {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(10px);
          color: white;
          border: 2px solid white;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .popular-links {
          padding-top: var(--space-3xl);
          border-top: 2px solid rgba(255, 255, 255, 0.2);
        }

        .popular-links h3 {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-lg);
        }

        .popular-links ul {
          list-style: none;
          padding: 0;
          display: flex;
          gap: var(--space-lg);
          justify-content: center;
          flex-wrap: wrap;
        }

        .popular-links a {
          color: white;
          font-size: var(--text-base);
          opacity: 0.9;
          transition: opacity var(--transition-base);
        }

        .popular-links a:hover {
          opacity: 1;
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .error-code {
            font-size: 120px;
          }

          .error-title {
            font-size: var(--text-4xl);
          }

          .error-description {
            font-size: var(--text-lg);
          }

          .action-buttons {
            flex-direction: column;
          }

          .primary-btn,
          .secondary-btn {
            width: 100%;
          }

          .popular-links ul {
            flex-direction: column;
            gap: var(--space-sm);
          }
        }
      `}</style>
        </div>
    );
}
