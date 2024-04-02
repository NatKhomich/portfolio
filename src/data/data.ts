import taskManager from '../assets/images/task-manager.webp'
import social from '../assets/images/social.webp'
import productPage from '../assets/images/product.webp'
import nftArt from '../assets/images/nft-art.webp'
import smartCards from '../assets/images/smartCards.webp'
import {theme} from '../styles/Theme';

import {IconType} from 'react-icons';
import {FaReact} from 'react-icons/fa';
import {SiRedux} from 'react-icons/si';
import {TbBrandTypescript} from 'react-icons/tb';
import {IoLogoJavascript} from 'react-icons/io5';
import {FaHtml5} from 'react-icons/fa';
import {FaCss3Alt} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaGitAlt} from 'react-icons/fa';
import {SiStyledcomponents} from 'react-icons/si';
import {SiAxios} from 'react-icons/si';
import {SiMui} from 'react-icons/si';
import {SiStorybook} from 'react-icons/si';
import {SiReactrouter} from 'react-icons/si';
import {FaFigma} from 'react-icons/fa';
import {SiCssmodules} from 'react-icons/si';
import {SiJest} from 'react-icons/si';
import {FaSass} from 'react-icons/fa';
import {IoLogoFirebase} from 'react-icons/io5';
import {FaInstagram, FaTelegram} from 'react-icons/fa';
import {SlSocialVkontakte} from 'react-icons/sl';

type SkillProps = {
    title: string
    icon: IconType | string
    color: string
}

export type ProjectProps = {
    title: string
    demoUrl: string
    githubUrl: string
    image: string
    description: string
    technologies: string[]
}

type FooterLink = {
    icon: IconType | string
    title: string
    color: string
    link: string
    ariaLabel: string
}

export const skills: SkillProps[] = [
    {
        title: 'React',
        color: 'rgba(22,120,248,0.77)',
        icon: FaReact
    },
    {
        title: 'Redux Toolkit',
        color: 'rgba(131,36,250,0.77)',
        icon: SiRedux
    },
    {
        title: 'TypeScript',
        color: 'rgb(17,144,246)',
        icon: TbBrandTypescript
    },
    {
        title: 'JavaScript',
        color: '#ffc435',
        icon: IoLogoJavascript
    },
    {
        title: 'HTML',
        color: 'rgba(255,98,31,0.77)',
        icon: FaHtml5
    },
    {
        title: 'CSS',
        color: 'rgba(36,111,250,0.77)',
        icon: FaCss3Alt
    },
    {
        title: 'Github',
        color: 'rgba(255,255,255,0.77)',
        icon: FaGithub
    },
    {
        title: 'Git',
        color: 'rgb(255,106,0)',
        icon: FaGitAlt
    },
    {
        title: 'Axios',
        color: 'rgba(144,10,255,0.77)',
        icon: SiAxios
    },
    {
        title: 'React Router',
        color: 'rgba(34,208,248,0.77)',
        icon: SiReactrouter
    },
    {
        title: 'Styled Components',
        color: 'rgb(246,221,94)',
        icon: SiStyledcomponents
    },
    {
        title: 'Material UI',
        color: 'rgba(75,171,250,0.77)',
        icon: SiMui
    },
    {
        title: 'SASS',
        color: 'rgba(250,94,225,0.93)',
        icon: FaSass
    },
    {
        title: 'CSS Modules',
        color: 'rgb(255,255,255)',
        icon: SiCssmodules
    },
    {
        title: 'Storybook',
        color: 'rgba(255,99,187,0.77)',
        icon: SiStorybook
    },
    {
        title: 'Jest',
        color: 'rgba(252,94,1,0.93)',
        icon: SiJest
    },
    {
        title: 'Figma',
        color: 'rgba(197,30,243,0.77)',
        icon: FaFigma
    },
    {
        title: 'Firebase',
        color: 'rgb(252,189,60)',
        icon: IoLogoFirebase
    },
]

export const projects: ProjectProps[] = [
    {
        title: 'Smart Cards',
        demoUrl: 'https://smart-cards-app.vercel.app/',
        githubUrl: 'https://github.com/talismanchik/SmartCards',
        image: smartCards,
        description: `
It is interactive and customizable platform for learning through flashcards. Users can easily create, organize, and study flashcards on various subjects, enhancing their learning experience and knowledge retention.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'RTK Query', 'TypeScript', 'SCSS Modules',
            'Radix UI', 'React Router Dom 6', 'React Hook Form','Storybook', 'REST API', 'React Toastify', 'Zod', 'Vite'
        ],
    },

    {
        title: 'Task Manager',
        demoUrl: 'https://natkhomich.github.io/task-manager/',
        githubUrl: 'https://github.com/NatKhomich/task-manager',
        image: taskManager,
        description: `
  It is a list of tasks. You can combine tasks into groups, delete/add new ones, as well as change their names. There is a filter for sorting tasks by the degree of their completion. The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'TypeScript', 'Axios', 'CSS Modules',
            'Material UI', 'React Router Dom 6', 'Formik', 'Storybook', 'REST API'
        ],
    },

    {
        title: 'Social Community',
        demoUrl: 'https://natkhomich.github.io/social-community',
        githubUrl: 'https://github.com/NatKhomich/social-community',
        image: social,
        description: `
This website project is a possible representation of a social network like VKONTAKTE or Facebook.
        `,
        technologies: [
            'React', 'Redux', 'Redux Thunk', 'TypeScript', 'CSS Modules',
            'Material UI', 'React Router Dom 5', 'Formik', 'REST API', 'Reselect'
        ],
    },

    {
        title: 'Handiwork Page',
        demoUrl: 'https://product-page-test-task.web.app/',
        githubUrl: 'https://github.com/NatKhomich/product-page-test-task',
        image: productPage,
        description: `
The app allows users to log in (including through Google services) and access the list of products. There is also the option to add items to the cart and place orders, with order details being saved in JSON format. (Test task) The project is currently in development.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'Firebase', 'TypeScript', 'CSS Modules',
            'Material UI', 'React Router Dom 6', 'Formik', 'Storybook'
        ],
    },

    {
        title: 'NFT Creative Art',
        demoUrl: 'https://natkhomich.github.io/NFT-creative-art/',
        githubUrl: 'https://github.com/NatKhomich/NFT-creative-art',
        image: nftArt,
        description: `
The site is made according to the layout from Figma. With adaptive.
        `,
        technologies: [
            'React', 'TypeScript', 'Styled Components', 'React Awesome Reveal', 'React Scroll'
        ],
    },
]

export const footerLink: FooterLink[] = [
    {
        title: 'Telegram',
        color: theme.colors.font,
        icon: FaTelegram,
        link: 'https://t.me/Natalia_Khomich',
        ariaLabel: 'telegram-link'
    },
    {
        title: 'Instagram',
        color: theme.colors.font,
        icon: FaInstagram,
        link: 'https://www.instagram.com/nat_khomich/',
        ariaLabel: 'instagram-link'
    },
    {
        title: 'Vk',
        color: theme.colors.font,
        icon: SlSocialVkontakte,
        link: 'https://vk.com/natalia_khomich',
        ariaLabel: 'vkontakte-link'
    },
]