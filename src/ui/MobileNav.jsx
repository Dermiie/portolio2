import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { BiXCircle } from "react-icons/bi";
import MobileNavePage from "../pages/MobileNavePage";
import { NavLink } from "react-router";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  function mobileNavHandler () {
    setIsOpen(!isOpen);
  }

  return (
  <div>
      <div className="flex p-4 justify-between items-center w-[90%] m-auto bg-white rounded-lg mt-4 drop-shadow-md dark:bg-stone-800 dark:text-stone-300">
      <NavLink to={'/'}>DEMI</NavLink>
      <div className="transition-all duration-300" onClick={mobileNavHandler}>
      {!isOpen ? <BiMenuAltRight className="text-2xl" /> :
      <BiXCircle className="text-2xl" />}
      </div>
    </div>
      {isOpen && <MobileNavePage isOpen={isOpen} setIsOpen={setIsOpen} mobileNavHandler={mobileNavHandler}></MobileNavePage>}
  </div>
  )
 }

export default MobileNav
