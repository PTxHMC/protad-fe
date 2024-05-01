import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { MenuItems } from '@/constants';
import { HamburgerMenuIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import React from 'react';

const NavDropdown = () => {
  return (
    <div className="flex md:hidden text-xs">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Button variant="outline" className="rounded-lg" asChild>
            <HamburgerMenuIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="mr-4">
          {MenuItems.map(item => (
            <DropdownMenuItem key={item.id}>
              <Link href={item.path}>{item.title}</Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavDropdown;
