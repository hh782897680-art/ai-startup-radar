"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/cn";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list" role="list">
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <article key={item.question} className="faq-item" role="listitem">
            <h3>
              <button
                type="button"
                className="faq-trigger"
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${index}`}
                id={`faq-trigger-${index}`}
                onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              >
                <span>{item.question}</span>
                <ChevronDown size={16} className={cn("faq-icon", isOpen && "faq-icon-open")} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={`faq-panel-${index}`}
              role="region"
              aria-labelledby={`faq-trigger-${index}`}
              className={cn("faq-panel", isOpen && "faq-panel-open")}
            >
              <p>{item.answer}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
}
