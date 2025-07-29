import { useState, Suspense } from "react";
import InputComp from "../Components/InputComp";
import { useNavigate } from "react-router";
import Loading from "../Components/Loader";
import LoadingFallback from "./LoadingFallback";
import LoadingPage from "../Components/LoadingPage";
import { useQuery, useQueryClient } from "@tanstack/react-query";

const fetchVacancies = async () => {
  const res = await fetch(
    `${import.meta.env.VITE_SERVER_BASE_URL}/user/vacancy`
  );
  const data = await res.json();
  if (data.error) throw new Error(data.error);
  return data.data;
};

const AdminPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const [post, setPost] = useState("");
  const [message, setMessage] = useState("");
  const [deletingId, setDeletingId] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    data: vancancies = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["vacancies"],
    queryFn: fetchVacancies,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/admin/vacancy`,
        {
          method: "POST",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ post }),
        }
      );

      if (res.status === 403) {
        navigate("/adminLogin");
        return;
      }

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Post Added");
        queryClient.invalidateQueries({ queryKey: ["vacancies"] });
        setPost("");
      } else {
        setMessage(data.error || "Something went wrong");
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setTimeout(() => setMessage(""), 4000);
      setIsSubmitting(false);
    }
  };

  const handleDelete = async (vacancyId) => {
    setDeletingId([...deletingId, vacancyId]);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_SERVER_BASE_URL}/admin/vacancy`,
        {
          method: "DELETE",
          credentials: "include",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ vacancyId }),
        }
      );

      if (res.status === 403) {
        navigate("/adminLogin");
        return;
      }

      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || "Vacancy Deleted");
        queryClient.invalidateQueries({ queryKey: ["vacancies"] });
      } else {
        setMessage(data.error || "Delete failed");
      }
    } catch (err) {
      setMessage("Network error");
    } finally {
      setDeletingId((prev) => prev.filter((id) => id !== vacancyId));
      setTimeout(() => setMessage(""), 4000);
    }
  };

  return (
    <Suspense fallback={<LoadingFallback />}>
      {isPending ? (
        <div className="min-h-screen flex items-center justify-center">
          <LoadingPage />
        </div>
      ) : (
        <section className="w-4/5 mx-auto">
          <h1 className="text-center text-4xl font-bold my-6">
            Add or Remove Post
          </h1>

          <form className="my-10" onSubmit={handleSubmit}>
            <InputComp value={post} setValue={setPost} type="text">
              Enter Post
            </InputComp>
            <button
              type="submit"
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-blue-300" : "bg-blue-500"
              } text-white w-30 h-10 my-5 rounded-md px-4 py-2`}
            >
              {isSubmitting ? (
                <div className="flex items-center justify-center">
                  <Loading border="blue-500" paddinginline={0} />
                </div>
              ) : (
                "Add"
              )}
            </button>
          </form>

          {message && <p className="absolute">{message}</p>}

          <div className="relative top-10">
            <h1 className="text-2xl my-3">Vacancies</h1>
            {vancancies.map((vacancy) => (
              <div
                key={vacancy.id}
                className="flex justify-between items-center text-lg"
              >
                <p>{vacancy.name}</p>
                <button
                  onClick={() => handleDelete(vacancy.id)}
                  className={`cursor-pointer px-4 py-2 rounded my-1 text-white flex items-center justify-center ${
                    deletingId.includes(vacancy.id)
                      ? "bg-red-300"
                      : "bg-red-600"
                  }`}
                >
                  {deletingId.includes(vacancy.id) ? (
                    <Loading border="red-600" paddinginline={4} />
                  ) : (
                    "Delete"
                  )}
                </button>
              </div>
            ))}
          </div>
        </section>
      )}
    </Suspense>
  );
};

export default AdminPost;
