import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function UrbanArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-yellow-400 selection:text-black pb-24 border-l-8 border-r-8 border-white">
            <nav className="p-6 md:p-12 border-b-4 border-white">
                <Link href="/variances/urban-street" className="text-xl font-black uppercase tracking-widest hover:bg-white hover:text-black px-2 inline-block transition-colors">
                    ← Back
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 mt-12">
                <header className="mb-12 border-b-4 border-white pb-12">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <span className="bg-yellow-400 text-black px-4 py-1 text-sm font-black uppercase transform -rotate-2">
                            {post.category}
                        </span>
                        <span className="font-mono text-sm uppercase">
                            {post.date} // {post.readTime}
                        </span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-black uppercase leading-[0.85] mb-8 break-words text-white">
                        {post.title}
                    </h1>

                    <div className="w-full h-[400px] relative mb-8 border-4 border-white grayscale contrast-125">
                        <Image src={post.image} alt={post.title} fill className="object-cover" />
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-white rounded-none overflow-hidden grayscale contrast-125 relative">
                            <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                        </div>
                        <div className="font-bold uppercase tracking-widest text-sm">
                            Words By <span className="text-yellow-400">{author.name}</span>
                        </div>
                    </div>
                </header>

                <div className="prose prose-invert prose-lg max-w-none font-mono">
                    <p className="text-xl md:text-2xl leading-relaxed mb-8 font-sans font-bold border-l-4 border-yellow-400 pl-6">
                        {post.excerpt}
                    </p>

                    <div className="space-y-6 text-gray-300">
                        <p>{post.content}</p>
                        <p>
                            LOREM IPSUM DOLOR SIT AMET. CONSECTETUR ADIPISCING ELIT. SED DO EIUSMOD TEMPOR INCIDIDUNT UT LABORE ET DOLORE MAGNA ALIQUA.
                        </p>
                        <h2 className="text-3xl font-black uppercase text-white bg-white/10 p-2 inline-block">Sub-Heading</h2>
                        <p>
                            UT ENIM AD MINIM VENIAM, QUIS NOSTRUD EXERCITATION ULLAMCO LABORIS NISI UT ALIQUIP EX EA COMMODO CONSEQUAT.
                        </p>
                        <blockquote className="border-l-4 border-white pl-4 italic text-xl">
                            "DUIS AUTE IRURE DOLOR IN REPREHENDERIT IN VOLUPTATE VELIT ESSE CILLUM DOLORE."
                        </blockquote>
                    </div>
                </div>
            </article>

            <div className="max-w-4xl mx-auto px-6 mt-12">
                <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                        <span key={tag} className="border-2 border-white px-2 py-1 text-xs font-bold uppercase hover:bg-white hover:text-black cursor-pointer transition-colors">
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}
