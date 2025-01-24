import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Brain, ShieldCheck, Zap, SmilePlus, Activity, Heart } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Hero Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Break Free from Digital Addiction.
              <span className="text-blue-600"> Reclaim Your Life.</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              algoDetox helps you escape the dopamine traps of social media and addictive apps through a personalized
              30-day detox plan, daily check-ins, and mindful reintroduction.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <Link href="/signup" className="rounded-md shadow">
                <Button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                  Start Your Detox – Free
                </Button>
              </Link>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Button
                  variant="outline"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Support the Mission
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why algoDetox? */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Why algoDetox?</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <ShieldCheck className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Algorithm-driven dopamine traps</h3>
              <p className="text-gray-600">
                Understand how tech companies profit from your attention and learn to break free.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Zap className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Digital addiction impact</h3>
              <p className="text-gray-600">
                Discover how excessive screen time affects your mental health and productivity.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <SmilePlus className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Personalized detox journey</h3>
              <p className="text-gray-600">
                Get a tailored 30-day plan to rewire your brain for better focus and wellbeing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">How It Works</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                <ShieldCheck className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Personalize Your Journey</h3>
              <p className="text-gray-600">Identify your challenges and set initial detox goals.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                <Activity className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Follow Your 30-Day Plan</h3>
              <p className="text-gray-600">Get daily challenges and tips to reduce digital dependence.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Track Your Progress</h3>
              <p className="text-gray-600">Log daily check-ins and see your improvements over time.</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-blue-100 rounded-full p-3 mb-4">
                <Brain className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Gain Valuable Insights</h3>
              <p className="text-gray-600">Understand your behavior patterns and emotional triggers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Success Stories</h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "algoDetox helped me reduce my screen time by 50%. I'm more present with my family and productive at
                work now!"
              </p>
              <p className="font-semibold">- Sarah K., Digital Marketer</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "As a student, I was constantly distracted by social media. algoDetox helped me regain focus and improve
                my grades."
              </p>
              <p className="font-semibold">- Alex T., College Student</p>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <p className="text-gray-600 mb-4">
                "The daily check-ins and personalized insights were eye-opening. I've developed much healthier digital
                habits."
              </p>
              <p className="font-semibold">- Dr. Michael Chen, Psychologist</p>
            </div>
          </div>
        </div>
      </section>

      {/* Support the Mission */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Support the Mission</h2>
          <p className="text-center text-gray-600 mb-8">
            algoDetox is free because digital wellbeing should be accessible to everyone. Your donations help us improve
            our tools and reach more people in need.
          </p>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Supporter ($5)</h3>
              <p className="text-gray-600 mb-4">Help us maintain and improve the platform</p>
              <Button className="w-full">Donate $5</Button>
            </div>
            <div className="bg-white shadow rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Sustainer ($10)</h3>
              <p className="text-gray-600 mb-4">Support development of new features and research</p>
              <Button className="w-full">Donate $10</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Brain className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">algoDetox</span>
            </div>
            <div className="flex space-x-6">
              <Link href="#" className="hover:text-blue-400">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-blue-400">
                Terms of Service
              </Link>
              <Link href="#" className="hover:text-blue-400">
                Contact Us
              </Link>
            </div>
          </div>
          <div className="mt-4 text-center text-sm">© 2023 algoDetox. All rights reserved.</div>
        </div>
      </footer>
    </div>
  )
}

