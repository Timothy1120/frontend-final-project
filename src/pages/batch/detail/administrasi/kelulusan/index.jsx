import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
// import { UserContext } from "../../context/UserContext";
import { useRouter } from "next/router";
import Spinner from "@/components/Spinner";

export default function Kelulusan() {
  const router = useRouter();
  const { id } = router.query;
  const token = Cookies.get("token");

  const [dataMahasiswa, setDataMahasiswa] = useState([]); // State for data Mahasiswa

  const [isLoading, setIsLoading] = useState(true); // State for loading

  useEffect(() => {
    if (router.isReady) {
      const fetchDataMahasiswa = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const response = await axios.get(
            `http://localhost:7000/api/mahasiswambkm/${id}/allmahasiswa`
          );
          setTimeout(() => {
            setDataMahasiswa(response.data.data);
            setIsLoading(false);
          });
        } catch (error) {
          console.error(error);
          setIsLoading(false); // Set loading state to false in case of error
        }
      };

      fetchDataMahasiswa();
    }
  }, [router.isReady]);

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="flex justify-end">
          <Button
            variant="primary"
            id="button-program"
            name="button-program"
            text="Tambah Program"
            to="kelulusan/create"
          />
        </div>
        <div className="text-2xl font-bold mt-8">
          Daftar Lulus Penerimaan Mitra
        </div>
        {isLoading ? (
          <Spinner />
        ) : dataMahasiswa.length === 0 ? (
          <div className="text-3xl font-light text-neutral-03 mt-4 text-center">
            Belum ada mahasiswa yang lulus
          </div>
        ) : (
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
                  Program
                </th>
                <th
                  scope="col"
                  className="px-4 py-2 text-sm font-semibold text-neutral-05"
                >
                  Mitra
                </th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
              {dataMahasiswa.map((data, index) => (
                <tr
                  className="hover:bg-gray-50 font-normal text-neutral-05 text-sm"
                  key={index}
                >
                  <td className="px-4 py-2">{index + 1}</td>
                  <td className="px-4 py-2">11S19016</td>
                  <td className="px-4 py-2">Timothy Sipahutar</td>
                  <td className="px-4 py-2">Magang</td>
                  <td className="px-4 py-2 ">PT. Ruang Belajar</td>
                  <td className="px-4 py-2">
                    <Button
                      variant="primary"
                      text="Tools"
                      to={`kelulusan/detail/${data.id}`}
                      textSize={"text-sm"}
                    />
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
