'use client';

import { useState } from 'react';

interface Comment {
    id: number;
    author: string;
    avatar: string;
    date: string;
    content: string;
}

export default function Comments() {
    const [comments] = useState<Comment[]>([
        {
            id: 1,
            author: 'Sarah Mitchell',
            avatar: '/images/influencer-1.jpg',
            date: '2 days ago',
            content: 'This article beautifully captures the essence of mindful living. The tips on creating a balanced morning routine are exactly what I needed!'
        },
        {
            id: 2,
            author: 'James Chen',
            avatar: '/images/influencer-2.jpg',
            date: '3 days ago',
            content: 'I\'ve been following your lifestyle guides for months now, and this one is my favorite yet. The photography is stunning too!'
        }
    ]);

    const [newComment, setNewComment] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Comment submitted:', newComment);
        setNewComment('');
        alert('Thank you for your comment! It will appear after moderation.');
    };

    return (
        <div className="comments-section">
            <h2 className="comments-title">
                {comments.length} Comment{comments.length !== 1 ? 's' : ''}
            </h2>

            <form className="comment-form glass" onSubmit={handleSubmit}>
                <textarea
                    className="comment-input"
                    placeholder="Share your thoughts..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    rows={4}
                    required
                />
                <button type="submit" className="submit-btn">
                    Post Comment
                </button>
            </form>

            <div className="comments-list">
                {comments.map((comment) => (
                    <div key={comment.id} className="comment glass">
                        <img
                            src={comment.avatar}
                            alt={comment.author}
                            className="comment-avatar"
                        />
                        <div className="comment-content">
                            <div className="comment-header">
                                <span className="comment-author">{comment.author}</span>
                                <span className="comment-date">{comment.date}</span>
                            </div>
                            <p className="comment-text">{comment.content}</p>
                        </div>
                    </div>
                ))}
            </div>

            <style jsx>{`
        .comments-section {
          margin-top: var(--space-5xl);
          padding-top: var(--space-4xl);
          border-top: 2px solid var(--color-light-tertiary);
        }

        .comments-title {
          font-size: var(--text-3xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          margin-bottom: var(--space-2xl);
          color: var(--color-dark);
        }

        .comment-form {
          padding: var(--space-xl);
          border-radius: var(--border-radius-lg);
          margin-bottom: var(--space-3xl);
        }

        .comment-input {
          width: 100%;
          padding: var(--space-md);
          border: 2px solid var(--color-light-tertiary);
          border-radius: var(--border-radius-md);
          font-size: var(--text-base);
          font-family: var(--font-body);
          resize: vertical;
          margin-bottom: var(--space-md);
          transition: border-color var(--transition-base);
        }

        .comment-input:focus {
          outline: none;
          border-color: var(--color-primary);
        }

        .submit-btn {
          padding: var(--space-md) var(--space-2xl);
          background: var(--gradient-primary);
          color: white;
          border: none;
          border-radius: var(--border-radius-full);
          font-size: var(--text-base);
          font-weight: var(--weight-semibold);
          cursor: pointer;
          transition: all var(--transition-base);
          font-family: var(--font-body);
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 25px rgba(124, 58, 237, 0.3);
        }

        .comments-list {
          display: flex;
          flex-direction: column;
          gap: var(--space-lg);
        }

        .comment {
          display: flex;
          gap: var(--space-lg);
          padding: var(--space-xl);
          border-radius: var(--border-radius-lg);
        }

        .comment-avatar {
          width: 48px;
          height: 48px;
          border-radius: var(--border-radius-full);
          object-fit: cover;
          flex-shrink: 0;
        }

        .comment-content {
          flex: 1;
        }

        .comment-header {
          display: flex;
          align-items: center;
          gap: var(--space-md);
          margin-bottom: var(--space-sm);
        }

        .comment-author {
          font-weight: var(--weight-semibold);
          color: var(--color-dark);
        }

        .comment-date {
          font-size: var(--text-sm);
          color: var(--color-dark-tertiary);
        }

        .comment-text {
          font-size: var(--text-base);
          color: var(--color-dark-tertiary);
          line-height: 1.6;
        }
      `}</style>
        </div>
    );
}
