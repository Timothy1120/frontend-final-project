import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { FaBullhorn } from "react-icons/fa";
import { AiOutlineTag, AiOutlineClockCircle } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";

export default function Dashboard() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="dashboard-koordinator-contents">
            <div className="flex mx-6 my-8 space-x-4">
              <div className="w-4/6">
                <Link href={"/koordinator/administrasi"}>
                  <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
                    <div className="flex space-x-4">
                      <GrDocumentText className="w-9 h-auto" />
                      <div>
                        <p className="text-2xl text-darkblue-04 font-bold">
                          Administrasi
                        </p>
                        <p className="text-xs text-darkblue-04 font-light">
                          S1 Informatika
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link href={"/koordinator/pelaksanaan"}>
                  <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8 mt-6">
                    <div className="flex space-x-4">
                      <FiMonitor className="w-9 h-auto" />
                      <div>
                        <p className="text-2xl text-darkblue-04 font-bold">
                          Pelaksanaan/Monitoring
                        </p>
                        <p className="text-xs text-darkblue-04 font-light">
                          S1 Informatika
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="w-2/6 rounded-sm border border-neutral-02 shadow-md px-6 py-5">
                <div className="flex space-x-3 items-center ">
                  <FaBullhorn />
                  <p className="text-darkblue-04 text-lg font-bold">
                    Pengumuman
                  </p>
                </div>
                <hr className="border-b border-neutral-02 mt-2" />
                <div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold">
                      <span className="text-darkblue-04">[S1 Informatika]</span>{" "}
                      Sosialisasi Pembuatan Proposal Kampus Merdeka
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2 font-light">
                        <AiOutlineTag />
                        <p className="text-xs">Sosialisasi</p>
                      </div>
                      <div className="flex space-x-2 font-light">
                        <AiOutlineClockCircle />
                        <p className="text-xs">2023-04-04</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold">
                      <span className="text-darkblue-04">[S1 Informatika]</span>{" "}
                      Sosialisasi Pembuatan Proposal Kampus Merdeka
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2 font-light">
                        <AiOutlineTag />
                        <p className="text-xs">Sosialisasi</p>
                      </div>
                      <div className="flex space-x-2 font-light">
                        <AiOutlineClockCircle />
                        <p className="text-xs">2023-04-04</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold">
                      <span className="text-darkblue-04">[S1 Informatika]</span>{" "}
                      Sosialisasi Pembuatan Proposal Kampus Merdeka
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2 font-light">
                        <AiOutlineTag />
                        <p className="text-xs">Sosialisasi</p>
                      </div>
                      <div className="flex space-x-2 font-light">
                        <AiOutlineClockCircle />
                        <p className="text-xs">2023-04-04</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="text-sm font-semibold">
                      <span className="text-darkblue-04">[S1 Informatika]</span>{" "}
                      Sosialisasi Pembuatan Proposal Kampus Merdeka
                    </div>
                    <div className="flex space-x-4">
                      <div className="flex space-x-2 font-light">
                        <AiOutlineTag />
                        <p className="text-xs">Sosialisasi</p>
                      </div>
                      <div className="flex space-x-2 font-light">
                        <AiOutlineClockCircle />
                        <p className="text-xs">2023-04-04</p>
                      </div>
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
