import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function CollapsibleDisclaimer() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="disclaimer">
        <AccordionTrigger>Disclaimer</AccordionTrigger>
        <AccordionContent>
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
            <p className="text-yellow-700 text-base font-semibold">
              These insights reflect our research and perspectives on digital well-being.
            </p>
            <ul className="list-disc pl-5 text-yellow-700 text-base space-y-2 mt-2">
              <li>Based on current research and personal observations</li>
              <li>Meant to encourage mindful digital habits</li>
              <li>Not a substitute for medical, psychological, or tech advice</li>
              <li>Best applied based on individual needs and experiences</li>
            </ul>
            <p className="text-yellow-700 text-base mt-4">
              We encourage critical thinking—evaluate our suggestions, do your own research, and find what works best
              for you.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}

