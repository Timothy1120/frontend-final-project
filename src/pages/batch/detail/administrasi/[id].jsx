import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { saveAs } from 'file-saver';

export default function Proposal() {
  const router = useRouter();
  const { id } = router.query;

  const [dataProposal, setDataProposal] = useState([]);

  const token = Cookies.get("token");
  useEffect(() => {
    if (router.isReady) {
      const fetchDataProposal = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get(
            `http://localhost:7000/api/proposal/${id}/proposals`
          );
          setDataProposal(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };

      fetchDataProposal();
    }
  }, [router.isReady]);

  const handleDownload = async (proposalId, name) => {
    try {
      const response = await axios.get(`http://localhost:7000/api/proposal/${proposalId}/download`, {
        responseType: 'blob',
        headers: {
          'Authorization': `Bearer ${token}`,
        }
      });

      const pdfBlob = new Blob([response.data], { type: 'application/pdf' });

      saveAs(pdfBlob, `proposal_${name}.pdf`);
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="proposal-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex space-x-8">
                <Button
                  variant="primary"
                  id="ajukan-proposal"
                  name="ajukan-proposal"
                  text="Ajukan Proposal"
                  to={`ajukan-proposal/${id}`}
                  textSize="text-sm"
                />
                <Button
                  variant="primary"
                  id="tambah-dokumen"
                  name="tambah-dokumen"
                  text="Tambah Dokumen"
                  to="upload-dokumen"
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
              <div className="text-base text-darkblue-04 font-bold mt-9 mb-6">
                Daftar Pengajuan Proposal
              </div>
              {dataProposal.length === 0 ? (
                <div className="text-3xl font-light text-neutral-03 mt-4 text-center">
                  Belum ada pengajuan proposal
                </div>
              ) : (
                <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 ">
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
                    {dataProposal.map((data, index) => (
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
                        <td className="px-4 py-2 font-normal">
                          {data.status_approval === 'Menunggu' && (<span className="text-warning">Menunggu</span>)}
                          {data.status_approval === 'Disetujui' && (<span className="text-success">Disetujui</span>)}
                          {data.status_approval === 'Ditolak' && (<span className="text-danger">Ditolak</span>)}
                        </td>
                        <td className="px-4 py-2 font-normal text-warning">
                          Belum Diterbitkan
                        </td>
                        <td className="px-4 py-2">
                          <Tooltip text={"Tools"} className={"top-[6.5rem]"}>
                            <div className="flex flex-col divide-y divide-neutral-500 text-center">
                              <button className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200" onClick={() => handleDownload(data.id, data.nama_mahasiswa)}>Unduh Proposal</button>
                              <Link href={"/"} className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200">
                                Unduh Surat Rekomendasi
                              </Link>
                              <Link
                                href={"proposal/detail"}
                                className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                              >
                                Lihat Detail
                              </Link>
                              <Link
                                href={"proposal/detail"}
                                className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                              >
                                Approve Proposal
                              </Link>
                              <Link
                                href={"proposal/detail"}
                                className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                              >
                                Reject Proposal
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
          </main>
          <Footer />
        </div>
      </div >
    </div >
  );
}
