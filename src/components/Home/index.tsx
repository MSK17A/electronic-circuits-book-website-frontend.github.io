import { createSignal, For, Show } from "solid-js";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

import { scrollTo } from "@/components/Navbar";

// ─── Data ─────────────────────────────────────────────────────────────────────

const FEATURES = [
  {
    icon: "🎓",
    title: "Learn From Experts",
    desc: "Step-by-step guidance from seasoned professionals with real-world experience.",
  },
  {
    icon: "📖",
    title: "16 Chapters Included",
    desc: "Comprehensive coverage from fundamentals to advanced techniques.",
  },
  {
    icon: "📱",
    title: "Any Device",
    desc: "iBooks, PDF & ePub versions — read anywhere, anytime.",
  },
  {
    icon: "🎧",
    title: "Audio Book",
    desc: "Full audio narration included with every purchase.",
  },
  {
    icon: "🏆",
    title: "10+ Awards",
    desc: "Recognised internationally for design and educational excellence.",
  },
  {
    icon: "🔄",
    title: "Lifetime Updates",
    desc: "Free updates as the field evolves — your purchase never goes stale.",
  },
];

const CHAPTERS = [
  { num: "01", title: "The Data Science Process", pages: 24 },
  { num: "02", title: "The Rise of Trend Design", pages: 18 },
  { num: "03", title: "Visual Thinking & Ideation", pages: 22 },
  { num: "04", title: "Creative Problem Solving", pages: 30 },
  { num: "05", title: "Communication Frameworks", pages: 20 },
  { num: "06", title: "Building Consistent Habits", pages: 16 },
  { num: "07", title: "Time & Energy Mastery", pages: 28 },
  { num: "08", title: "Leadership From Within", pages: 26 },
  { num: "09", title: "Measuring What Matters", pages: 22 },
];

const TESTIMONIALS = [
  {
    name: "Sarah Chen",
    role: "Product Designer",
    text: "A transformative read. Every chapter unlocked a new way of seeing challenges — I keep coming back to it.",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Startup Founder",
    text: "Practical, profound, and packed with actionable insight. Best investment I made this year.",
    avatar: "MW",
    rating: 5,
  },
  {
    name: "Aisha Patel",
    role: "Engineering Manager",
    text: "The chapter on communication frameworks alone is worth three times the price.",
    avatar: "AP",
    rating: 5,
  },
];

const PLANS = [
  {
    name: "Free",
    price: "$0",
    period: "Forever free",
    highlight: false,
    badge: null,
    features: ["1 Free Chapter (PDF)", "Email Newsletter", "Community Access"],
    cta: "Download Free",
    variant: "outline" as const,
  },
  {
    name: "eBook",
    price: "$49",
    period: "One-time purchase",
    highlight: true,
    badge: "Most Popular",
    features: [
      "Full eBook (ePub + PDF)",
      "Audio Book",
      "Lifetime Updates",
      "Private Community",
    ],
    cta: "Buy eBook",
    variant: "default" as const,
  },
  {
    name: "Full Edition",
    price: "$79",
    period: "One-time purchase",
    highlight: false,
    badge: null,
    features: [
      "Everything in eBook",
      "Hardcover Copy",
      "Signed by Author",
      "Priority Support",
    ],
    cta: "Buy Full Edition",
    variant: "outline" as const,
  },
];

// ─── Shared sub-components ────────────────────────────────────────────────────

function Stars(props: { count: number }) {
  return (
    <div class="flex gap-0.5 text-amber-400">
      <For each={Array(props.count).fill(0)}>{() => <span>★</span>}</For>
    </div>
  );
}

function SectionLabel(props: { children: string }) {
  return (
    <span class="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-amber-400 mb-3">
      {props.children}
    </span>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function BookLanding() {
  const [formSent, setFormSent] = createSignal(false);
  const [contactName, setContactName] = createSignal("");
  const [contactEmail, setContactEmail] = createSignal("");
  const [contactMsg, setContactMsg] = createSignal("");
  const [freeChapterOpen, setFreeChapterOpen] = createSignal(false);
  const [subscribeEmail, setSubscribeEmail] = createSignal("");
  const [subscribed, setSubscribed] = createSignal(false);

  function handleContactSubmit(e: Event) {
    e.preventDefault();
    setFormSent(true);
  }

  function handleSubscribe(e: Event) {
    e.preventDefault();
    setSubscribed(true);
  }

  return (
    <div class="bg-[#0b0c10] text-slate-100 font-sans min-h-screen antialiased">
      {/* ── Global Styles ──────────────────────────────────────────────────── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --gold: #f59e0b;
          --gold-dim: #92400e;
          --surface: #13151c;
          --surface2: #1c1f2a;
          --border: rgba(255,255,255,0.07);
          --radius: 0.75rem;
        }

        * { box-sizing: border-box; }
        html { scroll-behavior: smooth; }

        body, #root {
          font-family: 'DM Sans', sans-serif;
          background: #0b0c10;
        }

        h1, h2, h3, h4 {
          font-family: 'Playfair Display', Georgia, serif;
        }

        .book-card {
          background: var(--surface);
          border: 1px solid var(--border);
          border-radius: var(--radius);
          transition: border-color 0.2s, transform 0.2s;
        }
        .book-card:hover {
          border-color: rgba(245,158,11,0.35);
          transform: translateY(-2px);
        }

        .gradient-text {
          background: linear-gradient(135deg, #f59e0b 0%, #fde68a 50%, #f59e0b 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hero-glow {
          background: radial-gradient(ellipse 60% 50% at 50% 0%, rgba(245,158,11,0.15) 0%, transparent 70%);
        }

        .chapter-row {
          border-bottom: 1px solid var(--border);
          transition: background 0.15s;
        }
        .chapter-row:hover {
          background: rgba(245,158,11,0.05);
        }

        .nav-link {
          color: #94a3b8;
          transition: color 0.15s;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .nav-link:hover { color: #f59e0b; }

        input, textarea {
          background: var(--surface2) !important;
          border: 1px solid var(--border) !important;
          color: #f1f5f9 !important;
          border-radius: 0.5rem !important;
          padding: 0.625rem 0.875rem !important;
          width: 100%;
          outline: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 0.9rem;
          transition: border-color 0.15s;
        }
        input:focus, textarea:focus {
          border-color: rgba(245,158,11,0.5) !important;
        }
        input::placeholder, textarea::placeholder {
          color: #475569;
        }

        .plan-highlight {
          background: linear-gradient(160deg, #1c1a10 0%, #1c1f2a 100%);
          border-color: rgba(245,158,11,0.5) !important;
        }

        .avatar-chip {
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          background: var(--gold-dim);
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: 700;
          font-size: 0.75rem;
          color: #fde68a;
          flex-shrink: 0;
        }
      `}</style>


      {/* ── Hero ───────────────────────────────────────────────────────────── */}
      <section class="hero-glow relative overflow-hidden pt-24 pb-28 px-6">
        <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <Badge class="mb-6 bg-amber-500/15 text-amber-400 border-amber-500/30 text-xs tracking-widest uppercase">
              50% Early-Bird Discount
            </Badge>
            <h1 class="text-5xl md:text-6xl leading-tight mb-6">
              Solve your daily life
              <br />
              <span class="gradient-text italic">problem in 1 minute</span>
            </h1>
            <p class="text-slate-400 text-lg mb-8 max-w-md leading-relaxed">
              A practical, beautifully written guide for professionals who want to think
              clearer, move faster, and build habits that last.
            </p>
            <ul class="space-y-2 mb-10">
              {[
                "Learn from real experts",
                "16 comprehensive chapters",
                "iBooks, PDF & ePub formats",
                "Audio book included",
              ].map((item) => (
                <li class="flex items-center gap-3 text-slate-300 text-sm">
                  <span class="text-amber-400">✓</span> {item}
                </li>
              ))}
            </ul>
            <div class="flex flex-wrap gap-3">
              <Button
                size="lg"
                class="bg-amber-500 hover:bg-amber-400 text-black font-bold px-8"
                onClick={() => scrollTo("#pricing")}
              >
                Get the Book — $49
              </Button>

              {/* Free chapter modal */}
              <Dialog open={freeChapterOpen()} onOpenChange={setFreeChapterOpen}>
                <DialogTrigger
                  as={Button}
                  variant="outline"
                  size="lg"
                  class="border-white/15 text-slate-300 hover:text-white hover:border-amber-400/40"
                >
                  Free Chapter →
                </DialogTrigger>
                <DialogContent class="bg-[#13151c] border border-white/10 text-slate-100 max-w-md">
                  <DialogHeader>
                    <DialogTitle
                      class="text-xl"
                      style="font-family:'Playfair Display',serif"
                    >
                      Get a Free Chapter
                    </DialogTitle>
                    <DialogDescription class="text-slate-400">
                      Enter your email and we'll send Chapter 1 instantly — no strings attached.
                    </DialogDescription>
                  </DialogHeader>
                  <Show
                    when={!subscribed()}
                    fallback={
                      <p class="text-amber-400 py-4 text-center font-medium">
                        ✓ Check your inbox — it's on its way!
                      </p>
                    }
                  >
                    <form onSubmit={handleSubscribe} class="space-y-4 py-2">
                      <input
                        type="email"
                        placeholder="you@example.com"
                        required
                        value={subscribeEmail()}
                        onInput={(e) => setSubscribeEmail(e.currentTarget.value)}
                      />
                      <DialogFooter>
                        <Button
                          type="submit"
                          class="w-full bg-amber-500 hover:bg-amber-400 text-black font-bold"
                        >
                          Send My Free Chapter
                        </Button>
                      </DialogFooter>
                    </form>
                  </Show>
                </DialogContent>
              </Dialog>
            </div>
          </div>

          {/* Book mockup */}
          <div class="flex justify-center">
            <div class="relative">
              <div
                class="w-56 h-72 md:w-64 md:h-80 rounded-xl shadow-2xl"
                style="background:linear-gradient(135deg,#92400e 0%,#f59e0b 40%,#fde68a 60%,#d97706 100%); display:flex; align-items:center; justify-content:center; font-family:'Playfair Display',serif; flex-direction:column; gap:0.5rem;"
              >
                <span style="font-size:4rem;">📚</span>
                <span
                  style="font-size:1.25rem; font-weight:700; color:#0b0c10; text-align:center; padding:0 1rem; line-height:1.3"
                >
                  Solve in 1 Minute
                </span>
                <span style="font-size:0.75rem; color:#0b0c10; opacity:0.7;">
                  By Michale John
                </span>
              </div>
              <div
                class="absolute -bottom-4 -right-4 w-full h-full rounded-xl opacity-30"
                style="background:linear-gradient(135deg,#92400e,#f59e0b); z-index:-1; transform:rotate(3deg);"
              />
              <div
                class="absolute -bottom-8 -right-8 w-full h-full rounded-xl opacity-15"
                style="background:linear-gradient(135deg,#92400e,#f59e0b); z-index:-2; transform:rotate(6deg);"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── About / Features ───────────────────────────────────────────────── */}
      <section id="about" class="py-24 px-6 bg-[#0e0f14]">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <SectionLabel>About The Book</SectionLabel>
            <h2 class="text-4xl md:text-5xl mb-4">
              Everything you need,
              <br />
              <span class="gradient-text">right in your hands</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto leading-relaxed">
              Beautifully crafted for entrepreneurs, managers, and students who want to
              turn ideas into meaningful action every single day.
            </p>
          </div>
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <For each={FEATURES}>
              {(f) => (
                <Card class="book-card bg-[#13151c] border-white/7">
                  <CardHeader>
                    <div class="text-3xl mb-3">{f.icon}</div>
                    <CardTitle
                      class="text-white text-lg"
                      style="font-family:'Playfair Display',serif"
                    >
                      {f.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                  </CardContent>
                </Card>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* ── Chapters ───────────────────────────────────────────────────────── */}
      <section id="chapters" class="py-24 px-6">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <SectionLabel>Table of Contents</SectionLabel>
            <h2 class="text-4xl md:text-5xl mb-4">
              Chapters <span class="gradient-text italic">we've covered</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto">
              Nine deeply researched chapters, each packed with practical frameworks you
              can apply the same day.
            </p>
          </div>
          <div class="book-card overflow-hidden">
            <For each={CHAPTERS}>
              {(ch) => (
                <div class="chapter-row flex items-center gap-6 px-7 py-5 last:border-b-0">
                  <span class="text-amber-400 font-mono text-sm font-bold shrink-0">
                    {ch.num}
                  </span>
                  <span class="flex-1 text-slate-200 font-medium">{ch.title}</span>
                  <span class="text-slate-500 text-sm">{ch.pages} pages</span>
                  <span class="text-slate-600 text-sm">→</span>
                </div>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* ── Subscribe banner ───────────────────────────────────────────────── */}
      <section class="py-16 px-6 bg-[#0e0f14]">
        <div class="max-w-2xl mx-auto text-center">
          <SectionLabel>Free Preview</SectionLabel>
          <h2 class="text-3xl md:text-4xl mb-4">Get a free chapter of this book</h2>
          <p class="text-slate-400 mb-8 text-sm">
            Subscribe now — ePub, PDF & iBooks versions included with every download.
          </p>
          <Show
            when={!subscribed()}
            fallback={
              <p class="text-amber-400 font-semibold text-lg">
                ✓ Your free chapter is on its way!
              </p>
            }
          >
            <form onSubmit={handleSubscribe} class="flex gap-3 max-w-sm mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                required
                value={subscribeEmail()}
                onInput={(e) => setSubscribeEmail(e.currentTarget.value)}
                style="flex:1;"
              />
              <Button
                type="submit"
                class="bg-amber-500 hover:bg-amber-400 text-black font-bold shrink-0"
              >
                Subscribe
              </Button>
            </form>
          </Show>
        </div>
      </section>

      {/* ── Testimonials ───────────────────────────────────────────────────── */}
      <section id="reviews" class="py-24 px-6">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <SectionLabel>Reviews</SectionLabel>
            <h2 class="text-4xl md:text-5xl mb-4">
              From <span class="gradient-text italic">happy readers</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto">
              Thousands of professionals have used this book to change how they work and
              think.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6">
            <For each={TESTIMONIALS}>
              {(t) => (
                <Card class="book-card bg-[#13151c]">
                  <CardHeader>
                    <Stars count={t.rating} />
                    <CardTitle
                      class="text-white text-base font-semibold mt-3"
                      style="font-family:'Playfair Display',serif"
                    >
                      Very Effective!
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p class="text-slate-400 text-sm leading-relaxed italic">
                      "{t.text}"
                    </p>
                  </CardContent>
                  <CardFooter>
                    <div class="flex items-center gap-3">
                      <div class="avatar-chip">{t.avatar}</div>
                      <div>
                        <p class="text-white text-sm font-semibold">{t.name}</p>
                        <p class="text-slate-500 text-xs">{t.role}</p>
                      </div>
                    </div>
                  </CardFooter>
                </Card>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* ── Author ─────────────────────────────────────────────────────────── */}
      <section id="author" class="py-24 px-6 bg-[#0e0f14]">
        <div class="max-w-5xl mx-auto">
          <div class="book-card bg-[#13151c] grid md:grid-cols-2 overflow-hidden rounded-2xl">
            {/* Illustration */}
            <div
              class="relative min-h-64 md:min-h-auto"
              style="background:linear-gradient(135deg,#1c1a10 0%,#2a1f05 100%); display:flex; align-items:center; justify-content:center;"
            >
              <div style="font-size:8rem; opacity:0.6;">🧑‍💼</div>
              <div
                class="absolute inset-0"
                style="background:linear-gradient(to right, transparent 60%, #13151c);"
              />
            </div>

            <div class="p-10 flex flex-col justify-center">
              <SectionLabel>Meet the Author</SectionLabel>
              <h2 class="text-3xl mb-2" style="font-family:'Playfair Display',serif">
                Michale John
              </h2>
              <p class="text-amber-400 text-sm mb-6">Bestselling Author & Educator</p>
              <p class="text-slate-400 text-sm leading-relaxed mb-6">
                Michale has spent 15 years helping professionals unlock their potential
                through structured thinking and intentional habit design. His books have
                been translated into 12 languages and read by over 2 million people
                worldwide.
              </p>
              <ul class="space-y-2 mb-8">
                {[
                  "10+ international awards",
                  "Passionate about practical writing",
                  "Most popular author of 2024",
                ].map((item) => (
                  <li class="flex items-center gap-3 text-slate-300 text-sm">
                    <span class="text-amber-400">✦</span> {item}
                  </li>
                ))}
              </ul>
              <div class="flex gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  class="border-white/15 text-slate-300 hover:border-amber-400/40"
                >
                  Twitter
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  class="border-white/15 text-slate-300 hover:border-amber-400/40"
                >
                  LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pricing ────────────────────────────────────────────────────────── */}
      <section id="pricing" class="py-24 px-6">
        <div class="max-w-5xl mx-auto">
          <div class="text-center mb-16">
            <SectionLabel>Pricing & Plans</SectionLabel>
            <h2 class="text-4xl md:text-5xl mb-4">
              Choose your <span class="gradient-text italic">edition</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto">
              Every edition is a one-time purchase — no subscriptions, no hidden fees.
            </p>
          </div>
          <div class="grid md:grid-cols-3 gap-6 items-stretch">
            <For each={PLANS}>
              {(plan) => (
                <Card
                  class={`book-card flex flex-col ${plan.highlight
                    ? "plan-highlight border-amber-500/40 scale-[1.02]"
                    : "bg-[#13151c]"
                    }`}
                >
                  <CardHeader class="pb-2">
                    <Show when={plan.badge}>
                      <Badge class="w-fit mb-3 bg-amber-500/20 text-amber-400 border-amber-500/30 text-xs">
                        {plan.badge}
                      </Badge>
                    </Show>
                    <CardDescription class="text-slate-400 text-sm">
                      {plan.name}
                    </CardDescription>
                    <CardTitle
                      class="text-4xl text-white"
                      style="font-family:'Playfair Display',serif"
                    >
                      {plan.price}
                    </CardTitle>
                    <p class="text-slate-500 text-xs">{plan.period}</p>
                  </CardHeader>
                  <CardContent class="flex-1 pt-4">
                    <Separator class="bg-white/7 mb-5" />
                    <ul class="space-y-3">
                      <For each={plan.features}>
                        {(feat) => (
                          <li class="flex items-center gap-3 text-slate-300 text-sm">
                            <span class="text-amber-400 text-xs">✓</span>
                            {feat}
                          </li>
                        )}
                      </For>
                    </ul>
                  </CardContent>
                  <CardFooter class="pt-6">
                    <Button
                      variant={plan.variant}
                      class={`w-full font-semibold ${plan.highlight
                        ? "bg-amber-500 hover:bg-amber-400 text-black border-0"
                        : "border-white/15 text-slate-300 hover:border-amber-400/40"
                        }`}
                    >
                      {plan.cta}
                    </Button>
                  </CardFooter>
                </Card>
              )}
            </For>
          </div>
        </div>
      </section>

      {/* ── Contact ────────────────────────────────────────────────────────── */}
      <section id="contact" class="py-24 px-6 bg-[#0e0f14]">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <SectionLabel>Get in Touch</SectionLabel>
            <h2 class="text-4xl md:text-5xl mb-4">
              Contact the <span class="gradient-text italic">Author</span>
            </h2>
            <p class="text-slate-400 max-w-xl mx-auto">
              Questions about the book, bulk orders, or speaking engagements? Michale
              personally reads every message.
            </p>
          </div>
          <div class="book-card bg-[#13151c] p-10">
            <Show
              when={!formSent()}
              fallback={
                <div class="text-center py-10">
                  <div class="text-5xl mb-4">✉️</div>
                  <h3
                    class="text-2xl mb-2"
                    style="font-family:'Playfair Display',serif"
                  >
                    Message Sent!
                  </h3>
                  <p class="text-slate-400">
                    Thanks — you'll hear back within 48 hours.
                  </p>
                </div>
              }
            >
              <form
                onSubmit={handleContactSubmit}
                class="grid md:grid-cols-2 gap-6"
              >
                <div class="flex flex-col gap-2">
                  <label class="text-xs text-slate-400 uppercase tracking-wider">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    required
                    value={contactName()}
                    onInput={(e) => setContactName(e.currentTarget.value)}
                  />
                </div>
                <div class="flex flex-col gap-2">
                  <label class="text-xs text-slate-400 uppercase tracking-wider">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="you@example.com"
                    required
                    value={contactEmail()}
                    onInput={(e) => setContactEmail(e.currentTarget.value)}
                  />
                </div>
                <div class="md:col-span-2 flex flex-col gap-2">
                  <label class="text-xs text-slate-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell Michale what's on your mind…"
                    required
                    value={contactMsg()}
                    onInput={(e) => setContactMsg(e.currentTarget.value)}
                  />
                </div>
                <div class="md:col-span-2 flex justify-end">
                  <Button
                    type="submit"
                    class="bg-amber-500 hover:bg-amber-400 text-black font-bold px-10"
                  >
                    Send Message
                  </Button>
                </div>
              </form>
            </Show>
          </div>
        </div>
      </section>
    </div>
  );
}
