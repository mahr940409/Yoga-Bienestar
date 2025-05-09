import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-accent-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              Dedicated to bringing wellness and balance to your life through yoga and natural products.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/shop" className="text-sm hover:text-accent-light">Shop</Link></li>
              <li><Link to="/blog" className="text-sm hover:text-accent-light">Blog</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent-light">About</Link></li>
              <li><Link to="/cart" className="text-sm hover:text-accent-light">Cart</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: contact@yogawellness.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Wellness Street</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded text-gray-800"
              />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-accent-light text-center text-sm">
          <p>© {new Date().getFullYear()} Yoga & Wellness. All rights reserved.</p>
          <p className="mt-2">Developed by Inselectronic</p>
        </div>
      </div>
    </footer>
  );
}