export interface Project {
    id: string;
    name: string;
    image?: string;
    description: string;
    tags: string[];
    github: string;
    demo: string;
    /** 'building' projects get an animated "coming soon" preview */
    status?: 'live' | 'building';
}

export const projects: Project[] = [
    {
        id: 'wanderlust',
        name: 'WanderLust',
        image: '/wanderlust.png', // live UI screenshot of the app
        description: 'A full-stack travel listing platform with an Airbnb-style UI. Browse stays by category, search by country, and manage listings with image uploads and interactive maps.',
        tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Leaflet'],
        github: 'https://github.com/123umair/Wander_Lust_Fullstack',
        demo: 'https://wander-lust-fullstack.vercel.app/',
    },
    {
        id: 'crazeations',
        name: 'Crazeations',
        image: '/crazeations.png', // live UI screenshot of the site
        description: 'The website of Crazeations Institute & Digital Agency — "Build Your Digital Career". A responsive multi-page frontend featuring course pages (Video Editing, Shopify, Graphic Design, AI) with stats and animations.',
        tags: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Router'],
        github: 'https://github.com/123umair/Crazeations',
        demo: 'https://crazeations-digital.vercel.app/',
    },
    {
        id: 'tradenest',
        name: 'TradeNest',
        // no image yet — card shows the animated "coming soon" build preview
        description: 'A secure full-stack MERN marketplace featuring dynamic user dashboards, inventory processing pipelines, secure checkout structures, and rapid search indexing. Currently under construction.',
        tags: ['MongoDB', 'Express', 'React', 'Node.js', 'JWT', 'Stripe'],
        github: 'https://github.com/123umair',
        status: 'building',
        demo: '#',
    },
];
