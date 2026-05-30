import { Mail, Star } from "lucide-react";
import { footerColumns } from "@/data/home";

export function Footer() {
  return (
    <footer className="mx-auto max-w-[1280px] px-4 pb-8 sm:px-6 lg:px-8">
      <div className="rounded-[24px] border border-indigo-100 bg-white/90 p-6 shadow-[0_20px_56px_-40px_rgba(79,70,229,0.65)] sm:p-8">
        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-sm font-semibold text-slate-900">{column.title}</h3>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="transition hover:text-indigo-700">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-indigo-100 pt-4 text-sm text-slate-500">
          <p className="inline-flex items-center gap-1">
            <Star className="h-3.5 w-3.5 text-indigo-500" />
            © 2026 AI创业雷达 · AI创业工具平台
          </p>
          <p className="inline-flex items-center gap-1">
            <Mail className="h-3.5 w-3.5 text-indigo-500" />
            hi@aistartupradar.com
          </p>
        </div>
      </div>
    </footer>
  );
}
