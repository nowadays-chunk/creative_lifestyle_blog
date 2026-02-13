import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Soft Hues - A Pastel Dreamscape",
    description: "Explore a world of soft colors and gentle aesthetics. A blog dedicated to pastel design, airy spaces, and dreamlike inspiration.",
    keywords: ["pastel aesthetics", "soft colors", "dreamy design", "minimalist pastel", "lifestyle blog"],
};

export default function PastelDreamHome() {
    return (
        <div className="bg-[#FFF0F5] min-h-screen font-sans text-gray-700 selection:bg-pink-200">
            <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/variances/pastel-dream" className="text-3xl font-bold tracking-tight text-pink-400 font-serif">
                    Cloud<span className="text-blue-300">Nine</span>.
                </Link>
                <div className="space-x-8 text-sm font-medium text-gray-500">
                    <Link href="/variances/pastel-dream/about" className="hover:text-pink-400 transition-colors">About</Link>
                    <Link href="/variances/pastel-dream/category/lifestyle" className="hover:text-pink-400 transition-colors">Lifestyle</Link>
                    <Link href="/variances/pastel-dream/category/fashion" className="hover:text-pink-400 transition-colors">Fashion</Link>
                    <Link href="/variances/pastel-dream/author" className="px-4 py-2 rounded-full bg-white text-pink-400 shadow-sm hover:shadow-md transition-all">Authors</Link>
                </div>
            </nav>

            <header className="py-20 text-center px-4">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-500 text-xs font-bold uppercase tracking-wider mb-4">Welcome to the dream</span>
                <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 font-serif">
                    Soft Living for <br /><span className="text-pink-400 italic">Modern Souls</span>
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                    A collection of thoughts on minimalism, wellness, and aesthetic living.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post) => (
                        <div key={post.slug} className="group bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                            <div className="h-48 rounded-2xl bg-gray-100 mb-6 overflow-hidden relative">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                                />
                                <div className="absolute inset-0 bg-gradient-to-tr from-pink-200 to-blue-200 opacity-20 group-hover:opacity-0 transition-opacity"></div>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-3 py-1 rounded-full bg-pink-50 text-pink-500 text-xs font-bold uppercase">{post.category}</span>
                                <span className="text-xs text-gray-400">• {post.readTime}</span>
                            </div>
                            <Link href={`/variances/pastel-dream/article/${post.slug}`}>
                                <h2 className="text-2xl font-bold mb-3 text-gray-800 group-hover:text-pink-400 transition-colors font-serif leading-tight">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                                {post.excerpt}
                            </p>
                            <Link href={`/variances/pastel-dream/article/${post.slug}`} className="inline-flex items-center text-sm font-bold text-blue-400 hover:text-blue-500 transition-colors">
                                Read More <span className="ml-2">→</span>
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white py-12 text-center border-t border-pink-100">
                <p className="text-gray-400 text-sm">© 2024 CloudNine. Designed with love.</p>
            </footer>
        </div>
    );
}
