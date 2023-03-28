import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { useState } from "react";

export default function AssignKoordinator() {
  const [batch, setBatch] = useState("");
  const [batchError, setBatchError] = useState("");

  function handleBatchChange(event) {
    setBatch(event.target.value);
    if (event.target.value === "") {
      setBatchError("Batch is required");
    } else if (event.target.value.length < 10) {
      setBatchError("Name must be at least 10 characters");
    } else {
      setBatchError("");
    }
  }
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="assign-koordinator">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Assign Koordinator</div>
              <form className="grid grid-cols-2 gap-4">
                <div>
                  <label for="program-studi" className="block font-medium mb-2">
                    Program Studi:
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="focus:border-darkblue-04 focus:ring focus:ring-darkblborder-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required
                  >
                    <option value="S1 Informatika">S1 Informatika</option>
                    <option value="S1 Teknik Elektro">S1 Teknik Elektro</option>
                    <option value="S1 Sistem Informasi">
                      S1 Sistem Informasi
                    </option>
                  </select>
                </div>
                <div>
                  <label for="dosen" className="block font-medium mb-2">
                    Dosen:
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="focus:border-darkblue-04 focus:ring focus:ring-darkblborder-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required
                  >
                    <option value="male">Dosen A</option>
                    <option value="male">Dosen B</option>
                  </select>
                </div>
                <div>
                  <label for="batch" className="block font-medium mb-2">
                    Batch:
                  </label>
                  <input
                    type="text"
                    onChange={handleBatchChange}
                    id="batch"
                    name="batch"
                    className={`w-full p-2 border ${
                      batchError ? "border-red-500" : ""
                    }  border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblborder-darkblue-04 focus:ring-opacity-50`}
                  />
                  {batchError && <p className="text-red-500">{batchError}</p>}
                </div>
                <div>
                  <label for="batch" className="block font-medium mb-2">
                    Tahun Ajaran:
                  </label>
                  <input
                    type="text"
                    id="batch"
                    name="batch"
                    className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:ring focus:ring-darkblborder-darkblue-04 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label for="batch" className="block font-medium mb-2">
                    Semester:
                  </label>
                  <select
                    id="gender"
                    name="gender"
                    className="focus:border-darkblue-04 focus:ring focus:ring-darkblborder-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required
                  >
                    <option value="ganjil">Ganjil</option>
                    <option value="genap">Genap</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="bg-darkblborder-darkblue-04 text-white py-2 px-4 rounded hover:bg-[#82DBD8]"
                    >
                      Assign
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
