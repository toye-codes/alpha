import React, { useState, useEffect, useRef } from "react";
import "../index.css";
import menu from "../assets/menu.png";
import newchat from "../assets/newchat.png";
import logo from "../assets/logo.png";
import send from "../assets/send.png";
import Navbar from "./NavBar";
import SmallScreen from "./SmallScreen";
import LargeScreen from "./LargeSreen";


const App = () => {
  const [isVisible, setIsVisible] = useState(false); 
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 1024); 
  const navRef = useRef();

  const toggleNavbar = () => {
    setIsVisible((prev) => !prev);
  };


  const closeBar = () => {
    navRef.current ? navRef.current.click() : "";
  };

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };
    handleResize();

    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);




    


  return (
    <main className="w-screen min-h-screen bg-gradient-to-r from-indigo-900 to-[#1A284A] overflow-hidden">
      <header className="flex justify-between mt-5">
        <nav>
          <div
            className={`min-h-screen w-full grid grid-cols-[1fr_4fr] absolute transition-transform duration-1000 transform ${
              isVisible ? "translate-x-0" : "-translate-x-full"
            }`}>
            <Navbar
              isVisible={isVisible}
              toggleNavbar={toggleNavbar}
              ref={navRef}
            />
            <div className="bg-indigo-900 bg-opacity-80"></div>
          </div>
          <img
            src={menu}
            alt="menu"
            className="h-9 lg:h-11"
            onClick={toggleNavbar}
          />
        </nav>
        <div>
          <h1 className="text-white text-2xl font-semibold text-center">
            Alpha
          </h1>
        </div>
        <img src={newchat} alt="newchat" className="h-7 md:h-9" />
      </header>

      <section>
        <div className="flex flex-col items-center mt-5 lg:-mt">
          <img src={logo} alt="Alpha" />
        </div>

        <div className="flex flex-col items-center mt-6">
          <p className="text-xs font-medium text-white text-center w-96">
            Explore a world of endless knowledge, with limitless information to
            quench all your curiosity. Discover all you’ve ever wanted to with
            Alpha.
          </p>
        </div>

        <div className="flex flex-col items-center">
          {isLargeScreen ? <LargeScreen /> : <SmallScreen />}
        </div>

        <div className="flex flex-col items-center max-h-screen">
          <div className="flex flex-auto gap-20 lg:gap-96 p-1 mt-5 mb-3 shadow-white shadow-sm border-stone-50">
            <input
              type="text"
              placeholder="Enter your prompt......."
              className="text-xl bg-transparent text-white outline- text-center mt-4"
            />
              
            

            <button>
              <img src={send} alt="send" className="w-14" />
            </button>
          </div>
          <p className="text-white text-center w-80 lg:w-fit mt-5 mb-5 ">
            Alpha might make mistakes. Please ensure you cross check important
            information.
          </p>
        </div>
      </section>
    </main>
  );
};

export default App;
