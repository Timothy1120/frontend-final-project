import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import axios from "axios";

export default function DetailPengumuman({ detailPengumuman }) {
  const createMarkup = (html) => {
    return { __html: html };
  };

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
              <div className="">
                <div
                  dangerouslySetInnerHTML={createMarkup(
                    detailPengumuman.deskripsi
                  )}
                />
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

export async function getServerSideProps(context) {
  const { id } = context.query;
  const token = context.req.cookies.token;
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  try {
    const response = await axios.get(
      `http://localhost:7000/api/pengumuman/${id}`
    );
    return {
      props: {
        detailPengumuman: response.data.data,
      },
    };
  } catch (error) {
    // handle the error accordingly
    console.error("Error fetching the pengumuman detail", error);
    return {
      props: {},
    };
  }
}
