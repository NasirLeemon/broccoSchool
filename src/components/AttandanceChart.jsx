import Image from "next/image";
import React from "react";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Sat",
    present: 3000,
    absent: 2400,
  },
  {
    name: "Sun",
    present: 2000,
    absent: 1398,
  },
  {
    name: "Mon",
    present: 2000,
    absent: 1800,
  },
  {
    name: "Tue",
    present: 2780,
    absent: 1908,
  },
  {
    name: "Wed",
    present: 1890,
    absent: 1800,
  },
  {
    name: "Thur",
    present: 2390,
    absent: 3800,
  },
];

const AttandanceChart = () => {
  return (
    <div className="bg-white rounded-lg p-4 h-full">
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={25}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis
            dataKey="name"
            axisLine={false}
            tick={{ fill: "#d1d5db" }}
            tickLine={false}
          />
          <YAxis axisLine={false} tick={{ fill: "#d1d5db" }} tickLine={false} />
          <Tooltip
            contentStyle={{ borderRadius: "10px", borderColor: "lightgray" }}
          />
          <Legend
            align="left"
            verticalAlign="top"
            wrapperStyle={{ paddingTop: "20px", paddingBottom: "40px" }}
          />
          <Bar dataKey="present" fill="#FAE27C" />
          <Bar dataKey="absent" fill="#C3EBFA" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttandanceChart;
