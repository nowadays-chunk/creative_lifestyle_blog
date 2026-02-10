import ArticleCard from './ArticleCard';

interface RelatedArticle {
    image: string;
    category: string;
    title: string;
    excerpt: string;
    author: string;
    authorImage: string;
    readTime: string;
}

interface RelatedArticlesProps {
    articles: RelatedArticle[];
}

export default function RelatedArticles({ articles }: RelatedArticlesProps) {
    return (
        <section className="related-articles">
            <div className="section-header">
                <h2 className="section-title">You May Also Like</h2>
                <p className="section-subtitle">Continue exploring our curated stories</p>
            </div>

            <div className="articles-grid">
                {articles.map((article, index) => (
                    <div key={index} className="article-wrapper">
                        <ArticleCard {...article} />
                    </div>
                ))}
            </div>

            <style jsx>{`
        .related-articles {
          padding: var(--space-5xl) 0;
          background: var(--color-light-secondary);
          border-radius: var(--border-radius-xl);
          margin-top: var(--space-5xl);
        }

        .section-header {
          text-align: center;
          margin-bottom: var(--space-3xl);
        }

        .section-title {
          font-size: var(--text-4xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
          margin-bottom: var(--space-md);
        }

        .section-subtitle {
          font-size: var(--text-lg);
          color: var(--color-dark-tertiary);
        }

        .articles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-xl);
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 var(--space-xl);
        }

        @media (max-width: 768px) {
          .articles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </section>
    );
}
