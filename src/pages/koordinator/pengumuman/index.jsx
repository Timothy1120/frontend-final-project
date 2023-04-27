import Navbar from "@/components/Navbar";
import Sidebar from "@/components/user/koordinator/Sidebar";
import Footer from "@/components/Footer";
import Button from "@/components/Button";
import PlusIcon from "../../../../public/icons/plus.svg";

export default function Pengumuman() {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between">
          <main id="pengumuman-contents">
            <div className="m-5 px-5 py-5">
              <div className="flex justify-end">
                <Button
                  variant="primary"
                  id="button-pengajuan"
                  name="button-pengajuan"
                  text="Tambah Pengumuman"
                  to="pengumuman/create"
                  textSize="text-sm"
                  icon={PlusIcon}
                />
              </div>
              <table className="w-full border-collapse bg-white text-left text-xs font-normal text-gray-500 max-w-4xl mt-8">
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
                      Judul Pengumuman
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 text-sm font-semibold text-neutral-05"
                    >
                      Tanggal Dibuat
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
                      <div className="font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin feugiat.
                      </div>
                    </td>
                    <td className="px-4 py-2">2023-03-03</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/pengumuman/details"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      2.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin feugiat.
                      </div>
                    </td>
                    <td className="px-4 py-2">2023-03-03</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/pengumuman/details"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      3.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin feugiat.
                      </div>
                    </td>
                    <td className="px-4 py-2">2023-03-03</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/pengumuman/details"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      4.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin feugiat.
                      </div>
                    </td>
                    <td className="px-4 py-2">2023-03-03</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/pengumuman/details"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50">
                    <td className="px-4 py-2 font-normal text-neutral-05">
                      5.
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium text-gray-700">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Proin feugiat.
                      </div>
                    </td>
                    <td className="px-4 py-2">2023-03-03</td>
                    <td className="px-4 py-2">
                      <Button
                        variant="primary"
                        text="Tools"
                        to="/pengumuman/details"
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
