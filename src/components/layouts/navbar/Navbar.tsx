import LinksDesktop from "@/components/layouts/navbar/LinksDesktop";
import LinksMobile from "@/components/layouts/navbar/LinksMobile";

const Navbar = () => {
  return (
    <nav className="z-10 bg-black py-5">
      <div className="align-element">
        <LinksMobile />
        <LinksDesktop />
      </div>
    </nav>
  );
};

export default Navbar;
