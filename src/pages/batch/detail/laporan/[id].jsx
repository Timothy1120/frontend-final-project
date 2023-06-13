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
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchAllBimbingan = async () => {
      try {
        // setLoading(true);
        const response = await axiosInstance.get(`/bimbingan`);
        setBimbingan(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        // setLoading(false);
      }
    };

    const fetchDetailBimbingan = async (id) => {
      try {
        const response = await axiosInstance.get(`/mahasiswambkm/${id}`);
        setDetailBimbingan((prevState) => ({
          ...prevState,
          [id]: response.data.data,
        }));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAllBimbingan().then((bimbingan) => {
      if (bimbingan && bimbingan.length > 0) {
        // check if bimbingan is defined and has items
        bimbingan.forEach((item) => {
          fetchDetailBimbingan(item.mahasiswa_mbkm_id);
        });
      }
    });
  }, [id, token]);
  console.log("All Bimbingan: ", bimbingan);
  console.log("All  Detail Bimbingan: ", detailBimbingan);
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
