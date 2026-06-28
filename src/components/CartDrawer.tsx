import { useEffect } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, Sparkles } from 'lucide-react';
import { Product } from '../lib/supabase';

export interface CartItem {
  product: Product;
  quantity: number;
}

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export default function CartDrawer({ isOpen, onClose, items, onUpdateQuantity, onRemove }: CartDrawerProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const total = items.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 z-50 h-full w-full max-w-sm bg-white shadow-2xl flex flex-col transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-100">
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-rose-600" />
            <h2 className="text-lg font-bold text-neutral-900">Your Cart</h2>
            {itemCount > 0 && (
              <span className="bg-rose-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {itemCount}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center gap-4">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center">
                <ShoppingBag size={28} className="text-rose-300" />
              </div>
              <div>
                <p className="font-semibold text-neutral-700 mb-1">Your cart is empty</p>
                <p className="text-neutral-400 text-sm">Browse our collection and add items to get started.</p>
              </div>
              <button
                onClick={onClose}
                className="mt-2 text-sm font-semibold text-rose-600 hover:text-rose-700 underline underline-offset-2"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <ul className="space-y-4">
              {items.map(({ product, quantity }) => (
                <li key={product.id} className="flex gap-4 items-start border-b border-neutral-50 pb-4 last:border-0">
                  <div className="w-16 h-16 rounded-xl overflow-hidden bg-neutral-100 shrink-0">
                    {product.image_url ? (
                      <img src={product.image_url} alt={product.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full bg-rose-50 flex items-center justify-center">
                        <Sparkles size={18} className="text-rose-300" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-neutral-900 text-sm leading-tight truncate">{product.name}</p>
                    <p className="text-xs text-neutral-400 mt-0.5">{product.category}</p>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => quantity === 1 ? onRemove(product.id) : onUpdateQuantity(product.id, quantity - 1)}
                          className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-rose-100 text-neutral-600 hover:text-rose-600 flex items-center justify-center transition-colors"
                        >
                          <Minus size={11} />
                        </button>
                        <span className="text-sm font-semibold text-neutral-800 w-5 text-center">{quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(product.id, quantity + 1)}
                          disabled={quantity >= product.quantity}
                          className="w-6 h-6 rounded-full bg-neutral-100 hover:bg-rose-100 text-neutral-600 hover:text-rose-600 flex items-center justify-center transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                        >
                          <Plus size={11} />
                        </button>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-neutral-900">${(product.price * quantity).toFixed(2)}</span>
                        <button
                          onClick={() => onRemove(product.id)}
                          className="text-neutral-300 hover:text-rose-500 transition-colors"
                        >
                          <Trash2 size={14} />
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-neutral-100 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm text-neutral-500">Subtotal</span>
              <span className="text-lg font-bold text-neutral-900">${total.toFixed(2)}</span>
            </div>
            <p className="text-xs text-neutral-400">Shipping & taxes calculated at checkout.</p>
            <button className="w-full flex items-center justify-center gap-2 bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3.5 rounded-full text-sm transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-0.5">
              <Sparkles size={15} />
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full text-sm text-neutral-500 hover:text-neutral-700 font-medium transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
