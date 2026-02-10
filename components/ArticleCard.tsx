'use client';

import Image from 'next/image';

interface ArticleCardProps {
  image: string;
  category: string;
  title: string;
  excerpt: string;
  author: string;
  authorImage: string;
  readTime: string;
  featured?: boolean;
}

export default function ArticleCard({
  image,
  category,
  title,
  excerpt,
  author,
  authorImage,
  readTime,
  featured = false
}: ArticleCardProps) {
  return (
    <article className={`article-card ${featured ? 'featured' : ''}`}>
      <div className="article-image img-zoom-container">
        <Image
          src={image}
          alt={title}
          width={800}
          height={600}
          className="img-zoom"
        />
        <div className="article-overlay"></div>
        <div className="article-category glass">
          {category}
        </div>
      </div>

      <div className="article-content">
        <h3 className="article-title">{title}</h3>
        <p className="article-excerpt">{excerpt}</p>

        <div className="article-meta">
          <div className="author-info">
            <Image
              src={authorImage}
              alt={author}
              width={32}
              height={32}
              className="author-avatar"
            />
            <span className="author-name">{author}</span>
          </div>
          <span className="read-time">{readTime}</span>
        </div>

        <button className="read-more">
          Read Story
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 12l4-4-4-4" />
          </svg>
        </button>
      </div>

      <style jsx>{`
        .article-card {
          background: white;
          border-radius: var(--border-radius-lg);
          overflow: hidden;
          box-shadow: var(--shadow-base);
          transition: all var(--transition-base);
          cursor: pointer;
          height: 100%;
          display: flex;
          flex-direction: column;
        }

        .article-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .article-card.featured {
          grid-column: span 2;
          grid-row: span 2;
        }

        .article-image {
          position: relative;
          width: 100%;
          height: 300px;
          background: var(--color-light-tertiary);
        }

        .article-card.featured .article-image {
          height: 500px;
        }

        .article-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.3) 100%);
          opacity: 0;
          transition: opacity var(--transition-base);
          z-index: 1;
        }

        .article-card:hover .article-overlay {
          opacity: 1;
        }

        .article-category {
          position: absolute;
          top: var(--space-md);
          left: var(--space-md);
          padding: var(--space-xs) var(--space-md);
          border-radius: var(--border-radius-full);
          font-size: var(--text-xs);
          font-weight: var(--weight-semibold);
          color: white;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        .article-content {
          padding: var(--space-xl);
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .article-title {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-md);
          color: var(--color-dark);
          line-height: 1.3;
          transition: color var(--transition-base);
        }

        .article-card.featured .article-title {
          font-size: var(--text-4xl);
        }

        .article-card:hover .article-title {
          color: var(--color-primary);
        }

        .article-excerpt {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
          line-height: 1.6;
          margin-bottom: var(--space-lg);
          flex: 1;
        }

        .article-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--space-lg);
          padding-top: var(--space-md);
          border-top: 1px solid var(--color-light-tertiary);
        }

        .author-info {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
        }

        .author-avatar {
          border-radius: var(--border-radius-full);
          width: 32px;
          height: 32px;
          object-fit: cover;
        }

        .author-name {
          font-size: var(--text-sm);
          font-weight: var(--weight-medium);
          color: var(--color-dark);
        }

        .read-time {
          font-size: var(--text-sm);
          color: var(--color-dark-tertiary);
        }

        .read-more {
          display: inline-flex;
          align-items: center;
          gap: var(--space-xs);
          background: none;
          border: none;
          color: var(--color-primary);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: gap var(--transition-base);
          padding: 0;
          font-family: var(--font-body);
        }

        .read-more:hover {
          gap: var(--space-sm);
        }

        @media (max-width: 768px) {
          .article-card.featured {
            grid-column: span 1;
            grid-row: span 1;
          }

          .article-card.featured .article-image {
            height: 300px;
          }

          .article-card.featured .article-title {
            font-size: var(--text-2xl);
          }
        }
      `}</style>
    </article>
  );
}
