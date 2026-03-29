import { For } from "solid-js";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, scrollTo } from "@/components/Navbar";

export default function Footer() {
  return (
    <footer class="border-t border-white/5 bg-[#0b0c10] py-12 px-6">
      <div class="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 mb-10">
        {/* Brand */}
        <div>
          <div class="flex items-center gap-2 mb-4">
            <span class="text-amber-400 text-xl">📚</span>
            <span
              class="font-bold text-lg"
              style="font-family:'Playfair Display',serif"
            >
              Book<span class="text-amber-400">Hunt</span>
            </span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed max-w-xs">
            A collection of books that help professionals live and work with more
            intention, clarity, and impact.
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
                    class="text-slate-500 hover:text-amber-400 text-sm transition-colors"
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

      <Separator class="bg-white/5 mb-8" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
        <p>© 2025 BookHunt. All rights reserved.</p>
        <div class="flex gap-6">
          <a href="#" class="hover:text-slate-400 transition-colors">
            Terms & Conditions
          </a>
          <a href="#" class="hover:text-slate-400 transition-colors">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}
