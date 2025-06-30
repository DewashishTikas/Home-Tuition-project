import React, { useState } from "react";
import InputComp from "./InputComp";
import Button from "./Button";
import { useNavigate } from "react-router";

const  AdminLogin = () => {
  const [adminUserName,setAdminUserName] = useState()
  const [adminPass,setAdminPass] = useState()

  const navigate = useNavigate()
  async function handleSubmit(e) {
    e.preventDefault()
    try{
      const response = await fetch("/adminLogin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminUserName, adminPass }),
      });
      const data = await response.json();
      if (response.status === 200) {
        navigate("/adminPost");
      } else {
        navigate("/");
      }
    }
    catch(err){
      console.log(err);
    }
  }


  return (
    <div className="flex flex-col  justify-center items-center h-[100vh] bg-gray-100">
      <div className="shadow-xl px-40 py-15 bg-white rounded-2xl">
        <h1 className="text-center">Admin Login</h1>
        <form onSubmit={handleSubmit}>
          <InputComp
            value={adminUserName}
            setValue={setAdminUserName}
            type={"text"}
          >
            Username
          </InputComp>
          <InputComp
            value={adminPass}
            setValue={setAdminPass}
            type={"password"}
          >
            Password
          </InputComp>
          <Button css={"my-5"}>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
