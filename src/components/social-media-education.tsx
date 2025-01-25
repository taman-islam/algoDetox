import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const educationalContent = [
  {
    title: "Understanding Social Media Addiction",
    content:
      "Social media addiction is characterized by excessive use of social platforms, leading to negative impacts on daily life, relationships, and mental health. It's driven by dopamine releases triggered by likes, comments, and notifications.",
  },
  {
    title: "Signs of Social Media Addiction",
    content:
      "Common signs include: losing track of time while scrolling, feeling anxious when unable to check social media, neglecting real-life relationships or responsibilities, and using social media to escape from problems or negative emotions.",
  },
  {
    title: "The Impact on Mental Health",
    content:
      "Excessive social media use can lead to increased feelings of anxiety, depression, loneliness, and FOMO (Fear of Missing Out). It can also negatively affect self-esteem and body image due to constant comparison with others.",
  },
  {
    title: "Benefits of a Social Media Detox",
    content:
      "Taking a break from social media can improve focus, productivity, and real-life relationships. It can also reduce stress, anxiety, and feelings of inadequacy, leading to better overall mental health and life satisfaction.",
  },
  {
    title: "Tips for Effective Detoxing",
    content:
      "Start small with specific time limits, use app blockers, find alternative activities, practice mindfulness, and connect with people in real life. Remember, it's about creating a healthier relationship with technology, not eliminating it entirely.",
  },
]

export function SocialMediaEducation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Social Media Addiction: Learn & Overcome</CardTitle>
        <CardDescription>Expand your knowledge to support your detox journey</CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          {educationalContent.map((item, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>{item.content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </CardContent>
    </Card>
  )
}

