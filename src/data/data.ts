import taskManager from '../assets/images/proj-1.webp'
import social from '../assets/images/social.webp'
import productPage from '../assets/images/productPage.webp'

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


export type SkillType = {
    title: string
    icon: IconType | string
    color: string
}

export type ProjectType = {
    title: string
    demoUrl: string
    githubUrl: string
    image: string
    description: string
    technologies: string[]
}

export const skills: SkillType[] = [
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

export const projects: ProjectType[] = [
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
        title: 'Social Network',
        demoUrl: 'https://natkhomich.github.io/social-network/',
        githubUrl: 'https://github.com/NatKhomich/social-network',
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
        title: 'Product Page',
        demoUrl: 'https://product-page-test-task.web.app/',
        githubUrl: 'https://github.com/NatKhomich/product-page-test-task',
        image: productPage,
        description: `
Product page is a registration and authentication platform that allows users to sign up using email and password or Google services. The app also provides authorization through these methods. Users can access product listings, add items to their cart, and place orders, with the order details saved in JSON format. (test task) The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'Firebase', 'TypeScript', 'CSS Modules',
            'Material UI', 'React Router Dom 6', 'Formik', 'Storybook'
        ],
    },
]