import { authors } from '@/lib/blog-data';
import Link from 'next/link';

export default function UrbanAuthors() {
    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-yellow-400 selection:text-black">
            <nav className="p-6 md:p-12 border-b-4 border-white">
                <Link href="/variances/urban-street" className="text-5xl font-black tracking-tighter uppercase italic hover:text-yellow-400 transition-colors transform -skew-x-12">
                    Sub<span className="text-transparent text-stroke-white">Culture</span>
                </Link>
            </nav>

            <div className="p-12 border-b-4 border-white">
                <h1 className="text-6xl font-black uppercase">The Crew</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {authors.map((author, index) => (
                    <div key={author.id} className={`border-b-4 border-white p-8 group hover:bg-white hover:text-black transition-colors ${index !== authors.length - 1 ? 'md:border-r-4' : ''}`}>
                        <div className="mb-6 grayscale contrast-125 group-hover:grayscale-0">
                            <img src={author.avatar} className="w-full aspect-square object-cover border-4 border-white group-hover:border-black" />
                        </div>
                        <h3 className="text-2xl font-black uppercase mb-2">{author.name}</h3>
                        <div className="bg-yellow-400 text-black px-2 py-1 inline-block text-xs font-bold uppercase mb-4 transform -rotate-1">
                            {author.role}
                        </div>
                        <p className="font-mono text-sm leading-tight">
                            {author.bio}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
