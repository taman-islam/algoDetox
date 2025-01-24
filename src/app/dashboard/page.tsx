import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Brain, Trophy, TrendingUp, ShieldCheck, Trash2, UserMinus } from "lucide-react"
import { ProgressBar } from "@/components/progress-bar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

// Mock data for demonstration
const userData = {
  name: "John Doe",
  currentDay: 15,
  totalDays: 30,
  streakDays: 7,
  appsBlocked: 5,
  websitesBlocked: 8,
  appsDeleted: 3,
  accountsDeleted: 2,
}

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto w-full">
        <div className="flex justify-center mb-6">
          <Brain className="h-12 w-12 text-blue-600" />
        </div>
        <h2 className="text-center text-3xl font-extrabold text-gray-900 mb-8">Your Digital Detox Progress</h2>

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
              <CardTitle className="text-sm font-medium">Apps Blocked</CardTitle>
              <TrendingUp className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.appsBlocked}</div>
              <p className="text-xs text-muted-foreground">You've successfully limited access to distracting apps.</p>
            </CardContent>
          </Card>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-4">Your Achievements</h3>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Websites Blocked</CardTitle>
              <ShieldCheck className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.websitesBlocked}</div>
              <p className="text-xs text-muted-foreground">
                You've successfully blocked distracting websites, reclaiming your focus.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Apps Deleted</CardTitle>
              <Trash2 className="h-4 w-4 text-red-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{userData.appsDeleted}</div>
              <p className="text-xs text-muted-foreground">
                By deleting these apps, you've removed major sources of distraction.
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
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Quick Actions</CardTitle>
            <CardDescription>Take action to continue your digital detox journey</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full justify-start" variant="outline">
              Log Today's Progress
            </Button>
            <Button className="w-full justify-start" variant="outline">
              View Detailed Stats
            </Button>
            <Link href="/profile" className="w-full">
              <Button className="w-full justify-start" variant="outline">
                Update Profile
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

