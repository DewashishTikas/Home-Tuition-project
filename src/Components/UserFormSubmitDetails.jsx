import { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
const UserFormSubmitDetails = () => {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    (async () => {
      // await getAllUserDetails();
    })();
  }, []);
  async function getAllUserDetails() {
    const response = await fetch("/userForm");
    if (response.status === 403) {
      console.log("Unauthorized access");
      navigate("/adminLogin");
    }
    if (response.ok) {
      const data = await response.json();
      setUserDetails(data);
    } else {
      console.log("Something went wrong");
    }
  }
  async function handleDelete(id) {
    const response = await fetch("/deleteUserDetails", {
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

  return (
    <>
      <section>
        <h1 className="text-center text-4xl font-bold my-6">Users Data</h1>
        {userDetails.map((user) => {
          return (
            <div className="max-w-3/4  mx-auto bg-white rounded-2xl shadow-md p-6 border space-y-6">
              <div className="flex items-center">
                {user.photo && (
                  <div>
                    <img
                      src={user.photo}
                      alt="User Photo"
                      className="w-24 h-24 object-cover rounded mt-2"
                    />
                  </div>
                )}
                <div className="mx-20">
                  <h2 className="text-3xl font-bold">{user.name}</h2>
                  <p className="text-gray-600 text-sm">{user.post}</p>
                </div>
                <div
                  className="ml-auto mr-5 flex gap-3 cursor-pointer"
                  onClick={async () => {
                    await handleDelete(id);
                  }}
                >
                  <FaTrash className="text-red-500 " size={24} />
                  Delete User Details
                </div>
              </div>
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
                    <strong>DOB:</strong> {user.Dob}
                  </div>
                  <div>
                    <strong>Category:</strong> {user.category}
                  </div>
                  <div>
                    <strong>Domicile:</strong> {user.domicile}
                  </div>
                  <div>
                    <strong>Qualification:</strong> {user.qualification}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold border-b mb-2">
                  Contact Info
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>Mobile:</strong> {user.mobile}
                  </div>
                  <div>
                    <strong>Alt Mobile:</strong> {user.mobileAlternative}
                  </div>
                  <div>
                    <strong>Email:</strong> {user.email}
                  </div>
                  <div className="col-span-2">
                    <strong>Address:</strong> {user.address}
                  </div>
                </div>
              </section>

              <section>
                <h3 className="text-lg font-semibold border-b mb-2">
                  Documents
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-700">
                  <div>
                    <strong>
                      <a href={user.markSheet}>Marksheet</a>
                    </strong>
                  </div>
                  <div>
                    <strong>
                      <a href={user.resume}>Resume</a>
                    </strong>
                  </div>

                  {user.signature && (
                    <div>
                      <strong>Signature:</strong>
                      <img
                        src={user.signature}
                        alt="Signature"
                        className="w-28 h-16 object-contain mt-2"
                      />
                    </div>
                  )}
                </div>
              </section>

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
          );
        })}
      </section>
    </>
  );
};

export default UserFormSubmitDetails;
