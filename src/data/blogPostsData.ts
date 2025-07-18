export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  image: string;
  category: string;
  readTime: string;
}

export const blogPostsData: BlogPost[] = [
  {
    id: 1,
    title: "The Top 5 Benefits of Yoga for Mental Health",
    excerpt: "Discover how regular yoga practice can transform your mental and emotional well-being.",
    content: "Yoga is much more than a series of physical postures. It is a holistic practice that integrates body, mind, and spirit. Studies have shown that regular yoga can significantly reduce levels of stress, anxiety, and depression. Breathing techniques (pranayama) and meditation, which are part of yoga, help calm the nervous system and promote a state of inner peace. Additionally, yoga improves concentration and mental clarity, which can be especially beneficial in our modern, distraction-filled world.",
    author: "Maria Gonzalez",
    date: "2024-01-15",
    image: "/images/blog/yoga-mental-health.svg",
    category: "Mental Health",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Complete Beginner's Guide: Your First Yoga Class",
    excerpt: "Everything you need to know to start your yoga journey safely and effectively.",
    content: "Starting yoga can seem overwhelming, but it doesn't have to be. This guide will take you step by step through everything you need to know for your first class. From what to wear to the most important basic postures, we'll help you feel comfortable and confident in your practice. Remember, yoga is a personal journey, not a competition. Every body is different and every practice is unique. The most important thing is to listen to your body and respect your limits.",
    author: "Carlos Rodriguez",
    date: "2024-01-10",
    image: "/images/blog/yoga-beginners.svg",
    category: "Beginners",
    readTime: "8 min"
  },
  {
    id: 3,
    title: "Mindful Eating: Nutrition for Yoga Practitioners",
    excerpt: "How mindful eating can complement and enhance your yoga practice.",
    content: "Nutrition and yoga are deeply connected. A mindful diet not only nourishes your physical body but also supports your spiritual practice. The principles of yoga teach us to eat mindfully, listening to our body's signals and choosing foods that nourish us holistically. Fresh, organic, and seasonal foods are ideal for yoga practitioners, as they contain prana (vital energy) in its purest form.",
    author: "Ana Martinez",
    date: "2024-01-08",
    image: "/images/blog/yoga-nutrition.svg",
    category: "Nutrition",
    readTime: "6 min"
  },
  {
    id: 4,
    title: "Yoga Sequences for Different Times of the Day",
    excerpt: "Discover the best yoga practices for morning, afternoon, and night.",
    content: "The time of day you practice yoga can have a significant impact on the benefits you receive. Morning sequences are usually more energizing and help wake up the body and mind. Afternoon practices can be more balanced, while evening routines focus on relaxation and preparing for sleep. Each moment has its purpose and can help you better synchronize with your body's natural rhythms.",
    author: "Luis Fernandez",
    date: "2024-01-05",
    image: "/images/blog/yoga-sequences.svg",
    category: "Practice",
    readTime: "7 min"
  },
  {
    id: 5,
    title: "Meditation & Mindfulness: The Perfect Complement to Yoga",
    excerpt: "How to integrate meditation into your yoga practice for complete well-being.",
    content: "Meditation is the natural complement to physical yoga. While asanas (postures) work the body, meditation works the mind. Together, they create a holistic practice that can completely transform your life experience. Meditation doesn't have to be complicated—even 5-10 minutes a day can make a significant difference. Mindfulness techniques can be easily integrated into your yoga practice, helping you be more present both on the mat and in daily life.",
    author: "Sofia Perez",
    date: "2024-01-03",
    image: "/images/blog/yoga-meditation.svg",
    category: "Meditation",
    readTime: "6 min"
  },
  {
    id: 6,
    title: "Yoga for Stress Management: Proven Techniques",
    excerpt: "Learn specific yoga techniques to reduce stress and find inner calm.",
    content: "In our modern world, stress has become a constant. Fortunately, yoga offers powerful tools to manage stress effectively. Restorative postures, deep breathing techniques, and progressive relaxation are especially useful for calming the nervous system. These practices not only reduce the symptoms of stress but also help you develop resilience to face future stressful situations.",
    author: "Elena Vargas",
    date: "2024-01-01",
    image: "/images/blog/yoga-stress.svg",
    category: "Wellness",
    readTime: "5 min"
  }
]; 