import React, { useState } from "react";
import InputComp from "../Components/InputComp";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export default function Services() {
  const [message, setMessage] = useState("");
  const [fileSizeError,setFileSizeError] = useState("")
  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    console.log(form[4].files[0].size);
    if (form[4].files[0].size > 1024 * 1024) {
      setFileSizeError(
        "The file size is too large. Kindly give the file upto 1 MB size"
      );
          setTimeout(() => {
            setFileSizeError("");
          }, 5000);
      return;
    }
    const formData = new FormData(form);

    const phoneno = e.target[3].value;
    formData.append("phoneNo", phoneno);
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/user/profile`,
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    if (data.error) {
      return console.log("Something went wrong");
    }
    setMessage("Profile added successfully");
    setTimeout(() => {
      setMessage("");
    }, 5000);
  }
  const [phone, setPhone] = useState("");
  return (
    <>
      <div className=" overflow-hidden absolute w-full h-[900px] ">
        <div className="w-[170%] h-1/2 absolute -left-45 -top-5 sm:top-40 bg-blue-600 rotate-150 "></div>
      </div>
      <div className="relative">
        <h1 className="md:text-4xl font-bold mt-30 my-10 text-center text-2xl">
          Add Profile
        </h1>
      </div>
      <div className="max-w-4/5 rounded-xl mx-auto relative shadow-2xl mb-20 px-10 py-0.5 bg-white">
        <form
          onSubmit={async (e) => {
            await handleSubmit(e);
          }}
          encType="multipart/form-data"
        >
          <InputComp type={"text"} >Full Name</InputComp>
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
          <p className="text-red text-xs">{fileSizeError}</p>
          <InputComp
            type={"url"}
            notrequired={"true"}
            pattern=".*linkedin\.com.*"
            title="Enter a valid LinkedIn profile URL"
          >
            LinkedIn URL
          </InputComp>
          <div className="my-10 text-center mx-auto w-max">
            <button
              tabIndex={-1}
              className={`cursor-pointer transition duration-700 font-semibold md:text-lg md:px-8 md:py-2 px-4 py-1  text-base ${
                !message ? "bg-blue-400" : "bg-green-400"
              } rounded flex items-center justify-center text-white cursor-pointer`}
            >
              {!message ? "Add Profile" : "Profile Added"}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
