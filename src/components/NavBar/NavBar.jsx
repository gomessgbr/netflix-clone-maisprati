/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import logo from "../../assets/svgs/netflix-logo.svg";

export function NavBar({ onSearch }) {
  return (
    <header className="z-10 block relative w-full bg-black text-white">
      <nav className="flex px-[4%] items-center min-h-[68px] relative">
        <a href="" className="mr-6">
          <img src={logo} alt="logo" className="lg:w-24 w-20" />
        </a>
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
          <li className="ml-5">
            <a href="#">Bombando</a>
          </li>
        </ul>
        <div className="flex items-center grow justify-end absolute top-0 right-[60px] h-full ">
          <label className=" flex items-center border-[0.5px] border-white/85  ">
            <div className="pr-1 pl-2">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              name=""
              id=""
              placeholder="Título, gente e gêneros"
              className="bg-transparent  p-[7px] pr-[14px] placeholder:text-[14px] focus:outline-none"
              onChange={(e) => {
                onSearch(e);
              }}
            />
          </label>
        </div>
      </nav>
    </header>
  );
}
