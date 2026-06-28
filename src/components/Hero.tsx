import { Sparkles, ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/logo.png')`,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-rose-950/60" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-px w-16 bg-rose-400/60" />
          <span className="text-rose-300 text-xs font-semibold uppercase tracking-[0.3em]">
            Luxury Beauty
          </span>
          <div className="h-px w-16 bg-rose-400/60" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-none mb-3 tracking-tight">
          TIMELESS ICONIXX
        </h1>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-[0.3em] text-rose-300 mb-6 uppercase">
          Beauty
        </h2>

        <p className="text-neutral-300 text-base sm:text-lg max-w-xl mx-auto leading-relaxed mb-4">
          Luxury beauty products crafted for women who know their worth — and wear it effortlessly.
        </p>

        <p className="text-neutral-500 text-sm mb-10 tracking-widest uppercase">
          Founded by Shara Frison
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#shop"
            className="flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 shadow-lg shadow-rose-900/40 hover:shadow-rose-600/40 hover:-translate-y-0.5 text-sm"
          >
            <Sparkles size={16} />
            Shop the Collection
          </a>
          <a
            href="#about"
            className="text-neutral-300 hover:text-white font-medium text-sm border border-neutral-700 hover:border-neutral-500 px-8 py-3.5 rounded-full transition-all duration-300 hover:-translate-y-0.5"
          >
            Our Story
          </a>
        </div>
      </div>

      <a
        href="#shop"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-400 hover:text-rose-400 transition-colors animate-bounce"
      >
        <ArrowDown size={24} />
      </a>
    </section>
  );
}
