import Image from 'next/image';
import Breadcrumbs from './Breadcrumbs';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    image?: string;
    breadcrumbs?: { label: string; href: string }[];
    compact?: boolean;
}

export default function PageHeader({
    title,
    subtitle,
    image,
    breadcrumbs,
    compact = false
}: PageHeaderProps) {
    return (
        <header className={`page-header ${compact ? 'compact' : ''}`}>
            {image && (
                <div className="header-background">
                    <Image
                        src={image}
                        alt={title}
                        fill
                        style={{ objectFit: 'cover' }}
                        priority
                    />
                    <div className="header-overlay"></div>
                </div>
            )}

            <div className="container header-content">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <Breadcrumbs items={breadcrumbs} />
                )}

                <h1 className="page-title">{title}</h1>

                {subtitle && (
                    <p className="page-subtitle">{subtitle}</p>
                )}
            </div>

            <style jsx>{`
        .page-header {
          position: relative;
          padding: var(--space-5xl) 0 var(--space-4xl);
          background: var(--gradient-primary);
          color: white;
          overflow: hidden;
        }

        .page-header.compact {
          padding: var(--space-3xl) 0 var(--space-2xl);
        }

        .header-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 0;
        }

        .header-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(124, 58, 237, 0.85) 0%,
            rgba(118, 75, 162, 0.85) 100%
          );
          z-index: 1;
        }

        .header-content {
          position: relative;
          z-index: 2;
        }

        .page-title {
          font-size: var(--text-6xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-black);
          margin-bottom: var(--space-md);
          max-width: 900px;
          animation: fadeInUp 0.6s ease-out;
        }

        .page-header.compact .page-title {
          font-size: var(--text-4xl);
        }

        .page-subtitle {
          font-size: var(--text-xl);
          max-width: 700px;
          opacity: 0.95;
          line-height: 1.6;
          animation: fadeInUp 0.6s ease-out 0.1s backwards;
        }

        @media (max-width: 768px) {
          .page-header {
            padding: var(--space-3xl) 0 var(--space-2xl);
          }

          .page-title {
            font-size: var(--text-4xl);
          }

          .page-subtitle {
            font-size: var(--text-lg);
          }
        }
      `}</style>
        </header>
    );
}
