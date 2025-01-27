import { Link, links } from '@/utils/links';
import { NavLink } from 'react-router-dom';

const LinksDesktop = () => {
  return (
    <div className="hidden w-full lg:flex gap-x-[5rem] justify-center items-center">
      {links.map((link) => {
        const { ref, label } = link as Link;
        return (
          <NavLink
            to={ref}
            className={({ isActive }) =>
              `capitalize tracking-wide ${isActive ? 'underline text-xl' : ''}`
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
