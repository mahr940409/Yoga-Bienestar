export default function AboutUs() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-50 to-blue-50 py-20">
        <div className="container-custom text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-green-600">Yoga & Wellness</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We are your destination for holistic well-being and mindful living. Our mission is to guide you on your journey to inner peace and overall health.
          </p>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-gray-600">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">50+</div>
              <div className="text-gray-600">Natural Products</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">10+</div>
              <div className="text-gray-600">Years of Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-600 mb-6">
                It all began in 2014 when our founder, María González, discovered the transformative power of yoga during a difficult time in her life. What started as a personal practice became a passion for sharing the benefits of yoga with others.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Today, Yoga & Wellness is more than a store; it is a community of people committed to personal growth, natural health, and holistic well-being. We believe everyone deserves to live a balanced and fulfilling life.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🧘‍♀️</span>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">María González</h3>
                  <p className="text-gray-600">Founder & Yoga Instructor</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg p-8 text-center">
              <div className="text-6xl mb-4">🕉️</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Philosophy</h3>
              <p className="text-gray-600">
                "Yoga is not just a physical practice, it is a path to self-awareness, inner peace, and connection with everything around us."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do and how we serve our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Authenticity</h3>
              <p className="text-gray-600">
                We believe in being genuine in everything we do, from our products to our teachings and customer relationships.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600">
                We build meaningful connections and support the growth of every member of our wellness community.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainability</h3>
              <p className="text-gray-600">
                We are committed to sustainable practices and products that respect our planet and promote global health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Meet the passionate people who make Yoga & Wellness possible.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🦰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">María González</h3>
              <p className="text-gray-600 mb-2">Founder & Instructor</p>
              <p className="text-sm text-gray-500">Certified in Hatha Yoga</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🦱</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Carlos Rodríguez</h3>
              <p className="text-gray-600 mb-2">Senior Instructor</p>
              <p className="text-sm text-gray-500">Vinyasa Specialist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👩‍🦳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Ana Martínez</h3>
              <p className="text-gray-600 mb-2">Nutrition Specialist</p>
              <p className="text-sm text-gray-500">Holistic Nutritionist</p>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl">👨‍🦲</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Luis Fernández</h3>
              <p className="text-gray-600 mb-2">Meditation Instructor</p>
              <p className="text-sm text-gray-500">Mindfulness Teacher</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover how Yoga & Wellness has transformed the lives of our community.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">
                "Yoga & Wellness changed my life. Not only did I improve my flexibility, but I also found mental peace and a new perspective on life."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">S</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Sofia Pérez</div>
                  <div className="text-sm text-gray-500">Client since 2020</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">
                "The natural products are amazing and the team is very professional. I feel part of a true wellness community."
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">R</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Roberto Silva</div>
                  <div className="text-sm text-gray-500">Client since 2021</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <div className="text-2xl mr-3">⭐⭐⭐⭐⭐</div>
              </div>
              <p className="text-gray-600 mb-4">
                "As a beginner, I felt very welcome. The instructors are patient and the environment is very friendly. Highly recommended!"
              </p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-sm">E</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Elena Vargas</div>
                  <div className="text-sm text-gray-500">Client since 2022</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Start Your Wellness Journey?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join our community and discover the transformative power of yoga and mindful living.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Explore Products
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}