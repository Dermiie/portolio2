import { Link } from "react-router";
import { BiRightArrowAlt } from "react-icons/bi";

function Home() {
  return <div className="flex items-center h-full px-8 ">
    <main>
    <h1>HI THERE 👋, I&apos;M </h1>
    <h1>DEMI OYENIYI</h1>
    <p>I&apos;M a frontend developer with a passion for clean code and modern design, I focus on creating seamless user interfaces that are both functional and visually compelling.</p>
    <Link to={'/about'}>Want to know more about me <span><BiRightArrowAlt /></span></Link>

    </main>
  </div>;
}

export default Home;
