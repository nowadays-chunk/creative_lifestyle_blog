import Link from 'next/link';

export default function FashionAbout() {
    return (
        <div className="bg-white min-h-screen font-sans text-black selection:bg-black selection:text-white">
            <nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md px-12 py-6 border-b border-black">
                <Link href="/variances/high-fashion" className="text-2xl font-serif tracking-widest uppercase font-bold">
                    VN
                </Link>
            </nav>

            <div className="pt-48 pb-24 px-12 max-w-5xl mx-auto text-center">
                <h1 className="text-[10vw] font-serif italic leading-none mb-12">
                    Est. MMXXIV
                </h1>

                <div className="w-px h-24 bg-black mx-auto mb-12"></div>

                <div className="text-2xl md:text-3xl leading-normal font-light space-y-12">
                    <p>
                        VogueNoir is an editorial experiment in <span className="font-bold underline">contrast</span>.
                    </p>
                    <p>
                        We strip away the noise of color to reveal the structure of content. Sharp lines, bold typography, and unyielding grids define our aesthetic.
                    </p>
                    <p>
                        It is luxury for the intellect.
                    </p>
                </div>

                <div className="mt-24">
                    <Link href="/variances/high-fashion" className="px-12 py-4 bg-black text-white text-sm font-bold uppercase tracking-[0.3em] hover:bg-white hover:text-black border border-black transition-colors">
                        Enter
                    </Link>
                </div>
            </div>
        </div>
    );
}
