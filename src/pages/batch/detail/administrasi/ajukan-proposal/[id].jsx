import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Modal from "@/components/Modal";
import { useState } from 'react';
import { useRouter } from "next/router";
import axios from 'axios';
import Cookies from "js-cookie";

export default function AjukanProposal() {
    const router = useRouter();
    const { id } = router.query;

    const programOptions = ["Studi Independen", "Magang"];
    const [file, setFile] = useState(null);
    const [jenisProgram, setJenisProgram] = useState(programOptions[0]);
    const [errors, setErrors] = useState({});

    //Set Modal
    const [isModalOpen, setModalOpen] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        const token = Cookies.get("token");

        const formData = new FormData();

        formData.append('jenis_program', jenisProgram);
        formData.append('dokumen_proposal', file);
        formData.append('batchId', id);
        console.log(formData);
        // try {
        //     const response = await axios.post('http://localhost:8000/proposal', formData, {
        //         headers: {
        //             'Content-Type': 'multipart/form-data',
        //             // 'Authorization': `Bearer ${token}`
        //         },
        //     });
        //     // setSuccess(true);
        //     // setModalOpen(true);
        //     // setTimeout(() => {
        //     //     router.push(`${id}`);
        //     // }, 1000);

        // } catch (error) {
        //     alert(error.message);
        // }
        axios
            .post('http://localhost:8000/proposal', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                },
            })
            .then((res) => {
                setSuccess(true);
                setModalOpen(true);
                setTimeout(() => {
                    router.push(`/batch/detail/administrasi/${id}`);
                }, 1000);
            })
            .catch((error) => {
                setError(error.message);
                setModalOpen(true);
            });
    };


    const handleFileChange = (event) => {
        const file = event.target.files[0];
        console.log(file);
        let error = '';

        if (!file) {
            error = 'File harus diupload.';
        } else if (file.type !== 'application/pdf') {
            error = 'File harus bertipe PDF.';
        } else if (file.size > 2000000) {
            error = 'File tidak boleh lebih dari 2MB.';
        }

        setFile(file);
        setErrors((prevErrors) => ({ ...prevErrors, file: error }));
    };

    const handleJenisProgramChange = (event) => {
        setJenisProgram(event.target.value);

    };
    console.log(jenisProgram)
    return (
        <div className="font-poppins">
            <Navbar></Navbar>
            <div className="flex flex-row">
                <Sidebar />
                <div className="w-full flex flex-col justify-between">
                    <main id="assign-koordinator">
                        <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
                            <div className="p-6">
                                <h2
                                    className={`text-2xl mb-4 ${success ? "text-green-600" : "text-red-600"
                                        }`}
                                >
                                    {success ? "Success" : "Error"}
                                </h2>
                                <p className="text-base">
                                    {success ? "Proposal berhasil diajukan!" : error}
                                </p>
                                <div className="flex justify-end">
                                    {!success && (
                                        <button onClick={() => setModalOpen(false)}>Close</button>
                                    )}
                                </div>
                            </div>
                        </Modal>
                        <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
                            <p className="text-2xl font-bold">Form Pengajuan Proposal</p>
                            <form className="mt-4" onSubmit={onSubmit}>
                                <div className="mb-3">
                                    <label className="text-base">Jenis Program</label>
                                    <select id="jenis_program" name="jenis_program" className="form-select mt-1 block w-full" value={jenisProgram} onChange={handleJenisProgramChange}>
                                        {programOptions.map((option) => (
                                            <option value={option} key={option}>{option}</option>
                                        ))}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="attachment"
                                        className="block font-medium mb-2"
                                    >
                                        Attachment
                                    </label>
                                    <input type="file" id="dokumen_proposal" name="dokumen_proposal" className="block w-full py-2 px-3 rounded-md border border-gray-300 bg-white text-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={handleFileChange} />
                                    {errors.file && <p className="text-red-500 text-xs mt-2">{errors.file}</p>}
                                </div>
                                <div className="flex justify-between mt-6">
                                    {/* <Button variant="primary" to="/" text="Tambah" /> */}
                                    <button type="submit" className="bg-darkblue-04 px-6 py-[1.125rem] text-neutral-01 rounded-lg text-sm
                                    ">Tambah</button>
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
