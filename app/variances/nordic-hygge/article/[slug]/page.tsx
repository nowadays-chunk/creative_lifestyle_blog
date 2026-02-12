import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function NordicArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#4A4A4A] selection:bg-[#D4C4B7]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex justify-center">
                <Link href="/variances/nordic-hygge" className="text-2xl font-serif tracking-widest text-[#2C2C2C]">
                    H Y G G E
                </Link>
            </nav>

            <article className="max-w-3xl mx-auto px-6 mt-12 pb-32">
                <div className="w-full aspect-video relative mb-12 overflow-hidden bg-[#EBE8E3]">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                </div>
                <header className="text-center mb-16">
                    <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#8C8C8C] mb-6 block">
                        {post.category} • {post.date}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2C2C2C] mb-8 leading-tight">
                        {post.title}
                    </h1>
                    <p className="text-lg font-light italic text-[#666] max-w-xl mx-auto leading-relaxed mb-8">
                        {post.excerpt}
                    </p>
                    <div className="flex items-center justify-center gap-3">
                        <div className="relative w-8 h-8 rounded-full overflow-hidden">
                            <Image src={author.avatar} alt={author.name} fill className="object-cover grayscale opacity-80" />
                        </div>
                        <span className="text-xs font-bold uppercase tracking-widest text-[#4A4A4A]">By {author.name}</span>
                    </div>
                </header>

                <div className="prose prose-stone prose-lg mx-auto font-light leading-8">
                    <p>
                        {post.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3 className="font-serif text-[#2C2C2C] font-normal mt-12 mb-6">A Quieter Approach</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="mt-24 border-t border-[#EBE8E3] pt-12 flex justify-between items-center text-xs font-bold uppercase tracking-widest text-[#8C8C8C]">
                    <Link href="/variances/nordic-hygge" className="hover:text-[#2C2C2C] transition-colors">← Back to Journal</Link>
                    <div className="flex gap-2">
                        {post.tags.slice(0, 2).map(tag => (
                            <span key={tag}>#{tag}</span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
