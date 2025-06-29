import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import FormVacancyProvider from '../contexts/formVacanciesContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FormVacancyProvider >
    <App />
    </FormVacancyProvider>
  </StrictMode>,
)
