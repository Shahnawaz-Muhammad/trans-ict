import { useState } from "react";
import transIct from "../../assets/imgs/trans-ict.png";
import { NavbarData } from "../../data/navbarData";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900  w-full z-20 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl relative  flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="https://flowbite.com/" className="flex items-center">
          <img src={transIct} alt="TransIct Logo" className="w-60"/>
        </a>
        <div className="flex gap-6 absolute top-12 right-4 md:order-2 lg:relative lg:top-0 lg:right-0">
          <button
            type="button"
            className="hidden xl:flex text-white bg-[#800000] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-3 text-center mr-3 md:mr-0 "
          >
            Get started
          </button>
          <button
            type="button"
            className="hidden xl:inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-[#930000] rounded-full bg-[#EFF1F5] hover:bg-gray-100 focus:outline-none "
            aria-controls="navbar-sticky"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="#800000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>

        {/* Menu items for larger screens */}
        <div
          className={`hidden items-center justify-between w-full lg:flex md:w-auto md:order-1`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 font-medium md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 ">
            {NavbarData.map((navbarData, index) => (
              <li key={index}>
                <a
                  href={navbarData.href}
                  className="block capitalize py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#800000] md:p-0 md:dark:hover:text-[#800000] dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {navbarData.text}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Menu items for medium and small screens */}
        <div
          className={`block lg:hidden w-full md:order-1 ${
            isMenuOpen ? "mt-4" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 font-medium lg:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900">
            {NavbarData.map((navbarData, index) => (
              <li key={index}>
                <a
                  href={navbarData.href}
                  className="block capitalize py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                  aria-current="page"
                >
                  {navbarData.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
