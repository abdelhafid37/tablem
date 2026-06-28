import * as React from "react";

export default function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-sm uppercase tracking-[.2em] text-brand font-medium">
      {children}
    </p>
  );
}
