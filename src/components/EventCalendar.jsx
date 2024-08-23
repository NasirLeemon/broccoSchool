import Image from "next/image";
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

// / TEMPORARY
const events = [
  {
    id: 1,
    title: "Tech Meetup: AI & Machine Learning",
    time: "10:00 AM - 12:00 PM",
    description:
      "Join us for a discussion on the latest trends in AI and Machine Learning, featuring industry experts and networking opportunities.",
  },
  {
    id: 2,
    title: "Frontend Workshop: Advanced React",
    time: "1:00 PM - 3:00 PM",
    description:
      "A hands-on workshop focused on advanced React concepts including hooks, context API, and performance optimization techniques.",
  },
  {
    id: 3,
    title: "Career Fair: Tech Opportunities",
    time: "4:00 PM - 6:00 PM",
    description:
      "Explore career opportunities in the tech industry, meet recruiters from top companies, and get tips on how to land your dream job.",
  },
];

const EventCalendar = () => {
  const [value, setValue] = useState(new Date());
  return (
    <div className="bg-white p-4 rounded-md">
      <Calendar onChange={setValue} value={value} />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold my-4">Events</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <div className="flex flex-col gap-4">
        {events.map((event) => (
          <div
            className="p-5 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-lamaSky even:border-t-lamaPurple"
            key={event.id}
          >
            <div className="flex items-center justify-between">
              <h1 className="font-semibold text-gray-600">{event.title}</h1>
              <span className="text-gray-300 text-xs">{event.time}</span>
            </div>
            <p className="mt-2 text-gray-400 text-sm">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventCalendar;
