import { For } from "solid-js";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, scrollTo } from "@/components/Navbar";

export default function Footer() {
  return (
    <footer
      class="py-12 px-6"
      style="border-top: 1px solid rgba(255,255,255,0.05); background: #0b0f1f;"
    >
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xl" style="color: var(--magenta)">
              📚
            </span>
            <span
              class="font-bold text-lg"
              style="font-family:'Playfair Display',serif"
            >
              Book<span style="color: var(--magenta)">Hunt</span>
            </span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
            A collection of books that help professionals live and work with
            more intention, clarity, and impact.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 class="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Navigation
          </h4>
          <ul class="space-y-2">
            <For each={NAV_LINKS}>
              {(l) => (
                <li>
                  <a
                    href={l.href}
                    class="text-slate-500 text-sm transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--magenta)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(l.href);
                    }}
                  >
                    {l.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 class="text-white text-sm font-semibold mb-4 uppercase tracking-wider">
            Contact
          </h4>
          <ul class="space-y-2 text-slate-500 text-sm">
            <li>+1 (305) 547-9909</li>
            <li>info@bookhunt.com</li>
            <li>382 NE 191st St, Miami, FL</li>
          </ul>
        </div>
      </div>

      <Separator style="background: rgba(255,255,255,0.05); margin-bottom: 2rem;" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
        <p>© 2025 BookHunt. All rights reserved.</p>
        <div class="flex gap-6">
          <a
            href="#"
            class="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Terms & Conditions
          </a>
          <a
            href="#"
            class="transition-colors"
            onMouseEnter={(e) => (e.currentTarget.style.color = "#94a3b8")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "")}
          >
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
