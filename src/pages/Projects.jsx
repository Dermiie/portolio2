import { Link } from 'react-router';
import Button from '../ui/Button';
import { BiLogoGithub } from 'react-icons/bi';
import Stacks from '../ui/Stacks';
import Experience from '../ui/Experience';
import { HiArrowRight } from 'react-icons/hi';

const projects = [
  {
    title: 'CONNECTIFY',
    description:
      'This web application is built with React.js, TypeScript, Node.js, Express.js, MongoDB, and Socket.IO, a social discovery platform that allows users to create profiles, discover and connect with other users, interact through real-time messaging, and manage their connections through a clean, responsive interface.e',
    image: '/connectify.png',
    alt: 'the-wild-oasis-app',
    live: 'https://connecti-web.onrender.com/home',
    github: 'https://github.com/MojolaoluwaGafar/Connectify',
    stacks: [
      'React',
      'TailwindCSS',
      'React-router',
      'Express.js',
      'MongoDB',
      'Socket.io',
    ],
    object: 'contain',
  },
  {
    title: 'WILD OASIS',
    description:
      'This web application is built with React.js, Tailwind CSS, and modern data management tools, A resort management dashboard that allows users to manage cabins, bookings, and guests through a clean, data-driven interface',
    image: '/the-wild-oasis.png',
    alt: 'the-wild-oasis-app',
    live: 'https://the-wild-oasis-demii.vercel.app/',
    github: 'https://github.com/Dermiie/The-Wild-Oasis-Demi',
    stacks: [
      'React',
      'TailwindCSS',
      'Tanstack query',
      'React-router',
      'supabase',
    ],
    object: 'contain',
  },

  {
    title: 'FAST PIZZA APP',
    description:
      'This simple web application is built with React.js, Tailwind CSS, and React Redux for global state management. It enables customers to order pizzas, set priorities on their orders, and have them delivered efficiently.',
    image: '/Fastreactpizza.png',
    alt: 'fastreactpizza-app',
    live: 'https://demi-fast-pizza.netlify.app/',
    github: 'https://github.com/Dermiie/FastPizza-',
    stacks: ['React', 'TailwindCSS', 'React-redux', 'React-router'],
    object: 'contain',
  },

  {
    title: 'REST COUNTRIES API',
    description:
      'A country exploration web application that demonstrates foundational skills in API integration, asynchronous data handling, loading and error states, dynamic filtering, and responsive, data-driven styling.',
    image: '/rest-countries-image.webp',
    alt: 'Countries app',
    live: 'https://rest-countries-api-demi.vercel.app/',
    github: 'https://github.com/Dermiie/RestCountriesApiDemi',
    stacks: [
      'HTML',
      'CSS',
      'Javascript',
      'TailwindCSS',
      'Fetch-API',
      'React-router',
    ],
    object: 'cover',
  },
  {
    title: 'OMNIFOOD',
    description:
      'A clean landing page built with Vanilla HTML, CSS, and JavaScript for a food merchant, showcasing branding while demonstrating my strong styling skills and solid front-end foundation.',
    image: '/Omnifood.png',
    alt: 'Omnifood-app',
    live: 'https://omnifood-demi1.netlify.app/',
    github: 'https://github.com/Dermiie/omnifood',
    stacks: ['HTML', 'CSS', 'JavaScript'],
    object: 'contain',
  },
];

function Projects() {
  return (
    <div className="pt-28">
      <h3 className="mb-6 text-2xl font-bold tracking-tight md:text-4xl font-display text-primary-900 dark:text-primary-800 text-start">
        Selected <span className=" text-primary-600">Projects</span>
      </h3>

      <div className="flex flex-col gap-10 mb-24 md:px-10 md:grid md:grid-cols-2">
        {projects.map((project, i) => (
          <figure
            key={i}
            className="p-3 border-[0.6px] border-primary-900 rounded-lg"
          >
            <div className="flex items-start w-full">
              <Link to={project.live} className="w-full overflow-hidden">
                <img
                  src={project.image}
                  className="object-cover w-full transition-all duration-700 h-72 md:object-cover hover:cursor-pointer hover:scale-110"
                  alt={project.alt}
                />
              </Link>
            </div>

            <section className="flex flex-col gap-4 p-2 md:p-6">
              <h1 className="text-lg font-bold font-display dark:text-primary-700 text-primary-900">
                {project.title}
              </h1>

              <p className="tracking-tight">{project.description}</p>

              <Stacks stacks={project.stacks} />

              <div className="flex gap-2 pt-4 bottom-6">
                <Button type={'smallSolid'} to={project.live}>
                  <div className="flex items-center justify-center gap-2">
                    <p>View Projects</p>
                    <span>
                      <HiArrowRight />
                    </span>
                  </div>
                </Button>

                <Button type={'small'} to={project.github}>
                  <div className="flex items-center justify-center gap-2">
                    <p>Go to Github</p>
                    <span>
                      <BiLogoGithub />
                    </span>
                  </div>
                </Button>
              </div>
            </section>
          </figure>
        ))}
      </div>

      {/*EXPERIENCE*/}
      <div className="flex flex-col">
        <h3 className="mb-2 text-xl font-bold tracking-tight md:mb-4 md:text-2xl font-display dark:text-primary-800 text-primary-900 text-start">
          Experience
        </h3>
        <p className="tracking-tight text-center "></p>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default Projects;
