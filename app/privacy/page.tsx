"use client";

import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

export default function PrivacyPage() {
    return (
        <>
            <Navigation />

            <PageHeader
                title="Privacy Policy"
                subtitle="Last updated: February 10, 2026"
                breadcrumbs={[
                    { label: 'Privacy', href: '/privacy' }
                ]}
                compact
            />

            <main className="legal-page">
                <div className="container legal-container">
                    <div className="legal-content">
                        <section className="legal-section">
                            <h2>Introduction</h2>
                            <p>
                                At Lifestyle Stories, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Information We Collect</h2>
                            <h3>Personal Data</h3>
                            <p>
                                We may collect personal information that you voluntarily provide to us when you:
                            </p>
                            <ul>
                                <li>Subscribe to our newsletter</li>
                                <li>Comment on articles</li>
                                <li>Contact us via email or contact forms</li>
                                <li>Create an account on our website</li>
                            </ul>
                            <p>
                                This information may include your name, email address, and any other information you choose to provide.
                            </p>

                            <h3>Automatically Collected Information</h3>
                            <p>
                                When you visit our website, we may automatically collect certain information about your device, including:
                            </p>
                            <ul>
                                <li>IP address</li>
                                <li>Browser type and version</li>
                                <li>Pages you visit and time spent on each page</li>
                                <li>Referring website addresses</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>How We Use Your Information</h2>
                            <p>We use the information we collect to:</p>
                            <ul>
                                <li>Send you our newsletter and marketing communications</li>
                                <li>Respond to your comments and questions</li>
                                <li>Improve our website and user experience</li>
                                <li>Analyze usage trends and preferences</li>
                                <li>Prevent fraudulent activity and improve security</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Cookies and Tracking</h2>
                            <p>
                                We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. For more details, see our <a href="/cookies">Cookie Policy</a>.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Third-Party Services</h2>
                            <p>
                                We may use third-party service providers to help us operate our website and deliver services. These providers have access to your personal information only to perform specific tasks on our behalf and are obligated to protect your information.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul>
                                <li>Access the personal information we hold about you</li>
                                <li>Request correction of inaccurate information</li>
                                <li>Request deletion of your personal information</li>
                                <li>Object to processing of your personal information</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                            <p>
                                To exercise these rights, please contact us at <a href="mailto:privacy@lifestylestories.com">privacy@lifestylestories.com</a>.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Data Security</h2>
                            <p>
                                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Changes to This Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Contact Us</h2>
                            <p>
                                If you have questions about this Privacy Policy, please contact us at:
                            </p>
                            <p>
                                <strong>Email:</strong> <a href="mailto:privacy@lifestylestories.com">privacy@lifestylestories.com</a><br />
                                <strong>Address:</strong> Lifestyle Stories, San Francisco, CA
                            </p>
                        </section>
                    </div>
                </div>
            </main>

            <Footer />

            <style jsx>{`
        .legal-page {
          background: white;
        }

        .legal-container {
          padding: var(--space-5xl) 0;
          max-width: 900px;
        }

        .legal-content {
          font-size: var(--text-lg);
          line-height: 1.8;
          color: var(--color-dark-secondary);
        }

        .legal-section {
          margin-bottom: var(--space-4xl);
        }

        .legal-section:last-child {
          margin-bottom: 0;
        }

        .legal-section h2 {
          font-size: var(--text-4xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-bold);
          color: var(--color-dark);
          margin-bottom: var(--space-lg);
        }

        .legal-section h3 {
          font-size: var(--text-2xl);
          font-family: var(--font-heading);
          font-weight: var(--weight-semibold);
          color: var(--color-dark);
          margin-top: var(--space-xl);
          margin-bottom: var(--space-md);
        }

        .legal-section p {
          margin-bottom: var(--space-md);
        }

        .legal-section ul {
          margin: var(--space-lg) 0;
          padding-left: var(--space-2xl);
        }

        .legal-section li {
          margin-bottom: var(--space-sm);
        }

        .legal-section a {
          color: var(--color-primary);
          font-weight: var(--weight-semibold);
          text-decoration: underline;
        }

        .legal-section a:hover {
          color: var(--color-accent);
        }
      `}</style>
        </>
    );
}
