import MainLayout from "@/components/MainLayout";
import Link from "next/link";

export default function DetailPengajuan() {
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md mx-6 mt-4 px-12 py-7">
        <h4 className="text-2xl font-bold">Detail</h4>
        <div className="grid grid-cols-3 mt-4">
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Nama</p>
              <p className="font-normal">Timothy Sipahutar</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Prodi</p>
              <p className="font-normal">S1 Informatika</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">NIK</p>
              <p className="font-normal">138127381273139</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">No. HP (WhatsApp)</p>
              <p className="font-normal">081831298824</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Email Mahasiswa</p>
              <p className="font-normal">email@mail.com</p>
            </div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Nama Orang Tua Penandatangan</p>
              <p className="font-normal">Tuan Krab</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Status Pengajuan</p>
              <p className="font-normal text-success">Diterbitkan</p>
            </div>
            <div className="text-lg">
              <p className="font-semibold">Bukti Kelulusan</p>
              <Link
                href="/"
                className="text-blue-500 hover:text-blue-700 underline"
              >
                Unduh Disini
              </Link>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
