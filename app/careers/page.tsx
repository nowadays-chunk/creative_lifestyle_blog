import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const jobs = [
    {
        title: 'Senior Lifestyle Editor',
        department: 'Editorial',
        location: 'San Francisco, CA / Remote',
        type: 'Full-time',
        description: 'Lead our lifestyle content strategy, manage a team of writers, and create compelling narratives that resonate with our audience.'
    },
    {
        title: 'Social Media Manager',
        department: 'Marketing',
        location: 'Remote',
        type: 'Full-time',
        description: 'Build and engage our social community across Instagram, Pinterest, and emerging platforms with creativity and data-driven strategies.'
    },
    {
        title: 'Visual Designer',
        department: 'Creative',
        location: 'San Francisco, CA',
        type: 'Full-time',
        description: 'Create stunning visual experiences that bring our stories to life through photography direction, graphic design, and brand development.'
    },
    {
        title: 'Freelance Writer - Wellness',
        department: 'Editorial',
        location: 'Remote',
        type: 'Contract',
        description: 'Contribute authentic wellness content rooted in expertise and personal experience. Topics include mindfulness, fitness, nutrition, and mental health.'
    }
];

const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Market-leading compensation packages' },
    { icon: '🏥', title: 'Health & Wellness', description: 'Comprehensive health, dental, vision coverage' },
    { icon: '🏖️', title: 'Unlimited PTO', description: 'Take the time you need to recharge' },
    { icon: '💻', title: 'Remote-First', description: 'Work from anywhere in the world' },
    { icon: '📚', title: 'Learning Budget', description: '$2000 annual professional development' },
    { icon: '🌱', title: 'Growth', description: 'Clear career pathways and mentorship' }
];

export default function CareersPage() {
    return (
        <>
            <Navigation />

            <PageHeader
                title="Join Our Team"
                subtitle="Help us build the future of lifestyle content. We're looking for passionate creators and strategic thinkers."
                image="/images/article-3.jpg"
                breadcrumbs={[
                    { label: 'Careers', href: '/careers' }
                ]}
            />

            <main className="careers-page">
                {/* Culture Section */}
                <section className="culture-section">
                    <div className="container">
                        <h2 className="section-title">Why Join Us</h2>
                        <p className="section-subtitle">
                            We're building more than a publication—we're creating a movement toward intentional, beautiful living. Join a team that values creativity, authenticity, and balance.
                        </p>

                        <div className="benefits-grid">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="benefit-card glass">
                                    <div className="benefit-icon">{benefit.icon}</div>
                                    <h3 className="benefit-title">{benefit.title}</h3>
                                    <p className="benefit-description">{benefit.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Open Positions */}
                <section className="positions-section container">
                    <h2 className="section-title">Open Positions</h2>
                    <p className="section-subtitle">
                        Find your perfect role and apply today
                    </p>

                    <div className="positions-list">
                        {jobs.map((job, index) => (
                            <div key={index} className="job-card glass">
                                <div className="job-header">
                                    <div>
                                        <h3 className="job-title">{job.title}</h3>
                                        <div className="job-meta">
                                            <span className="job-department">{job.department}</span>
                                            <span className="job-location">📍 {job.location}</span>
                                            <span className="job-type">{job.type}</span>
                                        </div>
                                    </div>
                                    <button className="apply-btn">Apply Now</button>
                                </div>
                                <p className="job-description">{job.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="no-openings glass">
                        <p>
                            Don't see the right role? <strong>We're always looking for talented creators.</strong>
                            <br />
                            Send your portfolio and cover letter to{' '}
                            <a href="mailto:careers@lifestylestories.com">careers@lifestylestories.com</a>
                        </p>
                    </div>
                </section>

                <Newsletter />
            </main>

            <Footer />

            <style jsx>{`
        .careers-page {
          background: white;
        }

        .culture-section {
          padding: var(--space-5xl) 0;
          background: var(--color-light-secondary);
        }

        .section-title {
          font-size: var(--text-5xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          color: var(--color-dark);
          margin-bottom: var(--space-lg);
          text-align: center;
        }

        .section-subtitle {
          font-size: var(--text-xl);
          color: var(--color-dark-tertiary);
          margin-bottom: var(--space-4xl);
          text-align: center;
          max-width: 700px;
          margin-left: auto;
          margin-right: auto;
        }

        .benefits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--space-xl);
        }

        .benefit-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .benefit-icon {
          font-size: var(--text-6xl);
          margin-bottom: var(--space-md);
        }

        .benefit-title {
          font-size: var(--text-xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-sm);
        }

        .benefit-description {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
        }

        .positions-section {
          padding: var(--space-5xl) 0;
        }

        .positions-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-xl);
          margin-bottom: var(--space-4xl);
        }

        .job-card {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
        }

        .job-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          gap: var(--space-xl);
          margin-bottom: var(--space-lg);
        }

        .job-title {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-sm);
        }

        .job-meta {
          display: flex;
          gap: var(--space-lg);
          flex-wrap: wrap;
          font-size: var(--text-sm);
          color: var(--color-dark-tertiary);
        }

        .job-department {
          font-weight: var(--weight-semibold);
          color: var(--color-primary);
        }

        .job-description {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--color-dark-secondary);
        }

        .apply-btn {
          padding: var(--space-md) var(--space-xl);
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          white-space: nowrap;
          font-family: var(--font-body);
        }

        .apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(124, 58, 237, 0.3);
        }

        .no-openings {
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          text-align: center;
        }

        .no-openings p {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--color-dark-secondary);
        }

        .no-openings a {
          color: var(--color-primary);
          font-weight: var(--weight-semibold);
          text-decoration: underline;
        }

        @media (max-width: 768px) {
          .job-header {
            flex-direction: column;
          }

          .apply-btn {
            width: 100%;
          }

          .benefits-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
        </>
    );
}
