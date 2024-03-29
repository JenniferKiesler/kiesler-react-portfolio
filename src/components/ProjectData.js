import Remembrall from '../images/remembrall-2.png'
import HouseRules from '../images/house-rules-2.png'
import TossMeABook from '../images/toss-me-a-book-2.png'
import NeuralNetwork from '../images/neural-network-api-2.png'
import TechBlog from '../images/tech-blog-2.png'
import EmployeeTracker from '../images/employee-tracker-2.png'
import EngineeringTeamProfile from '../images/engineering-team-profile-2.png'
import AnywhereForecast from '../images/anywhere-forecast-2.png'
import WorkDayScheduler from '../images/work-day-scheduler-2.png'
import ECommerce from '../images/e-commerce-2.png'

const ProjectData = [
  {
    id: 1,
    img: Remembrall,
    title: 'Remembrall Memory Game',
    description: 'This application lets a user play a Harry Potter themed memory card game.',
    tech: 'React, MongoDB/Mongoose, GraphQL, Apollo Server, Apollo Client, Node.js/Express.js, Bootstrap',
    deployed_url:'https://lit-cove-97949.herokuapp.com/',
    github: 'https://github.com/jonpfluger/remembrall-game.git'
  },
  {
    id: 2,
    img: HouseRules,
    title: 'House Rules',
    description: 'This application lets a user read posts about different types of games and write their own posts.',
    tech: 'HTML, CSS, JavaScript, Express.js, Sequelize, Handlebars, Bootstrap, MVC, Anime.js, Cloudinary',
    deployed_url:'https://house-rules.herokuapp.com/',
    github: 'https://github.com/jonpfluger/house-rules.git'
  },
  {
    id: 3,
    img: TossMeABook,
    title: 'Toss Me A Book',
    description: 'This application helps the user find a book to read in many different ways.',
    tech: 'HTML, CSS, JavaScript, Bulma, Books API, OpenLibrary API',
    deployed_url:'https://jenniferkiesler.github.io/toss-me-a-book/',
    github: 'https://github.com/JenniferKiesler/toss-me-a-book.git'
  },
  {
    id: 4,
    img: NeuralNetwork,
    title: 'Neural Network API',
    description: "An API for a social network web application where users can share their thoughts, react to friends' thoughts, and create a friend list.",
    tech: 'Express.js, MongoDB, Mongoose',
    deployed_url:'https://drive.google.com/file/d/1MRbFTvgvY1qxZLNrZG5JBLmUYCGX7dZG/view?usp=sharing',
    github: 'https://github.com/JenniferKiesler/neural-network-api.git'
  },
  {
    id: 5,
    img: TechBlog,
    title: 'Tech Blog',
    description: "An application where developers can publish their blog posts and comment on other developers' posts as well.",
    tech: 'JavaScript, Bootstrap, MySQL, Handlebars, Sequelize, Express.js',
    deployed_url:'https://jk-cms-style-tech-blog.herokuapp.com/',
    github: 'https://github.com/JenniferKiesler/cms-style-tech-blog.git'
  },
  {
    id: 6,
    img: ECommerce,
    title: 'E-Commerce Back End',
    description: "The back end for an e-commerce site. The application was reconfigured to use Sequelize to interact with a MySQL database.",
    tech: 'Express, Sequelize, MySQL',
    deployed_url:'https://drive.google.com/file/d/1fIOyzLEqBylTRxwNGvU4-KNU7u9NBgy0/view?usp=sharing',
    github: 'https://github.com/JenniferKiesler/back-end-e-commerce.git'
  },
  {
    id: 7,
    img: EmployeeTracker,
    title: 'Employee Tracker App',
    description: "A command-line application that manages a company's employee database.",
    tech: 'Node.js, Inquirer, MySQL',
    deployed_url:'https://drive.google.com/file/d/1ox3ieGe6NnBjD59jNkBYUjHzkmUwSclv/view?usp=sharing',
    github: 'https://github.com/JenniferKiesler/employee-tracker-app.git'
  },
  {
    id: 8,
    img: EngineeringTeamProfile,
    title: 'Engineering Team Profile',
    description: "A command-line application that takes in information about employees and creates a team profile.",
    tech: 'OOP, Node.js, Jest',
    deployed_url:'https://drive.google.com/file/d/1_IJZwNqhrA_7Wcx9Ipxg7PLBd0dDaQ9O/view?usp=share_link',
    github: 'https://github.com/JenniferKiesler/engineering-team-profile.git'
  },
  {
    id: 9,
    img: AnywhereForecast,
    title: 'Anywhere Forecast',
    description: "This application is for someone wanting to see the weather or weather outlook for specific cities.",
    tech: 'HTML, CSS, JavaScript, OpenWeather API',
    deployed_url:'https://jenniferkiesler.github.io/anywhere-forecast/',
    github: 'https://github.com/JenniferKiesler/anywhere-forecast.git'
  },
  {
    id: 10,
    img: WorkDayScheduler,
    title: 'Work Day Scheduler',
    description: "This application is a simple calendar that allows a user to save events for each hour of the work day.",
    tech: 'jQuery, Bootstrap, Moment.js',
    deployed_url:'https://jenniferkiesler.github.io/work-day-scheduler/',
    github: 'https://github.com/JenniferKiesler/work-day-scheduler.git'
  },
]

export default ProjectData