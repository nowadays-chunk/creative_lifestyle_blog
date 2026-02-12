import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function NordicAuthors() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#4A4A4A] selection:bg-[#D4C4B7]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex justify-center">
                <Link href="/variances/nordic-hygge" className="text-2xl font-serif tracking-widest text-[#2C2C2C]">
                    H Y G G E
                </Link>
            </nav>

            <header className="py-24 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2C2C2C] mb-6 leading-tight">
                    The Contributors
                </h1>
            </header>

            <div className="max-w-6xl mx-auto px-6 pb-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {authors.map(author => (
                    <div key={author.id} className="text-center group">
                        <div className="w-full aspect-[3/4] bg-[#EBE8E3] mb-6 overflow-hidden relative grayscale group-hover:grayscale-0 transition-all duration-700">
                            <img src={author.avatar} alt={author.name} className="w-full h-full object-cover opacity-80 mix-blend-multiply" />
                        </div>
                        <h3 className="text-xl font-serif font-normal text-[#2C2C2C] mb-2">{author.name}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C8C8C] block mb-4">{author.role}</span>
                        <p className="text-sm font-light text-[#666] leading-relaxed">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
