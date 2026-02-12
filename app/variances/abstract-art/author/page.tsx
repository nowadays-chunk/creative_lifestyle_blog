import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function AbstractAuthors() {
    return (
        <div className="bg-[#FFFFF0] min-h-screen font-sans text-gray-900 selection:bg-purple-300">
            <nav className="p-8 max-w-7xl mx-auto md:p-12">
                <Link href="/variances/abstract-art" className="text-2xl font-black tracking-tight border-b-4 border-black inline-block pb-1">
                    CANVAS
                </Link>
            </nav>

            <header className="py-16 text-center">
                <h1 className="text-5xl md:text-7xl font-black uppercase">
                    The Collective
                </h1>
            </header>

            <div className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {authors.map((author, i) => (
                    <div key={author.id} className="relative group">
                        {/* Decorative background blob */}
                        <div className={`absolute top-0 left-0 w-full h-full rounded-2xl opacity-20 transform scale-90 group-hover:scale-105 transition-transform ${i % 2 === 0 ? 'bg-blue-400 rotate-3' : 'bg-yellow-400 -rotate-2'}`}></div>

                        <div className="relative bg-white border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0_black] text-center">
                            <div className="w-24 h-24 mx-auto mb-6 relative">
                                <div className="absolute inset-0 rounded-full border-2 border-black bg-gray-200"></div>
                                <img src={author.avatar} alt={author.name} className="relative z-10 w-full h-full rounded-full object-cover border-2 border-black transform -translate-y-2 -translate-x-2 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform" />
                            </div>

                            <h3 className="text-xl font-black mb-1">{author.name}</h3>
                            <span className="text-xs font-bold uppercase tracking-widest bg-black text-white px-2 py-1 inline-block mb-4">
                                {author.role}
                            </span>
                            <p className="text-sm font-medium leading-relaxed">
                                {author.bio}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
