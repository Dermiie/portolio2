import { NavLink } from "react-router"
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

function MainNav() {

  return (
    <div className="flex p-4 justify-between items-center w-[75%] mx-auto bg-white rounded-lg mt-4 drop-shadow-md">
       <NavLink to={'/'}>DEMI</NavLink>
      <ul className="flex gap-6">
        <li>
          <NavLink to={'/about'} className={({ isActive }) =>`text-lg hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>About</NavLink>
        </li>
        <li>
          <NavLink  className={({ isActive }) =>`text-lg  hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}to={'/skills'}>Skills</NavLink>
        </li>
        <li>

          <NavLink to={'/projects'}  className={({ isActive }) =>`text-lg  hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>Project</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}   className={({ isActive }) =>`text-lg  hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>Contact</NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-6">
        <li  className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
        <BiLogoLinkedin />
        </li>
        <li  className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white" >
        <BiLogoGmail/>
        </li>
        <li  className="flex items-center p-2 text-lg transition-all duration-300 rounded-full hover:bg-blue-400 hover:text-white">
        <BiLogoGithub/>
        </li>
      </ul>
    </div>
  )
}

export default MainNav
