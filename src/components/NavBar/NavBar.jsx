/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../../assets/svgs/netflix-logo.svg";
import { useState } from "react";
import { Search } from "lucide-react";

export function NavBar({ onSearch }) {
  const [showSearch, setShowSearch] = useState(false);
  return (
    <header className="z-10 block relative w-full bg-black text-white">
      <nav className="flex px-[4%] items-center min-h-[68px] relative">
        <NavLink to={"/"} className="mr-6">
          <img src={logo} alt="logo" className="lg:w-24 w-20" />
        </NavLink>
        <ul className="flex text-sm leading-4">
          <li className="ml-5">
            <NavLink to={"/home"}>Início</NavLink>
          </li>
          <li className="ml-5">
            <NavLink to={"/tvShows"}>Séries</NavLink>
          </li>
          <li className="ml-5">
            <NavLink to={"/movies"}>Filmes</NavLink>
          </li>
        </ul>
        <div className=" absolute top-0 right-[60px] flex items-center h-full justify-end">
          <div
            className={` flex items-center  ${
              showSearch
                ? "border-[0.5px] border-white/85 pr-1 pl-2"
                : "border-0"
            } transition-all duration-300 ease-in-out`}
          >
            <Search onClick={() => setShowSearch(!showSearch)} />
            {showSearch && (
              <label className="flex items-center">
                <input
                  type="search"
                  name=""
                  id=""
                  placeholder="Título, gente e gêneros"
                  className={`bg-transparent p-[7px] pr-[14px] placeholder:text-[14px] focus:outline-none transition-all duration-300 ease-in-out ${
                    showSearch ? "w-[200px]" : "w-0"
                  }`}
                  onChange={(e) => {
                    onSearch(e);
                  }}
                  onBlur={() => setShowSearch(false)}
                />
              </label>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
