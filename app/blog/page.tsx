import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import ArticleCard from '../../components/ArticleCard';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const articles = [
    {
        image: '/images/article-1.jpg',
        category: 'Interior',
        title: 'The Art of Minimalist Living',
        excerpt: 'Discover how embracing minimalism can transform your space, mindset, and daily routine',
        author: 'Emma Davidson',
        authorImage: '/images/influencer-1.jpg',
        readTime: '8 min read'
    },
    {
        image: '/images/article-2.jpg',
        category: 'Fashion',
        title: 'Sustainable Style: Building a Timeless Wardrobe',
        excerpt: 'Curate a capsule collection that reflects your values and lasts for years',
        author: 'Aisha Patel',
        authorImage: '/images/influencer-2.jpg',
        readTime: '6 min read'
    },
    {
        image: '/images/article-3.jpg',
        category: 'Wellness',
        title: 'Morning Rituals for a Mindful Day',
        excerpt: 'Start each day with intention through these transformative morning practices',
        author: 'Maya Rodriguez',
        authorImage: '/images/influencer-3.jpg',
        readTime: '7 min read'
    },
    {
        image: '/images/article-4.jpg',
        category: 'Travel',
        title: 'Slow Travel: The Art of Meaningful Journeys',
        excerpt: 'Discover how traveling with intention can transform your perspective on the world',
        author: 'Lucas Bennett',
        authorImage: '/images/influencer-4.jpg',
        readTime: '9 min read'
    },
    {
        image: '/images/article-5.jpg',
        category: 'Wellness',
        title: 'Digital Minimalism in a Connected World',
        excerpt: 'Finding balance and presence in the age of constant connectivity',
        author: 'Maya Rodriguez',
        authorImage: '/images/influencer-3.jpg',
        readTime: '5 min read'
    },
    {
        image: '/images/article-6.jpg',
        category: 'Creative',
        title: 'Finding Your Creative Flow',
        excerpt: 'Unlock your creative potential through daily practices and intentional space',
        author: 'Sophie Chen',
        authorImage: '/images/influencer-2.jpg',
        readTime: '6 min read'
    }
];

const categories = ['All Stories', 'Lifestyle', 'Fashion', 'Wellness', 'Travel', 'Interior', 'Creative'];

export default function BlogPage() {
    return (
        <>
            <Navigation />

            <PageHeader
                title="Stories & Insights"
                subtitle="Explore our collection of curated articles on lifestyle, wellness, design, and intentional living"
                image="/images/hero-background.jpg"
                breadcrumbs={[
                    { label: 'Blog', href: '/blog' }
                ]}
                compact
            />

            <main className="blog-page">
                <div className="container blog-container">
                    {/* Category Filter */}
                    <div className="category-filter">
                        {categories.map((cat, index) => (
                            <button
                                key={index}
                                className={`category-btn ${index === 0 ? 'active' : ''}`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Articles Grid */}
                    <div className="articles-grid">
                        {articles.map((article, index) => (
                            <div key={index} className="article-item">
                                <ArticleCard {...article} />
                            </div>
                        ))}
                    </div>

                    {/* Load More */}
                    <div className="load-more">
                        <button className="load-more-btn">
                            Load More Stories
                        </button>
                    </div>
                </div>

                <Newsletter />
            </main>

            <Footer />

            <style jsx>{`
        .blog-page {
          background: white;
        }

        .blog-container {
          padding: var(--space-5xl) 0;
        }

        .category-filter {
          display: flex;
          gap: var(--space-md);
          margin-bottom: var(--space-4xl);
          flex-wrap: wrap;
          justify-content: center;
        }

        .category-btn {
          padding: var(--space-sm) var(--space-xl);
          border: 2px solid var(--color-light-tertiary);
          background: white;
          color: var(--color-dark-tertiary);
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-medium);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .category-btn:hover,
        .category-btn.active {
          background: var(--color-primary);
          color: white;
          border-color: var(--color-primary);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: var(--space-3xl);
          margin-bottom: var(--space-5xl);
        }

        .load-more {
          text-align: center;
        }

        .load-more-btn {
          padding: var(--space-lg) var(--space-3xl);
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

        .load-more-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
}
