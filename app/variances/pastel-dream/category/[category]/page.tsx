import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function PastelCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#FFF0F5] min-h-screen font-sans text-gray-700 selection:bg-pink-200">
            <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/variances/pastel-dream" className="text-2xl font-bold tracking-tight text-pink-400 font-serif">
                    Cloud<span className="text-blue-300">Nine</span>.
                </Link>
            </nav>

            <header className="py-16 text-center px-4">
                <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 font-serif capitalize">
                    {decodedCategory}
                </h1>
                <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                    Curated stories about {decodedCategory.toLowerCase()}.
                </p>
            </header>

            <main className="max-w-6xl mx-auto px-6 pb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categoryPosts.length > 0 ? categoryPosts.map((post) => (
                        <div key={post.slug} className="bg-white rounded-[2rem] p-6 shadow-sm hover:shadow-md transition-all">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs text-gray-400">{post.date}</span>
                            </div>
                            <Link href={`/variances/pastel-dream/article/${post.slug}`}>
                                <h2 className="text-xl font-bold mb-3 text-gray-800 hover:text-pink-400 transition-colors font-serif">
                                    {post.title}
                                </h2>
                            </Link>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-3">
                                {post.excerpt}
                            </p>
                        </div>
                    )) : (
                        <div className="col-span-full text-center py-20 text-gray-400">
                            No posts found in this category.
                        </div>
                    )}
                </div>
            </main>
        </div>
    );
}
