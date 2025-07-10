import React, { useEffect, useState } from "react";
import contact from "../assets/images/contactbg.png";

const Contact = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phoneno: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [phonenoErr, setPhonenoErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);

  const errMessages = {
    phonenoErr: "Phone no should contains 10 digits",
    emailErr: "Enter valid Email",
  };
  function handleChange({ name, value }) {
    setData({ ...data, [name]: value });
    if (name === "phoneno") setPhonenoErr(false);
    if (name === "email") setEmailErr(false);
  }
  async function handleSubmit(e) {
    let hasError = false;
    e.preventDefault();
    if (!data.phoneno || data.phoneno.length !== 10) {
      setPhonenoErr(true);
      hasError = true;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email?.trim())) {
      setEmailErr(true);
      hasError = true;
    }
    if (hasError) {
      return;
    }
    try {
      const response = await fetch("/contactForm", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (response.status === 200) {
        setSubmitted(true);
      } else {
        console.log("Something went wrong");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <section className=" mx-auto py-15 lg:py-23 mt-8">
        <div className="flex gap-7  flex-col lg:flex-row">
          <div className="items-self-stretch">
            <img
              className="lg:h-full w-full  h-46 object-cover object-center"
              src={contact}
              alt=""
            />
          </div>
          <div className="px-5">
            <h1 className="text-3xl md:text-4xl font-semibold mb-6  ">
              Maximize Your Business Potential
            </h1>

            <p className="text-base md:text-lg mb-6  text-black">
              Learn how our technology can enhance your business operations and
              workforce productivity.
            </p>

            <form
              onSubmit={(e) => {
                handleSubmit(e);
              }}
            >
              <div className="flex flex-wrap space-y-6">
                <div className="w-[45%] box-border mx-2">
                  <label htmlFor="firstName" className="block text-black">
                    First Name *
                  </label>
                  <input
                    name="firstName"
                    id="firstName"
                    type="text"
                    className={`w-full mt-1 p-2 border-t-0 border-x-0 border-1 border-gray-300 focus:border-black outline-none cursor-pointer `}
                    placeholder="Your first Name"
                    required
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                </div>
                <div className="w-[45%] box-border mx-2">
                  <label htmlFor="lastName" className="block text-black">
                    Last Name *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    className={`w-full mt-1 p-2 border-t-0 border-x-0 border-1 border-gray-300 focus:border-black outline-none cursor-pointer `}
                    placeholder="Your Last Name"
                    required
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                </div>

                <div className="w-[45%] box-border mx-2">
                  <label htmlFor="phoneno" className="block text-black">
                    Contact No. *
                  </label>
                  <input
                    type="tel"
                    name="phoneno"
                    id="phoneno"
                    className="w-full mt-1 p-2 border-t-0 border-x-0 border-1 border-gray-300 focus:border-black outline-none cursor-pointer"
                    placeholder="Your Contact No."
                    required
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                  {phonenoErr && <p>{errMessages.phonenoErr}</p>}
                </div>

                <div className="w-[45%] box-border mx-2">
                  <label htmlFor="email" className="block text-black">
                    Official Email ID *
                  </label>
                  <input
                    name="email"
                    type="email"
                    id="email"
                    className="w-full mt-1 p-2 border-t-0 border-x-0 border-1 border-gray-300 focus:border-black outline-none cursor-pointer"
                    placeholder="Your Email"
                    required
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                  />
                  {emailErr && <p>{errMessages.emailErr}</p>}
                </div>
                <div className="w-full ">
                  <label htmlFor="message" className="block text-black">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    rows={6}
                    className="w-full mt-1 p-2 border-1 border-gray-300 focus:border-black outline-none cursor-pointer"
                    placeholder="Your Message"
                    onChange={(e) => {
                      handleChange(e.target);
                    }}
                    required
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  className={`bg-blue-500 text-white text-lg px-6 py-2 rounded hover:bg-blue-800 transition ${
                    submitted ? "bg-green-500 pointer-events-none" : ""
                  } duration-700 `}
                >
                  {submitted ? "Submitted Successfully" : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
        <div className="mt-12 flex lg:flex-row flex-col md:justify-around md:gap-10 px-5">
          <h2 className="md:text-6xl text-2xl  font-semibold mb-4 text-blue-500 md:max-w-1/2">
            Contact Us for your needs
          </h2>
          <div className="mt-10 md:max-w-1/2 space-y-3">
            <p className="md:text-4xl text-xl">Mobile </p>
            <p className="md:text-3xl text-lg">
              <a href="tel:+91 8517967915">+91 8517967915</a>
            </p>
            <p className="md:text-4xl text-xl">E-mail </p>
            <p className="md:text-3xl text-lg ">
              <a href="mailto:pcsmartclasses@gmail.com">
                pcsmartclasses@gmail.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
