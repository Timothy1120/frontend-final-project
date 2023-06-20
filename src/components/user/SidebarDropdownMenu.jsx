import { React, useState } from "react";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";

export default function SidebarDropdownMenu({ text, icon, items }) {
  const [dropdownMenu, setDropdownMenu] = useState(false);

  const showDropdownMenu = () => setDropdownMenu(!dropdownMenu);
  return (
    <>
      <button
        onClick={showDropdownMenu}
        className={`flex items-center justify-between p-2 hover:bg-hover-sidebar-menu rounded-lg text-neutral-05 text-base ${dropdownMenu ? "bg-darkblue-02" : "bg-neutral-01 mb-4"
          }`}
      >
        <div className="flex space-x-2">
          {icon}
          <div>{text}</div>
        </div>

        <AiIcons.AiOutlineCaretDown />
      </button>
      <ul
        id="dropdown-example"
        className="bg-neutral-01 rounded-lg mt-[0.125rem] mb-4"
        hidden={!dropdownMenu}
      >
        {items.map((item, index) => (
          <li key={index}>
            <Link
              href={item.link}
              className="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-hover-sidebar-menu pl-11"
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
