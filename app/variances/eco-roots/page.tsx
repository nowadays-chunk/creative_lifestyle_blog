import { Metadata } from 'next';
import Link from 'next/link';
export const metadata: Metadata = {
    title: "Eco Roots - Sustainable Living & Stories",
    description: "Discover the path to a greener future. Tips, stories, and inspiration for a sustainable and eco-conscious lifestyle.",
    keywords: ["sustainable living", "eco-friendly", "green lifestyle", "sustainability", "eco roots"],
};
import Image from 'next/image';
import { posts } from '@/lib/blog-data';

export default function EcoRootsHome() {
    return (
        <div className="bg-[#E9F5DB] min-h-screen font-sans text-[#2D3A1E] selection:bg-[#B5C99A]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center bg-white/50 backdrop-blur-sm rounded-[3rem] mt-6 mx-6 shadow-sm">
                <Link href="/variances/eco-roots" className="text-3xl font-bold tracking-tight text-[#4A6741] flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#718355]"></span>
                    EcoRoots
                </Link>
                <div className="flex gap-8 text-sm font-medium text-[#718355]">
                    <Link href="/variances/eco-roots/about" className="hover:text-[#2D3A1E] transition-colors">Mission</Link>
                    <Link href="/variances/eco-roots/category/sustainability" className="hover:text-[#2D3A1E] transition-colors">Green Living</Link>
                    <Link href="/variances/eco-roots/category/nature" className="hover:text-[#2D3A1E] transition-colors">Nature</Link>
                    <Link href="/variances/eco-roots/author" className="px-4 py-2 rounded-full bg-[#4A6741] text-white hover:bg-[#2D3A1E] transition-colors">Community</Link>
                </div>
            </nav>

            <header className="py-24 px-6 text-center">
                <h1 className="text-5xl md:text-7xl font-bold text-[#2D3A1E] mb-6">
                    Grow your daily <br /> <span className="text-[#718355]">consciousness.</span>
                </h1>
                <p className="text-xl text-[#4F5D3F] max-w-2xl mx-auto leading-relaxed">
                    Exploring the roots of sustainable design and organic living.
                </p>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.slug} className="group bg-[#CFE1B9]/30 rounded-[2rem] overflow-hidden hover:bg-[#B5C99A]/40 transition-colors duration-500">
                            <div className="relative h-48 w-full overflow-hidden">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700 grayscale group-hover:grayscale-0"
                                />
                                <div className="absolute inset-0 bg-[#718355]/10 mix-blend-multiply"></div>
                            </div>
                            <div className="p-8">
                                <div className="flex justify-between items-center mb-6">
                                    <span className="bg-[#718355] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                                        {post.category}
                                    </span>
                                    <span className="text-xs font-bold text-[#4F5D3F]">{post.readTime}</span>
                                </div>

                                <Link href={`/variances/eco-roots/article/${post.slug}`}>
                                    <h2 className="text-2xl font-bold text-[#2D3A1E] mb-4 leading-tight group-hover:text-[#4A6741] transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>

                                <p className="text-[#4F5D3F] text-sm leading-relaxed mb-6 line-clamp-2">
                                    {post.excerpt}
                                </p>

                                <Link href={`/variances/eco-roots/article/${post.slug}`} className="text-[#2D3A1E] font-bold text-sm border-b-2 border-[#718355] pb-1 hover:border-[#2D3A1E] transition-all">
                                    Read More
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-[#2D3A1E] text-[#E9F5DB] py-12 px-6 rounded-t-[3rem] mx-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
                    <span className="font-bold text-2xl">EcoRoots</span>
                    <p className="text-sm opacity-60">© 2024. Planted with intention.</p>
                </div>
            </footer>
        </div>
    );
}
