export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const myProjects = [
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://github.com/Alvin4646/horizonBanking',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Lyriks - Music Streaming Platform',
        desc: 'Lyriks is a Music streaming and playing platform that uses the rapid api shazam core api to fetch music data and display it in a user-friendly interface.',
        subdesc:
            "Built with React js, Tailwind CSS, TypeScript, RapidAPI Lyriks is designed for optimal performance and scalability. It uses Shazam Core API's prebuild REST apis for fetching and streaming music",
        href: 'https://github.com/Alvin4646/lyriksMusic',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
            {
                id: 4,
                name: 'RapidApi',
                path: '/assets/rapidapi.png',
            },
        ],
    },
    {
        title: 'CRWN Clothing - Ecommerce Frontend Application',
        desc: 'CRWN Clothing is a modern and user-friendly e-commerce platform that allows users to browse and purchase clothing products.',
        subdesc:
            'With CRWN Clothing, uses React js, Tailwind CSS, TypeScript, and Stripe for secure payment processing.',
        href: 'https://github.com/Alvin4646/crwn-Clothing',
        texture: '/textures/project/project2.mp4',
        logo: '/assets/project-logo2.png',
        logoStyle: {
            backgroundColor: '#13202F',
            border: '0.2px solid #17293E',
            boxShadow: '0px 0px 60px 0px #2F6DB54D',
        },
        spotlight: '/assets/spotlight2.png',
        tags: [
            {
                id: 1,
                name: 'React.js',
                path: '/assets/react.svg',
            },
            {
                id: 2,
                name: 'TailwindCSS',
                path: 'assets/tailwindcss.png',
            },
            {
                id: 3,
                name: 'TypeScript',
                path: '/assets/typescript.png',
            },
        ],
    },
    {
        title: 'Online Salon Booking and Management',
        desc: 'A full-featured salon management platform with separate portals for customers and administrators, streamlining appointments, services, and payment tracking across multiple locations.',
        subdesc:
            'Built using Angular, Spring Boot, and PostgreSQL, this solution allows admins to manage services, customers, and payments, while customers can book appointments from multiple salons with ease.',
        href: 'https://github.com/Alvin4646/OnlineSalonService_BACKEND',
        texture: '/textures/project/project3.mp4',
        logo: '/assets/project-logo3.png',
        logoStyle: {
            backgroundColor: '#60f5a1',
            background:
                'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
            border: '0.2px solid rgba(208, 213, 221, 1)',
            boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
        },
        spotlight: '/assets/spotlight3.png',
        tags: [
            {
                id: 1,
                name: 'Angular',
                path: '/assets/angular.png',
            },
            {
                id: 2,
                name: 'Springboot',
                path: 'assets/springboot.png',
            },
            {
                id: 3,
                name: 'PostgreSql',
                path: '/assets/postgresql.png',
            }
        ],
    }
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Capgemini',
        pos: 'Frontend Developer',
        duration: '2022 - Present',
        title:`Developed interactive and responsive UI components using React and TypeScript
Built and managed forms with state handling via Redux Toolkit (RTK). Utilized RTK Query for efficient data fetching and state management
Implemented unit tests using Jest, ensuring 80%+ test coverage. Developed Micro Frontends, integrating Webpack and Vite for modular architecture.
Worked with both CSS and styled-components for flexible styling solutions.
Debugged and resolved UI/UX issues to enhance application stability and performance.`,
        icon: '/assets/CG.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Kiyan CH Solutions',
        pos: 'Intern',
        duration: '2021 - 2022',
        title: `Assisted in developing frontend components for client web application using Angular and Bootstrap CSS
Gained experience in real-world software development workflows and team communication in a remote setting`,
        icon: '/assets/Kiyan.jpeg',
        animation: 'clapping',
    }
];