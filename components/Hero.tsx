'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Hero() {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero">
            <div
                className="hero-background"
                style={{ transform: `translateY(${scrollY * 0.5}px)` }}
            >
                <Image
                    src="/images/hero-background.jpg"
                    alt="Fashion lifestyle hero"
                    fill
                    priority
                    style={{ objectFit: 'cover' }}
                />
                <div className="hero-overlay"></div>
            </div>

            <div className="hero-content">
                <div className="container">
                    <div className="hero-text">
                        <span className="hero-badge glass">✨ Welcome to Your Story</span>
                        <h1 className="hero-title animate-fade-in-up">
                            Where Style Meets
                            <br />
                            <span className="gradient-text">Storytelling</span>
                        </h1>
                        <p className="hero-subtitle animate-fade-in-up">
                            Discover captivating stories, modern lifestyle trends, and creative inspiration
                            that transforms the everyday into extraordinary.
                        </p>
                        <div className="hero-cta animate-fade-in-up">
                            <button className="btn-primary">Explore Stories</button>
                            <button className="btn-secondary glass">Watch Video</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator animate-float">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
            </div>

            <style jsx>{`
        .hero {
          position: relative;
          height: 100vh;
          min-height: 650px;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        .hero-background {
          position: absolute;
          top: -10%;
          left: 0;
          right: 0;
          bottom: -10%;
          z-index: 0;
          will-change: transform;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.3) 0%,
            rgba(0, 0, 0, 0.6) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          padding: var(--space-2xl) 0;
        }

        .hero-text {
          max-width: 800px;
          text-align: center;
          margin: 0 auto;
        }

        .hero-badge {
          display: inline-block;
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--border-radius-full);
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          color: white;
          margin-bottom: var(--space-lg);
          animation-delay: 0.2s;
        }

        .hero-title {
          font-size: var(--text-7xl);
          font-weight: var(--weight-black);
          color: white;
          margin-bottom: var(--space-lg);
          line-height: 1.1;
          letter-spacing: -0.02em;
          animation-delay: 0.3s;
        }

        .hero-subtitle {
          font-size: var(--text-xl);
          color: rgba(255, 255, 255, 0.9);
          line-height: 1.6;
          margin-bottom: var(--space-2xl);
          font-weight: var(--weight-regular);
          animation-delay: 0.4s;
        }

        .hero-cta {
          display: flex;
          gap: var(--space-md);
          justify-content: center;
          flex-wrap: wrap;
          animation-delay: 0.5s;
        }

        .btn-primary {
          padding: var(--space-md) var(--space-2xl);
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

        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 30px rgba(124, 58, 237, 0.4);
        }

        .btn-secondary {
          padding: var(--space-md) var(--space-2xl);
          background: var(--glass-bg);
          color: white;
          border: 1px solid var(--glass-border);
          border-radius: var(--border-radius-full);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .btn-secondary:hover {
          background: var(--glass-bg-dark);
          transform: translateY(-2px);
        }

        .scroll-indicator {
          position: absolute;
          bottom: var(--space-2xl);
          left: 50%;
          transform: translateX(-50%);
          color: white;
          z-index: 3;
          cursor: pointer;
          opacity: 0.8;
          transition: opacity var(--transition-base);
        }

        .scroll-indicator:hover {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .hero {
            height: 100vh;
            min-height: 600px;
          }

          .hero-title {
            font-size: var(--text-5xl);
          }

          .hero-subtitle {
            font-size: var(--text-lg);
          }

          .hero-cta {
            flex-direction: column;
            align-items: center;
          }

          .btn-primary,
          .btn-secondary {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>
        </section>
    );
}
