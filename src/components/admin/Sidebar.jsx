import { React, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import HomeIcon from "../../../public/icons/home-outline.svg";
import SettingsIcon from "../../../public/icons/cog-outline.svg";
import SidebarDropdownMenu from "./SidebarDropdownMenu";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="font-poppins">
      <div className="bg-darkblue-04 h-screen w-[260px]">
        <div className="px-5 py-3 flex flex-col justify-between ">
          <p className="text-neutral-01 text-xs uppercase mt-5">
            Navigasi Utama
          </p>
        </div>
        <div className="mt-9 flex flex-col mx-5">
          <SidebarMenu href="/admin" text="Beranda" icon={HomeIcon} />
          <SidebarDropdownMenu text="Kelola User" icon={SettingsIcon} />
        </div>
      </div>
    </div>
  );
}
