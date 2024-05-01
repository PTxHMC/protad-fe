'use client';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MenuItems } from '@/constants';
import NavDropdown from './NavDropdown';
import ProtadLogo from '../ProtadLogo';

const Navbar = () => {
  return (
    <header className="container sticky top-0 z-10 shadow-sm border-none">
      <div className="py-4 flex items-center justify-between h-full">
        <ProtadLogo />
        <nav className="text-background ml-auto font-semibold text-xs">
          <ul className="hidden md:flex gap-x-6">
            {MenuItems.map(item => (
              <li key={item.id}>
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <NavDropdown />
        <div className="hidden md:flex items-center font-semibold text-xs">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="bg-background rounded-sm ml-4 px-6 text-protad-primary"
          >
            <Link href="#">Join Us</Link>
          </Button>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
