import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineTag, AiOutlineClockCircle } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";

export default function Dashboard({ userData }) {
  const [pengumuman, setPengumuman] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get("http://localhost:7000/api/pengumuman");
        setPengumuman(response.data.data.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <MainLayout>
      <div className="flex mx-6 my-8 space-x-4">
        <div className="w-4/6">
          <Link href={"/koordinator/administrasi"}>
            <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
              <div className="flex space-x-4">
                <GrDocumentText className="w-9 h-auto" />
                <div>
                  <p className="text-2xl text-darkblue-04 font-bold">
                    Administrasi
                  </p>
                  <p className="text-xs text-darkblue-04 font-light">
                    S1 Informatika
                  </p>
                </div>
              </div>
            </div>
          </Link>
          <Link href={"/koordinator/pelaksanaan"}>
            <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8 mt-6">
              <div className="flex space-x-4">
                <FiMonitor className="w-9 h-auto" />
                <div>
                  <p className="text-2xl text-darkblue-04 font-bold">
                    Pelaksanaan/Monitoring
                  </p>
                  <p className="text-xs text-darkblue-04 font-light">
                    S1 Informatika
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-2/6 rounded-sm border border-neutral-02 shadow-md px-6 py-5">
          <div className="flex space-x-3 items-center ">
            <FaBullhorn />
            <p className="text-darkblue-04 text-lg font-bold">Pengumuman</p>
          </div>
          <hr className="border-b border-neutral-02 mt-2" />
          <div>

            {pengumuman.length === 0 ? (
              <div className="text-sm mt-4 text-center">
                Belum ada pengumuman
              </div>
            ) :
              (pengumuman.map((data, index) => (
                <div className="mt-4" key={index}>
                  <div className="text-sm font-semibold">
                    <span className="text-darkblue-04">[{data.kategori}]</span>{" "}
                    {data.judul}
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-2 font-light">
                      <AiOutlineTag />
                      <p className="text-xs">Sosialisasi</p>
                    </div>
                    <div className="flex space-x-2 font-light">
                      <AiOutlineClockCircle />
                      <p className="text-xs">{data.createdAt}</p>
                    </div>
                  </div>
                </div>
              )))
            }
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
