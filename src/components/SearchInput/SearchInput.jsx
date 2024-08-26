export function SearchInput() {
  return (
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
        className="bg-transparent  p-[7px] pr-[14px] placeholder:text-[14px] focus:outline-none "
      />
    </label>
  );
}
