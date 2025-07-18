import type { BlogPost } from '../data/blogPostsData';

interface BlogPostCardProps {
  post: BlogPost;
  onClick?: () => void;
}

export default function BlogPostCard({ post, onClick }: BlogPostCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  // Function to generate background color based on category
  const getCategoryColors = (category: string) => {
    switch (category) {
      case 'Mental Health':
        return { bg: 'from-green-100 to-blue-100', icon: 'bg-green-500' };
      case 'Beginners':
        return { bg: 'from-blue-100 to-indigo-100', icon: 'bg-blue-500' };
      case 'Nutrition':
        return { bg: 'from-yellow-100 to-orange-100', icon: 'bg-yellow-500' };
      case 'Practice':
        return { bg: 'from-emerald-100 to-teal-100', icon: 'bg-emerald-500' };
      case 'Meditation':
        return { bg: 'from-purple-100 to-pink-100', icon: 'bg-purple-500' };
      case 'Wellness':
        return { bg: 'from-red-100 to-pink-100', icon: 'bg-red-500' };
      default:
        return { bg: 'from-gray-100 to-blue-100', icon: 'bg-gray-500' };
    }
  };

  const colors = getCategoryColors(post.category);

  return (
    <article 
      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 cursor-pointer"
      onClick={onClick}
    >
      <div className={`h-48 bg-gradient-to-br ${colors.bg} flex items-center justify-center relative`}>
        {/* Image generated with CSS */}
        <div className="w-32 h-32 relative">
          {/* Main circle */}
          <div className={`w-full h-full rounded-full ${colors.icon} flex items-center justify-center`}>
            {/* Category-based icon */}
            {post.category === 'Mental Health' && (
              <div className="text-white text-4xl">🧠</div>
            )}
            {post.category === 'Beginners' && (
              <div className="text-white text-4xl">🧘</div>
            )}
            {post.category === 'Nutrition' && (
              <div className="text-white text-4xl">🥗</div>
            )}
            {post.category === 'Practice' && (
              <div className="text-white text-4xl">⏰</div>
            )}
            {post.category === 'Meditation' && (
              <div className="text-white text-4xl">🕉️</div>
            )}
            {post.category === 'Wellness' && (
              <div className="text-white text-4xl">😌</div>
            )}
          </div>
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-white rounded-full opacity-80"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-white rounded-full opacity-60"></div>
        </div>
        {/* Category */}
        <div className="absolute bottom-4 left-4">
          <span className="text-sm font-medium text-gray-700 bg-white bg-opacity-80 px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <span>{formatDate(post.date)}</span>
          <span className="mx-2">•</span>
          <span>{post.readTime}</span>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          {post.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">
            By {post.author}
          </span>
          <button className="text-green-600 hover:text-green-700 font-medium text-sm">
            Read more →
          </button>
        </div>
      </div>
    </article>
  );
} 