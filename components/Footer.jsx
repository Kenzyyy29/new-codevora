"use client";

import {FaDiscord, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";
import Link from "next/link";

const socialLinks = [
 {
  path: "https://www.linkedin.com/",
  icon: <FaLinkedinIn className="text-xl" />,
  name: "LinkedIn",
 },
 {
  path: "https://discord.gg/wAqeHbCb",
  icon: <FaDiscord className="text-xl" />,
  name: "Discord",
 },
 {
  path: "https://www.instagram.com/codevoraid",
  icon: <FaInstagram className="text-xl" />,
  name: "Instagram",
 },
 {
  path: "https://x.com/codevoraid",
  icon: <FaXTwitter className="text-xl" />,
  name: "Twitter",
 },
];

const services = {
 title: "OUR SERVICES",
 items: [
  {name: "Website Development", path: "/services"},
  {name: "Mobile App Development", path: "/services"},
  {name: "E-Commerce Solutions", path: "/services"},
  {name: "SEO and Digital Marketing", path: "/services"},
  {name: "Maintenance and Support", path: "/services"},
  {name: "IT Consulting", path: "/services"},
 ],
};

const company = {
 title: "COMPANY",
 items: [
  {name: "About Us", path: "/about"},
  {name: "Products", path: "/products"},
  {name: "Career", path: "/career"},
  {name: "Contact Us", path: "/contact"},
 ],
};

const currentYear = new Date().getFullYear();

export default function Footer() {
 return (
  <footer className="bg-black text-gray-300 border-t border-gray-800">
   <div className="container mx-auto px-4 py-12 lg:py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
     {/* Brand Info */}
     <div className="flex flex-col items-center md:items-start">
      <Link
       href="/"
       className="mb-6">
       <img
        src="/Logos/1.png"
        className="h-16 w-auto"
        alt="Codevora Logo"
       />
      </Link>
      <p className="text-sm text-center md:text-left max-w-xs">
       The best digital solution for all of your business needs
      </p>
     </div>

     {/* Address */}
     <div className="flex flex-col">
      <h3 className="text-lg font-bold text-white mb-4">OUR ADDRESS</h3>
      <address className="text-sm not-italic">
       Jl. Arthamulya 01, No. 29, Kecamatan Cibereum,
       <br />
       Kelurahan Kotabaru, Kota Tasikmalaya,
       <br />
       Jawa Barat, Indonesia 46196.
      </address>
     </div>

     {/* Services */}
     <div className="flex flex-col">
      <h3 className="text-lg font-bold text-white mb-4">{services.title}</h3>
      <ul className="space-y-2">
       {services.items.map((item, index) => (
        <li key={index}>
         <Link
          href={item.path}
          className="text-sm hover:text-primary transition-colors">
          {item.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>

     {/* Company */}
     <div className="flex flex-col">
      <h3 className="text-lg font-bold text-white mb-4">{company.title}</h3>
      <ul className="space-y-2">
       {company.items.map((item, index) => (
        <li key={index}>
         <Link
          href={item.path}
          className="text-sm hover:text-primary transition-colors">
          {item.name}
         </Link>
        </li>
       ))}
      </ul>
     </div>
    </div>

    {/* Social Links */}
    <div className="mt-12 pt-8 border-t border-gray-800">
     <h3 className="text-lg font-bold text-white mb-4 text-center md:text-left">
      FOLLOW US
     </h3>
     <div className="flex justify-center md:justify-start gap-4">
      {socialLinks.map((link, index) => (
       <Link
        key={index}
        href={link.path}
        aria-label={link.name}
        className="p-3 bg-gray-800 rounded-full hover:bg-primary hover:text-black transition-all">
        {link.icon}
       </Link>
      ))}
     </div>
    </div>

    {/* Copyright */}
    <div className="mt-8 text-center text-sm text-gray-500">
     © {currentYear} Codevora.id. All rights reserved.
    </div>
   </div>
  </footer>
 );
}
