'use client';

import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

export default function TrendingCarousel() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    const trendingItems = [
        {
            image: '/images/article-1.jpg',
            category: 'Trending Now',
            title: 'The Future of Sustainable Fashion',
            description: 'How eco-conscious designers are revolutionizing the industry'
        },
        {
            image: '/images/article-2.jpg',
            category: 'Most Read',
            title: 'Digital Nomad Lifestyle Guide',
            description: 'Everything you need to know about working remotely from paradise'
        },
        {
            image: '/images/article-3.jpg',
            category: 'Editors Pick',
            title: 'Wellness Trends Shaping 2026',
            description: 'From breathwork to biohacking, explore what\'s next in health'
        },
        {
            image: '/images/article-4.jpg',
            category: 'Popular',
            title: 'Art Meets Technology',
            description: 'The intersection of creativity and innovation in modern design'
        }
    ];

    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % trendingItems.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, trendingItems.length]);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollAmount = currentIndex * carouselRef.current.clientWidth;
            carouselRef.current.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }, [currentIndex]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % trendingItems.length);
        setIsAutoPlaying(false);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + trendingItems.length) % trendingItems.length);
        setIsAutoPlaying(false);
    };

    return (
        <section className="trending-carousel">
            <div className="container">
                <div className="carousel-header">
                    <h2 className="carousel-title">Trending Stories</h2>
                    <div className="carousel-controls">
                        <button className="control-btn" onClick={prevSlide} aria-label="Previous">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M15 18l-6-6 6-6" />
                            </svg>
                        </button>
                        <button className="control-btn" onClick={nextSlide} aria-label="Next">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M9 18l6-6-6-6" />
                            </svg>
                        </button>
                    </div>
                </div>

                <div
                    className="carousel-wrapper"
                    ref={carouselRef}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                >
                    {trendingItems.map((item, index) => (
                        <div key={index} className="carousel-item">
                            <div className="carousel-image img-zoom-container">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={1200}
                                    height={600}
                                    className="img-zoom"
                                />
                                <div className="carousel-overlay"></div>
                            </div>
                            <div className="carousel-content">
                                <span className="carousel-badge glass">{item.category}</span>
                                <h3 className="carousel-item-title">{item.title}</h3>
                                <p className="carousel-description">{item.description}</p>
                                <button className="carousel-cta">
                                    Explore
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M6 12l4-4-4-4" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="carousel-dots">
                    {trendingItems.map((_, index) => (
                        <button
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
        .trending-carousel {
          padding: var(--space-5xl) 0;
          background: white;
          overflow: hidden;
        }

        .carousel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--space-2xl);
        }

        .carousel-title {
          font-size: var(--text-4xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
        }

        .carousel-controls {
          display: flex;
          gap: var(--space-sm);
        }

        .control-btn {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-full);
          background: var(--color-light-secondary);
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all var(--transition-base);
          color: var(--color-dark);
        }

        .control-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: scale(1.1);
        }

        .carousel-wrapper {
          display: flex;
          overflow-x: hidden;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          gap: var(--space-xl);
        }

        .carousel-item {
          flex: 0 0 100%;
          scroll-snap-align: start;
          position: relative;
          border-radius: var(--border-radius-xl);
          overflow: hidden;
          height: 500px;
        }

        .carousel-image {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }

        .carousel-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.8) 100%
          );
          z-index: 1;
        }

        .carousel-content {
          position: relative;
          z-index: 2;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: var(--space-3xl);
          color: white;
        }

        .carousel-badge {
          display: inline-block;
          width: fit-content;
          padding: var(--space-sm) var(--space-lg);
          border-radius: var(--border-radius-full);
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          margin-bottom: var(--space-md);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .carousel-item-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin-bottom: var(--space-md);
          max-width: 700px;
        }

        .carousel-description {
          font-size: var(--text-xl);
          margin-bottom: var(--space-xl);
          max-width: 600px;
          opacity: 0.95;
        }

        .carousel-cta {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-2xl);
          background: white;
          color: var(--color-dark);
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-lg);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          width: fit-content;
          font-family: var(--font-body);
        }

        .carousel-cta:hover {
          background: var(--color-primary);
          color: white;
          transform: translateX(4px);
        }

        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: var(--space-sm);
          margin-top: var(--space-2xl);
        }

        .dot {
          width: 12px;
          height: 12px;
          border-radius: var(--border-radius-full);
          background: var(--color-light-tertiary);
          border: none;
          cursor: pointer;
          transition: all var(--transition-base);
          padding: 0;
        }

        .dot.active {
          background: var(--color-primary);
          width: 32px;
        }

        .dot:hover {
          background: var(--color-primary-light);
        }

        @media (max-width: 768px) {
          .carousel-header {
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-md);
          }

          .carousel-item {
            height: 400px;
          }

          .carousel-content {
            padding: var(--space-xl);
          }

          .carousel-item-title {
            font-size: var(--text-3xl);
          }

          .carousel-description {
            font-size: var(--text-base);
          }
        }
      `}</style>
        </section>
    );
}
