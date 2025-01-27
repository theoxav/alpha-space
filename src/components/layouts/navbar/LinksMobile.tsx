import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Link, links } from "@/utils/links";
import { AlignLeft } from "lucide-react";
import { NavLink } from "react-router-dom";

const LinksMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="lg:hidden">
        <Button variant={"outline"} size={"icon"}>
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:hidden" sideOffset={10} align="start">
        {links.map((link) => {
          const { ref, label } = link as Link;
          return (
            <DropdownMenuItem key={label}>
              <NavLink
                to={ref}
                className={({ isActive }) =>
                  `font-light capitalize tracking-wide ${
                    isActive ? "font-bold" : ""
                  }`
                }
              >
                {label}
              </NavLink>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksMobile;
