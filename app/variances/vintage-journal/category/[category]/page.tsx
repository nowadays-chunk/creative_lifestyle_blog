import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function VintageCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#FAF0E6] min-h-screen font-serif text-[#4B3621] selection:bg-[#D2B48C]">
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>

            <div className="max-w-5xl mx-auto px-6 py-12 relative z-10 border-l border-r border-[#D2B48C] min-h-screen bg-[#FFF8E7] shadow-xl">
                <nav className="text-center pb-8 mb-12 border-b border-[#D2B48C]">
                    <Link href="/variances/vintage-journal" className="text-3xl font-black tracking-tighter uppercase font-mono">
                        The Daily Log
                    </Link>
                </nav>

                <header className="mb-16 pl-6 border-l-4 border-[#4B3621]">
                    <h1 className="text-5xl font-bold text-[#2F1B0C] mb-2 capitalize">
                        {decodedCategory}
                    </h1>
                    <p className="font-mono text-sm uppercase text-[#8B4513]">
                        Archive Volume: {decodedCategory.toUpperCase()}
                    </p>
                </header>

                <div className="space-y-12">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="flex gap-6 items-baseline group">
                            <span className="font-mono text-xs text-[#8B4513] shrink-0 w-24">
                                {post.date}
                            </span>
                            <div>
                                <Link href={`/variances/vintage-journal/article/${post.slug}`}>
                                    <h2 className="text-2xl font-bold text-[#2F1B0C] hover:underline decoration-[#8B4513] underline-offset-4 decoration-2">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-sm italic text-[#5D4037] mt-2 line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
