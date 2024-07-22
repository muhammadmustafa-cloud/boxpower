import Image from 'next/image';
import React, { forwardRef } from 'react';
import logo from '../../../public/logo.png';
import Link from 'next/link';
import classNames from 'classnames';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const component = [
  {
    title: "Logout",
  },
];

const ListItem = forwardRef(function ListItem(
  { className, title, children, ...props },
  ref
) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={classNames(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});

ListItem.displayName = "ListItem";

const HeaderHome = () => {
  return (
    <div className="bg-[#141E46] flex justify-between items-center px-20 py-2">
      <div className="flex items-center">
        <Image src={logo} alt="Logo" width={100} height={50} />
      </div>
      <div>
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className='mr-6'>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            
            <NavigationMenuItem>
              <Link href="/projects" legacyBehavior passHref>
                <NavigationMenuLink>
                  Projects
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent hover:bg-transparent">Components</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-transparent">
                <ul className="w-[150px] gap-3 p-2 bg-[#141E46]">
                  {component.map((comp) => (
                    <ListItem
                      key={comp.title}
                      title={comp.title}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </div>
  );
};

export default HeaderHome;
