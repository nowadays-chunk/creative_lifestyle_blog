import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function VintageArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#FAF0E6] min-h-screen font-serif text-[#4B3621] selection:bg-[#D2B48C]">
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>

            <div className="max-w-4xl mx-auto px-8 md:px-16 py-12 relative z-10 border-l border-r border-[#D2B48C] min-h-screen bg-[#FFF8E7] shadow-xl">
                <nav className="mb-12">
                    <Link href="/variances/vintage-journal" className="font-mono text-sm uppercase tracking-widest hover:underline text-[#8B4513]">
                        ← Return to Log
                    </Link>
                </nav>

                <header className="mb-12 text-center border-b-2 border-[#4B3621] pb-12">
                    <div className="mb-6 font-mono text-xs text-[#8B4513] uppercase border border-[#8B4513] inline-block px-2 py-1">
                        Category: {post.category}
                    </div>
                    <h1 className="text-4xl md:text-5xl font-black text-[#2F1B0C] mb-6 leading-tight">
                        {post.title}
                    </h1>
                    <div className="w-full max-w-2xl mx-auto aspect-video relative mb-8 bg-white p-3 shadow-lg transform rotate-1">
                        <div className="relative w-full h-full overflow-hidden grayscale sepia contrast-125">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    <div className="font-mono text-xs uppercase flex justify-center gap-4 text-[#5D4037] items-center">
                        <span>Authored By: {author.name}</span>
                        <div className="w-8 h-8 relative rounded-full overflow-hidden border border-[#8B4513] grayscale sepia">
                            <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                        </div>
                        <span>//</span>
                        <span>Date: {post.date}</span>
                    </div>
                </header>

                <article className="prose prose-stone prose-lg max-w-none font-serif text-[#2F1B0C]">
                    <p className="lead italic text-xl text-[#5D4037]">
                        {post.excerpt}
                    </p>
                    <div className="first-letter:text-6xl first-letter:font-black first-letter:mr-3 first-letter:float-left first-letter:text-[#4B3621]">
                        {post.content}
                    </div>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <h3 className="font-black uppercase tracking-widest text-lg border-b border-[#4B3621] pb-2 mb-4 mt-8">
                        Section II
                    </h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
                    </p>
                </article>

                <div className="mt-16 pt-8 border-t border-dashed border-[#8B4513]">
                    <h4 className="font-mono text-xs uppercase font-bold mb-4 text-[#8B4513]">Filed Under:</h4>
                    <div className="flex gap-2">
                        {post.tags.map(tag => (
                            <span key={tag} className="bg-[#EFE6D5] px-3 py-1 font-mono text-xs uppercase text-[#4B3621]">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
