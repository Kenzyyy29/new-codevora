import JobSearch from "./JobSearch";

const Career = () => {
 return (
  <div className="main">
   <section className="h-[650px] lg:h-screen py-10 px-10 flex flex-col gap-5 justify-center bg-[radial-gradient(ellipse_70%_70%_at_center,#354da1,#0f0f0f_66%)]">
    <div className="flex flex-col gap-2 items-center text-center">
     <h1 className="text-4xl font-bold">Are you Ready to Grow Up with us?</h1>
     <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus omnis
      cum aperiam eaque commodi maiores nihil voluptatem repudiandae suscipit
      incidunt.
     </p>
    </div>
   </section>
   <JobSearch />
   <section className="h-96 border-t"></section>
  </div>
 );
};

export default Career;
