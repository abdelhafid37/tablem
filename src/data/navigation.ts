export interface ILink {
  label: string;
  href: string;
}

export const navigation: ILink[] = [
  { label: "Home", href: "/" },
  { label: "Menu", href: "/menu" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];
