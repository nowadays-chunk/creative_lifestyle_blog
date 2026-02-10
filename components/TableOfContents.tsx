'use client';

import { useState } from 'react';

interface TOCItem {
    id: string;
    title: string;
    level: number;
}

interface TableOfContentsProps {
    items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
    const [activeId, setActiveId] = useState('');

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            setActiveId(id);
        }
    };

    return (
        <nav className="table-of-contents glass">
            <h3 className="toc-title">Table of Contents</h3>
            <ul className="toc-list">
                {items.map((item) => (
                    <li
                        key={item.id}
                        className={`toc-item level-${item.level} ${activeId === item.id ? 'active' : ''}`}
                    >
                        <button onClick={() => scrollToSection(item.id)}>
                            {item.title}
                        </button>
                    </li>
                ))}
            </ul>

            <style jsx>{`
        .table-of-contents {
          position: sticky;
          top: var(--space-2xl);
          padding: var(--space-xl);
          border-radius: var(--border-radius-lg);
          max-height: calc(100vh - var(--space-4xl));
          overflow-y: auto;
        }

        .toc-title {
          font-size: var(--text-lg);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-lg);
          color: var(--color-dark);
        }

        .toc-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .toc-item {
          margin-bottom: var(--space-sm);
        }

        .toc-item button {
          background: none;
          border: none;
          color: var(--color-dark-tertiary);
          font-size: var(--text-sm);
          font-family: var(--font-body);
          text-align: left;
          cursor: pointer;
          padding: var(--space-xs) 0;
          transition: color var(--transition-base);
          width: 100%;
        }

        .toc-item.level-2 button {
          padding-left: var(--space-md);
        }

        .toc-item.level-3 button {
          padding-left: var(--space-xl);
        }

        .toc-item button:hover {
          color: var(--color-primary);
        }

        .toc-item.active button {
          color: var(--color-primary);
          font-weight: var(--weight-semibold);
        }

        @media (max-width: 1024px) {
          .table-of-contents {
            display: none;
          }
        }
      `}</style>
        </nav>
    );
}
