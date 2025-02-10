import Link from "next/link";

//components
import Logo from "./Logo";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

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
    <ul className="hidden lg:flex space-x-10 text-white my-auto text-base font-semibold">
     <Nav />
    </ul>
   </div>

   {/*Mobile Nav*/}
   <div className="lg:hidden">
    <MobileNav />
   </div>

   {/*Button*/}
   <button className="hidden lg:flex rounded-lg px-3 py-1 bg-tulang hover:bg-[#dedddd]">
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
