import SocialLinks from "../ui/SocialLinks";
import NavLinks from "../ui/NavLinks";

function MobileNavePage({mobileNavHandler}) {
  return (
    <div onClick={mobileNavHandler} className="flex flex-col items-center justify-center gap-12 bg-stone-200 pt-20">
    <SocialLinks></SocialLinks>
      <ul className="flex flex-col gap-8">
    <NavLinks></NavLinks>
      </ul> 
    </div>
  )
}

export default MobileNavePage
