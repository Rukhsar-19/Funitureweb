import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './Styles/Commonstyles.scss'
import App from './App.tsx'
import "remixicon/fonts/remixicon.css";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
