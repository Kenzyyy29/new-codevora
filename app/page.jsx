import TypewriterText from "@/components/TypeWriter";
import Link from "next/link";

const Partner = {
 title: "PARTNER JOURNEY",
 description: "Become our partner within one second",
 items: [
  {
   title: "Concept Discussion",
  },
  {
   title: "Budget Calculation",
  },
  {
   title: "Presentation",
  },
  {
   title: "Deployment",
  },
 ],
};

const ProjectCard = {
 title: "PROJECT PLANS",
 items: [
  {
   name: "Project 1",
   image: "/Logos/1.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   name: "Project 2",
   image: "/Logos/1.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   name: "Project 3",
   image: "/Logos/1.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
 ],
};

export default function Home() {
 return (
  <div>
   <section className="h-screen bg-hitam text-tulang justify-center mx-auto items-center flex flex-col gap-8 max-w-[850px] overflow-hidden">
    {/*BG IMAGE*/}

    <img
     src="/Logos/1.png"
     alt=""
     className="animate-bounce delay-700 h-[50px] animate-duration-[4000ms]"
    />

    {/* About */}
    <h1 className="text-6xl font-bold">CODEVORA.ID</h1>
    <TypewriterText />
    <button className="p-2 bg-tulang text-hitam rounded-lg hover:outline hover:outline-tulang hover:bg-transparent hover:text-tulang">
     <Link href="/">Lihat Selengkapnya</Link>
    </button>
   </section>

   <section className="h-screen py-5">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{ProjectCard.title}</h1>
     </div>
     <ul className="flex flex-row gap-10 justify-center hover:cursor-pointer">
      {ProjectCard.items.map((item, index) => (
       <li key={index}>
        <div className="  p-2 w-[250px] h-[300px] rounded-lg flex flex-col gap-5  border border-tulang">
         <img
          src={item.image}
          alt=""
          className="h-24 my-auto mx-auto"
         />
         <h1 className="text-tulang text-xl font-medium">{item.name}</h1>
         <p>{item.description}</p>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </section>

   <hr className="h-px mx-56 my-1 bg-gray-500 border-0" />

   {/* Partner Journey */}
   <section className="h-auto py-5">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{Partner.title}</h1>
      <p>{Partner.description}</p>
     </div>
     <ul className="flex flex-row gap-10 justify-center hover:cursor-pointer">
      {Partner.items.map((item, index) => (
       <li key={index}>
        <div className="border border-tulang p-2 w-[250px] rounded-lg">
         <h1 className="text-tulang text-xl font-medium">{item.title}</h1>
        </div>
       </li>
      ))}
     </ul>
     <div className="hover:underline">
      <Link href="/">Learn more about partners</Link>
     </div>
    </div>
   </section>

   <hr className="h-px mx-56 my-1 bg-gray-500 border-0" />

   {/* Review */}
   <section className="h-screen py-5">
    <h1 className="text-3xl font-bold">WHO ARE WE?</h1>
   </section>
  </div>
 );
}
