import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import { IoSchoolSharp } from "react-icons/io5";
import Link from "next/link";

export default function BukaBatch() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="buka-batch-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-buka-batch"
                  name="button-buka-batch"
                  text="Buka Batch"
                  to="batch/create"
                />
              </div>
              <div className="w-full my-6 grid grid-cols-1 gap-8">
                <Link href={"/"}>
                  <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
                    <div className="flex justify-between">
                      <div className="flex space-x-4">
                        <IoSchoolSharp className="w-16 h-auto" />
                        <div>
                          <div className="text-2xl text-darkblue-04 font-bold">
                            Kampus Merdeka Batch 1
                          </div>
                          <div className="font-medium text-xs">
                            <div>Tanggal Mulai: 23-03-23</div>
                            <div>Jumlah Mahasiswa MBKM: 0 Mahasiswa</div>
                            <div>Minimum IPK: 3.0</div>
                            <div>
                              Status:{" "}
                              <span className="text-success">Selesai</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between text-center">
                        <span className="text-base text-darkblue-04">
                          S1 Informatika
                        </span>
                        <Button
                          variant={"primary"}
                          to={"/"}
                          size={"small"}
                          text={"Akhiri Batch"}
                          className={"hidden"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/"}>
                  <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
                    <div className="flex justify-between">
                      <div className="flex space-x-4">
                        <IoSchoolSharp className="w-16 h-auto" />
                        <div>
                          <div className="text-2xl text-darkblue-04 font-bold">
                            Kampus Merdeka Batch 2
                          </div>
                          <div className="font-medium text-xs">
                            <div>Tanggal Mulai: 23-03-23</div>
                            <div>Jumlah Mahasiswa MBKM: 0 Mahasiswa</div>
                            <div>Minimum IPK: 3.0</div>
                            <div>
                              Status:{" "}
                              <span className="text-darkblue-04">
                                Sedang Berjalan
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col justify-between text-center">
                        <span className="text-base text-darkblue-04">
                          S1 Informatika
                        </span>
                        <Button
                          variant={"primary"}
                          to={"/"}
                          size={"small"}
                          text={"Akhiri Batch"}
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
