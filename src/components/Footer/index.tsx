import { For } from "solid-js";
import { Separator } from "@/components/ui/separator";
import { NAV_LINKS, scrollTo } from "@/components/Navbar";

const WEB_RESOURCES: { label: string; href: string }[] = [
  { label: "IEEE", href: "https://www.ieee.org/" },
  { label: "Texas Instruments", href: "https://www.ti.com/" },
  { label: "NCEES", href: "http://www.ncees.com/" },
  { label: "Motorola", href: "https://www.motorola.com/" },
  { label: "ASEE", href: "https://www.asee.org/" },
  { label: "National Semiconductor", href: "https://www.national.com/" },
  { label: "Agilent Technologies", href: "https://www.agilent.com/" },
];

export default function Footer() {
  return (
    <footer
      class="py-12 px-6"
      style="border-top: 1px solid rgba(255,255,255,0.05); background: #0b0f1f;"
    >
      <div class="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 mb-10">
        {/* Brand */}
        <div class="md:col-span-1">
          <div class="flex items-center gap-2 mb-4">
            <span class="text-xl" style="color: var(--magenta)">
              📚
            </span>
            <span
              class="font-bold text-lg"
              style="font-family:'Playfair Display',serif"
            >
              Electronic <span style="color: var(--magenta)">Circuits</span>
            </span>
          </div>
          <p class="text-slate-500 text-sm leading-relaxed mb-4">
            A concise, rigorous textbook covering BJT, MOSFET, and Op-amp
            fundamentals — built for undergraduate engineers.
          </p>
          <a
            href="mailto:info@electronic-circuits.com"
            class="text-sm transition-colors"
            style="color: var(--magenta);"
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.75")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            info@electronic-circuits.com
          </a>
        </div>

        {/* Navigation */}
        <div>
          <h4 class="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
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

        {/* Web Resources */}
        <div>
          <h4 class="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
            Web Resources
          </h4>
          <ul class="space-y-2">
            <For each={WEB_RESOURCES}>
              {(r) => (
                <li>
                  <a
                    href={r.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="text-slate-500 text-sm transition-colors"
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.color = "var(--magenta)")
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.color = "")}
                  >
                    {r.label}
                  </a>
                </li>
              )}
            </For>
          </ul>
        </div>

        {/* Author */}
        <div>
          <h4 class="text-white text-xs font-semibold mb-4 uppercase tracking-wider">
            About the Author
          </h4>
          <p class="text-slate-500 text-sm leading-relaxed mb-3">
            A-Imam Al-Sammak — 30+ years teaching experience, 40+ papers, 3
            patents. Chartered Engineer & Member of IET (UK).
          </p>
          <p class="text-slate-600 text-xs">M.Sc. Kent · Ph.D. Manchester</p>
          <p class="text-slate-600 text-xs mt-1">
            Visiting Scientist · Purdue & U. Victoria
          </p>
        </div>
      </div>

      <Separator style="background: rgba(255,255,255,0.05); margin-bottom: 2rem;" />

      <div class="flex flex-col md:flex-row items-center justify-between gap-4 text-slate-600 text-xs">
        <p>© 2024 Electronic Circuits. All rights reserved.</p>
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
