import { useContext, useEffect, useState, useTransition } from "react";
import Button from "../Components/Button";
import { FormVacancyContext } from "../../contexts/formVacanciesContext";
import { useNavigate } from "react-router";
import LoadingPage from "../Components/LoadingPage";
import { useQuery } from "@tanstack/react-query";

export default function VacancySelector() {
  const [selectedVacancy, setSelectedVacancy] = useContext(FormVacancyContext);
  const navigate = useNavigate();

  async function fetchVacancies() {
    const response = await fetch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/user/vacancy`
    );
    const data = await response.json();
    if (!response.ok) throw new Error("Failed to fetch");
    return data.data; // assuming API response is { data: [...] }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVacancy) {
      navigate("/form");
    } else {
      alert("Please select a vacancy.");
    }
  };
  const {
    data: vacancies = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["vacancies"],
    queryFn: fetchVacancies,
  });
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
        Failed to load vacancies.
      </div>
    );
  }
  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-md h-[100vh] ">
   (
        <div className=" h-full ">
          <h2 className="text-4xl font-bold mb-4">Select a Vacancy</h2>
          {!!vacancies.length ? (
            <p className="text-xl text-gray-600">
              Please select your vacancy from the list below:
            </p>
          ) : (
            <p className="text-xl text-gray-600">No vacancies available.</p>
          )}
          <form
            onSubmit={handleSubmit}
            className="space-y-4 flex flex-col justify-between h-full"
          >
            <div>
              {" "}
              {!!vacancies.length &&
                vacancies.map((vacancy) => (
                  <label
                    key={vacancy.id}
                    className="flex items-center space-x-2 text-xl"
                  >
                    <input
                      required
                      type="radio"
                      value={vacancy.name}
                      checked={selectedVacancy === vacancy.name}
                      onChange={() => setSelectedVacancy(vacancy.name)}
                      className="accent-blue-600 my-4"
                    />
                    <span>{vacancy.name}</span>
                  </label>
                ))}
            </div>
            <Button type="submit" path={"/form"}>
              Next
            </Button>
          </form>
        </div>
      )
    </div>
  );
}
