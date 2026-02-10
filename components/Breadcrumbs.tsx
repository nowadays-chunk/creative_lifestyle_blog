import Link from 'next/link';

interface BreadcrumbItem {
    label: string;
    href: string;
}

interface BreadcrumbsProps {
    items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
    return (
        <nav className="breadcrumbs">
            <ol className="breadcrumb-list">
                <li className="breadcrumb-item">
                    <Link href="/">Home</Link>
                </li>
                {items.map((item, index) => (
                    <li key={index} className="breadcrumb-item">
                        <span className="separator">/</span>
                        {index === items.length - 1 ? (
                            <span className="current">{item.label}</span>
                        ) : (
                            <Link href={item.href}>{item.label}</Link>
                        )}
                    </li>
                ))}
            </ol>

            <style jsx>{`
        .breadcrumbs {
          margin-bottom: var(--space-lg);
        }

        .breadcrumb-list {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          list-style: none;
          padding: 0;
          margin: 0;
          flex-wrap: wrap;
        }

        .breadcrumb-item {
          display: flex;
          align-items: center;
          gap: var(--space-sm);
          font-size: var(--text-sm);
        }

        .breadcrumb-item a {
          color: var(--color-dark-tertiary);
          transition: color var(--transition-base);
        }

        .breadcrumb-item a:hover {
          color: var(--color-primary);
        }

        .separator {
          color: var(--color-light-tertiary);
        }

        .current {
          color: var(--color-dark);
          font-weight: var(--weight-medium);
        }
      `}</style>
        </nav>
    );
}
