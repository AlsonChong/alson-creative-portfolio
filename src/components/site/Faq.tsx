import { useState } from "react";

const faqs = [
  {
    q: "What kind of photography do you specialise in?",
    a: "Commercial and editorial work — campaigns, portraits, automotive, fashion and travel storytelling. Every project starts with the story, not the gear.",
  },
  {
    q: "Do you travel for shoots?",
    a: "Yes. I shoot worldwide and handle my own travel logistics. Projects outside my home base include a simple travel line in the quote.",
  },
  {
    q: "What does a typical project cost?",
    a: "Day rates start at a fixed creative fee and scale with crew, licensing and post-production. Send your brief and you'll get an itemised quote within 48 hours.",
  },
  {
    q: "How long until I receive the images?",
    a: "Previews within 48 hours, and the full retouched delivery in 7 to 14 days depending on volume.",
  },
  {
    q: "Do you also shoot video?",
    a: "Yes — I direct and edit short films and social cutdowns, so one shoot can deliver both stills and motion.",
  },
  {
    q: "Who owns the images?",
    a: "I keep copyright and grant the usage licence agreed in the contract. Broader or exclusive rights can always be arranged.",
  },
  {
    q: "How do we get started?",
    a: "Send a short note with your dates, location and the idea. We'll jump on a call and shape it from there.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            className="overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500"
          >
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
            >
              <span className="text-base font-medium sm:text-lg">{f.q}</span>
              <span
                className={`text-xl text-muted-foreground transition-transform duration-500 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <div
              className={`grid transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <p className="overflow-hidden px-6 text-sm leading-relaxed text-muted-foreground">
                <span className="block pb-5">{f.a}</span>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
