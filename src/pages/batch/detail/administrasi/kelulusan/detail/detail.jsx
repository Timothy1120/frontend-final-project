import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/user/Sidebar";
import Link from "next/link";
import React, { useState } from "react";
import InputWithOption from "@/components/InputWithOption";
import Button from "@/components/Button";

const dosenOptions = [
  { label: "Jenny Doe, MBA", value: "Jenny Doe, MBA" },
  { label: "John Doe, MBA", value: "John Doe, MBA" },
];

export default function DetailKelulusan() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="transkrip-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <h4 className="text-2xl font-bold mt-8">Detail</h4>
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
                    <p className="font-semibold">Angkatan</p>
                    <p className="font-normal">2019</p>
                  </div>
                </div>
                <div>
                  <div className="text-lg mb-4">
                    <p className="font-semibold">Mitra</p>
                    <p className="font-normal">PT. Sample Company</p>
                  </div>
                  <div className="text-lg mb-4">
                    <p className="font-semibold">Program</p>
                    <p className="font-normal">Studi Independen</p>
                  </div>
                  <div className="text-lg mb-4">
                    <p className="font-semibold">Tanggal Mulai</p>
                    <p className="font-normal">11-11-2023</p>
                  </div>
                  <div className="text-lg">
                    <p className="font-semibold">Tanggal Berakhir</p>
                    <p className="font-normal">11-11-2024</p>
                  </div>
                </div>
                <div>
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
              <div className="grid grid-cols-2 mt-8 mb-4">
                <div>
                  <h4 className="text-2xl font-bold ">Detail</h4>
                  <p className="text-lg text-neutral-400">Belum ada</p>
                </div>
                <form>
                  <div>
                    <label className="block font-medium mb-2">
                      Assign Dosen
                    </label>
                    <InputWithOption
                      options={dosenOptions}
                      onChange={handleChange}
                      placeholder={"Pilih Dosen Pembimbing"}
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Button
                      variant="primary"
                      to="/"
                      text="Assign"
                      textSize="text-sm"
                    />
                  </div>
                </form>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
