import { Link } from "react-router";
import { BiRightArrowAlt } from "react-icons/bi";
import { ReactTyped } from "react-typed";


function Home() {
  return <div className="flex flex-col md:flex-row gap-3 md:gap-10 pt-24 h-full px-8 ">
    <div className="flex md:w-auto md:self-center md:justify-center md:rounded-lg md:h-72 md:order-2 justify-center w-32 h-32 mb-8 overflow-hidden rounded-full ring md:ring-2 md:ring-offset-0 ring-offset-8 ring-blue-400">
      <img className="object-cover md:object-center" src="/Demi.jpg" alt="Demi"></img>
    </div>
    <div className="md:w-1/2">
      <h1 className="mb-4 text-xl font-extrabold">HI THERE 👋, I&apos;M </h1>
      <ReactTyped strings={["DEMI OYENIYI"]} typeSpeed={180} backSpeed={40}className="text-2xl font-extrabold text-blue-400 "></ReactTyped>
      <div className="mt-3">
        <p className="w-[85%] md:w-[70%]text-lg tracking-tight">I&apos;m a frontend developer with a passion for clean code and modern design, I focus on creating seamless user interfaces that are both functional and visually compelling.</p>
        <div className="mt-2 font-bold">
          <Link to={'/about'} >Want to know more about me <span><BiRightArrowAlt         className="text-3xl font-bold text-blue-400"/></span></Link>
        </div>   
      </div>
    </div>

   
  </div>;
}

export default Home;
