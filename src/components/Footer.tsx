import { Sparkles, Instagram, Mail, Heart } from 'lucide-react';

const SHOP_LINKS = [
  { label: 'Matte Lip Gloss Collection', category: 'Gloss' },
  { label: 'Mascara', category: 'Mascara' },
  { label: 'Eye Palettes', category: 'Palette' },
  { label: 'Liquid Liner', category: 'Liner' },
  { label: 'Lip Collection', category: 'Lipstick' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-neutral-950 text-neutral-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-rose-600 rounded-full flex items-center justify-center">
                <Sparkles size={16} className="text-white" />
              </div>
              <div>
                <span className="text-lg font-black text-white tracking-tight">TIMELESS ICONIXX</span>
                <span className="text-lg font-light tracking-widest text-rose-400 ml-1.5">BEAUTY</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-neutral-500 max-w-xs">
              Luxury beauty products crafted for confident women who know their worth and wear it effortlessly.
            </p>
            <p className="text-xs text-neutral-600 mt-3">CEO & Founder: Shara Frison</p>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Shop</h4>
            <ul className="space-y-2 text-sm">
              {SHOP_LINKS.map(({ label }) => (
                <li key={label}>
                  <a href="#shop" className="hover:text-rose-400 transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-4">Connect</h4>
            <div className="flex gap-3 mb-4">
              <a
                href="https://www.instagram.com/iconixxbeauty"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-neutral-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram size={16} className="text-white" />
              </a>
              <a
                href="mailto:hello@iconixxbeauty.com"
                className="w-9 h-9 bg-neutral-800 hover:bg-rose-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail size={16} className="text-white" />
              </a>
            </div>
            <p className="text-xs text-neutral-600">
              For inquiries and collaborations, reach out to us on social media.
            </p>
          </div>
        </div>

        <div className="border-t border-neutral-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-600">
          <p>&copy; {new Date().getFullYear()} Timeless Iconixx Beauty. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={11} className="text-rose-500 fill-rose-500" /> by Shara Frison
          </p>
        </div>
      </div>
    </footer>
  );
}
