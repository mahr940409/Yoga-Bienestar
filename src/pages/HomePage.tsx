import { Link } from 'react-router-dom';
import { productsData } from '../data/productsData';

export default function HomePage() {
  const featuredProducts = productsData.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-cover bg-center" style={{
        backgroundImage: "url('https://images.pexels.com/photos/3822622/pexels-photo-3822622.jpeg')"
      }}>
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container-custom relative h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-5xl font-bold mb-4">Your Journey to Wellness Starts Here</h1>
            <p className="text-xl mb-8">Discover our premium collection of yoga essentials and refreshing smoothies designed to nourish your body and soul. Join us in creating a healthier, more balanced lifestyle.</p>
            <Link to="/shop" className="btn btn-primary">Explore Our Products</Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-gray-600">Carefully selected yoga equipment and fresh, natural ingredients for our smoothies</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Wellness Focus</h3>
              <p className="text-gray-600">Products designed to support your physical and mental well-being</p>
            </div>
            <div className="text-center p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Selection</h3>
              <p className="text-gray-600">Curated by wellness professionals for optimal results</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold">${product.price}</span>
                    <Link to="/shop" className="btn btn-primary">Shop Now</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl font-semibold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"The yoga equipment is top-notch, and the smoothies are absolutely delicious! Perfect combination for my wellness journey."</p>
              <p className="font-semibold">- Sarah M.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"I love the variety of products available. The green smoothies give me the perfect energy boost for my yoga practice."</p>
              <p className="font-semibold">- Michael R.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">"Great quality products and amazing customer service. This has become my go-to place for all things wellness!"</p>
              <p className="font-semibold">- Emma L.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-semibold mb-4">Join Our Wellness Community</h2>
          <p className="text-gray-600 mb-8">Subscribe to receive updates, wellness tips, and exclusive offers</p>
          <div className="max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}