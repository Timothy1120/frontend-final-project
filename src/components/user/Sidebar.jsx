import { React, useState } from "react";
import SidebarMenu from "./SidebarMenu";
import SidebarDropdownMenu from "./SidebarDropdownMenu";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineSchool } from "react-icons/md";
import { BsMegaphone } from "react-icons/bs";
import { IoPersonOutline } from "react-icons/io5";
import { ImOffice } from "react-icons/im";
import { useContext } from "react";
import { UserContext } from '../../context/UserContext';

export default function Sidebar() {
  const { user } = useContext(UserContext);
  const kampusMerdekaLinks = [{ link: "/batch", text: "Batch MBKM" }];


  let baaLinks = [];
  if (user?.detailInfo?.divisi === 'BAA Institut') {
    baaLinks = [
      { link: "/baa/sptjm", text: "SPTJM" },
      { link: "/baa/mahasiswa-mbkm", text: "Mahasiswa MBKM" }
    ];
  } else if (user?.detailInfo?.divisi === 'BAA Fakultas') {
    baaLinks = [
      { link: "/baa/surat-rekomendasi", text: "Surat Rekomendasi" },
      { link: "/baa/transkrip", text: "Transkrip Nilai" },
      { link: "/baa/mahasiswa-mbkm", text: "Mahasiswa MBKM" }
    ];
  }
  console.log(baaLinks);

  return (
    <div className="font-poppins">
      <div className="bg-darkblue-04 h-screen w-[260px]">
        <div className="px-5 py-3 flex flex-col justify-between ">
          <span className="text-neutral-01 text-xs uppercase mt-5">
            Navigasi Utama
          </span>
        </div>
        <div className="mt-9 flex flex-col mx-5">
          <SidebarMenu
            href="/dashboard"
            text="Beranda"
            icon={<AiOutlineHome className="w-6 h-auto" />}
          />
          <SidebarDropdownMenu
            icon={<MdOutlineSchool className="w-6 h-auto" />}
            text="Kampus Merdeka"
            items={kampusMerdekaLinks}
          />
          <SidebarMenu
            href="/pengumuman?page=1"
            text="Pengumuman"
            icon={<BsMegaphone className="w-6 h-auto" />}
          />
          {(user?.detailInfo?.isKaprodi === true) && (
            <SidebarMenu
              href="/assign-koordinator"
              text="Assign Koordinator"
              icon={<IoPersonOutline className="w-6 h-auto" />}
            />
          )}
          {user?.user?.role == 'staf' && (
            <SidebarDropdownMenu
              icon={<ImOffice className="w-6 h-auto" />}
              text={"BAA"}
              items={baaLinks}
            />
          )}
        </div>
      </div>
    </div>
  );
}
