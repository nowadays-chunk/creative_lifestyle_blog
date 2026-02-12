import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function EcoAuthors() {
    return (
        <div className="bg-[#E9F5DB] min-h-screen font-sans text-[#2D3A1E] selection:bg-[#B5C99A]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto">
                <Link href="/variances/eco-roots" className="text-2xl font-bold tracking-tight text-[#4A6741] flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#718355]"></span>
                    EcoRoots
                </Link>
            </nav>

            <header className="py-16 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#2D3A1E] mb-6">
                    Our Community
                </h1>
                <p className="text-[#4F5D3F]">Cultivating ideas together.</p>
            </header>

            <div className="max-w-6xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {authors.map(author => (
                    <div key={author.id} className="bg-white/40 rounded-[2rem] p-6 text-center hover:bg-white/80 transition-colors">
                        <div className="w-24 h-24 rounded-full bg-[#B5C99A] mx-auto mb-6 p-1">
                            <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" />
                        </div>
                        <h3 className="text-xl font-bold text-[#2D3A1E] mb-2">{author.name}</h3>
                        <span className="text-[#718355] text-xs font-bold uppercase tracking-widest block mb-4">{author.role}</span>
                        <p className="text-[#4F5D3F] text-sm leading-relaxed">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
