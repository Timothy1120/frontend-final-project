import MainLayout from "@/components/MainLayout";
import InputWithOption from "@/components/InputWithOption";
import Modal from "@/components/Modal";
import { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useRouter } from "next/router";
import moment from 'moment';

const semesterOptions = [
  { label: "Genap", value: "genap" },
  { label: "Ganjil", value: "ganjil" },
];

export default function TambahBatch() {
  const router = useRouter();

  //Generate Tahun Ajaran
  const generateTahunAjaran = () => {
    const currentYear = moment().year();
    const academicYear1 = `${currentYear - 1}/${currentYear}`;
    const academicYear2 = `${currentYear}/${currentYear + 1}`;
    return [academicYear1, academicYear2];
  };
  const tahunAjaranOptions = generateTahunAjaran();

  const [selectedSemester, setSelectedSemester] = useState(semesterOptions[0].value);
  const [ipkMinimum, setIpkMinimum] = useState("");
  const [namaProgram, setNamaProgram] = useState("");
  const [tahunAjaran, setTahunAjaran] = useState(tahunAjaranOptions[0]);
  const [errorMessage, setErrorMessage] = useState(null);

  // Set Error Message
  // Error Field
  const [namaProgramError, setNamaProgramError] = useState('');
  const [ipkMinimumError, setIPKMinimumError] = useState('');

  //Set Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleNamaProgramChange = (event) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setNamaProgramError('Nama program tidak boleh kosong');
    }
    else if (value.length < 5 || value.length > 20) {
      setNamaProgramError('Nama program harus di antara 10 sampai 100 karakter');
    } else {
      setNamaProgramError('');
    }
    setNamaProgram(value);
  };

  const handleTahunAjaranChange = (event) => {
    const value = event.target.value;
    setTahunAjaran(value);
  };

  const handleSemesterChange = (event) => {
    setSelectedSemester(event.target.value);
  };

  const handleIpkMinimum = (event) => {
    const input = event.target.value;
    let formattedInput = '';

    const onlyNumbers = input.toString().replace(/\D/g, '');
    if (onlyNumbers === '') {
      formattedInput = '';
    } else {
      formattedInput = (parseInt(onlyNumbers, 10) / 100).toFixed(2);
    }

    if (formattedInput < 1.00 || formattedInput > 4.00) {
      setIPKMinimumError('IPK harus di antara 1.00 dan 4.00');
    } else if (formattedInput.trim() === '') {
      setIPKMinimumError('IPK tidak boleh kosong');
    } else {
      setIPKMinimumError('');
    }

    setIpkMinimum(formattedInput);
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
        nama_program: namaProgram,
        tahun_ajaran: tahunAjaran,
        semester: selectedSemester,
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
        let errorMessages = [];
        if (error.response.data && error.response.data.errors && Array.isArray(error.response.data.errors)) {
          errorMessages = error.response.data.errors.map((errorObj) => errorObj.message);
        } else if (error.response.data && error.response.data.message) {
          errorMessages = [error.response.data.message];
        } else {
          errorMessages = ['Terjadi kesalahan saat menambahkan batch.'];
        }

        console.log(error);
        setError(errorMessages);
        setModalOpen(true);
      });
  }


  return (
    <MainLayout>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <div className="p-6">
          <h2
            className={`text-2xl mb-4 ${success ? "text-green-600" : "text-red-600"
              }`}
          >
            {success ? "Success" : "Error"}
          </h2>
          <p className="text-base">
            {success ? "Batch berhasil dibuka!" : error.map((err, index) => <span key={index}>{err}<br /></span>)}
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
                Nama Program
              </label>
              <input
                value={namaProgram}
                onChange={handleNamaProgramChange}
                type="text"
                id="nama-program"
                name="nama-program"
                placeholder="Nama program"
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              />
              {namaProgramError && <p className="text-red-500 text-xs mt-2">{namaProgramError}</p>}
            </div>
            <div>
              <label
                htmlFor="tahun-ajaran"
                className="block font-medium mb-2"
              >
                Tahun Ajaran
              </label>
              <select
                value={tahunAjaran}
                onChange={handleTahunAjaranChange}
                id="tahun-ajaran"
                name="tahun-ajaran"
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              >
                {tahunAjaranOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-medium mb-2">Semester</label>
              <select
                value={selectedSemester}
                onChange={handleSemesterChange}
                id="semester"
                name="semester"
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
              >
                {semesterOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
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
                placeholder="Syarat ipk minimum"
                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                onChange={handleIpkMinimum}
                value={ipkMinimum}
              />
              {ipkMinimumError && (
                <div className="text-red-500 mt-2">{ipkMinimumError}</div>
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
    </MainLayout>
  );
}
