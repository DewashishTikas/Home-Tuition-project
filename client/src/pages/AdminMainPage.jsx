import { Suspense, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import LoadingFallback from "./LoadingFallback";

const AdminMainPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    try {
      (async () => {
        const response = await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/admin`, {
          credentials: "include",
        });
        if (response.status !== 200) {
          console.log("Unauthorized access");
          navigate("/adminLogin");
        }
        const data = await response.json()
        console.log(data);
      })()
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <Suspense fallback={<LoadingFallback />}>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-gray-800">Admin Page</h1>
            <p className="text-gray-500 mt-2">
              Manage your application from here
            </p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Link
              to="/adminPost"
              className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Vacancies
              </h2>
              <p className="text-sm text-gray-500">Add or remove vacancy</p>
            </Link>

            <Link
              to="/usersProfile"
              className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                Users Profile
              </h2>
              <p className="text-sm text-gray-500">View users profile</p>
            </Link>

            <Link
              to="/usersFormDetails"
              className="bg-white shadow-md hover:shadow-xl transition p-6 rounded-2xl text-center"
            >
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                View Users Data
              </h2>
              <p className="text-sm text-gray-500">Configure your app</p>
            </Link>
          </div>
        </div>
      </div>
    </Suspense>
  );
};

export default AdminMainPage;
