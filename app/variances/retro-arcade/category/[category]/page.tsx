import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function RetroCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#2C0E37] min-h-screen font-mono text-white selection:bg-[#E6007A]">
            <nav className="p-8 max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/variances/retro-arcade" className="text-2xl font-black tracking-widest text-[#00FFFF] drop-shadow-[2px_2px_0_#E6007A]">
                    PIXEL_LOG
                </Link>
            </nav>

            <header className="py-16 text-center">
                <h1 className="text-6xl md:text-8xl font-black text-[#E6007A] uppercase tracking-tighter drop-shadow-[4px_4px_0_white] mb-4">
                    {decodedCategory}
                </h1>
                <p className="text-[#FFFF00] text-xl font-bold uppercase tracking-widest animate-pulse">
                    Select a file to load
                </p>
            </header>

            <main className="max-w-4xl mx-auto px-6 pb-24">
                <div className="space-y-4">
                    {categoryPosts.map((post, i) => (
                        <div key={post.slug} className="bg-black border-2 border-white p-4 flex flex-col md:flex-row items-center gap-4 hover:bg-[#00FFFF] hover:text-black hover:border-black transition-colors group cursor-pointer shadow-[4px_4px_0_rgba(0,0,0,0.5)]">
                            <div className="font-bold text-xl md:w-16 text-center text-[#E6007A] group-hover:text-black">
                                {i + 1 < 10 ? `0${i + 1}` : i + 1}
                            </div>
                            <div className="flex-1 text-center md:text-left">
                                <Link href={`/variances/retro-arcade/article/${post.slug}`} className="block">
                                    <h2 className="text-xl font-bold uppercase truncate">{post.title}</h2>
                                </Link>
                            </div>
                            <div className="text-xs font-bold uppercase tracking-widest opacity-60 group-hover:opacity-100">
                                Date: {post.date}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
