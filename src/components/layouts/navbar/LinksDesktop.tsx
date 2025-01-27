import { Link, links } from "@/utils/links";
import { NavLink } from "react-router-dom";

const LinksDesktop = () => {
  return (
    <div className="w-fulllg:flex hidden items-center justify-center gap-x-[5rem] text-white">
      {links.map((link) => {
        const { ref, label } = link as Link;
        return (
          <NavLink
            key={label}
            to={ref}
            className={({ isActive }) =>
              `capitalize tracking-wide ${isActive ? "text-xl underline" : ""}`
            }
          >
            {label}
          </NavLink>
        );
      })}
    </div>
  );
};

export default LinksDesktop;
