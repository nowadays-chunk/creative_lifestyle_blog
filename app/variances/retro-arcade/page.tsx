import Link from 'next/link';
import { posts } from '@/lib/blog-data';

export default function RetroArcadeHome() {
    return (
        <div className="bg-[#2C0E37] min-h-screen font-mono text-white selection:bg-[#E6007A]">
            <div className="p-4 border-b-4 border-white bg-[#E6007A] text-center sticky top-0 z-50">
                <div className="overflow-hidden whitespace-nowrap w-full">
                    <div className="font-bold uppercase tracking-widest text-sm animate-marquee">
                        *** INSERT COIN TO READ *** LATEST SCORE: 999999 *** WELCOME TO THE ARCHIVE ***
                    </div>
                </div>
            </div>

            <nav className="p-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-6xl mx-auto">
                <Link href="/variances/retro-arcade" className="text-4xl font-black tracking-widest text-[#00FFFF] drop-shadow-[4px_4px_0_#E6007A] hover:translate-x-1 hover:translate-y-1 hover:drop-shadow-none transition-all">
                    PIXEL<span className="text-white">_</span>LOG
                </Link>
                <div className="flex gap-4 md:gap-8 text-sm font-bold uppercase tracking-widest">
                    <Link href="/variances/retro-arcade/about" className="hover:text-[#FFFF00] bg-black/30 px-2 py-1 border-2 border-transparent hover:border-[#FFFF00] transition-all">Select Info</Link>
                    <Link href="/variances/retro-arcade/category/gaming" className="hover:text-[#FFFF00] bg-black/30 px-2 py-1 border-2 border-transparent hover:border-[#FFFF00] transition-all">Levels</Link>
                    <Link href="/variances/retro-arcade/author" className="hover:text-[#FFFF00] bg-black/30 px-2 py-1 border-2 border-transparent hover:border-[#FFFF00] transition-all">Players</Link>
                </div>
            </nav>

            <header className="py-16 text-center">
                <div className="inline-block border-4 border-white p-2 mb-8 bg-black">
                    <h1 className="text-5xl md:text-7xl font-black text-[#FFFF00] uppercase tracking-tighter leading-none">
                        LEVEL 1 <br /> <span className="text-white text-4xl block mt-2">READY?</span>
                    </h1>
                </div>
                <p className="text-[#00FFFF] text-xl max-w-2xl mx-auto font-bold bg-black/50 p-4 border-2 border-[#00FFFF]">
                    Exploring the 8-bit aesthetics of modern life.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.slug} className="bg-black border-4 border-white p-1 relative shadow-[8px_8px_0_#00FFFF] hover:shadow-[12px_12px_0_#E6007A] hover:-translate-y-2 transition-all">
                            <div className="bg-[#2C0E37] h-full flex flex-col border-2 border-white/20">
                                <div className="h-48 border-b-4 border-white overflow-hidden relative group">
                                    <div className="absolute inset-0 bg-[#E6007A]/20 pointer-events-none z-10 group-hover:bg-transparent transition-colors"></div>
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover image-pixelated"
                                        style={{ imageRendering: 'pixelated' }}
                                    />
                                </div>

                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex justify-between items-center mb-4 border-b-2 border-white/20 pb-2">
                                        <span className="text-[#FFFF00] text-xs font-bold uppercase">Lvl. {post.readTime}</span>
                                        <span className="text-[#E6007A] text-xs font-bold uppercase">{post.category}</span>
                                    </div>

                                    <Link href={`/variances/retro-arcade/article/${post.slug}`}>
                                        <h2 className="text-xl font-bold text-white mb-4 leading-tight hover:text-[#00FFFF] transition-colors">
                                            {post.title}
                                        </h2>
                                    </Link>

                                    <p className="text-gray-300 text-xs leading-relaxed mb-6 font-medium">
                                        {post.excerpt}
                                    </p>

                                    <Link href={`/variances/retro-arcade/article/${post.slug}`} className="mt-auto block text-center bg-[#E6007A] text-white font-bold text-sm py-2 uppercase tracking-widest hover:bg-white hover:text-[#E6007A] border-2 border-transparent hover:border-[#E6007A] transition-all">
                                        Press Start
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-black text-white py-12 text-center border-t-4 border-white">
                <p className="text-sm font-bold uppercase tracking-widest text-[#FFFF00]">
                    GAME OVER. THANK YOU FOR PLAYING.
                </p>
                <div className="mt-4 text-xs text-gray-500">
                    © 198X - 2024 PixelLog Inc.
                </div>
            </footer>
        </div>
    );
}
