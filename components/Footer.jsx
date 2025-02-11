"use client";

import {FaDiscord, FaLinkedinIn, FaInstagram} from "react-icons/fa";
import {FaXTwitter} from "react-icons/fa6";

const Icon = {
 items: [
  {
   path: "https://www.linkedin.com/",
   icon: <FaLinkedinIn />,
  },
  {
   path: "https://discord.gg/wAqeHbCb",
   icon: <FaDiscord />,
  },
  {
   path:
    "https://www.instagram.com/codevoraid?igsh=MTcya25wNmhkb2NrNA%3D%3D&utm_source=qr",
   icon: <FaInstagram />,
  },
  {
   path: "https://x.com/codevoraid",
   icon: <FaXTwitter />,
  },
 ],
};

const services = {
 title: "OUR SERVICES",
 items: [
  {
   name: "Website Development",
   path: "/services",
  },
  {
   name: "Mobile App Development",
   path: "/services",
  },
  {
   name: "E-Commerce Solutions",
   path: "/services",
  },
  {
   name: "SEO and Digital Marketing",
   path: "/services",
  },
  {
   name: "Maintenance and Support",
   path: "/services",
  },
  {
   name: "IT Consulting",
   path: "/services",
  },
 ],
};

const profile = {
 title: "COMPANY PROFILE",
 items: [
  {
   name: "About Us",
   path: "/About",
  },
  {
   name: "Product",
   path: "/product",
  },
  {
   name: "Career",
   path: "/career",
  },
  {
   name: "Contact Us",
   path: "/contact",
  },
 ],
};


import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function FooterWithSocialLinks() {
 return (
  <footer className="flex flex-wrap justify-center py-10 px-10 bg-hitam border-t border-gray-500 shadow-md text-tulang">
   {/* Section 1 */}
   <div className="flex flex-col justify-start py-5 px-2 lg:basis-[20%] md:basis-[35%] basis-[100%] items-center">
    {/* Gambar */}
    <div className="flex flex-col gap-4 justify-center">
     <img
      src="/Logos/1.png"
      className="w-[70%] mx-auto"
      alt="Logo Footer"
     />
    </div>
    <div className="flex flex-row text-center max-w-[200px]">
     <p className="lg:text-sm text-xs font-thin pt-5 2xl:ml-2 lg:ml-2 ml-3">
      THE BEST DIGITAL SOLUTION FOR ALL OF YOUR OWN BUSSINESS NEEDS
     </p>
    </div>
    {/* Deskripsi */}
   </div>

   {/* Section 2 */}
   <div className="flex flex-col justify-start lg:gap-7 gap-5 py-5 px-5 lg:basis-[35%] md:basis-[65%] basis-[100%] ">
    {/* #1 Alamat Kami */}
    <div className=" flex flex-col gap-1">
     <div className="flex flex-row justify-start">
      <h1 className="text-lg font-bold text-start">OUR ADDRESS</h1>
     </div>
     <div className="flex flex-row justify-start">
      <p className="text-sm font-light text-start">
       Jl. Arthamulya 01, No. 29, Kecamatan Cibereum, Kelurahan Kotabaru, Kota
       Tasikmalaya, Jawa Barat, Indonesia 46196.
      </p>
     </div>
    </div>
    {/* #2 Follow Us */}
    <div className=" flex flex-col gap-3">
     <div className="flex flex-row justify-start">
      <h1 className="text-lg font-bold text-start">FOLLOW US</h1>
     </div>
     <ul className="flex flex-row gap-5 justify-start">
      {Icon.items.map((item, index) => (
       <Link
        key={index}
        href={item.path}>
        <li className=" inline-block rounded-full bg-tulang hover:bg-tulang/60 p-5 leading-normal shadow-md focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
         <div className="text-hitam text-[25px]">{item.icon}</div>
        </li>
       </Link>
      ))}
     </ul>
    </div>
   </div>

   {/* Section 3 */}
   <div className="flex flex-col justify-start py-5 px-5 lg:basis-[20%] md:basis-[50%] basis-[100%] ">
    {/*Layanan*/}
    <ul>
     {/* Title */}
     <li>
      <h1 className="text-lg font-bold text-start mb-1">{services.title}</h1>
     </li>
     {/* Content */}
     {services.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li className="mb-3 text-sm font-thin text-start hover:text-blue-300">
         {item.name}
        </li>
       </Link>
      </ul>
     ))}
    </ul>
   </div>

   {/* Section 4 */}
   <div className="flex flex-col justify-start py-5 px-5 lg:basis-[20%] md:basis-[50%] basis-[100%] ">
    {/*Layanan*/}
    <ul>
     {/* Title */}
     <li>
      <h1 className="text-lg font-bold text-start mb-1">{profile.title}</h1>
     </li>
     {/* Content */}
     {profile.items.map((item, index) => (
      <ul key={index}>
       <Link href={item.path}>
        <li className="mb-3 text-sm font-thin text-start hover:text-blue-300">
         {item.name}
        </li>
       </Link>
      </ul>
     ))}
    </ul>
   </div>
  </footer>
 );
}
