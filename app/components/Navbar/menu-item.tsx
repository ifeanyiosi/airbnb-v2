"use client";

import Link from "next/link";

interface MenuItemProps {
  href: string;
  label: string;
}

export default function MenuItem({ href, label }: MenuItemProps) {
  return (
    <Link
      type="button"
      href={href}
      className="px-4 py-3 hover:bg-neutral-100 transition font-semibold"
    >
      {label}
    </Link>
  );
}
