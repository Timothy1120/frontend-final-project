import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import React, { useState } from "react";
import InputWithOption from "@/components/InputWithOption";
import Button from "@/components/Button";
import Input from "@/components/Input";

const dosenOptions = [
  { label: "Jenny Doe, MBA", value: "Jenny Doe, MBA" },
  { label: "John Doe, MBA", value: "John Doe, MBA" },
];

export default function DetailProposal() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  return (
    <MainLayout>
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
              <p className="font-semibold">Status</p>
              <p className="font-normal text-warning">Menunggu</p>
            </div>
          </div>
          <div>
            <div className="text-lg mb-4">
              <p className="font-semibold">Minimal Penilaian</p>
              <p className="font-normal">Belum ada</p>
            </div>
            <div className="text-lg">
              <Input
                label={"Minimal Nilai Approval"}
                inputType={"number"}
                inputFor={"minimal-nilai"}
                inputId={"minimal-nilai"}
                inputName={"minimal-nilai"}
                placeholder={"Isi Minimal Nilai Approval"}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 mt-8 mb-4">
          <div>
            <h4 className="text-2xl font-bold ">Dosen Penilai</h4>
            <p className="text-lg text-neutral-400">Belum ada</p>
          </div>
          <form>
            <div>
              <label className="block font-medium mb-2">Assign Dosen</label>
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
    </MainLayout>
  );
}
