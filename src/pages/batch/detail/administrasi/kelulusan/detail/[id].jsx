import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";
import { UserContext } from "@/context/UserContext";
import 'moment/locale/id';
moment.locale('id');


export default function DetailKelulusan() {
  const router = useRouter();
  const { user } = useContext(UserContext);
  let { id } = router.query;
  const token = Cookies.get("token");

  const [selectedOption, setSelectedOption] = useState(null);
  const [detail, setDetail] = useState([]);
  const [mahasiswaInfo, setMahasiswaInfo] = useState([]);
  const [dosenBatch, setDosenBatch] = useState([]);
  const [dosenPembimbing, setDosenPembimbing] = useState([]);
  const [dosenPembimbingDetail, setDosenPembimbingDetail] = useState([]);
  const [loading, setLoading] = useState(true);

  // Inisialisasi instance axios dengan konfigurasi dasar
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:7000/api',
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });

  useEffect(() => {
    if (!id) {
      return;
    }

    const fetchDetailData = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get(`/mahasiswambkm/${id}`);
        setDetail(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    const fetchMahasiswaInfo = async (mahasiswaId) => {
      try {
        const response = await axiosInstance.get(`/mahasiswa/${mahasiswaId}`);
        setMahasiswaInfo(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDosenBatch = async (batchId) => {
      try {
        const response = await axiosInstance.get(`/batch/${batchId}/alldosen`);
        setDosenBatch(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDosenPembimbing = async (mahasiswambkmid, batchid) => {
      try {
        const response = await axiosInstance.get(`/bimbingan/${mahasiswambkmid}/mybimbingan/${batchid}`);
        setDosenPembimbing(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    const fetchDosenDetail = async (id) => {
      try {
        const response = await axiosInstance.get(`/dosen/${id}`);
        setDosenPembimbingDetail(response.data.data);
        return response.data.data;
      } catch (error) {
        console.log(error);
      }
    };

    // Memanggil fungsi fetchDetailData dan menunggu hasilnya
    fetchDetailData().then(detail => {
      // Jika detail, detail.mahasiswaId dan detail.batchId ada, maka jalankan fungsi berikutnya
      if (detail && detail.mahasiswaId && detail.batchId) {
        fetchMahasiswaInfo(detail.mahasiswaId);
        fetchDosenBatch(detail.batchId);
        fetchDosenPembimbing(detail.id, detail.batchId).then(dosenPembimbing => {
          // console.log(dosenPembimbing);
          if (dosenPembimbing.length !== 0) {
            fetchDosenDetail(dosenPembimbing[0].dosenId)
          }

        });
      }
    });

  }, [id, token]); // useEffect ini akan dijalankan kembali jika `id` atau `token` berubah

  const handleDownload = async (id, name) => {
    try {
      const response = await axios.get(
        `http://localhost:7000/api/mahasiswambkm/${id}/unduh-bukti-kelulusan`,
        {
          responseType: "blob",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      const pdfBlob = new Blob([response.data], { type: "application/pdf" });

      saveAs(pdfBlob, `Bukti Kelulusan_${name}.pdf`);
    } catch (error) {
      console.error(error);
    }
  };
  console.log("Detail Mahasiswa MBKM.id: ", detail.id);
  console.log("Selected Dosen Id: ", selectedOption);
  console.log("Selected Dosen Pembimbing: ", dosenPembimbing);
  console.log("Selected Dosen Pembimbing Detail: ", dosenPembimbingDetail);
  const handleDosenSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const assignBimbingan = async (e) => {
    e.preventDefault();
    try {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      const response = await axios.post(
        `http://localhost:7000/api/bimbingan`, {
        mahasiswa_mbkm_id: detail.id,
        dosenId: selectedOption,
      });
      router.reload();
      // router.push(`${id}`)
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <h4 className="text-2xl font-bold mt-4">Detail Mahasiswa MBKM</h4>
        <div className="grid grid-cols-3 mt-4">
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Nama</p>
              <p className="font-normal">{detail.nama_mahasiswa}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Prodi</p>
              <p className="font-normal">{detail.prodi}</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Angkatan</p>
              <p className="font-normal">{mahasiswaInfo.angkatan}</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Mitra</p>
              <p className="font-normal">{detail.mitra}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Program</p>
              <p className="font-normal">{detail.jenis_mbkm}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Tanggal Mulai</p>
              <p className="font-normal">{moment(detail.tanggal_mulai).format('DD MMMM YYYY')}</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Tanggal Berakhir</p>
              <p className="font-normal">{moment(detail.tanggal_berakhir).format('DD MMMM YYYY')}</p>
            </div>
          </div>
          <div>
            <div className="text-lg">
              <p className="font-semibold">Bukti Kelulusan</p>
              <button onClick={() =>
                handleDownload(detail.id, detail.nama_mahasiswa)
              } className="text-blue-500 hover:text-blue-700 underline">
                Unduh disini
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 mb-4">
          <div>
            <h4 className="text-2xl font-bold ">Dosen Pembimbing</h4>

            {dosenPembimbing.length == 0 ? (
              <p className="text-md text-neutral-400">Belum ada dosen pembimbing</p>
            ) : (
              <p>
                Dosen : {dosenPembimbingDetail.nama}
              </p>
            )}
          </div>
          {user?.user?.role === "dosen" && user?.detailInfo?.isKoordinator === true && dosenPembimbing.length !== 1 && (
            <form onSubmit={assignBimbingan}>
              <div>
                <label className="block font-medium mb-2">
                  Assign Dosen Pembimbing <span className="text-xs text-gray-400">max: 1 dosen</span>
                </label>
                <select onChange={handleDosenSelectChange} defaultValue="default" className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-darkblue-04 focus:border-darkblue-04 sm:text-sm rounded-md">
                  <option disabled value="default" className="text-gray-400">Pilih Dosen Pembimbing</option>
                  {
                    dosenBatch.map((dosen, index) => (
                      <option key={index} value={dosen.id} className="text-gray-900 cursor-pointer">
                        {dosen.nama}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="mt-4 flex justify-end">
                <button type="submit" className="bg-darkblue-04 px-6 py-[1.10rem] text-neutral-01 rounded-lg text-sm">
                  Assign
                </button>
              </div>
            </form>
          )}

        </div>
      </div>
    </MainLayout>

  );
}
