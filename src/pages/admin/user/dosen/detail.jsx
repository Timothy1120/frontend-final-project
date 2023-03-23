import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Face from "../../../../../public/images/mahasiswa-example.jpeg";

export default function Detail() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="detail-mahasiswa-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Detail Data Dosen</div>
              <div className="flex space-x-8">
                <div className="w-1/3">
                  <Image
                    className="rounded-full object-cover object-center"
                    src={Face}
                    alt="face"
                    height={400}
                    width={400}
                  />
                </div>
                <div className="divide-y divide-neutral-02 w-2/3">
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Nama Lengkap</div>
                    <div className="w-3/5">Pak Dosen</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">NIDN</div>
                    <div className="w-3/5">xxxxxxx</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Email Akademik</div>
                    <div className="w-3/5">ifs19016@students.del.ac.id</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Program Studi</div>
                    <div className="w-3/5">S1 Informatika</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Jabatan</div>
                    <div className="w-3/5">Lektor</div>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
