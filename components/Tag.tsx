import { cn } from "@/lib/cn";

type TagVariant = "default" | "subtle" | "signal" | "dark";

type TagProps = {
  children: React.ReactNode;
  className?: string;
  variant?: TagVariant;
};

export function Tag({ children, className, variant = "default" }: TagProps) {
  return <span className={cn("tag", `tag-${variant}`, className)}>{children}</span>;
}
