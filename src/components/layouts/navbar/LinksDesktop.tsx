import links from "@/utils/links"
import { NavLink } from "react-router-dom"

const LinksDesktop = () => {
  return (
    <div className="hidden lg:flex w-full flex gap-x-[5rem] justify-center items-center">
      {links.map((link) => (
        <NavLink 
          key={link.label} 
          to={link.ref} 
          className={({isActive}) => `capitalize tracking-wide ${isActive ? 'underline text-xl' : ''}`}
        >
          {link.label}
        </NavLink>
      ))}
    </div>
  )
}

export default LinksDesktop