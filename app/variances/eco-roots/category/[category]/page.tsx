import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function EcoCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#E9F5DB] min-h-screen font-sans text-[#2D3A1E] selection:bg-[#B5C99A]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto">
                <Link href="/variances/eco-roots" className="text-2xl font-bold tracking-tight text-[#4A6741] flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#718355]"></span>
                    EcoRoots
                </Link>
            </nav>

            <header className="py-16 text-center px-6">
                <span className="text-[#718355] text-xs font-bold uppercase tracking-widest mb-4 block">
                    Browse By Topic
                </span>
                <h1 className="text-4xl md:text-6xl font-bold text-[#2D3A1E] mb-2 capitalize">
                    {decodedCategory}
                </h1>
            </header>

            <main className="max-w-5xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="bg-white/60 p-8 rounded-[2rem] hover:bg-white transition-colors shadow-sm">
                            <span className="text-[#718355] text-xs font-bold uppercase tracking-widest">
                                {post.date}
                            </span>
                            <Link href={`/variances/eco-roots/article/${post.slug}`}>
                                <h2 className="text-2xl font-bold text-[#2D3A1E] mt-3 mb-3 hover:text-[#4A6741] transition-colors leading-tight">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-[#4F5D3F] text-sm leading-relaxed mb-4">
                                {post.excerpt}
                            </p>
                            <Link href={`/variances/eco-roots/article/${post.slug}`} className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#B5C99A] text-[#2D3A1E] hover:bg-[#718355] hover:text-white transition-colors">
                                →
                            </Link>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
