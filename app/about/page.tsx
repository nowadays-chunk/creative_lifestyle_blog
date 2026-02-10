import Image from 'next/image';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

export default function AboutPage() {
    return (
        <>
            <Navigation />

            <PageHeader
                title="About Lifestyle Stories"
                subtitle="Where style meets storytelling. We're on a mission to inspire authentic, intentional living through beautiful narratives and expert guidance."
                image="/images/hero-background.jpg"
                breadcrumbs={[
                    { label: 'About', href: '/about' }
                ]}
            />

            <main className="about-page">
                {/* Our Story Section */}
                <section className="story-section container">
                    <div className="section-content">
                        <div className="content-block">
                            <h2 className="section-title">Our Story</h2>
                            <p className="section-text">
                                Founded in 2020, Lifestyle Stories began with a simple vision: to create a space where modern living meets timeless wisdom. In a digital world overflowing with content, we saw the need for something different—stories that inspire, guide, and elevate.
                            </p>
                            <p className="section-text">
                                What started as a small blog has grown into a vibrant community of creators, thinkers, and seekers who believe that life is meant to be lived beautifully and intentionally. From minimalist design to mindful wellness, sustainable fashion to transformative travel, we cover the full spectrum of contemporary lifestyle.
                            </p>
                            <p className="section-text">
                                Today, we're proud to reach over 850,000 monthly readers worldwide, partnering with leading brands and emerging voices to bring you the content that matters.
                            </p>
                        </div>

                        <div className="image-block">
                            <Image
                                src="/images/article-1.jpg"
                                alt="Our creative workspace"
                                width={600}
                                height={400}
                                className="story-image"
                            />
                        </div>
                    </div>
                </section>

                {/* Values Section */}
                <section className="values-section">
                    <div className="container">
                        <h2 className="section-title centered">Our Core Values</h2>
                        <p className="section-subtitle centered">
                            The principles that guide everything we create
                        </p>

                        <div className="values-grid">
                            <div className="value-card glass">
                                <div className="value-icon">✦</div>
                                <h3 className="value-title">Authenticity</h3>
                                <p className="value-description">
                                    We believe in real stories, honest perspectives, and content that reflects genuine experience rather than manufactured perfection.
                                </p>
                            </div>

                            <div className="value-card glass">
                                <div className="value-icon">◆</div>
                                <h3 className="value-title">Beauty</h3>
                                <p className="value-description">
                                    Visual excellence isn't superficial—it's essential. We're committed to creating experiences that delight the senses and inspire.
                                </p>
                            </div>

                            <div className="value-card glass">
                                <div className="value-icon">❋</div>
                                <h3 className="value-title">Intentionality</h3>
                                <p className="value-description">
                                    Every choice matters. We curate content that helps our readers live more deliberately, from the products they choose to the practices they adopt.
                                </p>
                            </div>

                            <div className="value-card glass">
                                <div className="value-icon">✺</div>
                                <h3 className="value-title">Community</h3>
                                <p className="value-description">
                                    Great ideas emerge through connection. We foster a space where diverse voices come together to learn, share, and grow.
                                </p>
                            </div>

                            <div className="value-card glass">
                                <div className="value-icon">❃</div>
                                <h3 className="value-title">Innovation</h3>
                                <p className="value-description">
                                    While we honor timeless wisdom, we're always exploring new approaches, formats, and technologies to serve our community better.
                                </p>
                            </div>

                            <div className="value-card glass">
                                <div className="value-icon">✤</div>
                                <h3 className="value-title">Sustainability</h3>
                                <p className="value-description">
                                    Beautiful living shouldn't come at the planet's expense. We prioritize content that honors both personal and planetary wellbeing.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Stats Section */}
                <section className="stats-section container">
                    <div className="stats-grid">
                        <div className="stat-card glass">
                            <div className="stat-number">850K+</div>
                            <div className="stat-label">Monthly Readers</div>
                        </div>

                        <div className="stat-card glass">
                            <div className="stat-number">12K+</div>
                            <div className="stat-label">Articles Published</div>
                        </div>

                        <div className="stat-card glass">
                            <div className="stat-number">1.2M</div>
                            <div className="stat-label">Social Followers</div>
                        </div>

                        <div className="stat-card glass">
                            <div className="stat-number">150+</div>
                            <div className="stat-label">Expert Contributors</div>
                        </div>
                    </div>
                </section>

                {/* Mission Section */}
                <section className="mission-section">
                    <div className="container">
                        <div className="mission-content glass">
                            <h2 className="section-title">Our Mission</h2>
                            <p className="mission-text">
                                To be the world's most trusted source for lifestyle inspiration and guidance—creating content that empowers people to live beautifully, intentionally, and authentically.
                            </p>
                            <p className="mission-text">
                                We envision a world where conscious choices, creative expression, and meaningful connections are accessible to everyone. Through expertly crafted stories, stunning imagery, and practical wisdom, we're building that future one article at a time.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Team Preview */}
                <section className="team-preview container">
                    <h2 className="section-title centered">Meet Our Team</h2>
                    <p className="section-subtitle centered">
                        Passionate creators, editors, and storytellers dedicated to bringing you the best
                    </p>

                    <div className="team-grid">
                        <div className="team-member">
                            <Image
                                src="/images/influencer-1.jpg"
                                alt="Emma Davidson"
                                width={200}
                                height={200}
                                className="member-image"
                            />
                            <h3 className="member-name">Emma Davidson</h3>
                            <p className="member-role">Editor-in-Chief</p>
                        </div>

                        <div className="team-member">
                            <Image
                                src="/images/influencer-2.jpg"
                                alt="Sophie Chen"
                                width={200}
                                height={200}
                                className="member-image"
                            />
                            <h3 className="member-name">Sophie Chen</h3>
                            <p className="member-role">Creative Director</p>
                        </div>

                        <div className="team-member">
                            <Image
                                src="/images/influencer-3.jpg"
                                alt="Maya Rodriguez"
                                width={200}
                                height={200}
                                className="member-image"
                            />
                            <h3 className="member-name">Maya Rodriguez</h3>
                            <p className="member-role">Wellness Editor</p>
                        </div>

                        <div className="team-member">
                            <Image
                                src="/images/influencer-4.jpg"
                                alt="Lucas Bennett"
                                width={200}
                                height={200}
                                className="member-image"
                            />
                            <h3 className="member-name">Lucas Bennett</h3>
                            <p className="member-role">Travel Editor</p>
                        </div>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />

            <style jsx>{`
        .about-page {
          background: white;
        }

        .story-section {
          padding: var(--space-5xl) 0;
        }

        .section-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--space-4xl);
          align-items: center;
        }

        .section-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
          margin-bottom: var(--space-xl);
        }

        .section-title.centered {
          text-align: center;
        }

        .section-subtitle {
          font-size: var(--text-xl);
          color: var(--color-dark-tertiary);
          margin-bottom: var(--space-4xl);
        }

        .section-subtitle.centered {
          text-align: center;
        }

        .section-text {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--color-dark-secondary);
          margin-bottom: var(--space-lg);
        }

        .story-section :global(.story-image) {
          width: 100%;
          height: auto;
          border-radius: var(--border-radius-xl);
          box-shadow: var(--shadow-lg);
        }

        .values-section {
          padding: var(--space-5xl) 0;
          background: var(--color-light-secondary);
        }

        .values-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: var(--space-xl);
        }

        .value-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
          transition: all var(--transition-base);
        }

        .value-card:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .value-icon {
          font-size: var(--text-6xl);
          color: var(--color-primary);
          margin-bottom: var(--space-lg);
        }

        .value-title {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-md);
        }

        .value-description {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--color-dark-tertiary);
        }

        .stats-section {
          padding: var(--space-5xl) 0;
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-xl);
        }

        .stat-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .stat-number {
          font-size: var(--text-6xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          background: var(--gradient-primary);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          margin-bottom: var(--space-sm);
        }

        .stat-label {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
        }

        .mission-section {
          padding: var(--space-5xl) 0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        }

        .mission-content {
          padding: var(--space-4xl);
          border-radius: var(--border-radius-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .mission-text {
          font-size: var(--text-xl);
          line-height: 1.8;
          color: var(--color-dark-secondary);
          margin-bottom: var(--space-lg);
        }

        .team-preview {
          padding: var(--space-5xl) 0;
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: var(--space-3xl);
          max-width: 900px;
          margin: 0 auto;
        }

        .team-member {
          text-align: center;
        }

        .team-member :global(.member-image) {
          border-radius: var(--border-radius-full);
          margin-bottom: var(--space-lg);
          box-shadow: var(--shadow-md);
        }

        .member-name {
          font-size: var(--text-xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-xs);
        }

        .member-role {
          font-size: var(--text-base);
          color: var(--color-primary);
          font-weight: var(--weight-medium);
        }

        @media (max-width: 768px) {
          .section-content {
            grid-template-columns: 1fr;
          }

          .section-title {
            font-size: var(--text-4xl);
          }

          .values-grid,
          .stats-grid,
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
}
