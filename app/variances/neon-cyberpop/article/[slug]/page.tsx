import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function NeonArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#050510] min-h-screen font-mono text-cyan-400 selection:bg-pink-500 selection:text-white">
            <nav className="p-8 border-b border-cyan-500/30 bg-[#050510]/80">
                <Link href="/variances/neon-cyberpop" className="text-xl font-bold tracking-tighter text-pink-500 hover:text-cyan-400 transition-colors">
                    &lt; RETURN_ROOT
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 py-12 relative">
                <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-pink-500 via-cyan-500 to-transparent opacity-30 ml-4"></div>

                <header className="mb-12 pl-12 border-l border-cyan-500/30">
                    <div className="inline-block bg-pink-500/10 text-pink-400 border border-pink-500/50 px-2 py-1 text-xs mb-4">
                        DIR: {post.category.toUpperCase()}
                    </div>
                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]">
                        {post.title}
                    </h1>

                    <div className="w-full h-64 md:h-96 relative mb-8 border border-cyan-500/30 overflow-hidden group">
                        <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050510] via-transparent to-transparent"></div>
                        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 to-cyan-500"></div>
                    </div>

                    <div className="flex items-center gap-4 text-xs font-bold text-gray-500 uppercase">
                        <div className="w-10 h-10 rounded overflow-hidden border border-cyan-500/50">
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-cyan-400">{author.name}</span>
                            <span>{post.date}</span>
                        </div>
                    </div>
                </header>

                <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-pink-400 prose-a:text-cyan-400 max-w-none pl-12">
                    <p className="text-xl text-white lead border-l-4 border-pink-500 pl-6 mb-8">
                        {post.excerpt}
                    </p>
                    <p>
                        {post.content}
                    </p>
                    <p>
                        <span className="text-pink-500">&gt;</span> Awaiting input... System processing...
                    </p>
                    <h2>Neural Interface</h2>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        <span className="bg-pink-500/20 text-pink-200 px-1">CRITICAL ERROR</span> in visual syntax.
                    </p>
                </div>

                <div className="mt-12 pl-12 pt-12 border-t border-cyan-500/20">
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-2 py-1 bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs hover:bg-cyan-500 hover:text-black cursor-pointer transition-all">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
