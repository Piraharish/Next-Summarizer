import { FaRegCircleQuestion } from "react-icons/fa6";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const Faqs = () => {
  const faqs = [
    {
      question: "Is it free to use?",
      answer:
        "Yes, it is completely free for all users. No subscription is needed. Anyone with internet access can use it.",
    },
    {
      question: "Can it summarize an entire website?",
      answer:
        "Yes, it can summarize an entire website. However, it may not work on all webpages.",
    },
    {
      question: "Is the summary of the article response accurate?",
      answer: "No, sometimes it may provide a response that is out of context.",
    },
    {
      question: "Can I download the generated summary?",
      answer: "Yes, You can download the generated summary as a text document.",
    },
  ];

  return (
    <section id="faqs">
      <div className="max-w-3xl mx-auto flex flex-col items-center">
        <div className="inline-flex items-center text-base font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
          <FaRegCircleQuestion className="mr-2" />
          FAQs
        </div>
        <h2 className="text-center text-3xl font-bold mb-8">
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-base font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
