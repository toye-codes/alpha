import "../index.css";
import menu from "../assets/menu.png";
import newchat from "../assets/newchat.png";
import logo from "../assets/logo.png";
import Navbar from "./NavBar";
import CapabilitiesCard from "./cards/CapabilitiesCard";
import { useState, useRef } from "react";
import SmallScreen from "./SmallScreen";


const App = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsVisible((prev) => !prev);
  };

    // An event to check if the Navbar is active
  const closeBar = () => {
    navRef.current ? navRef.current.click() : "";
  }

  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-indigo-900 to-[#1A284A] m-0 p-0">
      <header className="flex justify-between items-center w-screen ">
        <nav>
          <div
            className={`absolute transition-transform duration-1000 transform ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            }`}>
            <Navbar
              isVisible={isVisible}
              toggleNavbar={toggleNavbar}
              ref={navRef}
            />
          </div>
          <img
            src={menu}
            alt="menu"
            className="h-9 m-3"
            onClick={toggleNavbar}
          />
        </nav>
        <div>
          {" "}
          <h1 className="text-white text-2xl font-semibold text-center">
            Alpha
          </h1>
        </div>
        <img src={newchat} alt="newchat" className="h-7 m-3" />
      </header>

      <section className="">
        <div className="flex flex-col items-center mt-24">
          <img src={logo} alt="Alpha" />
        </div>

        <div className="flex flex-col items-center mt-6">
          <p className="text-xs font-medium text-white text-center w-96">
            Explore a world of endless knowledge, with limitless information to
            quench all your curiosity. Discover all you’ve ever wanted to with
            Alpha.
          </p>
        </div>

        <div>
          <SmallScreen />
        </div>
      </section>
    </main>
  );
};

export default App;
