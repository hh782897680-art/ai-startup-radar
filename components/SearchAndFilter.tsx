"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

interface SearchAndFilterProps {
  categories: { name: string; slug: string }[];
  initialKeyword: string;
  initialCategory: string;
  initialDifficulty: string;
  initialLaunchSpeed: string;
}

export function SearchAndFilter({
  categories,
  initialKeyword,
  initialCategory,
  initialDifficulty,
  initialLaunchSpeed,
}: SearchAndFilterProps) {
  const router = useRouter();

  const [keyword, setKeyword] = useState(initialKeyword);
  const [category, setCategory] = useState(initialCategory);
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const [launchSpeed, setLaunchSpeed] = useState(initialLaunchSpeed);

  const applyFilters = () => {
    const params = new URLSearchParams();

    if (keyword.trim()) {
      params.set("q", keyword.trim());
    }

    if (category) {
      params.set("category", category);
    }

    if (difficulty) {
      params.set("difficulty", difficulty);
    }

    if (launchSpeed) {
      params.set("launchSpeed", launchSpeed);
    }

    const queryString = params.toString();
    router.push(queryString ? `/ideas?${queryString}` : "/ideas");
  };

  const clearFilters = () => {
    setKeyword("");
    setCategory("");
    setDifficulty("");
    setLaunchSpeed("");
    router.push("/ideas");
  };

  return (
    <section className="filter-panel" aria-label="Search and filters">
      <div className="filter-grid">
        <label>
          <span>Keyword</span>
          <input
            type="search"
            placeholder="Search ideas, pain points, channels..."
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                applyFilters();
              }
            }}
          />
        </label>

        <label>
          <span>Category</span>
          <select value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="">All categories</option>
            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>Difficulty</span>
          <select value={difficulty} onChange={(event) => setDifficulty(event.target.value)}>
            <option value="">All levels</option>
            <option value="Beginner">Beginner</option>
            <option value="Intermediate">Intermediate</option>
            <option value="Advanced">Advanced</option>
          </select>
        </label>

        <label>
          <span>Launch speed</span>
          <select value={launchSpeed} onChange={(event) => setLaunchSpeed(event.target.value)}>
            <option value="">All speeds</option>
            <option value="Fast">Fast</option>
            <option value="Medium">Medium</option>
            <option value="Slow">Slow</option>
          </select>
        </label>
      </div>

      <div className="filter-actions">
        <button type="button" className="button-primary" onClick={applyFilters}>
          Apply filters
        </button>
        <button type="button" className="button-secondary" onClick={clearFilters}>
          Reset
        </button>
      </div>
    </section>
  );
}
