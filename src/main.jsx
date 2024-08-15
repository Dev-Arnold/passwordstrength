import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './style.css'
import PasswordStrengthChecker from './PasswordStrengthChecker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <PasswordStrengthChecker/>
  </StrictMode>,
)
