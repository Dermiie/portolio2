import { BiLogoGithub, BiLogoGmail, BiLogoLinkedin } from "react-icons/bi"

function SocialLinks() {

  
  return (
  <ul className="flex items-center gap-6">
          <li  className="flex items-center p-2 text-lg  transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
          <BiLogoLinkedin />
          </li>
          <li  className="flex items-center p-2 text-lg  transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
          <BiLogoGmail/>
          </li>
          <li  className="flex items-center p-2 text-lg  transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white">
          <BiLogoGithub/>
          </li>
        </ul>
        
  )
}

export default SocialLinks
