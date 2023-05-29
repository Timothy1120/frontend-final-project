import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PlusIcon from "../../../../public/icons/plus.svg";
import { useState, useEffect } from "react";
import axios from "axios";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import Cookies from "js-cookie";

export default function Pengumuman() {
  const [dataPengumuman, setDataPengumuman] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = Cookies.get("token");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          "http://localhost:7000/api/pengumuman"
        );
        setDataPengumuman(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="pengumuman-contents">
            <div className="m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-pengajuan"
                  name="button-pengajuan"
                  text="Tambah Pengumuman"
                  to="pengumuman/create"
                  textSize="text-sm"
                  icon={PlusIcon}
                />
              </div>
              <table className="w-full border-collapse bg-white text-left text-base font-normal text-gray-500 mt-8">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Judul Pengumuman
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Dibuat
                    </th>

                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  {dataPengumuman.map((data, index) => (
                    <tr className="hover:bg-gray-50 text-sm" key={index}>
                      <td className="px-4 py-2 font-normal text-neutral-05">
                        {data.id}
                      </td>
                      <td className="px-4 py-2">
                        <div className="font-medium text-gray-700">
                          {data.judul}
                        </div>
                      </td>
                      <td className="px-4 py-2">{data.createdAt}</td>
                      <td className="px-4 py-2">
                        <Tooltip text={"Tools"} className={"top-[3.75rem]"}>
                          <div className="flex flex-col divide-y divide-neutral-500 text-center">
                            <Link
                              href={`pengumuman/detail/${data.id}`}
                              className="px-4 py-2"
                            >
                              Detail
                            </Link>
                            <Link
                              href={`pengumuman/edit/${data.id}`}
                              className="px-4 py-2"
                            >
                              Edit
                            </Link>
                            <Link href={"/"} className="text-danger px-4 py-2">
                              Hapus
                            </Link>
                          </div>
                        </Tooltip>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
