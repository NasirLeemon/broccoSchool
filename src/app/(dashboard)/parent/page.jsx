"use client";
import React from "react";
import Announcements from "@/components/Announcements";
import BigCalender from "@/components/BigCalender";

const ParentPage = () => {
  return (
    <div className="p-4 flex flex-1 gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white h-full rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule for (Shimku)</h1>
          <BigCalender />
        </div>
      </div>
      {/* right */}
      <div className="w-full  xl:w-1/3">
        <Announcements />
      </div>
    </div>
  );
};

export default ParentPage;
