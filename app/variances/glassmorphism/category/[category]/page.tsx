import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function GlassCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="min-h-screen font-sans text-white selection:bg-white/30 bg-gradient-to-bl from-[#a18cd1] to-[#fbc2eb] relative overflow-hidden">
            {/* Background Orbs */}
            <div className="fixed top-[50%] left-[50%] w-[60vw] h-[60vw] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2"></div>

            <nav className="p-8 max-w-7xl mx-auto my-6 relative z-10">
                <Link href="/variances/glassmorphism" className="text-3xl font-bold tracking-tight drop-shadow-md">
                    Prism
                </Link>
            </nav>

            <header className="py-16 text-center relative z-10">
                <div className="inline-block p-8 bg-white/10 backdrop-blur-md rounded-[3rem] border border-white/30 shadow-xl">
                    <h1 className="text-5xl md:text-7xl font-bold capitalize drop-shadow-md">
                        {decodedCategory}
                    </h1>
                </div>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-24 relative z-10">
                <div className="space-y-6">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="flex flex-col md:flex-row gap-6 bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-6 hover:bg-white/30 transition-all shadow-lg items-center">
                            <div className="bg-white/20 p-4 rounded-2xl text-center min-w-[100px]">
                                <span className="block text-2xl font-bold">{post.date.split(',')[0].split(' ')[1]}</span>
                                <span className="block text-xs uppercase font-bold">{post.date.split(',')[0].split(' ')[0]}</span>
                            </div>

                            <div className="flex-1 text-center md:text-left">
                                <Link href={`/variances/glassmorphism/article/${post.slug}`}>
                                    <h2 className="text-2xl font-bold mb-2 hover:text-white/80 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-white/80 text-sm font-light">
                                    {post.excerpt}
                                </p>
                            </div>

                            <Link href={`/variances/glassmorphism/article/${post.slug}`} className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 hover:bg-white/40 transition-colors border border-white/30">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
