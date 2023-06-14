import Modal from "@/components/Modal";
import MainLayout from "@/components/MainLayout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Cookies from "js-cookie";

export default function KirimTranskrip() {
    const router = useRouter();
    const { id } = router.query;
    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState(null);
    const [errors, setErrors] = useState({});


    //Set Modal
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState([]);
    const [success, setSuccess] = useState(false);

    const axiosInstance = axios.create({
        baseURL: "http://localhost:8000",
        timeout: 5000, // Timeout diatur menjadi 5 detik
    });

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get("token");

        const formData = new FormData();
        formData.append("dokumen_proposal", file);

        axiosInstance
            .put(`/transkrip_nilai/${id}`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((res) => {
                setSuccess(true);
                setModalOpen(true);
                setTimeout(() => {
                    router.push(`/baa/transkrip/`);
                }, 1000);
            })
            .catch((error) => {
                let errorMessages = [];
                console.log(error);
                if (error.response.data.message) {
                    errorMessages = [error.response.data.message];
                } else if (
                    typeof error.response.data === "object" &&
                    Array.isArray(error.response.data.errors)
                ) {
                    errorMessages = error.response.data.errors.map(
                        (errorObj) => errorObj.message
                    );
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



    const handleDragOver = (event) => {
        event.preventDefault();
    };

    const handleRemoveFile = () => {
        setFile(null);
        setFileName(null);
        setErrors((prevErrors) => ({ ...prevErrors, file: null }));
    };


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
                            ? "Transkrip berhasil dikirim!"
                            : error.map((err, index) => (
                                <span key={index}>
                                    {err}
                                    <br />
                                </span>
                            ))}
                    </p>
                    <div className="flex justify-end">
                        {!success && (
                            <button onClick={() => setModalOpen(false)}>Close</button>
                        )}
                    </div>
                </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
                <p className="text-2xl font-bold">Kirim Transkrip</p>
                <form className="mt-4" onSubmit={onSubmit}>
                    <div className="mb-3">
                        <label htmlFor="attachment" className="block font-medium mb-2">
                            Attachment
                        </label>
                        {/* <input type="file" id="dokumen_proposal" name="dokumen_proposal" className="block w-full py-2 px-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleFileChange} />
                                    {errors.file && <p className="text-red-500 text-xs mt-2">{errors.file}</p>} */}
                        <div className="flex items-center justify-center w-full">
                            <label
                                htmlFor="dropzone-file"
                                className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 "
                            >
                                <div
                                    className="flex flex-col items-center justify-center pt-5 pb-6"
                                    onDrop={handleFileChange}
                                    onDragOver={handleDragOver}
                                >
                                    {fileName ? (
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
                                                {fileName}
                                            </p>
                                            <button
                                                onClick={handleRemoveFile}
                                                className="text-xs text-white p-1 rounded-sm bg-red-600"
                                            >
                                                Remove File
                                            </button>
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
