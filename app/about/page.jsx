import LogoCarousel from "@/components/Carousel";

const About = () => {
 return (
  <div>
   <section className="h-[650px] lg:h-screen bg-[radial-gradient(ellipse_100%_60%_at_center,#354da1,#0f0f0f_66%)] lg:bg-[radial-gradient(ellipse_100%_80%_at_center,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    <div className="items-center flex flex-col gap-5 my-auto">
     <img
      src="/Logos/1.png"
      alt=""
      className="w-[300px]"
     />
     <h1 className="text-3xl lg:text-6xl font-bold text-center">
      Want to grow up your bussiness? We're Here
     </h1>
    </div>
   </section>
   <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"></hr>
   <section className="flex flex-col gap-6 items-center py-4">
    <h1 className="text-2xl font-bold">Trusted by Many Companies</h1>
    <LogoCarousel />
   </section>
   <hr className="h-px bg-gray-400 border-0 dark:bg-gray-700"></hr>
   <section className="min-h-screen"></section>
  </div>
 );
};

export default About;
