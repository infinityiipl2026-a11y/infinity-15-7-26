"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ExternalLink, Menu, X } from "lucide-react";
import { diyCornerLinks, navLinks, otherVentures } from "../lib/site-config";

type MobileLink = { href: string; label: string; external?: boolean };

// Flat list of links shown in the mobile slide-in menu: Home, About,
// Products, DIY Corner, Infrastructure, Contact, Other Ventures.
const baseMobileLinks: MobileLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/origami", label: "DIY Corner" },
  { href: "/infrastructure", label: "Infrastructure" },
  { href: "/contact", label: "Contact" },
];

// "Other Ventures" currently has a single real business (Infinix). When
// there's exactly one venture configured, the mobile menu links straight out
// to that site instead of an in-app listing page — update the URL in
// `otherVentures` (site-config.ts) and this follows automatically.
function getOtherVenturesMobileLink(): MobileLink {
  if (otherVentures.length === 1) {
    return { href: otherVentures[0].url, label: "Other Ventures", external: true };
  }
  return { href: "/other-ventures", label: "Other Ventures" };
}

function useIsActive(href: string) {
  const pathname = usePathname();
  if (href === "/") return pathname === "/";
  const base = href.split("#")[0];
  return base !== "" && pathname.startsWith(base);
}

function NavLink({ href, label }: { href: string; label: string }) {
  const isActive = useIsActive(href);
  return (
    <Link
      href={href}
      aria-current={isActive ? "page" : undefined}
      className={`relative pb-1 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-300 hover:text-gold after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-0.5 after:bg-gold after:transition-all after:duration-300 hover:after:w-full ${
        isActive ? "text-gold! after:w-full" : "after:w-0"
      }`}
    >
      {label}
    </Link>
  );
}

function DropdownMenu({
  label,
  isActive,
  children,
  panelClassName = "w-64",
}: {
  label: string;
  isActive: boolean;
  children: React.ReactNode;
  panelClassName?: string;
}) {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const openNow = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const closeSoon = () => {
    closeTimer.current = setTimeout(() => setOpen(false), 150);
  };

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={closeSoon}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-haspopup="true"
        className={`flex items-center gap-1 pb-1 text-sm font-semibold uppercase tracking-wide text-cream transition-colors duration-300 hover:text-gold ${
          isActive ? "text-gold!" : ""
        }`}
      >
        {label}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>

      <div
        className={`absolute left-1/2 top-full z-50 -translate-x-1/2 pt-3 transition-all duration-200 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }`}
      >
        <div
          className={`${panelClassName} rounded-lg border border-mist bg-paper p-2 shadow-[0_18px_45px_rgba(0,0,0,0.18)]`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function DiyCornerDropdownItems() {
  return (
    <ul className="list-none">
      {diyCornerLinks.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="block rounded-md px-4 py-2.5 text-sm font-medium text-ink transition-colors duration-200 hover:bg-cream hover:text-forest"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

function OtherVenturesDropdownItems() {
  return (
    <div className="grid grid-cols-1 gap-2 p-1">
      {otherVentures.map((venture) => (
        <div
          key={venture.name}
          className="flex items-center gap-3 rounded-md border border-mist/70 bg-cream/40 p-2.5 transition-colors duration-200 hover:border-gold hover:bg-cream"
        >
          <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-md bg-white ring-1 ring-mist">
            <Image
              src={venture.logo}
              alt={`${venture.name} logo`}
              width={40}
              height={40}
              className="h-full w-full object-contain p-1"
            />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-bold text-ink">{venture.name}</p>
            <p className="truncate text-xs text-slate">{venture.description}</p>
          </div>
          <a
            href={venture.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${venture.name} website`}
            className="inline-flex shrink-0 items-center gap-1 rounded-md bg-forest px-2.5 py-1.5 text-[11px] font-bold uppercase tracking-wide text-cream transition-colors duration-200 hover:bg-forest-dark"
          >
            Visit <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      ))}
    </div>
  );
}

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Close on Escape for keyboard users.
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false);
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return (
    <nav className="bg-forest sticky top-0 z-50 shadow-[0_3px_16px_rgba(0,0,0,0.18)]">
      {/* Desktop navigation */}
      <div className="mx-auto hidden max-w-[1400px] items-center justify-center gap-8 px-4 py-4 lg:flex lg:gap-10">
        <ul className="flex flex-wrap items-center justify-center gap-8 list-none lg:gap-10">
          <li>
            <NavLink href="/" label="Home" />
          </li>
          <li>
            <NavLink href="/about" label="About Us" />
          </li>
          <li>
            <NavLink href="/products" label="Products" />
          </li>
          <li>
            <DropdownMenu label="DIY Corner" isActive={pathname.startsWith("/origami")}>
              <DiyCornerDropdownItems />
            </DropdownMenu>
          </li>
          <li>
            <NavLink href="/infrastructure" label="Infrastructure" />
          </li>
          <li>
            <NavLink href="/career" label="Careers" />
          </li>
          <li>
            <DropdownMenu
              label="Other Ventures"
              isActive={pathname.startsWith("/other-ventures")}
              panelClassName="w-[22rem]"
            >
              <OtherVenturesDropdownItems />
            </DropdownMenu>
          </li>
        </ul>
        <Link
          href="/contact"
          className="shrink-0 rounded-md bg-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-forest-dark transition-all duration-300 hover:bg-gold-light hover:-translate-y-0.5"
        >
          Contact
        </Link>
      </div>

      {/* Mobile top bar: hamburger only (logo lives in the Header above) */}
      <div className="flex items-center justify-end px-4 py-3 lg:hidden">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
          className="inline-flex items-center justify-center rounded-md p-2 text-cream transition-colors duration-200 hover:bg-forest-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile slide-in menu + backdrop */}
      <div
        aria-hidden={!mobileOpen}
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[60] bg-ink/60 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        id="mobile-menu"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-[70] flex h-dvh w-[85%] max-w-sm flex-col bg-paper shadow-[-10px_0_40px_rgba(0,0,0,0.25)] transition-transform duration-300 ease-out lg:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-mist px-5 py-4">
          <Image
            src="/images/logo.png"
            alt="Infinity Industries logo"
            width={120}
            height={56}
            className="h-10 w-auto object-contain"
          />
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            className="inline-flex items-center justify-center rounded-md p-2 text-ink transition-colors duration-200 hover:bg-cream focus-visible:outline focus-visible:outline-2 focus-visible:outline-forest"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        <ul className="flex-1 list-none overflow-y-auto px-3 py-4">
          {[...baseMobileLinks, getOtherVenturesMobileLink()].map((link) => {
            if (link.external) {
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-lg px-4 py-3.5 text-base font-semibold tracking-wide text-ink transition-colors duration-200 hover:bg-cream hover:text-forest"
                  >
                    {link.label}
                    <ExternalLink className="h-4 w-4 opacity-60" />
                  </a>
                </li>
              );
            }

            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href.split("#")[0]);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`block rounded-lg px-4 py-3.5 text-base font-semibold tracking-wide transition-colors duration-200 ${
                    isActive
                      ? "bg-forest text-cream"
                      : "text-ink hover:bg-cream hover:text-forest"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
