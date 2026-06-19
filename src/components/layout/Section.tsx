import * as React from "react";
import Container from "./Container";

export default function Section({ children }: { children: React.ReactNode }) {
  return (
    <section className="py-24 lg:py-32">
      <Container>{children}</Container>
    </section>
  );
}
