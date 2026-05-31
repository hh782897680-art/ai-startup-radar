import Link from "next/link";
import { cn } from "@/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type SharedProps = {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type LinkButtonProps = SharedProps & {
  href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

type NativeButtonProps = SharedProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonProps = LinkButtonProps | NativeButtonProps;

function getButtonClasses(variant: ButtonVariant, size: ButtonSize, className?: string) {
  return cn(
    "btn",
    `btn-${variant}`,
    `btn-${size}`,
    className,
  );
}

export function Button(props: ButtonProps) {
  const variant = props.variant ?? "primary";
  const size = props.size ?? "md";

  if ("href" in props && typeof props.href === "string") {
    const { href, children, className, ...linkProps } = props;

    return (
      <Link href={href} className={getButtonClasses(variant, size, className)} {...linkProps}>
        {children}
      </Link>
    );
  }

  const { children, className, type, ...buttonProps } = props;

  return (
    <button
      type={type ?? "button"}
      className={getButtonClasses(variant, size, className)}
      {...buttonProps}
    >
      {children}
    </button>
  );
}
