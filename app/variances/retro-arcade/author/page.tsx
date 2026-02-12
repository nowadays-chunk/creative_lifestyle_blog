import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function RetroAuthors() {
    return (
        <div className="bg-[#2C0E37] min-h-screen font-mono text-white selection:bg-[#E6007A]">
            <nav className="p-8 max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/variances/retro-arcade" className="text-2xl font-black tracking-widest text-[#00FFFF] drop-shadow-[2px_2px_0_#E6007A]">
                    PIXEL_LOG
                </Link>
            </nav>

            <header className="py-16 text-center">
                <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 border-b-8 border-[#FFFF00] inline-block pb-2">
                    Character Select
                </h1>
            </header>

            <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {authors.map(author => (
                    <div key={author.id} className="bg-black border-4 border-white p-4 text-center group hover:scale-105 transition-transform">
                        <div className="w-32 h-32 mx-auto mb-6 border-4 border-[#00FFFF] bg-[#E6007A] overflow-hidden grayscale group-hover:grayscale-0 p-1">
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover pixelated" style={{ imageRendering: 'pixelated' }} />
                        </div>
                        <h3 className="text-xl font-black text-[#FFFF00] uppercase mb-2 group-hover:text-white">{author.name}</h3>
                        <div className="bg-[#E6007A] text-white text-xs font-bold uppercase py-1 px-2 mb-4 inline-block transform skew-x-12 border-2 border-white">
                            {author.role}
                        </div>
                        <div className="bg-[#2C0E37] p-2 border border-white/30 text-xs text-gray-300 leading-tight">
                            {author.bio}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
