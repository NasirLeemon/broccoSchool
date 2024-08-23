"use client";
import React from "react";
import Announcements from "@/components/Announcements";
import EventCalendar from "@/components/EventCalendar";
import BigCalender from "@/components/BigCalender";

const StudentPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* left */}
      <div className="w-full xl:w-2/3">
        <div className="bg-white h-full rounded-md p-4">
          <h1 className="text-xl font-semibold">Schedule (5A)</h1>
          <BigCalender />
        </div>
      </div>
      {/* right */}
      <div className="w-full xl:w-1/3">
        <EventCalendar />
        <Announcements />
      </div>
    </div>
  );
};

export default StudentPage;
