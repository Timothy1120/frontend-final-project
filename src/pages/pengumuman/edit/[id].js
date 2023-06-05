import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt_decode from "jwt-decode";

export default function EditPengumuman() {
  const token = Cookies.get("token");
  console.log(token);
  const decoded = jwt_decode(token);
  const userId = decoded.data.user.id;
  const router = useRouter();
  const { id } = router.query;
  const [judulPengumuman, setJudulPengumuman] = useState("");
  const pilihanKategori = [
    "Umum",
    "S1 Informatika",
    "S1 Sistem Informasi",
    "S1 Teknik Elektro",
  ];
  const [kategori, setKategori] = useState([]);
  const [isiPengumuman, setIsiPengumuman] = useState();

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/pengumuman/${id}`)
      .then((data) => {
        setJudulPengumuman(data.data.data.judul);
        setKategori(data.data.data.kategori);
        setIsiPengumuman(data.data.data.deskripsi);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  async function handleUpdate(event) {
    event.preventDefault();

    axios
      .put(`http://localhost:7000/api/pengumuman/${id}`, {
        userId: userId,
        judul: judulPengumuman,
        deskripsi: isiPengumuman,
        kategori: kategori,
      })
      .then(() => {
        router.push("/koordinator/pengumuman");
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <>
      <div className="font-poppins">
        <Navbar></Navbar>
        <div className="flex flex-row">
          <Sidebar></Sidebar>
          <div className="w-full flex flex-col justify-between">
            <main id="form-create-pengumuman">
              <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
                <p className="text-2xl font-bold">Edit Pengumuman</p>
                <form className="mt-4" onSubmit={handleUpdate}>
                  <div className="mb-3">
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
                  <div className="mb-3">
                    <label className="text-base">Kategori</label>
                    <select
                      value={kategori}
                      onChange={(e) => setKategori(e.target.value)}
                      class="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
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
                  <div className="mb-3">
                    <label className="text-base">Isi Pengumuman</label>
                    <textarea
                      id="isi-pengumuman"
                      name="isi-pengumuman"
                      type=""
                      value={isiPengumuman}
                      onChange={(e) => setIsiPengumuman(e.target.value)}
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    ></textarea>
                  </div>
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      id="tambah-pengumuman"
                      name="tambah-pengumuman"
                      className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
                    >
                      Edit
                    </button>
                  </div>
                </form>
              </div>
            </main>
            <Footer></Footer>
          </div>
        </div>
      </div>
    </>
  );
}
