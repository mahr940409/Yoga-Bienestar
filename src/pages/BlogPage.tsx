import { useState } from 'react';
import { blogPostsData } from '../data/blogPostsData';
import BlogPostCard from '../components/BlogPostCard';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  
  const categories = ['All', ...Array.from(new Set(blogPostsData.map(post => post.category)))];
  
  const filteredPosts = selectedCategory === 'All' 
    ? blogPostsData 
    : blogPostsData.filter(post => post.category === selectedCategory);

  const handlePostClick = (postId: number) => {
    // Here you could navigate to a post detail page
    console.log('Post clicked:', postId);
  };

  return (
    <div className="container-custom py-8">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Yoga & Wellness Blog</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover tips, techniques, and wisdom for your yoga practice and holistic well-being.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
              selectedCategory === category
                ? 'bg-green-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <BlogPostCard
            key={post.id}
            post={post}
            onClick={() => handlePostClick(post.id)}
          />
        ))}
      </div>

      {/* Newsletter Signup */}
      <div className="mt-16 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-8 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Stay Connected!
        </h3>
        <p className="text-gray-600 mb-6 max-w-md mx-auto">
          Receive the latest news, tips, and yoga resources directly to your inbox.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button className="px-6 py-3 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}