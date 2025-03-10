import MainNav from "./MainNav";
import MobileNav from "./MobileNav";

function Header() {
  return <>
    <div className="block md:hidden ">
     <MobileNav></MobileNav>
    </div>
    <div className="hidden md:block">
      <MainNav></MainNav>
    </div>
  </>;
}


export default Header;