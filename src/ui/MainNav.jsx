import { NavLink } from "react-router"
import SocialLinks from "./SocialLinks";
import NavLinks from "./NavLinks";

function MainNav() {

  return (
    <div className="flex p-4 justify-between items-center w-[75%] mx-auto bg-white rounded-lg mt-4 drop-shadow-md dark:bg-stone-800 dark:text-stone-300">
       <NavLink to={'/'}>DEMI</NavLink>
      <ul className="flex gap-6">
        <NavLinks></NavLinks>
      </ul>
      <SocialLinks></SocialLinks>
   
    </div>
  )
}

export default MainNav
