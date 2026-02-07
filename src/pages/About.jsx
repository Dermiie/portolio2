import Button from "../ui/Button";
import Experience from "../ui/Experience";
import Technologies from "../ui/Technologies";
import { useLocation } from "react-router-dom";

function About() {

    const location = useLocation();
  const isAboutPage = location.pathname.includes("about");

  return <div className="flex flex-col gap-16 my-4">
  <div className="flex flex-col items-center md:gap-3 md:flex-row">
    <div className="flex flex-col md:pt-6 ">
      <header className="text-center text-2xl md:w-[80%] md:mb-4 text-stone-700 font-extrabold md:text-start dark:text-stone-300">About Me</header>
      <h3 className="text-sm tracking-tight md:w-[80%] mb-8 md:mb-4 text-blue-400 md:text-start text-center">Bringing designs to     life with code and creativity! 🎨💻</h3>
      <div className="self-center w-32 h-32 mb-4 overflow-hidden rounded-full md:hidden ring ring-offset-8 ring-blue-400">
      <img src="/Demi.jpg" alt="Demi"></img>
      </div>
      <p className="tracking-tight md:w-[80%] mt-4">Hey there! 👋 <br></br>I&apos;m Demi, a frontend developer passionate about crafting scalable, intuitive, and user-friendly web experiences.<br></br>
      With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I  specialize in building responsive, high-performance applications that enhance user engagement.<br></br>
      Beyond coding, I&apos;m always exploring new technologies, best practices, and study    materials to improve my skills and stay ahead in the ever-evolving web development space.
      </p>
    </div>
    {isAboutPage && (
  <div className="self-center w-32 h-32 mb-4 overflow-hidden rounded-full md:hidden ring ring-offset-8 ring-blue-400">
    <img src="/Demi.jpg" alt="Demi" />
  </div>
)}
</div>
<div className="flex flex-col">
  <header  className="mb-8 text-lg font-bold text-center md:mb-4">Technologies</header>
  <p className="mb-8 tracking-tight ">These technologies form the backbone of my expertise, meticulously honed through hands-on projects, real-world problem-solving, and an unwavering drive for growth.</p>
  <Technologies></Technologies>
</div>
<div className="flex flex-col">
  <header  className="mb-6 text-lg font-bold text-center">Experience</header>
  <p className="tracking-tight text-center "></p>
  <Experience></Experience>
</div>
<div className="self-center mb-12 md:self-start">
  <Button to={'/projects'} type={'small'}>See what i&apos;ve been working on lately😊</Button>
</div>
  </div>
}

export default About;
