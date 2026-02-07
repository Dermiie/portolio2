import { Link } from "react-router";
import { BiRightArrowAlt } from "react-icons/bi";
import { ReactTyped } from "react-typed";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";


function Home() {
  return <>
  <div className="flex flex-col justify-center h-full gap-3 px-8 overflow-scroll md:flex-row md:gap-10 md:items-center ">
    <div className="flex justify-center w-32 h-32 mb-8 overflow-hidden rounded-full md:self-center md:justify-center md:w-1/2 md:h-3/4 md:order-2 ring md:ring-2 md:ring-offset-0 ring-offset-8 ring-blue-400">
      <img className="object-cover pt-8 md:object-center md:self-center" src="/Demi.jpg" alt="Demi"></img>
    </div>
    <div className="md:w-1/2">
      <h1 className="mb-4 text-xl font-extrabold">HI THERE 👋, I&apos;M </h1>
      <ReactTyped strings={["DEMILADE OYENIYI"]} typeSpeed={180} backSpeed={40}className="text-2xl font-extrabold text-blue-400 "></ReactTyped>
      <div className="mt-3">
        <p className="w-[85%] md:w-[70%]text-lg tracking-tight">A frontend developer with an eye for clean code and user centric applications, I create seamless user interfaces that are both functional and visually compelling.</p>
        <div className="mt-2 font-bold">
          <Link to={'/about'} className="transition-all duration-300 hover:text-blue-400 dark:text-blue-400">Want to know more about me <span><BiRightArrowAlt         className="text-3xl font-bold text-blue-400"/></span></Link>
        </div>   
      </div>
    </div>

   
  </div>
  <div className="flex flex-col gap-20 pb-20">

    <About />
  <Projects />
  <Contact />
  </div>
  </>
}

export default Home;
