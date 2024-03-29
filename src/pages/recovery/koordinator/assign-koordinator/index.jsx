import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Face from "../../../../public/images/user-avatar.png";
import Button from "@/components/Button";
import { useState, useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";

export default function AssignKoordinator() {
  const [dataKoordinator, setDataKoordinator] = useState([]);

  function getUserId(token, secretKey) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.sub; // atau `decodedToken.userId`
      return userId;
    } catch (error) {
      console.error("Error decoding token:", error);
      return null;
    }
  }
  useEffect(() => {
    const token = Cookies.get("token");
    const secretKey = "lulusta2023";
    const userId = getUserId(token, secretKey);
    console.log(userId);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`http://localhost:7000/api/dosen/${userId}/koor-byauth`)
      .then((res) => {
        setDataKoordinator(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(dataKoordinator);
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="user-koordinator-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex justify-between">
                <div className="text-lg font-bold mb-14">Koordinator</div>
                <Button
                  text="Assign Koordinator"
                  to={"assign-koordinator/create"}
                  variant={"primary"}
                />
              </div>
              <table className="w-full border-collapse bg-white text-left font-normal text-gray-500">
                <thead className="bg-gray-50 text-base">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Program Studi
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Status
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  {dataKoordinator.length === 0 ? (
                    <tr>
                      <td
                        colSpan="4"
                        className="text-center text-gray-500 py-4"
                      >
                        Koordinator belum ada
                      </td>
                    </tr>
                  ) : (
                    dataKoordinator.map((data, index) => (
                      <tr
                        className="hover:bg-gray-50 text-sm text-neutral-05"
                        key={index}
                      >
                        <td className="px-4 py-2 font-normal">
                          <div className="flex gap-3 ">
                            <div className="max-h-10 max-w-[2.5rem]">
                              <Image
                                className="h-auto w-auto rounded-full object-cover object-center"
                                src={Face}
                                alt="face"
                                height={40}
                                width={40}
                              />
                            </div>
                            <div className="font-normal">
                              <div className=" text-gray-700">{data.nama}</div>
                              <div className="text-gray-400">test</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">{data.prodi.nama_prodi}</td>
                        <td className="px-4 py-2">
                          {data.isKoordinator
                            ? "Koordinator Aktif"
                            : "Tidak Aktif"}
                        </td>
                        <td className="flex justify-end px-4 py-2">
                          {/* <Button
                            variant="primary"
                            text="Lihat Detail"
                            to={`assign-koordinator/detail/${data.id}`}
                          /> */}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
