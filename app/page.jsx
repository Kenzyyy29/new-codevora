import Link from "next/link";

const Partner = {
 title: "PARTNER JOURNEY",
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

export default function Home() {
 return (
  <div>
   <section className="h-screen bg-hitam text-tulang justify-center mx-auto items-center flex flex-col gap-8 max-w-[700px] overflow-hidden">
    {/*Content*/}
    <h1 className="text-6xl font-bold ">CODEVORA.ID</h1>
    <p className="text-center text-2xl">
     The best digital solutions{" "}
     <span className="text-white/60">for all of</span> your own bussiness
    </p>
    <button className="bg-tulang p-2 text-hitam rounded-lg">
     Lihat selengkapnya
    </button>
    {/*BG IMAGE*/}
    <div className="overflow-hidden">
     <img
      src="/Logos/1.png"
      alt=""
      className="absolute h-[600px] rotate-12 inset-y-10 -inset-x-[200px] opacity-[1%]"
     />
    </div>
   </section>

   <section className="h-screen py-10">
    <div className="flex flex-col gap-5 text-center justify-center">
     <div className="flex flex-col gap-5">
      <h1 className="text-3xl font-bold">PROJECT PLANS</h1>
     </div>
     <div className="flex flex-row gap-5 justify-center">
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
     </div>
    </div>
   </section>
   <hr className="h-px mx-56 my-1 bg-gray-500 border-0" />
   <section className="h-auto py-5">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl font-bold">{Partner.title}</h1>
      <p>Become our partner in one second</p>
     </div>
     <ul className="flex flex-row gap-10 justify-center hover:cursor-pointer">
      {Partner.items.map((item, index) => (
       <li key={index}>
        <div className="border border-tulang p-2 w-[200px] rounded-lg">
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
  </div>
 );
}
