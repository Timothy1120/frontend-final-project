import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const AdminPage = () => {
  const [dataAdmin, setDataAdmin] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = Cookies.get("token");
    axios
      .get("http://localhost:7000/api/admin/data-summary", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDataAdmin(res.data.data);
      })
      .catch((err) => {
        console.error(err);
        router.push("/login");
      });
  }, []);

  return (
    <div className="font-poppins">
      <Navbar />
      <div className="flex flex-row">
        <Sidebar />
        <div className="w-full flex flex-col justify-between ">
          <main id="admin-contents" className="m-8 grid grid-cols-2 gap-12">
            <Link
              href="admin/user/mahasiswa"
              className="rounded-lg p-4 bg-darkblue-03 flex flex-row justify-between"
            >
              <div className="flex flex-col space-y-8">
                <h5 className="text-neutral-05 text-2xl font-bold">
                  Mahasiswa
                </h5>
                <span className="text-base text-neutral-01 leading-none">
                  {dataAdmin.mahasiswasCount} Users
                </span>
              </div>
              <AiIcons.AiOutlineUser className="w-16 h-auto" />
            </Link>
            <Link
              href="admin/user/dosen"
              className="rounded-lg p-4 bg-darkblue-03 flex flex-row justify-between"
            >
              <div className="flex flex-col space-y-8">
                <h5 className="text-neutral-05 text-2xl font-bold">Dosen</h5>
                <span className="text-base text-neutral-01 leading-none">
                  {dataAdmin.dosenCount} Users
                </span>
              </div>
              <AiIcons.AiOutlineUser className="w-16 h-auto" />
            </Link>
            <Link
              href=""
              className="rounded-lg p-4 bg-darkblue-03 flex flex-row justify-between"
            >
              <div className="flex flex-col space-y-8">
                <h5 className="text-neutral-05 text-2xl font-bold">
                  Koordinator
                </h5>
                <span className="text-base text-neutral-01 leading-none">
                  {dataAdmin.koordinatorCount} Users
                </span>
              </div>
              <AiIcons.AiOutlineUser className="w-16 h-auto" />
            </Link>
            <Link
              href=""
              className="rounded-lg p-4 bg-darkblue-03 flex flex-row justify-between"
            >
              <div className="flex flex-col space-y-8">
                <h5 className="text-neutral-05 text-2xl font-bold">Staf</h5>
                <span className="text-base text-neutral-01 leading-none">
                  {dataAdmin.staffCount} Users
                </span>
              </div>
              <AiIcons.AiOutlineUser className="w-16 h-auto" />
            </Link>
          </main>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
