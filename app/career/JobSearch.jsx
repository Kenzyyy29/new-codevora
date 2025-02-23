"use client";

import Link from "next/link";
import {useState} from "react";

const items = [
 {
  name: "UI/UX Designer",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Frontend Developer",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Backend Developer",
  description:
   " Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Software Tester",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Finance Admin",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Software Engineer",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
 {
  name: "Operational Manager",
  description:
   "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omniasdsadkosadlsaldsladlsdjssladmsl",
  path: "/",
  image: "/logos/1.png",
 },
];

const SearchBox = () => {image:"/logos/1.png"
 const [searchTerm, setSearchTerm] = useState("");
 const [visibleItem, setVisibleItem] = useState(null)

 const filteredItems = items.filter((item) =>
  item.name.toLowerCase().includes(searchTerm.toLowerCase())
 );

 const handleItemClick = (item) => {
  if (visibleItem && visibleItem.name === item.name) {
   setVisibleItem(null);
  } else {
   setVisibleItem(item);
  }
 };

 return (
  <section className="h-[1050px] lg:h-[850px] text-center px-10 py-10">
   <h1 className="text-3xl lg:text-4xl font-bold">Search your interest here</h1>
   <div className="p-4 flex flex-col gap-5 items-center justify-center">
    <input
     type="text"
     placeholder="Search..."
     className="border p-2 rounded bg-transparent w-full lg:max-w-[500px] hover:outline-none"
     value={searchTerm}
     onChange={(e) => setSearchTerm(e.target.value)}
    />
    <div className=" grid-cols-1 gap-10 items-center w-full hidden">
     {filteredItems.length > 0 ? (
      filteredItems.map((item, index) => (
       <div key={index}>
        <div
         className="p-2 border cursor-pointer"
         onClick={() => handleItemClick(item)}>
         {item.name}
        </div>
        {visibleItem && visibleItem.name === item.name && (
         <div className="flex flex-col lg:flex-row gap-10 items-center border-b border-r border-l p-4">
          <div className="flex flex-col gap-4   rounded bg-transparent w-full text-start">
           <img
            src={visibleItem.image}
            alt=""
            className="w-[130px] h-[80px] animate-pulse lg:hidden"
           />
           <h2 className="text-lg font-bold">{visibleItem.name}</h2>
           <p>{visibleItem.description}</p>
           <div className="hover:underline">
            <Link href={visibleItem.path}>Try to sign</Link>
           </div>
          </div>
          <img
           src={visibleItem.image}
           alt=""
           className="w-[130px] h-[80px] animate-pulse hidden lg:block"
          />
         </div>
        )}
       </div>
      ))
     ) : (
      <div className="p-2">No items found</div>
     )}
    </div>
    <div className="flex justify-center items-center">
     <h1 className="text-3xl font-bold text-tulang/60">Sorry, the job vacancy is not available yet.</h1>
    </div>
   </div>
  </section>
 );
};

export default SearchBox;
