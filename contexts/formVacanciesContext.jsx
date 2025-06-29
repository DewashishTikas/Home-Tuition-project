import {  createContext, useState } from "react";

export const FormVacancyContext = createContext()

export default function FormVacancyProvider({ children }) {
  const [selectedVacancy, setSelectedVacancy] = useState("");
  return (
    <FormVacancyContext.Provider value={[selectedVacancy, setSelectedVacancy]}>
      {children}
    </FormVacancyContext.Provider>
  );
}