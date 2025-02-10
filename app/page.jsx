import TypewriterText from "@/components/TypeWriter";
import Link from "next/link";

const Partner = {
 title: "CLIENT JOURNEY",
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
   <section className="h-screen bg-[radial-gradient(ellipse_130%_120%_at_top_left,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    {/*BG IMAGE*/}

    <img
     src="/Logos/1.png"
     alt=""
     className="animate-bounce delay-700 h-[80px] animate-duration-[4000ms]"
    />

    {/* About */}
    <h1 className="text-6xl font-bold">CODEVORA.ID</h1>
    <TypewriterText />
    <button className="p-2 bg-tulang text-hitam rounded-lg hover:bg-opacity-80">
     <Link href="/">Learn More About Us</Link>
    </button>
   </section>

   <section className="h-screen bg-[radial-gradient(ellipse_65%_75%_at_right,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-[200px] justify-center items-center">
     <div className="flex flex-col gap-5 max-w-[400px]">
      <h1 className="text-tulang text-4xl font-bold">
       KAMI MEMILIKI TUJUAN UNTUK BLABLABLA
      </h1>
      <div className="neon-line delay-400" />
      <p>
       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima possimus
       officia deserunt odit labore optio dolorem architecto facere aliquid.
       Quis repellat quibusdam necessitatibus blanditiis beatae, modi aut
       dolores corporis explicabo.
      </p>
     </div>
     <img
      src="/Logos/1.png"
      alt=""
      className="h-[200px] w-[350px] lg:h-[300px] lg:w-[500px]"
     />
    </div>
   </section>

   <section className="h-screen py-5">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{ProjectCard.title}</h1>
     </div>
     <ul className="flex flex-col lg:flex-row gap-10 justify-center hover:cursor-pointer items-center">
      {ProjectCard.items.map((item, index) => (
       <li key={index}>
        <div className="  p-2 w-[250px] h-[300px] rounded-lg flex flex-col gap-5">
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

   {/* Partner Journey */}
   <section className="h-screen py-5">
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
     <button className="hover:underline max-w-[190px] mx-auto">
      <Link href="/">Learn more about partners</Link>
     </button>
    </div>
   </section>

   {/* Review */}
   <section className="h-screen py-5">
    <h1 className="text-3xl font-bold">WHO ARE WE?</h1>
   </section>
  </div>
 );
}
