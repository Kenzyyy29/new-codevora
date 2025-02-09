"use client";
import Link from "next/link";
import Logo from "./Logo";
const Header = () => {
 return (
  <header className="sticky z-10 top-0 flex p-4 justify-between bg-hitam bg-opacity-95 backdrop-blur-md text-tulang px-[40px] mx-auto border-b border-gray-500">
   <div className="flex flex-row gap-10">
    {/*Logo*/}
    <Link href="/">
     <div className="flex flex-row gap-2">
      <Logo />
      <h1 className="text-2xl font-bold text-tulang my-auto">
       CODEVORA<span className="text-primary">.</span>ID
      </h1>
     </div>
    </Link>

    {/*Nav*/}
    <ul className="flex space-x-10 text-white my-auto text-base font-semibold">
     <Link href="/services">Services</Link>
     <Link href="/about">About Us</Link>
     <Link href="/">Product</Link>
     <Link href="/">Career</Link>
    </ul>
   </div>

   {/*Button*/}
   <button className="rounded-lg px-3 py-1 bg-tulang hover:bg-[#dedddd]">
    <Link
     href="/login"
     className=" text-hitam">
     Become a partner?
    </Link>
   </button>
  </header>
 );
};

export default Header;
