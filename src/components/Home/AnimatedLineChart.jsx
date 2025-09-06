import React, { useEffect, useState } from "react";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { useInView } from "react-intersection-observer";

const chartData = [
  { month: "Jan", uptime: 40, supportHours: 15 },
  { month: "Feb", uptime: 60, supportHours: 22 },
  { month: "Mar", uptime: 70, supportHours: 30 },
  { month: "Apr", uptime: 85, supportHours: 45 },
  { month: "May", uptime: 95, supportHours: 50 },
];

export default function AnimatedLineChart() {
  const [animatedData, setAnimatedData] = useState([]);
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

  useEffect(() => {
    if (inView) {
      let i = 0;
      setAnimatedData([]); // reset before animating
      const interval = setInterval(() => {
        if (i < chartData.length) {
          setAnimatedData((prev) => [...prev, chartData[i]]);
          i++;
        } else {
          clearInterval(interval);
        }
      }, 700); // speed of reveal
      return () => clearInterval(interval);
    }
  }, [inView]);

  return (
    <div ref={ref} className="FORTHPAGE min-h-screen bg-black p-0">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="mb-12 p-8">
          <h1 className="text-5xl font-bold text-white mb-4 leading-tight">
            Your Business Grows with
            <br />
            Reliable IT Support
          </h1>
          <p className="text-gray-400 text-lg">
            See how consistent service and expert maintenance improve your
            system uptime and customer satisfaction.
          </p>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 mb-8 p-8">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span className="text-gray-400 text-sm">System Uptime (%)</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span className="text-gray-400 text-sm">Support Hours</span>
          </div>
        </div>

        {/* Chart */}
        <div className="h-96">
          <ResponsiveContainer className="p-1" width="100%" height="100%">
            <LineChart
              data={animatedData}
              margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
              />
              <YAxis
                yAxisId="left"
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Uptime (%)",
                  angle: -90,
                  position: "insideLeft",
                  fill: "#9CA3AF",
                  fontSize: 12,
                }}
              />
              <YAxis
                yAxisId="right"
                orientation="right"
                domain={[0, 60]}
                ticks={[0, 15, 30, 45, 60]}
                tick={{ fill: "#9CA3AF", fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                label={{
                  value: "Support Hours",
                  angle: -90,
                  position: "insideRight",
                  fill: "#9CA3AF",
                  fontSize: 12,
                }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#111",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  color: "#fff",
                }}
              />
              <Line
                yAxisId="left"
                type="monotone"
                dataKey="uptime"
                stroke="#6366F1"
                strokeWidth={3}
                dot={{ r: 4 }}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-in-out"
              />
              <Line
                yAxisId="right"
                type="monotone"
                dataKey="supportHours"
                stroke="#EC4899"
                strokeWidth={3}
                dot={{ r: 4 }}
                isAnimationActive={true}
                animationDuration={800}
                animationEasing="ease-in-out"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
