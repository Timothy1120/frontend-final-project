import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import Input from "@/components/Input";

export default function UploadDokumen() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="assign-koordinator">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <p className="text-2xl font-bold">Tambah Dokumen</p>
              <form className="mt-4">
                <div className="mb-3">
                  <Input
                    label={"Judul Dokumen"}
                    inputType={"text"}
                    inputFor={"tambah-dokumen"}
                    inputId={"tambah-dokumen"}
                    inputName={"tambah-dokumen"}
                    placeholder={"Isi Judul Dokumen"}
                  />
                </div>
                <div className="mb-3">
                  <label className="text-base">Deskripsi</label>
                  <textarea
                    id="description"
                    name="description"
                    type=""
                    className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label
                    htmlFor="attachment"
                    className="block font-medium mb-2"
                  >
                    Attachment
                  </label>
                  <input type="file" id="attachment" name="attachment" />
                </div>
                <div className="flex justify-between mt-6">
                  <Button variant="primary" to="/" text="Tambah" />
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
