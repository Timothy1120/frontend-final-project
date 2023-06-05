import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Input from "@/components/Input";
import Modal from "@/components/Modal";
import dynamic from 'next/dynamic';
import { useState } from 'react';
import { useRouter } from "next/router";
const TextEditor = dynamic(
  () => import('@/components/TextEditor'),
  { ssr: false }
);

export default function UploadDokumen() {
  const router = useRouter();
  const { id } = router.query;

  const [judul, setJudul] = useState('');
  const [deskripsi, setDeskripsi] = useState('');


  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState(null);
  const [errors, setErrors] = useState({});

  // Set Modal
  const [isModalOpen, setModalOpen] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Submit Handle
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append('document_title', judul);
    formData.append('document_description', deskripsi);
    formData.append('dokumen_administrasi', file);
    formData.append('batchId', id);
    axios
      .post('http://localhost:8000/document', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
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
        setError(error.response.data);
        setModalOpen(true);
      });
  };

  const handleJudulChange = (event) => {
    setJudul(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.type === 'drop' ? event.dataTransfer.files[0] : event.target.files[0];
    console.log(file);
    let error = '';

    const allowedFileTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-powerpoint', 'application/vnd.openxmlformats-officedocument.presentationml.presentation', 'image/jpeg', 'image/jpg', 'image/png', 'application/x-rar-compressed', 'application/zip'];

    if (!file) {
      error = 'File harus diupload.';
    } else if (!allowedFileTypes.includes(file.type)) {
      error = 'File harus bertipe PDF, DOC, DOCX, PPT, PPTX, JPEG, JPG, PNG, RAR, atau ZIP.';
    } else if (file.size > 10 * 1024 * 1024) {
      error = 'File tidak boleh lebih dari 10MB.';
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

  console.log('Judul :', judul);
  console.log('Deskripsi :', deskripsi);
  console.log('File :', file);

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
                  {success ? "Dokumen administrasi berhasil diupload!" : error}
                </p>
                <div className="flex justify-end">
                  {!success && (
                    <button onClick={() => setModalOpen(false)}>Close</button>
                  )}
                </div>
              </div>
            </Modal>
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <p className="text-2xl font-bold">Upload Dokumen Administrasi</p>
              <form className="mt-4" onSubmit={onSubmit}>
                <div className="mb-3">
                  <Input
                    label={"Judul Dokumen"}
                    inputType={"text"}
                    inputFor={"judul-dokumen"}
                    inputId={"judul-dokumen"}
                    inputName={"judul-dokumen"}
                    placeholder={"Isi judul dokumen"}
                    onChange={handleJudulChange}
                  />
                </div>
                <div className="mb-3">
                  <label className="text-base">Deskripsi</label>
                  <TextEditor value={deskripsi} setValue={setDeskripsi} />
                </div>
                <div className="mb-3">
                  <label
                    className="block font-medium mb-2"
                  >
                    Attachment
                  </label>
                  <div class="flex items-center justify-center w-full">
                    <label forhtml="dropzone-file" class="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800  hover:bg-gray-100 ">
                      <div class="flex flex-col items-center justify-center pt-5 pb-6" onDrop={handleFileChange}
                        onDragOver={handleDragOver}>
                        {fileName ?
                          <>
                            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">{fileName}</p>
                            <button onClick={handleRemoveFile} class="text-xs text-white p-1 rounded-sm bg-red-600">Remove File</button>
                          </> :
                          <>
                            <svg fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18" />
                            </svg>
                            <p class="mb-2 text-sm text-gray-500 dark:text-gray-400"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                            <p class="text-xs text-gray-500 dark:text-gray-400">PDF, DOC, DOCX, PPT, PPTX, JPEG, JPG, PNG, RAR, or ZIP (MAX. 10MB - single file)</p>
                          </>
                        }
                      </div>
                      <input id="dropzone-file" name="dokumen_administrasi" type="file" class="hidden" onChange={handleFileChange} />
                    </label>
                  </div>
                  {errors.file && <p className="text-red-500 text-xs mt-2">{errors.file}</p>}
                </div>
                <div className="flex justify-between mt-6">
                  <button
                    type="submit"
                    id="tambah-dokumen"
                    name="tambah-dokumen"
                    className="px-6 py-[1.125rem] bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
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
