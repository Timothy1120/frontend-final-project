import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function DetailPengumuman() {
  const router = useRouter();
  const { id } = router.query;
  const [detailPengumuman, setDetailPengumuman] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:7000/api/pengumuman/${id}`)
      .then((res) => {
        setDetailPengumuman(res.data.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);
  console.log(detailPengumuman);
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="pengumuman-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md mx-6 my-10 px-12 py-14 min-h-full">
              <div className="text-lg font-bold text-darkblue-04 mb-7">
                {detailPengumuman.judul}
              </div>
              <div className="rounded-md border border-neutral-05 px-5 py-4 mb-4">
                <p>{detailPengumuman.deskripsi}</p>
              </div>
              <span className="text-sm font-medium text-darkblue-04 mb-7">
                Kategori: {detailPengumuman.kategori}
              </span>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
