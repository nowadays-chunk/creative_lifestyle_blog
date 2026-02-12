import Link from 'next/link';

export default function NordicAbout() {
    return (
        <div className="bg-[#FAF9F6] min-h-screen font-sans text-[#4A4A4A] selection:bg-[#D4C4B7]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto flex justify-center">
                <Link href="/variances/nordic-hygge" className="text-2xl font-serif tracking-widest text-[#2C2C2C]">
                    H Y G G E
                </Link>
            </nav>

            <div className="max-w-2xl mx-auto px-6 py-24 text-center">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#8C8C8C] mb-8">
                    Philosophy
                </p>
                <h1 className="text-4xl md:text-5xl font-serif font-light text-[#2C2C2C] mb-12 leading-tight">
                    We curate spaces of <span className="italic">calm</span> in a noisy world.
                </h1>
                <div className="font-light text-lg leading-loose text-[#666] space-y-8">
                    <p>
                        Hygge is more than a design aesthetic; it is a ritual of enjoying life's simple pleasures. Friends. Family. Graciousness.
                    </p>
                    <p>
                        Our journal explores the intersection of minimalism and warmth. We believe that stripping away the non-essential allows the true beauty of life to shine through.
                    </p>
                    <div className="pt-12">
                        <Link href="/variances/nordic-hygge" className="text-xs font-bold uppercase tracking-widest text-[#2C2C2C] border-b border-[#2C2C2C] pb-1 hover:border-transparent transition-all">
                            Explore the Journal
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
