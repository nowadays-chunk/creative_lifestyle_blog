import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function NeonCyberpopHome() {
    return (
        <div className="bg-[#050510] min-h-screen font-mono text-cyan-400 selection:bg-pink-500 selection:text-white">
            <nav className="p-8 border-b border-cyan-500/30 flex justify-between items-center backdrop-blur-md sticky top-0 z-50 bg-[#050510]/80">
                <Link href="/variances/neon-cyberpop" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]">
                    CYBER<span className="text-white">_</span>PULSE
                </Link>
                <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest text-pink-500">
                    <Link href="/variances/neon-cyberpop/about" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all">Sys_Info</Link>
                    <Link href="/variances/neon-cyberpop/category/tech" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all">Netrunners</Link>
                    <Link href="/variances/neon-cyberpop/author" className="hover:text-cyan-400 hover:drop-shadow-[0_0_8px_cyan] transition-all">Users</Link>
                </div>
            </nav>

            <header className="py-32 px-6 text-center relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image // Changed from img to Image
                        src="/images/hero-background.jpg"
                        alt="Background"
                        fill // Added fill prop
                        className="object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#050510] via-transparent to-[#050510]"></div>
                </div>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-pink-900/20 via-[#050510]/50 to-[#050510] z-0"></div>
                <div className="relative z-10">
                    <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tighter animate-pulse">
                        FUTURE <span className="text-pink-500">SHOCK</span>
                    </h1>
                    <p className="text-cyan-300 max-w-2xl mx-auto border border-cyan-500/50 p-4 bg-[#050510]/80 backdrop-blur-sm shadow-[0_0_15px_rgba(6,182,212,0.3)]">
                        &gt; INITIALIZING LIFESTYLE PROTOCOLS...<br />
                        &gt; LOADING AESTHETIC MODULES...
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.slug} className="group relative bg-[#0A0A1F] border border-pink-500/30 hover:border-cyan-400 transition-colors p-1">
                            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity blur-xl"></div>

                            <div className="relative bg-[#0A0A1F] h-full flex flex-col z-10">
                                <div className="h-48 overflow-hidden relative border-b border-pink-500/30">
                                    <Image // Changed from img to Image
                                        src={post.image}
                                        alt={post.title}
                                        fill // Added fill prop
                                        className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                    />
                                    <div className="absolute inset-0 bg-[#0A0A1F]/30 group-hover:bg-transparent transition-colors"></div>
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4 text-xs font-bold">
                                        <span className="text-pink-500">[{post.category.toUpperCase()}]</span>
                                        <span className="text-gray-500">{post.readTime}</span>
                                    </div>

                                    <Link href={`/variances/neon-cyberpop/article/${post.slug}`}>
                                        <h2 className="text-2xl font-bold text-white mb-4 leading-tight group-hover:text-cyan-300 transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-400 text-sm mb-6 flex-1 border-l-2 border-pink-500/50 pl-4">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/variances/neon-cyberpop/article/${post.slug}`} className="w-full text-center py-2 border border-cyan-500 text-cyan-400 text-xs font-bold uppercase tracking-widest hover:bg-cyan-500 hover:text-[#050510] transition-colors shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]">
                                        Execute_Read
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-[#02020A] py-12 border-t border-pink-900/30 text-center relative">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500 to-transparent"></div>
                <p className="text-xs text-gray-600">
                    SYSTEM STATUS: ONLINE. © 2077 CYBER_PULSE.
                </p>
            </footer>
        </div>
    );
}
