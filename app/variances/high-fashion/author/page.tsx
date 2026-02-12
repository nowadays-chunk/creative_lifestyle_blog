import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function FashionAuthors() {
    return (
        <div className="bg-white min-h-screen font-sans text-black selection:bg-black selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-12 py-6 border-b border-black">
                <Link href="/variances/high-fashion" className="text-2xl font-serif tracking-widest uppercase font-bold">
                    VN
                </Link>
            </nav>

            <header className="pt-48 pb-24 px-12">
                <h1 className="text-6xl font-black uppercase tracking-tighter mb-4">
                    Contributors
                </h1>
                <div className="w-24 h-2 bg-black"></div>
            </header>

            <div className="px-12 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {authors.map(author => (
                    <div key={author.id} className="group">
                        <div className="aspect-[3/4] overflow-hidden mb-6 filter grayscale contrast-125 group-hover:grayscale-0 transition-all duration-700">
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover" />
                        </div>
                        <h3 className="text-2xl font-serif italic mb-2 border-b border-black pb-2 inline-block">{author.name}</h3>
                        <span className="text-xs font-bold uppercase tracking-[0.2em] block mb-4">{author.role}</span>
                        <p className="text-sm leading-relaxed text-gray-600 group-hover:text-black transition-colors">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
