export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'mats' | 'props' | 'clothing' | 'accessories' | 'smoothies';
}

export const productsData: Product[] = [
  {
    id: '1',
    name: 'Premium Yoga Mat',
    description: 'High-quality, eco-friendly yoga mat with excellent grip and cushioning.',
    price: 68.99,
    image: 'https://images.pexels.com/photos/4056535/pexels-photo-4056535.jpeg',
    category: 'mats'
  },
  {
    id: '2',
    name: 'Meditation Cushion',
    description: 'Comfortable zafu cushion for meditation practice.',
    price: 34.99,
    image: 'https://images.pexels.com/photos/3822621/pexels-photo-3822621.jpeg',
    category: 'props'
  },
  {
    id: '3',
    name: 'Green Power Smoothie',
    description: 'Energizing blend of spinach, banana, and plant protein.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/1346347/pexels-photo-1346347.jpeg',
    category: 'smoothies'
  },
  {
    id: '4',
    name: 'Berry Blast Shake',
    description: 'Mixed berries, yogurt, and honey protein shake.',
    price: 8.99,
    image: 'https://images.pexels.com/photos/1337825/pexels-photo-1337825.jpeg',
    category: 'smoothies'
  },
  {
    id: '5',
    name: 'Tropical Paradise Smoothie',
    description: 'Mango, pineapple, and coconut milk smoothie.',
    price: 7.99,
    image: 'https://images.pexels.com/photos/616833/pexels-photo-616833.jpeg',
    category: 'smoothies'
  },
  {
    id: '6',
    name: 'Yoga Wheel',
    description: 'Versatile prop for backbends and stretching.',
    price: 42.99,
    image: 'https://images.pexels.com/photos/4056723/pexels-photo-4056723.jpeg',
    category: 'props'
  }
];