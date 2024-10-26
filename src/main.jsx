
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import StepFormProvider from './StepFormProvider.jsx'



createRoot(document.getElementById('root')).render(
  <StepFormProvider><App /></StepFormProvider>

)
