import MainLayout from "@/components/MainLayout";
import Link from "next/link";
import { GrDocumentText } from "react-icons/gr";
import { FiMonitor } from "react-icons/fi";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function DetailBatch() {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {});
  return (
    <MainLayout>
      <div className="grid grid-cols-2 gap-6 mx-6 my-8">
        <Link href={`/administrasi/${id}`}>
          <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
            <div className="flex space-x-4">
              <GrDocumentText className="w-16 h-auto" />
              <div className="mt-3">
                <div className="text-2xl text-darkblue-04 font-bold">
                  Administrasi
                </div>
                <div className="text-xs text-darkblue-04 font-light">
                  S1 Informatika
                </div>
              </div>
            </div>
          </div>
        </Link>
        <Link href={`/laporan/${id}`}>
          <div className="rounded-sm border border-neutral-02 shadow-md px-6 py-8">
            <div className="flex space-x-4">
              <FiMonitor className="w-16 h-auto" />
              <div className="mt-3">
                <div className="text-2xl text-darkblue-04 font-bold">
                  Pelaksanaan/Monitoring
                </div>
                <div className="text-xs text-darkblue-04 font-light">
                  S1 Informatika
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </MainLayout>
  );
}
