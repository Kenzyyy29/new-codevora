import SearchBox from "@/components/SearchBox";
import JobSearch from "./JobSearch";

const Career = () => {
 return (
  <div className="main">
   <section className="min-h-screen py-10 px-10 flex flex-col gap-5">
    <div className="container mx-auto">
     <h1>Are you Ready to Grow Up with us?</h1>
    </div>
   </section>
   <JobSearch />
  </div>
 );
};

export default Career;
