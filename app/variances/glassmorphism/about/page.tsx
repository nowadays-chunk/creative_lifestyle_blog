import Link from 'next/link';

export default function GlassAbout() {
    return (
        <div className="min-h-screen font-sans text-white selection:bg-white/30 bg-gradient-to-br from-[#84fab0] to-[#8fd3f4] relative overflow-hidden flex items-center justify-center">
            {/* Background Shapes */}
            <div className="fixed top-[10%] left-[20%] w-[40vw] h-[40vw] bg-white rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse"></div>

            <nav className="absolute top-0 left-0 w-full p-8 z-20">
                <Link href="/variances/glassmorphism" className="text-3xl font-bold tracking-tight drop-shadow-md">
                    Prism
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 py-24 relative z-10">
                <div className="bg-white/20 backdrop-blur-xl border border-white/40 rounded-[3rem] p-8 md:p-20 shadow-2xl text-center">
                    <h1 className="text-5xl md:text-7xl font-bold mb-12 drop-shadow-lg">
                        Clarity in <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">Design.</span>
                    </h1>

                    <div className="space-y-8 text-xl font-light leading-relaxed">
                        <p>
                            Prism is where content meets clarity. We strip away the heavy borders and solid backgrounds to let the information breathe.
                        </p>
                        <p>
                            Inspired by the physics of light and glass, our interface mimics the real world—adding depth, refraction, and a touch of magic to the digital experience.
                        </p>
                    </div>

                    <div className="mt-16">
                        <Link href="/variances/glassmorphism" className="px-10 py-4 rounded-full bg-white text-[#8fd3f4] font-bold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all">
                            Experience Prism
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
