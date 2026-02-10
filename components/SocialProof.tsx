'use client';

export default function SocialProof() {
  return (
    <section className="social-proof">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card glass animate-scale-in">
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="stat-number">850K+</h3>
            <p className="stat-label">Monthly Readers</p>
          </div>

          <div className="stat-card glass animate-scale-in" style={{ animationDelay: '0.1s' }}>
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
              </svg>
            </div>
            <h3 className="stat-number">1.2M</h3>
            <p className="stat-label">Social Engagement</p>
          </div>

          <div className="stat-card glass animate-scale-in" style={{ animationDelay: '0.2s' }}>
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
            </div>
            <h3 className="stat-number">4.8/5</h3>
            <p className="stat-label">Reader Rating</p>
          </div>

          <div className="stat-card glass animate-scale-in" style={{ animationDelay: '0.3s' }}>
            <div className="stat-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <h3 className="stat-number">12K+</h3>
            <p className="stat-label">Articles Published</p>
          </div>
        </div>

        <div className="instagram-section">
          <h3 className="instagram-title">
            Follow Our Journey
            <span className="instagram-handle">@lifestylestories</span>
          </h3>
          <div className="instagram-grid">
            {[1, 2, 3, 4, 5, 6].map((num) => (
              <div key={num} className="instagram-item img-zoom-container">
                <img
                  src={`/images/article-${num}.jpg`}
                  alt={`Instagram post ${num}`}
                  className="img-zoom"
                />
                <div className="instagram-overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="white">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                  <span>2.4K</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .social-proof {
          padding: var(--space-5xl) 0;
          background: var(--gradient-primary);
          color: white;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
          margin-bottom: var(--space-5xl);
        }

        .stat-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: all var(--transition-base);
        }

        .stat-card:hover {
          transform: translateY(-8px);
        }

        .stat-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 64px;
          height: 64px;
          background: rgba(255, 255, 255, 0.2);
          border-radius: var(--border-radius-full);
          margin-bottom: var(--space-lg);
        }

        .stat-number {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin-bottom: var(--space-sm);
        }

        .stat-label {
          font-size: var(--text-base);
          opacity: 0.9;
        }

        .instagram-section {
          text-align: center;
        }

        .instagram-title {
          font-size: var(--text-3xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-md);
          display: flex;
          flex-direction: column;
          gap: var(--space-xs);
        }

        .instagram-handle {
          font-size: var(--text-xl);
          opacity: 0.9;
          font-weight: var(--weight-regular);
        }

        .instagram-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: var(--space-md);
          margin-top: var(--space-2xl);
        }

        .instagram-item {
          position: relative;
          aspect-ratio: 1;
          border-radius: var(--border-radius-md);
          overflow: hidden;
          cursor: pointer;
        }

        .instagram-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .instagram-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--space-sm);
          opacity: 0;
          transition: opacity var(--transition-base);
          color: white;
          font-weight: var(--weight-semibold);
        }

        .instagram-item:hover .instagram-overlay {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: var(--space-md);
          }

          .instagram-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
}
