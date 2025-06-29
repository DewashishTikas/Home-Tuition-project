import { Link } from "react-router";
const Career = () => {
  return (
    <section className="bg-[url(./assets/images/careerbg.jpg)] bg-cover bg-[center_-10%] bg-fixed bg-no-repeat ">
      <div className="pt-25 pb-8">
        <h1 className="px-6 text-white text:2xl sm:text-3xl font-bold text-center drop-shadow-sm">
          Kickstart Your Career – Opportunities in Education, Technical &
          Management Fields
        </h1>
        <div className="drop-shadow-2xl bg-black/40 text-white shadow-2xl hover:scale-101 transition duration-300  my-6 rounded-2xl text-sm sm:text-base mx-10 px-5 py-7 tracking-widest">
          <h2 className="text-xl font-semibold">Home Tuition</h2>
          <div className="w-full my-2 h-[1px] bg-gray-600 mx-auto"></div>
          <p>
            The tutor play a very crucial role in student’s by giving them
            knowledge ,skills and inspiration. The teacher will teach core
            concepts of subjects. Provide personalized attention and clarify
            doubts. Track and improve student’s performance. Give regular
            assignments and tests. Communicate progress to parents weekly.
          </p>
        </div>

        <div className="drop-shadow-2xl bg-black/40 text-white shadow-2xl hover:scale-101 transition duration-300  my-6 rounded-2xl text-sm sm:text-base mx-10 px-5 py-7 tracking-widest">
          <h2 className="text-xl font-semibold">Bijli Vibhag Labour</h2>
          <div className="w-full my-2 h-[1px] bg-gray-600 mx-auto"></div>
          <p>
            We assist skilled and hardworking labourers for the Bijli Vibhaag
            (Electricity Department) to assist in field-level electrical work,
            including pole installation, cable handling, transformer support,
            and routine maintenance. The candidate should be physically fit,
            comfortable working in outdoor conditions, and able to follow safety
            instructions carefully. Basic knowledge of electrical equipment and
            tools is an advantage.The candidate should be reliable, punctual,
            and able to work in a team.
          </p>
        </div>

        <div className="drop-shadow-2xl bg-black/40 text-white shadow-2xl hover:scale-101 transition duration-300  my-6 rounded-2xl text-sm sm:text-base mx-10 px-5 py-7 tracking-widest">
          <div>
            <h2 className="text-xl font-semibold">Management Roles</h2>
            <div className="w-full my-2 h-[1px] bg-gray-600 mx-auto"></div>
            <p>
              We are looking for a dynamic and results-oriented individual to
              join our team in a management role focused on overseeing daily
              operations, driving strategic initiatives, and ensuring the smooth
              functioning of our business processes. The ideal candidate should
              have a strong background in business administration, operations,
              or team leadership, with the ability to manage cross-functional
              teams and deliver results under pressure. Key responsibilities
              include setting goals, monitoring performance, streamlining
              workflows, coordinating with various departments, and contributing
              to long-term business growth.
            </p>
          </div>
        </div>

        <div className="drop-shadow-2xl bg-black/40 text-white shadow-2xl hover:scale-101 transition duration-300  my-6 rounded-2xl text-sm sm:text-base mx-10 px-5 py-7 tracking-widest">
          <div>
            <h2 className="text-xl font-semibold">
              Telecom Field Technician / Labourer
            </h2>
            <div className="w-full my-2 h-[1px] bg-gray-600 mx-auto"></div>
            <p>
              We help motivated and technically skilled individuals for the
              position of Telecom Field Technician / Labourer to assist with
              installation, maintenance, and repair of telecom infrastructure.
              The role involves working on-site to lay fiber cables, install
              network equipment (like routers, switches, and junction boxes),
              climb towers if required, and assist engineers in network setup
              and troubleshooting. Candidates must be physically fit, able to
              work outdoors in varied conditions, and willing to travel to
              multiple site locations. Basic understanding of telecom tools,
              cable laying, splicing, or related work is preferred. The
              candidate should be responsible, safety-conscious, and capable of
              following technical instructions from the site supervisor or
              engineer.
            </p>
          </div>
        </div>

        <div className="drop-shadow-2xl bg-black/40 text-white shadow-2xl hover:scale-101 transition duration-300  my-6 rounded-2xl text-sm sm:text-base mx-10 px-5 py-7 tracking-widest">
          <h2 className="text-xl font-semibold">Explore More Opportunities</h2>
          <div className="w-full my-2 h-[1px] bg-gray-600 mx-auto"></div>
          <p>
            Apply now for the roles listed above and discover many other
            exciting job opportunities available with us.
          </p>
        </div>
        <Link
          to="/form"
          className="block w-max mx-auto rounded-xl hover:scale-105 px-5 py-3 backdrop-blur-md text-black/50 hover:bg-white/20 transition text-sm sm:text-lg font-semibold bg-white/10 shadow-2xl border border-white/20"
        >
          Apply Now
        </Link>
      </div>
    </section>
  );
};

export default Career;
