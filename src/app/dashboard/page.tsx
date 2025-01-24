import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Trophy, TrendingUp, ShieldCheck, Trash2, UserMinus, Clock } from "lucide-react"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { DailyCheckIn } from "@/components/daily-check-in"
import { BehaviorInsights } from "@/components/behavior-insights"

// Mock data for demonstration
const userData = {
  name: "John Doe",
  currentDay: 15,
  totalDays: 30,
  streakDays: 7,
  appsBlocked: 5,
  websitesBlocked: 8,
  accountsDeleted: 2,
  screenTimeReduced: 120, // in minutes
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-6">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Your Digital Detox Journey</h2>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle>30-Day Challenge Progress</CardTitle>
          </CardHeader>
          <CardContent>
            <ProgressBar current={userData.currentDay} total={userData.totalDays} />
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
              <Trophy className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.streakDays} days</div>
              <p className="text-xs text-muted-foreground">Keep it up! You're making great progress.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Screen Time Reduced</CardTitle>
              <Clock className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.screenTimeReduced} minutes</div>
              <p className="text-xs text-muted-foreground">
                That's {Math.round(userData.screenTimeReduced / 60)} hours reclaimed!
              </p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Achievements</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Apps & Websites Blocked</CardTitle>
              <ShieldCheck className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.appsBlocked + userData.websitesBlocked}</div>
              <p className="text-xs text-muted-foreground">
                You've successfully limited access to distracting content.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Accounts Deleted</CardTitle>
              <UserMinus className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.accountsDeleted}</div>
              <p className="text-xs text-muted-foreground">
                You've taken control by deleting unnecessary online accounts.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Daily Challenges Completed</CardTitle>
              <TrendingUp className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.currentDay}</div>
              <p className="text-xs text-muted-foreground">
                Each day brings you closer to your digital wellbeing goals.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
          <DailyCheckIn />
          <BehaviorInsights />
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Take action to continue your digital detox journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              View Detailed Stats
            </Button>
            <Link href="/harmful-websites" className="w-full">
              <Button className="w-full justify-start" variant="outline">
                Explore Harmful Websites Database
              </Button>
            </Link>
            <Link href="/profile" className="w-full">
              <Button className="w-full justify-start" variant="outline">
                Update Profile & Settings
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

