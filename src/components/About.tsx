import { Star, Crown, Gem } from 'lucide-react';

const STATS = [
  { icon: Star, label: 'Premium Formulas', desc: 'Vegan & cruelty-free beauty' },
  { icon: Crown, label: 'Luxury Finish', desc: 'Velvet matte & shimmer textures' },
  { icon: Gem, label: 'All Skin Tones', desc: 'Inclusive shades for every queen' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/5]">
              <img
                src="/ceo.png"
                alt="Timeless Iconixx Beauty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-rose-950/40 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl shadow-xl p-5 max-w-xs border border-rose-50">
              <p className="text-rose-600 font-bold text-lg mb-0.5">Shara Frison</p>
              <p className="text-neutral-500 text-xs uppercase tracking-widest">Founder & CEO</p>
              <p className="text-neutral-600 text-sm mt-2 leading-relaxed">
                "Every product is created to help you feel iconic — because you already are."
              </p>
            </div>
          </div>

          <div>
            <p className="text-rose-500 font-medium text-sm uppercase tracking-widest mb-3">Our Story</p>
            <h2 className="text-4xl font-bold text-neutral-900 mb-6 leading-tight">
              Beauty Born From
              <span className="block text-rose-600">Confidence</span>
            </h2>

            <p className="text-neutral-600 leading-relaxed mb-4 text-sm">
              Timeless Iconixx Beauty was created for women who carry themselves like royalty. Every shade, every formula, and every product is designed with luxury, confidence, and self-expression in mind.
            </p>

            <p className="text-neutral-600 leading-relaxed mb-10 text-sm">
              From the velvet-smooth matte glosses to our precision liners, each piece in the collection is a statement — because you are iconic, and your beauty should reflect that.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {STATS.map(({ icon: Icon, label, desc }) => (
                <div key={label} className="bg-white rounded-2xl p-4 border border-rose-50 shadow-sm text-center">
                  <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Icon size={18} className="text-rose-500" />
                  </div>
                  <p className="font-semibold text-neutral-800 text-sm">{label}</p>
                  <p className="text-neutral-500 text-xs mt-1">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
