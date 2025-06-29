import React, { useState } from "react";
import InputComp from "./InputComp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; 

export default function Services() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className=" overflow-hidden absolute w-full h-[900px] ">
        <div className="w-[170%] h-1/2 absolute -left-45 -top-5 sm:top-40 bg-violet-600 rotate-150 "></div>
      </div>
      <div className="relative">
        <h1 className="md:text-4xl font-bold mt-30 my-10 text-center text-2xl">
          Add Profile
        </h1>
      </div>
      <div className="max-w-4/5 rounded-xl mx-auto relative shadow-2xl mb-20 px-10 py-0.5 bg-white">
        <form action="/" method="post">
          <InputComp type={"text"}>Full Name</InputComp>
          <InputComp type={"email"}>Email</InputComp>
          <div className="my-5">
            <label>Contact No.</label>
            <PhoneInput
              international
              defaultCountry="IN"
              value={phone}
              onChange={setPhone}
              placeholder="Enter phone number"
              className="phone-input border-b-[1px] py-2 border-gray-200 "
            />
          </div>
          <InputComp type={"file"}>Resume</InputComp>
          <InputComp type={"url"}>LinkedIn URL</InputComp>
          <div className="my-10 text-center mx-auto w-max">
            <button
              tabIndex={-1}
              className={`font-semibold md:text-lg md:px-8 md:py-2 px-4 py-1 text-base bg-blue-400 rounded flex items-center justify-center text-white `}
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
