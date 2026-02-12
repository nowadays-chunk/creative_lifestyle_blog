import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function RetroArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#2C0E37] min-h-screen font-mono text-white selection:bg-[#E6007A]">
            <div className="p-2 bg-black text-[#00FFFF] text-center text-xs font-bold uppercase tracking-widest border-b-2 border-white">
                Loading Content... 100%
            </div>

            <nav className="p-8 max-w-4xl mx-auto">
                <Link href="/variances/retro-arcade" className="inline-block bg-white text-black px-4 py-2 font-bold uppercase text-sm hover:bg-[#FFFF00] border-4 border-black shadow-[4px_4px_0_white]">
                    &lt; Back to Menu
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 pb-24">
                <div className="bg-black border-4 border-white p-8 md:p-12 shadow-[12px_12px_0_#E6007A]">
                    <header className="mb-12 border-b-4 border-white/20 pb-8 text-center">
                        <div className="inline-block bg-[#00FFFF] text-black px-2 py-1 font-bold text-xs uppercase mb-6 transform -rotate-2">
                            Zone: {post.category}
                        </div>
                        <h1 className="text-3xl md:text-5xl font-black uppercase text-[#FFFF00] mb-8 leading-tight drop-shadow-[2px_2px_0_#E6007A]">
                            {post.title}
                        </h1>

                        <div className="w-full h-64 border-4 border-white mb-8 relative">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                style={{ imageRendering: 'pixelated' }}
                            />
                            <div className="absolute inset-0 bg-[#E6007A]/10 pointer-events-none"></div>
                        </div>

                        <div className="flex justify-center gap-8 text-xs font-bold uppercase text-gray-400">
                            <div className="flex items-center gap-2">
                                <div className="w-6 h-6 bg-gray-500 border-2 border-white relative overflow-hidden">
                                    <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                                </div>
                                <span className="text-white">{author.name}</span>
                            </div>
                            <span>Score: {post.readTime}</span>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-p:text-gray-300 prose-headings:text-[#00FFFF] max-w-none font-medium">
                        <p className="lead text-lg text-white border-l-4 border-[#E6007A] pl-4 mb-8 bg-[#E6007A]/10 py-2">
                            {post.excerpt}
                        </p>
                        <p>
                            {post.content}
                        </p>
                        <div className="bg-[#2C0E37] border-2 border-dashed border-white p-6 my-8 text-center">
                            <p className="text-[#FFFF00] mb-2">*** BONUS STAGE ***</p>
                            <p className="text-sm">Hidden content unlocked.</p>
                        </div>
                        <h3>Strategy Guide</h3>
                        <p>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-2 justify-center">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-[#00FFFF] text-black px-2 py-1 font-bold text-xs uppercase hover:bg-white cursor-pointer border-2 border-black">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
