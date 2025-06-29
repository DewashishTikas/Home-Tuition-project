import React from "react";
import aboutBg from "../assets/images/aboutbg.png";
import about from "../assets/images/about.png";

const About = () => {
  return (
    <section>
      <div className="bg-white pb-10  mt-16 flex justify-around items-center bg-gradient-to-r from-blue-800 to-blue-400">
        <h1 className="text-white text-2xl md:text-4xl font-bold">ABOUT US</h1>
        <div>
          <img className="block my-auto" src={aboutBg} alt="handshaking" />
        </div>
      </div>
      <div className="bg-white py-4 md:px-4 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="md:w-4/5 w-full">
          <img
            src={about}
            alt="Professional handshake"
            className="md:rounded-2xl shadow-lg w-full object-contain lg:h-[400px] m-auto"
          />
        </div>

        <div className="md:w-3/4 w-full text-gray-800 md:px-0 px-5">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-blue-600">
            Who We Are
          </h2>
          <p className="mb-4 text-base md:text-lg leading-relaxed">
            Welcome to <strong>Home Tuition – Online Helping Network</strong>,a
            trusted support system offering personalized academic assistance
            right from the comfort of your home, where we connect people with
            reliable and skilled services in
            <strong> Home Tuition</strong> and the
            <strong> Bijli Vibhag (electricity department)</strong>.
          </p>
          <p className="mb-4 text-base md:text-lg leading-relaxed">
            We make it easy to find the right <strong>teacher</strong> or
            <strong> skilled worker</strong> — quickly, affordably, and
            efficiently. Whether you’re a student, a teacher, or a contractor
            looking for electrical labor, we’ve got you covered.
          </p>
          <p className="text-base md:text-xl leading-relaxed">
            Our mission is to bridge the gap between
            <strong> skills and demand</strong>, creating real opportunities for
            <strong> students, families, and professionals</strong> alike.
          </p>
        </div>
      </div>
      <p className="bg-white text-base md:text-xl leading-relaxed md:px-30 px-5 py-5">
        We’ve expanded our presence across several cities, including{" "}
        <strong>Bhopal</strong>,<strong> Indore</strong>,{" "}
        <strong>Gwalior</strong>, <strong>Morena </strong> and many more,
        bringing quality <strong>Home Tuition</strong> support closer to you.
      </p>
      <div className=" bg-gray-100 flex items-center justify-center p-6">
        <div className="max-w-3xl space-y-10">
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-blue-500 hover:scale-105 transition-all duration-150">
            <p className="text-base md:text-xl italic text-gray-700">
              "Climbing to the top demands strength, whether it is to the top of
              Mount Everest or to the top of your career."
            </p>
            <div className="text-right mt-4 text-blue-600 font-semibold">
              – Dr. A.P.J. Abdul Kalam
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-pink-500 hover:scale-105 transition-all duration-150">
            <p className="text-base md:text-xl italic text-gray-700">
              "Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work. And the only way to do great work is to love what you do. If
              you haven't found it yet, keep looking. Don't settle. As with all
              matters of the heart, you'll know when you find it."
            </p>
            <div className="text-right mt-4 text-pink-600 font-semibold">
              – Steve Jobs
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
