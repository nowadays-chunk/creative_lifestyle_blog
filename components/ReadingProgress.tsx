'use client';

import { useEffect, useState } from 'react';

export default function ReadingProgress() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrolled = (window.scrollY / scrollHeight) * 100;
            setProgress(Math.min(scrolled, 100));
        };

        window.addEventListener('scroll', updateProgress, { passive: true });
        updateProgress();

        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <div className="reading-progress">
            <div
                className="progress-bar"
                style={{ width: `${progress}%` }}
            />

            <style jsx>{`
        .reading-progress {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: rgba(0, 0, 0, 0.1);
          z-index: 1001;
        }

        .progress-bar {
          height: 100%;
          background: var(--gradient-primary);
          transition: width 0.15s ease-out;
        }
      `}</style>
        </div>
    );
}
