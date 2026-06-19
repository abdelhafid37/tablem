import Link from "next/link";
import { ArrowCircleUpRightIcon } from "./Icon";

export default function Button({
  label = "Book a Table",
  href = "/reservation",
}: {
  label?: string;
  href?: string;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center justify-center gap-2 pl-5 pr-3 py-3 md:gap-1 md:pl-4 md:pr-2 md:py-1 text-lg md:text-base bg-primary text-background font-medium cursor-pointer group hover:bg-primary-hover transition-all duration-300 md:active:scale-95"
    >
      <span>{label}</span>
      <ArrowCircleUpRightIcon
        size={32}
        weight="fill"
        className="group-hover:rotate-45 transition-transform duration-300"
      />
    </Link>
  );
}
