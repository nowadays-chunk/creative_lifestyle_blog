import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function VintageAuthors() {
    return (
        <div className="bg-[#FAF0E6] min-h-screen font-serif text-[#4B3621] selection:bg-[#D2B48C]">
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>

            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 border-l border-r border-[#D2B48C] min-h-screen bg-[#FFF8E7] shadow-xl">
                <nav className="text-center pb-8 mb-12 border-b border-[#D2B48C]">
                    <Link href="/variances/vintage-journal" className="text-3xl font-black tracking-tighter uppercase font-mono">
                        The Daily Log
                    </Link>
                </nav>

                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-black uppercase text-[#2F1B0C] decoration-double underline underline-offset-8">
                        Editorial Staff
                    </h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 px-6">
                    {authors.map(author => (
                        <div key={author.id} className="flex gap-6 items-start p-6 border border-[#D2B48C] bg-[#FAF0E6]">
                            <img src={author.avatar} alt={author.name} className="w-20 h-20 object-cover border-2 border-[#4B3621] sepia" />
                            <div>
                                <h3 className="text-xl font-bold text-[#2F1B0C] mb-1">{author.name}</h3>
                                <span className="font-mono text-xs uppercase text-[#8B4513] block mb-3">{author.role}</span>
                                <p className="text-sm italic text-gray-600 leading-tight">
                                    "{author.bio}"
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
