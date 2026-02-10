'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navigation ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="nav-content">
          <div className="nav-logo">
            <h1 className="logo-text">
              <span className="gradient-text">Lifestyle</span>
            </h1>
          </div>

          <ul className="nav-menu">
            <li><a href="/" className="nav-link">Home</a></li>
            <li><a href="/blog" className="nav-link">Blog</a></li>
            <li><a href="/about" className="nav-link">About</a></li>
            <li><a href="/team" className="nav-link">Team</a></li>
            <li><a href="/contact" className="nav-link">Contact</a></li>
          </ul>

          <div className="nav-actions">
            <button className="search-btn" aria-label="Search">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="8.5" cy="8.5" r="5.5" />
                <path d="M12.5 12.5L17 17" />
              </svg>
            </button>
            <button className="subscribe-btn">Subscribe</button>

            <button
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M3 12h18M3 6h18M3 18h18" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-menu glass-dark">
          <ul className="mobile-nav-menu">
            <li><a href="#stories" onClick={() => setIsMobileMenuOpen(false)}>Stories</a></li>
            <li><a href="#lifestyle" onClick={() => setIsMobileMenuOpen(false)}>Lifestyle</a></li>
            <li><a href="#fashion" onClick={() => setIsMobileMenuOpen(false)}>Fashion</a></li>
            <li><a href="#wellness" onClick={() => setIsMobileMenuOpen(false)}>Wellness</a></li>
            <li><a href="#travel" onClick={() => setIsMobileMenuOpen(false)}>Travel</a></li>
          </ul>
        </div>
      )}

      <style jsx>{`
        .navigation {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          padding: var(--space-lg) 0;
          transition: all var(--transition-base);
        }

        .navigation.scrolled {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          -webkit-backdrop-filter: blur(var(--glass-blur));
          border-bottom: 1px solid var(--glass-border);
          box-shadow: var(--shadow-base);
          padding: var(--space-md) 0;
        }

        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .logo-text {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin: 0;
        }

        .nav-menu {
          display: flex;
          gap: var(--space-xl);
          list-style: none;
          margin: 0;
          padding: 0;
        }

        .nav-link {
          color: white;
          font-weight: var(--weight-medium);
          font-size: var(--text-base);
          transition: color var(--transition-base);
          position: relative;
        }

        .navigation.scrolled .nav-link {
          color: var(--color-dark);
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--gradient-primary);
          transform: scaleX(0);
          transition: transform var(--transition-base);
        }

        .nav-link:hover::after {
          transform: scaleX(1);
        }

        .nav-actions {
          display: flex;
          align-items: center;
          gap: var(--space-md);
        }

        .search-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-full);
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-base);
        }

        .navigation.scrolled .search-btn {
          border-color: var(--color-light-tertiary);
          color: var(--color-dark);
        }

        .search-btn:hover {
          background: var(--color-primary);
          border-color: var(--color-primary);
          color: white;
          transform: scale(1.05);
        }

        .subscribe-btn {
          padding: var(--space-sm) var(--space-xl);
          background: white;
          color: var(--color-dark);
          border: none;
          border-radius: var(--border-radius-full);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .navigation.scrolled .subscribe-btn {
          background: var(--gradient-primary);
          color: white;
        }

        .subscribe-btn:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        .mobile-menu-btn {
          display: none;
          background: transparent;
          border: none;
          color: white;
          cursor: pointer;
          padding: var(--space-xs);
        }

        .navigation.scrolled .mobile-menu-btn {
          color: var(--color-dark);
        }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          right: 0;
          padding: var(--space-xl);
          animation: fadeIn 0.3s ease-out;
        }

        .mobile-nav-menu {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .mobile-nav-menu a {
          color: white;
          font-size: var(--text-xl);
          font-weight: var(--weight-semibold);
          display: block;
          padding: var(--space-sm) 0;
        }

        @media (max-width: 768px) {
          .nav-menu {
            display: none;
          }

          .subscribe-btn {
            display: none;
          }

          .mobile-menu-btn {
            display: block;
          }
        }
      `}</style>
    </nav>
  );
}
