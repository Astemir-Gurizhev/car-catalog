import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Home from './components/screens/home/home'
import "./assets/styles/global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
