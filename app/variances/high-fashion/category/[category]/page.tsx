import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function FashionCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-white min-h-screen font-sans text-black selection:bg-black selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-12 py-6 border-b border-black">
                <Link href="/variances/high-fashion" className="text-2xl font-serif tracking-widest uppercase font-bold">
                    VN
                </Link>
            </nav>

            <header className="pt-48 pb-12 px-12 border-b border-black">
                <h1 className="text-[12vw] leading-none font-black uppercase tracking-tighter">
                    {decodedCategory}
                </h1>
            </header>

            <main className="px-12 py-24">
                <div className="space-y-px bg-black border border-black">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="bg-white p-12 flex flex-col md:flex-row justify-between items-center group hover:bg-black hover:text-white transition-colors duration-500">
                            <div className="md:w-1/4 font-mono text-xs uppercase tracking-widest opacity-50 mb-4 md:mb-0">
                                {post.date}
                            </div>
                            <div className="md:w-2/4 text-center">
                                <Link href={`/variances/high-fashion/article/${post.slug}`}>
                                    <h2 className="text-4xl font-serif italic mb-2 group-hover:not-italic transition-all">
                                        {post.title}
                                    </h2>
                                </Link>
                            </div>
                            <div className="md:w-1/4 text-right">
                                <Link href={`/variances/high-fashion/article/${post.slug}`} className="inline-block text-xs font-bold uppercase tracking-[0.2em] border-b border-current pb-1 opacity-0 group-hover:opacity-100 transition-all">
                                    Read
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
