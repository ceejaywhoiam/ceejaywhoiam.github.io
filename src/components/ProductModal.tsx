import { useEffect, useRef } from 'react';
import { X, Sparkles, Package, CheckCircle2 } from 'lucide-react';
import { Product } from '../lib/supabase';

const CATEGORY_IMAGES: Record<string, string> = {
  Gloss: 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
  Mascara: 'https://images.pexels.com/photos/3373736/pexels-photo-3373736.jpeg?auto=compress&cs=tinysrgb&w=800',
  Palette: 'https://images.pexels.com/photos/2922460/pexels-photo-2922460.jpeg?auto=compress&cs=tinysrgb&w=800',
  Liner: 'https://images.pexels.com/photos/3059609/pexels-photo-3059609.jpeg?auto=compress&cs=tinysrgb&w=800',
  Lipstick: 'https://images.pexels.com/photos/1625773/pexels-photo-1625773.jpeg?auto=compress&cs=tinysrgb&w=800',
};

const GLOSS_IMAGES: Record<string, string> = {
  'Pink Dynasty': 'https://images.pexels.com/photos/2533266/pexels-photo-2533266.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Expensive Taste': 'https://images.pexels.com/photos/2533267/pexels-photo-2533267.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Rich Girl Energy': 'https://images.pexels.com/photos/5069419/pexels-photo-5069419.jpeg?auto=compress&cs=tinysrgb&w=800',
  'First Class Kiss': 'https://images.pexels.com/photos/4620843/pexels-photo-4620843.jpeg?auto=compress&cs=tinysrgb&w=800',
  'Trophy Wife': 'https://images.pexels.com/photos/6953768/pexels-photo-6953768.jpeg?auto=compress&cs=tinysrgb&w=800',
};

interface ProductModalProps {
  product: Product;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export default function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const imageUrl =
    product.image_url ||
    GLOSS_IMAGES[product.name] ||
    CATEGORY_IMAGES[product.category] ||
    CATEGORY_IMAGES['Gloss'];

  const inStock = product.quantity > 0;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleOverlayClick}
    >
      <div className="relative bg-white rounded-3xl overflow-hidden max-w-3xl w-full max-h-[90vh] shadow-2xl flex flex-col md:flex-row animate-slideUp">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white text-neutral-700 hover:text-rose-600 rounded-full p-2 shadow-md transition-all duration-200"
        >
          <X size={18} />
        </button>

        <div className="md:w-2/5 shrink-0">
          <img
            src={imageUrl}
            alt={product.name}
            className="w-full h-64 md:h-full object-cover"
          />
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-xs font-semibold text-rose-600 bg-rose-50 px-3 py-1 rounded-full uppercase tracking-wider">
              {product.category}
            </span>
            {product.badge && (
              <span className="text-xs font-medium text-neutral-600 bg-neutral-100 px-3 py-1 rounded-full">
                {product.badge}
              </span>
            )}
          </div>

          <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 mb-1 leading-tight">
            {product.name}
          </h2>

          <div className="flex items-center gap-4 mb-5">
            <span className="text-2xl font-bold text-rose-600">
              ${product.price.toFixed(2)}
            </span>
            <div className={`flex items-center gap-1.5 text-sm font-medium ${inStock ? 'text-emerald-600' : 'text-neutral-400'}`}>
              <Package size={15} />
              <span>{inStock ? `${product.quantity} available` : 'Sold out'}</span>
            </div>
          </div>

          <p className="text-neutral-600 text-sm leading-relaxed mb-6">
            {product.description}
          </p>

          {product.features.length > 0 && (
            <div className="mb-6">
              <h4 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-3">
                Key Features
              </h4>
              <ul className="grid grid-cols-1 gap-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-700">
                    <CheckCircle2 size={15} className="text-rose-400 shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <button
            disabled={!inStock}
            onClick={() => { onAddToCart(product); onClose(); }}
            className={`w-full flex items-center justify-center gap-2 font-semibold py-3.5 rounded-full text-sm transition-all duration-300 ${
              inStock
                ? 'bg-rose-600 hover:bg-rose-700 text-white shadow-md hover:shadow-lg hover:-translate-y-0.5'
                : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
            }`}
          >
            <Sparkles size={15} />
            {inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  );
}
