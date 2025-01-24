"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Trophy, TrendingUp, Clock, Plus, ChevronRight, ShieldCheck, Trash2, UserMinus } from "lucide-react"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { QuickAddEntry } from "@/components/quick-add-entry"
import { ScreenTimeChart } from "@/components/screen-time-chart"
import { AchievementModal } from "@/components/achievement-modal"

// Mock data for demonstration
const userData = {
  name: "John Doe",
  currentDay: 15,
  totalDays: 30,
  streak: 7,
  screenTimeToday: 180, // in minutes
  appsDeleted: 2,
  websitesBlocked: 5,
  accountsDeleted: 1,
}

export default function Dashboard() {
  const [showQuickAdd, setShowQuickAdd] = useState(false)
  const [achievements, setAchievements] = useState({
    appsDeleted: userData.appsDeleted,
    websitesBlocked: userData.websitesBlocked,
    accountsDeleted: userData.accountsDeleted,
  })

  const handleAchievementAdded = (type: string, value: string) => {
    setAchievements((prev) => {
      switch (type) {
        case "app-deleted":
          return { ...prev, appsDeleted: prev.appsDeleted + 1 }
        case "website-blocked":
          return { ...prev, websitesBlocked: prev.websitesBlocked + 1 }
        case "account-deleted":
          return { ...prev, accountsDeleted: prev.accountsDeleted + 1 }
        default:
          return prev
      }
    })
    // Here you would typically send this data to your backend
    console.log(`Achievement added: ${type} - ${value}`)
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-6">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Welcome back, {userData.name}</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>30-Day Detox Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressBar current={userData.currentDay} total={userData.totalDays} />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Trophy className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.streak} days</div>
              <p className="text-xs text-muted-foreground">Keep it up! You're making great progress.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Today's Screen Time</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.screenTimeToday} minutes</div>
              <p className="text-xs text-muted-foreground">
                That's {Math.floor(userData.screenTimeToday / 60)} hours and {userData.screenTimeToday % 60} minutes
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Apps Deleted</CardTitle>
              <Trash2 className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{achievements.appsDeleted}</div>
              <p className="text-xs text-muted-foreground">Great job removing distractions!</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Websites Blocked</CardTitle>
              <ShieldCheck className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{achievements.websitesBlocked}</div>
              <p className="text-xs text-muted-foreground">You're taking control of your browsing habits.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accounts Deleted</CardTitle>
              <UserMinus className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{achievements.accountsDeleted}</div>
              <p className="text-xs text-muted-foreground">Simplifying your digital life!</p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-gray-900">Quick Actions</h3>
          <div className="space-x-2">
            <Button variant="outline" size="sm" onClick={() => setShowQuickAdd(true)}>
              <Plus className="mr-2 h-4 w-4" /> Add Entry
            </Button>
            <AchievementModal onAchievementAdded={handleAchievementAdded} />
          </div>
        </div>

        {showQuickAdd && <QuickAddEntry onClose={() => setShowQuickAdd(false)} />}

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Screen Time Breakdown</CardTitle>
            <CardDescription>Live updates of your usage today</CardDescription>
          </CardHeader>
          <CardContent>
            <ScreenTimeChart />
          </CardContent>
        </Card>

        <div className="space-y-4">
          <Link href="/logs" className="w-full">
            <Button variant="outline" className="w-full justify-between">
              View Past Logs
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/insights" className="w-full">
            <Button variant="outline" className="w-full justify-between">
              View Insights
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/settings" className="w-full">
            <Button variant="outline" className="w-full justify-between">
              Adjust Settings
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

