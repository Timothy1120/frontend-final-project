import Modal from "@/components/Modal";
import MainLayout from "@/components/MainLayout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";
import moment from "moment";

export default function InputKelulusan() {
    const router = useRouter();
    const { id } = router.query;
    const token = Cookies.get("token");
    const programOptions = ["Studi Independen", "Magang"];
    const [file, setFile] = useState(null);
    const [jenisProgram, setJenisProgram] = useState(programOptions[0]);
    const [namaKegiatan, setNamaKegiatan] = useState('');
    const [mitra, setMitra] = useState('');
    const [tanggalMulai, setTanggalMulai] = useState('');
    const [tanggalBerakhir, setTanggalBerakhir] = useState('');
    const [tempatPelaksanaan, setTempatPelaksanaan] = useState('');
    const [fileName, setFileName] = useState(null);
    const [batchId, setBatchId] = useState(null);
    const [errors, setErrors] = useState({});
    const [filePath, setFilePath] = useState('');

    // Error Field
    const [namaKegiatanError, setNamaKegiatanError] = useState('');
    const [mitraError, setMitraError] = useState('');
    const [tanggalMulaiError, setTanggalMulaiError] = useState('');
    const [tanggalBerakhirError, setTanggalBerakhirError] = useState('');
    const [tempatPelaksanaanError, setTempatPelaksanaanError] = useState('');
    //Set Modal
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            try {
                axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
                const response = await axios.get(
                    `http://localhost:7000/api/mahasiswambkm/${id}`
                );
                console.log(response.data.data)
                setNamaKegiatan(response.data.data.nama_kegiatan);
                setMitra(response.data.data.mitra);
                setTanggalMulai(new Date(response.data.data.tanggal_mulai).toISOString().slice(0, 10));
                setTanggalBerakhir(new Date(response.data.data.tanggal_berakhir).toISOString().slice(0, 10));
                setTempatPelaksanaan(response.data.data.tempat_pelaksanaan);
                if (response.data.data.jenis_mbkm === "Studi Independen") {
                    setJenisProgram(programOptions[0]);
                } else {
                    setJenisProgram(programOptions[1]);
                }
                setBatchId(response.data.data.batchId);
                setFilePath(response.data.data.bukti_kelulusan_path);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();

    }, [id]);




    const onSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get("token");
        const formData = new FormData();
        formData.append("nama_kegiatan", namaKegiatan);
        formData.append("jenis_mbkm", jenisProgram);
        formData.append("mitra", mitra);
        formData.append("tanggal_mulai", moment(tanggalMulai).toISOString());
        formData.append("tanggal_berakhir", moment(tanggalBerakhir).toISOString());
        formData.append("dokumen_proposal", file);
        formData.append("tempat_pelaksanaan", tempatPelaksanaan);
        formData.append("oldfilepath", filePath);
        axios
            .put(`http://localhost:8000/mahasiswambkm/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setSuccess(true);
                setModalOpen(true);
                setTimeout(() => {
                    router.push(`/batch/detail/administrasi/kelulusan/${batchId}`);
                }, 1000);
            })
            .catch((error) => {
                let errorMessages = [];
                if (typeof error.response.data === 'string') {
                    errorMessages = [error.response.data];
                } else if (typeof error.response.data === 'object' && Array.isArray(error.response.data.errors)) {
                    errorMessages = error.response.data.errors.map((errorObj) => errorObj.message);
                }

                setError(errorMessages);
                setModalOpen(true);
            });
    };

    const handleFileChange = (event) => {
        const file =
            event.type === "drop"
                ? event.dataTransfer.files[0]
                : event.target.files[0];
        console.log(file);
        let error = "";

        if (!file) {
            error = "File harus diupload.";
        } else if (file.type !== "application/pdf") {
            error = "File harus bertipe PDF.";
        } else if (file.size > 2000000) {
            error = "File tidak boleh lebih dari 2MB.";
        }

        setFile(file);
        setFileName(file ? file.name : null);
        setErrors((prevErrors) => ({ ...prevErrors, file: error }));
    };

    const handleJenisProgramChange = (event) => {
        setJenisProgram(event.target.value);
    };

    const handleNamaKegiatanChange = (event) => {
        const value = event.target.value;
        if (value.trim() === '') {
            setNamaKegiatanError('Nama kegiatan tidak boleh kosong');
        }
        else if (value.length < 5 || value.length > 100) {
            setNamaKegiatanError('Nama kegiatan harus di antara 5 sampai 100 karakter');
        } else {
            setNamaKegiatanError('');
        }
        setNamaKegiatan(value);
    };

    const handleTempatPelaksanaanChange = (event) => {
        const value = event.target.value;
        if (value.trim() === '') {
            setTempatPelaksanaanError('Tempat Pelaksanaan tidak boleh kosong');
        }
        else if (value.length < 5 || value.length > 100) {
            setTempatPelaksanaanError('Tempat Pelaksanaan harus di antara 5 sampai 100 karakter');
        } else {
            setTempatPelaksanaanError('');
        }
        setTempatPelaksanaan(value);
    };
    const handleMitraChange = (event) => {
        const value = event.target.value;
        if (value.trim() === '') {
            setMitraError('Mitra tidak boleh kosong');
        }
        else if (value.length < 5 || value.length > 100) {
            setMitraError('Mitra harus di antara 5 sampai 100 karakter');
        } else {
            setMitraError('');
        }
        setMitra(value);
    };

    const handleTanggalMulaiChange = (event) => {
        const value = event.target.value;
        if (value.trim() === '') {
            setTanggalMulaiError('Tanggal mulai tidak boleh kosong');
        } else if (value >= tanggalBerakhir) {
            setTanggalMulaiError('Tanggal mulai harus sebelum tanggal berakhir');
            setTanggalBerakhir('')
        } else {
            setTanggalMulaiError('');
        }
        setTanggalMulai(value);
    };

    const handleTanggalBerakhirChange = (event) => {
        const value = event.target.value;
        if (value.trim() === '') {
            setTanggalBerakhirError('Tanggal berakhir tidak boleh kosong');
        } else if (value <= tanggalMulai) {
            setTanggalBerakhirError('Tanggal berakhir harus setelah tanggal mulai');
        } else {
            setTanggalBerakhirError('');
            setTanggalMulaiError('')
        }
        setTanggalBerakhir(value);
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleRemoveFilePath = (event) => {
        event.stopPropagation();
        setFilePath(null);
        setErrors((prevErrors) => ({ ...prevErrors, file: null }));
    };
    const handleRemoveFileName = () => {
        setFile(null);
        // setFilePath(filePath);
    };

    console.log('Nama Kegiatan: ', namaKegiatan);
    console.log('Mitra: ', mitra);
    console.log('Tanggal Mulai: ', tanggalMulai);
    console.log('Tanggal Berakhir: ', tanggalBerakhir);
    console.log('Jenis Program: ', jenisProgram);
    console.log('Tempat Pelaksanaan: ', tempatPelaksanaan);
    console.log('BatchId: ', batchId);
    console.log('File: ', file);

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
                        {success
                            ? "Informasi kelulusan berhasil diupdate!"
                            : error.map((err, index) => <span key={index}>{err}<br /></span>)
                        }
                    </p>
                    <div className="flex justify-end">
                        {!success && (
                            <button onClick={() => setModalOpen(false)}>Close</button>
                        )}
                    </div>
                </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
                <p className="text-2xl font-bold">Update Input Kelulusan Di Mitra</p>
                <form className="mt-4" onSubmit={onSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label
                                htmlFor="nama_kegiatan"
                                className="block font-medium mb-2"
                            >
                                Nama Kegiatan
                            </label>
                            <input
                                value={namaKegiatan}
                                onChange={handleNamaKegiatanChange}
                                type="text"
                                id="nama_kegiatan"
                                name="nama_kegiatan"
                                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                            />
                            {namaKegiatanError && <p className="text-red-500 text-xs mt-2">{namaKegiatanError}</p>}
                        </div>
                        <div>
                            <label
                                htmlFor="mitra"
                                className="block font-medium mb-2"
                            >
                                Mitra
                            </label>
                            <input
                                value={mitra}
                                onChange={handleMitraChange}
                                type="text"
                                id="mitra"
                                name="mitra"
                                className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                            />
                            {mitraError && <p className="text-red-500 text-xs mt-2">{mitraError}</p>}
                        </div>
                        <div>
                            <label className="block font-medium mb-2" htmlFor="tanggal_mulai">Tanggal Mulai</label>
                            <input
                                type="date"
                                id="tanggalMulai"
                                name="tanggal_mulai"
                                value={tanggalMulai}
                                onChange={handleTanggalMulaiChange}
                                min={moment().format("YYYY-MM-DD")} // Memastikan tanggal minimal adalah tanggal saat ini
                                required
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                            />
                            {tanggalMulaiError && <p className="text-red-500 text-xs mt-2">{tanggalMulaiError}</p>}
                        </div>
                        <div>
                            <label
                                htmlFor="tanggal_berakhir"
                                className="block font-medium mb-2"
                            >
                                Tanggal Berakhir
                            </label>
                            <input
                                type="date"
                                id="tanggal_berakhir"
                                name="tanggal_berakhir"
                                value={tanggalBerakhir}
                                onChange={handleTanggalBerakhirChange}
                                min={tanggalMulai} // Memastikan tanggal minimal adalah start date yang telah dipilih
                                required
                                className="w-full px-3 py-2 border border-gray-400 rounded-md focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                            />
                            {tanggalBerakhirError && <p className="text-red-500 text-xs mt-2">{tanggalBerakhirError}</p>}
                        </div>
                    </div>
                    <div className="mb-3 mt-2">
                        <label
                            htmlFor="nama_kegiatan"
                            className="block font-medium mb-2"
                        >
                            Tempat Pelaksanaan
                        </label>
                        <input
                            value={tempatPelaksanaan}
                            onChange={handleTempatPelaksanaanChange}
                            type="text"
                            id="tempat_pelaksanaan"
                            name="tempat_pelaksanaan"
                            className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                        />
                        {tempatPelaksanaanError && <p className="text-red-500 text-xs mt-2">{tempatPelaksanaanError}</p>}
                    </div>
                    <div className="mb-3 mt-2">
                        <label className="text-base">Jenis Program</label>
                        <select
                            id="jenis_program"
                            name="jenis_program"
                            className="form-select mt-1 block w-full"
                            value={jenisProgram}
                            onChange={handleJenisProgramChange}
                        >
                            {programOptions.map((option) => (
                                <option value={option} key={option}>
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className="mb-3">
                        <label
                            htmlFor="attachment"
                            className="block font-medium mb-2"
                        >
                            Bukti Kelulusan
                        </label>
                        {/* <input type="file" id="dokumen_proposal" name="dokumen_proposal" className="block w-full py-2 px-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleFileChange} />
                                    {errors.file && <p className="text-red-500 text-xs mt-2">{errors.file}</p>} */}
                        <div className="flex items-center justify-center w-full">
                            <label
                                for="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                            >
                                <div
                                    className="flex flex-col items-center justify-center pt-5 pb-6"
                                    onDrop={handleFileChange}
                                    onDragOver={handleDragOver}
                                >
                                    {filePath ? (
                                        <>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                {filePath}
                                            </p>
                                            <button
                                                onClick={handleRemoveFilePath}
                                                className="text-xs text-white p-1 rounded-sm bg-red-600"
                                            >
                                                Remove File
                                            </button>
                                        </>
                                    ) : fileName ? (
                                        <>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                {fileName}
                                            </p>
                                            <a
                                                onClick={handleRemoveFileName}
                                                className="text-xs text-white p-1 rounded-sm bg-red-600"
                                            >
                                                Remove File
                                            </a>
                                        </>
                                    ) : (
                                        <>
                                            <svg
                                                fill="none"
                                                stroke="currentColor"
                                                strokeWidth={1.5}
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                                aria-hidden="true"
                                                className="w-10 h-10 mb-3 text-gray-400"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
                                                />
                                            </svg>
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span>{" "}
                                                or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                PDF (MAX. 2MB)
                                            </p>
                                        </>
                                    )}
                                </div>
                                <input
                                    id="dropzone-file"
                                    name="dokumen_proposal"
                                    type="file"
                                    className="hidden"
                                    onChange={handleFileChange}
                                />
                            </label>
                        </div>
                        {errors.file && (
                            <p className="text-red-500 text-xs mt-2">{errors.file}</p>
                        )}
                    </div>
                    <div className="flex justify-end mt-6">
                        {/* <Button variant="primary" to="/" text="Tambah" /> */}
                        <button
                            type="submit"
                            className="bg-darkblue-04 px-6 py-[1.125rem] text-neutral-01 rounded-lg text-sm
                                    "
                        >
                            Tambah
                        </button>
                    </div>
                </form>
            </div>
        </MainLayout>
    );
}
