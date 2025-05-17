"use client";

import {
 Sheet,
 SheetContent,
 SheetTrigger,
} from "@/components/ui/sheet";
import {usePathname} from "next/navigation";
import Link from "next/link";
import {CiMenuFries} from "react-icons/ci";

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

const MobileNav = () => {
 const pathname = usePathname();
 return (
  <Sheet>
   <SheetTrigger className="flex justify-center items-center">
    <CiMenuFries className="text-3xl text-white hover:text-primary transition-colors" />
   </SheetTrigger>
   <SheetContent className="flex flex-col bg-[#0f0f0f] border-l border-gray-800">
    <div className="flex flex-col items-center mt-10 mb-12">
     <Link
      href="/"
      className="group">
      <h1 className="text-4xl font-bold text-white group-hover:text-primary transition-colors">
       CODEVORA<span className="text-primary">.</span>ID
      </h1>
     </Link>
    </div>

    <nav className="flex flex-col items-center gap-6">
     {links.map((link, index) => (
      <Link
       href={link.path}
       key={index}
       className={`text-xl capitalize transition-all duration-300 ${
        link.path === pathname
         ? "text-primary font-semibold"
         : "text-gray-300 hover:text-white"
       }`}>
       {link.name}
      </Link>
     ))}
    </nav>

    <div className="mt-auto mb-8 flex justify-center">
     <Link
      href="/partner"
      className="px-6 py-3 bg-primary text-black rounded-lg hover:bg-primary/90 font-medium transition-all transform hover:scale-105 text-center w-full max-w-xs">
      Become a Partner
     </Link>
    </div>
   </SheetContent>
  </Sheet>
 );
};

export default MobileNav;
