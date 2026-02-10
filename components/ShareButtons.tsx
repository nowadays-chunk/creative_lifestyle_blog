'use client';

interface ShareButtonsProps {
    url: string;
    title: string;
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
    const shareLinks = {
        twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
        facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
        linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}`,
        pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`
    };

    const copyLink = () => {
        navigator.clipboard.writeText(url);
        alert('Link copied to clipboard!');
    };

    return (
        <div className="share-buttons">
            <span className="share-label">Share:</span>

            <a href={shareLinks.twitter} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
            </a>

            <a href={shareLinks.facebook} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            </a>

            <a href={shareLinks.linkedin} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                </svg>
            </a>

            <a href={shareLinks.pinterest} target="_blank" rel="noopener noreferrer" className="share-btn" aria-label="Share on Pinterest">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.68 7.9 6.44 9.34-.09-.78-.17-1.98.03-2.83.18-.77 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.49 1.81 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.29.08.1.09.19.07.29-.08.31-.24 1.02-.28 1.17-.05.19-.17.23-.4.14-1.41-.66-2.29-2.72-2.29-4.38 0-3.17 2.3-6.08 6.64-6.08 3.49 0 6.2 2.48 6.2 5.81 0 3.46-2.18 6.25-5.21 6.25-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.85 1.98-1.27 2.66.96.3 1.98.46 3.03.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                </svg>
            </a>

            <button onClick={copyLink} className="share-btn" aria-label="Copy link">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                </svg>
            </button>

            <style jsx>{`
        .share-buttons {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          padding: var(--space-lg);
          background: var(--color-light-secondary);
          border-radius: var(--border-radius-lg);
          margin: var(--space-3xl) 0;
        }

        .share-label {
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          color: var(--color-dark-tertiary);
          margin-right: var(--space-sm);
        }

        .share-btn {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-full);
          background: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark);
          cursor: pointer;
          transition: all var(--transition-base);
          text-decoration: none;
        }

        .share-btn:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }

        @media (max-width: 768px) {
          .share-buttons {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
        </div>
    );
}
