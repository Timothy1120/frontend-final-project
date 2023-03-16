import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarMenu({ href, text, icon, to }) {
  const router = useRouter();
  return (
    <Link
      href={href}
      className={`flex items-center mb-4 space-x-2 p-2 rounded-lg text-neutral-05 hover:bg-hover-sidebar-menu text-base ${
        router.pathname == { to } ? "bg-neutral-01" : "bg-darkblue-02"
      }`}
    >
      <div>
        <Image src={icon} height={20} width={20} alt="menu-icons" />
      </div>
      <div className="mt-[0.125rem]">{text}</div>
    </Link>
  );
}
