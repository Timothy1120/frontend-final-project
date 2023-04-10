import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import Image from "next/image";
import Face from "../../../../../public/images/user-avatar.png";
import Button from "@/components/Button";

export default function Dosen() {
  return (
    <div className="font-poppins">
      <Navbar></Navbar>
      <div className="flex flex-row">
        <Sidebar></Sidebar>
        <div className="w-full flex flex-col justify-between">
          <main id="user-dosen-contents">
            <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
              <div className="text-lg font-bold mb-14">Dosen</div>
              <table className="w-full border-collapse bg-white text-left text-sm text-gray-500 max-w-3xl">
                <thead className="bg-gray-50 text-base">
                  <tr>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Nama
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      NIDN
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    >
                      Program Studi
                    </th>
                    <th
                      scope="col"
                      className="px-4 py-2 font-semibold text-neutral-05"
                    ></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-neutral-02 border-t border-neutral-02">
                  <tr className="hover:bg-gray-50 text-sm text-neutral-05">
                    <td className="px-4 py-2 font-normal">
                      <div className="flex gap-3 ">
                        <div className="max-h-10 max-w-[2.5rem]">
                          <Image
                            className="h-auto w-auto rounded-full object-cover object-center"
                            src={Face}
                            alt="face"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="font-normal">
                          <div className=" ">Nama Dosen</div>
                          <div className="text-gray-400">dosen@del.ac.id</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium ">xxxxxxx</div>
                    </td>
                    <td className="px-4 py-2">S1 Informatika</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/admin/user/dosen/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 text-sm text-neutral-05">
                    <td className="px-4 py-2 font-normal">
                      <div className="flex gap-3 ">
                        <div className="max-h-10 max-w-[2.5rem]">
                          <Image
                            className="h-auto w-auto rounded-full object-cover object-center"
                            src={Face}
                            alt="face"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="font-normal">
                          <div className=" ">Nama Dosen</div>
                          <div className="text-gray-400">dosen@del.ac.id</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium ">xxxxxxx</div>
                    </td>
                    <td className="px-4 py-2">S1 Informatika</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/admin/user/dosen/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 text-sm text-neutral-05">
                    <td className="px-4 py-2 font-normal">
                      <div className="flex gap-3 ">
                        <div className="max-h-10 max-w-[2.5rem]">
                          <Image
                            className="h-auto w-auto rounded-full object-cover object-center"
                            src={Face}
                            alt="face"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="font-normal">
                          <div className=" ">Nama Dosen</div>
                          <div className="text-gray-400">dosen@del.ac.id</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium ">xxxxxxx</div>
                    </td>
                    <td className="px-4 py-2">S1 Informatika</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/admin/user/dosen/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 text-sm text-neutral-05">
                    <td className="px-4 py-2 font-normal">
                      <div className="flex gap-3 ">
                        <div className="max-h-10 max-w-[2.5rem]">
                          <Image
                            className="h-auto w-auto rounded-full object-cover object-center"
                            src={Face}
                            alt="face"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="font-normal">
                          <div className=" ">Nama Dosen</div>
                          <div className="text-gray-400">dosen@del.ac.id</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium ">xxxxxxx</div>
                    </td>
                    <td className="px-4 py-2">S1 Informatika</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/admin/user/dosen/detail"
                      />
                    </td>
                  </tr>
                  <tr className="hover:bg-gray-50 text-sm text-neutral-05">
                    <td className="px-4 py-2 font-normal">
                      <div className="flex gap-3 ">
                        <div className="max-h-10 max-w-[2.5rem]">
                          <Image
                            className="h-auto w-auto rounded-full object-cover object-center"
                            src={Face}
                            alt="face"
                            height={40}
                            width={40}
                          />
                        </div>
                        <div className="font-normal">
                          <div className=" ">Nama Dosen</div>
                          <div className="text-gray-400">dosen@del.ac.id</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <div className="font-medium ">xxxxxxx</div>
                    </td>
                    <td className="px-4 py-2">S1 Informatika</td>
                    <td className="px-4 py-2 flex justify-end">
                      <Button
                        variant="primary"
                        text="Lihat Detail"
                        to="/admin/user/dosen/detail"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </main>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
}
