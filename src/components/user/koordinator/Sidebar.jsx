import { React, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import HomeIcon from "../../../../public/icons/home-outline.svg";
import SchoolIcon from "../../../../public/icons/school-outline.svg";
import MegaphoneIcon from "../../../../public/icons/megaphone.svg";

export default function Sidebar() {
  return (
    <div className="font-poppins">
      <div className="bg-darkblue-04 h-screen w-[260px]">
        <div className="px-5 py-3 flex flex-col justify-between ">
          <p className="text-neutral-01 text-xs uppercase mt-5">
            Navigasi Utama
          </p>
        </div>
        <div className="mt-9 flex flex-col mx-5">
          <SidebarMenu href="/koordinator" text="Beranda" icon={HomeIcon} />
          <SidebarMenu
            href="/koordinator/batch"
            text="Kampus Merdeka"
            icon={SchoolIcon}
          />
          <SidebarMenu
            href="/koordinator/pengumuman"
            text="Pengumuman"
            icon={MegaphoneIcon}
          />
        </div>
      </div>
    </div>
  );
}
