import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import React, { useState } from "react";
import InputWithOption from "@/components/InputWithOption";

const mbkmOptions = [
  { label: "Studi/Proyek Independen", value: "Studi/Proyek Independen" },
  { label: "Magang Bersertifikat", value: "Magang Bersertifikat" },
];

export default function TambahKelulusan() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="tambah-kelulusan-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold">Form Informasi Kelulusan</div>
              <hr className="mt-2"></hr>
              <div className="grid grid-cols-2 gap-2 mt-6">
                <div>
                  <form>
                    <div>
                      <label
                        htmlFor="jenis-mbkm"
                        className="block font-medium mb-2"
                      >
                        Jenis MBKM
                      </label>
                      <InputWithOption
                        options={mbkmOptions}
                        onChange={handleChange}
                        placeholder={"Pilih Jenis MBKM.."}
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="nama-program"
                        className="block font-medium mb-2"
                      >
                        Nama Program
                      </label>
                      <input
                        type="text"
                        id="nama-program"
                        name="nama-program"
                        className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="nama-perusahaan"
                        className="block font-medium mb-2"
                      >
                        Nama Perusahaan
                      </label>
                      <input
                        type="text"
                        id="nama-perusahaan"
                        name="nama-perusahaan"
                        className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="tempat-pelaksanaan"
                        className="block font-medium mb-2"
                      >
                        Tempat Pelaksanaan
                      </label>
                      <select
                        id="tempat-pelaksanaan"
                        name="tempat-pelaksanaan"
                        className="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                        required
                      >
                        <option value="Onsite" className="hover:bg-darkblue-02">
                          Onsite
                        </option>
                        <option value="Online" className="hover:bg-darkblue-02">
                          Online
                        </option>
                        <option value="Kampus" className="hover:bg-darkblue-02">
                          Kampus
                        </option>
                      </select>
                    </div>
                    <div className="mt-4">
                      <label
                        htmlFor="bukti-kelulusan"
                        className="block font-medium mb-2"
                      >
                        Bukti Kelulusan
                      </label>
                      <input
                        type="file"
                        id="bukti-kelulusan"
                        name="bukti-kelulusan"
                      />
                    </div>
                    <div className="flex justify-between mt-6">
                      <Button
                        variant="primary"
                        to="/kelulusan/create/tambah"
                        text="Simpan"
                      />
                      <Button variant="danger" to="/kelulusan" text="Batal" />
                    </div>
                  </form>
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
