import { React, useState } from "react";
import Image from "next/image";
import * as AiIcons from "react-icons/ai";

export default function SidebarDropdownMenu({ text, icon }) {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const showDropdownMenu = () => setDropdownMenu(!dropdownMenu);
  return (
    <>
      <button
        onClick={showDropdownMenu}
        className="flex items-center justify-between p-2 bg-neutral-01 hover:bg-hover-sidebar-menu active:bg-darkblue-02 rounded-lg text-neutral-05 text-base"
      >
        <div className="flex space-x-2">
          <Image src={icon} height={20} width={20} alt="submenu-icons" />
          <div>{text}</div>
        </div>

        <AiIcons.AiOutlineCaretDown />
      </button>
      <ul
        id="dropdown-example"
        className="bg-neutral-01 rounded-lg mt-[0.125rem]"
        hidden={!dropdownMenu}
      >
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-hover-sidebar-menu pl-11"
          >
            Koordinator
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-hover-sidebar-menu pl-11"
          >
            Mahasiswa
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-hover-sidebar-menu pl-11"
          >
            Dosen
          </a>
        </li>
        <li>
          <a
            href="#"
            className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-hover-sidebar-menu pl-11"
          >
            Staff
          </a>
        </li>
      </ul>
    </>
  );
}
