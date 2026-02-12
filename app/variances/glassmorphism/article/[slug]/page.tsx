import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function GlassArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="min-h-screen font-sans text-white selection:bg-white/30 bg-gradient-to-tr from-[#667eea] to-[#764ba2] relative overflow-hidden">
            {/* Background Orbs */}
            <div className="fixed top-[20%] right-[10%] w-[30vw] h-[30vw] bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>
            <div className="fixed bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-40"></div>

            <nav className="p-8 max-w-5xl mx-auto relative z-10">
                <Link href="/variances/glassmorphism" className="inline-block px-6 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all font-bold text-sm shadow-lg">
                    ← Home
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 pb-24 relative z-10">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-[3rem] p-8 md:p-12 shadow-2xl">
                    <header className="mb-12 text-center">
                        <span className="inline-block px-4 py-1 rounded-full bg-white/10 mb-6 text-xs font-bold uppercase tracking-widest text-white/80">
                            {post.category}
                        </span>
                        <h1 className="text-4xl md:text-6xl font-black mb-8 leading-tight drop-shadow-md">
                            {post.title}
                        </h1>

                        <div className="w-full h-80 relative mb-8 rounded-3xl overflow-hidden border border-white/30 shadow-2xl">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#764ba2]/30"></div>
                        </div>

                        <div className="flex items-center justify-center gap-4">
                            <div className="relative w-10 h-10 rounded-full border-2 border-white/30 overflow-hidden">
                                <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                            </div>
                            <div className="text-left">
                                <div className="font-bold text-sm">{author.name}</div>
                                <div className="text-xs text-white/60">{post.date}</div>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none font-light">
                        <p className="lead text-xl md:text-2xl text-white/90 font-normal mb-8">
                            {post.excerpt}
                        </p>
                        <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-8 italic">
                            "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                        </div>
                        <p>
                            {post.content}
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>

                    <div className="mt-12 flex flex-wrap gap-3 justify-center pt-8 border-t border-white/10">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/20 border border-white/10 transition-colors text-xs font-bold uppercase tracking-wider cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
