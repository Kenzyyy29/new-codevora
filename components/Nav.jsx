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
  <nav className="flex gap-8 items-center">
   {links.map((link, index) => {
    return (
     <Link
      href={link.path}
      key={index}
      className={`relative group font-medium text-white hover:text-primary transition-colors duration-300 ${
       link.path === pathname ? "text-primary" : ""
      }`}>
      {link.name}
      <span
       className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full ${
        link.path === pathname ? "w-full" : ""
       }`}></span>
     </Link>
    );
   })}
  </nav>
 );
};

export default Nav;
