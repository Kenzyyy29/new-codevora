"use client";

import {
 Sheet,
 SheetContent,
 SheetTrigger,
 SheetTitle,
} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";
import Logo from "./Logo";

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
  name: "Product",
  path: "/product",
 },
 {
  name: "Career",
  path: "/career",
 },
];

const MobileNav = () => {
 const pathname = usePathname();
 return (
  <Sheet>
   <SheetTrigger className="flex justify-center items-center">
    <CiMenuFries className="text-[32px] text-accent" />
   </SheetTrigger>
   <SheetContent className="flex flex-col mx-auto">
    <SheetTitle className="hidden" />
    {/*Logo*/}
    <div className="flex flex-col mx-auto mt-20 mb-24 text-2xl">
     <Link href="/">
      <h1 className="text-4xl font-bold">
       CODEVORA<span className="text-primary">.</span>ID
      </h1>
     </Link>
    </div>
    {/*nav*/}
    <nav className="flex flex-col justify-center items-center gap-8">
     {links.map((link, index) => {
      return (
       <Link
        href={link.path}
        key={index}
        className={`${
         link.path === pathname && "text-primary border-b-2 border-primary"
        } capitalize text-xl hover:text-primary transition-all`}>
        {link.name}
       </Link>
      );
     })}
    </nav>
    {/*Button*/}
    <button className="flex rounded-lg px-3 py-2 bg-tulang hover:bg-[#dedddd] mx-auto">
     <Link
      href="/partner"
      className=" text-hitam text-xl font-medium">
      Become a partner?
     </Link>
    </button>
   </SheetContent>
  </Sheet>
 );
};

export default MobileNav;
