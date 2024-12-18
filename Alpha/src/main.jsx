import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CapabilitiesCard from './components/Cards/CapabilitiesCard'
import LimitationCard from './components/Cards/LimitationCard'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CapabilitiesCard />
    <LimitationCard/>
  </StrictMode>,
)
