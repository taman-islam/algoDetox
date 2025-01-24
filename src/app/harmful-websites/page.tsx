import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Image, Briefcase, AlertTriangle, ShieldCheck } from "lucide-react"

const websites = [
  {
    name: "Facebook",
    icon: Users,
    harmfulEffects: [
      "Excessive time consumption",
      "Privacy concerns",
      "Comparison and self-esteem issues",
      "Misinformation spread",
    ],
    safeUsage: [
      "Limit daily usage to 30 minutes",
      "Curate your friend list and unfollow negative influences",
      "Use privacy settings to control your information",
      "Be critical of information sources",
    ],
    recommendation:
      "Consider using Facebook only for specific purposes, like event planning or staying in touch with distant friends. Avoid mindless scrolling.",
  },
  {
    name: "Instagram",
    icon: Image,
    harmfulEffects: [
      "Unrealistic body image expectations",
      "FOMO (Fear of Missing Out)",
      "Addiction to likes and validation",
      "Decreased face-to-face interactions",
    ],
    safeUsage: [
      "Follow accounts that inspire and educate you",
      "Turn off notifications to reduce compulsive checking",
      "Use the 'Close Friends' feature for more genuine sharing",
      "Take regular breaks from the app",
    ],
    recommendation:
      "Use Instagram as a source of inspiration or to share your creativity, not as a measure of self-worth. Consider following more educational or skill-building accounts.",
  },
  {
    name: "LinkedIn",
    icon: Briefcase,
    harmfulEffects: [
      "Professional comparison and imposter syndrome",
      "Overemphasis on personal branding",
      "Time sink with minimal return on investment",
      "Privacy concerns with professional data",
    ],
    safeUsage: [
      "Set specific goals for your LinkedIn usage",
      "Limit time spent scrolling the feed",
      "Be selective about connection requests",
      "Regularly update privacy settings",
    ],
    recommendation:
      "Use LinkedIn primarily for job searching, professional networking, and industry news. Avoid getting caught up in the 'hustle culture' often promoted on the platform.",
  },
]

export default function HarmfulWebsites() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <p className="text-sm text-gray-500 text-center mb-8">
          Note: Icons used are representative and not official brand logos.
        </p>
        <h1 className="text-3xl font-extrabold text-gray-900 text-center mb-8">
          Navigating Potentially Harmful Websites
        </h1>
        <p className="text-xl text-gray-600 text-center mb-12">
          Understanding the risks and learning to use social media mindfully
        </p>

        <div className="space-y-12">
          {websites.map((site) => (
            <Card key={site.name}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <site.icon className="h-8 w-8 text-gray-500" />
                    <CardTitle className="text-2xl font-bold">{site.name}</CardTitle>
                  </div>
                  <Badge variant="outline" className="text-orange-500 border-orange-500">
                    Use with caution
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-red-600 mb-2">
                      <AlertTriangle className="h-5 w-5 mr-2" />
                      Potential Harmful Effects
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {site.harmfulEffects.map((effect, index) => (
                        <li key={index} className="text-gray-600">
                          {effect}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="flex items-center text-lg font-semibold text-green-600 mb-2">
                      <ShieldCheck className="h-5 w-5 mr-2" />
                      Safe Usage Tips
                    </h3>
                    <ul className="list-disc pl-5 space-y-1">
                      {site.safeUsage.map((tip, index) => (
                        <li key={index} className="text-gray-600">
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-blue-600 mb-2">Our Recommendation</h3>
                    <p className="text-gray-600">{site.recommendation}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

