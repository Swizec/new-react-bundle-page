
import React from 'react';

import stephen from './authors/stephen.jpg';
import arkency from './authors/arkency.png';
import swizec from './authors/swizec.png';
import bebraw from './authors/bebraw.jpg';
import azat from './authors/azat.jpg';

export const Authors = [
    {
        src: stephen,
        name: 'Stephen Grider',
        title: 'Engineering Architect',
        description: "He's been building complex Javascript front ends for top corporations in the San Francisco Bay Area. With an innate ability to simplify complex topics, Stephen has been mentoring engineers beginning their careers in software development for years.",
        links: {
            twitter: 'https://twitter.com/ste_grider'
        }
    },

    {
        src: bebraw,
        name: 'Juho Vepsäläinen',
        title: 'Codejävel that enjoys #art',
        description: "Part of Webpack core team. Has been dealing with the web since the 90s. He's behind jsqiki and jster.net. Developed colorjoe, reactabular and many other libraries.",
        links: {
            twitter: 'https://twitter.com/bebraw'
        }
    },

    {
        src: swizec,
        name: 'Swizec Teller',
        title: 'Web Engineer',
        description: 'Digital nomad and full stack web engineer. Travels the world and helps startups win. From setting up new teams and training juniors, to fixing spaghetti code and implementing new features. His work has appeared in Business Insider, LifeHacker, Huffington Post, and dead-tree magazines.',
        links: {
            twitter: 'https://twitter.com/Swizec',
            facebook: 'https://www.facebook.com/swizecpage/'
        }
    },

    {
        src: arkency,
        name: 'Arkency',
        title: 'React Experts as a Service',
        description: 'We build software for a business. We help in growing big and advanced applications as well as planning and creating startups. We advise and educate programmers. We write blog, books and record webinars and podcasts. We happily share our knowledge and huge expertise. We rely on long-term and trust business relationship.',
        links: {
            twitter: 'https://twitter.com/arkency'
        }
    },

    {
        src: azat,
        name: 'Azat Mardan',
        title: 'Technology Fellow at @capitalone',
        description: "Has over 12 years of experience in web, mobile and software development. With a Bachelor's Degree in Informatics and a Master of Science in Information Systems Technology degree, Azat possesses deep academic knowledge as well as extensive practical experience.",
        links: {
            twitter: 'https://twitter.com/azat_co'
        }
    },
];
