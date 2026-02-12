import Link from 'next/link';

export default function UrbanAbout() {
    return (
        <div className="bg-black min-h-screen font-sans text-white selection:bg-yellow-400 selection:text-black flex flex-col">
            <nav className="p-6 md:p-12 border-b-4 border-white">
                <Link href="/variances/urban-street" className="text-5xl font-black tracking-tighter uppercase italic hover:text-yellow-400 transition-colors transform -skew-x-12">
                    Sub<span className="text-transparent text-stroke-white">Culture</span>
                </Link>
            </nav>

            <div className="flex-1 flex flex-col md:flex-row">
                <div className="md:w-1/2 p-12 border-b-4 md:border-b-0 md:border-r-4 border-white flex flex-col justify-center">
                    <h1 className="text-7xl md:text-9xl font-black uppercase leading-none mb-8">
                        WE <br /> ARE <br /> <span className="text-yellow-400">LOUD.</span>
                    </h1>
                </div>
                <div className="md:w-1/2 p-12 font-mono text-lg leading-relaxed flex flex-col justify-center">
                    <p className="mb-8 font-bold text-xl uppercase border-l-4 border-yellow-400 pl-4">
                        SubCulture is a digital zine for the restless.
                    </p>
                    <p className="mb-4">
                        We reject the polished, the perfect, and the pastel. We embrace the grit of the street and the noise of the city.
                    </p>
                    <p className="mb-8">
                        Our design philosophy is brutally simple: Make it big. Make it bold. Make it seen.
                    </p>
                    <Link href="/variances/urban-street" className="inline-block bg-white text-black px-6 py-3 font-black uppercase text-xl hover:bg-yellow-400 transition-colors w-max">
                        Enter The Noise
                    </Link>
                </div>
            </div>
        </div>
    );
}
