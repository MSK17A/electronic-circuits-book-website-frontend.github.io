import { createSignal, For } from "solid-js";
import { Button } from "@/components/ui/button";
import useNavbarData from "./navbarData-hook";

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Chapters", href: "#chapters" },
  { label: "Reviews", href: "#reviews" },
  { label: "Author", href: "#author" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export function scrollTo(id: string) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  const { navbarData, error } = useNavbarData();
  const [mobileOpen, setMobileOpen] = createSignal(false);

  const handleNavClick = (href: string) => {
    scrollTo(href);
    setMobileOpen(false);
  };

  return (
    <header class="sticky top-0 z-50 border-b border-white/5 bg-[#0b0c10]/80 backdrop-blur-md">
      <div class="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div class="flex items-center gap-2">
          <span class="text-amber-400 text-2xl">📚</span>
          <span
            class="font-bold text-lg tracking-tight"
            style="font-family:'Playfair Display',serif"
          >
            {navbarData()?.title}
            {/* Book<span class="text-amber-400">Hunt</span> */}
          </span>
        </div>

        {/* Desktop nav */}
        <nav class="hidden md:flex items-center gap-6">
          <For each={NAV_LINKS}>
            {(link) => (
              <a
                href={link.href}
                class="nav-link"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            )}
          </For>
        </nav>

        <div class="flex items-center gap-3">
          <Button
            size="sm"
            class="hidden md:flex bg-amber-500 hover:bg-amber-400 text-black font-semibold"
            onClick={() => scrollTo("#pricing")}
          >
            Get the Book
          </Button>

          {/* Hamburger */}
          <button
            class="md:hidden text-slate-400 hover:text-white p-1"
            onClick={() => setMobileOpen(!mobileOpen())}
            aria-label="Toggle menu"
          >
            {mobileOpen() ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen() && (
        <div class="md:hidden bg-[#13151c] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          <For each={NAV_LINKS}>
            {(link) => (
              <a
                href={link.href}
                class="nav-link text-base"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
              >
                {link.label}
              </a>
            )}
          </For>
          <Button
            class="bg-amber-500 hover:bg-amber-400 text-black font-semibold mt-2"
            onClick={() => scrollTo("#pricing")}
          >
            Get the Book
          </Button>
        </div>
      )}
    </header>
  );
}
