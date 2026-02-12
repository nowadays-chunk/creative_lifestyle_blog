import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function AbstractArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#FFFFF0] min-h-screen font-sans text-gray-900 selection:bg-yellow-300 overflow-x-hidden">
            <div className="fixed top-20 right-[-10%] w-[60vh] h-[60vh] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></div>
            <div className="fixed bottom-[-10%] left-[-10%] w-[50vh] h-[50vh] bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-40 -z-10"></div>

            <nav className="p-8 max-w-5xl mx-auto">
                <Link href="/variances/abstract-art" className="inline-block px-6 py-2 bg-white border-2 border-black shadow-[4px_4px_0_black] font-bold hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all">
                    ← Gallery
                </Link>
            </nav>

            <article className="max-w-4xl mx-auto px-6 pb-24 relative">
                <header className="mb-16 relative">
                    <div className="absolute top-0 right-0 -z-10 md:translate-x-1/4 translate-y-[-20%]">
                        <svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="100" cy="100" r="100" fill="#FDE047" fillOpacity="0.5" />
                        </svg>
                    </div>

                    <span className="bg-black text-white px-4 py-1 font-bold text-sm uppercase tracking-widest inline-block mb-6 transform -rotate-2">
                        {post.category}
                    </span>

                    <h1 className="text-5xl md:text-7xl font-black text-black leading-tight mb-8">
                        {post.title}
                    </h1>

                    <div className="w-full h-[300px] border-2 border-black mb-8 relative overflow-hidden shadow-[8px_8px_0_black]">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="flex items-center gap-4 border-y-2 border-black py-4 bg-white">
                        <div className="w-12 h-12 rounded-full border-2 border-black relative overflow-hidden">
                            <Image src={author.avatar} alt={author.name} fill className="object-cover" />
                        </div>
                        <div className="flex flex-col">
                            <span className="font-bold text-sm uppercase">{author.name}</span>
                            <span className="text-xs text-gray-600 font-mono">{post.date}</span>
                        </div>
                    </div>
                </header>

                <div className="bg-white border-2 border-black p-8 md:p-12 shadow-[12px_12px_0_#A855F7] relative">
                    <div className="prose prose-lg prose-headings:font-black prose-p:font-medium max-w-none">
                        <p className="text-xl md:text-2xl leading-relaxed font-bold mb-8">
                            {post.excerpt}
                        </p>
                        <p>
                            {post.content}
                        </p>
                        <div className="float-right w-1/2 ml-6 mb-6 bg-yellow-200 p-6 border-2 border-black transform rotate-2">
                            <p className="font-bold italic text-sm m-0">
                                "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            </p>
                        </div>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <h3>Visual Harmony</h3>
                        <p>
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

                <div className="mt-12 flex flex-wrap gap-4">
                    {post.tags.map((tag, i) => (
                        <span key={tag} className={`px-4 py-2 border-2 border-black font-bold text-sm shadow-[2px_2px_0_black] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer ${i % 2 === 0 ? 'bg-blue-200' : 'bg-green-200'}`}>
                            #{tag}
                        </span>
                    ))}
                </div>
            </article>
        </div>
    );
}
