import { NavLink } from "react-router"
import { BiLogoLinkedin } from "react-icons/bi";
import { BiLogoGmail } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

function MainNav() {
  return (
    <div className="flex p-4 justify-between w-[60%] m-auto bg-white rounded-lg mt-4 drop-shadow-md">
      <div>DEMI</div>
      <ul className="flex gap-6">
        <li>
          <NavLink to={'/about'}>About</NavLink>
        </li>
        <li>
          <NavLink to={'/skills'}>Skills</NavLink>
        </li>
        <li>

          <NavLink to={'/project'}>Project</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}>Contact</NavLink>
        </li>
      </ul>
      <ul className="flex gap-6 items-center">
        <li  className=" hover:bg-blue-400 hover:text-white
         text-lg transition-all duration-300 p-2 rounded-full items-center flex" >
        <BiLogoLinkedin />
        </li>
        <li  className=" hover:bg-blue-400 hover:text-white
         text-lg transition-all duration-300 p-2 rounded-full items-center flex" >
        <BiLogoGmail/>
        </li>
        <li  className=" hover:bg-blue-400 hover:text-white
         text-lg transition-all duration-300 p-2 rounded-full items-center flex">
        <BiLogoGithub/>
        </li>
      </ul>
    </div>
  )
}

export default MainNav
