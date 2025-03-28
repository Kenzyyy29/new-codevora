import LogoCarousel from "@/components/Carousel";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Vision = {
 title: "OUR VISION",
 items: [
  {
   description:
    "To be a leading digital technology company that empowers businesses through innovative solutions, transforming challenges into opportunities for growth and success.",
  },
 ],
};

const Mission = {
 title: "OUR MISSION",
 items: [
  {
   description:
    "To provide exceptional digital services that meet the unique needs of our clients, ensuring their satisfaction and success.",
  },
  {
   description:
    "To foster a culture of innovation and creativity, encouraging our team to develop cutting-edge technologies that drive progress.",
  },
  {
   description:
    "To build long-lasting partnerships with our clients by delivering reliable, efficient, and scalable solutions that adapt to their evolving needs.",
  },
  {
   description:
    "To contribute positively to the digital landscape by promoting ethical practices and sustainability in all our operations.",
  },
 ],
};

const AboutCodevora = {
 title: "WHAT IS CODEVORA?",
 description:
  "Codevora is a startup company that operates in the field of digital technology. Our goal is to create and develop new innovations in the digital world to facilitate business operations at both the micro and macro levels.",
};

const About = () => {
 return (
  <div>
   {/*About*/}
   <section className="h-screen bg-[radial-gradient(ellipse_100%_60%_at_center,#354da1,#0f0f0f_66%)] lg:bg-[radial-gradient(ellipse_100%_65%_at_center,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5 px-10">
    <div className="items-center flex flex-col gap-8 justify-center  text-center">
     <h1 className="text-5xl 2xl:text-[100px] font-bold neon-text 2xl:max-w-[900px]">
      Want to grow up your bussiness? We're Here
     </h1>
     <p className="text-xl 2xl:max-w-[900px]">
      In an ever-evolving digital era, Codevora Tech stands as a trusted partner
      in delivering innovative technology solutions. Founded with a vision to
      empower businesses through technology, we are committed to providing
      services and products that help our clients achieve their goals more
      efficiently and effectively.
     </p>
    </div>
   </section>

   {/*Logo Carousel*/}
   <section className=" flex-col gap-6 items-center hidden">
    <h1 className="text-2xl font-bold">Trusted by Many Companies</h1>
    <LogoCarousel />
   </section>

   {/*AboutCodevora*/}
   <section className="min-h-screen py-10 lg:py-[50px] px-10 lg:px-[150px] 2xl:px-[250px] flex flex-col items-center justify-center">
    <div className="flex flex-col lg:flex-row gap-5 lg:gap-20 items-center my-auto ">
     <img
      src="/Logos/1.png"
      alt=""
      className="w-[300px] lg:w-[400px] 2xl:2-[500px]"
     />
     <div className="flex flex-col gap-5 text-center lg:text-start">
      <h1 className="text-4xl lg:text-6xl font-bold">{AboutCodevora.title}</h1>
      <div className="neon-line delay-400 mx-auto lg:mx-0" />
      <p className="text-xl lg:text-2xl 2xl:text-3xl">
       {AboutCodevora.description}
      </p>
     </div>
    </div>
   </section>

   {/*VISION & MISSION*/}
   <section className="min-h-screen py-10 flex flex-col gap-10 items-start justify-center text-start px-10 lg:px-24 2xl:px-[100px] bg-[radial-gradient(ellipse_100%_60%_at_right,#354da1,#0f0f0f_66%)] ">
    <h1 className="text-3xl 2xl:text-6xl font-bold neon-text">
     {Vision.title}
    </h1>
    {Vision.items.map((item, index) => (
     <p
      key={index}
      className="text-lg 2xl:text-2xl font-semibold">
      {item.description}
     </p>
    ))}

    <h1 className="text-3xl 2xl:text-6xl font-bold neon-text">
     {Mission.title}
    </h1>
    {Mission.items.map((item, index) => (
     <p
      key={index}
      className="text-lg 2xl:text-2xl font-semibold">
      {item.description}
     </p>
    ))}
   </section>
  </div>
 );
};

export default About;
