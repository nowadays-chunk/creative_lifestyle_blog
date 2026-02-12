import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function NeonCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#050510] min-h-screen font-mono text-cyan-400 selection:bg-pink-500 selection:text-white">
            <nav className="p-8 border-b border-cyan-500/30 bg-[#050510]/80">
                <Link href="/variances/neon-cyberpop" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    CYBER_PULSE
                </Link>
            </nav>

            <header className="py-24 px-6 relative">
                <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800 uppercase tracking-tighter opacity-20 absolute top-10 left-6 select-none pointer-events-none">
                    {decodedCategory}
                </h1>
                <div className="relative z-10 pl-12 border-l-2 border-pink-500">
                    <h2 className="text-4xl font-bold text-white mb-2 uppercase">Directory: /{decodedCategory}</h2>
                    <p className="text-cyan-500 text-sm">Loading content modules...</p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid gap-4">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="flex items-center gap-4 bg-[#0A0A1F] border border-cyan-900 p-4 hover:border-pink-500 hover:bg-[#11112b] transition-all group">
                            <div className="w-2 h-2 bg-cyan-500 rounded-full group-hover:bg-pink-500 group-hover:shadow-[0_0_10px_deeppink] transition-all"></div>
                            <span className="text-gray-500 text-xs w-24">{post.date}</span>
                            <Link href={`/variances/neon-cyberpop/article/${post.slug}`} className="flex-1">
                                <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors">
                                    {post.title}
                                </h3>
                            </Link>
                            <span className="text-xs text-cyan-700 group-hover:text-cyan-400">[READ_ONLY]</span>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
