import Link from 'next/link';

export default function AbstractAbout() {
    return (
        <div className="bg-[#FFFFF0] min-h-screen font-sans text-gray-900 selection:bg-purple-300 flex flex-col items-center justify-center relative overflow-hidden">
            {/* Giant Shapes */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-yellow-200 rounded-full mix-blend-multiply blur-3xl opacity-30 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-pink-200 rounded-full mix-blend-multiply blur-3xl opacity-30 -translate-x-1/3 translate-y-1/3"></div>

            <nav className="absolute top-0 left-0 w-full p-8 md:p-12 z-20 text-center md:text-left">
                <Link href="/variances/abstract-art" className="text-2xl font-black tracking-tight border-b-4 border-black inline-block pb-1">
                    CANVAS
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 py-24 relative z-10 text-center">
                <div className="bg-white border-4 border-black p-8 md:p-16 shadow-[16px_16px_0_black] transform rotate-1">
                    <h1 className="text-5xl md:text-7xl font-black mb-8 uppercase leading-none">
                        Breaking <br /> The Pattern
                    </h1>

                    <div className="text-xl md:text-2xl font-bold leading-relaxed space-y-8">
                        <p>
                            Life isn't a straight line. It's a messy, colorful, chaotic splash of paint on a blank canvas.
                        </p>
                        <p>
                            At Canvas, we celebrate the asymmetric. The odd shapes. The bold choices.
                        </p>
                        <p className="text-purple-600">
                            We curate lifestyle content for those who color outside the lines.
                        </p>
                    </div>

                    <div className="mt-12">
                        <Link href="/variances/abstract-art" className="inline-block px-8 py-4 bg-black text-white font-black text-xl uppercase tracking-widest hover:bg-yellow-400 hover:text-black border-4 border-black transition-colors shadow-[8px_8px_0_gray] hover:shadow-none hover:translate-x-2 hover:translate-y-2">
                            Start Creating
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
