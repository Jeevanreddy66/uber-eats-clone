"use client";
import { ReactNode } from "react";

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <section>
        <nav>Hello</nav>
        {children}
      </section>
    </>
  );
}
