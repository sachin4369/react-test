"use client"

import React, {useState} from "react";
import Search from "../../../../public/Search.png";
import Bag from "../../../../public/Bag.png";
import Account from "../../../../public/Account.png";
import Image from "next/image";

const Header = () => {
    const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <header className="">
      <nav className="bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <span className="self-center text-1xl md:text-2xl font-semibold whitespace-nowrap dark:text-white">
              MY COMPANY.COM
            </span>
          </a>
          <div className="flex md:order-2">
            <span className="px-4 py-2 text-center flex">
              <Image
                src={Search}
                alt="image"
                width={22}
                height={24}
                className="ml-2 cursor-pointer"
              />
              <Image
                src={Bag}
                alt="image"
                width={24}
                height={24}
                className="ml-2 cursor-pointer"
              />
              <Image
                src={Account}
                alt="image"
                width={24}
                height={24}
                className="ml-2 cursor-pointer hidden md:block"
              />
            </span>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-10"
              aria-controls="navbar-sticky"
              aria-expanded="false"
              onClick={()=>setMobileMenu(!mobileMenu)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-10 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M1 1h15M1 7h15M1"
                />
              </svg>
            </button>
          </div>
          <div
            className={mobileMenu ? "items-center justify-between w-full lg:flex md:w-auto md:order-1" : "items-center justify-between hidden w-full lg:flex md:w-auto md:order-1"}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 text-sm md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500"
                  aria-current="page"
                >
                  The Edit
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  New Arrivals
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Designers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Clothing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Shoes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Bags
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Accessories
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Jewelry
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Beauty
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-2 pr-2 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white"
                >
                  Home
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
