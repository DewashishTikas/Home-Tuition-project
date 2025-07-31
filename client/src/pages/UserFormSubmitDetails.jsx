import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { FaTrash } from "react-icons/fa";
import LoadingPage from "../Components/LoadingPage";

const UserFormSubmitDetails = () => {
  const navigate = useNavigate();

  // Fetch function
  async function getAllUserDetails() {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/admin/applications`,
      {
        credentials: "include",
      }
    );

    if (response.status === 403) {
      throw new Error("Unauthorized");
    }

    const { data: user } = await response.json();

    if (!response.ok) {
      throw new Error("Something went wrong");
    }

    return user;
  }

  // useQuery
  const {
    data: userDetails = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["user-form-details"],
    queryFn: getAllUserDetails,
  });

  // Delete handler
  async function handleDelete(id) {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/admin/applications`,
      {
        credentials: "include",
        method: "DELETE",
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
      await refetch(); // refresh list
    } else {
      console.error("Delete failed");
    }
  }

  if (error?.message === "Unauthorized") {
    navigate("/adminLogin");
    return null;
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
        Failed to load user details.
      </div>
    );
  }

  return (
    <section>
      <h1 className="text-center text-4xl font-bold my-6">Users Data</h1>
      {userDetails.map((user) => (
        <div
          key={user._id}
          className="sm:max-w-3/4 mx-auto bg-white rounded-2xl shadow-md p-6 border space-y-6"
        >
          <div className="flex items-center">
            <div className="flex items-start sm:items-center sm:flex-row flex-col justify-items-center">
              {user.photoId && (
                <img
                  src={`${import.meta.env.VITE_SERVER_BASE_URL}/admin/file/${
                    user.photoId
                  }`}
                  alt="User Photo"
                  className="w-24 h-24 object-cover rounded mt-2"
                />
              )}
              <div className="sm:mx-20 mt-3">
                <h2 className="text-3xl font-bold">{user.name}</h2>
                <p className="text-gray-600 text-sm">{user.post}</p>
              </div>
            </div>
            <div
              className="ml-auto mr-5 flex gap-3 cursor-pointer"
              onClick={() => handleDelete(user._id)}
            >
              <FaTrash className="text-red-500" size={24} />
              Delete User Details
            </div>
          </div>

          {/* Personal Details */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-2">
              Personal Details
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Father:</strong> {user.fatherName}
              </div>
              <div>
                <strong>Mother:</strong> {user.motherName}
              </div>
              <div>
                <strong>DOB:</strong> {user.DOB}
              </div>
              <div>
                <strong>Category:</strong> {user.category}
              </div>
              <div>
                <strong>Domicile:</strong> {user.mpDomicile}
              </div>
              <div>
                <strong>Qualification:</strong> {user.qualification}
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-2">
              Contact Info
            </h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>Mobile:</strong> {user.mobileNum}
              </div>
              <div>
                <strong>Alt Mobile:</strong> {user.mobileNumAlt}
              </div>
              <div>
                <strong>Email:</strong> {user.emailId}
              </div>
              <div className="col-span-2">
                <strong>Address:</strong> {user.address}
              </div>
            </div>
          </section>

          {/* Documents */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-2">Documents</h3>
            <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
              <div>
                <strong>
                  <a
                    href={`${import.meta.env.VITE_SERVER_BASE_URL}/admin/file/${
                      user.marksheetId
                    }`}
                    target="_blank"
                  >
                    Marksheet
                  </a>
                </strong>
              </div>
              <div>
                <strong>
                  <a
                    href={`${import.meta.env.VITE_SERVER_BASE_URL}/admin/file/${
                      user.resumeId
                    }`}
                    target="_blank"
                  >
                    Resume
                  </a>
                </strong>
              </div>
              {user.signatureId && (
                <div>
                  <strong>Signature:</strong>
                  <img
                    src={`${import.meta.env.VITE_SERVER_BASE_URL}/admin/file/${
                      user.signatureId
                    }`}
                    alt="Signature"
                    className="w-28 h-16 object-contain mt-2"
                  />
                </div>
              )}
            </div>
          </section>

          {/* Other */}
          <section>
            <h3 className="text-lg font-semibold border-b mb-2">Other</h3>
            <div className="text-sm text-gray-700">
              <div>
                <strong>Reference:</strong> {user.referenceName}
              </div>
              <div>
                <strong>Question:</strong> {user.question}
              </div>
            </div>
          </section>
        </div>
      ))}
    </section>
  );
};

export default UserFormSubmitDetails;
