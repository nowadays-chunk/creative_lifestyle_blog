import Link from 'next/link';

const variances = [
  { id: 'pastel-dream', name: 'Pastel Dream', desc: 'Soft & Airy', color: 'bg-pink-200 text-pink-900', hover: 'hover:bg-pink-300' },
  { id: 'urban-street', name: 'Urban Street', desc: 'Bold & Gritty', color: 'bg-yellow-400 text-black', hover: 'hover:bg-yellow-500' },
  { id: 'nordic-hygge', name: 'Nordic Hygge', desc: 'Minimal & Cozy', color: 'bg-stone-200 text-stone-800', hover: 'hover:bg-stone-300' },
  { id: 'neon-cyberpop', name: 'Neon Cyberpop', desc: 'Futuristic Glow', color: 'bg-cyan-900 text-cyan-400 shadow-[0_0_15px_cyan]', hover: 'hover:shadow-[0_0_25px_cyan]' },
  { id: 'vintage-journal', name: 'Vintage Journal', desc: 'Nostalgic Paper', color: 'bg-[#D2B48C] text-[#4B3621]', hover: 'hover:bg-[#C19A6B]' },
  { id: 'eco-roots', name: 'Eco Roots', desc: 'Organic Nature', color: 'bg-[#718355] text-[#E9F5DB]', hover: 'hover:bg-[#4F5D3F]' },
  { id: 'high-fashion', name: 'High Fashion', desc: 'Luxury Monochrome', color: 'bg-white text-black border-2 border-black', hover: 'hover:bg-black hover:text-white' },
  { id: 'retro-arcade', name: 'Retro Arcade', desc: '8-Bit Pixel Art', color: 'bg-[#2C0E37] text-[#00FFFF] border-4 border-white', hover: 'hover:bg-[#E6007A] hover:text-white' },
  { id: 'abstract-art', name: 'Abstract Art', desc: 'Geometric Shapes', color: 'bg-white border-4 border-black shadow-[8px_8px_0_black]', hover: 'hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all' },
  { id: 'glassmorphism', name: 'Glassmorphism', desc: 'Frosted Modern', color: 'bg-white/20 backdrop-blur-md border border-white/40 text-black', hover: 'hover:bg-white/30' },
];

export default function DiscoveryHome() {
  return (
    <div className="min-h-screen bg-neutral-950 text-white font-sans selection:bg-indigo-500 overflow-x-hidden">
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>

      {/* Hero Section */}
      <header className="relative py-40 md:py-60 px-8 text-center z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/10 rounded-full blur-[160px] -z-10 pointer-events-none"></div>

        <div className="space-y-6 animate-in fade-in slide-in-from-bottom-12 duration-1000">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium tracking-[0.2em] uppercase text-neutral-400">
            Premium Web Exploration
          </span>
          <h1 className="text-8xl md:text-[10rem] font-black mb-8 tracking-[-0.04em] leading-[0.85] text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-neutral-600">
            CREATIVE <br /> LIFESTYLE.
          </h1>
          <p className="text-xl md:text-4xl text-neutral-400 max-w-4xl mx-auto font-light leading-relaxed">
            A curate collection of <span className="text-white font-semibold italic">digital experiences</span>. <br className="hidden md:block" />
            Discover 10+ unique design variances for one core identity.
          </p>
        </div>
      </header>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-12 md:px-24 pb-60 relative z-10">
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
            {variances.map((v, i) => (
              <Link
                key={v.id}
                href={`/variances/${v.id}`}
                className={`group relative h-[450px] rounded-3xl p-8 flex flex-col justify-between transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] overflow-hidden ${v.color} ${v.hover} border border-white/5 shadow-2xl`}
              >
                <div className="absolute top-6 right-6 text-xs font-bold uppercase opacity-40 border border-current px-3 py-1.5 rounded-full tracking-widest">
                  {v.id.replace('-', ' ')}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative z-10 mt-auto transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h2 className="text-4xl font-black uppercase leading-tight mb-3 tracking-tighter">
                    {v.name}
                  </h2>
                  <p className="font-semibold text-xs opacity-70 uppercase tracking-[0.3em]">
                    {v.desc}
                  </p>
                </div>

                {/* Arrow Icon */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-10 group-hover:translate-x-0 scale-75 group-hover:scale-100">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <footer className="text-center pb-20 text-neutral-500 text-xs relative z-10 flex flex-col items-center gap-6">
        <div className="w-px h-24 bg-gradient-to-b from-neutral-800 via-neutral-900 to-transparent"></div>
        <p className="uppercase tracking-[0.4em] font-medium opacity-50">
          Crafted with precision by Antigravity.
        </p>
      </footer>
    </div>
  );
}
