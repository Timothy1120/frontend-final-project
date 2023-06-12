import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";
import dynamic from "next/dynamic";
const TextEditor = dynamic(() => import("@/components/TextEditor"), {
  ssr: false,
});
export default function CreatePengumuman() {
  const token = Cookies.get("token");
  const decoded = token ? jwt_decode(token) : null;
  const userId = decoded ? decoded.data.user.id : null;
  const router = useRouter();
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const pilihanKategori = [
    "Umum",
    "S1 Informatika",
    "S1 Sistem Informasi",
    "S1 Teknik Elektro",
  ];
  const [kategori, setKategori] = useState(pilihanKategori[0]);
  const [isiPengumuman, setIsiPengumuman] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!userId) {
      alert("user id tidak ditemukan");
    }

    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axios
      .post("http://localhost:7000/api/pengumuman", {
        userId: userId,
        judul: judulPengumuman,
        deskripsi: isiPengumuman,
        kategori: kategori,
      })
      .then(() => {
        router.push("pengumuman");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="form-create-pengumuman">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <p className="text-2xl font-bold">Buat Pengumuman</p>
              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label className="text-base">Judul Pengumuman</label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    value={judulPengumuman}
                    onChange={(e) => setJudulPengumuman(e.target.value)}
                    className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                  ></input>
                </div>
                <div className="mb-6">
                  <label className="text-base" htmlFor="category">
                    Kategori
                  </label>
                  <select
                    value={kategori}
                    onChange={(e) => setKategori(e.target.value)}
                    className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    id="category"
                    name="category"
                    required
                  >
                    {pilihanKategori.map((kategori, index) => (
                      <option key={index} value={kategori}>
                        {kategori}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="">
                  <label className="text-base" htmlFor="category">
                    Isi Pengumuman
                  </label>
                  <TextEditor
                    value={isiPengumuman}
                    setValue={setIsiPengumuman}
                  />
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    id="tambah-pengumuman"
                    name="tambah-pengumuman"
                    className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
                  >
                    Tambah
                  </button>
                </div>
              </form>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
