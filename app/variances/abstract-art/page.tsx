import Link from 'next/link';
import Image from 'next/image';
import { posts } from '@/lib/blog-data';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Chaos & Color - The Abstract Art Experience",
    description: "Explore the intersection of raw emotion and vivid color. A digital gallery dedicated to the power of abstract expressionism.",
    keywords: ["abstract art", "expressionism", "modern art", "creative inspiration", "digital gallery"],
};

export default function AbstractArtHome() {
    return (
        <div className="bg-[#FFFFF0] min-h-screen font-sans text-gray-900 selection:bg-purple-300 relative overflow-x-hidden">
            {/* Background Shapes */}
            <div className="fixed top-0 right-0 w-[50vh] h-[50vh] bg-yellow-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2 -z-10"></div>
            <div className="fixed bottom-0 left-0 w-[60vh] h-[60vh] bg-red-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2 -z-10"></div>
            <div className="fixed top-[40%] left-[20%] w-[40vh] h-[40vh] bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -z-10"></div>

            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center relative z-10">
                <Link href="/variances/abstract-art" className="text-4xl font-black tracking-tight relative group">
                    <span className="relative z-10">CANVAS</span>
                    <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-400 -z-0 group-hover:h-full transition-all duration-300"></span>
                </Link>
                <div className="flex flex-wrap gap-4 mt-4 md:mt-0 font-bold text-sm">
                    <Link href="/variances/abstract-art/about" className="px-4 py-2 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all shadow-[4px_4px_0_black] hover:shadow-none hover:translate-x-1 hover:translate-y-1">Manifesto</Link>
                    <Link href="/variances/abstract-art/category/design" className="px-4 py-2 bg-purple-200 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all shadow-[4px_4px_0_black]">Design</Link>
                    <Link href="/variances/abstract-art/author" className="px-4 py-2 bg-blue-200 border-2 border-black rounded-lg hover:bg-black hover:text-white transition-all shadow-[4px_4px_0_black]">Artists</Link>
                </div>
            </nav>

            <header className="py-24 px-6 md:px-12 relative z-10">
                <div className="max-w-4xl">
                    <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[0.9]">
                        THINK <br />
                        <span className="text-transparent text-stroke-black ml-12">OUTSIDE</span> <br />
                        THE <span className="bg-red-400 text-white px-2 italic transform -skew-x-12 inline-block">GRID.</span>
                    </h1>
                    <p className="text-xl md:text-2xl font-bold max-w-xl bg-white border-2 border-black p-6 shadow-[8px_8px_0_rgba(0,0,0,0.1)] rotate-1">
                        A non-linear exploration of creativity, color, and form.
                    </p>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 pb-32 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {posts.map((post, i) => (
                        <div key={post.slug} className={`bg-white border-2 border-black p-6 flex flex-col justify-between shadow-[8px_8px_0_black] hover:shadow-[16px_16px_0_black] hover:-translate-y-2 transition-all duration-300 ${i % 2 === 0 ? 'rotate-1' : '-rotate-1'} hover:rotate-0`}>
                            <div className="mb-6">
                                <span className={`inline-block px-3 py-1 text-xs font-bold uppercase border border-black ${i % 3 === 0 ? 'bg-yellow-300' : i % 3 === 1 ? 'bg-red-300' : 'bg-blue-300'}`}>
                                    {post.category}
                                </span>
                            </div>

                            <Link href={`/variances/abstract-art/article/${post.slug}`}>
                                <h2 className="text-3xl font-bold leading-tight mb-4 hover:underline decoration-4 decoration-purple-400">
                                    {post.title}
                                </h2>
                            </Link>

                            <div className="w-full h-48 border-2 border-black mb-6 relative overflow-hidden group-hover:invert transition-all">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="w-12 h-1 bg-black mb-4"></div>

                            <p className="text-gray-600 text-sm font-medium leading-relaxed mb-6">
                                {post.excerpt}
                            </p>

                            <Link href={`/variances/abstract-art/article/${post.slug}`} className="self-start text-xs font-black uppercase tracking-widest bg-black text-white px-4 py-2 hover:bg-transparent hover:text-black border-2 border-transparent hover:border-black transition-all">
                                Explore
                            </Link>
                        </div>
                    ))}
                </div>
            </main>

            <footer className="bg-white border-t-4 border-black py-16 px-6 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-4xl font-black">
                        C / A
                    </div>
                    <p className="text-sm font-bold">
                        © 2024 Abstract Media.
                    </p>
                </div>
            </footer>
        </div>
    );
}
