import Link from 'next/link';

export default function RetroAbout() {
    return (
        <div className="bg-[#2C0E37] min-h-screen font-mono text-white selection:bg-[#E6007A]">
            <nav className="p-8 max-w-6xl mx-auto flex justify-between items-center">
                <Link href="/variances/retro-arcade" className="text-2xl font-black tracking-widest text-[#00FFFF] drop-shadow-[2px_2px_0_#E6007A]">
                    PIXEL_LOG
                </Link>
            </nav>

            <div className="max-w-4xl mx-auto px-6 py-24 text-center">
                <div className="border-8 border-double border-white p-12 bg-black relative shadow-[0_0_50px_rgba(230,0,122,0.5)]">
                    <div className="absolute top-2 left-2 text-[#FFFF00] text-xs font-bold">Ver. 1.0</div>

                    <h1 className="text-5xl md:text-7xl font-black text-[#00FFFF] mb-6 drop-shadow-[4px_4px_0_#E6007A]">
                        HIGH SCORE <br /> CULTURE
                    </h1>

                    <div className="space-y-6 text-lg font-bold text-gray-300">
                        <p>
                            Welcome to the PixelLog.
                        </p>
                        <p>
                            We are pressing PAUSE on the modern web to bring you a blast of 8-bit nostalgia.
                        </p>
                        <p className="text-[#E6007A]">
                            Life is a game. Play it well.
                        </p>
                    </div>

                    <div className="mt-12 flex justify-center gap-4">
                        <Link href="/variances/retro-arcade" className="bg-[#FFFF00] text-black px-6 py-3 font-black uppercase text-xl hover:bg-white hover:scale-110 transition-transform skew-x-[-10deg] border-4 border-black">
                            Start Game
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
