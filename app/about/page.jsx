import LogoCarousel from "@/components/Carousel";

const Vision = {
 title: "OUR VISION",
 items: [
  {
   description:
    "Membuat Inovasi Inovasi baru dalam dunia digital, demi mempermudah Client kami dalam menjalankan bisnis mikro maupun makro.",
  },
  {
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus.",
  },
 ],
};

const Mission = {
 title: "OUR MISSION",
 items: [
  {
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus.",
  },
  {
   description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus.",
  },
 ],
};

const AboutCodevora = {
    title: "WHAT IS CODEVORA?",
    description: "Codevora merupakan sebuah start up company yang bergerak di bidang teknologi digital. Kami memiliki tujuan untuk terus mengembangkan Inovasi-Inovasi baru dalam dunia digital demi mempermudah jalannya bisnis client, baik itu di level mikro maupun makro."
}

const About = () => {
 return (
  <div>
   {/*About*/}
   <section className="h-[650px] lg:h-screen bg-[radial-gradient(ellipse_100%_60%_at_center,#354da1,#0f0f0f_66%)] lg:bg-[radial-gradient(ellipse_100%_80%_at_center,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    <div className="items-center flex flex-col gap-5 my-auto">
     <h1 className="text-3xl lg:text-6xl font-bold text-center">
      Want to grow up your bussiness? We're Here
     </h1>
    </div>
   </section>
   <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"></hr>

   {/*Logo Carousel*/}
   <section className="flex flex-col gap-6 items-center py-4">
    <h1 className="text-2xl font-bold">Trusted by Many Companies</h1>
    <LogoCarousel />
   </section>

   <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"></hr>

   {/*AboutCodevora*/}
   <section className="h-auto py-10 lg:py-[50px] lg:px-[250px] ">
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center my-auto ">
     <img
      src="/Logos/1.png"
      alt=""
      className="w-[300px] lg:w-[500px]"
     />
     <div className="flex flex-col gap-5 text-center lg:text-start">
      <h1 className="text-3xl lg:text-6xl font-bold">{AboutCodevora.title}</h1>
      <p className="text-lg lg:text-xl">{AboutCodevora.description}</p>
     </div>
    </div>
   </section>

   {/*VISION & MISSION*/}
   <section className="h-auto py-10 flex flex-col gap-10">
    <div className="flex flex-col gap-5 items-center my-auto text-center px-5">
     <h1 className="text-3xl font-bold neon-text">{Vision.title}</h1>
     {Vision.items.map((item, index) => (
      <p
       key={index}
       className="text-lg font-semibold">
       {item.description}
      </p>
     ))}
    </div>
    <div className="flex flex-col gap-5 items-center my-auto text-center px-5">
     <h1 className="text-3xl font-bold neon-text">{Mission.title}</h1>
     {Mission.items.map((item, index) => (
      <p
       key={index}
       className="text-lg font-semibold">
       {item.description}
      </p>
     ))}
    </div>
   </section>
  </div>
 );
};

export default About;
