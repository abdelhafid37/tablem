import * as React from "react";

export default function Text({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-base lg:text-lg leading-relaxed text-muted">
      {children}
    </p>
  );
}
