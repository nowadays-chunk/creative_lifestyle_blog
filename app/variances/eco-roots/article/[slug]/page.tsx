import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function EcoArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#E9F5DB] min-h-screen font-sans text-[#2D3A1E] selection:bg-[#B5C99A]">
            <nav className="p-8 max-w-4xl mx-auto">
                <Link href="/variances/eco-roots" className="text-[#4A6741] font-bold hover:text-[#2D3A1E] flex items-center gap-2">
                    ← Back to Roots
                </Link>
            </nav>

            <article className="max-w-3xl mx-auto px-6 pb-24">
                <header className="mb-12 text-center bg-white/60 p-12 rounded-[3rem] shadow-sm backdrop-blur-sm relative overflow-hidden">
                    <div className="absolute inset-0 -z-10 opacity-10">
                        <Image src="/images/hero-background.jpg" alt="Bg" fill className="object-cover" />
                    </div>
                    <span className="text-[#718355] text-xs font-bold uppercase tracking-widest mb-4 block">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2D3A1E] mb-8 leading-tight">
                        {post.title}
                    </h1>

                    <div className="w-full h-80 relative mb-8 rounded-[2rem] overflow-hidden border-4 border-white shadow-md grayscale contrast-125">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center justify-center gap-4 text-xs font-bold uppercase tracking-widest text-[#4F5D3F]">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-[#718355] overflow-hidden relative">
                                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                            </div>
                            {author.name}
                        </div>
                        <span>•</span>
                        <span>{post.date}</span>
                    </div>
                </header>

                <div className="prose prose-stone prose-lg mx-auto text-[#4F5D3F]">
                    <p className="lead text-xl text-[#2D3A1E] font-medium leading-relaxed">
                        {post.excerpt}
                    </p>
                    <p>
                        {post.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div className="bg-[#CFE1B9]/20 p-8 rounded-3xl my-8 border border-[#B5C99A]">
                        <h3 className="text-[#2D3A1E] font-bold text-xl mb-4 mt-0">Sustainable Note</h3>
                        <p className="mb-0 text-sm">
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </p>
                    </div>
                </div>

                <div className="mt-16 border-t border-[#B5C99A] pt-8 flex gap-3 justify-center">
                    {post.tags.map(tag => (
                        <span key={tag} className="px-4 py-2 bg-[#CFE1B9]/50 text-[#2D3A1E] rounded-full text-sm font-bold hover:bg-[#718355] hover:text-white transition-colors cursor-pointer">
                            {tag}
                        </span>
                    ))}
                </div>
            </article>
        </div>
    );
}
