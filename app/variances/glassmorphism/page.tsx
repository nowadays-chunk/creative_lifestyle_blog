import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function GlassmorphismHome() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-white/30 bg-gradient-to-br from-[#4facfe] to-[#00f2fe] relative overflow-hidden">
            {/* Background Orbs */}
            <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-purple-500 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse"></div>
            <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] bg-pink-500 rounded-full mix-blend-overlay filter blur-3xl opacity-60 animate-pulse delay-1000"></div>

            <nav className="p-8 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 my-6 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg">
                <Link href="/variances/glassmorphism" className="text-2xl font-bold tracking-tight">
                    Prism
                </Link>
                <div className="flex gap-8 text-sm font-medium text-white/90">
                    <Link href="/variances/glassmorphism/about" className="hover:text-white transition-colors">Philosophy</Link>
                    <Link href="/variances/glassmorphism/category/design" className="hover:text-white transition-colors">Design</Link>
                    <Link href="/variances/glassmorphism/author" className="hover:text-white transition-colors">Creators</Link>
                </div>
            </nav>

            <header className="py-24 px-6 text-center relative z-10">
                <h1 className="text-6xl md:text-8xl font-black mb-6 drop-shadow-lg">
                    See <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Through.</span>
                </h1>
                <p className="text-xl max-w-2xl mx-auto font-light text-white/90 bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 shadow-xl">
                    A modern exploration of depth, light, and transparency.
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.slug} className="group bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/20 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1">
                            <div className="mb-6 relative w-full h-48 rounded-2xl overflow-hidden border border-white/20">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#00f2fe]/50 to-transparent mix-blend-overlay"></div>
                                <div className="absolute top-4 left-4">
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white border border-white/30">
                                        {post.category}
                                    </span>
                                </div>
                            </div>

                            <Link href={`/variances/glassmorphism/article/${post.slug}`}>
                                <h2 className="text-2xl font-bold mb-4 leading-tight group-hover:text-white/90 transition-colors">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="text-white/70 text-sm leading-relaxed mb-8 font-light">
                                {post.excerpt}
                            </p>

                            <Link href={`/variances/glassmorphism/article/${post.slug}`} className="inline-block w-full text-center py-3 rounded-xl bg-white/10 hover:bg-white/30 border border-white/20 font-bold text-sm transition-all shadow-sm">
                                Read Article
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white/10 backdrop-blur-md border-t border-white/10 py-12 text-center relative z-10">
                <p className="text-sm font-light text-white/60">
                    © 2024 Prism UI.
                </p>
            </footer>
        </div>
    );
}
