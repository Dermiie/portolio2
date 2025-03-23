import { NavLink } from "react-router"

function NavLinks() {
  return (
    <>
     <li>
          <NavLink to={'/about'} className={({ isActive }) =>`text-lg hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>About</NavLink>
        </li>
        
        <li>

          <NavLink to={'/projects'}  className={({ isActive }) =>`text-lg  hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>Project</NavLink>
        </li>
        <li>
          <NavLink to={'/contact'}   className={({ isActive }) =>`text-lg  hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>Contact</NavLink>
        </li> 
    </>
  )
}

export default NavLinks
