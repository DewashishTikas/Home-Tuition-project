import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import { MdDelete, MdLink } from "react-icons/md";
export const UsersProfile = () => {
  const [userProfileData, setUserProfileData] = useState([]);

  async function getAllUserProfile() {
    const response = await fetch("/getAllUserData");
    if (response.status === 403) {
      console.log("Unauthorized access");
      navigate("/adminLogin");
    }
    const data = await response.json();
    if (response.ok) {
      setUserProfileData(data);
    } else {
      console.log("Something went wrong");
    }
  }
  async function handleDelete(id) {
    const response = await fetch("/deleteUserProfile", {
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
      method: "Delete",
    });
    if (response.status === 403) {
      console.log("Unauthorized access");
      navigate("/adminLogin");
    }
    if (response.ok) {
      console.log("Deleted");
      await getAllUserProfile();
    }
  }
  useEffect(() => {
    (async () => {
      await getAllUserProfile();
    })();
  }, []);
  return (
    <div className="my-5 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      {" "}
      <table className="border-black border-b-[1px] mx-auto  min-w-full">
        <caption className=" my-2 text-3xl font-bold">Users Profile</caption>
        <thead>
          <tr className="bg-blue-400">
            <th className="border-black border-b-[1px] px-4 py-2 text-2xl">
              Name
            </th>
            <th className="border-black border-b-[1px] px-4 py-2 text-2xl">
              Email
            </th>
            <th className="border-black border-b-[1px] px-4 py-2 text-2xl">
              Phone no
            </th>
            <th className="border-gray-600 border-b-[1px] px-4 py-2 text-2xl">
              Resume
            </th>
            <th className="border-gray-600 border-b-[1px] px-4 py-2 text-2xl">
              LinkedIn URL
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userProfileData.map(
            ({
              id,
              name: userName,
              email,
              phoneNo,
              linkedinUrl,
              resumeUrl,
            }) => {
              return (
                <tr className="bg-blue-200 hover:bg-blue-300" key={id}>
                  <td className="text-center border-gray-600 border-b-[1px] px-4 py-2">
                    {userName}
                  </td>
                  <td className="text-center border-gray-600 border-b-[1px] px-4 py-2">
                    {email}
                  </td>
                  <td className="text-center border-gray-600 border-b-[1px] px-4 py-2">
                    {phoneNo}
                  </td>
                  <td className=" border-gray-600 border-b-[1px] px-4 py-2">
                    <a
                      target="_blank"
                      className="flex justify-center"
                      href={resumeUrl}
                    >
                      <MdLink />
                    </a>
                  </td>
                  <td className=" border-gray-600 border-b-[1px] px-4 py-2">
                    <a
                      target="_blank"
                      className="flex justify-center"
                      href={linkedinUrl}
                    >
                      <MdLink />
                    </a>
                  </td>
                  <td className=" border-gray-600 border-b-[1px] px-4 py-2">
                    <FaTrash
                      className="text-red-500 cursor-pointer"
                      onClick={async () => {
                        await handleDelete(id);
                      }}
                      size={16}
                    />
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </div>
  );
};
