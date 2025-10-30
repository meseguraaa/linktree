import * as React from "react";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const linkCardVariants = cva(
  "relative w-full overflow-hidden focus-visible:outline-none",
  {
    variants: {
      variant: {
        glass: [
          "border backdrop-blur transition-all",
          "border-black bg-white/40 hover:bg-white/50 hover:border-black/40",
          "dark:border-white/40 dark:bg-white/10 dark:hover:bg-white/40",
        ].join(" "),
        default: "",
      },
      size: {
        md: "h-16",
        lg: "h-20",
      },
    },
    defaultVariants: {
      variant: "glass",
      size: "md",
    },
  }
);

export interface LinkCardProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof linkCardVariants> {
  children: React.ReactNode;
  className?: string;
}

export function LinkCard({
  href,
  children,
  className,
  variant,
  size,
  ...props
}: LinkCardProps) {
  return (
    <Card
      className={cn(
        linkCardVariants({ variant, size }),
        "group rounded-lg shadow-sm"
      )}
    >
      <CardContent className="p-0 h-full">
        <Link
          href={href}
          className={cn(
            "flex items-center justify-center w-full h-full px-6 text-center font-medium tracking-tight",
            "text-zinc-800 dark:text-zinc-100",
            "focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg transition-transform hover:scale-[1.01]",
            className
          )}
          {...props}
        >
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 -translate-x-full opacity-0",
              "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              "transition duration-500 ease-out",
              "group-hover:opacity-100 group-hover:translate-x-full"
            )}
          />
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 rounded-lg ring-0 transition duration-300"
            )}
          />
          <span className="relative z-[1]">{children}</span>
        </Link>
      </CardContent>
    </Card>
  );
}
