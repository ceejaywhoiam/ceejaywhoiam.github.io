import { Product } from '../lib/supabase';
import { Sparkles, Package } from 'lucide-react';

const CATEGORY_IMAGES: Record<string, string> = {
  Gloss: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
  Mascara: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=600',
  Palette: 'https://images.pexels.com/photos/2922460/pexels-photo-2922460.jpeg?auto=compress&cs=tinysrgb&w=600',
  Liner: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=600',
  Lipstick: 'https://images.pexels.com/photos/1625773/pexels-photo-1625773.jpeg?auto=compress&cs=tinysrgb&w=600',
};

const GLOSS_IMAGES: Record<string, string> = {
  'Pink Dynasty': 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Expensive Taste': 'https://images.pexels.com/photos/2533267/pexels-photo-2533267.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Rich Girl Energy': 'https://images.pexels.com/photos/5069419/pexels-photo-5069419.jpeg?auto=compress&cs=tinysrgb&w=600',
  'First Class Kiss': 'https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&w=600',
  'Trophy Wife': 'https://images.pexels.com/photos/6953768/pexels-photo-6953768.jpeg?auto=compress&cs=tinysrgb&w=600',
};

const CATEGORY_COLORS: Record<string, { bg: string; text: string; badge: string }> = {
  Gloss: { bg: 'bg-rose-50', text: 'text-rose-600', badge: 'bg-rose-100 text-rose-700' },
  Mascara: { bg: 'bg-neutral-50', text: 'text-neutral-700', badge: 'bg-neutral-200 text-neutral-800' },
  Palette: { bg: 'bg-amber-50', text: 'text-amber-700', badge: 'bg-amber-100 text-amber-800' },
  Liner: { bg: 'bg-slate-50', text: 'text-slate-700', badge: 'bg-slate-100 text-slate-800' },
  Lipstick: { bg: 'bg-pink-50', text: 'text-pink-700', badge: 'bg-pink-100 text-pink-800' },
};

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  const imageUrl =
    product.image_url ||
    GLOSS_IMAGES[product.name] ||
    CATEGORY_IMAGES[product.category] ||
    CATEGORY_IMAGES['Gloss'];

  const colors = CATEGORY_COLORS[product.category] || CATEGORY_COLORS['Gloss'];
  const inStock = product.quantity > 0;

  return (
    <div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 cursor-pointer border border-neutral-100 hover:-translate-y-1"
      onClick={() => onClick(product)}
    >
      <div className="relative overflow-hidden h-64">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {product.badge && (
          <span className={`absolute top-3 left-3 text-xs font-semibold px-2.5 py-1 rounded-full ${colors.badge}`}>
            {product.badge}
          </span>
        )}

        {!inStock && (
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <span className="bg-white/90 text-neutral-800 text-sm font-semibold px-4 py-2 rounded-full">
              Sold Out
            </span>
          </div>
        )}

        <div className="absolute bottom-3 right-3">
          <span className="bg-white/90 backdrop-blur-sm text-neutral-800 font-bold text-sm px-3 py-1.5 rounded-full shadow">
            ${product.price.toFixed(2)}
          </span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-neutral-900 text-base leading-tight group-hover:text-rose-600 transition-colors">
            {product.name}
          </h3>
          <span className={`shrink-0 text-xs font-medium px-2 py-0.5 rounded-full ${colors.badge}`}>
            {product.category}
          </span>
        </div>

        <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-xs text-neutral-500">
            <Package size={13} />
            <span>{inStock ? `${product.quantity} in stock` : 'Out of stock'}</span>
          </div>
          <button
            className={`flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-full transition-all duration-200 ${
              inStock
                ? 'bg-rose-600 text-white hover:bg-rose-700 shadow-sm hover:shadow-md'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
            disabled={!inStock}
            onClick={(e) => { e.stopPropagation(); onClick(product); }}
          >
            <Sparkles size={12} />
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}
