import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Infinity, Trophy, Bell, Clock, ThumbsUp, UserPlus, Zap, Eye, DollarSign, Lock } from "lucide-react"
import { CollapsibleDisclaimer } from "@/components/collapsible-disclaimer"

export const metadata = {
  title: "Detecting Intrusive Apps | AlgoDetox",
  description: "Learn how to identify apps that may be intruding on your digital well-being and focus.",
  openGraph: {
    title: "Detecting Intrusive Apps | AlgoDetox",
    description: "Learn how to identify apps that may be intruding on your digital well-being and focus.",
    type: "website",
    url: "https://algodetox.com/intrusive-app-detection",
    image: "/og-image.png", // Make sure to add an appropriate Open Graph image
  },
}

const intrusiveFeatures = [
  {
    name: "Infinite Scroll",
    icon: Infinity,
    description:
      "Infinite scroll doesn't solve any user problem but traps users to use the app continuously. It removes natural stopping points and makes it harder to disengage.",
    examples: ["Social media feeds", "News aggregators", "Content discovery platforms"],
    impact: "Increased time spent, reduced intentionality, potential for information overload",
  },
  {
    name: "Gamification",
    icon: Trophy,
    description:
      "Gamification elements are used to bring users back to apps that may not be inherently useful, intruding into users' focus and daily routines.",
    examples: ["Streaks", "Points systems", "Badges and achievements", "Leaderboards"],
    impact: "Artificial engagement, fear of breaking streaks, competitive pressure",
  },
  {
    name: "Push Notifications",
    icon: Bell,
    description:
      "Excessive or manipulative push notifications can interrupt focus and create a false sense of urgency or FOMO (Fear of Missing Out).",
    examples: [
      "'Your friend just posted for the first time in a while'",
      "Flash sale notifications",
      "Daily reminders",
    ],
    impact: "Constant interruptions, increased anxiety, difficulty maintaining focus",
  },
  {
    name: "Time-sensitive Features",
    icon: Clock,
    description:
      "Features that create artificial time pressure or expire can manipulate users into frequent app checks and hurried decision-making.",
    examples: ["Stories that disappear after 24 hours", "Limited-time offers", "Countdown timers for actions"],
    impact: "Increased app opens, rushed decisions, fear of missing out",
  },
  {
    name: "Social Validation Mechanics",
    icon: ThumbsUp,
    description:
      "Features that tie self-worth to likes, comments, or followers can create unhealthy attachment and obsessive checking behaviors.",
    examples: ["Like counts", "Follower/following numbers", "Comment sections"],
    impact: "Decreased self-esteem, addiction to external validation, social comparison",
  },
  {
    name: "Autoplay",
    icon: Zap,
    description:
      "Autoplay features, especially for videos, can lead to mindless consumption and difficulty in disengaging from the app.",
    examples: ["Video autoplay", "Auto-advancing stories or posts"],
    impact: "Increased time spent, reduced intentionality, potential for inappropriate content exposure",
  },
  {
    name: "Dark Patterns",
    icon: Eye,
    description:
      "User interface designs that trick users into actions they didn't intend, often making it difficult to opt-out or unsubscribe.",
    examples: ["Hidden unsubscribe buttons", "Confusing toggle switches", "Guilt-tripping language for opting out"],
    impact: "Frustration, unintended actions, privacy violations",
  },
  {
    name: "Microtransactions",
    icon: DollarSign,
    description:
      "Small, frequent in-app purchases that can add up quickly and exploit impulsive behavior or fear of missing out.",
    examples: ["In-game currencies", "Boosters or power-ups", "Exclusive digital items"],
    impact: "Financial stress, addiction-like behavior, blurred lines between spending and gameplay",
  },
  {
    name: "Data Collection",
    icon: Lock,
    description:
      "Excessive or unclear data collection practices that may infringe on user privacy or be used for manipulative targeting.",
    examples: ["Location tracking", "Contact list access", "Browsing history collection"],
    impact: "Privacy concerns, targeted advertising, potential for data breaches",
  },
]

export default function IntrusiveAppDetection() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Detecting Intrusive Apps</h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Learn to identify features that may be intruding on your digital well-being and focus
        </p>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Why This Matters</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>
                Many apps are designed to capture and hold your attention, often at the expense of your well-being and
                productivity. By learning to recognize these intrusive features, you can make more informed decisions
                about which apps to use and how to use them mindfully.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-12">
          {intrusiveFeatures.map((feature) => (
            <Card key={feature.name}>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <feature.icon className="h-8 w-8 text-gray-500" />
                  <CardTitle className="text-2xl font-bold">{feature.name}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-gray-600">{feature.description}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900">Common Examples:</h4>
                    <ul className="list-disc pl-5 space-y-1 mt-2">
                      {feature.examples.map((example, index) => (
                        <li key={index} className="text-gray-600">
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Potential Impact:</h4>
                    <p className="text-gray-600 mt-2">{feature.impact}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white shadow overflow-hidden sm:rounded-lg mt-12 mb-8">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900">Taking Action</h3>
            <div className="mt-2 max-w-xl text-sm text-gray-500">
              <p>Now that you can identify these intrusive features, consider the following steps:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Regularly audit the apps on your devices and uninstall those with multiple intrusive features.</li>
                <li>
                  For necessary apps with intrusive elements, look for alternative apps or web versions that might be
                  less manipulative.
                </li>
                <li>
                  Adjust settings where possible to minimize intrusive features (e.g., turning off autoplay or most
                  notifications).
                </li>
                <li>
                  Use built-in device features or third-party apps to set limits on app usage and monitor your digital
                  habits.
                </li>
                <li>
                  Practice mindfulness when using apps, being aware of how they make you feel and how they impact your
                  time and attention.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-12">
          <CollapsibleDisclaimer />
        </div>
      </div>
    </div>
  )
}

