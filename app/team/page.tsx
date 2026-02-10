"use client";

import Image from 'next/image';
import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Newsletter from '../../components/Newsletter';
import Footer from '../../components/Footer';

const team = [
  {
    name: 'Emma Davidson',
    role: 'Editor-in-Chief',
    image: '/images/influencer-1.jpg',
    bio: 'With over 15 years in lifestyle journalism, Emma shapes our editorial vision and curates the stories that inspire our community.',
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Sophie Chen',
    role: 'Creative Director',
    image: '/images/influencer-2.jpg',
    bio: 'Sophie brings our stories to life through stunning visuals and innovative design that has earned multiple industry awards.',
    social: {
      instagram: '#',
      linkedin: '#',
      pinterest: '#'
    }
  },
  {
    name: 'Maya Rodriguez',
    role: 'Wellness Editor',
    image: '/images/influencer-3.jpg',
    bio: 'A certified yoga instructor and nutritionist, Maya guides our wellness content with expertise and authentic passion.',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  },
  {
    name: 'Lucas Bennett',
    role: 'Travel Editor',
    image: '/images/influencer-4.jpg',
    bio: 'Having visited over 75 countries, Lucas curates travel stories that inspire meaningful adventures around the globe.',
    social: {
      instagram: '#',
      linkedin: '#',
      twitter: '#'
    }
  },
  {
    name: 'Aisha Patel',
    role: 'Fashion Editor',
    image: '/images/influencer-1.jpg',
    bio: 'Former fashion buyer turned editor, Aisha brings insider knowledge of trends, sustainability, and timeless style.',
    social: {
      instagram: '#',
      pinterest: '#'
    }
  },
  {
    name: 'James Morrison',
    role: 'Home & Design Editor',
    image: '/images/influencer-2.jpg',
    bio: 'Interior architect with an eye for spaces that inspire. James helps readers create homes they truly love.',
    social: {
      instagram: '#',
      linkedin: '#'
    }
  }
];

export default function TeamPage() {
  return (
    <>
      <Navigation />

      <PageHeader
        title="Meet Our Team"
        subtitle="The passionate creators, editors, and storytellers behind Lifestyle Stories"
        image="/images/hero-background.jpg"
        breadcrumbs={[
          { label: 'Team', href: '/team' }
        ]}
      />

      <main className="team-page">
        <div className="container team-container">
          <div className="team-intro">
            <p className="intro-text">
              Our team is a diverse collective of writers, photographers, editors, and lifestyle experts who share a common passion: creating content that inspires intentional, beautiful living. Each member brings unique expertise and perspective to help you navigate the modern lifestyle landscape.
            </p>
          </div>

          <div className="team-grid">
            {team.map((member, index) => (
              <div key={index} className="team-member glass">
                <div className="member-image-wrapper">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={300}
                    height={300}
                    className="member-image"
                  />
                  <div className="member-overlay">
                    <div className="member-social">
                      {member.social.instagram && (
                        <a href={member.social.instagram} aria-label="Instagram">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
                          </svg>
                        </a>
                      )}
                      {member.social.linkedin && (
                        <a href={member.social.linkedin} aria-label="LinkedIn">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                          </svg>
                        </a>
                      )}
                      {member.social.twitter && (
                        <a href={member.social.twitter} aria-label="Twitter">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                          </svg>
                        </a>
                      )}
                      {member.social.pinterest && (
                        <a href={member.social.pinterest} aria-label="Pinterest">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 2C6.48 2 2 6.48 2 12c0 4.26 2.68 7.9 6.44 9.34-.09-.78-.17-1.98.03-2.83.18-.77 1.17-4.97 1.17-4.97s-.3-.6-.3-1.48c0-1.39.81-2.43 1.81-2.43.85 0 1.27.64 1.27 1.41 0 .86-.55 2.15-.83 3.35-.24 1 .5 1.81 1.49 1.81 1.79 0 3.17-1.89 3.17-4.61 0-2.41-1.73-4.1-4.21-4.1-2.87 0-4.55 2.15-4.55 4.37 0 .87.33 1.79.75 2.29.08.1.09.19.07.29-.08.31-.24 1.02-.28 1.17-.05.19-.17.23-.4.14-1.41-.66-2.29-2.72-2.29-4.38 0-3.17 2.3-6.08 6.64-6.08 3.49 0 6.2 2.48 6.2 5.81 0 3.46-2.18 6.25-5.21 6.25-1.02 0-1.98-.53-2.31-1.15l-.63 2.4c-.23.88-.85 1.98-1.27 2.66.96.3 1.98.46 3.03.46 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                <div className="member-info">
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-role">{member.role}</p>
                  <p className="member-bio">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <Newsletter />
      </main>

      <Footer />

      <style jsx>{`
        .team-page {
          background: white;
        }

        .team-container {
          padding: var(--space-5xl) 0;
        }

        .team-intro {
          max-width: 800px;
          margin: 0 auto var(--space-5xl);
          text-align: center;
        }

        .intro-text {
          font-size: var(--text-xl);
          line-height: 1.8;
          color: var(--color-dark-secondary);
        }

        .team-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: var(--space-3xl);
        }

        .team-member {
          padding: var(--space-xl);
          border-radius: var(--border-radius-lg);
          transition: all var(--transition-base);
        }

        .team-member:hover {
          transform: translateY(-8px);
          box-shadow: var(--shadow-xl);
        }

        .member-image-wrapper {
          position: relative;
          margin-bottom: var(--space-lg);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .team-member :global(.member-image) {
          width: 100%;
          height: auto;
          display: block;
          transition: transform var(--transition-base);
        }

        .member-overlay {
          position: absolute;
          inset: 0;
          background: rgba(124, 58, 237, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity var(--transition-base);
        }

        .team-member:hover .member-overlay {
          opacity: 1;
        }

        .team-member:hover :global(.member-image) {
          transform: scale(1.05);
        }

        .member-social {
          display: flex;
          gap: var(--space-md);
        }

        .member-social a {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-full);
          background: white;
          color: var(--color-primary);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all var(--transition-base);
        }

        .member-social a:hover {
          transform: scale(1.1);
          box-shadow: var(--shadow-md);
        }

        .member-info {
          text-align: center;
        }

        .member-name {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-xs);
        }

        .member-role {
          font-size: var(--text-base);
          color: var(--color-primary);
          font-weight: var(--weight-semibold);
          margin-bottom: var(--space-md);
        }

        .member-bio {
          font-size: var(--text-base);
          line-height: 1.6;
          color: var(--color-dark-tertiary);
        }

        @media (max-width: 768px) {
          .team-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
