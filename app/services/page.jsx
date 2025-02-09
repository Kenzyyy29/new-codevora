import Link from "next/link";

const services = [
 {
  title: "Website Development",
  description:
   "We design and develop responsive websites that are attractive and functional, tailored to meet your business needs.",
  icon: "🌐", // You can replace this with an SVG icon
 },
 {
  title: "Mobile App Development",
  description:
   "Our team creates apps for iOS and Android, ensuring an optimal user experience and seamless functionality.",
  icon: "📱",
 },
 {
  title: "E-commerce Solutions",
  description:
   "We build user-friendly and secure e-commerce platforms to help you sell your products online effectively.",
  icon: "🛒",
 },
 {
  title: "SEO and Digital Marketing",
  description:
   "Our strategies are designed to increase your online visibility and attract more customers to your business.",
  icon: "📈",
 },
 {
  title: "Maintenance and Support",
  description:
   "We provide ongoing maintenance and technical support services to ensure your systems run smoothly.",
  icon: "🛠️",
 },
 {
  title: "IT Consulting",
  description:
   "Our consulting sessions help you find the right technology solutions tailored to your specific business needs.",
  icon: "💼",
 },
];

const Services = () => {
 return (
  <div className="">
   <section className="h-screen justify-center items-center px-4 flex flex-col gap-5 overflow-hidden">
    <h1 className="text-[60px] font-bold text-center mx-auto max-w-[500px]">
     We Serve<span> All Of Your Needs</span>
    </h1>
    <p className="text-center text-lg">
     We really pay attention to our clients' needs, and we will continue to
     provide the best service
    </p>
    <div className="flex flex-row gap-5">
     <button className="p-2 bg-tulang text-hitam rounded-lg hover:outline hover:outline-tulang hover:bg-transparent hover:text-tulang">
      <Link href="/">Contact Us</Link>
     </button>
     <button className="p-2 bg-hitam text-tulang rounded-lg outline outline-tulang ">
      <Link href="/">Learn More About Us</Link>
     </button>
    </div>
   </section>

   {services.map((service, index) => (
    <section
     key={index}
     className="h-screen p-6 mb-6">
     <div className="flex items-center mb-4">
      <span className="text-5xl mr-4">{service.icon}</span>
      <h2 className="text-2xl font-semibold">{service.title}</h2>
     </div>
     <p className="text-gray-600">{service.description}</p>
    </section>
   ))}

   <section className="text-center mt-12">
    <h2 className="text-2xl font-bold">Ready to Elevate Your Business?</h2>
    <button className="mt-4 bg-green-500 text-white py-2 px-6 rounded hover:bg-green-600 transition">
     Contact Us
    </button>
   </section>
  </div>
 );
};

export default Services;


{/*<div className="relative w-full h-screen overflow-hidden bg-black">
   <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0">
    {Array.from({length: 100}).map((_, index) => (
     <div
      key={index}
      className="w-full h-full border border-green-500 opacity-50 animate-pulse"
      style={{
       animationDelay: `${Math.random() * 2}s`,
       animationDuration: `${Math.random() * 2 + 1}s`,
      }}
     />
    ))}
   </div>
   <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-blue-500 opacity-30 animate-pulse" />
  </div>*/}