import Image from "next/image";
import delLogo from "../../public/images/itdel.png";
import mbkmLogo from "../../public/images/Kampus-Merdeka-01.png";
import { useState } from "react";
import * as AiIcons from "react-icons/ai";
import { useRouter } from "next/router";

export default function Navbar({ onLogout, userName }) {
  const [dropdown, setDropdown] = useState(false);
  const showDropdown = () => setDropdown(!dropdown);
  const router = useRouter();

  const logout = () => {
    onLogout();
    router.push("/login"); // redirect user to login page
  };
  return (
    <nav className=" bg-neutral-01 font-poppins border-b border-neutral-02">
      <div className="flex flex-wrap items-center justify-between">
        <div className="h-16 bg-darkblue-02 w-[260px]">
          <div className="px-5 py-4 flex justify-around">
            <Image src={delLogo} alt="logo IT Del" width={35} height={20} />
            <Image src={mbkmLogo} alt="logo MBKM" width={70} height={20} />
          </div>
        </div>
        <div className="hidden w-full md:block md:w-auto" id="navbar-dropdown">
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <button
              id="dropdownNavbarLink"
              onClick={showDropdown}
              className="flex items-center justify-between w-full py-2 pl-3 pr-4 font-medium text-neutral-05 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-darkblue-04 md:p-0 md:w-auto"
            >
              Hi, {userName} 😀
              <AiIcons.AiOutlineCaretDown className="ml-2" />
            </button>
            <div
              id="dropdownNavbar"
              className="absolute top-10 right-4 z-10 font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-28 text-sm"
              hidden={!dropdown}
            >
              <ul className="py-2 text-neutral-05">
                {/* <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                    Settings
                  </a>
                </li> */}
                <li>
                  <div className="py-1">
                    <button
                      onClick={logout}
                      className="block px-4 py-2 text-sm text-neutral-05 hover:bg-gray-100"
                    >
                      Sign out
                    </button>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
