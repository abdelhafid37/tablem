import Link from "next/link";
import { ArrowUpRightIcon } from "./Icon";

interface ButtonProps {
  label?: string;
  href?: string;
}

export default function Button({
  label = "Visit Us",
  href = "/contact",
}: ButtonProps) {
  const external = /^https?:\/\//.test(href);

  const className =
    "inline-flex items-center justify-center gap-2 py-3 pl-5 pr-3 text-lg transition-all duration-300 cursor-pointer md:gap-1 md:pl-3 md:pr-2 md:py-2 md:text-base bg-brand text-bg group hover:bg-brand-hover active:scale-95 leading-none";

  const content = (
    <>
      <span>{label}</span>
      <ArrowUpRightIcon
        size={18}
        weight="regular"
        className="transition-transform duration-300 group-hover:translate-x-1"
      />
    </>
  );

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
      >
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={className}>
      {content}
    </Link>
  );
}
