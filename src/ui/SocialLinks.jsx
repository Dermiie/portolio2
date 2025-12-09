import { BiLogoGithub, BiLogoInstagram, BiLogoLinkedin } from "react-icons/bi"
import { Link } from "react-router"
import ThemeToggle from "./ThemeToggle"

function SocialLinks() {

  
  return (
  <ul className="flex items-center gap-6">
          <Link to={'https://www.linkedin.com/in/demilade-oyeniyi-820746246'} className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
          <BiLogoLinkedin />
          </Link>
          <Link to={'https://www.instagram.com/dermiie/?hl=en'} className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
          <BiLogoInstagram/>
          </Link>
          <Link to={'https://github.com/Dermiie'}  className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white">
          <BiLogoGithub/>
          </Link>
          <ThemeToggle></ThemeToggle>

        </ul>
        
  )
}

export default SocialLinks
