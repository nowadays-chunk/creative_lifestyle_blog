import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function GlassAuthors() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-white/30 bg-gradient-to-r from-[#8EC5FC] to-[#E0C3FC] relative overflow-hidden">
            <nav className="p-8 max-w-7xl mx-auto my-6 relative z-10">
                <Link href="/variances/glassmorphism" className="text-3xl font-bold tracking-tight drop-shadow-md">
                    Prism
                </Link>
            </nav>

            <div className="max-w-7xl mx-auto px-6 py-12 relative z-10">
                <h1 className="text-4xl md:text-6xl font-bold mb-12 text-center drop-shadow-md">
                    Our Voices
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {authors.map(author => (
                        <div key={author.id} className="relative group">
                            <div className="bg-white/20 backdrop-blur-md border border-white/40 rounded-3xl p-6 text-center hover:bg-white/30 transition-all shadow-xl h-full flex flex-col items-center">
                                <div className="w-24 h-24 rounded-full p-1 bg-white/30 mb-4 shadow-inner">
                                    <img src={author.avatar} alt={author.name} className="w-full h-full rounded-full object-cover" />
                                </div>
                                <h3 className="text-xl font-bold mb-1">{author.name}</h3>
                                <span className="text-xs font-bold uppercase tracking-widest bg-white/20 px-3 py-1 rounded-full mb-4 inline-block">
                                    {author.role}
                                </span>
                                <p className="text-sm font-light text-white/90 leading-relaxed">
                                    {author.bio}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
