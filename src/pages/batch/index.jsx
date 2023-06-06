import Button from "@/components/Button";
import MainLayout from "@/components/MainLayout";
import { IoSchoolSharp } from "react-icons/io5";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from '../../context/UserContext';

export default function DaftarBatch() {
  const { user } = useContext(UserContext);
  console.log("user-role: : ", user?.user?.role);

  const [dataBatch, setDataBatch] = useState([]);
  const token = Cookies.get("token");
  useEffect(() => {
    const fetchDataBatch = async () => {
      try {
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        const response = await axios.get(
          "http://localhost:7000/api/batch/allbatches"
        );
        setDataBatch(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataBatch();
  }, []);
  return (
    <MainLayout>
      <div className="rounded-sm border border-neutral-02 shadow-md m-5 px-5 py-5">
        <div className="flex justify-end">
          {user?.user?.role === 'dosen' && user?.detailInfo?.isKoordinator && (
            <Button
              variant="primary"
              id="button-buka-batch"
              name="button-buka-batch"
              text="Buka Batch"
              to="batch/create"
            />
          )}
        </div>
        <div className="w-full my-6 grid grid-cols-1 gap-8">
          {dataBatch.length === 0 ? (
            <div className="text-3xl font-light text-neutral-03 mt-4 text-center">
              Belum ada program
            </div>
          ) : (
            dataBatch.map((data, index) => (
              <Link href={`/batch/detail/${data.id}`} key={index}>
                <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
                  <div className="flex justify-between">
                    <div className="flex space-x-4">
                      <IoSchoolSharp className="w-16 h-auto" />
                      <div>
                        <div className="text-2xl text-darkblue-04 font-bold">
                          {data.nama_program}
                        </div>
                        <div className="font-medium text-xs">
                          <div>Tanggal Mulai: {data.startDate}</div>
                          <div>Jumlah Mahasiswa MBKM: 0 Mahasiswa</div>
                          <div>Minimum IPK: {data.ipk_minimum}</div>
                          <div>
                            Status:{" "}
                            {data.isFinished ? (
                              <span className="text-success">
                                Selesai
                              </span>
                            ) : (
                              <span className="text-darkblue-04">
                                Sedang Berjalan
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between text-center">
                      <span className="text-base text-darkblue-04">
                        S1 Informatika
                      </span>
                      {/* <button
                              type="submit"
                              id="tambah-pengumuman"
                              name="tambah-pengumuman"
                              className="px-3 py-2 bg-darkblue-04 text-neutral-01 rounded-lg justify-center"
                            >
                              Akhiri Batch
                            </button> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))
          )}
          {/* <Link href={"/batch/detail"}>
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
                <Link href={"/batch/detail"}>
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
                </Link> */}
        </div>
      </div>
    </MainLayout>
  );
}
