import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { GrDocumentText } from "react-icons/gr";
import { useRouter } from "next/router";
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "@/context/UserContext";
import axios from "axios";
import Cookies from "js-cookie";

export default function ListLaporan() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  let { id } = router.query;
  const token = Cookies.get("token");
  const [bimbingan, setBimbingan] = useState([]);
  const [detailBimbingan, setDetailBimbingan] = useState({});

  // Inisialisasi instance axios dengan konfigurasi dasar
  const axiosInstance = axios.create({
    baseURL: "http://localhost:7000/api",
    timeout: 8000,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  useEffect(() => {
    const fetchAllBimbingan = async () => {
      try {
        const response = await axiosInstance.get("/bimbingan");
        setBimbingan(response.data.data);
        return response.data.data; // Mengembalikan data untuk penggunaan di luar fungsi
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDetailBimbingan = async (id) => {
      try {
        const response = await axiosInstance.get(`/mahasiswambkm/${id}`);
        return response.data.data; // Mengembalikan data untuk penggunaan di luar fungsi
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      if (!id) {
        return;
      }

      const bimbinganData = await fetchAllBimbingan();

      if (bimbinganData && bimbinganData.length > 0) {
        const detailPromises = bimbinganData.map((item) =>
          fetchDetailBimbingan(item.mahasiswa_mbkm_id)
        );

        const detailBimbinganData = await Promise.all(detailPromises);

        const updatedDetailBimbingan = detailBimbinganData.reduce(
          (acc, item, index) => {
            const bimbinganId = bimbinganData[index].mahasiswa_mbkm_id;
            return {
              ...acc,
              [bimbinganId]: item,
            };
          },
          {}
        );

        setDetailBimbingan(updatedDetailBimbingan);
      }
    };

    fetchData();
  }, [id, token]);
  console.log("All Bimbingan: ", bimbingan);
  console.log("All Detail Bimbingan: ", detailBimbingan);
  return (
    <MainLayout>
      <div className="grid grid-cols-4 gap-6 mx-6 my-8">
        {bimbingan.map((item) => (
          <Link href={`detail/${item.id}`} key={item.id}>
            <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
              <div className="flex space-x-4">
                <GrDocumentText className="w-4 h-auto" />
                {detailBimbingan[item.mahasiswa_mbkm_id] ? (
                  <div className="mt-3">
                    <div className="text-lg text-darkblue-04 font-bold">
                      {detailBimbingan[item.mahasiswa_mbkm_id].nama_mahasiswa}
                    </div>
                    <div className="text-xs text-darkblue-04 font-light">
                      {detailBimbingan[item.mahasiswa_mbkm_id].nama_kegiatan}
                    </div>
                  </div>
                ) : (
                  <p>Loading detail...</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}
