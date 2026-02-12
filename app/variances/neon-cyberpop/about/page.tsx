import Link from 'next/link';

export default function NeonAbout() {
    return (
        <div className="bg-[#050510] min-h-screen font-mono text-cyan-400 selection:bg-pink-500 selection:text-white">
            <nav className="p-8 border-b border-cyan-500/30 bg-[#050510]/80">
                <Link href="/variances/neon-cyberpop" className="text-3xl font-bold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-cyan-500">
                    CYBER_PULSE
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 py-24">
                <div className="border border-pink-500 p-8 md:p-12 relative bg-[#0A0A1F]/50 backdrop-blur-sm shadow-[0_0_20px_rgba(236,72,153,0.2)]">
                    <div className="absolute -top-3 -left-3 bg-[#050510] border border-pink-500 px-4 py-1 text-pink-500 text-xs font-bold uppercase">
                        README.md
                    </div>

                    <h1 className="text-4xl md:text-6xl font-black text-white mb-8">
                        THE DIGITAL <br /> <span className="text-cyan-400">FRONTIER</span>
                    </h1>

                    <div className="space-y-6 text-lg text-gray-300">
                        <p>
                            <span className="text-pink-500">&gt;</span> We are observing the glitch in the matrix.
                        </p>
                        <p>
                            CyberPulse is a transmission from the future of design. We document the neon-soaked intersection of humanity and technology.
                        </p>
                        <p>
                            Our mission is to decode the chaotic signals of the modern web and reassemble them into something beautiful, functional, and slightly dangerous.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link href="/variances/neon-cyberpop" className="inline-block px-8 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold uppercase tracking-widest shadow-[0_0_15px_cyan] transition-all">
                            Jack In
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
