import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function Kelulusan() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="kelulusan-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-program"
                  name="button-program"
                  text="Tambah Program"
                  to="kelulusan/create"
                />
              </div>
              <div className="text-lg font-bold mt-9 mb-14">
                Riwayat Program
              </div>
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 max-w-4xl">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      No
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Jenis MBKM
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Nama Program
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Nama Perusahaan
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Mulai
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Berakhir
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50 font-normal text-neutral-05">
                    <td className="px-4 py-2">1</td>
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      Magang Bersertifikat
                    </td>
                    <td className="px-4 py-2">QA Engineer</td>
                    <td className="px-4 py-2">Binar Academy</td>
                    <td className="px-4 py-2">1 Agustus 2022</td>
                    <td className="px-4 py-2">1 Januari 2023</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Detail"
                        to="/batch/1/detail"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
}
