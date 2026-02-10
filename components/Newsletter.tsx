'use client';

import { useState } from 'react';

export default function Newsletter() {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            // Simulate subscription
            setStatus('success');
            setEmail('');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className="newsletter">
            <div className="container">
                <div className="newsletter-content glass">
                    <div className="newsletter-text">
                        <h2 className="newsletter-title">
                            Join Our Creative Community
                        </h2>
                        <p className="newsletter-subtitle">
                            Get exclusive stories, style tips, and lifestyle inspiration delivered to your inbox every week.
                            No spam, just beautiful content.
                        </p>
                    </div>

                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="email-input"
                                required
                            />
                            <button type="submit" className="submit-btn">
                                Subscribe
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 10h10M10 5l5 5-5 5" />
                                </svg>
                            </button>
                        </div>

                        {status === 'success' && (
                            <p className="success-message animate-fade-in">
                                🎉 Welcome to the community! Check your inbox for confirmation.
                            </p>
                        )}
                    </form>

                    <div className="newsletter-features">
                        <div className="feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 11l3 3L22 4" />
                                <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                            </svg>
                            <span>Weekly curated content</span>
                        </div>
                        <div className="feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                                <circle cx="8.5" cy="7" r="4" />
                                <path d="M20 8v6M23 11h-6" />
                            </svg>
                            <span>Exclusive early access</span>
                        </div>
                        <div className="feature">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                            <span>Premium resources</span>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        .newsletter {
          padding: var(--space-5xl) 0;
          background: var(--color-dark);
          position: relative;
          overflow: hidden;
        }

        .newsletter::before {
          content: '';
          position: absolute;
          top: -50%;
          right: -20%;
          width: 500px;
          height: 500px;
          background: var(--gradient-primary);
          border-radius: var(--border-radius-full);
          filter: blur(100px);
          opacity: 0.3;
        }

        .newsletter-content {
          position: relative;
          padding: var(--space-4xl);
          border-radius: var(--border-radius-xl);
          text-align: center;
          max-width: 800px;
          margin: 0 auto;
        }

        .newsletter-text {
          margin-bottom: var(--space-2xl);
        }

        .newsletter-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: white;
          margin-bottom: var(--space-md);
        }

        .newsletter-subtitle {
          font-size: var(--text-lg);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          max-width: 600px;
          margin: 0 auto;
        }

        .newsletter-form {
          margin-bottom: var(--space-2xl);
        }

        .form-group {
          display: flex;
          gap: var(--space-md);
          max-width: 600px;
          margin: 0 auto;
        }

        .email-input {
          flex: 1;
          padding: var(--space-lg) var(--space-xl);
          border-radius: var(--border-radius-full);
          border: 2px solid rgba(255, 255, 255, 0.2);
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          color: white;
          font-size: var(--text-base);
          font-family: var(--font-body);
          transition: all var(--transition-base);
        }

        .email-input::placeholder {
          color: rgba(255, 255, 255, 0.6);
        }

        .email-input:focus {
          outline: none;
          border-color: white;
          background: rgba(255, 255, 255, 0.15);
        }

        .submit-btn {
          padding: var(--space-lg) var(--space-2xl);
          background: white;
          color: var(--color-dark);
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          font-family: var(--font-body);
          white-space: nowrap;
        }

        .submit-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        .success-message {
          margin-top: var(--space-lg);
          padding: var(--space-md);
          background: rgba(34, 197, 94, 0.2);
          border: 1px solid rgba(34, 197, 94, 0.5);
          border-radius: var(--border-radius-md);
          color: #86efac;
          font-weight: var(--weight-medium);
        }

        .newsletter-features {
          display: flex;
          justify-content: center;
          gap: var(--space-2xl);
          flex-wrap: wrap;
        }

        .feature {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          color: rgba(255, 255, 255, 0.9);
          font-size: var(--text-sm);
        }

        .feature svg {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .newsletter-content {
            padding: var(--space-2xl);
          }

          .newsletter-title {
            font-size: var(--text-4xl);
          }

          .form-group {
            flex-direction: column;
          }

          .submit-btn {
            width: 100%;
            justify-content: center;
          }

          .newsletter-features {
            flex-direction: column;
            align-items: center;
            gap: var(--space-md);
          }
        }
      `}</style>
        </section>
    );
}
