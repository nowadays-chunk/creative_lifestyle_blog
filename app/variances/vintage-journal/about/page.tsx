import Link from 'next/link';

export default function VintageAbout() {
    return (
        <div className="bg-[#FAF0E6] min-h-screen font-serif text-[#4B3621] selection:bg-[#D2B48C]">
            <div className="fixed inset-0 pointer-events-none opacity-20 z-0 bg-[url('https://www.transparenttextures.com/patterns/cardboard-flat.png')]"></div>

            <div className="max-w-3xl mx-auto px-8 py-16 relative z-10 border-l border-r border-[#D2B48C] min-h-screen bg-[#FFF8E7] shadow-xl">
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold uppercase tracking-widest text-[#2F1B0C] relative inline-block">
                        Manifesto
                        <span className="absolute -bottom-2 left-0 w-full h-1 bg-[#4B3621] transform rotate-1"></span>
                    </h1>
                </div>

                <div className="prose prose-stone prose-lg font-serif text-[#4B3621] text-justify leading-loose">
                    <p>
                        <span className="font-bold text-2xl float-left mr-2 font-mono">I.</span>
                        We believe in the permanence of the written word. In an age of ephemeral swipes and vanishing stories, The Daily Log stands as a testament to contemplation.
                    </p>
                    <p>
                        <span className="font-bold text-2xl float-left mr-2 font-mono">II.</span>
                        Our aesthetic is drawn from the tangible—the grain of paper, the smear of ink, the satisfying clack of a typewriter key. We bring the warmth of the analog world to the cold glass of your screen.
                    </p>
                    <p className="text-center mt-12 italic text-lg text-[#8B4513]">
                        "To write is to remember."
                    </p>
                </div>

                <div className="mt-16 text-center">
                    <Link href="/variances/vintage-journal" className="font-mono text-sm font-bold uppercase border-b-2 border-[#4B3621] hover:text-[#8B4513] transition-colors pb-1">
                        Return to Front Page
                    </Link>
                </div>
            </div>
        </div>
    );
}
