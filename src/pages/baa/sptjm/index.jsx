import Button from "@/components/Button";
import Tooltip from "@/components/Tooltip";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { UserContext } from "../../../../src/context/UserContext";
import MainLayout from "@/components/MainLayout";
import Spinner from "@/components/Spinner";

export default function SuratPTJM() {
  const { user } = useContext(UserContext);
  const token = Cookies.get("token");
  const [dataRequest, setDataRequest] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRequest = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (user?.user?.role == "mahasiswa") {
          const mahasiswaId = user?.detailInfo?.id;
          const response = await axios.get(
            `http://localhost:7000/api/sptjm/${mahasiswaId}/allrequestedsptjm`
          );
          setTimeout(() => {
            setDataRequest(response.data.data);
            setIsLoading(false);
          });
        } else if (user?.user?.role == "staff") {
          const response = await axios.get("http://localhost:7000/api/sptjm");
          setTimeout(() => {
            setDataRequest(response.data.data);
            setIsLoading(false);
          });
        }
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };
    fetchRequest();
    // console.log(dataRequest);
  }, [token]);

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        {user && user?.user?.role === "mahasiswa" && (
          <div className="flex justify-end">
            <Button
              variant="primary"
              id="ajukan-sptjm"
              name="ajukan-sptjm"
              text="Ajukan SPTJM"
              to="sptjm/create"
            />
          </div>
        )}
        <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
          Daftar Pengajuan SPTJM
        </div>
        {isLoading ? (
          <Spinner />
        ) : dataRequest.length === 0 ? (
          <div className="text-3xl font-light text-neutral-03 mt-4 text-center">
            Belum ada pengajuan SPTJM
          </div>
        ) : (
          <table className="w-full border-collapse bg-white text-left text-sm font-normal text-gray-500 max-w-4xl">
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
                  Nama Lengkap
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
              {dataRequest.map((data, index) => (
                <tr
                  className="hover:bg-gray-50 font-normal text-neutral-05"
                  key={index}
                >
                  <td className="px-4 py-2 ">{index + 1}</td>
                  <td className="px-4 py-2">{data.nama_lengkap}</td>
                  <td className="px-4 py-2">{data.nim}</td>
                  <td className=" px-4 py-2">
                    {data.status === "Menunggu" && (
                      <span className="text-warning">{data.status}</span>
                    )}
                    {data.status === "Diterbitkan" && (
                      <span className="text-success">{data.status}</span>
                    )}
                    {data.status === "Ditolak" && (
                      <span className="text-danger">{data.status}</span>
                    )}
                  </td>
                  <td className="px-4 py-2">{data.createdAt}</td>
                  <td className="px-4 py-2">
                    <Tooltip text={"Tools"} className={"top-10"}>
                      <div className="flex flex-col divide-y divide-neutral-500 text-center">
                        <Link href={"/"} className="px-4 py-2">
                          Unduh
                        </Link>
                        <Link href={"sptjm/detail"} className="px-4 py-2">
                          Detail
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
