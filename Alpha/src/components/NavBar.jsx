import React from "react";
import UserCard from "./cards/UserCard";
import logo from "../assets/logo.png";
import { MessageSquare, Search, CreditCard, LifeBuoy, Heart, Settings, Info, X } from "lucide-react";


const Navbar = React.forwardRef((props, ref) => {
  const navItems = [
    { icon: <MessageSquare size={17} />, text: "Chat" },
    { icon: <Search size={17} />, text: "Search" },
    { icon: <CreditCard size={17} />, text: "Subscriptions" },
    { icon: <LifeBuoy size={17} />, text: "Support" },
    { icon: <Heart size={17} />, text: "Favorite prompts" },
    { icon: <Settings size={17} />, text: "Settings" },
    { icon: <Info size={17} />, text: "About Alpha" },
  ];

  return (
    <div className=" flex min-h-screen bg-indigo-800 rounded-xl w-auto">
      <Sidebar navItems={navItems} />
      <X
        size={30}
        ref={ref}
        onClick={props.toggleNavbar}
        className="text-white font-bold mt-4 mr-3"
      />
    </div>
  );
});

const Sidebar = ({ navItems }) => {
  return (
    <div className="relative inset-y-0 left-0 h-auto md:w-auto text-white pt-7 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-3 pb-7 ml-4">
        <img src={logo} alt="Alpha" className="h-10 " />
        <span className="text-base md:text-3xl font-semibold">Alpha</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          {navItems.map((item, index) => (
            <NavItem key={index} icon={item.icon} text={item.text} />
          ))}
        </ul>
      </nav>

      <div className="mt-52 pl-3 pb-3">
        <UserCard />
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, text }) => {
  return (
    <li>
      <button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
        <span className="text-white-300 ">{icon}</span>
        <span className="font-medium text-sm">{text}</span>
      </button>
    </li>
  );
};

export default Navbar;
