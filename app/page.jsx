import TypewriterText from "@/components/TypeWriter";
import Link from "next/link";

export const metadata = {
 title:
  "Codevora Tech - The best digital solution for all of your own business needs",
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
    "In this phase, we hold an initial meeting with the client to understand their needs and business objectives.",
  },
  {
   title: "Budget Calculation",
   description:
    "Once the initial concept is agreed upon, we proceed to calculate the budget with transparent details.",
  },
  {
   title: "Presentation",
   description:
    "After budget approval, we prepare detailed presentation of solutions with features and benefits.",
  },
  {
   title: "Deployment",
   description:
    "We implement the solution including system setup, testing, and user training with ongoing support.",
  },
 ],
};

const Project = {
 title: "OUR SERVICES",
 items: [
  {
   name: "Point of Sales (POS)",
   image: "/assets/1.png",
   description:
    "Streamline retail operations with user-friendly POS systems featuring real-time inventory management.",
  },
  {
   name: "E-Commerce",
   image: "/assets/2.png",
   description:
    "Robust e-commerce platforms with secure payment gateways and integrated marketing tools.",
  },
  {
   name: "Software Host",
   image: "/assets/3.png",
   description:
    "Reliable and scalable cloud hosting solutions with high availability and security.",
  },
  {
   name: "Custom Solutions",
   image: "/assets/4.png",
   description:
    "Tailored digital solutions designed to meet your specific business requirements.",
  },
 ],
};

export default function Home() {
 return (
  <div className="overflow-x-hidden">
   {/* Hero Section */}
   <section className="relative h-[650px] md:h-screen lg:h-screen bg-gradient-to-br from-[#0f0f0f] via-[#1a1a2e] to-[#16213e] text-white flex flex-col justify-center items-center gap-5 overflow-hidden">
    {/* Animated background elements */}
    <div className="absolute inset-0 overflow-hidden">
     <div className="absolute top-0 left-0 w-20 h-20 rounded-full bg-primary opacity-20 blur-xl animate-float1"></div>
     <div className="absolute top-1/3 right-1/4 w-32 h-32 rounded-full bg-blue-500 opacity-15 blur-xl animate-float2"></div>
     <div className="absolute bottom-1/4 left-1/3 w-24 h-24 rounded-full bg-purple-500 opacity-15 blur-xl animate-float3"></div>
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
     <img
      src="/Logos/1.png"
      alt="Codevora Logo"
      className="animate-bounce delay-700 h-[80px] md:h-[150px] lg:h-[150px] 2xl:h-[200px] transition-all"
     />
     <h1 className="text-4xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-primary">
      CODEVORA<span className="text-primary">.</span>ID
     </h1>
     <TypewriterText />
     <button className="mt-6 px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-semibold 2xl:text-xl transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30">
      <Link href="/about">Learn More About Us</Link>
     </button>
    </div>

    {/* Scroll indicator */}
    <div className="absolute bottom-10 animate-bounce">
     <svg
      className="w-6 h-6 text-white"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24">
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       strokeWidth="2"
       d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
     </svg>
    </div>
   </section>

   {/* About Section */}
   <section className="relative py-20 md:py-32 bg-[url('/assets/pattern.svg')] bg-cover bg-center">
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
    <div className="relative container mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-20 justify-center items-center">
     <div className="flex-1 max-w-2xl">
      <h1 className="text-4xl 2xl:text-6xl font-bold mb-6 text-white">
       WHAT IS <span className="text-primary">CODEVORA</span>?
      </h1>
      <div className="w-20 h-1 bg-primary mb-6"></div>
      <p className="text-lg md:text-xl 2xl:text-2xl text-gray-300 leading-relaxed">
       Codevora is a startup company that operates in the field of digital
       technology. Our goal is to create and develop new innovations in the
       digital world to facilitate business operations at both the micro and
       macro levels.
      </p>
      <div className="mt-8 grid grid-cols-2 gap-4">
       <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
        <h3 className="text-primary font-bold">50+</h3>
        <p className="text-sm text-gray-300">Projects Completed</p>
       </div>
       <div className="bg-white/10 p-4 rounded-lg backdrop-blur-sm border border-white/10">
        <h3 className="text-primary font-bold">10+</h3>
        <p className="text-sm text-gray-300">Satisfied Clients</p>
       </div>
      </div>
     </div>
     <div className="flex-1 flex justify-center">
      <div className="relative w-full max-w-md">
       <img
        src="/Logos/1.png"
        alt="About Codevora"
        className="w-full h-auto rounded-lg shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
       />
       <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30"></div>
       <div className="absolute -top-5 -left-5 w-24 h-24 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20"></div>
      </div>
     </div>
    </div>
   </section>

   {/* Services Section */}
   <section className="py-20 bg-gradient-to-b from-[#0f0f0f] to-[#16213e]">
    <div className="container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-3xl 2xl:text-5xl font-bold text-white mb-4">
       {Project.title}
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">
       We provide comprehensive digital solutions to transform your business
      </p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Project.items.map((item, index) => (
       <div
        key={index}
        className="group relative bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300 hover:-translate-y-2">
        <div className="p-6 h-full flex flex-col">
         <div className="mb-6 h-40 flex items-center justify-center">
          <img
           src={item.image}
           alt={item.name}
           className="h-full w-auto object-contain group-hover:scale-110 transition-transform duration-500"
          />
         </div>
         <h3 className="text-xl font-bold text-white mb-3">{item.name}</h3>
         <p className="text-gray-400 flex-grow">{item.description}</p>
         <div className="mt-4">
          <button className="text-primary text-sm font-medium hover:underline">
           Learn more →
          </button>
         </div>
        </div>
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
       </div>
      ))}
     </div>
    </div>
   </section>

   {/* Client Journey Section */}
   <section className="relative py-20 bg-[url('/assets/grid.svg')] bg-cover">
    <div className="absolute inset-0 bg-gradient-to-b from-[#16213e] to-[#0f0f0f] opacity-90"></div>
    <div className="relative container mx-auto px-4">
     <div className="text-center mb-16">
      <h2 className="text-3xl 2xl:text-5xl font-bold text-white mb-4">
       {Partner.title}
      </h2>
      <p className="text-gray-400 max-w-2xl mx-auto">{Partner.description}</p>
     </div>

     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {Partner.items.map((item, index) => (
       <div
        key={index}
        className="relative bg-gradient-to-b from-white/5 to-transparent rounded-xl overflow-hidden border border-white/10 hover:border-primary/50 transition-all duration-300"
        style={{animationDelay: `${index * 100}ms`}}>
        <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#3b82f6_0%,#3b82f6_25%,#60a5fa_50%,#3b82f6_75%,#3b82f6_100%)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="p-8 h-full flex flex-col relative z-10">
         <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
          <span className="text-primary font-bold text-xl">{index + 1}</span>
         </div>
         <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
         <p className="text-gray-400">{item.description}</p>
        </div>
       </div>
      ))}
     </div>

     <div className="mt-16 text-center">
      <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-primary/30">
       Start Your Project
      </button>
     </div>
    </div>
   </section>

   {/* CTA Section */}
   <section className="py-20 bg-gradient-to-r from-[#16213e] to-[#1a1a2e]">
    <div className="container mx-auto px-4 text-center">
     <h2 className="text-3xl 2xl:text-5xl font-bold text-white mb-6">
      Ready to Transform Your Business?
     </h2>
     <p className="text-gray-400 max-w-2xl mx-auto mb-8">
      Let's discuss how we can help you achieve your digital goals
     </p>
     <div className="flex flex-col sm:flex-row justify-center gap-4">
      <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-opacity-90 font-semibold transition-all transform hover:scale-105">
       Contact Us
      </button>
      <button className="px-8 py-3 bg-transparent text-white border border-white/20 rounded-lg hover:bg-white/10 font-semibold transition-all transform hover:scale-105">
       View Portfolio
      </button>
     </div>
    </div>
   </section>
  </div>
 );
}
