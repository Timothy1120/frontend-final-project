import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
// import { useState, useEffect } from "react";
// import Cookies from "js-cookie";
// import jwt from "jsonwebtoken";

export default function SuratPTJM() {
  // const [role, setRole] = useState("");
  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   try {
  //     const decodedToken = jwt.verify(token, "lulusta2023");
  //     setRole(decodedToken.data.user.role);
  //     console.log(role);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   console.log(role);
  // }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="sptjm-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              {/* {role == "student" && (
                <div className="flex justify-end">
                  <Button
                    variant="primary"
                    id="ajukan-sptjm"
                    name="ajukan-sptjm"
                    text="Ajukan SPTJM"
                    to="sptjm/create"
                  />
                </div>
              )} */}
              <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
                Daftar Pengajuan SPTJM
              </div>
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 max-w-4xl">
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
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Pengajuan
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
                    <td className="px-4 py-2 ">1.</td>
                    <td className="px-4 py-2">Magang</td>
                    <td className="text-success px-4 py-2">Diterbitkan</td>
                    <td className="px-4 py-2">03 Mar 2023 08:00</td>
                    <td className="px-4 py-2">
                      <Tooltip text={"Tools"} className={"top-14"}>
                        <div className="flex flex-col divide-y divide-neutral-500 text-center">
                          <Link href={"/"} className="px-4 py-2">
                            Unduh
                          </Link>
                          <Link href={"sptjm/detail"} className="px-4 py-2">
                            Detail
                          </Link>
                          <Link href={"sptjm/generate"} className="px-4 py-2">
                            Generate
                          </Link>
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05 text-sm">
                    <td className="px-4 py-2 ">2.</td>
                    <td className="px-4 py-2">Magang</td>
                    <td className="text-warning px-4 py-2">Menunggu</td>
                    <td className="px-4 py-2">03 Mar 2023 08:00</td>
                    <td className="px-4 py-2">
                      <Tooltip text={"Tools"} className={"top-14"}>
                        <div className="flex flex-col divide-y divide-neutral-500 text-center">
                          <Link href={"/"} className="px-4 py-2">
                            Unduh
                          </Link>
                          <Link href={"sptjm/detail"} className="px-4 py-2">
                            Detail
                          </Link>
                          <Link href={"sptjm/generate"} className="px-4 py-2">
                            Generate
                          </Link>
                        </div>
                      </Tooltip>
                    </td>
                  </tr>
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
