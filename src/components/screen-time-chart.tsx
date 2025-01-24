"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Social Media", time: 120, color: "#3b82f6" },
  { name: "Streaming", time: 90, color: "#ef4444" },
  { name: "Messaging", time: 60, color: "#10b981" },
  { name: "Browsing", time: 45, color: "#f59e0b" },
  { name: "Gaming", time: 30, color: "#8b5cf6" },
]

export function ScreenTimeChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="time" fill="#3b82f6" />
      </BarChart>
    </ResponsiveContainer>
  )
}

