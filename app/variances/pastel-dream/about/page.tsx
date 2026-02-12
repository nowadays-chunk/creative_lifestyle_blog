import Link from 'next/link';

export default function PastelAbout() {
    return (
        <div className="bg-[#FFF0F5] min-h-screen font-sans text-gray-700 selection:bg-pink-200">
            <nav className="p-8 flex justify-between items-center max-w-6xl mx-auto">
                <Link href="/variances/pastel-dream" className="text-2xl font-bold tracking-tight text-pink-400 font-serif">
                    Cloud<span className="text-blue-300">Nine</span>.
                </Link>
            </nav>

            <div className="max-w-3xl mx-auto px-6 py-20 text-center">
                <h1 className="text-5xl font-bold text-gray-800 mb-8 font-serif">
                    Dreaming in Color
                </h1>
                <div className="bg-white rounded-[3rem] p-12 shadow-sm leading-loose text-lg text-gray-600">
                    <p className="mb-6">
                        CloudNine was born from a desire to soften the edges of the digital world. We believe that content should be consumed in an environment that mimics the calmness of a Sunday morning.
                    </p>
                    <p>
                        Our aesthetic is intentional—rounded corners to smooth out the harshness, pastel tones to soothe the eyes, and ample whitespace to let thoughts breathe.
                    </p>
                    <Link href="/variances/pastel-dream" className="inline-block mt-8 text-pink-400 font-bold hover:text-pink-500">
                        Back to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
