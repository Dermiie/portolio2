import { Link } from "react-router";
import Button from "../ui/Button";
import { BiLogoGithub } from "react-icons/bi";



function Projects() {
 

  return <div className="py-8">
    <header className="text-2xl mb-4 font-extrabold text-center">Recent Projects</header>
    <p className="mb-8">Here are some of the projects I&apos;ve worked on, showcasing my skills in front-end development, design implementation, and problem-solving. Each project reflects my passion for creating seamless and engaging user experiences. 🚀</p>
    <div className="flex flex-col gap-12">
      <figure className=" md:flex border-2 rounded-lg border-stone-400 p-3 ">
      
      
       <div className="md:w-1/2 md:items-center md:justify-center overflow-hidden flex items-start">
        <Link to={'https://demi-fast-pizza.netlify.app/'}>
        <img src="/Fastreactpizza.png" className="max-h-full h-auto object-contain md:object-cover md:grayscale hover:grayscale-0 transition-all duration-700 hover:cursor-pointer" alt="fastreactpizza-app"></img>
        </Link>
       </div>
       
      
    
       <section className="flex flex-col md:w-1/2 gap-4 p-6">
       <span className="text-center text-sm text-stone-500 tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">FAST PIZZA APP</h1>
        <p className="tracking-tight">This simple web application is built with React.js, Tailwind CSS, and React Redux for global state management. It enables customers to order pizzas, set priorities on their orders, and have them delivered efficiently.</p>
        <div className="flex gap-2">
        <Button type={'small'} to={'https://demi-fast-pizza.netlify.app/'}>Visit Project</Button>
        <Button type={'small'} to={'https://github.com/Dermiie/FastPizza-'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
       </section>
      </figure >
    
      <figure className=" md:flex border-2 rounded-lg border-stone-400 p-3 ">
      
      
       <div className="md:w-1/2 md:items-center md:justify-center overflow-hidden flex items-start">
        <Link to={'https://usepopcorn-demi.netlify.app/'}>
           <img src="/Usepopcorn.png" className="max-h-full h-auto object-contain md:object-cover md:grayscale hover:grayscale-0 transition-all duration-700 hover:cursor-pointer"alt="usepopcorn-app"></img>
        </Link>
       </div>
      
        <section  className="flex flex-col md:w-1/2  gap-4 p-6">
        <span className="text-center text-sm text-stone-500 tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">USE POPCORN</h1>
        <p className="tracking-tight">The UsePopcorn web app is a simple and minimalist platform that enables users to research movies, leave reviews, and provide ratings. It is built with React.js and styled using Vanilla css.</p>
         <div className="flex gap-2">
        <Button type={'small'} to={'https://usepopcorn-demi.netlify.app/'}>Visit Project</Button>
        <Button type={'small'} to={'https://github.com/Dermiie/usePopcorn'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
        </section>
      </figure>
    
      <figure className=" md:flex border-2 rounded-lg border-stone-400 p-3 mb-6">
      
       <div className="md:w-1/2 md:items-center md:justify-center overflow-hidden flex items-start">
        <Link to={'https://demi-worldwise.netlify.app/'}>
         <img src="/Worldwise.png" className="max-h-full h-auto object-contain md:object-cover md:grayscale hover:grayscale-0 transition-all duration-700 hover:cursor-pointer"  alt="worldwise-app"></img>
        </Link>
       </div>
        <section  className="flex flex-col md:w-1/2 gap-4 p-6">
        <span className="text-center text-sm text-stone-500 tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">WORLDWISE APP</h1>
        <p className="tracking-tight">The WorldWise app is a React-based application that enables users to track their current location using a geolocation tool. It maps out the user&apos;s address and pinpoints it on an interactive map. The app is built with React.js, styled using CSS Modules, and utilizes the Context API for state management.</p>
         <div className="flex gap-2">
        <Button type={'small'} to={'https://demi-worldwise.netlify.app/'}>Visit Project</Button>
        <Button type={'small'} to={'https://github.com/Dermiie/worldwise'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
        </section>
      </figure>
      
    </div>
   <div className="mb-3">
     <Button type={'primary'} to={'/contact'}>Contact Me</Button>
   </div>

  </div>;
}

export default Projects;
