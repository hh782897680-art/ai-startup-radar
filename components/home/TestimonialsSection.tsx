import { MessageSquareQuote, Star } from "lucide-react";
import { testimonials } from "@/data/home";

export function TestimonialsSection() {
  return (
    <section className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-8">
      <div className="dashboard-card p-5 sm:p-6">
        <div className="mb-4">
          <h2 className="font-mono text-2xl text-slate-900">他们正在用AI创业雷达</h2>
          <p className="text-sm text-slate-500">真实用户反馈聚焦方向、效率和执行灵感</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-3xl border border-indigo-100 bg-white p-5 shadow-[0_20px_60px_rgba(79,70,229,0.12)]"
            >
              <div className="flex items-center justify-between">
                <MessageSquareQuote className="h-5 w-5 text-indigo-500" />
                <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
                  <Star className="h-3.5 w-3.5 text-indigo-400" />
                  用户评价
                </span>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-700">{item.text}</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">{item.name}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
