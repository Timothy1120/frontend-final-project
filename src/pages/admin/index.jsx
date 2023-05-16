import Navbar from "@/components/Navbar";
import Sidebar from "@/components/admin/Sidebar";
import Footer from "@/components/Footer";
import * as AiIcons from "react-icons/ai";
import Link from "next/link";
import React from "react";
import withProtectedRoute from "@/components/hoc/withProtectedRoute";

const AdminPage = () => {
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
                  200 Users
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
                  50 Users
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
                  3 Users
                </span>
              </div>
              <AiIcons.AiOutlineUser className="w-16 h-auto" />
            </Link>
            <Link
              href=""
              className="rounded-lg p-4 bg-darkblue-03 flex flex-row justify-between"
            >
              <div className="flex flex-col space-y-8">
                <h5 className="text-neutral-05 text-2xl font-bold">Staff</h5>
                <span className="text-base text-neutral-01 leading-none">
                  7 Users
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
