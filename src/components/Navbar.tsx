import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { useCart } from '../stores/cartStore';

export default function Navbar() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const { items, removeItem, updateQuantity } = useCart();
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-semibold text-accent-dark flex items-center">
            <img 
              src="/images/logo/logo.png" 
              alt="Yoga & Wellness Logo" 
              style={{ height: '36px', width: '36px', borderRadius: '50%', objectFit: 'cover', marginRight: '12px', background: 'transparent' }}
            />
            Yoga & Wellness
          </Link>

          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-600 hover:text-accent">Home</Link>
            <Link to="/shop" className="text-gray-600 hover:text-accent">Shop</Link>
            <Link to="/about" className="text-gray-600 hover:text-accent">About</Link>
            <Link to="/blog" className="text-gray-600 hover:text-accent">Blog</Link>
          </div>

          <div className="relative">
            <button 
              onClick={() => setIsCartOpen(!isCartOpen)}
              className="relative"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-600" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </button>

            {isCartOpen && (
              <div className="absolute right-0 mt-2 w-96 bg-white rounded-lg shadow-xl">
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-4">Shopping Cart</h3>
                  {items.length === 0 ? (
                    <p>Your cart is empty</p>
                  ) : (
                    <>
                      <div className="space-y-3">
                        {items.map((item) => (
                          <div key={item.id} className="flex justify-between items-center">
                            <div>
                              <p className="font-medium">{item.name}</p>
                              <p className="text-sm text-gray-500">${item.price}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <input
                                type="number"
                                min="1"
                                value={item.quantity}
                                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                className="w-16 px-2 py-1 border rounded text-sm"
                              />
                              <button
                                onClick={() => removeItem(item.id)}
                                className="text-red-500 hover:text-red-700 text-sm"
                              >
                                Remove
                              </button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-4 pt-4 border-t">
                        <div className="flex justify-between items-center">
                          <span className="font-semibold">Total:</span>
                          <span className="font-semibold">${total.toFixed(2)}</span>
                        </div>
                        <Link
                          to="/cart"
                          className="mt-4 w-full btn btn-primary text-center block"
                          onClick={() => setIsCartOpen(false)}
                        >
                          Checkout
                        </Link>
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}