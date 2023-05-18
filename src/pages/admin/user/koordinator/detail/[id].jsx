import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Face from "../../../../../../public/images/mahasiswa-example.jpeg";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Detail() {
  const router = useRouter();
  const { id } = router.query;
  const [koordinator, setKoordinator] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/koordinator/${id}`)
      .then((res) => {
        setKoordinator(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="detail-koordinator-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">
                Detail Data Koordinator
              </div>
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
                    <div className="w-2/5 font-semibold">Nama</div>
                    <div className="w-3/5">{koordinator.nama}</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Program Studi</div>
                    <div className="w-3/5">{koordinator.program_studi}</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Batch</div>
                    <div className="w-3/5">{koordinator.batch}</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Tahun Ajaran</div>
                    <div className="w-3/5">{koordinator.tahun_ajaran}</div>
                  </div>
                  <div className="flex w-full space-x-4 py-2">
                    <div className="w-2/5 font-semibold">Semester</div>
                    <div className="w-3/5">{koordinator.semester}</div>
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
