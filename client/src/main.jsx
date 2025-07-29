import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FormVacancyProvider from "../contexts/formVacanciesContext.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <FormVacancyProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </FormVacancyProvider>
  </StrictMode>
);
