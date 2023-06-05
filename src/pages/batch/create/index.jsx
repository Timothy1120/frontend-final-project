import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import InputWithOption from "@/components/InputWithOption";
import Modal from "@/components/Modal";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
const semesterOptions = [
  { label: "Genap", value: "genap" },
  { label: "Ganjil", value: "ganjil" },
];

export default function TambahBatch() {
  const router = useRouter();
  const [selectedSemester, setSelectedSemester] = useState(semesterOptions[0]);
  const [ipkMinimum, setIpkMinimum] = useState("");
  const [gelombang, setGelombang] = useState("");
  const [namaProgram, setNamaProgram] = useState("");
  const [tahunAjaran, setTahunAjaran] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  //Set Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleGelombangChange = (event) => {
    setGelombang(event.target.value);
  };

  const handleNamaProgramChange = (event) => {
    setNamaProgram(event.target.value);
  };

  const handleTahunAjaranChange = (event) => {
    setTahunAjaran(event.target.value);
  };

  const handleSemesterChange = (selected) => {
    setSelectedSemester(selected);
    console.log(selectedSemester.value);
  };

  const handleIpMinimum = (event) => {
    const ipk = event.target.value;
    setIpkMinimum(ipk);
  };

  function handleSubmit(event) {
    event.preventDefault();

    const token = Cookies.get("token");
    axios.interceptors.request.use((config) => {
      config.headers.Authorization = `Bearer ${token}`;
      return config;
    });

    axios
      .post("http://localhost:7000/api/batch", {
        gelombang: Number(gelombang),
        nama_program: namaProgram,
        tahun_ajaran: Number(tahunAjaran),
        semester: selectedSemester.value,
        ipk_minimum: ipkMinimum,
      })
      .then((res) => {
        setSuccess(true);
        setModalOpen(true);
        setTimeout(() => {
          router.push("/batch");
        }, 1000);
      })
      .catch((error) => {
        setError(error.response.data.message);
        setModalOpen(true);
      });
  }

  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="tambah-batch-contents">
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <div className="p-6">
                <h2
                  className={`text-2xl mb-4 ${
                    success ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {success ? "Success" : "Error"}
                </h2>
                <p className="text-base">
                  {success ? "Batch berhasil dibuka!" : error}
                </p>
                <div className="flex justify-end">
                  {!success && (
                    <button onClick={() => setModalOpen(false)}>Close</button>
                  )}
                </div>
              </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Batch MBKM</div>
              <form onSubmit={handleSubmit}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="gelombang-program"
                      className="block font-medium mb-2"
                    >
                      Gelombang Program
                    </label>
                    <input
                      value={gelombang}
                      onChange={handleGelombangChange}
                      type="text"
                      id="gelombang-program"
                      name="gelombang-program"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gelombang-program"
                      className="block font-medium mb-2"
                    >
                      Nama Program
                    </label>
                    <input
                      value={namaProgram}
                      onChange={handleNamaProgramChange}
                      type="text"
                      id="gelombang-program"
                      name="gelombang-program"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tahun-ajaran"
                      className="block font-medium mb-2"
                    >
                      Tahun Ajaran
                    </label>
                    <input
                      value={tahunAjaran}
                      onChange={handleTahunAjaranChange}
                      type="text"
                      id="tahun-ajaran"
                      name="tahun-ajaran"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Semester</label>
                    <InputWithOption
                      options={semesterOptions}
                      onChange={handleSemesterChange}
                      placeholder={"Pilih Semester.."}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ipk-minimum"
                      className="block font-medium mb-2"
                    >
                      IPK Minimum
                    </label>
                    <input
                      type="text"
                      id="ipk-minimum"
                      name="ipk-minimum"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                      onChange={handleIpMinimum}
                      value={ipkMinimum}
                    />
                    {errorMessage && (
                      <div className="text-red-500 mt-2">{errorMessage}</div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <button
                    type="submit"
                    className="bg-darkblue-04 px-6 py-[1.125rem] text-neutral-01 rounded-lg"
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
