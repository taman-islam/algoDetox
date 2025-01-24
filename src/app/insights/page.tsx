"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Brain, TrendingUp, Clock, Zap, AlertTriangle } from "lucide-react"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data for demonstration
const weeklyData = [
  { name: "Mon", screenTime: 180 },
  { name: "Tue", screenTime: 200 },
  { name: "Wed", screenTime: 150 },
  { name: "Thu", screenTime: 220 },
  { name: "Fri", screenTime: 190 },
  { name: "Sat", screenTime: 250 },
  { name: "Sun", screenTime: 210 },
]

const monthlyData = [
  { name: "Week 1", screenTime: 1200 },
  { name: "Week 2", screenTime: 1100 },
  { name: "Week 3", screenTime: 1300 },
  { name: "Week 4", screenTime: 1000 },
]

const insights = [
  {
    title: "Peak Usage Time",
    description: "Your most active hours are between 8 PM and 10 PM.",
    icon: Clock,
  },
  {
    title: "Most Used App",
    description: "Instagram is your most used app, with an average of 2 hours daily.",
    icon: Zap,
  },
  {
    title: "Improvement Area",
    description: "You tend to use social media more on weekends. Try setting limits for weekend usage.",
    icon: AlertTriangle,
  },
]

export default function Insights() {
  const [timeRange, setTimeRange] = useState("weekly")

  const chartData = timeRange === "weekly" ? weeklyData : monthlyData

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-6">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Your Insights</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex justify-between items-center">
              <span>Screen Time Trend</span>
              <Select value={timeRange} onValueChange={setTimeRange}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select time range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="weekly">Weekly</SelectItem>
                  <SelectItem value="monthly">Monthly</SelectItem>
                </SelectContent>
              </Select>
            </CardTitle>
            <CardDescription>
              Your screen time trend for the {timeRange === "weekly" ? "past week" : "past month"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="screenTime" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {insights.map((insight, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <insight.icon className="h-5 w-5 mr-2 text-blue-600" />
                  {insight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{insight.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Personalized Recommendations</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2">
              <li>Set a "no phone" rule for the first hour after waking up and the last hour before bed.</li>
              <li>Use app blocking features during your identified peak usage times to reduce distractions.</li>
              <li>Schedule specific times for checking social media instead of frequent, short visits.</li>
              <li>Replace some of your Instagram time with a hobby or physical activity.</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-8 text-center">
          <Button onClick={() => window.history.back()}>Back to Dashboard</Button>
        </div>
      </div>
    </div>
  )
}

