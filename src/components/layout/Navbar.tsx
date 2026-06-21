"use client";

import * as React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "../ui/Button";
import { ListIcon, XIcon } from "../ui/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Lenis from "lenis";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [elevate, setElevate] = React.useState(false);
  const lenis = useLenis();

  React.useEffect(() => {
    if (!lenis) return;

    const whileScroll = ({ scroll }: Lenis) => setElevate(scroll > 50);

    lenis.on("scroll", whileScroll);
    return () => lenis.off("scroll", whileScroll);
  }, [lenis]);

  return (
    <header
      data-elevate={elevate}
      className="sticky top-0 h-20 flex items-center justify-center bg-bg text-text z-50 data-[elevate=true]:bg-surface transition-colors duration-300"
    >
      <Container>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navigation.map(({ href, label }, i) => (
              <Link
                key={i}
                href={href}
                className="hover:text-brand transition-colors duration-300"
              >
                {label}
              </Link>
            ))}
          </nav>

          <div className="flex-1 md:text-center">
            <Link
              href={"/"}
              className="text-2xl font-semibold tracking-wide font-display text-text"
            >
              Table M
            </Link>
          </div>

          <div className="flex-1 flex justify-end">
            <div className="hidden md:block">
              <Button />
            </div>
            <button className="md:hidden" onClick={() => setMenuOpen(true)}>
              <ListIcon size={32} />
            </button>
            <AnimatePresence mode="wait">
              {menuOpen && (
                <motion.div
                  onClick={() => setMenuOpen(false)}
                  key="overlay"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                  className="md:hidden fixed inset-0 h-dvh w-full bg-bg/20 backdrop-blur-md"
                />
              )}
              {menuOpen && (
                <motion.div
                  key="menu"
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.4,
                  }}
                  className="md:hidden fixed right-0 top-0 h-dvh w-8/12 bg-bg flex flex-col"
                >
                  <div className="flex justify-end h-20 px-6">
                    <button
                      className="md:hidden"
                      onClick={() => setMenuOpen(false)}
                    >
                      <XIcon size={32} />
                    </button>
                  </div>
                  <div className="pt-10 grow">
                    <nav className="flex flex-col text-3xl items-center gap-10 flex-1">
                      {navigation.map(({ href, label }, i) => (
                        <Link
                          key={i}
                          href={href}
                          className="hover:text-brand"
                          onClick={() => setMenuOpen(false)}
                        >
                          {label}
                        </Link>
                      ))}
                    </nav>
                  </div>
                  <Button />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </header>
  );
}
