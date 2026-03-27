import { Link } from 'react-router';
import Button from '../ui/Button';
import { BiLogoGithub } from 'react-icons/bi';
import Stacks from '../ui/Stacks';
import Experience from '../ui/Experience';
import { HiArrowRight } from 'react-icons/hi';

const projects = [
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
      'The REST Countries API web application is a project that allows users to explore detailed information about countries around the world using data provided by the REST Countries API.',
    image: '/rest-countries-image.webp',
    alt: 'usepopcorn-app',
    live: 'https://demi-rest-countries-api.vercel.app/',
    github: 'https://github.com/Dermiie/RestCountriesApi',
    stacks: ['React', 'TailwindCSS', 'Fetch-API', 'React-router'],
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
      <h3 className="mb-6 text-4xl font-bold tracking-tight font-display text-primary-900 text-start">
        Selected <span className=" text-primary-600">Projects</span>
      </h3>

      <div className="grid grid-cols-2 gap-10 px-10 mb-24">
        {projects.map((project, i) => (
          <figure
            key={i}
            className="p-3 border-[0.6px] border-primary-50 rounded-lg"
          >
            <div className="flex items-start w-full">
              <Link to={project.live} className="w-full overflow-hidden">
                <img
                  src={project.image}
                  className={`transition-all duration-700 h-72 md:object-cover md:grayscale hover:grayscale-0 hover:cursor-pointer hover:scale-110 ${
                    project.object === 'contain'
                      ? 'object-contain'
                      : 'object-cover w-full'
                  }`}
                  alt={project.alt}
                />
              </Link>
            </div>

            <section className="flex flex-col gap-4 p-6">
              <h1 className="text-lg font-bold font-display text-primary-900">
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
        <h3 className="mb-4 text-2xl font-bold tracking-tight font-display text-primary-900 text-start">
          Experience
        </h3>
        <p className="tracking-tight text-center "></p>
        <Experience></Experience>
      </div>
    </div>
  );
}

export default Projects;
