import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineTag, AiOutlineClockCircle } from "react-icons/ai";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { IoSchoolOutline } from "react-icons/io5";

export default function Dashboard({ userData }) {
  const [pengumuman, setPengumuman] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          "http://localhost:7000/api/pengumuman"
        );
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
        <div className="w-3/5">
          <Link href={"/"}>
            <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
              <div className="flex space-x-4">
                <IoSchoolOutline className="w-16 h-auto" />
                <div className="mt-3">
                  <div className="text-2xl text-darkblue-04 font-bold">
                    Kampus Merdeka Batch 1
                  </div>
                  <div className="text-xs text-darkblue-04 font-light">
                    S1 Informatika
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
        <div className="w-2/5 rounded-sm border border-neutral-02 shadow-md px-6 py-5">
          <div className="flex space-x-3 items-center ">
            <FaBullhorn />
            <p className="text-neutral-05 text-lg font-bold">Pengumuman</p>
          </div>
          <hr className="border-b border-neutral-02 mt-2" />
          <div>
            {pengumuman.length === 0 ? (
              <div className="text-sm mt-4 text-center">
                Belum ada pengumuman
              </div>
            ) : (
              pengumuman.map((data, index) => (
                <div className="mt-4" key={index}>
                  <div className="text-sm font-semibold mb-1">
                    <span className="text-darkblue-04">[{data.kategori}]</span>{" "}
                    <Link
                      href={`koordinator/pengumuman/detail/${data.id}`}
                      className="hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-darkblue-04 text-darkblue-04"
                    >
                      {data.judul}
                    </Link>
                  </div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-2 font-light">
                      <AiOutlineTag />
                      <span className="text-xs">Sosialisasi</span>
                    </div>
                    <div className="flex space-x-2 font-light">
                      <AiOutlineClockCircle />
                      <p className="text-xs">{data.createdAt}</p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
