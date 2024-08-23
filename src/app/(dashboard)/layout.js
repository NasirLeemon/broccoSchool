import React from "react";
import Link from "next/link";
import Image from "next/image";
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="h-screen flex">
      {/* left */}
      <div className=" w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] p-4">
        <Link
          href="/"
          className="flex items-center justify-center lg:justify-start gap-2"
        >
          <Image src="/logo.png" alt="Logo" height={32} width={32} />
          <span className="hidden lg:block font-bold">BroccoSchool</span>
        </Link>
        <Menu />
      </div>
      {/* right */}
      <div className="flex flex-col w-[86%] bg-[#F7F8FA]  md:w-[92%] lg:w-[84%] xl:w-[86%] overflow-scroll">
        <Navbar />
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
