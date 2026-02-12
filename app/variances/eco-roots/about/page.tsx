import Link from 'next/link';

export default function EcoAbout() {
    return (
        <div className="bg-[#E9F5DB] min-h-screen font-sans text-[#2D3A1E] selection:bg-[#B5C99A]">
            <nav className="p-8 md:p-12 max-w-7xl mx-auto">
                <Link href="/variances/eco-roots" className="text-2xl font-bold tracking-tight text-[#4A6741] flex items-center gap-2">
                    <span className="w-4 h-4 rounded-full bg-[#718355]"></span>
                    EcoRoots
                </Link>
            </nav>

            <div className="max-w-5xl mx-auto px-6 py-24 flex flex-col md:flex-row gap-12 items-center">
                <div className="md:w-1/2">
                    <div className="bg-[#718355]/20 rounded-[3rem] p-12 aspect-square flex items-center justify-center">
                        <span className="text-9xl">🌿</span>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-bold text-[#2D3A1E] mb-8">
                        Design that <br /> <span className="text-[#718355]">breathes.</span>
                    </h1>
                    <div className="space-y-6 text-[#4F5D3F] text-lg leading-relaxed">
                        <p>
                            EcoRoots explores the profound connection between nature and digital space. We believe that technology shouldn't feel sterile.
                        </p>
                        <p>
                            Our design language mimics organic forms, soothing greens, and the texture of paper and leaves. It is a digital sanctuary for the modern mind.
                        </p>
                    </div>
                    <div className="mt-8">
                        <Link href="/variances/eco-roots" className="inline-block px-8 py-3 bg-[#2D3A1E] text-[#E9F5DB] rounded-full font-bold hover:bg-[#4A6741] transition-colors">
                            Join the Movement
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
