import Link from "next/link";

const services = [
 {
  title: "Website Development",
  description:
   "We design and develop responsive websites that are attractive and functional, tailored to meet your business needs.",
  image: "/assets/5.png",
 },
 {
  title: "Mobile App Development",
  description:
   "Our team creates apps for iOS and Android, ensuring an optimal user experience and seamless functionality.",
  image: "/assets/6.png",
 },
 {
  title: "E-commerce Solutions",
  description:
   "We build user-friendly and secure e-commerce platforms to help you sell your products online effectively.",
  image: "/assets/7.png",
 },
 {
  title: "SEO and Digital Marketing",
  description:
   "Our strategies are designed to increase your online visibility and attract more customers to your business.",
  image: "/assets/8.png",
 },
 {
  title: "Maintenance and Support",
  description:
   "We provide ongoing maintenance and technical support services to ensure your systems run smoothly.",
  image: "/assets/9.png",
 },
 {
  title: "IT Consulting",
  description:
   "Our consulting sessions help you find the right technology solutions tailored to your specific business needs.",
  image: "/assets/10.png",
 },
];

const Services = () => {
 return (
  <div className="">
   <section className="h-screen justify-center items-center px-6 flex flex-col gap-5 overflow-hidden bg-[radial-gradient(ellipse_65%_75%_at_right,#354da1,#0f0f0f_66%)]">
    <h1 className="text-[60px] 2xl:text-[100px] font-bold text-center mx-auto max-w-[500px] 2xl:max-w-[800px] neon-text">
     We Serve<span> All Of Your Needs</span>
    </h1>
    <p className="text-center text-lg 2xl:text-2xl">
     We really pay attention to our clients' needs, and we will continue to
     provide the best service.
    </p>
    <div className="flex flex-row gap-5 font-semibold">
     <button className="p-2 bg-tulang hover:bg-[#dedddd] text-hitam rounded-lg 2xl:text-xl">
      <Link href="/about">Learn More About Us</Link>
     </button>
    </div>
   </section>

   <section className="min-h-screen p-6 mb-6 text-center grid grid-cols-1 lg:grid-cols-3">
    {services.map((service, index) => (
     <div
      key={index}
      className="flex flex-col gap-5 items-center mb-4">
      <img
       src={service.image}
       className="w-[200px] animate-pulse"
      />
      <div className="neon-line mx-auto delay-400" />
      <h2 className="text-2xl 2xl:text-4xl font-semibold">{service.title}</h2>
      <p className="text-tulang mx-24 2xl:text-xl">{service.description}</p>
     </div>
    ))}
   </section>

   <section className="text-center h-auto py-10">
    <h2 className="text-2xl 2xl:text-4xl font-bold">Ready to Elevate Your Business?</h2>
    <Link href="/partner">
     <button className="mt-4 bg-primary text-tulang py-2 px-6 rounded hover:bg-primary/60 transition font-semibold 2xl:text-xl">
      Contact Us
     </button>
    </Link>
   </section>
  </div>
 );
};

export default Services;