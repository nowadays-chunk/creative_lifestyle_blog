import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function PastelAuthors() {
    return (
        <div className="bg-[#FFF0F5] min-h-screen font-sans text-gray-700 selection:bg-pink-200">
            <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/variances/pastel-dream" className="text-2xl font-bold tracking-tight text-pink-400 font-serif">
                    Cloud<span className="text-blue-300">Nine</span>.
                </Link>
            </nav>

            <header className="py-20 text-center px-4">
                <h1 className="text-5xl font-bold text-gray-800 mb-6 font-serif">
                    Our Storytellers
                </h1>
            </header>

            <div className="max-w-4xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
                {authors.map(author => (
                    <div key={author.id} className="bg-white rounded-[2.5rem] p-8 flex flex-col items-center text-center shadow-sm hover:shadow-lg transition-all">
                        <img src={author.avatar} alt={author.name} className="w-24 h-24 rounded-full border-4 border-pink-100 mb-6" />
                        <h3 className="text-2xl font-bold text-gray-800 font-serif mb-2">{author.name}</h3>
                        <span className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-4">{author.role}</span>
                        <p className="text-gray-500 leading-relaxed text-sm">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
