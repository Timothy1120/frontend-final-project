import { React, useState } from "react";

export default function Sidebar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <div className="font-poppins float-left">
      <div className="bg-darkblue-04 w-[260px]">
        <div className="px-5 py-3 flex flex-col justify-between h-screen">
          <p className="text-neutral-01 text-xs uppercase">Navigasi Utama</p>
        </div>
      </div>
    </div>
  );
}
