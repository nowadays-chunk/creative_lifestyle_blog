import { Calendar, User, Clock, Tag } from 'lucide-react';

export interface Author {
    id: string;
    name: string;
    role: string;
    bio: string;
    avatar: string; // URL
}

export interface BlogPost {
    id: string;
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    authorId: string;
    date: string;
    readTime: string;
    category: string;
    image: string; // URL placeholder
    tags: string[];
}

export const authors: Author[] = [
    {
        id: 'elena-fisher',
        name: 'Elena Fisher',
        role: 'Editor in Chief',
        bio: 'Curator of aesthetic movements and digital minimalism. Elena explores the intersection of design, slow living, and technology.',
        avatar: '/images/influencer-1.jpg',
    },
    {
        id: 'marcus-neo',
        name: 'Marcus Neo',
        role: 'Tech Futurist',
        bio: 'Obsessed with cyberpunk aesthetics, neon lights, and the future of web interfaces.',
        avatar: '/images/influencer-2.jpg',
    },
    {
        id: 'sophia-green',
        name: 'Sophia Green',
        role: 'Sustainable Living Expert',
        bio: 'Advocate for eco-friendly design and biophilic architecture. bringing nature back into the digital realm.',
        avatar: '/images/influencer-3.jpg',
    },
    {
        id: 'alex-vogue',
        name: 'Alex Vogue',
        role: 'Fashion Director',
        bio: 'High-contrast, bold, and unapologetic. Alex covers the avant-garde of digital fashion.',
        avatar: '/images/influencer-4.jpg',
    }
];

export const posts: BlogPost[] = [
    {
        id: '1',
        title: 'The Art of Slow Living in a Fast Digital World',
        slug: 'art-of-slow-living',
        excerpt: 'Rediscovering the beauty of silence and whitespace in our increasingly cluttered digital environments.',
        content: 'Long form content would go here...',
        authorId: 'elena-fisher',
        date: 'Oct 24, 2024',
        readTime: '5 min',
        category: 'Lifestyle',
        image: '/images/article-1.jpg',
        tags: ['Minimalism', 'Wellness', 'Design'],
    },
    {
        id: '2',
        title: 'Neon Nights: The Resurgence of Cyberpunk UI',
        slug: 'neon-nights-cyberpunk',
        excerpt: 'Why glowing borders, dark modes, and glitch effects are taking over modern web design.',
        content: 'Long form content would go here...',
        authorId: 'marcus-neo',
        date: 'Oct 22, 2024',
        readTime: '4 min',
        category: 'Tech',
        image: '/images/article-2.jpg',
        tags: ['Cyberpunk', 'UI/UX', 'Trends'],
    },
    {
        id: '3',
        title: 'Biophilic Design: bringing the Outdoors In',
        slug: 'biophilic-design',
        excerpt: 'How integrating organic shapes and natural colors can improve user well-being.',
        content: 'Long form content would go here...',
        authorId: 'sophia-green',
        date: 'Oct 18, 2024',
        readTime: '6 min',
        category: 'Sustainability',
        image: '/images/article-3.jpg',
        tags: ['Eco', 'Green', 'Architecture'],
    },
    {
        id: '4',
        title: 'Monochrome Mastery: The Power of Black & White',
        slug: 'monochrome-mastery',
        excerpt: 'Stripping away color to focus on form, typography, and contrast.',
        content: 'Long form content would go here...',
        authorId: 'alex-vogue',
        date: 'Oct 15, 2024',
        readTime: '3 min',
        category: 'Fashion',
        image: '/images/article-4.jpg',
        tags: ['Fashion', 'Minimalism', 'Style'],
    },
    {
        id: '5',
        title: 'Retro Revival: Why Pixel Art is Back',
        slug: 'retro-revival-pixel-art',
        excerpt: 'Nostalgia as a design tool. Exploring the return of 8-bit aesthetics.',
        content: 'Long form content would go here...',
        authorId: 'marcus-neo',
        date: 'Oct 10, 2024',
        readTime: '4 min',
        category: 'Gaming',
        image: '/images/article-5.jpg',
        tags: ['Retro', 'Gaming', 'Art'],
    },
    {
        id: '6',
        title: 'Abstract Shapes in Modern Layouts',
        slug: 'abstract-shapes-layouts',
        excerpt: 'Breaking the grid with asymmetry and bold geometric forms.',
        content: 'Long form content would go here...',
        authorId: 'alex-vogue',
        date: 'Oct 05, 2024',
        readTime: '5 min',
        category: 'Art',
        image: '/images/article-6.jpg',
        tags: ['Design', 'Abstract', 'Layout'],
    },
];
