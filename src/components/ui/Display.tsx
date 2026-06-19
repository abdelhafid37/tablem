import * as React from "react";

export default function Display({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="font-display text-5xl lg:text-7xl leading-none tracking-tight">
      {children}
    </h1>
  );
}
