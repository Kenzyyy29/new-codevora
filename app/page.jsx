import TypewriterText from "@/components/TypeWriter";
import Link from "next/link";

const Partner = {
 title: "CLIENT JOURNEY",
 description:
  "Want to create your own Website or Mobile App? We are here for you.",
 items: [
  {
   title: "Concept Discussion",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   title: "Budget Calculation",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   title: "Presentation",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   title: "Deployment",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
 ],
};

const Project = {
 title: "PROJECT PLANS",
 items: [
  {
   name: "Point of Sale",
   image: "/assets/1.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   name: "E-Commerce",
   image: "/assets/2.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   name: "Software Host",
   image: "/assets/3.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
  {
   name: "Others",
   image: "/assets/4.png",
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, quia.",
  },
 ],
};

export default function Home() {
 return (
  <div>
   <section className="h-[650px] lg:h-screen bg-[radial-gradient(ellipse_130%_120%_at_top_left,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    {/*LOGO*/}
    <img
     src="/Logos/1.png"
     alt=""
     className="animate-bounce delay-700 h-[80px] animate-duration-[4000ms]"
    />
    {/* About */}
    <h1 className="text-4xl lg:text-6xl font-bold">
     CODEVORA<span className="text-primary">.</span>ID
    </h1>
    <TypewriterText />
    <button className="p-2 bg-tulang text-hitam rounded-lg hover:bg-opacity-80 font-semibold">
     <Link href="/">Learn More About Us</Link>
    </button>
   </section>

   <section className="h-screen bg-[radial-gradient(ellipse_65%_75%_at_right,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-[200px] justify-center items-center">
     <div className="flex flex-col gap-5 max-w-[400px] items-center lg:items-start text-center lg:text-start mx-auto lg:mx-0">
      <h1 className="text-tulang text-4xl font-bold">WHAT IS CODEVORA?</h1>
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

   {/*Project*/}
   <section className="min-h-screen py-5">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{Project.title}</h1>
     </div>
     <div className="flex flex-col lg:flex-row gap-10 justify-center hover:cursor-pointer items-center">
      {Project.items.map((item, index) => (
       <div key={index}>
        <div className="  p-2 w-[250px] h-[300px] rounded-lg flex flex-col gap-5">
         <img
          src={item.image}
          alt=""
          className="h-[150px] my-auto mx-auto animate-pulse"
         />
         <h1 className="text-tulang text-3xl font-semibold">{item.name}</h1>
         <p>{item.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Partner Journey */}
   <section className="min-h-screen py-5 bg-[radial-gradient(ellipse_100%_75%_at_left,#354da1,#0f0f0f_66%)]">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-5 max-w-[350px] mx-auto ">
      <h1 className="text-4xl font-bold text-tulang neon-text">
       {Partner.title}
      </h1>
      <div className="neon-line mx-auto delay-400" />
      <p>{Partner.description}</p>
     </div>
     <ul className="grid grid-cols-1 lg:grid-cols-2 gap-10 justify-center hover:cursor-pointer mx-auto ">
      {Partner.items.map((item, index) => (
       <li key={index}>
        <div className="p-2 w-[300px] rounded-lg">
         <h1 className="text-3xl font-medium">{item.title}</h1>
         <p>{item.description}</p>
        </div>
       </li>
      ))}
     </ul>
     <button className="hover:border-b hover:border-tulang transition-all max-w-[190px] mx-auto text-2xl">
      <Link href="/">Learn more</Link>
     </button>
    </div>
   </section>

   {/* Review */}
   <section className="flex flex-col gap-10 text-center min-h-screen py-5">
    <h1 className="text-3xl font-bold">FREE COMPANY PROFILE WEBSITE</h1>
    <p>For Our Partner</p>
   </section>
  </div>
 );
}
