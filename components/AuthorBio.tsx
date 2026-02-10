import Image from 'next/image';

interface AuthorBioProps {
    name: string;
    bio: string;
    image: string;
    role: string;
    social?: {
        twitter?: string;
        instagram?: string;
        linkedin?: string;
    };
}

export default function AuthorBio({ name, bio, image, role, social }: AuthorBioProps) {
    return (
        <div className="author-bio glass">
            <Image
                src={image}
                alt={name}
                width={80}
                height={80}
                className="author-image"
            />

            <div className="author-info">
                <div className="author-header">
                    <h3 className="author-name">{name}</h3>
                    <span className="author-role">{role}</span>
                </div>

                <p className="author-bio-text">{bio}</p>

                {social && (
                    <div className="author-social">
                        {social.twitter && (
                            <a href={social.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                </svg>
                            </a>
                        )}
                        {social.instagram && (
                            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" fill="white" />
                                    <circle cx="17.5" cy="6.5" r="1.5" fill="white" />
                                </svg>
                            </a>
                        )}
                        {social.linkedin && (
                            <a href={social.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                                    <circle cx="4" cy="4" r="2" />
                                </svg>
                            </a>
                        )}
                    </div>
                )}
            </div>

            <style jsx>{`
        .author-bio {
          display: flex;
          gap: var(--space-xl);
          padding: var(--space-2xl);
          border-radius: var(--border-radius-lg);
          margin: var(--space-4xl) 0;
        }

        .author-bio :global(.author-image) {
          border-radius: var(--border-radius-full);
          object-fit: cover;
          flex-shrink: 0;
        }

        .author-info {
          flex: 1;
        }

        .author-header {
          margin-bottom: var(--space-sm);
        }

        .author-name {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-xs);
          color: var(--color-dark);
        }

        .author-role {
          font-size: var(--text-sm);
          color: var(--color-primary);
          font-weight: var(--weight-medium);
        }

        .author-bio-text {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
          line-height: 1.6;
          margin-bottom: var(--space-md);
        }

        .author-social {
          display: flex;
          gap: var(--space-md);
        }

        .author-social a {
          width: 40px;
          height: 40px;
          border-radius: var(--border-radius-full);
          background: var(--color-light-secondary);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--color-dark);
          transition: all var(--transition-base);
        }

        .author-social a:hover {
          background: var(--color-primary);
          color: white;
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .author-bio {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .author-social {
            justify-content: center;
          }
        }
      `}</style>
        </div>
    );
}
