'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ParallaxSectionProps {
    title: string;
    subtitle: string;
    content: string;
    image: string;
    reverse?: boolean;
}

export default function ParallaxSection({
    title,
    subtitle,
    content,
    image,
    reverse = false
}: ParallaxSectionProps) {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className={`parallax-section ${reverse ? 'reverse' : ''}`}>
            <div
                className="parallax-background"
                style={{ transform: `translateY(${scrollY * 0.3}px)` }}
            >
                <Image
                    src={image}
                    alt={title}
                    fill
                    style={{ objectFit: 'cover' }}
                />
                <div className="parallax-overlay"></div>
            </div>

            <div className="container">
                <div className="parallax-content glass">
                    <span className="parallax-subtitle">{subtitle}</span>
                    <h2 className="parallax-title">{title}</h2>
                    <p className="parallax-text">{content}</p>
                    <button className="parallax-cta">
                        Discover More
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 10h10M10 5l5 5-5 5" />
                        </svg>
                    </button>
                </div>
            </div>

            <style jsx>{`
        .parallax-section {
          position: relative;
          min-height: 600px;
          display: flex;
          align-items: center;
          overflow: hidden;
          padding: var(--space-5xl) 0;
        }

        .parallax-background {
          position: absolute;
          top: -20%;
          left: 0;
          right: 0;
          bottom: -20%;
          z-index: 0;
          will-change: transform;
        }

        .parallax-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.8) 0%,
            rgba(118, 75, 162, 0.8) 100%
          );
          z-index: 1;
        }

        .container {
          position: relative;
          z-index: 2;
        }

        .parallax-content {
          max-width: 600px;
          padding: var(--space-4xl);
          border-radius: var(--border-radius-xl);
          color: white;
        }

        .parallax-section.reverse .parallax-content {
          margin-left: auto;
        }

        .parallax-subtitle {
          display: block;
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: var(--space-md);
          opacity: 0.9;
        }

        .parallax-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin-bottom: var(--space-lg);
          line-height: 1.2;
        }

        .parallax-text {
          font-size: var(--text-lg);
          line-height: 1.7;
          margin-bottom: var(--space-2xl);
          opacity: 0.95;
        }

        .parallax-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-2xl);
          background: white;
          color: var(--color-dark);
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .parallax-cta:hover {
          transform: translateX(4px);
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .parallax-section {
            min-height: 500px;
          }

          .parallax-content {
            padding: var(--space-2xl);
          }

          .parallax-title {
            font-size: var(--text-4xl);
          }
        }
      `}</style>
        </section>
    );
}
