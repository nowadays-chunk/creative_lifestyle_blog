import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function HighFashionHome() {
    return (
        <div className="bg-white min-h-screen font-sans text-black selection:bg-black selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md flex justify-between items-center px-12 py-6 border-b border-black">
                <Link href="/variances/high-fashion" className="text-4xl font-serif tracking-widest uppercase font-bold">
                    Vogue<span className="font-light">Noir</span>
                </Link>
                <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em]">
                    <Link href="/variances/high-fashion/about" className="hover:line-through transition-all">Manifesto</Link>
                    <Link href="/variances/high-fashion/category/fashion" className="hover:line-through transition-all">Collections</Link>
                    <Link href="/variances/high-fashion/category/art" className="hover:line-through transition-all">Culture</Link>
                    <Link href="/variances/high-fashion/author" className="hover:line-through transition-all">Talent</Link>
                </div>
            </nav>

            <header className="pt-48 pb-24 px-12 flex flex-col items-start min-h-[80vh] justify-center relative overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/images/hero-background.jpg"
                        alt="Hero"
                        fill
                        className="object-cover opacity-10 grayscale"
                    />
                </div>
                <h1 className="text-[8vw] leading-[0.85] font-black uppercase tracking-tighter mb-12 mix-blend-exclusion">
                    Modern <br /> <span className="italic font-serif font-light">Elegance.</span>
                </h1>
                <div className="w-full border-t border-black pt-6 flex justify-between items-end">
                    <p className="text-sm uppercase tracking-widest max-w-sm font-medium">
                        Defining the intersection of style and substance.
                    </p>
                    <span className="text-9xl font-serif hidden md:block">*</span>
                </div>
            </header>

            <main className="px-12 pb-24 border-t border-black">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-black">
                    {posts.map((post) => (
                        <div key={post.slug} className="bg-white p-12 min-h-[600px] flex flex-col justify-between group hover:bg-black hover:text-white transition-colors duration-500 relative">
                            <div className="flex justify-between items-start">
                                <span className="text-xs font-bold uppercase tracking-[0.2em] border-b border-current pb-1">
                                    {post.category}
                                </span>
                                <span className="font-serif italic opacity-50">No. {post.id}</span>
                            </div>

                            <div className="my-8 relative w-full h-80 overflow-hidden border border-black grayscale group-hover:grayscale-0 transition-all duration-700">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                            </div>

                            <div>
                                <Link href={`/variances/high-fashion/article/${post.slug}`}>
                                    <h2 className="text-4xl font-serif leading-tight mb-6 group-hover:italic transition-all">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-sm font-medium leading-relaxed opacity-60 group-hover:opacity-100 transition-opacity">
                                    {post.excerpt}
                                </p>
                            </div>

                            <Link href={`/variances/high-fashion/article/${post.slug}`} className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity">
                                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                                </svg>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-black text-white py-24 px-12 flex flex-col md:flex-row justify-between items-start">
                <div>
                    <span className="text-2xl font-serif tracking-widest uppercase block mb-8">
                        VogueNoir
                    </span>
                    <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        © 2024. All Rights Reserved.
                    </p>
                </div>
                <div className="space-y-2 text-right">
                    <a href="#" className="block text-sm uppercase tracking-widest hover:text-gray-400">Instagram</a>
                    <a href="#" className="block text-sm uppercase tracking-widest hover:text-gray-400">Twitter</a>
                    <a href="#" className="block text-sm uppercase tracking-widest hover:text-gray-400">Email</a>
                </div>
            </footer>
        </div>
    );
}
