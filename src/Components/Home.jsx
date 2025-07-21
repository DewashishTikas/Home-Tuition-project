import React, { useEffect, useRef, useState } from "react";
import Button from "./Button";
import Carousal from "./Carousal";
import { useOutletContext } from "react-router";
import book from "../assets/images/booktutor.jpg";
import labour from "../assets/images/labour.jpg";
import labourwork from "../assets/images/labourwork.jpg";
import hospital from "../assets/images/hospital-sector.jpg";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
const Home = (props) => {
  const { setCurrentRef } = useOutletContext();
  const elementRef = useRef();
  const homeTutorRef = useRef();
  const bijliRef = useRef();
  const labourRef = useRef();
  const hospitalRef = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from(homeTutorRef.current, {
      x: "-100%",
      duration: 1.75,
      opacity: 0,
      scrollTrigger: {
        trigger: homeTutorRef.current,
        start: "top bottom",
        end: "bottom 20%",
      },
    });
    gsap.from(bijliRef.current, {
      x: "100%",
      duration: 1.75,
      opacity: 0,
      scrollTrigger: {
        trigger: bijliRef.current,
        start: "top bottom",
        end: "bottom 20%",
      },
    });

    gsap.from(labourRef.current, {
      x: "-100%",
      duration: 1.75,
      opacity: 0,
      scrollTrigger: {
        trigger: labourRef.current,
        start: "top bottom",
        end: "bottom 20%",
      },
    });
    gsap.from(hospitalRef.current, {
      x: "100%",
      duration: 1.75,
      opacity: 0,
      scrollTrigger: {
        trigger: hospitalRef.current,
        start: "top bottom",
        end: "bottom 20%",
      },
    });
  });

  useEffect(() => {
    setCurrentRef(elementRef.current);
  }, [elementRef]);

  return (
    <>
      <Carousal />
      <div ref={elementRef}>
        <div
          ref={homeTutorRef}
          className="flex sm:flex-row flex-col shadow-[0_0px_8px_rgba(0,0,0,0.1)] my-10 py-10 px-5 gap-8"
        >
          <h2 className="lg:text-5xl text-3xl lg:mt-10 sm:hidden block font-semibold">
            Become a Tutor
          </h2>
          <p className="lg:text-xl -my-4 text-lg font-semibold sm:hidden block">
            Home Tuition
          </p>
          <div className="max-w-full sm:max-w-1/2">
            <img loading="lazy" src={book} alt="Tutor Image" />
          </div>

          <div>
            <h2 className="lg:text-5xl text-3xl lg:mt-10 sm:block hidden">
              <b>Become a Tutor</b>
            </h2>
            <p className="lg:text-xl my-5 text-lg font-semibold sm:block hidden">
              Home Tuition
            </p>
            <p className="lg:text-xl my-5 text-lg text-justify">
              Joining as a tutor means becoming part of a trusted network that
              empowers learners while offering you flexible earning
              opportunities and personal growth.
            </p>
            <div className=" sm:w-full w-fit mx-auto">
              <Button path={"/vacancies"}>Apply Now</Button>
            </div>
          </div>
        </div>
        <div
          ref={bijliRef}
          className="flex sm:flex-row flex-col shadow-[0_0px_8px_rgba(0,0,0,0.1)] my-10 py-10 px-5 gap-8"
        >
          <div className="sm:max-w-1/2">
            <h2 className="lg:text-5xl text-2xl md:text-3xl lg:mt-10 ">
              <b>Bijli Vibhag Labour</b>
            </h2>
            <div className="max-w-full ">
              <img
                loading="lazy"
                className="block sm:hidden mt-4"
                src={labour}
                alt="Tutor Image"
              />
            </div>
            <p className="lg:text-xl my-5 md:text-lg text-base text-justify">
              We connect experienced and dedicated labourers with Bijli Vibhag
              projects to ensure smooth execution of electrical tasks—from setup
              to maintenance. Whether it’s for government contracts or local
              needs, our workforce is committed to safety, efficiency, and
              reliability.
            </p>{" "}
            <div className=" sm:w-full w-fit mx-auto">
              <Button path={"/vacancies"}>Apply Now</Button>
            </div>
          </div>
          <div className="max-w-1/2">
            <img
              loading="lazy"
              className="sm:block hidden "
              src={labour}
              alt="Bijli Vibhag"
            />
          </div>
        </div>
        <div
          ref={labourRef}
          className="flex sm:flex-row flex-col shadow-[0_0px_8px_rgba(0,0,0,0.1)] my-10 py-10 px-5 gap-8"
        >
          <h2 className="lg:text-5xl text-3xl lg:mt-10 sm:hidden block font-semibold">
            Local Labours
          </h2>

          <div className="max-w-full ">
            <img loading="lazy" src={labourwork} alt="Tutor Image" />
          </div>

          <div className="sm:max-w-1/2">
            <h2 className="lg:text-5xl sm:text-3xl text-3xl lg:mt-20 sm:block hidden">
              <b>Local Labours</b>
            </h2>

            <p className="lg:text-xl my-5 text-base text-justify">
              We believe in the strength of our local workforce — skilled,
              dependable, and deeply rooted in the community — offering quality
              labour solutions that drive progress, empower livelihoods, and
              ensure every project is built with care, commitment, and pride. We
              connect skilled labour with local job opportunities, empowering
              workers to find meaningful, nearby employment.
            </p>
            <div className="w-fit sm:w-full mx-auto">
              <Button path={"/vacancies"}>Apply Now</Button>
            </div>
          </div>
        </div>
        <div
          ref={hospitalRef}
          className="flex sm:flex-row flex-col shadow-[0_0px_8px_rgba(0,0,0,0.1)] my-10 py-10 px-5 gap-8"
        >
          <div className="sm:max-w-1/2">
            <h2 className="lg:text-5xl text-2xl md:text-3xl lg:mt-10 ">
              <b>Hospital Sector</b>
            </h2>
            <div className="max-w-full ">
              <img
                loading="lazy"
                className="block sm:hidden mt-4"
                src={hospital}
                alt="Hospital"
              />
            </div>
            <p className="lg:text-xl my-5 md:text-lg text-base text-justify">
              We are looking for compassionate professionals to join our
              healthcare team. From clinical to administrative roles, every team
              member plays a vital role in patient care and hospital operations.
              Duties may include patient support, record management, diagnostic
              assistance, and ensuring a safe, welcoming environment in line
              with healthcare standards.
            </p>{" "}
            <div className=" sm:w-full w-fit mx-auto">
              <Button path={"/vacancies"}>Apply Now</Button>
            </div>
          </div>
          <div className="max-w-1/2">
            <img
              loading="lazy"
              className="sm:block hidden "
              src={hospital}
              alt="Hospital Sector"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
