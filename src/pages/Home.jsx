import { Link } from "react-router";
import { BiRightArrowAlt } from "react-icons/bi";
import { ReactTyped } from "react-typed";


function Home() {
  return <div className="flex flex-col justify-center h-full px-8 ">
    <div className="flex justify-center w-32 h-32 mb-8 overflow-hidden rounded-full ring ring-offset-8 ring-blue-400 md:hidden ">
    <img className="object-cover w-full" src="/Demi.jpg" alt="Demi"></img>
    </div>
    <h1 className="mb-4 text-xl font-extrabold">HI THERE 👋, I&apos;M </h1>
    <ReactTyped strings={["DEMI OYENIYI"]} typeSpeed={180} backSpeed={40}className="text-2xl font-extrabold text-blue-400 "></ReactTyped>
    <div className="mt-3">
    <p className="w-[85%] text-lg tracking-tight">I&apos;m a frontend developer with a passion for clean code and modern design, I focus on creating seamless user interfaces that are both functional and visually compelling.</p>
    <div className="mt-2 font-bold">
      <Link to={'/about'} >Want to know more about me <span><BiRightArrowAlt className="text-3xl font-bold text-blue-400"/></span></Link>
    </div>
    
    </div>

   
  </div>;
}

export default Home;
