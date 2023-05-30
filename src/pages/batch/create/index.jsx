import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import InputWithOption from "@/components/InputWithOption";
import { useState } from "react";

const semesterOptions = [
  { label: "Genap", value: "genap" },
  { label: "Ganjil", value: "ganjil" },
];

export default function TambahBatch() {
  const [selectedSemester, setSelectedSemester] = useState(null);
  const [ipkMinimum, setIpkMinimum] = useState("0");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleSemesterChange = (selected) => {
    setSelectedSemester(selected);
    console.log(selectedSemester.value);
  };

  const handleIpMinimum = (event) => {
    const ipk = event.target.value;
    setIpkMinimum(ipk);
    console.log(ipkMinimum);
  };

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
                      htmlFor="gelombang-program"
                      className="block font-medium mb-2"
                    >
                      Gelombang Program
                    </label>
                    <input
                      type="text"
                      id="gelombang-program"
                      name="gelombang-program"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="gelombang-program"
                      className="block font-medium mb-2"
                    >
                      Nama Program
                    </label>
                    <input
                      type="text"
                      id="gelombang-program"
                      name="gelombang-program"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="tahun-ajaran"
                      className="block font-medium mb-2"
                    >
                      Tahun Ajaran
                    </label>
                    <input
                      type="text"
                      id="tahun-ajaran"
                      name="tahun-ajaran"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                    />
                  </div>
                  <div>
                    <label className="block font-medium mb-2">Semester</label>
                    <InputWithOption
                      options={semesterOptions}
                      onChange={handleSemesterChange}
                      placeholder={"Pilih Semester.."}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="ipk-minimum"
                      className="block font-medium mb-2"
                    >
                      IPK Minimum
                    </label>
                    <input
                      type="text"
                      id="ipk-minimum"
                      name="ipk-minimum"
                      className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                      onChange={handleIpMinimum}
                      value={ipkMinimum}
                    />
                    {errorMessage && (
                      <div className="text-red-500 mt-2">{errorMessage}</div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end mt-10">
                  <Button
                    id="submit-batch"
                    name="submit-batch"
                    text="Buka"
                    to="/batch/create/new"
                    variant="primary"
                  />
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
