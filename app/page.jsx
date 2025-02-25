import TypewriterText from "@/components/TypeWriter";
import Link from "next/link";



export const metadata = {
 title: "Codevora Tech - The best digital solution for all of your own bussiness needs",
 description: "The best digital solutions of all your business needs",
};

const Partner = {
 title: "CLIENT JOURNEY",
 description:
  "Want to create your own Website or Mobile App? We are here for you.",
 items: [
  {
   title: "Concept Discussion",
   description:
    "In this phase, we hold an initial meeting with the client to understand their needs and business objectives. We discuss various concepts and solutions that we can offer, while also listening to the client's feedback and expectations. The goal of this phase is to ensure that we have a clear understanding of the client's vision and how our services can help achieve it.",
  },
  {
   title: "Budget Calculation",
   description:
    "Once the initial concept is agreed upon, we proceed to calculate the budget, which includes all aspects of the project, such as development, implementation, and maintenance costs. We provide transparent details regarding the expenses involved, allowing the client to make informed decisions based on their budget. We are also open to discussing options and adjustments that may be necessary to meet budget constraints.",
  },
  {
   title: "Presentation",
   description:
    "After the budget calculation is approved, we prepare a more detailed presentation of the solutions we will offer. In this presentation, we explain the features, benefits, and how the solution will be implemented. We may also showcase examples or prototypes, if possible, to give the client a clearer picture of what they can expect.",
  },
  {
   title: "Deployment",
   description:
    "Once all approvals are obtained, we move on to the deployment phase. Here, we begin implementing the agreed-upon solution, including system setup, testing, and user training. We ensure that all aspects run smoothly and are ready for use. After deployment is complete, we continue to provide technical support and maintenance to ensure that the client can fully leverage our services.",
  },
 ],
};

const Project = {
 title: "PROJECT PLANS",
 items: [
  {
   name: "Point of Sales (POS)",
   image: "/assets/1.png",
   description:
    "Our POS systems are designed to streamline retail operations, enabling businesses to manage sales transactions efficiently. We provide user-friendly interfaces, real-time inventory management, and detailed reporting features, allowing our clients to enhance customer experiences and optimize their sales processes.",
  },
  {
   name: "E-Commerce",
   image: "/assets/2.png",
   description:
    "We specialize in developing robust e-commerce platforms that empower businesses to reach a wider audience online. Our solutions include customizable storefronts, secure payment gateways, and integrated marketing tools, ensuring that our clients can effectively sell their products and services in the digital marketplace.",
  },
  {
   name: "Software Host",
   image: "/assets/3.png",
   description:
    "Our software hosting services offer reliable and scalable solutions for businesses looking to deploy their applications in the cloud. We ensure high availability, security, and performance, allowing our clients to focus on their core operations while we manage the technical infrastructure.",
  },
  {
   name: "Others",
   image: "/assets/4.png",
   description:
    "In addition to our core offerings in point of sales (POS), e-commerce, and software hosting, we provide a variety of other services designed to meet the diverse needs of our clients.",
  },
 ],
};

export default function Home() {
 return (
  <div>
   <section className="h-[650px] md:h-screen lg:h-screen bg-[radial-gradient(ellipse_130%_120%_at_top_left,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5">
    {/*LOGO*/}
    <img
     src="/Logos/1.png"
     alt=""
     className="animate-bounce delay-700 h-[80px] animate-duration-[4000ms] md:h-[150px] lg:h-[150px] 2xl:h-[200px] transition-all"
    />
    {/* About */}
    <h1 className="text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold">
     CODEVORA<span className="text-primary">.</span>ID
    </h1>
    <TypewriterText />
    <button className="p-2 bg-tulang text-hitam rounded-lg hover:bg-opacity-80 font-semibold 2xl:text-xl">
     <Link href="/about">Learn More About Us</Link>
    </button>
   </section>

   <section className="h-screen bg-[radial-gradient(ellipse_65%_75%_at_right,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-5 px-10">
    <div className="flex flex-col lg:flex-row gap-[100px] lg:gap-[200px] justify-center items-center">
     <div className="flex flex-col gap-5 max-w-[400px] md:max-w-[600px] lg:max-w-[600px] 2xl:max-w-[700px] items-center lg:items-start text-center lg:text-start mx-auto lg:mx-0">
      <h1 className="text-tulang text-4xl 2xl:text-6xl font-bold">
       WHAT IS CODEVORA?
      </h1>
      <div className="neon-line delay-400" />
      <p className="md:text-2xl lg:text-2xl 2xl:text-3xl">
       Codevora is a startup company that operates in the field of digital
       technology. Our goal is to create and develop new innovations in the
       digital world to facilitate business operations at both the micro and
       macro levels.
      </p>
     </div>
     <img
      src="/Logos/1.png"
      alt=""
      className="h-[200px] w-[350px] lg:h-[250px] lg:w-[400px] 2xl:h-[300px] 2xl:w-[500px]"
     />
    </div>
   </section>

   {/*Project*/}
   <section className="min-h-screen py-10 2xl:py-24">
    <div className="text-center flex flex-col gap-10">
     <div className="flex flex-col gap-3">
      <h1 className="text-3xl 2xl:text-5xl font-bold">{Project.title}</h1>
     </div>
     <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-[150px] 2xl:gap-30 justify-center hover:cursor-pointer items-center">
      {Project.items.map((item, index) => (
       <div key={index}>
        <div className="  p-2 w-full px-10 h-[300px] rounded-lg flex flex-col gap-5">
         <img
          src={item.image}
          alt=""
          className="h-[150px] 2xl:h-[200px] my-auto mx-auto animate-pulse"
         />
         <h1 className="text-tulang text-3xl font-semibold">{item.name}</h1>
         <p className="2xl:text-lg px-10">{item.description}</p>
        </div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Partner Journey */}
   <section className="min-h-screen py-10 bg-[radial-gradient(ellipse_100%_75%_at_left,#354da1,#0f0f0f_66%)] justify-center items-center flex flex-col gap-5">
    <div className="text-center flex flex-col gap-10 2xl:gap-24">
     <div className="flex flex-col gap-5 max-w-[350px] 2xl:max-w-[800px] mx-auto ">
      <h1 className="text-4xl 2xl:text-5xl font-bold text-tulang neon-text">
       {Partner.title}
      </h1>
      <p className="2xl:text-2xl">{Partner.description}</p>
     </div>
     <ul className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-10 justify-center hover:cursor-pointer mx-auto px-10">
      {Partner.items.map((item, index) => (
       <li key={index}>
        <div className="space-y-5 p-4 w-full px-10 bg-tulang bg-opacity-20 backdrop-blur-md rounded-lg border lg:h-[300px] 2xl:h-[450px]">
         <h1 className="text-3xl 2xl:text-4xl font-medium 2xl:font-bold border-b-2 pb-4">
          {item.title}
         </h1>
         <p className="2xl:text-[19px] ">{item.description}</p>
        </div>
       </li>
      ))}
     </ul>
    </div>
   </section>
  </div>
 );
}
