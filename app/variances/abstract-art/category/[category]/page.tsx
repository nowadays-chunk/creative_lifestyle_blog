import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function AbstractCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#FFFFF0] min-h-screen font-sans text-gray-900 selection:bg-purple-300">
            <nav className="p-8 max-w-7xl mx-auto md:p-12">
                <Link href="/variances/abstract-art" className="text-2xl font-black tracking-tight border-b-4 border-black inline-block pb-1">
                    CANVAS
                </Link>
            </nav>

            <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-1/3 md:sticky md:top-24">
                    <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-6 text-stroke-2">
                        {decodedCategory}
                    </h1>
                    <div className="w-24 h-24 bg-red-400 rounded-full mix-blend-multiply opacity-80 animate-bounce"></div>
                </div>

                <div className="md:w-2/3 grid gap-12">
                    {categoryPosts.map((post, i) => (
                        <div key={post.slug} className="group relative">
                            <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform border-2 border-black"></div>
                            <div className="relative bg-white border-2 border-black p-8 hover:-translate-y-1 transition-transform">
                                <span className="text-xs font-black uppercase tracking-widest text-gray-400 mb-2 block">
                                    {post.date}
                                </span>
                                <Link href={`/variances/abstract-art/article/${post.slug}`}>
                                    <h2 className="text-3xl font-black mb-3 group-hover:text-purple-600 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="font-medium text-gray-600">
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
