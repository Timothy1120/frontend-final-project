import MainLayout from "@/components/MainLayout";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect, useState } from "react";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import Spinner from "@/components/Spinner";
import { useRouter } from 'next/router';
const api = axios.create({
  baseURL: "http://localhost:7000/api",
  timeout: 60000, // Timeout diatur menjadi 2 detik
});
export default function SuratRekomendasi() {
  const router = useRouter();
  const token = Cookies.get("token");
  const [approvedProposals, setApprovedProposals] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading
  useEffect(() => {
    const fetchProposals = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          `http://localhost:7000/api/proposal/approved-proposals?srgenerated=true`
        );
        setTimeout(() => {
          setApprovedProposals(response.data.data);
          setIsLoading(false);
        }, 500);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchProposals();
  }, [token]);



  const unduhTranskrip = async (proposalId, name) => {
    try {
      const response = await api.get(
        `/transkrip_nilai/${proposalId}/unduh-transkrip`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      saveAs(pdfBlob, `Transkrip_${name}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="text-base text-darkblue-04 font-bold mt-9 mb-6">
          Daftar Pengajuan Transkrip Nilai
        </div>
        {isLoading ? (
          <Spinner />
        ) : approvedProposals.length === 0 ? (
          <div className="text-sm font-light text-neutral-03 mt-4 text-center">
            Belum ada proposal yang mendapat persetujuan
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
                  Status Transkrip Nilai
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
                    {data.is_transkrip_generated === true && (
                      <span className="text-success">Telah Diterbitkan</span>
                    )}
                    {data.is_transkrip_generated === false && (
                      <span className="text-warning">Belum Diterbitkan</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Tooltip text={"Tools"} className={"top-4"}>
                      <div className="flex flex-col divide-y divide-neutral-500 text-center">
                        {data.is_transkrip_generated === false ? (
                          <Link href={`transkrip/kirim/${data.id}`}>
                            <button className="p-2">
                              Kirim Transkrip
                            </button>
                          </Link>
                        ) : (
                          <button className="p-2" onClick={() => unduhTranskrip(data.id, data.nama_mahasiswa)}>
                            Unduh Transkrip
                          </button>
                        )}
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
