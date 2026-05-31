import Link from "next/link";
import type { CategorySummary } from "@/lib/ideas";

interface CategoryCardProps {
  category: CategorySummary;
}

export function CategoryCard({ category }: CategoryCardProps) {
  return (
    <article className="category-card">
      <h3>
        <Link href={`/categories/${category.slug}`}>{category.name}</Link>
      </h3>
      <p>{category.description}</p>
      <p className="category-count">{category.ideaCount} ideas</p>
      <Link className="text-link" href={`/categories/${category.slug}`}>
        View category
      </Link>
    </article>
  );
}
