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
      <header className="relative py-32 md:py-48 px-6 text-center z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

        <h1 className="text-7xl md:text-9xl font-black mb-6 tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500 animate-in fade-in slide-in-from-bottom-8 duration-1000">
          DESIGN <br /> VARIATIONS.
        </h1>
        <p className="text-xl md:text-3xl text-neutral-400 max-w-3xl mx-auto font-light leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          One Core Identity. <span className="text-white font-bold">Eleven</span> Unique Expressions.
        </p>
      </header>

      {/* Grid */}
      <main className="max-w-[1800px] mx-auto px-6 pb-48 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {variances.map((v, i) => (
            <Link key={v.id} href={`/variances/${v.id}`} className={`group relative h-80 rounded-2xl p-6 flex flex-col justify-between transition-all duration-500 ease-out overflow-hidden ${v.color} ${v.hover} ${i === variances.length - 1 ? 'md:col-span-2 xl:col-span-2' : ''}`}>
              <div className="absolute top-4 right-4 text-xs font-bold uppercase opacity-60 border border-current px-2 py-1 rounded-full">
                /{(i + 1).toString().padStart(2, '0')}
              </div>

              <div className="mt-auto transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <h2 className="text-3xl font-black uppercase leading-none mb-2 tracking-tight">
                  {v.name}
                </h2>
                <p className="font-medium text-sm opacity-80 uppercase tracking-widest">
                  {v.desc}
                </p>
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Arrow */}
              <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className="text-center pb-12 text-neutral-600 text-sm relative z-10 flex flex-col items-center gap-4">
        <div className="w-px h-16 bg-gradient-to-b from-neutral-800 to-transparent"></div>
        <p>Engineered by Antigravity.</p>
      </footer>
    </div>
  );
}
