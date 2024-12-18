import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CapabilitiesCard from './components/Cards/CapabilitiesCard'
import LimitationCard from './components/Cards/LimitationCard'
import PromptsCard from "./components/Cards/PromptsCard";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CapabilitiesCard />
    <LimitationCard />
    <PromptsCard />
  </StrictMode>
);
