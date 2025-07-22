import { useContext, useEffect, useState } from "react";
import Button from "./Button";
import { FormVacancyContext } from "../../contexts/formVacanciesContext";
import { useNavigate } from "react-router";

export default function VacancySelector() {
    const [vacancies, setVacancies] = useState([]);
    const [selectedVacancy, setSelectedVacancy] = useContext(FormVacancyContext);
    const navigate = useNavigate()
  useEffect(() => {
    // (async () => {
    //   try {
    //     const response = await fetch("/api/vacancies"); 
    //     const data = await response.json();
    //     setVacancies(data);
    //   } catch (error) {
    //     console.error("Error fetching vacancies:", error);
    //   }
    // })();
    setVacancies([{ name: "Job2", id: "123" }]);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedVacancy) {
      navigate('/form')
    } else {
      alert("Please select a vacancy.");
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-gray-100 rounded-xl shadow-md h-[100vh] ">
      <div className=" h-full ">
        <h2 className="text-4xl font-bold mb-4">Select a Vacancy</h2>
        <form
          onSubmit={handleSubmit}
          className="space-y-4 flex flex-col justify-between h-full"
        >
          <div>
            {" "}
            {vacancies.map((vacancy) => (
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
          <Button
            type="submit"
            path={'/form'}
          >
            Next
          </Button>
        </form>
      </div>
    </div>
  );
}
