"use client";

import Image from 'next/image';
import Navigation from '../../../components/Navigation';
import ReadingProgress from '../../../components/ReadingProgress';
import TableOfContents from '../../../components/TableOfContents';
import AuthorBio from '../../../components/AuthorBio';
import ShareButtons from '../../../components/ShareButtons';
import RelatedArticles from '../../../components/RelatedArticles';
import Comments from '../../../components/Comments';
import Newsletter from '../../../components/Newsletter';
import Footer from '../../../components/Footer';

// This would typically come from a database or CMS
const article = {
  title: 'The Art of Minimalist Living: Finding Beauty in Simplicity',
  subtitle: 'Discover how embracing minimalism can transform your space, mindset, and daily routine into a sanctuary of intentional living',
  category: 'Lifestyle',
  image: '/images/article-1.jpg',
  author: {
    name: 'Emma Davidson',
    role: 'Lifestyle Editor',
    bio: 'Emma is a minimalist lifestyle expert and interior design consultant with over 10 years of experience helping people create meaningful, clutter-free spaces. Her work has been featured in top design magazines.',
    image: '/images/influencer-1.jpg',
    social: {
      twitter: 'https://twitter.com/emmadavidson',
      instagram: 'https://instagram.com/emmadavidson',
      linkedin: 'https://linkedin.com/in/emmadavidson'
    }
  },
  date: 'February 8, 2026',
  readTime: '8 min read',
  content: `
    <p class="lead-paragraph">In a world that constantly demands more—more possessions, more activities, more everything—the philosophy of minimalist living offers a refreshing counterpoint. It's not about deprivation; it's about intentionality. It's about creating space for what truly matters and letting go of the rest.</p>

    <h2 id="understanding-minimalism">Understanding Modern Minimalism</h2>
    <p>Minimalism has evolved far beyond the stark, sterile aesthetics often portrayed in magazines. Today's minimalist movement is warm, personal, and deeply individual. It's about curating your environment and your life to reflect your values and support your well-being.</p>

    <p>The core principle is simple: every item you own and every commitment you make should serve a purpose or bring you joy. This doesn't mean your home needs to be empty or your schedule sparse—it means being deliberate about what you allow into your life.</p>

    <blockquote class="pull-quote">
      "Minimalism isn't about having less for the sake of less. It's about making room for more of what matters."
      <span class="quote-author">- Emma Davidson</span>
    </blockquote>

    <h2 id="getting-started">Getting Started: The 30-Day Challenge</h2>
    <p>Transitioning to a minimalist lifestyle doesn't happen overnight, nor should it. I recommend a gentle, intentional approach that gives you time to discover what minimalism means for you personally.</p>

    <h3>Week 1: Awareness</h3>
    <p>Before changing anything, spend the first week simply observing. Notice what items you actually use, what space brings you peace, and what causes stress or friction in your daily routine. Keep a journal of these observations—they'll guide your journey.</p>

    <h3>Week 2: The Surface Sweep</h3>
    <p>Start with visible clutter. Clear countertops, coffee tables, and nightstands. You're not getting rid of everything—just creating breathing room. Store items you use regularly in designated spots and notice how this affects your mood and productivity.</p>

    <h3>Week 3: Deep Dive</h3>
    <p>Now tackle one category at a time: clothes, books, kitchen items, or digital clutter. Apply the fundamental question to each item: Does this serve my life right now? Be honest, be thoughtful, and be willing to let go.</p>

    <h3>Week 4: Establish Systems</h3>
    <p>The final week is about creating sustainable habits. Implement a "one in, one out" rule. Establish morning and evening routines that maintain your new space. Design systems that make minimalist living effortless rather than exhausting.</p>

    <h2 id="mindful-spaces">Creating Mindful Spaces</h2>
    <p>Your physical environment profoundly impacts your mental state. A cluttered space creates mental clutter; a thoughtfully designed space fosters clarity and calm.</p>

    <div class="image-gallery">
      <div class="gallery-item">
        <img src="/images/article-2.jpg" alt="Minimalist bedroom design" />
        <span class="caption">A serene bedroom retreat focused on quality over quantity</span>
      </div>
    </div>

    <p>Choose a color palette that brings you peace. For most people, this means neutral tones with occasional pops of color. Invest in quality pieces that will last rather than trendy items that quickly feel dated. Remember: every object in your space should earn its place.</p>

    <h2 id="benefits">The Ripple Effect: Benefits Beyond the Physical</h2>
    <p>The benefits of minimalist living extend far beyond a tidy home. People who embrace minimalism often report:</p>

    <ul class="styled-list">
      <li><strong>Increased mental clarity:</strong> Less visual clutter means fewer distractions and decision fatigue</li>
      <li><strong>Financial freedom:</strong> Spending intentionally leads to natural savings and reduced financial stress</li>
      <li><strong>More time:</strong> Less stuff means less time cleaning, organizing, and maintaining</li>
      <li><strong>Enhanced creativity:</strong> A clear space provides room for new ideas and creative pursuits</li>
      <li><strong>Deeper relationships:</strong> With fewer material distractions, you can focus on meaningful connections</li>
    </ul>

    <h2 id="common-mistakes">Avoiding Common Pitfalls</h2>
    <p>As you embark on this journey, be aware of these common mistakes that can derail your progress:</p>

    <p><strong>Perfectionism:</strong> Your space doesn't need to look like a magazine spread. Minimalism is personal—honor your own needs and preferences.</p>

    <p><strong>Rushing the process:</strong> Take your time. Quick purges often lead to regret and repurchasing. Make thoughtful decisions you can live with.</p>

    <p><strong>Imposing on others:</strong> Your minimalist journey is yours alone. Don't force family members or roommates to adopt your standards. Lead by example and share your space peacefully.</p>

    <h2 id="maintaining">Maintaining the Lifestyle</h2>
    <p>The real challenge isn't creating a minimalist space—it's maintaining it. Build these practices into your routine:</p>

    <p>Conduct monthly reviews of your space and schedule. What's working? What's creeping back in? Adjust as needed. Set boundaries around new acquisitions. Before buying anything, wait 48 hours and ask yourself if it truly adds value to your life.</p>

    <p>Minimalism is not a destination—it's a continuous practice of intentionality. Some seasons of life require more, others less. Stay flexible and compassionate with yourself as your needs evolve.</p>

    <h2 id="conclusion">Your Journey Forward</h2>
    <p>Remember, minimalism is not about creating an empty space—it's about creating space for fullness. It's about removing the excess so you can more fully enjoy what remains. It's a path to living more deliberately, more joyfully, and more authentically.</p>

    <p>Start small. Be patient. Trust the process. Your minimalist journey is an ongoing conversation with yourself about what truly matters. And that's the most beautiful thing about it—the answer is uniquely yours.</p>
  `
};

const tocItems = [
  { id: 'understanding-minimalism', title: 'Understanding Modern Minimalism', level: 1 },
  { id: 'getting-started', title: 'Getting Started: The 30-Day Challenge', level: 1 },
  { id: 'mindful-spaces', title: 'Creating Mindful Spaces', level: 1 },
  { id: 'benefits', title: 'The Ripple Effect', level: 1 },
  { id: 'common-mistakes', title: 'Avoiding Common Pitfalls', level: 1 },
  { id: 'maintaining', title: 'Maintaining the Lifestyle', level: 1 },
  { id: 'conclusion', title: 'Your Journey Forward', level: 1 },
];

const relatedArticles = [
  {
    image: '/images/article-3.jpg',
    category: 'Wellness',
    title: 'Morning Rituals for a Mindful Day',
    excerpt: 'Start your day with intention through these transformative morning practices',
    author: 'Sarah Chen',
    authorImage: '/images/influencer-2.jpg',
    readTime: '6 min read'
  },
  {
    image: '/images/article-4.jpg',
    category: 'Travel',
    title: 'Slow Travel: The Art of Meaningful Journeys',
    excerpt: 'Discover how traveling with intention can transform your perspective',
    author: 'Maya Rodriguez',
    authorImage: '/images/influencer-3.jpg',
    readTime: '7 min read'
  },
  {
    image: '/images/article-5.jpg',
    category: 'Wellness',
    title: 'Digital Minimalism in a Connected World',
    excerpt: 'Finding balance and presence in the age of constant connectivity',
    author: 'Lucas Bennett',
    authorImage: '/images/influencer-4.jpg',
    readTime: '5 min read'
  }
];

export default function ArticlePage() {
  return (
    <>
      <ReadingProgress />
      <Navigation />

      <article className="article-page">
        {/* Hero Section */}
        <div className="article-hero">
          <Image
            src={article.image}
            alt={article.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className="hero-overlay"></div>

          <div className="hero-content container">
            <div className="article-meta">
              <span className="category glass">{article.category}</span>
              <span className="date">{article.date}</span>
              <span className="read-time">{article.readTime}</span>
            </div>

            <h1 className="article-title">{article.title}</h1>
            <p className="article-subtitle">{article.subtitle}</p>
          </div>
        </div>

        {/* Article Content */}
        <div className="container article-container">
          <div className="article-layout">
            {/* Table of Contents - Desktop Only */}
            <aside className="article-sidebar">
              <TableOfContents items={tocItems} />
            </aside>

            {/* Main Content */}
            <div className="article-body">
              <div
                className="article-content"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />

              <ShareButtons
                url={`https://lifestylestories.com/article/minimalist-living`}
                title={article.title}
              />

              <AuthorBio {...article.author} />

              <Comments />
            </div>
          </div>
        </div>

        <RelatedArticles articles={relatedArticles} />

        <Newsletter />
      </article>

      <Footer />

      <style jsx>{`
        .article-page {
          background: white;
        }

        .article-hero {
          position: relative;
          height: 70vh;
          min-height: 500px;
          max-height: 700px;
          display: flex;
          align-items: flex-end;
          overflow: hidden;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0.2) 0%,
            rgba(0, 0, 0, 0.7) 100%
          );
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          padding-bottom: var(--space-4xl);
          color: white;
        }

        .article-meta {
          display: flex;
          align-items: center;
          gap: var(--space-lg);
          margin-bottom: var(--space-xl);
          flex-wrap: wrap;
        }

        .category {
          padding: var(--space-xs) var(--space-lg);
          border-radius: var(--border-radius-full);
          font-size: var(--text-sm);
          font-weight: var(--weight-semibold);
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .date,
        .read-time {
          font-size: var(--text-sm);
          opacity: 0.9;
        }

        .article-title {
          font-size: var(--text-6xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          line-height: 1.1;
          margin-bottom: var(--space-lg);
          max-width: 900px;
        }

        .article-subtitle {
          font-size: var(--text-xl);
          line-height: 1.6;
          opacity: 0.95;
          max-width: 700px;
        }

        .article-container {
          padding-top: var(--space-5xl);
          padding-bottom: var(--space-5xl);
        }

        .article-layout {
          display: grid;
          grid-template-columns: 250px 1fr;
          gap: var(--space-4xl);
          max-width: 1400px;
          margin: 0 auto;
        }

        .article-sidebar {
          position: relative;
        }

        .article-body {
          max-width: 750px;
        }

        .article-content :global(p) {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--color-dark-secondary);
          margin-bottom: var(--space-xl);
        }

        .article-content :global(.lead-paragraph) {
          font-size: var(--text-2xl);
          line-height: 1.6;
          color: var(--color-dark);
          margin-bottom: var(--space-2xl);
          font-weight: var(--weight-medium);
        }

        .article-content :global(h2) {
          font-size: var(--text-4xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-top: var(--space-4xl);
          margin-bottom: var(--space-xl);
          scroll-margin-top: var(--space-3xl);
        }

        .article-content :global(h3) {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-top: var(--space-2xl);
          margin-bottom: var(--space-lg);
        }

        .article-content :global(.pull-quote) {
          font-size: var(--text-3xl);
          font-family: var(--font-heading);
          font-style: italic;
          color: var(--color-primary);
          padding: var(--space-3xl);
          margin: var(--space-4xl) 0;
          background: var(--color-light-secondary);
          border-left: 4px solid var(--color-primary);
          border-radius: var(--border-radius-lg);
          position: relative;
        }

        .article-content :global(.quote-author) {
          display: block;
          font-size: var(--text-base);
          font-style: normal;
          color: var(--color-dark-tertiary);
          margin-top: var(--space-md);
        }

        .article-content :global(.styled-list) {
          list-style: none;
          padding: 0;
          margin: var(--space-2xl) 0;
        }

        .article-content :global(.styled-list li) {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--color-dark-secondary);
          margin-bottom: var(--space-lg);
          padding-left: var(--space-xl);
          position: relative;
        }

        .article-content :global(.styled-list li::before) {
          content: '✦';
          position: absolute;
          left: 0;
          color: var(--color-primary);
          font-size: var(--text-lg);
        }

        .article-content :global(.image-gallery) {
          margin: var(--space-4xl) 0;
        }

        .article-content :global(.gallery-item img) {
          width: 100%;
          border-radius: var(--border-radius-lg);
          margin-bottom: var(--space-md);
        }

        .article-content :global(.caption) {
          display: block;
          font-size: var(--text-sm);
          color: var(--color-dark-tertiary);
          font-style: italic;
          text-align: center;
        }

        @media (max-width: 1024px) {
          .article-layout {
            grid-template-columns: 1fr;
          }

          .article-sidebar {
            display: none;
          }
        }

        @media (max-width: 768px) {
          .article-hero {
            height: 60vh;
            min-height: 400px;
          }

          .article-title {
            font-size: var(--text-4xl);
          }

          .article-subtitle {
            font-size: var(--text-lg);
          }

          .article-content :global(.lead-paragraph) {
            font-size: var(--text-xl);
          }

          .article-content :global(h2) {
            font-size: var(--text-3xl);
          }

          .article-content :global(.pull-quote) {
            font-size: var(--text-2xl);
            padding: var(--space-xl);
          }
        }
      `}</style>
    </>
  );
}
