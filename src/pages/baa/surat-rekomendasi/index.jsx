import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import { useEffect, useState } from "react";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";

export default function SuratRekomendasi() {
  // const [role, setRole] = useState("");
  // useEffect(() => {
  //   const token = Cookies.get("token");
  //   try {
  //     const decodedToken = jwt.verify(token, "lulusta2023");
  //     setRole(decodedToken.data.user.role);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        {/* {role == "student" && (
          <div className="flex space-x-8">
            <Button
              variant="primary"
              id="ajukan-proposal"
              name="ajukan-proposal"
              text="Ajukan Proposal"
              to="/proposal"
            />
            <Button
              variant="primary"
              id="unduh-template"
              name="unduh-template"
              text="Unduh Template"
              to="/proposal"
            />
          </div>
        )}
        {role == "admin" && (
          <div className="flex space-x-8">
            <Button
              variant="primary"
              id="upload-proposal"
              name="upload-proposal"
              text="Upload Proposal"
              to="proposal/upload-proposal"
              textSize="text-sm"
            />
            <Button
              variant="primary"
              id="tambah-dokumen"
              name="tambah-dokumen"
              text="Tambah Dokumen"
              to="proposal/upload-dokumen"
              textSize="text-sm"
            />
            <Button
              variant="primary"
              id="mahasiswa-eligible"
              name="mahasiswa-eligible"
              text="Mahasiswa Eligible"
              to="proposal/eligible"
              textSize="text-sm"
            />
            <Button
              variant="primary"
              id="penerimaan-mitra"
              name="penerimaan-mitra"
              text="Lulus Penerimaan Mitra"
              to="proposal/kelulusan"
              textSize="text-sm"
            />
          </div>
        )} */}
        <div className="text-base text-darkblue-04 font-bold mt-9 mb-6">
          Daftar Pengajuan Proposal
        </div>
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 max-w-4xl">
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
                NIM
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              >
                Nama Mahasiswa
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              >
                Angkatan
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              >
                Status Proposal
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              >
                Status Surat Rekomendasi
              </th>
              <th
                scope="col"
                className="px-4 py-2 text-sm font-semibold text-neutral-05"
              ></th>
            </tr>
          </thead>
          <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 font-normal text-neutral-05">1</td>
              <td className="px-4 py-2 font-normal text-neutral-05">
                11S19016
              </td>
              <td className="px-4 py-2 font-normal text-neutral-05">
                Timothy Sipahutar
              </td>
              <td className="px-4 py-2 font-normal text-neutral-05">2019</td>
              <td className="px-4 py-2 font-normal text-success">Disetujui</td>
              <td className="px-4 py-2 font-normal text-warning">
                Belum Diterbitkan
              </td>
              <td className="px-4 py-2">
                <Tooltip text={"Tools"} className={"top-[5.5rem]"}>
                  <div className="flex flex-col divide-y divide-neutral-500 text-center">
                    <Link href={"/"} className="px-4 py-2">
                      Unduh Proposal
                    </Link>
                    <Link href={"/"} className="px-4 py-2">
                      Generate Surat Rekomendasi
                    </Link>
                    <Link href={"proposal/detail"} className="px-4 py-2">
                      Lihat Detail
                    </Link>
                  </div>
                </Tooltip>
              </td>
            </tr>
            <tr className="hover:bg-gray-50">
              <td className="px-4 py-2 font-normal text-neutral-05">2</td>
              <td className="px-4 py-2 font-normal text-neutral-05">
                11S19016
              </td>
              <td className="px-4 py-2 font-normal text-neutral-05">
                Timothy Sipahutar
              </td>
              <td className="px-4 py-2 font-normal text-neutral-05">2019</td>
              <td className="px-4 py-2 font-normal text-success">Disetujui</td>
              <td className="px-4 py-2 font-normal text-success">
                Sudah Diterbitkan
              </td>
              <td className="px-4 py-2">
                <Tooltip text={"Tools"} className={"top-[5.5rem]"}>
                  <div className="flex flex-col divide-y divide-neutral-500 text-center">
                    <Link href={"/"} className="px-4 py-2">
                      Unduh Proposal
                    </Link>
                    <Link href={"/"} className="px-4 py-2">
                      Generate Surat Rekomendasi
                    </Link>
                    <Link href={"proposal/detail"} className="px-4 py-2">
                      Lihat Detail
                    </Link>
                  </div>
                </Tooltip>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </MainLayout>
  );
}
