import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Cozy Living - The Nordic Way of Hygge",
    description: "Embrace simplicity, warmth, and togetherness. Exploring the Scandinavian art of Hygge for a more mindful and cozy life.",
    keywords: ["hygge", "nordic living", "cozy lifestyle", "mindfulness", "scandinavian design", "simplicity"],
};

export default function NordicHyggeHome() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#4A4A4A] selection:bg-[#D4C4B7]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <Link href="/variances/nordic-hygge" className="text-2xl font-serif tracking-widest text-[#2C2C2C] border-b border-[#2C2C2C] pb-1">
                    H Y G G E
                </Link>
                <div className="flex gap-8 text-sm font-light tracking-wide text-[#666]">
                    <Link href="/variances/nordic-hygge/about" className="hover:text-[#2C2C2C] transition-colors">Journal</Link>
                    <Link href="/variances/nordic-hygge/category/lifestyle" className="hover:text-[#2C2C2C] transition-colors">Living</Link>
                    <Link href="/variances/nordic-hygge/category/design" className="hover:text-[#2C2C2C] transition-colors">Space</Link>
                    <Link href="/variances/nordic-hygge/author" className="hover:text-[#2C2C2C] transition-colors">People</Link>
                </div>
            </nav>

            <header className="py-24 px-6 max-w-5xl mx-auto text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">
                    Vol. 24 / Autumn Collection
                </p>
                <h1 className="text-5xl md:text-6xl font-serif font-light text-[#2C2C2C] mb-8 leading-tight">
                    Finding comfort in the <br /> simplest moments.
                </h1>
                <div className="w-12 h-px bg-[#D4C4B7] mx-auto"></div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
                    {posts.map((post) => (
                        <div key={post.slug} className="group">
                            <div className="aspect-[3/4] bg-[#EBE8E3] mb-8 overflow-hidden relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[#2C2C2C] opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                            </div>

                            <div className="flex flex-col items-center text-center">
                                <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#8C8C8C] mb-3">
                                    {post.category}
                                </span>
                                <Link href={`/variances/nordic-hygge/article/${post.slug}`}>
                                    <h2 className="text-2xl font-serif font-normal text-[#2C2C2C] mb-4 leading-snug group-hover:text-[#8C857D] transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-sm font-light text-[#666] leading-relaxed mb-6 max-w-xs line-clamp-3">
                                    {post.excerpt}
                                </p>
                                <Link href={`/variances/nordic-hygge/article/${post.slug}`} className="text-xs font-bold uppercase tracking-widest text-[#2C2C2C] border-b border-transparent group-hover:border-[#2C2C2C] transition-all pb-1">
                                    Read Story
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-[#F0EFEA] py-24 px-6 text-center">
                <Link href="/variances/nordic-hygge" className="text-xl font-serif tracking-widest text-[#2C2C2C] mb-8 inline-block">
                    H Y G G E
                </Link>
                <p className="text-xs font-light text-[#8C8C8C] tracking-wide">
                    © 2024 Nordic Hygge. Simplicity is the ultimate sophistication.
                </p>
            </footer>
        </div>
    );
}
