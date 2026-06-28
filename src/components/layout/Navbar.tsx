"use client";

import * as React from "react";
import Container from "./Container";
import Link from "next/link";
import Button from "../ui/Button";
import { ListIcon, XIcon } from "../ui/Icon";
import { AnimatePresence, motion } from "framer-motion";
import { useLenis } from "lenis/react";
import Lenis from "lenis";
import { navigation } from "@/data/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const [elevate, setElevate] = React.useState(false);
  const [hidden, setHidden] = React.useState(false);
  const lastScrollRef = React.useRef(0);

  const lenis = useLenis();
  const SCROLL_THRESHOLD = 50;

  React.useEffect(() => {
    if (!lenis) return;

    if (menuOpen) {
      lenis.stop();
      setHidden(false);
    } else {
      lenis.start();
    }

    const handleScroll = ({ scroll }: Lenis) => {
      const nextElevate = scroll > SCROLL_THRESHOLD;
      setElevate((prev) => (prev === nextElevate ? prev : nextElevate));

      const nextHidden =
        scroll <= SCROLL_THRESHOLD ? false : scroll > lastScrollRef.current;
      setHidden((prev) => (prev === nextHidden ? prev : nextHidden));

      lastScrollRef.current = scroll;
    };

    lenis.on("scroll", handleScroll);
    return () => lenis.off("scroll", handleScroll);
  }, [lenis, menuOpen]);

  return (
    <motion.header
      animate={{ y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      data-elevate={elevate}
      className="fixed top-0 left-0 right-0 h-16 flex items-center justify-center text-text z-50 data-[elevate=true]:bg-surface transition-colors duration-300"
    >
      <Container>
        <div className="flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 flex-1">
            {navigation.map(({ href, label }) => (
              <Link
                key={href}
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
            <button
              type="button"
              aria-label="Open navigation menu"
              className="md:hidden"
              onClick={() => setMenuOpen(true)}
            >
              <ListIcon size={32} />
            </button>
            <AnimatePresence>
              {menuOpen && (
                <motion.div
                  onClick={() => setMenuOpen(false)}
                  key="overlay"
                  initial={{ opacity: 0, pointerEvents: "none" }}
                  animate={{ opacity: 1, pointerEvents: "auto" }}
                  exit={{ opacity: 0, pointerEvents: "none" }}
                  transition={{
                    ease: "easeInOut",
                    duration: 0.2,
                  }}
                  className="md:hidden fixed inset-0 h-dvh w-full bg-text/80 backdrop-blur-md"
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
                  className="md:hidden fixed right-0 top-0 h-dvh max-w-sm w-full bg-bg flex flex-col"
                >
                  <div className="flex justify-end h-20 px-6">
                    <button
                      type="button"
                      aria-label="Close navigation menu"
                      className="md:hidden"
                      onClick={() => setMenuOpen(false)}
                    >
                      <XIcon size={32} />
                    </button>
                  </div>
                  <div className="pt-10 grow">
                    <nav className="flex flex-col text-3xl items-center gap-10 flex-1">
                      {navigation.map(({ href, label }) => (
                        <Link
                          key={href}
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
    </motion.header>
  );
}
