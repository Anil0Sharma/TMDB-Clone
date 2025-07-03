import React, { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import logo from "../assets/logo.png";
import NavbarModal from "./NavbarModal";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = {
    Movies: ["Popular", "Now Playing", "Upcoming", "Top Rated"],
    "TV Shows": ["Popular", "Airing Today", "On TV", "Top Rated"],
    People: ["Popular People"],
    More: ["Discussions", "Leaderboard", "Support", "API"],
  };

  const toglePhone = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <header
        className={`bg-[#032541] text-white w-full transition-transform duration-300 z-50 fixed top-0 `}
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between relative">
          <div className="flex items-center space-x-6">
            <img src={logo} alt="TMDB Logo" className="h-6" />
            <nav className="hidden md:flex space-x-6 text-sm font-semibold relative">
              {Object.keys(dropdownItems).map((key) => (
                <div
                  key={key}
                  className="relative"
                  onMouseEnter={() => setShowDropdown(key)}
                  onMouseLeave={() => setShowDropdown(null)}
                >
                  <a href="#" className="hover:text-cyan-400">
                    {key}
                  </a>
                  {showDropdown === key && (
                    <NavbarModal items={dropdownItems[key]} />
                  )}
                </div>
              ))}
            </nav>
          </div>

          <div className="hidden md:flex items-center space-x-4 text-sm font-semibold">
            <button className="text-white text-xl">+</button>
            <button className="border border-white px-2 py-1 rounded">
              EN
            </button>
            <a href="#" className="hover:text-cyan-400">
              Login
            </a>
            <a href="#" className="hover:text-cyan-400">
              Join TMDB
            </a>
            <button className="text-cyan-400 text-xl">
              <FaSearch />
            </button>
          </div>

          <div className="md:hidden">
            <button onClick={toglePhone}>
              {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-[#021f39] px-6 py-4 space-y-4">
            {Object.keys(dropdownItems).map((key) => (
              <div key={key}>
                <p className="text-cyan-40 font-semibold mb-2">{key}</p>
                <ul className="ml-4 space-y-1">
                  {dropdownItems[key].map((item) => (
                    <li>
                      <a href="" className="text-sm hover:text-cyan-400">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div className="border-t border-gray-600 pt-4 space-y-2 text-sm">
              <button className="text-white text-xl">+</button>
              <button className="border border-white px-2 py-1 ml-5 rounded">
                EN
              </button>
              <a href="#" className="block hover:text-cyan-400">
                Login
              </a>
              <a href="#" className="block hover:text-cyan-400">
                Join TMDB
              </a>
            </div>
          </div>
        )}
      </header>
      <div className="">
        <input type="text" />
      </div>
    </div>
  );
}
