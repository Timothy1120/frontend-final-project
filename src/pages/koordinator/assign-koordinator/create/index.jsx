import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import jwt from 'jsonwebtoken';

export default function AssignKoordinator() {
  const router = useRouter();
  const semesterOptions = ["Ganjil", "Genap"];
  const [dosen, setDosen] = useState([]);
  const [batch, setBatch] = useState("");
  const [selectedDosenId, setSelectedDosenId] = useState(null);
  const [tahunAjaran, setTahunAjaran] = useState("");
  const [semester, setSemester] = useState(semesterOptions[0]);

  const [batchError, setBatchError] = useState("");

  //Set Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  function getUserId(token, secretKey) {
    try {
      const decodedToken = jwt.verify(token, secretKey);
      const userId = decodedToken.sub; // atau `decodedToken.userId`

      return userId;
    } catch (error) {
      console.error('Error decoding token:', error);
      return null;
    }
  }
  useEffect(() => {
    const token = Cookies.get("token");
    const secretKey = 'lulusta2023'
    const userId = getUserId(token, secretKey)
    console.log(userId);
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    axios
      .get(`http://localhost:7000/api/dosen/${userId}/byauth`)
      .then((res) => {
        setDosen(res.data.data);
        if (res.data.data.length > 0) {
          // check if the data array has at least one item
          setSelectedDosenId(res.data.data[0].id); // set selectedDosenId to the first item's id
        }
      })
      .catch((error) => {
        console.error("Error fetching dosen", error);
      });
  }, []);
  // function handleBatchChange(event) {
  //   const value = event.target.value;
  //   if (value === "") {
  //     setBatchError("Batch belum terisi");
  //     setBatch("");
  //   } else if (!/^\d+$/.test(value)) {
  //     setBatchError("Batch harus berupa angka bulat positif");
  //   } else {
  //     setBatchError("");
  //     setBatch(value);
  //   }
  // }

  function handleSubmit(event) {
    event.preventDefault();
    if (
      selectedDosenId === null
    ) {
      setError("Semua field harus terisi!");
      setModalOpen(true);
      return;
    }
    // CONSUME THE API
    axios
      .put(`http://localhost:7000/api/dosen/${selectedDosenId}/assign-koor`)
      .then((response) => {
        setSuccess(true);
        setModalOpen(true);
        setTimeout(() => {
          router.push("/koordinator/assign-koordinator");
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
          <main id="assign-koordinator">
            {/* Modal Success */}
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
              <div className="p-6">
                <h2
                  className={`text-2xl mb-4 ${success ? "text-green-600" : "text-red-600"
                    }`}
                >
                  {success ? "Success" : "Error"}
                </h2>
                <p className="text-base">
                  {success ? "Dosen berhasil diassign sebagai koordinator!" : error}
                </p>
                <div className="flex justify-end">
                  {!success && (
                    <button onClick={() => setModalOpen(false)}>Close</button>
                  )}
                </div>
              </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Assign Koordinator</div>
              <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="dosen" className="block font-medium mb-2">
                    Dosen:
                  </label>
                  <select
                    value={selectedDosenId}
                    onChange={(e) => setSelectedDosenId(e.target.value)}
                    id="dosen"
                    name="dosen"
                    className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded"
                    required
                  >
                    {dosen.map((d) => (
                      <option key={d.id} value={d.id}>
                        {d.nama}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="col-span-2">
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
      </div >
    </div >
  );
}
