import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { useState } from 'react';
import axios from 'axios';
export default function AjukanProposal() {
    const programOptions = ["Studi Independen", "Magang"];
    const [file, setFile] = useState(null);
    const [jenisProgram, setJenisProgram] = useState(programOptions[0]);
    const [errors, setErrors] = useState({});


    const onSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();

        formData.append('jenis_program', jenisProgram);
        formData.append('dokumen_proposal', file);
        // formData.append('mahasiswaId', 1);
        // formData.append('batchId', 2);
        console.log(formData);
        // const token = Cookies.get('token');
        try {
            const response = await axios.post('http://localhost:7000/api/proposal', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    // 'Authorization': `Bearer ${token}`
                },
            });

            console.log(response.data);
        } catch (error) {
            console.error(error);
        }
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
                                    <button type="submit">Tambah</button>
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
