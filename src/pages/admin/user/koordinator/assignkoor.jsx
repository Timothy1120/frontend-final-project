import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Footer from "../../../components/Footer";
import Button from "@/components/Button";
import Input from "@/components/Input";
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
                    id="program-studi"
                    name="program-studi"
                    class="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
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
                    id="dosen"
                    name="dosen"
                    class="focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required
                  >
                    <option value="male">Dosen A</option>
                    <option value="male">Dosen B</option>
                  </select>
                </div>
                <div>
                  <Input
                    label={"Batch"}
                    inputType={"text"}
                    inputFor={"batch"}
                    inputId={"batch"}
                    inputName={"batch"}
                    onChange={handleBatchChange}
                    id="batch"
                    name="batch"
<<<<<<< HEAD
                    className={`w-full p-2 border ${batchError
                        ? "focus:border-red-500 focus:ring focus:ring-red-500"
                        : "focus:border-[#2F8F9D] focus:ring focus:ring-[#2F8F9D]"
                      }  border-gray-400 rounded  focus:ring-opacity-50`}
=======
                    className={`${
                      batchError
                        ? "focus:border-danger focus:ring focus:outline-none focus:ring-danger"
                        : ""
                    }`}
>>>>>>> dec55c3d431d1ef8d0ee5212a0c21259ce38855c
                  />
                  {batchError && (
                    <div className="mt-2 text-sm text-danger">{batchError}</div>
                  )}
                </div>
                <Input
                  label={"Tahun Ajaran"}
                  inputFor={"tahun-batch"}
                  inputId={"tahun-batch"}
                  inputName={"tahun-batch"}
                  placeholder={"Isi tahun ajaran"}
                />
                <div>
                  <label for="tahun-batch" className="block font-medium mb-2">
                    Tahun Ajaran:
                  </label>
                  <input
                    type="text"
                    id="tahun-batch"
                    name="tahun-batch"
                    className="w-full p-2 border border-gray-400 rounded focus:border-darkblue-04 focus:outline-none focus:ring focus:ring-darkblue-04 focus:ring-opacity-50"
                  />
                </div>
                <div>
                  <label for="semester" className="block font-medium mb-2">
                    Semester:
                  </label>
                  <select
                    id="semester"
                    name="semester"
                    className="focus:border-darkblue-04 focus:ring focus:outline-none focus:ring-darkblue-04 focus:ring-opacity-50 w-full p-2 border border-gray-400 rounded "
                    required
                  >
                    <option value="ganjil">Ganjil</option>
                    <option value="genap">Genap</option>
                  </select>
                </div>
                <div class="col-span-2">
                  <div className="flex justify-end">
                    <Button
                      id="assign-koordinator"
                      name="assign-koordinator"
                      text="Assign"
                      variant="primary"
                      to="/"
                    >
                      Assign
                    </Button>
                  </div>
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
