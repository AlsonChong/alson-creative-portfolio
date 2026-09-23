import { useId, useState } from "react";

const faqs = [
  {
    question: "What kind of work do you create?",
    answer:
      "I work across photography, videography, visual storytelling and creative production. I enjoy moving between different mediums depending on what the story needs.",
  },
  {
    question: "What can I help with?",
    answer:
      "Photography, videography, event coverage, campaign content, social media visuals, short-form video and creative production.",
  },
  {
    question: "Do you work across both photo and video?",
    answer:
      "Yes. Photography and video are both core parts of my creative practice, and I often combine them within the same project.",
  },
  {
    question: "What is your creative process?",
    answer:
      "I usually start by making myself to understand and fall in love towards the project, then move into planning, shooting and post-production. I like keeping visual direction and theme approach before starting the planning.",
  },
  {
    question: "Do you take on freelance or collaborative projects?",
    answer:
      "Yes. I am open to creative collaborations, freelance projects and opportunities where I can contribute through photography, videography or visual storytelling.",
  },
  {
    question: "How can I work with you?",
    answer:
      "Send me a message through the contact section or through @alsonc.1 on instagram with a brief description of your project, what you need and your expected timeline. From there, we can discuss the best way to approach it.",
  },
  {
    question: "What equipment and editing software are you familiar with?",
    answer:
      "I am experienced with any Sony and Fujifilm cameras but specifically Sony Full Frame cameras, For editing software I primarily use Premiere Pro for editing and DaVinci for Color Grading if needed.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const idPrefix = useId();

  return (
    <div className="border-b border-border">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const triggerId = `${idPrefix}-trigger-${index}`;
        const panelId = `${idPrefix}-panel-${index}`;

        return (
          <div key={faq.question} className="border-t border-border">
            <button
              id={triggerId}
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="grid w-full grid-cols-[2rem_minmax(0,1fr)_auto] items-center gap-3 py-5 text-left outline-none transition-colors duration-200 hover:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset sm:grid-cols-[3rem_minmax(0,1fr)_auto] sm:gap-5 sm:py-6"
            >
              <span className="text-sm tabular-nums text-muted-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="text-lg font-medium tracking-[-0.02em] sm:text-xl">
                {faq.question}
              </span>
              <span
                aria-hidden="true"
                className={`text-2xl font-light leading-none text-muted-foreground transition-transform duration-300 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={triggerId}
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <p className="max-w-2xl pb-6 pl-8 text-sm leading-relaxed text-muted-foreground sm:pl-12 sm:text-base">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
