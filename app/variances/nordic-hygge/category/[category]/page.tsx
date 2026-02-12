import { posts } from '@/lib/blog-data';
import Link from 'next/link';

export default async function NordicCategory({ params }: { params: Promise<{ category: string }> }) {
    const { category } = await params;
    const decodedCategory = decodeURIComponent(category);
    const categoryPosts = posts.filter(p => p.category.toLowerCase() === decodedCategory.toLowerCase()) || posts;

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#4A4A4A] selection:bg-[#D4C4B7]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex justify-center">
                <Link href="/variances/nordic-hygge" className="text-2xl font-serif tracking-widest text-[#2C2C2C]">
                    H Y G G E
                </Link>
            </nav>

            <header className="py-24 text-center px-6">
                <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2C2C2C] mb-6 capitalize leading-tight">
                    {decodedCategory}
                </h1>
                <p className="text-sm font-light text-[#8C8C8C] tracking-wide uppercase">
                    Collection
                </p>
            </header>

            <main className="max-w-4xl mx-auto px-6 pb-32">
                <div className="space-y-24">
                    {categoryPosts.map((post) => (
                        <div key={post.slug} className="flex flex-col md:flex-row gap-12 items-center group">
                            <div className="md:w-1/2 aspect-[4/3] bg-[#EBE8E3] w-full overflow-hidden">
                                <div className="w-full h-full bg-[#2C2C2C] opacity-0 group-hover:opacity-5 transition-opacity duration-700"></div>
                            </div>
                            <div className="md:w-1/2 text-center md:text-left">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C8C8C] mb-3 block">
                                    {post.date}
                                </span>
                                <Link href={`/variances/nordic-hygge/article/${post.slug}`}>
                                    <h2 className="text-3xl font-serif font-normal text-[#2C2C2C] mb-4 leading-snug hover:underline decoration-1 underline-offset-4 decoration-[#D4C4B7] transition-all">
                                        {post.title}
                                    </h2>
                                </Link>
                                <p className="text-sm font-light text-[#666] leading-relaxed mb-6">
                                    {post.excerpt}
                                </p>
                                <Link href={`/variances/nordic-hygge/article/${post.slug}`} className="text-xs font-bold uppercase tracking-widest text-[#2C2C2C] border-b border-[#2C2C2C] pb-1 hover:border-transparent transition-all">
                                    View Post
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
