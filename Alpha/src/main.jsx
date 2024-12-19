import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import UserCard from "./components/cards/UserCard";
import CapabilitiesCard from './components/Cards/CapabilitiesCard'
import LimitationCard from './components/Cards/LimitationCard'
import PromptsCard from "./components/Cards/PromptsCard";
import Login from './components/Login'
import Pricing from './components/Pricing';
import Navbar from './components/NavBar';


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
   
  </StrictMode>
);
