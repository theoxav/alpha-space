import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import links from '@/utils/links';
import { AlignLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const LinksMobile = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="block lg:hidden">
        <Button variant="outline">
          <AlignLeft />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="lg:hidden" align="start" sideOffset={10}>
        {links.map((link) => (
          <DropdownMenuItem key={link.label}>
            <NavLink
              to={link.ref}
              className={({ isActive }) =>
                `capitalize tracking-wide font-light ${
                  isActive ? 'text-xl text-primary' : ''
                }`
              }
            >
              {link.label}
            </NavLink>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksMobile;
