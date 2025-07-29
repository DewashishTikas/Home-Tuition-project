import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { FaTrash } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import LoadingPage from "../Components/LoadingPage";

export const UsersProfile = () => {
  const navigate = useNavigate();

  // ✅ Fetch user profile data
  async function getAllUserProfile() {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/admin/profile`,
      { credentials: "include" }
    );

    if (response.status === 403) {
      throw new Error("Unauthorized");
    }

    const { data } = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return data;
  }

  const {
    data: userProfileData = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user-profiles"],
    queryFn: getAllUserProfile,
  });

  async function handleDelete(id) {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/admin/profile`,
      {
        method: "DELETE",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      }
    );

    if (response.status === 403) {
      navigate("/adminLogin");
      return;
    }

    if (response.ok) {
      console.log("Deleted");
      await refetch(); // ✅ Refresh list after delete
    } else {
      console.error("Delete failed");
    }
  }

  if (error?.message === "Unauthorized") {
    navigate("/adminLogin");
  }

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingPage />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-600">
        Failed to load user profiles.
      </div>
    );
  }

  return (
    <div className="my-5 min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <table className="border-black border-b-[1px] mx-auto min-w-full">
        <caption className="my-2 text-3xl font-bold">Users Profile</caption>
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
            ({ _id: id, userName, email, phoneNo, linkedInUrl, resumeId }) => (
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
                <td className="border-gray-600 border-b-[1px] px-4 py-2">
                  <a
                    target="_blank"
                    className="flex justify-center"
                    href={`${
                      import.meta.env.VITE_SERVER_BASE_URL
                    }/admin/file/${resumeId}`}
                  >
                    <MdLink />
                  </a>
                </td>
                <td className="border-gray-600 border-b-[1px] px-4 py-2">
                  <a
                    target="_blank"
                    className="flex justify-center"
                    href={linkedInUrl}
                  >
                    <MdLink />
                  </a>
                </td>
                <td className="border-gray-600 border-b-[1px] px-4 py-2">
                  <FaTrash
                    className="text-red-500 cursor-pointer"
                    onClick={() => handleDelete(id)}
                    size={16}
                  />
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};
