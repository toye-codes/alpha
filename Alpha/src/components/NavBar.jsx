import React from "react";
import UserCard from './cards/UserCard'
import logo from '../assets/logo.png'
import {
  MessageSquare,
  Search,
  CreditCard,
  LifeBuoy,
  Heart,
  Settings,
  Info,
} from "lucide-react";

const Sidebar = () => {
  return (
    <div className="fixed inset-y-0 left-0 w-auto bg-purple-900 text-white p-2 flex flex-col">
      {/* Logo Section */}
      <div className="flex items-center gap-3 pb-2 ">
        <img src={logo} alt="Alpha" className="h-10"/>
        <span className="text-2xl font-bold">Alpha</span>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1">
        <ul className="space-y-2">
          <NavItem icon={<MessageSquare size={20} />} text="Chat" />
          <NavItem icon={<Search size={20} />} text="Search" />
          <NavItem icon={<CreditCard size={20} />} text="Subscriptions" />
          <NavItem icon={<LifeBuoy size={20} />} text="Support" />
          <NavItem icon={<Heart size={20} />} text="Favorite prompts" />
          <NavItem icon={<Settings size={20} />} text="Settings" />
          <NavItem icon={<Info size={20} />} text="About Alpha" />
        </ul>
      </nav>

      <div className="mt-5">
        <UserCard/>
      </div>
    </div>
  );
};

// Navigation Item Component
const NavItem = ({ icon, text }) => {
  return (
    <li>
      <button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200">
        <span className="text-purple-300">{icon}</span>
        <span className="font-medium">{text}</span>
      </button>
    </li>
  );
};

// Main Layout Component that includes the Sidebar
const Navbar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 ">
      <Sidebar />
      <main className="ml-64 p-8"></main>
    </div>
  );
};

export default Navbar;
