import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function NeonAuthors() {
    return (
        <div className="bg-[#050510] min-h-screen font-mono text-cyan-400 selection:bg-pink-500 selection:text-white">
            <nav className="p-8 border-b border-cyan-500/30 bg-[#050510]/80">
                <Link href="/variances/neon-cyberpop" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    CYBER_PULSE
                </Link>
            </nav>

            <header className="py-24 px-6 text-center">
                <h1 className="text-5xl font-black text-white mb-2 uppercase tracking-tight shadow-cyan-500 drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
                    User_Database
                </h1>
            </header>

            <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {authors.map(author => (
                    <div key={author.id} className="bg-[#0A0A1F] border border-cyan-500/30 p-6 relative group hover:border-pink-500 transition-all">
                        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-cyan-500 group-hover:border-pink-500 transition-colors"></div>
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-cyan-500 group-hover:border-pink-500 transition-colors"></div>

                        <img src={author.avatar} className="w-24 h-24 rounded-none border-2 border-pink-500 mb-4 mx-auto contrast-125 grayscale group-hover:grayscale-0 transition-all" />

                        <h3 className="text-xl font-bold text-white text-center mb-1">{author.name}</h3>
                        <div className="text-center mb-4">
                            <span className="bg-cyan-900/50 text-cyan-300 text-[10px] px-2 py-1 uppercase tracking-widest border border-cyan-500/30">
                                {author.role}
                            </span>
                        </div>
                        <p className="text-gray-400 text-xs text-center border-t border-cyan-900/50 pt-4">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
