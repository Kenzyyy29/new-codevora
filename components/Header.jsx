import Link from "next/link";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import Logo from "./Logo";

const Header = () => {
 return (
  <header className="sticky top-0 z-50 w-full bg-black/90 backdrop-blur-md border-b border-gray-800 px-4 sm:px-6 lg:px-8 py-4">
   <div className="flex items-center justify-between max-w-7xl mx-auto">
    {/* Logo */}
    <Link
     href="/"
     className="flex items-center gap-3 group">
     <Logo />
     <h1 className="text-2xl font-bold text-white group-hover:text-primary transition-colors">
      CODEVORA<span className="text-primary">.</span>ID
     </h1>
    </Link>

    {/* Desktop Navigation */}
    <div className="hidden lg:flex items-center gap-10">
     <Nav />
     <Link
      href="/partner"
      className="px-4 py-2 bg-primary text-black rounded-lg hover:bg-primary/90 font-medium transition-all transform hover:scale-105">
      Become a Partner
     </Link>
    </div>

    {/* Mobile Navigation */}
    <div className="lg:hidden">
     <MobileNav />
    </div>
   </div>
  </header>
 );
};

export default Header;
