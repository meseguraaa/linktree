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
        glass:
          "border border-black/10 bg-white/30 backdrop-blur hover:bg-white/40 hover:border-black/20 transition-all",
        default: "",
      },
      size: {
        md: "h-16", // altura ajustada (um pouco maior)
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
        "group rounded-lg border-zinc-400 shadow-sm"
      )}
    >
      <CardContent className="p-0 h-full">
        <Link
          href={href}
          className={cn(
            "flex items-center justify-center w-full h-full px-6 text-center text-zinc-800 font-medium tracking-tight",
            "focus-visible:ring-2 focus-visible:ring-white/30 rounded-lg transition-transform hover:scale-[1.01]",
            className
          )}
          {...props}
        >
          {/* brilho varrendo */}
          <span
            aria-hidden="true"
            className={cn(
              "pointer-events-none absolute inset-0 -translate-x-full opacity-0",
              "bg-gradient-to-r from-transparent via-white/20 to-transparent",
              "transition duration-500 ease-out",
              "group-hover:opacity-100 group-hover:translate-x-full"
            )}
          />
          {/* halo suave */}
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
