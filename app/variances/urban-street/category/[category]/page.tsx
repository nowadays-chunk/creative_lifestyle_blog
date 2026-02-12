import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function UrbanCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-yellow-400 selection:text-black">
            <nav className="p-6 md:p-12 border-b-4 border-white">
                <Link href="/variances/urban-street" className="text-5xl font-black tracking-tighter uppercase italic hover:text-yellow-400 transition-colors transform -skew-x-12">
                    Sub<span className="text-transparent text-stroke-white">Culture</span>
                </Link>
            </nav>

            <div className="border-b-4 border-white bg-yellow-400 text-black p-12">
                <h1 className="text-8xl md:text-[10rem] font-black uppercase leading-none tracking-tighter mix-blend-multiply opacity-50 break-all">
                    {decodedCategory}
                </h1>
            </div>

            <main className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid gap-12">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="flex flex-col md:flex-row gap-8 border-b-2 border-white/20 pb-8 group">
                            <div className="md:w-1/3 text-4xl font-black text-transparent text-stroke-white group-hover:text-yellow-400 transition-colors">
                                {post.date}
                            </div>
                            <div className="md:w-2/3">
                                <Link href={`/variances/urban-street/article/${post.slug}`}>
                                    <h2 className="text-5xl font-black uppercase leading-[0.85] mb-4 hover:bg-white hover:text-black inline-block transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="font-mono text-sm">{post.excerpt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
