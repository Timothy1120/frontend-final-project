import MainLayout from "@/components/MainLayout";
import React, { useState, useEffect } from "react";
import InputWithOption from "@/components/InputWithOption";
import Button from "@/components/Button";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const jlhOptions = [
  { label: "1", value: "1" },
  { label: "2", value: "2" },
];

export default function DetailProposal() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [dataDetailProposal, setDataDetailProposal] = useState([]);

  const token = Cookies.get("token");
  const router = useRouter();
  const { id } = router.query;

  const handleJlhChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  useEffect(() => {
    const fetchDataDetailProposal = async () => {
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      axios
        .get(`http://localhost:7000/api/proposal/${id}/detail`)
        .then((res) => {
          setDataDetailProposal(res.data.data);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    fetchDataDetailProposal();
  }, []);

  function handlePenilaiSubmit(event) {
    event.preventDefault();
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .post(`http://localhost:7000/api/proposal/${proposalId}/assignjlhpenilai`, {
        userId: userId,
        judul: judulPengumuman,
        deskripsi: isiPengumuman,
        kategori: kategori,
      })
      .then((res) => {
        router.push("/koordinator/pengumuman");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <h4 className="text-2xl font-bold mt-8">Detail Proposal</h4>
        <div className="grid grid-cols-2 mt-4">
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Nama</p>
              <p className="font-normal">{dataDetailProposal.nama_mahasiswa}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Prodi</p>
              <p className="font-normal">{dataDetailProposal.prodi}</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Angkatan</p>
              <p className="font-normal">{dataDetailProposal.angkatan}</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Program</p>
              <p className="font-normal">{dataDetailProposal.jenis_program}</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Status</p>
              {dataDetailProposal.status_approval === "Menunggu" && (
                <p className="font-normal text-warning">Menunggu</p>
              )}
              {dataDetailProposal.status_approval === "Ditolak" && (
                <p className="font-normal text-danger">Ditolak</p>
              )}
              {dataDetailProposal.status_approval === "Disetujui" && (
                <p className="font-normal text-success">Disetujui</p>
              )}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 mb-4">
          <div>
            <h4 className="text-2xl font-bold ">Dosen Penilai</h4>
            <p className="text-lg text-neutral-400">Belum ada</p>
          </div>
          <form>
            <div>
              <label className="block font-medium mb-2">
                Jumlah Penilai
              </label>

              <InputWithOption
                options={jlhOptions}
                onChange={handleJlhChange}
                placeholder={"Pilih Jumlah Penilai"}
              />
              <button type="submit" className="mt-2 px-2 py-[1rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-end">Submit</button>

            </div>
          </form>
        </div>
      </div>
    </MainLayout>
  );
}
