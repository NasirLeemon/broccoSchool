"use Client";
import moment from "moment";
import React, { useState } from "react";
import { Calendar, Views, momentLocalizer } from "react-big-calendar";
import { calendarEvents } from "@/lib/data";
import "react-big-calendar/lib/css/react-big-calendar.css";

const BigCalender = () => {
  const [view, setView] = useState(Views.WORK_WEEK);
  const localizer = momentLocalizer(moment);

  const handleChange = (selectedView) => {
    setView(selectedView);
  };

  return (
    <Calendar
      localizer={localizer}
      events={calendarEvents}
      startAccessor="start"
      endAccessor="end"
      views={["work_week", "day"]}
      view={view}
      style={{ height: "98%" }}
      onView={handleChange}
      min={new Date(2025, 1, 0, 8, 0, 0)}
      max={new Date(2025, 1, 0, 17, 0, 0)}
    />
  );
};

export default BigCalender;
