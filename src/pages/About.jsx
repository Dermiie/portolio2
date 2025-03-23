import Experience from "../ui/Experience";
import Technologies from "../ui/Technologies";

function About() {
  return <div className="flex flex-col gap-16">
  <div className=" flex flex-col my-4">
<header className="text-center text-lg">About Me</header>
<h3 className="text-sm tracking-tight mb-8 text-blue-400 text-center">Bringing designs to life with code and creativity! 🎨💻</h3>
<div className=" w-32 h-32 overflow-hidden mb-4 self-center rounded-sm ring ring-offset-8 ring-blue-400  ">
<img src="/Demi.jpg" alt="Demi"></img>
</div>
<p className="tracking-tight mt-4">Hey there! 👋 <br></br>I&apos;m Demi, a frontend developer passionate about crafting scalable, intuitive, and user-friendly web experiences.<br></br>
With a strong foundation in HTML, CSS, JavaScript, and modern frameworks like React, I  specialize in building responsive, high-performance applications that enhance user     engagement.<br></br>
Beyond coding, I&apos;m always exploring new technologies, best practices, and study materials to improve my skills and stay ahead in the ever-evolving web development space.
</p>
</div>
<div className="flex flex-col">
  <header  className="text-center text-lg mb-8 font-bold">Technologies</header>
  <p className=" tracking-tight mb-8">These technologies form the backbone of my expertise, meticulously honed through hands-on projects, real-world problem-solving, and an unwavering drive for growth.</p>
  <Technologies></Technologies>
</div>
<div className="flex flex-col">
  <header  className="text-center text-lg mb-8 font-bold">Experience</header>
  <p className=" tracking-tight mb-8 text-center"></p>
  <Experience></Experience>
</div>
  </div>
}

export default About;
