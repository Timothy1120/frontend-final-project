import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function RequestSPTJM() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="tambah-batch-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Batch MBKM</div>
              <form>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="nama-lengkap"
                      className="block font-medium mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      id="nama-lengkap"
                      name="nama-lengkap"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="program-studi"
                      className="block font-medium mb-2"
                    >
                      Program Studi
                    </label>
                    <input
                      type="text"
                      id="program-studi"
                      name="program-studi"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="nik" className="block font-medium mb-2">
                      NIK
                    </label>
                    <input
                      type="text"
                      id="nik"
                      name="nik"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nomor-handphone"
                      className="block font-medium mb-2"
                    >
                      No. HP (WhatsApp)
                    </label>
                    <input
                      type="text"
                      id="nomor-handphone"
                      name="nomor-handphone"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-medium mb-2">
                      Email Mahasiswa
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="nama-orang-tua"
                      className="block font-medium mb-2"
                    >
                      Nama Orang Tua Penandatangan
                    </label>
                    <input
                      type="text"
                      id="nama-orang-tua"
                      name="nama-orang-tua"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">
                      Surat Rekomendasi
                    </label>
                    <input
                      type="file"
                      id="dokumen-sptjm"
                      name="dokumen-sptjm"
                    />
                  </div>
                </div>
                <div className="flex justify-end mt-2">
                  <Button variant="primary" to="/" text="Kirim" />
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
