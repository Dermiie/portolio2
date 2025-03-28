import Button from "../ui/Button";
import Experience from "../ui/Experience";
import Technologies from "../ui/Technologies";

function About() {
  return <div className="flex flex-col gap-16 my-4">
  <div className=" flex flex-col items-center md:gap-3 md:flex-row">
    <div className="md:pt-6 flex flex-col ">
      <header className="text-center text-2xl md:w-[80%] md:mb-4 text-stone-700 font-extrabold md:text-start">About Me</header>
      <h3 className="text-sm tracking-tight md:w-[80%] mb-8 md:mb-4 text-blue-400 md:text-start text-center">Bringing designs to     life with code and creativity! 🎨💻</h3>
      <div className=" w-32 h-32 md:hidden overflow-hidden mb-4 self-center rounded-full ring ring-offset-8 ring-blue-400">
      <img src="/Demi.jpg" alt="Demi"></img>
      </div>
      <p className="tracking-tight md:w-[80%] mt-4">Hey there! 👋 <br></br>I&apos;m Demi, a frontend developer passionate about crafting scalable, intuitive, and user-friendly web experiences.<br></br>
      With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I  specialize in building responsive, high-performance applications that enhance user engagement.<br></br>
      Beyond coding, I&apos;m always exploring new technologies, best practices, and study    materials to improve my skills and stay ahead in the ever-evolving web development space.
      </p>
    </div>
    <div className="hidden md:overflow-hidden max-h-full h-auto object-contain  md:items-start md:pt-6 md:flex">
      <img className="h-auto " src="/Demi.jpg" alt="Demi"></img> 
    </div>
</div>
<div className="flex flex-col">
  <header  className="text-center text-lg mb-8 md:mb-4 font-bold">Technologies</header>
  <p className=" tracking-tight mb-8">These technologies form the backbone of my expertise, meticulously honed through hands-on projects, real-world problem-solving, and an unwavering drive for growth.</p>
  <Technologies></Technologies>
</div>
<div className="flex flex-col">
  <header  className="text-center text-lg mb-6 font-bold">Experience</header>
  <p className=" tracking-tight text-center"></p>
  <Experience></Experience>
</div>
<div className="mb-12 self-center md:self-start">
  <Button to={'/projects'} type={'small'}>See what i&apos;ve been working on lately😊</Button>
</div>
  </div>
}

export default About;
