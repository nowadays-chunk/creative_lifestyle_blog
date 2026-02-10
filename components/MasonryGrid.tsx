'use client';

import ArticleCard from './ArticleCard';

export default function MasonryGrid() {
  const articles = [
    {
      image: '/images/article-1.jpg',
      category: 'Interior Design',
      title: 'Minimalist Living: Finding Beauty in Simplicity',
      excerpt: 'Discover how embracing minimalism can transform your space and mindset, creating harmony between form and function.',
      author: 'Emma Collins',
      authorImage: '/images/influencer-1.jpg',
      readTime: '5 min read',
      featured: true
    },
    {
      image: '/images/article-2.jpg',
      category: 'Fashion',
      title: 'Fall Fashion Essentials for 2026',
      excerpt: 'Curate your perfect autumn wardrobe with timeless pieces that blend style and sustainability.',
      author: 'Sophie Chen',
      authorImage: '/images/influencer-2.jpg',
      readTime: '4 min read'
    },
    {
      image: '/images/article-3.jpg',
      category: 'Wellness',
      title: 'Morning Rituals That Transform Your Day',
      excerpt: 'Start your day with intention through simple practices that nourish body and mind.',
      author: 'Maya Rodriguez',
      authorImage: '/images/influencer-3.jpg',
      readTime: '6 min read'
    },
    {
      image: '/images/article-4.jpg',
      category: 'Travel',
      title: 'Hidden Gems of Mediterranean Coastlines',
      excerpt: 'Explore breathtaking destinations off the beaten path where culture meets natural beauty.',
      author: 'Lucas Bennett',
      authorImage: '/images/influencer-4.jpg',
      readTime: '8 min read'
    },
    {
      image: '/images/article-5.jpg',
      category: 'Wellness',
      title: 'The Art of Mindful Movement',
      excerpt: 'Connect with your body through yoga practices that celebrate presence and self-discovery.',
      author: 'Maya Rodriguez',
      authorImage: '/images/influencer-3.jpg',
      readTime: '5 min read'
    },
    {
      image: '/images/article-6.jpg',
      category: 'Creative',
      title: 'Crafting Your Creative Workspace',
      excerpt: 'Design an inspiring environment that fuels creativity and enhances productivity.',
      author: 'Emma Collins',
      authorImage: '/images/influencer-1.jpg',
      readTime: '7 min read'
    }
  ];

  return (
    <section className="masonry-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Stories</h2>
          <p className="section-subtitle">
            Curated narratives that inspire, inform, and ignite your imagination
          </p>
        </div>

        <div className="masonry-grid">
          {articles.map((article, index) => (
            <div
              key={index}
              className="masonry-item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArticleCard {...article} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .masonry-section {
          padding: var(--space-5xl) 0;
          background: var(--color-light-secondary);
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
          max-width: 600px;
          margin: 0 auto;
        }

        .masonry-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
          grid-auto-rows: auto;
          gap: var(--space-xl);
        }

        .masonry-item {
          opacity: 0;
          animation: fadeInUp 0.6s ease-out forwards;
        }

        @media (min-width: 1200px) {
          .masonry-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 768px) {
          .masonry-section {
            padding: var(--space-3xl) 0;
          }

          .masonry-grid {
            grid-template-columns: 1fr;
            gap: var(--space-lg);
          }

          .section-title {
            font-size: var(--text-4xl);
          }

          .section-subtitle {
            font-size: var(--text-lg);
          }
        }
      `}</style>
    </section>
  );
}
