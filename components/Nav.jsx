"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const links = [
 {
  name: "Services",
  path: "/services",
 },
 {
  name: "About Us",
  path: "/about",
 },
 {
  name: "Career",
  path: "/career",
 },
];

const Nav = () => {
 const pathname = usePathname();
 return (
  <nav className="flex gap-8">
   {links.map((link, index) => {
    return (
     <Link
      href={link.path}
      key={index}
      className={`${
       link.path === pathname && "text-primary border-b-2 border-primary"
      } font-medium hover:text-primary transition-all
      }`}>{link.name}</Link>
    );
   })}
  </nav>
 );
};

export default Nav;
