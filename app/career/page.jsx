import JobSearch from "./JobSearch";

const WorkWithUs = {
 title: "Why Work with Us?",
 items: [
  {
   title: "Innovative Culture",
   description:
    "We foster a culture of innovation where new ideas are encouraged and valued. You will have the opportunity to work on exciting projects that challenge you and allow you to grow.",
  },
  {
   title: "Professional Development",
   description:
    "We are committed to your professional growth. We offer training programs, workshops, and mentorship opportunities to help you enhance your skills and advance your career.",
  },
  {
   title: "Collaborative Environment",
   description:
    " Our team is made up of diverse individuals who bring unique perspectives and expertise. We believe in teamwork and collaboration, and we support each other in achieving our goals.",
  },
  {
   title: "Work-Life Balance",
   description:
    "We understand the importance of maintaining a healthy work-life balance. We offer flexible working arrangements to help you manage your personal and professional commitments.",
  },
  {
   title: "Impactful Work",
   description:
    "At Codevora, your work will have a real impact on businesses and communities. You will be part of a team that is dedicated to creating innovative solutions that make a difference.",
  },
 ],
};

const Career = () => {
 return (
  <div className="main">
   <section className="h-screen py-10 px-10 flex flex-col gap-5 justify-center items-center bg-[radial-gradient(ellipse_70%_70%_at_center,#354da1,#0f0f0f_66%)]">
    <div className="flex flex-col gap-10 items-center text-center 2xl:px-[400px]">
     <h1 className="text-5xl md:text-6xl lg:text-6xl 2xl:text-8xl font-bold">
      Are you Ready to Grow Up with us?
     </h1>
     <p className="text-lg md:text-2xl lg:text-2xl 2xl:text-3xl ">
      We value our people as our greatest asset. We are looking for talented and
      passionate individuals who want to make a difference in the digital
      technology landscape.
     </p>
    </div>
   </section>

   <JobSearch />
   <section className="min-h-screen flex flex-col gap-10 justify-center items-center px-10 mx-auto py-10">
    <h1 className="text-3xl lg:text-5xl font-bold neon-text">
     {WorkWithUs.title}
    </h1>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 justify-center items-center text-center ">
     {WorkWithUs.items.map((item) => (
      <li
       key={item.title}
       className="flex flex-col gap-2 border max-w-[300px] p-4 md:h-[300px] lg:h-[300px] 2xl:h-[400px] rounded-lg items-center justify-center">
       <h2 className="text-2xl 2xl:text-4xl font-semibold text-primary">
        {item.title}
       </h2>
       <p className="text-lg 2xl:text-xl font-semibold">{item.description}</p>
      </li>
     ))}
    </ul>
   </section>
  </div>
 );
};

export default Career;
