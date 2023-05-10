import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Laporan() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="laporan-contents">
            <div className="flex mx-6 my-8 space-x-4">
              <div className="w-2/6 rounded-md border border-neutral-02 shadow-md px-6 py-5">
                <div>
                  <div className="text-base mb-4">
                    <p className="font-bold">Nama</p>
                    <p className="font-normal">Timothy Sipahutar</p>
                  </div>
                  <div className="text-base mb-4">
                    <p className="font-bold">Program</p>
                    <p className="font-normal">Back-End Developer</p>
                  </div>
                  <div className="text-base mb-4">
                    <p className="font-bold">Mitra</p>
                    <p className="font-normal">PT. Ruang Raya Indonesia</p>
                  </div>
                  <div className="text-base mb-4">
                    <p className="font-bold">Tanggal Mulai</p>
                    <p className="font-normal">1 Agustus 2022</p>
                  </div>
                  <div className="text-base">
                    <p className="font-bold">Tanggal Berakhir</p>
                    <p className="font-normal">1 Januari 2023</p>
                  </div>
                </div>
              </div>
              <div className="w-4/6 rounded-md border border-neutral-02 shadow-md px-6 py-5 font-normal">
                <div className="mb-6">
                  <p className="text-darkblue-04 font-bold">Laporan Akhir</p>
                  <input type="file" id="attachment" name="attachment" />
                </div>
                <div>
                  <p className="text-darkblue-04 font-bold">Laporan Akhir</p>
                  <div className="rounded-md border border-neutral-02 shadow-md px-6 py-5 mt-4">
                    <div className="flex justify-between">
                      <span className="inline-flex items-center">
                        <span className="">Week I</span>
                      </span>
                      <Button
                        variant="primary"
                        text="Detail"
                        to="/"
                        textSize="text-sm"
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="rounded-md border border-neutral-02 bg-neutral-02 shadow-md px-6 py-5 mt-4">
                    <div className="flex justify-between">
                      <span className="inline-flex items-center">
                        <span className="">Week II</span>
                      </span>
                      <Button
                        variant="primary"
                        text="Tambah"
                        to="/"
                        textSize="text-sm"
                        size="small"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="rounded-md border border-neutral-02 bg-neutral-02 shadow-md px-6 py-5 mt-4">
                    <div className="flex justify-between">
                      <span className="inline-flex items-center">
                        <span className="">Week III</span>
                      </span>
                      <Button
                        variant="primary"
                        text="Tambah"
                        to="/"
                        textSize="text-sm"
                        size="small"
                        disabled={true}
                      />
                    </div>
                  </div>
                  <div className="rounded-md border border-neutral-02 bg-neutral-02 shadow-md px-6 py-5 mt-4">
                    <div className="flex justify-between">
                      <span className="inline-flex items-center">
                        <span className="">Week IV</span>
                      </span>
                      <Button
                        variant="primary"
                        text="Tambah"
                        to="/"
                        textSize="text-sm"
                        size="small"
                        disabled={true}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
