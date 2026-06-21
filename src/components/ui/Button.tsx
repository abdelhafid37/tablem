import Link from "next/link";
import { ArrowUpRightIcon } from "./Icon";

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
      className="inline-flex items-center justify-center gap-2 py-3 pl-5 pr-3 text-lg transition-all duration-300 cursor-pointer md:gap-1 md:pl-3 md:pr-2 md:py-2 md:text-base bg-brand text-bg group hover:bg-brand-hover md:active:scale-95 leading-none"
    >
      <span>{label}</span>
      <ArrowUpRightIcon
        size={18}
        weight="regular"
        className="transition-transform duration-300 group-hover:rotate-45"
      />
    </Link>
  );
}
