import Button from "../ui/Button";
import { BiLogoGithub } from "react-icons/bi";

function Projects() {
  return <div>
    <header className="text-2xl my-4 font-extrabold text-center">Recent Projects</header>
    <div className="flex flex-col gap-6">
      <figure className="border-2 rounded-lg border-stone-400 p-3 ">
        <img src="/Fastreactpizza.png" alt="fastreactpizza-app"></img>
    
       <section className="flex flex-col gap-4 p-6">
       <span className="text-center tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">DEMI FAST PIZZA APP</h1>
        <p className="tracking-tight">This simple web application is built with React.js, Tailwind CSS, and React Redux for global state management. It enables customers to order pizzas, set priorities on their orders, and have them delivered efficiently.</p>
        <div className="flex gap-2">
        <Button type={'small'}>Visit Project</Button>
        <Button type={'small'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
       </section>
      </figure >
    
      <figure className="border-2 rounded-lg border-stone-400 p-3 ">
      <img src="/Usepopcorn.png" alt="usepopcorn-app"></img>
        <section  className="flex flex-col gap-4 p-6">
        <span className="text-center tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">USE POPCORN</h1>
        <p className="tracking-tight">The UsePopcorn web app is a simple and minimalist platform that enables users to research movies, leave reviews, and provide ratings. It is built with React.js and styled using Vanilla css.</p>
         <div className="flex gap-2">
        <Button type={'small'}>Visit Project</Button>
        <Button type={'small'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
        </section>
      </figure>
    
      <figure className="border-2 rounded-lg border-stone-400 p-3 ">
        <img src="/Worldwise.png" alt="worldwise-app"></img>
        <section  className="flex flex-col gap-4 p-6">
        <span className="text-center tracking-tight">Featured Project</span>
        <h1 className="text-lg font-bold text-blue-400">WORLDWISE APP</h1>
        <p className="tracking-tight">The WorldWise app is a React-based application that enables users to track their current location using a geolocation tool. It maps out the user&apos;s address and pinpoints it on an interactive map. The app is built with React.js, styled using CSS Modules, and utilizes the Context API for state management.</p>
         <div className="flex gap-2">
        <Button type={'small'}>Visit Project</Button>
        <Button type={'small'}>
          <span>Go to github</span><BiLogoGithub />
          </Button>
       </div>
        </section>
      </figure>
      
    </div>

  </div>;
}

export default Projects;
