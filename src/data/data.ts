import taskManager from '../assets/images/proj-1.webp'
import social from '../assets/images/social.webp'
import productPage from '../assets/images/productPage.webp'

export type SkillType = {
    title: string
    iconId: string
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
        iconId: 'react'
    },
    {
        title: 'Redux Toolkit',
        iconId: 'redux'
    },
    {
        title: 'TypeScript',
        iconId: 'ts'
    },
    {
        title: 'JavaScript',
        iconId: 'js'
    },
    {
        title: 'HTML',
        iconId: 'html'
    },
    {
        title: 'CSS',
        iconId: 'css'
    },
    {
        title: 'Github',
        iconId: 'github'
    },
    {
        title: 'Git',
        iconId: 'git'
    },
    {
        title: 'Styled Components',
        iconId: 'styledComponents'
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
        title: 'Product-page',
        demoUrl: 'https://product-page-test-task.web.app/',
        githubUrl: 'https://github.com/NatKhomich/product-page-test-task',
        image: productPage,
        description: `
Product-page-test-task is a registration and authentication platform that allows users to sign up using email/password or Google services. The app also provides authorization through these methods. Users can access product listings, add items to their cart, and place orders, with the order details saved in JSON format. (test task) The project is in a development project.
        `,
        technologies: [
            'React', 'Redux Toolkit', 'Firebase' , 'TypeScript', 'CSS Modules',
            'Material UI', 'React Router Dom 6', 'Formik', 'Storybook'
        ],
    },
]