'use client';

import Image from 'next/image';

interface InfluencerProps {
  name: string;
  role: string;
  image: string;
  followers: string;
  engagement: string;
  quote: string;
}

export default function InfluencerHighlight() {
  const influencers: InfluencerProps[] = [
    {
      name: 'Emma Collins',
      role: 'Interior Designer',
      image: '/images/influencer-1.jpg',
      followers: '245K',
      engagement: '8.5%',
      quote: 'Design is not just what it looks like, it\'s how it makes you feel.'
    },
    {
      name: 'Sophie Chen',
      role: 'Fashion Curator',
      image: '/images/influencer-2.jpg',
      followers: '312K',
      engagement: '9.2%',
      quote: 'Style is a way to say who you are without having to speak.'
    },
    {
      name: 'Maya Rodriguez',
      role: 'Wellness Coach',
      image: '/images/influencer-3.jpg',
      followers: '198K',
      engagement: '11.3%',
      quote: 'Wellness is not a destination, it\'s a journey of self-discovery.'
    },
    {
      name: 'Lucas Bennett',
      role: 'Travel Storyteller',
      image: '/images/influencer-4.jpg',
      followers: '427K',
      engagement: '7.8%',
      quote: 'Every journey tells a story, every destination whispers secrets.'
    }
  ];

  return (
    <section className="influencer-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Meet Our Contributors</h2>
          <p className="section-subtitle">
            Visionaries and creatives shaping the conversation around lifestyle and culture
          </p>
        </div>

        <div className="influencer-grid">
          {influencers.map((influencer, index) => (
            <div
              key={index}
              className="influencer-card hover-lift"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="influencer-image-wrapper">
                <Image
                  src={influencer.image}
                  alt={influencer.name}
                  width={400}
                  height={400}
                  className="influencer-image"
                />
                <div className="influencer-glow"></div>
              </div>

              <div className="influencer-content">
                <h3 className="influencer-name">{influencer.name}</h3>
                <p className="influencer-role">{influencer.role}</p>

                <div className="influencer-stats">
                  <div className="stat">
                    <span className="stat-value">{influencer.followers}</span>
                    <span className="stat-label">Followers</span>
                  </div>
                  <div className="stat-divider"></div>
                  <div className="stat">
                    <span className="stat-value">{influencer.engagement}</span>
                    <span className="stat-label">Engagement</span>
                  </div>
                </div>

                <blockquote className="influencer-quote">
                  "{influencer.quote}"
                </blockquote>

                <button className="follow-btn">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 3v14M3 10h14" />
                  </svg>
                  Follow
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .influencer-section {
          padding: var(--space-5xl) 0;
          background: white;
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-4xl);
        }

        .section-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
          margin-bottom: var(--space-md);
        }

        .section-subtitle {
          font-size: var(--text-xl);
          color: var(--color-dark-tertiary);
          max-width: 700px;
          margin: 0 auto;
        }

        .influencer-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-2xl);
        }

        .influencer-card {
          background: var(--color-light-secondary);
          border-radius: var(--border-radius-xl);
          padding: var(--space-xl);
          text-align: center;
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .influencer-image-wrapper {
          position: relative;
          width: 200px;
          height: 200px;
          margin: 0 auto var(--space-xl);
        }

        .influencer-image {
          width: 100%;
          height: 100%;
          border-radius: var(--border-radius-full);
          object-fit: cover;
          border: 4px solid white;
          box-shadow: var(--shadow-lg);
          transition: transform var(--transition-base);
          position: relative;
          z-index: 2;
        }

        .influencer-card:hover .influencer-image {
          transform: scale(1.05);
        }

        .influencer-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 100%;
          height: 100%;
          border-radius: var(--border-radius-full);
          background: var(--gradient-primary);
          opacity: 0;
          filter: blur(20px);
          transition: opacity var(--transition-base);
          z-index: 1;
        }

        .influencer-card:hover .influencer-glow {
          opacity: 0.6;
        }

        .influencer-content {
          position: relative;
        }

        .influencer-name {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-xs);
          color: var(--color-dark);
        }

        .influencer-role {
          font-size: var(--text-base);
          color: var(--color-primary);
          font-weight: var(--weight-medium);
          margin-bottom: var(--space-lg);
        }

        .influencer-stats {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: var(--space-lg);
          margin-bottom: var(--space-lg);
          padding: var(--space-md) 0;
        }

        .stat {
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .stat-value {
          font-size: var(--text-2xl);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
        }

        .stat-label {
          font-size: var(--text-xs);
          color: var(--color-dark-tertiary);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .stat-divider {
          width: 1px;
          height: 40px;
          background: var(--color-light-tertiary);
        }

        .influencer-quote {
          font-size: var(--text-base);
          font-style: italic;
          color: var(--color-dark-tertiary);
          line-height: 1.6;
          margin-bottom: var(--space-xl);
          padding: var(--space-md);
          border-left: 3px solid var(--color-primary);
          text-align: left;
        }

        .follow-btn {
          display: inline-flex;
          align-items: center;
          gap: var(--space-sm);
          padding: var(--space-md) var(--space-xl);
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .follow-btn:hover {
          transform: scale(1.05);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        @media (max-width: 768px) {
          .influencer-grid {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: var(--text-4xl);
          }
        }
      `}</style>
    </section>
  );
}
