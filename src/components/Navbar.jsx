import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";

export default function Navbar() {
  const [dropdown, setDropdown] = useState(false);

  const showDropdown = () => setDropdown(!dropdown);

  return (
    <nav className=" bg-neutral-01 font-poppins">
      <div className="flex flex-wrap items-center justify-between">
        <div className="h-16 bg-darkblue-02 w-[260px]">
          <div className="px-5 py-4 flex justify-between">
            <div>
              <Image src={delLogo} alt="logo IT Del" width={30} height={30} />
            </div>
            <div>
              <Image src={mbkmLogo} alt="logo MBKM" width={66} height={30} />
            </div>
            <p className="text-base font-bold">Dashboard</p>
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <button
              id="dropdownNavbarLink"
              onClick={showDropdown}
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto"
            >
              Hi, User
              <AiIcons.AiOutlineCaretDown />
            </button>
            <div
              id="dropdownNavbar"
              className="absolute top-10 right-4 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-24 text-sm"
              hidden={!dropdown}
            >
              <ul className="py-2 text-gray-700">
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                </li>
              </ul>
              <div className="py-1">
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Sign out
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
