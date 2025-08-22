import type { ReactNode } from 'react';
import { NavLink } from 'react-router-dom';

const Footer = (): ReactNode => {
  return (
    <footer className="bg-black text-white">
      <div className="align-element min-h-[15vh] flex flex-col justify-center items-center">
        <p className="mr-2">-2025</p>
        <p className="mars-font text-2xl mr-4 text-center">
          AlphaSpace, by TheoXav
        </p>
        <p className="underline">resources :</p>
        <p className="text-center">
          <NavLink to="https://www.nasa.gov/" target="_blank">
            Nasa
          </NavLink>
          |
          <NavLink to="https://api.nasa.gov/" target="_blank">
            Nasa API
          </NavLink>
          |
          <NavLink to="https://www.youtube.com/@NASA" target="_blank">
            Nasa youtube channel
          </NavLink>
        </p>
        <p>
          <NavLink to="https://webbtelescope.org/" target="_blank">
            JWST
          </NavLink>
          |
          <NavLink to="https://api.jwst.nasa.gov/" target="_blank">
            JWST API
          </NavLink>
        </p>
        <p>
          <NavLink to="https://www.esa.int/" target="_blank">
            ESA
          </NavLink>
        </p>
        <p>
          <NavLink to="https://www.spacex.com/" target="_blank">
            SpaceX
          </NavLink>
          |
          <NavLink to="https://docs.spacexdata.com/" target="_blank">
            SpaceX API
          </NavLink>
        </p>
        <p>
          <NavLink to="https://www.datastrop.com/" target="_blank">
            Datastrop API
          </NavLink>
        </p>
        <p className="mb-8">
          <NavLink to="https://www.spaceflightnewsapi.net/" target="_blank">
            Snapi API
          </NavLink>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
