import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function FashionArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-white min-h-screen font-sans text-black selection:bg-black selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-12 py-6 border-b border-black">
                <Link href="/variances/high-fashion" className="text-sm font-bold uppercase tracking-[0.2em] hover:text-gray-500 transition-colors">
                    ← Back
                </Link>
            </nav>

            <article className="pt-32 pb-24 px-6 md:px-0">
                <header className="max-w-4xl mx-auto text-center mb-24">
                    <span className="inline-block px-4 py-1 border border-black text-xs font-bold uppercase tracking-widest mb-8">
                        {post.category}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif italic mb-12">
                        {post.title}
                    </h1>

                    <div className="w-full h-[60vh] relative mb-12 overflow-hidden border-y border-black grayscale contrast-125">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-12 border-t border-b border-black py-6">
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 relative rounded-full overflow-hidden border border-black grayscale">
                                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                            </div>
                            <div className="flex flex-col text-left">
                                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Author</span>
                                <span className="text-sm font-bold uppercase tracking-widest">{author.name}</span>
                            </div>
                        </div>
                        <div className="w-px h-8 bg-black"></div>
                        <div className="flex flex-col">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 mb-1">Published</span>
                            <span className="text-sm font-bold uppercase tracking-widest">{post.date}</span>
                        </div>
                    </div>
                </header>

                <div className="max-w-xl mx-auto prose prose-xl font-serif leading-loose">
                    <p className="first-letter:text-5xl first-letter:font-bold first-letter:float-left first-letter:mr-4">
                        {post.excerpt}
                    </p>
                    <p>
                        {post.content}
                    </p>
                    <h3 className="text-center font-sans font-black uppercase text-2xl tracking-widest my-12 border-t border-black pt-8">
                        The Detail
                    </h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto mt-24 pt-12 border-t border-black">
                    <div className="flex gap-4 justify-center">
                        {post.tags.map(tag => (
                            <span key={tag} className="text-xs font-bold uppercase tracking-[0.2em] hover:bg-black hover:text-white px-2 py-1 transition-colors cursor-pointer">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
