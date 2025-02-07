"use client";
import FlyoutLink from "./FlyoutLinks";
import Link from "next/link";
import Service from "./service";
import Logo from "./Logo";
const Header = () => {
 return (
  <header className="sticky z-10 top-0 flex p-6 justify-between bg-gradient-to-r from-primary to-secondary text-tulang px-[200px] mx-auto">
   {/*Logo*/}
   <Link href="/">
    <Logo />
   </Link>

   {/*Nav*/}
   <ul className="flex space-x-10 text-white my-auto text-base font-semibold">
    <FlyoutLink FlyoutContent={Service}>Services</FlyoutLink>
    <Link href="/">About Us</Link>
    <Link href="/">Product</Link>
    <Link href="/">Career</Link>
   </ul>

   {/*Button*/}
   <button className="rounded-lg px-3 py-1 bg-tulang ">
    <Link
     href="/login"
     className=" text-primary">
     Sign in
    </Link>
   </button>
  </header>
 );
};

export default Header;
