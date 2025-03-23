import SocialLinks from "../ui/SocialLinks";
import NavLinks from "../ui/NavLinks";
import { NavLink } from "react-router";

function MobileNavePage({mobileNavHandler, isOpen}) {
  return (
   <div   className={`fixed top-0 right-0 w-full h-full backdrop-blur-lg shadow-lg transition-transform transform ${
    isOpen ? "translate-y-0" : "-translate-y-full"
  } md:hidden z-20`}>
     <div onClick={mobileNavHandler} className="flex flex-col items-center justify-center gap-12 h-full">
    <SocialLinks></SocialLinks>
      <ul className="flex flex-col gap-8">
        <li>
          <NavLink to={'/home'} className={({ isActive }) =>`text-lg hover:text-blue-400 active:text-blue-400 transition-all duration-300 ${isActive ? 'text-blue-400 border-b-4' : ''}`}>Home</NavLink>
        </li>
    <NavLinks></NavLinks>
      </ul> 
    </div>
   </div>
  )
}

export default MobileNavePage
