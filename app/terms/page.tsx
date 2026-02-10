"use client";

import Navigation from '../../components/Navigation';
import PageHeader from '../../components/PageHeader';
import Footer from '../../components/Footer';

export default function TermsPage() {
    return (
        <>
            <Navigation />

            <PageHeader
                title="Terms of Service"
                subtitle="Last updated: February 10, 2026"
                breadcrumbs={[
                    { label: 'Terms', href: '/terms' }
                ]}
                compact
            />

            <main className="legal-page">
                <div className="container legal-container">
                    <div className="legal-content">
                        <section className="legal-section">
                            <h2>Agreement to Terms</h2>
                            <p>
                                By accessing or using Lifestyle Stories, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this website.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Use License</h2>
                            <p>
                                Permission is granted to temporarily access the materials on Lifestyle Stories for personal, non-commercial use only. This is the grant of a license, not a transfer of title, and under this license you may not:
                            </p>
                            <ul>
                                <li>Modify or copy the materials</li>
                                <li>Use the materials for commercial purposes</li>
                                <li>Attempt to decompile or reverse engineer any software contained on the website</li>
                                <li>Remove any copyright or proprietary notations from the materials</li>
                                <li>Transfer the materials to another person or "mirror" the materials on any other server</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>User Content</h2>
                            <p>
                                By submitting content to Lifestyle Stories (including comments, feedback, or other materials), you grant us a worldwide, non-exclusive, royalty-free license to use, reproduce, modify, and distribute your content in connection with operating and promoting the website.
                            </p>
                            <p>
                                You represent and warrant that:
                            </p>
                            <ul>
                                <li>You own or have the necessary rights to the content you submit</li>
                                <li>Your content does not violate any third-party rights</li>
                                <li>Your content does not contain harmful, offensive, or illegal material</li>
                            </ul>
                        </section>

                        <section className="legal-section">
                            <h2>Disclaimer</h2>
                            <p>
                                The materials on Lifestyle Stories are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Limitations</h2>
                            <p>
                                In no event shall Lifestyle Stories or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on our website.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Accuracy of Materials</h2>
                            <p>
                                The materials appearing on Lifestyle Stories may include technical, typographical, or photographic errors. We do not warrant that any of the materials are accurate, complete, or current. We may make changes to the materials at any time without notice.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Links to Third-Party Sites</h2>
                            <p>
                                Lifestyle Stories may contain links to third-party websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Modifications</h2>
                            <p>
                                We may revise these Terms of Service at any time without notice. By using this website, you agree to be bound by the current version of these terms.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Governing Law</h2>
                            <p>
                                These terms and conditions are governed by and construed in accordance with the laws of California, United States, and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                            </p>
                        </section>

                        <section className="legal-section">
                            <h2>Contact Information</h2>
                            <p>
                                If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@lifestylestories.com">legal@lifestylestories.com</a>.
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
