import { posts, authors } from '@/lib/blog-data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

export default async function PastelArticle({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        notFound();
    }

    const author = authors.find((a) => a.id === post.authorId) || authors[0];

    return (
        <div className="bg-[#FFF0F5] min-h-screen font-sans text-gray-700 selection:bg-pink-200 pb-24">
            <nav className="p-8 flex justify-between items-center max-w-4xl mx-auto">
                <Link href="/variances/pastel-dream" className="text-xl font-bold tracking-tight text-pink-400 font-serif hover:text-pink-500 transition-colors">
                    ← Back to CloudNine
                </Link>
            </nav>

            <article className="max-w-3xl mx-auto px-6 bg-white rounded-[3rem] p-8 md:p-12 shadow-sm mt-8">
                <div className="w-full h-64 md:h-96 rounded-2xl overflow-hidden mb-8 relative">
                    <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                    />
                </div>
                <header className="text-center mb-12">
                    <span className="inline-block py-1 px-4 rounded-full bg-blue-50 text-blue-400 text-xs font-bold uppercase tracking-wider mb-6">
                        {post.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 font-serif leading-tight">
                        {post.title}
                    </h1>
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-500">
                        <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full border-2 border-pink-100" />
                        <span className="font-medium text-gray-900">{author.name}</span>
                        <span>•</span>
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime} read</span>
                    </div>
                </header>

                <div className="prose prose-pink prose-lg mx-auto text-gray-600 leading-loose">
                    <p className="lead text-xl text-gray-500 mb-8 font-serif italic">
                        {post.excerpt}
                    </p>
                    <p>
                        {post.content}
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                    <h3>Embracing Softness</h3>
                    <p>
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div className="mt-16 pt-12 border-t border-pink-50 text-center">
                    <h3 className="font-serif text-2xl mb-6 text-gray-800">Tags</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                        {post.tags.map(tag => (
                            <span key={tag} className="px-4 py-2 rounded-full bg-gray-50 text-gray-500 text-sm hover:bg-pink-50 hover:text-pink-500 transition-colors cursor-pointer">
                                #{tag}
                            </span>
                        ))}
                    </div>
                </div>
            </article>
        </div>
    );
}
