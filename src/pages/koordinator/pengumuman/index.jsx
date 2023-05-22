import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PlusIcon from "../../../../public/icons/plus.svg";
import { useState, useEffect } from "react";
import axios from "axios";

export default function Pengumuman() {
  const [dataPengumuman, setDataPengumuman] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:7000/api/pengumuman")
      .then((res) => {
        setDataPengumuman(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
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
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 mt-8">
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
                    <tr className="hover:bg-gray-50" key={index}>
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
                        <Button
                          variant="primary"
                          text="Tools"
                          to={`pengumuman/detail/${data.id}`}
                        />
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
