import MainLayout from "@/components/MainLayout";
import Button from "@/components/Button";
import { useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { UserContext } from "../../../../../src/context/UserContext";
import { useRouter } from "next/router";

export default function RequestSPTJM() {
  const { user } = useContext(UserContext);
  const token = Cookies.get("token");
  const router = useRouter();
  const [proposal, setProposal] = useState([]);
  const [selectedProposal, setSelectedProposal] = useState(null);
  console.log(selectedProposal);

  // request body
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorHandphone, setNomorHandphone] = useState("");
  const [email, setEmail] = useState("");
  const [nik, setNik] = useState("");
  const [namaOrangTua, setNamaOrangTua] = useState("");

  console.log(namaLengkap);
  console.log(nomorHandphone);
  console.log(email);
  console.log(nik);
  console.log(namaOrangTua);
  
  function handleSubmit(event) {
    event.preventDefault();
    axios
      .post(
        "http://localhost:7000/api/sptjm",
        {
          nama_lengkap: namaLengkap,
          no_wa: nomorHandphone,
          email: email,
          nik: nik,
          nama_ot_ttd: namaOrangTua,
          proposalId: selectedProposal,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then(() => {
        router.push("/baa/sptjm");
      })
      .catch((err) => {
        alert(err.message);
      });
  }

  useEffect(() => {
    if (user?.detailInfo?.id) {
      const fetchProposal = async () => {
        try {
          axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
          const mahasiswaId = user?.detailInfo?.id;
          console.log(mahasiswaId);
          const response = await axios.get(
            `http://localhost:7000/api/proposal/${mahasiswaId}/proposalmahasiswa`
          );
          setProposal(response.data.data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchProposal();
    }
  }, [user?.detailInfo?.id]);
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="text-lg font-bold mb-14">Form Pengajuan SPTJM</div>
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="nama-lengkap" className="block font-medium mb-2">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama-lengkap"
                name="nama-lengkap"
                value={namaLengkap}
                onChange={(e) => setNamaLengkap(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="nik" className="block font-medium mb-2">
                NIK
              </label>
              <input
                type="text"
                id="nik"
                name="nik"
                value={nik}
                onChange={(e) => setNik(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="nomor-handphone"
                className="block font-medium mb-2"
              >
                No. HP (WhatsApp)
              </label>
              <input
                type="text"
                id="nomor-handphone"
                name="nomor-handphone"
                value={nomorHandphone}
                onChange={(e) => setNomorHandphone(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Email Mahasiswa
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label
                htmlFor="nama-orang-tua"
                className="block font-medium mb-2"
              >
                Nama Orang Tua Penandatangan
              </label>
              <input
                type="text"
                id="nama-orang-tua"
                name="nama-orang-tua"
                value={namaOrangTua}
                onChange={(e) => setNamaOrangTua(e.target.value)}
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
            </div>
            <div>
              <label className="block font-medium mb-2">
                Proposal yang telah disetujui
              </label>
              <select
                value={selectedProposal}
                onChange={(e) => setSelectedProposal(e.target.value)}
                id="proposal"
                name="proposal"
                className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded"
                required
              >
                {proposal.map((p) => (
                  <option key={p.id} value={p.id}>
                    Surat Rekomendasi - {p.id}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              id="ajukan-proposal"
              name="ajukan-proposal"
              className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
            >
              Kirim
            </button>
          </div>
        </form>
      </div>
    </MainLayout>
  );
}
