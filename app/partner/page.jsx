import ContactForm from "@/components/ContactForm";

const Partner = () => {
    return (
     <div>
      <section className="min-h-screen bg-[radial-gradient(ellipse_130%_120%_at_top_right,#354da1,#0f0f0f_66%)] text-tulang justify-center mx-auto items-center flex flex-col gap-[50px] lg:flex-row lg:gap-[200px] 2xl:gap-[400px] px-10 py-10">
       <div className="w-full max-w-md 2xl:max-w-xl">
        <ContactForm />
       </div>
       <div className="flex flex-col gap-5 text-center">
        <img
         src="/Logos/1.png"
         alt=""
         className=" w-[320px] lg:w-[500px] mx-auto"
        />
        <div className="flex flex-col gap-2">
         <h1 className="text-4xl font-bold text-tulang">
          CODEVORA<span className="text-primary">.</span>ID
         </h1>
         <p>THE BEST DIGITAL SOLUTION FOR ALL YOUR BUSSINESS NEEDS</p>
        </div>
       </div>
      </section>
     </div>
    );
}

export default Partner