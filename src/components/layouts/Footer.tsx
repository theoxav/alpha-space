import { ReactNode } from "react";
import { Link } from "react-router-dom";

const Footer = (): ReactNode => {
  return (
    <footer className="bg-black text-white">
      <div className="align-element flex min-h-[15vh] flex-col items-center justify-center">
        <p className="my-2">-2025-</p>
        <p className="mars-font my-4 text-center text-2xl">
          alphaSpace, by TheoXav
        </p>
        <p className="underline">resources:</p>
        <p className="text-center">
          <Link to="https://www.nasa.gov/" target="_blank">
            Nasa {""}
          </Link>
          |{" "}
          <Link to="https://api.nasa.gov/" target="_blank">
            Nasa API{" "}
          </Link>
          |{" "}
          <Link to="https://www.youtube.com/@NASA/videos" target="_blank">
            Nasa youtube channel
          </Link>
        </p>
        <p>
          <Link to="https://webbtelescope.org/home" target="_blank">
            JWST{" "}
          </Link>
          |{" "}
          <Link to="https://jwstapi.com" target="_blank">
            JWST API
          </Link>
        </p>
        <p>
          <Link to="https://www.esa.int/" target="_blank">
            ESA
          </Link>
        </p>
        <p>
          <Link to="https://www.spacex.com/" target="_blank">
            SpaceX{" "}
          </Link>
          |{" "}
          <Link to="https://api.spacexdata.com/v3/" target="_blank">
            SpaceX API
          </Link>
        </p>
        <p>
          <Link to="https://www.datastro.eu/pages/home/" target="_blank">
            Datastro API
          </Link>
        </p>
        <p className="mb-8">
          <Link to="https://www.spaceflightnewsapi.net/" target="_blank">
            SNAPI API
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
