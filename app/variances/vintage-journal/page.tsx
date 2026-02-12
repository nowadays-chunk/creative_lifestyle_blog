import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function VintageJournalHome() {
    return (
        <div className="bg-[#FAF0E6] min-h-screen font-serif text-[#4B3621] selection:bg-[#D2B48C]">
            {/* Texture Overlay */}
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>

            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 border-l border-r border-[#D2B48C] min-h-screen bg-[#FFF8E7] shadow-xl">
                <nav className="text-center border-b-2 border-double border-[#4B3621] pb-8 mb-12">
                    <Link href="/variances/vintage-journal" className="text-5xl md:text-6xl font-black tracking-tighter uppercase font-mono">
                        The Daily Log
                    </Link>
                    <p className="italic text-sm mt-2 text-[#8B4513]">Est. 1984. Recorded for Posterity.</p>

                    <div className="flex justify-center gap-6 mt-6 font-bold text-sm uppercase tracking-widest border-t border-[#4B3621] pt-4 w-max mx-auto px-8">
                        <Link href="/variances/vintage-journal/about" className="hover:underline">About</Link>
                        <Link href="/variances/vintage-journal/category/lifestyle" className="hover:underline">Lifestyle</Link>
                        <Link href="/variances/vintage-journal/author" className="hover:underline">Writers</Link>
                    </div>
                </nav>

                <main>
                    <div className="grid grid-cols-1 gap-12">
                        {posts.map((post) => (
                            <article key={post.slug} className="mb-12 border-b border-dashed border-[#8B4513] pb-12 last:border-0">
                                <div className="flex flex-col md:flex-row gap-8 items-start">
                                    <div className="md:w-1/4 pt-2">
                                        <div className="w-full aspect-square relative mb-4 bg-white p-2 shadow-md rotate-1">
                                            <div className="relative w-full h-full overflow-hidden grayscale sepia">
                                                <Image
                                                    src={post.image}
                                                    alt={post.title}
                                                    fill
                                                    className="object-cover"
                                                />
                                            </div>
                                        </div>
                                        <span className="block font-mono text-xs uppercase text-[#8B4513] mb-2">DATE: {post.date}</span>
                                        <span className="block font-mono text-xs uppercase text-[#8B4513]">FILE: {post.category}</span>
                                    </div>
                                    <div className="md:w-3/4">
                                        <Link href={`/variances/vintage-journal/article/${post.slug}`}>
                                            <h2 className="text-3xl md:text-4xl font-bold mb-4 hover:underline leading-tight text-[#2F1B0C]">
                                                {post.title}
                                            </h2>
                                        </Link>
                                        <p className="font-serif text-lg leading-relaxed text-[#5D4037] mb-6">
                                            {post.excerpt}
                                        </p>
                                        <Link href={`/variances/vintage-journal/article/${post.slug}`} className="inline-block px-4 py-2 border border-[#4B3621] text-xs font-bold uppercase tracking-widest hover:bg-[#4B3621] hover:text-[#FFF8E7] transition-colors">
                                            Continue Reading
                                        </Link>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </main>

                <footer className="mt-24 text-center border-t-2 border-double border-[#4B3621] pt-8">
                    <p className="font-mono text-xs text-[#8B4513] uppercase">
                        Typewritten by Antigravity. © 2024.
                    </p>
                </footer>
            </div>
        </div>
    );
}
