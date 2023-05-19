import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import Input from "@/components/Input";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from 'next/router';

export default function AssignKoordinator() {
  const router = useRouter();
  const prodiOptions = ["S1 Informatika", "S1 Teknik Elektro", "S1 Sistem Informasi"];
  const semesterOptions = ["Ganjil", "Genap"];
  const [dosen, setDosen] = useState([]);
  const [batch, setBatch] = useState("");
  const [prodi, setProdi] = useState(prodiOptions[0]);
  const [selectedDosenId, setSelectedDosenId] = useState(null);
  const [tahunAjaran, setTahunAjaran] = useState("");
  const [semester, setSemester] = useState(semesterOptions[0]);

  const [batchError, setBatchError] = useState("");

  //Set Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:7000/api/dosen?program_studi=${prodi}`)
      .then(res => {
        setDosen(res.data.data);
        if (res.data.data.length > 0) {  // check if the data array has at least one item
          setSelectedDosenId(res.data.data[0].id);  // set selectedDosenId to the first item's id
        }
      })
      .catch(error => {
        console.error('Error fetching dosen', error);
      })
  }, [prodi])
  console.log("selectedDosenid", selectedDosenId);
  console.log("prodi", prodi);
  console.log("batch", batch);
  console.log("tahun ajaran", tahunAjaran);
  console.log("semester", semester);

  function handleBatchChange(event) {
    const value = event.target.value;
    if (value === "") {
      setBatchError("Batch belum terisi");
      setBatch("");
    } else if (!/^\d+$/.test(value)) {
      setBatchError("Batch harus berupa angka bulat positif");
    } else {
      setBatchError("");
      setBatch(value);
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (selectedDosenId === null || prodi === '' || batch === '' || tahunAjaran === '' || semester === '') {
      setError('Semua field harus terisi!');
      setModalOpen(true);
      return;
    }
    // CONSUME THE API
    axios.post('http://localhost:7000/api/koordinator', {
      dosenId: Number(selectedDosenId),
      program_studi: prodi,
      batch: Number(batch),
      tahun_ajaran: Number(tahunAjaran),
      semester: semester,
    })
      .then(response => {
        setSuccess(true);
        setModalOpen(true)
        setTimeout(() => {
          router.push('/admin/user/koordinator');
        }, 1000);
      })
      .catch(error => {
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
          <main id="assign-koordinator">
            {/* Modal Success */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <div className="p-6">
                <h2 className={`text-2xl mb-4 ${success ? 'text-green-600' : 'text-red-600'}`}>{success ? 'Success' : 'Error'}</h2>
                <p className="text-base">{success ? 'Koordinator berhasil ditambahkan!' : error}</p>
                <div className="flex justify-end">
                  {!success && <button onClick={() => setModalOpen(false)}>Close</button>}
                </div>

              </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Assign Koordinator</div>
              <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="program-studi"
                    className="block font-medium mb-2"
                  >
                    Program Studi:
                  </label>
                  <select value={prodi} onChange={e => setProdi(e.target.value)} class="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required id="program_studi"
                    name="program_studi">
                    {prodiOptions.map(p => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="dosen" className="block font-medium mb-2">
                    Dosen:
                  </label>
                  <select value={selectedDosenId} onChange={e => setSelectedDosenId(e.target.value)} id="dosen"
                    name="dosen"
                    className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded"
                    required>
                    {dosen.map(d => (
                      <option key={d.id} value={d.id}>{d.nama}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <Input
                    label={"Batch"}
                    inputType={"text"}
                    inputFor={"batch"}
                    inputId={"batch"}
                    inputName={"batch"}
                    id="batch"
                    name="batch"
                    className={`${batchError
                      ? "focus:border-danger focus:ring focus:outline-none focus:ring-danger"
                      : ""
                      }`}
                    value={batch}
                    onChange={handleBatchChange}
                    placeholder={"Isi batch MBKM"}
                  />
                  {batchError && (
                    <div className="mt-2 text-sm text-danger">{batchError}</div>
                  )}
                </div>
                <Input
                  label={"Tahun Ajaran"}
                  inputFor={"tahun_ajaran"}
                  inputId={"tahun_ajaran"}
                  inputName={"tahun_ajaran"}
                  placeholder={"Isi tahun ajaran"}
                  value={tahunAjaran}
                  onChange={e => setTahunAjaran(e.target.value)}
                />
                <div>
                  <label htmlFor="semester" className="block font-medium mb-2">
                    Semester:
                  </label>
                  <select value={semester} onChange={e => setSemester(e.target.value)} class="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required id="semester"
                    name="semester" className="focus:border-darkblue-04 focus:ring focus:outline-none focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded ">
                    {semesterOptions.map(s => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div class="col-span-2">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      id="assign-koordinator"
                      name="assign-koordinator"
                      className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"

                    >
                      Assign
                    </button>

                  </div>
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
