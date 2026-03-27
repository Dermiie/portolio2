import { NavLink } from 'react-router';
import NavLinks from './NavLinks';
import ThemeToggle from './ThemeToggle';

function MainNav() {
  return (
    <div className="fixed z-10 w-full py-4 shadow-md dark:bg-stone-800 dark:text-stone-300 backdrop-blur-md">
      <div className="flex items-center justify-between w-[75%] mx-auto">
        <NavLink to={'/'}>DEMI</NavLink>
        <ul className="flex items-center gap-6">
          <NavLinks></NavLinks>
          <ThemeToggle></ThemeToggle>
          {/* <SocialLinks></SocialLinks> */}
        </ul>
      </div>
    </div>
  );
}

export default MainNav;
