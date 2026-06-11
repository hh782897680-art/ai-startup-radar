import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LearningLink } from "@/data/learning";

type LearningLinkCardProps = {
  link: LearningLink;
  index?: number;
};

export function LearningLinkCard({ link, index }: LearningLinkCardProps) {
  return (
    <article className="learning-link-card">
      <div className="learning-link-top">
        {typeof index === "number" ? <span>{String(index + 1).padStart(2, "0")}</span> : null}
        <small>{link.label}</small>
      </div>
      <h3>
        <Link href={link.href}>{link.title}</Link>
      </h3>
      <p>{link.description}</p>
      <Link href={link.href} className="inline-link">
        {link.label} <ArrowRight size={15} aria-hidden="true" />
      </Link>
    </article>
  );
}
