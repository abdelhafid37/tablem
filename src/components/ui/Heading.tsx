import * as React from "react";

export default function Heading({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-4xl lg:text-5xl tracking-tight leading-tight">
      {children}
    </h2>
  );
}
