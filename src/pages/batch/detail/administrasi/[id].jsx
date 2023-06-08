import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import Spinner from "@/components/Spinner";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import axios from "axios";
import Cookies from "js-cookie";
import { saveAs } from "file-saver";
import { GrDocumentText } from "react-icons/gr";
import { Main } from "next/document";
import { useContext } from "react";
import { UserContext } from '../../../../context/UserContext';

export default function Proposal() {
  const { user } = useContext(UserContext);
  const router = useRouter();
  const { id } = router.query;
  const [dataProposal, setDataProposal] = useState([]);
  const [document, setDocument] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // State for loading

  const token = Cookies.get("token");
  useEffect(() => {
    if (router.isReady) {
      const fetchDataProposal = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get(
            `http://localhost:7000/api/proposal/${id}/proposals`
          );
          // Introduce a delay of 2 seconds before setting the data
          setTimeout(() => {
            setDataProposal(response.data.data);
            setIsLoading(false);
          }, 1000);
        } catch (error) {
          console.error(error);
          setIsLoading(false); // Set loading state to false in case of error
        }
      };

      const fetchDocument = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get(
            `http://localhost:7000/api/document/${id}/documents`
          );
          // Introduce a delay of 2 seconds before setting the data
          setTimeout(() => {
            setDocument(response.data.data);
            setIsLoading(false);
          }, 1000);
        } catch (error) {
          console.error(error);
          setIsLoading(false); // Set loading state to false in case of error
        }
      };

      fetchDataProposal();
      fetchDocument();
    }
  }, [router.isReady]);


  const handleDownload = async (proposalId, name) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/proposal/${proposalId}/download`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      saveAs(pdfBlob, `proposal_${name}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDocumentDownload = async (documentId, name) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/document/${documentId}/download`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Mendapatkan ekstensi berdasarkan tipe konten
      let extension = "";
      switch (response.headers["content-type"]) {
        case "application/pdf":
          extension = ".pdf";
          break;
        case "application/msword":
        case "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
          extension = ".docx";
          break;
        case "application/vnd.ms-powerpoint":
        case "application/vnd.openxmlformats-officedocument.presentationml.presentation":
          extension = ".pptx";
          break;
        case "application/vnd.ms-excel":
        case "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet":
          extension = ".xlsx";
          break;
        case "image/png":
          extension = ".png";
          break;
        case "image/jpeg":
          extension = ".jpeg";
          break;
        case "image/jpg":
          extension = ".jpg";
          break;
        case "application/zip":
          extension = ".zip";
          break;
        case "application/x-rar-compressed":
          extension = ".rar";
          break;
        // tambahkan lebih banyak kasus jika diperlukan
        default:
          extension = ".txt";
      }

      const blob = new Blob([response.data], {
        type: response.headers["content-type"],
      });
      saveAs(blob, `document_${name}${extension}`);
    } catch (error) {
      console.error(error);
    }
  };

  const handleApprove = async (proposalId) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.put(
        `http://localhost:7000/api/proposal/${proposalId}/approve`
      );

      if (response.status === 200) {
        setDataProposal(
          dataProposal.map((item) =>
            item.id === proposalId
              ? { ...item, status_approval: "Disetujui" }
              : item
          )
        );
        // router.reload();
      } else {
        console.error("Error approving proposal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleReject = async (proposalId) => {
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.put(
        `http://localhost:7000/api/proposal/${proposalId}/reject`
      );

      if (response.status === 200) {
        setDataProposal(
          dataProposal.map((item) =>
            item.id === proposalId
              ? { ...item, status_approval: "Ditolak" }
              : item
          )
        );
        // router.reload();
      } else {
        console.error("Error rejecting proposal");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleUnduhSuratRekomendasi = async (proposalId, name) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/proposal/${proposalId}/unduh-surat-rekomendasi`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      saveAs(pdfBlob, `SuratRekomendasi_${name}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="flex space-x-8">
          {user && user?.user?.role === 'mahasiswa' && (
            <Button
              variant="primary"
              id="ajukan-proposal"
              name="ajukan-proposal"
              text="Ajukan Proposal"
              to={`ajukan-proposal/${id}`}
              textSize="text-sm"
            />
          )}
          {(user?.detailInfo?.isKoordinator === true || user?.user?.role === 'admin') && (
            <Button
              variant="primary"
              id="upload-dokumen"
              name="upload-dokumen"
              text="Upload Dokumen"
              to={`upload-dokumen/${id}`}
              textSize="text-sm"
            />
          )}
          <Button
            variant="primary"
            id="penerimaan-mitra"
            name="penerimaan-mitra"
            text="Lulus Penerimaan Mitra"
            to={`kelulusan/${id}`}
            textSize="text-sm"
          />
        </div>
        <div className="rounded-sm border border-neutral-02 shadow-md mt-6 px-5 py-5">
          <div className="text-base text-darkblue-04 font-bold mb-6">
            Dokumen
          </div>

          {isLoading ? (
            <Spinner size={6} />
          ) :
            document.length === 0 ? (
              <div className="text-sm font-light text-neutral-03 mt-4 text-center">
                Belum ada dokumen administrasi
              </div>
            )
              : (
                <div className="grid grid-cols-9">
                  {document.map((data, index) => (
                    <div className="text-center cursor-pointer" key={index} onClick={() => handleDocumentDownload(data.id, data.document_title)}>
                      <div className="flex justify-center ">
                        <GrDocumentText className="w-5 h-auto" />
                      </div>
                      <div className="mt-4 text-darkblue-04 text-xs">{data.document_title}</div>
                    </div>
                  ))}
                </div>
              )
          }

        </div>
        <div className="text-base text-darkblue-04 font-bold mt-9 mb-6">
          Daftar Pengajuan Proposal
        </div>
        {isLoading ? (
          <Spinner />
        ) : dataProposal.length === 0 ? (
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
                    {data.status_approval === "Menunggu" && (
                      <span className="text-warning">Menunggu</span>
                    )}
                    {data.status_approval === "Disetujui" && (
                      <span className="text-success">Disetujui</span>
                    )}
                    {data.status_approval === "Ditolak" && (
                      <span className="text-danger">Ditolak</span>
                    )}
                  </td>
                  <td className="px-4 py-2 font-normal">
                    {data.is_suratrekomendasi_generated === false ? (
                      <span className="text-warning">Belum Diterbitkan</span>
                    ) : (
                      <span className="text-success">Sudah Diterbitkan</span>
                    )}
                  </td>
                  <td className="px-4 py-2">
                    <Tooltip text={"Tools"} className={user?.detailInfo?.isKoordinator === true && data.status_approval === "Menunggu" ? 'top-[6.5rem]' : 'top-[3rem]'}>
                      <div className="flex flex-col divide-y divide-neutral-500 text-center">
                        <button
                          className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                          onClick={() =>
                            handleDownload(data.id, data.nama_mahasiswa)
                          }
                        >
                          Unduh Proposal

                        </button>
                        {user?.user?.role === "mahasiswa" && (
                          <button
                            className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                            onClick={() =>
                              handleUnduhSuratRekomendasi(data.id, data.nama_mahasiswa)
                            }
                          >
                            Unduh Surat Rekomendasi
                          </button>
                        )}
                        <Link
                          href={`detail-proposal/${data.id}`}
                          className="px-4 py-2 hover:bg-gray-200 transition-colors duration-200"
                        >
                          Lihat Detail
                        </Link>
                        {user?.detailInfo?.isKoordinator === true && data.status_approval === "Menunggu" && (
                          <>
                            <button
                              className="px-4 py-2 text-success hover:bg-gray-200 transition-colors duration-200"
                              onClick={() => handleApprove(data.id)}
                            >
                              Approve Proposal
                            </button>
                            <button
                              className="px-4 py-2 text-danger hover:bg-gray-200 transition-colors duration-200"
                              onClick={() => handleReject(data.id)}
                            >
                              Reject Proposal
                            </button>
                          </>
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
    </MainLayout >

  );
}
