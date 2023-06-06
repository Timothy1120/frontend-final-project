import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";

export default function SuratPTJM() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="sptjm-contents">
            <div className="m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-pengajuan"
                  name="button-pengajuan"
                  text="Ajukan SPTJM"
                  to="sptjm/create"
                />
              </div>
              <div className="text-lg font-bold text-darkblue-04 mt-9 mb-14">
                Daftar Pengajuan SPTJM
              </div>
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 max-w-4xl">
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
                      Program
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Pengajuan
                    </th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      1.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">Magang</div>
                    </td>
                    <td className="text-success px-4 py-2">Diterbitkan</td>
                    <td className="px-4 py-2">03 Mar 2023 08:00</td>
                    <td className="px-4 py-2">
                      <Button variant="primary" text="Tools" to="1/unduh" />
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
