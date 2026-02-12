import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function UrbanStreetHome() {
    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-yellow-400 selection:text-black">
            <nav className="p-6 md:p-12 border-b-4 border-white flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/variances/urban-street" className="text-5xl font-black tracking-tighter uppercase italic hover:text-yellow-400 transition-colors transform -skew-x-12">
                    Sub<span className="text-transparent text-stroke-white">Culture</span>
                </Link>
                <div className="flex gap-4 text-lg font-bold uppercase tracking-widest">
                    <Link href="/variances/urban-street/about" className="hover:bg-white hover:text-black px-2 transition-all">About</Link>
                    <Link href="/variances/urban-street/category/lifestyle" className="hover:bg-white hover:text-black px-2 transition-all">Life</Link>
                    <Link href="/variances/urban-street/category/fashion" className="hover:bg-white hover:text-black px-2 transition-all">Style</Link>
                    <Link href="/variances/urban-street/author" className="bg-yellow-400 text-black px-4 hover:scale-110 transition-transform skew-x-12">Team</Link>
                </div>
            </nav>

            <header className="py-24 px-6 border-b-4 border-white relative overflow-hidden">
                <div className="absolute top-0 right-0 text-[20rem] font-black opacity-10 leading-none select-none pointer-events-none text-stroke-white text-transparent">
                    URBAN
                </div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <h1 className="text-7xl md:text-9xl font-black bg-white text-black inline-block px-4 mb-8 transform -rotate-2">
                        NOISE
                    </h1>
                    <h1 className="text-7xl md:text-9xl font-black text-transparent text-stroke-white opacity-50 block -mt-4 ml-12">
                        LEVEL
                    </h1>
                    <p className="text-xl md:text-2xl font-mono text-yellow-400 max-w-xl mt-8 bg-black/80 backdrop-blur-sm border border-yellow-400 p-4">
                        Raw thoughts from the concrete jungle. High contrast living.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-l-4 border-t-4 border-white">
                    {posts.map((post, i) => (
                        <div key={post.slug} className="group border-r-4 border-b-4 border-white p-8 hover:bg-yellow-400 hover:text-black transition-colors relative overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-0 group-hover:opacity-10 transition-opacity">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover grayscale"
                                />
                            </div>
                            <div className="absolute top-4 right-4 text-4xl font-black opacity-10 group-hover:opacity-20 z-10">0{i + 1}</div>

                            <div className="mb-6 relative z-10">
                                <span className="inline-block bg-white text-black text-xs font-bold uppercase px-2 py-1 transform rotate-1 group-hover:bg-black group-hover:text-white transition-colors">
                                    {post.category}
                                </span>
                            </div>

                            <Link href={`/variances/urban-street/article/${post.slug}`} className="relative z-10 block">
                                <h2 className="text-4xl font-black uppercase leading-[0.85] mb-4 group-hover:underline decoration-4 underline-offset-4">
                                    {post.title}
                                </h2>
                            </Link>

                            <p className="font-mono text-sm leading-relaxed mb-6 border-l-2 border-white/50 pl-4 group-hover:border-black/50 relative z-10">
                                {post.excerpt}
                            </p>

                            <Link href={`/variances/urban-street/article/${post.slug}`} className="inline-block font-black uppercase text-xl underline decoration-2 hover:no-underline relative z-10">
                                Read This →
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white text-black py-24 px-6">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end">
                    <h2 className="text-9xl font-black uppercase tracking-tighter leading-none opacity-10">END</h2>
                    <div className="text-right font-mono font-bold">
                        <p>EST. 2024</p>
                        <p>CONCRETE / DIGITAL</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
