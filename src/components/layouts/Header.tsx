import { Link } from 'react-router-dom';
import spaceImg from '../../assets/imgs/rocket.svg';
import type { ReactNode } from 'react';

const Header = (): ReactNode => {
  return (
    <header className="test bg-black">
      <div className="align-element text-white grid grid-cols-2 md:grid-cols-3 p-2">
        <Link to="/" className="justify-self-start self-center">
          <h1 className="mars-font text-lg pt-2 tracking-[0.8rem]">
            AlphaSpace
          </h1>
        </Link>
        <Link
          to="/"
          className="justify-self-end md:justify-self-center self-center"
        >
          <img
            src={spaceImg}
            alt="AlphaSpace logo"
            className="w-12 h-12 object-cover"
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
