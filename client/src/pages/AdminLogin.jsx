import { useState } from "react";
import InputComp from "../Components/InputComp";
import LoadingPage from "../Components/LoadingPage";
import { useNavigate } from "react-router";
import { useTransition } from "react";

const AdminLogin = () => {
  const [adminUserName, setAdminUserName] = useState("");
  const [adminPass, setAdminPass] = useState("");
  const [isPending,startTransition] = useTransition()
  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
startTransition(async () => {
  try {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/admin/login`,
      {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ adminUserName:adminUserName.trim(), adminPass:adminPass.trim() }),
      }
    );
    if (response.status === 200) {
      navigate("/admin");
    } else {
      navigate("/");
    }
  } catch (err) {
    console.log(err);
  }
});
  }

  return (
    <div className="flex flex-col justify-center items-center h-[100vh] bg-gray-100">
      {isPending ? (
        <LoadingPage />
      ) : (
        <div className="shadow-xl px-10 sm:px-20 py-15 bg-white rounded-2xl md:w-1/2 w-3/4">
          <h1 className="text-center text-3xl font-semibold">Admin Login</h1>
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
            <button className="cursor-pointer  bg-red-500 py-2 px-4 rounded flex items-center justify-center mx-auto my-5 text-white ">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default AdminLogin;
