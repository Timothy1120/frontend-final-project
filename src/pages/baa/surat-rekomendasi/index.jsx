import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import Cookies from "js-cookie";
import jwt from "jsonwebtoken";
import axios from "axios";
import { useEffect, useState } from "react";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import Spinner from "@/components/Spinner";

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

  const token = Cookies.get("token");
  const [approvedProposals, setApprovedProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  useEffect(() => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(`http://localhost:7000/api/proposal/approved-proposals`)
        // Introduce a delay of 2 seconds before setting the data
        .then((response) => {
          setTimeout(() => {
            setApprovedProposals(response.data.data);
            setIsLoading(false);
          }, 1000);
        });
    } catch (error) {
      console.error(error);
      setIsLoading(false); // Set loading state to false in case of error
    }
  });

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
        {isLoading ? (
          <Spinner />
        ) : approvedProposals.length === 0 ? (
          <div className="text-3xl font-light text-neutral-03 mt-4 text-center">
            Belum ada pengajuan proposal
          </div>
        ) : (
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
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
              {approvedProposals.map((data, index) => (
                <tr className="hover:bg-gray-50" key={index}>
                  <td className="px-4 py-2 font-normal text-neutral-05">
                    {index + 1}
                  </td>
                  <td className="px-4 py-2 font-normal text-neutral-05">
                    {data.nim}
                  </td>
                  <td className="px-4 py-2 font-normal text-neutral-05">
                    {data.nama_mahasiswa}
                  </td>
                  <td className="px-4 py-2 font-normal text-neutral-05">
                    {data.angkatan}
                  </td>
                  <td className="px-4 py-2 font-normal text-success">
                    {data.status_approval}
                  </td>
                  <td className="px-4 py-2 font-normal ">
                    {data.is_suratrekomendasi_generated === true && (
                      <span className="text-success">Telah Diterbitkan</span>
                    )}
                    {data.is_suratrekomendasi_generated === false && (
                      <span className="text-warning">Belum Diterbitkan</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Tooltip text={"Tools"} className={"top-16"}>
                      <div className="flex flex-col divide-y divide-neutral-500 text-center">
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
              ))}
            </tbody>
          </table>
        )}
      </div>
    </MainLayout>
  );
}
