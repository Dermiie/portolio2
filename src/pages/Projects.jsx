import { Link } from "react-router";
import Button from "../ui/Button";
import { BiLogoGithub } from "react-icons/bi";
import Stacks from "../ui/Stacks";



function Projects() {
 

  return <div className="py-8">
    <header className="mb-4 text-2xl font-extrabold text-center">Recent Projects</header>
    <p className="mb-8">Here are some of the projects I&apos;ve worked on, showcasing my skills in front-end development, design implementation, and problem-solving. Each project reflects my passion for creating seamless and engaging user experiences. 🚀</p>
    <div className="flex flex-col gap-12 mb-8">
      <figure className="p-3 border-2 rounded-lg md:flex border-stone-400">
      
      
       <div className="flex items-start overflow-hidden md:w-1/2 md:items-center md:justify-center">
        <Link to={'https://demi-fast-pizza.netlify.app/'}>
        <img src="/Fastreactpizza.png" className="object-contain h-auto max-h-full transition-all duration-700 md:object-cover md:grayscale hover:grayscale-0 hover:cursor-pointer" alt="fastreactpizza-app"></img>
        </Link>
       </div>
       
      
    
       <section className="flex flex-col gap-4 p-6 md:w-1/2">
        <span className="text-sm tracking-tight text-center text-stone-500">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">FAST PIZZA APP</h1>
        <p className="tracking-tight">This simple web application is built with React.js, Tailwind CSS, and React Redux for global state management. It enables customers to order pizzas, set priorities on their orders, and have them delivered efficiently.</p>
        
        <Stacks stacks={['React', 'TailwindCSS', 'React-redux', 'React-router']}></Stacks>
        
        <div className="flex gap-2">
          <Button type={'small'} to={'https://demi-fast-pizza.netlify.app/'}>Visit Project</Button>
          <Button type={'small'} to={'https://github.com/Dermiie/FastPizza-'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
       </section>
      </figure >
    
      <figure className="p-3 border-2 rounded-lg md:flex border-stone-400">
      
      
       <div className="flex items-start overflow-hidden md:w-1/2 md:items-center md:justify-center">
        <Link to={'https://demi-rest-countries-api.vercel.app/'}>
           <img src="/rest-countries-image.webp" className="object-contain h-auto max-h-full transition-all duration-700 md:object-cover md:grayscale hover:grayscale-0 hover:cursor-pointer"alt="usepopcorn-app"></img>
        </Link>
       </div>
      
        <section  className="flex flex-col gap-4 p-6 md:w-1/2">
        <span className="text-sm tracking-tight text-center text-stone-500">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">REST COUNTRIES API</h1>
        <p className="tracking-tight">The REST Countries API web application is a project that allows users to explore detailed information about countries around the world using data provided by the REST Countries API.</p>

        <Stacks stacks={['React', 'TailwindCSS', 'Context-API', 'Fetch-API', 'React-router']}></Stacks>
         <div className="flex gap-2">
        <Button type={'small'} to={'https://demi-rest-countries-api.vercel.app/'}>Visit Project</Button>
        <Button type={'small'} to={'https://github.com/Dermiie/RestCountriesApi'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
        </section>
      </figure>

       <figure className="p-3 border-2 rounded-lg md:flex border-stone-400">
      
      
       <div className="flex items-start overflow-hidden md:w-1/2 md:items-center md:justify-center">
        <Link to={'https://omnifood-demi1.netlify.app/'}>
        <img src="/Omnifood.png" className="object-contain h-auto max-h-full transition-all duration-700 md:object-cover md:grayscale hover:grayscale-0 hover:cursor-pointer" alt="Omnifood-app"></img>
        </Link>
       </div>
       
      
    
       <section className="flex flex-col gap-4 p-6 md:w-1/2">
       <span className="text-sm tracking-tight text-center text-stone-500">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">OMNIFOOD</h1>
        <p className="tracking-tight">A clean landing page built with Vanilla HTML, CSS, and JavaScript for a food merchant, showcasing branding while demonstrating my strong styling skills and solid front-end foundation.</p>
        <Stacks stacks={['HTML', 'CSS', 'JavaScript']}></Stacks>
        <div className="flex gap-2">
        <Button type={'small'} to={'https://omnifood-demi1.netlify.app/'}>Visit Project</Button>
        <Button type={'small'} to={'https://github.com/Dermiie/omnifood'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
       </section>
      </figure >
      
    </div>
   <div className="mb-3">
     <Button type={'primary'} to={'/contact'}>Contact Me</Button>
   </div>

  </div>;
}

export default Projects;
