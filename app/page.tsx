"use client";

import { useState } from "react";

const PHONE_DISPLAY = "+1 (289) 971-7935";
const PHONE_HREF = "tel:+12899717935";
const FACEBOOK = "https://www.facebook.com/treelocate88";

const SPECIES = [
  {
    sect: "§ I",
    latin: "Picea pungens",
    common: "Mature Spruce",
    body:
      "Specimen spruce planted at caliper, delivered on the pallet from the Milton yard and set exact. Five-at-a-time or more; a long-haul of five blue spruce an hour or more from the yard is a routine Treelocate run.",
    note: "Delivery over an hour, trees arrive on time.",
  },
  {
    sect: "§ II",
    latin: "Pinus strobus",
    common: "Twelve-Foot Pines",
    body:
      "Large-caliper pines, twelve feet or taller, placed in the corner of a yard where a smaller tree would never close the sight line. The crew backfills and sets each one plumb against the fence or boundary.",
    note: "The crew shows up exactly when they said they would.",
  },
  {
    sect: "§ III",
    latin: "Thuja occidentalis 'Nigra'",
    common: "Black Cedar Hedging",
    body:
      "Fifteen black cedars for a side-yard screen; thirty for a long run. Spaced for closure in two seasons, trenched to depth, mulched the same day. Where the planting line meets the property we can run the cedar fence to match.",
    note: "Even her contractor stopped to compliment the work.",
  },
  {
    sect: "§ IV",
    latin: "Thuja occidentalis",
    common: "Privacy Walls",
    body:
      "Ten-tree privacy walls, or thirty when the lot calls for it. Grown stock from the Milton nursery; evergreen year-round; the crew keeps the exposed roots covered through the drive and the whole run installed in one visit.",
    note: "Exceptional tree quality and outstanding workmanship.",
  },
  {
    sect: "§ V",
    latin: "Multi-species",
    common: "37-Tree Property Plantings",
    body:
      "Full property installs — a mix of specimen trees and screening evergreens, read against the lot survey and the owner's drawing. On time, installed as quoted, site left clean and undisturbed; everything exactly where it was supposed to go.",
    note: "On time, installed as quoted, left the site clean.",
  },
  {
    sect: "§ VI",
    latin: "Cedrus — Fencing",
    common: "Cedar Fence Alongside",
    body:
      "When the cedars go in along a line that also needs a fence, the crew will build the cedar fence in the same visit. Matched stain, trenched posts, lines plumb — one crew, one truck, both halves of the property line done the same week.",
    note: "Skilled, efficient, knowledgeable.",
  },
];

const TESTIMONIALS = [
  {
    name: "Raf S.",
    context: "37-tree property planting",
    quote:
      "Mehdi, Graham and the crew planted 37 trees across our property. On time, installed everything as quoted, and left the site clean and undisturbed. Everything placed exactly where it was supposed to go.",
  },
  {
    name: "Debbie W.",
    context: "15 black cedars + cedar fence",
    quote:
      "The crew installed 15 black cedars for a privacy run and built a cedar fence to match. Skilled, efficient and knowledgeable. Even our contractor stopped to compliment the work.",
  },
  {
    name: "David A.",
    context: "12 ft pines, corner planting",
    quote:
      "We had 12-foot pines installed in the back corner of the yard. The team showed up exactly when they said they would and placed each tree where we had asked.",
  },
  {
    name: "Dylan L.",
    context: "5 spruce, long-distance delivery",
    quote:
      "Bought 5 spruce from Mehdi. Supplied and delivered over an hour away for a good price, the trees look amazing and they arrived on time.",
  },
  {
    name: "Colin S.",
    context: "10-tree privacy wall",
    quote:
      "Hired them to plant 10 trees as a privacy wall. Exceptional tree quality and outstanding workmanship start to finish.",
  },
  {
    name: "Alex F.",
    context: "Repeat client",
    quote:
      "Worked with Mehdi's team on multiple projects now. Consistently excellent, knowledgeable, efficient, and clearly proud of their work.",
  },
  {
    name: "Tejinder C.",
    context: "Tree placement",
    quote:
      "A hardworking and patient team. They made sure the tree was perfectly straight and placed in the exact spot we wanted, and they cleaned up before leaving.",
  },
];

const STEPS = [
  {
    n: "I",
    title: "The Call",
    body:
      "Phone or Facebook message with the property, the lot line you need to screen, and the kind of trees you have in mind. Mehdi answers directly; same-day for a weekday ring.",
  },
  {
    n: "II",
    title: "Nursery Walk",
    body:
      "Where the project warrants it, a visit to the Milton yard to walk the inventory and pick the specific stock. Caliper, height and crown width are chosen against the opening you need to close.",
  },
  {
    n: "III",
    title: "Site Read",
    body:
      "An on-site read of the planting line, grade, utilities and finish grade. Where the delivery vehicle sets up and where each tree goes gets agreed on before the day of install.",
  },
  {
    n: "IV",
    title: "Delivery",
    body:
      "Mature stock delivered on the pallet from Milton — single specimens or a full property load, same-day across the GTA, over an hour out for a long haul.",
  },
  {
    n: "V",
    title: "Planting",
    body:
      "Trenched, backfilled, mulched. Each tree set plumb and placed exactly where it was marked on the walk-through — the standard the review record is built on.",
  },
  {
    n: "VI",
    title: "Clean Site",
    body:
      "Spoil hauled off, pallets removed, surrounds raked. The crew does not leave until the site reads as finished — no exposed roots, no half-done sections.",
  },
];

const FAQ = [
  {
    q: "Where do you deliver and plant?",
    a: "Milton and the surrounding Halton Hills area, across the Greater Toronto Area, and surrounding regions. Long-distance delivery (an hour or more from the Milton yard) is a routine Treelocate run, done at a fair price.",
  },
  {
    q: "What size of trees do you install?",
    a: "The specialty is mature and large-caliper stock — twelve-foot pines, caliper-sized specimen trees, and tall black cedars for privacy. Smaller nursery-grade shrubs, perennials and evergreens are also stocked at the Milton yard.",
  },
  {
    q: "Can you supply the trees as well as plant them?",
    a: "Yes — Treelocate is a full nursery and a planting crew. Trees come from the Milton stock and go in by the same team. You deal with one crew for the supply, delivery and install.",
  },
  {
    q: "Do you build cedar fences alongside the planting?",
    a: "When the project calls for it, yes. The most common pairing is a row of cedars with a matching cedar fence run along the same property line; the crew handles both in the same visit.",
  },
  {
    q: "How long has Treelocate been in business?",
    a: "Over ten years, owner-led by Mehdi. The crew is small, the trees are picked at the yard, and the review record is a decade of repeat clients and named referrals.",
  },
  {
    q: "What does the review record actually look like?",
    a: "64 Google reviews averaging 4.8 stars. Repeat clients, named installs — 37-tree properties, 15-cedar privacy walls, 12-foot pines, 10-tree screens, long-distance spruce deliveries. The reviews read as a running log of specific jobs.",
  },
  {
    q: "How do I get started?",
    a: "Call Mehdi directly at " + PHONE_DISPLAY + " or message the Facebook page. Describe the planting line and the kind of trees you have in mind; a nursery walk or site visit is set from there.",
  },
];

const STATS = [
  { num: "10+", label: "YEARS AT THE YARD" },
  { num: "64", label: "GOOGLE REVIEWS" },
  { num: "4.8", label: "AVERAGE RATING" },
  { num: "GTA", label: "+ LONG-HAUL" },
];

function LeafMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden>
      <path
        d="M24 4 C 14 10, 10 20, 10 28 C 10 38, 18 44, 24 44 C 30 44, 38 38, 38 28 C 38 20, 34 10, 24 4 Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.1"
      />
      <path d="M24 6 L24 44" stroke="currentColor" strokeWidth="0.8" fill="none" />
      <path d="M24 14 Q 18 18, 14 22" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M24 14 Q 30 18, 34 22" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M24 22 Q 18 26, 15 30" stroke="currentColor" strokeWidth="0.6" fill="none" />
      <path d="M24 22 Q 30 26, 33 30" stroke="currentColor" strokeWidth="0.6" fill="none" />
    </svg>
  );
}

export default function Page() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <main className="relative">
      {/* ============ HEADER ============ */}
      <header className="w-full border-b border-[color:var(--color-moss-900)]/15 bg-[color:var(--color-bone-50)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <LeafMark className="w-7 h-7 text-[color:var(--color-moss-900)]" />
            <div className="font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-moss-800)]">
              Treelocate · Milton Nursery
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-7 font-mono text-[11px] tracking-[0.22em] uppercase text-[color:var(--color-moss-800)]">
            <a href="#catalog" className="hover:text-[color:var(--color-copper-600)] transition-colors">Catalog</a>
            <a href="#testimonials" className="hover:text-[color:var(--color-copper-600)] transition-colors">Reviews</a>
            <a href="#process" className="hover:text-[color:var(--color-copper-600)] transition-colors">Process</a>
            <a href="#faq" className="hover:text-[color:var(--color-copper-600)] transition-colors">FAQ</a>
            <a href="#contact" className="hover:text-[color:var(--color-copper-600)] transition-colors">Visit</a>
          </nav>
          <a
            href={PHONE_HREF}
            className="font-mono text-[11px] tracking-[0.22em] uppercase px-4 py-2 border border-[color:var(--color-moss-900)] text-[color:var(--color-moss-900)] hover:bg-[color:var(--color-moss-900)] hover:text-[color:var(--color-bone-50)] transition-colors"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </header>

      {/* ============ HERO — Editorial Split ============ */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden>
          <div
            className="absolute inset-0 opacity-[0.045]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 30%, var(--color-moss-900), transparent 55%), radial-gradient(circle at 80% 70%, var(--color-copper-500), transparent 50%)",
            }}
          />
        </div>
        <div className="relative max-w-[1280px] mx-auto px-5 md:px-10 pt-20 md:pt-28 pb-24 md:pb-36 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-8">
            <div className="font-mono text-[11px] tracking-[0.32em] uppercase text-[color:var(--color-copper-600)] mb-6 rise-in">
              Vol. X · Milton, Ontario · Est. a decade at the yard
            </div>
            <h1 className="font-serif text-[clamp(3rem,8vw,7.2rem)] leading-[0.92] text-[color:var(--color-moss-900)] rise-in">
              Mature trees,<br />
              <span className="italic font-light">planted right.</span>
            </h1>
            <div className="mt-10 max-w-xl text-[1.05rem] leading-[1.7] text-[color:var(--color-moss-800)]">
              A Milton nursery and planting crew. Large-caliper trees, twelve-foot pines, cedar privacy walls, full-property installs. Mehdi, Graham and crew turn up exactly when they said they would, place each tree where you asked, and leave the site clean.
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={PHONE_HREF}
                className="group inline-flex items-center gap-3 px-6 py-4 bg-[color:var(--color-moss-900)] text-[color:var(--color-bone-50)] text-sm tracking-wide hover:bg-[color:var(--color-moss-800)] transition-colors"
              >
                <span className="font-mono text-[11px] tracking-[0.22em] uppercase opacity-70">Ring the yard</span>
                <span className="font-serif text-lg">{PHONE_DISPLAY}</span>
              </a>
              <a
                href={FACEBOOK}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 border border-[color:var(--color-moss-900)]/30 text-[color:var(--color-moss-900)] text-sm hover:border-[color:var(--color-moss-900)] transition-colors font-mono tracking-[0.18em] uppercase text-[11px]"
              >
                Facebook · @treelocate88
              </a>
            </div>
          </div>

          <div className="col-span-12 md:col-span-4 flex flex-col justify-between gap-6">
            <div className="border-l-2 border-[color:var(--color-copper-500)] pl-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-copper-600)] mb-2">
                House Record
              </div>
              <div className="font-serif text-[2.4rem] leading-tight text-[color:var(--color-moss-900)]">
                4.8<span className="text-[color:var(--color-copper-500)]">★</span>
              </div>
              <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-moss-800)] mt-1">
                64 Google reviews
              </div>
            </div>
            <div className="border-l-2 border-[color:var(--color-moss-700)] pl-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-moss-700)] mb-2">
                Tenure
              </div>
              <div className="font-serif text-[2.4rem] leading-tight text-[color:var(--color-moss-900)]">
                10<span className="text-[color:var(--color-copper-500)]">+</span>
              </div>
              <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-moss-800)] mt-1">
                Years at the Milton yard
              </div>
            </div>
            <div className="border-l-2 border-[color:var(--color-moss-700)] pl-5">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-moss-700)] mb-2">
                Named Installs
              </div>
              <div className="font-serif text-[2.4rem] leading-tight text-[color:var(--color-moss-900)]">
                7
              </div>
              <div className="font-mono text-[11px] tracking-wider text-[color:var(--color-moss-800)] mt-1">
                Reviewers quoted below
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="copper-hairline" />
        </div>
      </section>

      {/* ============ STAT STRIP ============ */}
      <section className="bg-[color:var(--color-bone-50)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10">
          {STATS.map((s, i) => (
            <div key={s.label} className={i > 0 ? "md:border-l md:border-[color:var(--color-moss-900)]/15 md:pl-6" : ""}>
              <div className="font-serif text-[2.8rem] leading-none text-[color:var(--color-moss-900)]">{s.num}</div>
              <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-moss-800)] mt-3">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ============ OWNER'S COLUMN — Long-form Story ============ */}
      <section id="about" className="py-28 md:py-36">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 grid grid-cols-12 gap-6 md:gap-16">
          <div className="col-span-12 md:col-span-3">
            <div className="font-mono text-[11px] tracking-[0.26em] uppercase text-[color:var(--color-copper-600)] mb-3">§ A — The Yard</div>
            <div className="font-serif text-[1.9rem] leading-tight text-[color:var(--color-moss-900)]">
              A nursery with a planting crew, both ends under one roof.
            </div>
            <div className="hairline mt-6 w-24" />
            <div className="mt-6 font-mono text-[11px] tracking-wider text-[color:var(--color-moss-800)]">
              Owner-led by Mehdi.<br />Crew includes Graham.
            </div>
          </div>
          <div className="col-span-12 md:col-span-7 md:col-start-5">
            <div className="drop-cap text-[1.07rem] leading-[1.8] text-[color:var(--color-ink-900)]">
              Treelocate is a Milton tree nursery that also delivers and plants what it grows. The yard carries shrubs, perennials, trees and evergreens — but the work the review record is built on is mature, large-caliper stock: twelve-foot pines dropped into the corner of a yard, fifteen black cedars run along a side lot, ten-tree privacy walls, thirty-seven-tree property installs. Where another landscape crew would quote the planting against a wholesaler's catalogue, Mehdi quotes against the actual trees standing in the Milton yard — a specimen gets picked, loaded, and set at the property the same day. The customer sees exactly what they are getting before the pallet leaves.
            </div>
            <div className="mt-8 text-[1.02rem] leading-[1.75] text-[color:var(--color-moss-800)]">
              Reviewers come back to the same three things: the crew turns up exactly when they said they would, each tree goes in where it was asked for, and the site is clean when they leave. Several of the reviewers are repeat clients. The decade-long record is built on jobs that were small enough to still be delivered by a crew that knows every tree it is pulling from the yard.
            </div>
            <div className="mt-10 pl-6 border-l-2 border-[color:var(--color-copper-500)]">
              <div className="font-serif italic text-[1.4rem] leading-snug text-[color:var(--color-moss-900)]">
                &ldquo;Supplied and delivered over an hour away for a good price. The trees look amazing and they arrived on time.&rdquo;
              </div>
              <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-moss-800)] mt-4">
                Dylan L. · 5 Spruce, long-haul delivery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ CATALOG — Editorial Service Articles ============ */}
      <section id="catalog" className="bg-[color:var(--color-moss-900)] text-[color:var(--color-bone-100)]">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-28 md:py-36">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
            <div className="col-span-12 md:col-span-4">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-5">§ B — Nursery Catalog</div>
              <h2 className="font-serif text-[clamp(2.6rem,5vw,4.6rem)] leading-[0.95] text-[color:var(--color-bone-50)]">
                What<br /><em className="font-light">goes in</em>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-6 md:col-start-7 self-end">
              <div className="text-[1rem] leading-[1.7] text-[color:var(--color-bone-200)]">
                Six categories of stock that make up the bulk of what the crew installs. Everything comes from the Milton yard; everything is picked against the property and the opening before it leaves the pallet.
              </div>
            </div>
          </div>

          <div className="divide-y divide-[color:var(--color-moss-700)]">
            {SPECIES.map((s) => (
              <article key={s.sect} className="grid grid-cols-12 gap-6 md:gap-10 py-12 md:py-16">
                <div className="col-span-12 md:col-span-2">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)]">
                    {s.sect}
                  </div>
                  <div className="font-serif italic text-[1.3rem] text-[color:var(--color-bone-200)] mt-3">
                    {s.latin}
                  </div>
                </div>
                <div className="col-span-12 md:col-span-4">
                  <h3 className="font-serif text-[2rem] md:text-[2.4rem] leading-[1.05] text-[color:var(--color-bone-50)]">
                    {s.common}
                  </h3>
                </div>
                <div className="col-span-12 md:col-span-5 md:col-start-8">
                  <p className="text-[1.02rem] leading-[1.75] text-[color:var(--color-bone-200)]">{s.body}</p>
                  <div className="mt-6 pl-4 border-l border-[color:var(--color-copper-500)]/60">
                    <div className="font-serif italic text-[0.98rem] text-[color:var(--color-bone-100)]">
                      &ldquo;{s.note}&rdquo;
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS — Named Cards (7) ============ */}
      <section id="testimonials" className="py-28 md:py-36">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-16">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-copper-600)] mb-4">§ C — Named Clients</div>
              <h2 className="font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95] text-[color:var(--color-moss-900)]">
                Seven<br /><em className="font-light">named jobs</em>.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <div className="text-[1rem] leading-[1.7] text-[color:var(--color-moss-800)]">
                Verbatim-paraphrased from the Google review record. Each one is a specific property, a specific tree count, a specific placement. The number of trees reads as the register of the business.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-5 md:gap-6">
            {/* First card promoted to 2-wide */}
            <article className="md:col-span-6 md:row-span-1 bg-[color:var(--color-moss-900)] text-[color:var(--color-bone-50)] p-10 md:p-14 border border-[color:var(--color-moss-900)]">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12 md:col-span-4">
                  <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)]">
                    No. 01 · {TESTIMONIALS[0].context}
                  </div>
                  <div className="font-serif text-[1.6rem] mt-4 text-[color:var(--color-bone-50)]">{TESTIMONIALS[0].name}</div>
                  <div className="mt-6 text-[color:var(--color-copper-500)] text-sm tracking-widest">★★★★★</div>
                </div>
                <div className="col-span-12 md:col-span-8">
                  <blockquote className="font-serif italic text-[1.5rem] md:text-[1.75rem] leading-[1.3] text-[color:var(--color-bone-100)]">
                    &ldquo;{TESTIMONIALS[0].quote}&rdquo;
                  </blockquote>
                </div>
              </div>
            </article>

            {TESTIMONIALS.slice(1).map((t, i) => (
              <article
                key={t.name}
                className={`${i % 3 === 1 ? "md:col-span-3" : "md:col-span-2"} bg-[color:var(--color-bone-50)] border border-[color:var(--color-moss-900)]/15 p-7 md:p-8 flex flex-col`}
              >
                <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-[color:var(--color-copper-600)]">
                  No. 0{i + 2} · {t.context}
                </div>
                <blockquote className="font-serif text-[1.05rem] leading-[1.55] text-[color:var(--color-moss-900)] mt-5 flex-1">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="mt-6 pt-5 border-t border-[color:var(--color-moss-900)]/15 flex items-center justify-between">
                  <div className="font-serif text-[1.05rem] text-[color:var(--color-moss-900)]">{t.name}</div>
                  <div className="text-[color:var(--color-copper-500)] text-xs tracking-widest">★★★★★</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STANDARDS — Full-bleed moss ============ */}
      <section className="bg-[color:var(--color-moss-800)] text-[color:var(--color-bone-100)] py-28 md:py-40">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-10">§ D — The House Standard</div>
          <div className="grid grid-cols-12 gap-6 md:gap-16">
            <div className="col-span-12 md:col-span-7">
              <h2 className="font-serif text-[clamp(2.6rem,5.4vw,5rem)] leading-[1.02] text-[color:var(--color-bone-50)]">
                <span className="italic font-light">On time.</span><br />
                Exact spot.<br />
                <span className="italic font-light">Site left clean.</span>
              </h2>
              <div className="hairline mt-10 w-32" style={{ background: "var(--color-copper-500)", opacity: 0.55 }} />
            </div>
            <div className="col-span-12 md:col-span-5 self-end">
              <p className="text-[1.07rem] leading-[1.8] text-[color:var(--color-bone-200)]">
                The three things the reviewers come back to, year after year, review after review. It is the same standard whether the job is five spruce or thirty-seven trees. Mehdi and the crew do not consider a job finished until all three are true.
              </p>
              <p className="mt-6 text-[0.98rem] leading-[1.75] text-[color:var(--color-bone-300)]">
                It is why repeat clients are a routine part of the book — and why Treelocate quotes against the actual tree in the Milton yard, not against a wholesaler's PDF.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROCESS — Numbered 6 steps ============ */}
      <section id="process" className="py-28 md:py-36">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-20">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-copper-600)] mb-4">§ E — How the Job Runs</div>
              <h2 className="font-serif text-[clamp(2.4rem,4.6vw,4.2rem)] leading-[0.95] text-[color:var(--color-moss-900)]">
                Six steps,<br /><em className="font-light">yard to planting.</em>
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 md:col-start-8 self-end">
              <div className="text-[1rem] leading-[1.7] text-[color:var(--color-moss-800)]">
                From the first phone call to the raked spoil pile. No surprises on the day of install because the walk-through happens first.
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {STEPS.map((s, idx) => (
              <article
                key={s.n}
                className={`relative p-8 border border-[color:var(--color-moss-900)]/15 ${
                  idx === 2
                    ? "bg-[color:var(--color-moss-900)] text-[color:var(--color-bone-50)] border-[color:var(--color-moss-900)]"
                    : "bg-[color:var(--color-bone-50)]"
                }`}
              >
                <div
                  className={`font-serif text-[4.5rem] leading-none ${
                    idx === 2 ? "text-[color:var(--color-brass-400)]" : "text-[color:var(--color-copper-500)]"
                  }`}
                >
                  {s.n}
                </div>
                <div className={`copper-hairline w-20 mt-4 ${idx === 2 ? "opacity-70" : ""}`} />
                <h3
                  className={`font-serif text-[1.6rem] mt-6 ${
                    idx === 2 ? "text-[color:var(--color-bone-50)]" : "text-[color:var(--color-moss-900)]"
                  }`}
                >
                  {s.title}
                </h3>
                <p
                  className={`mt-4 text-[0.98rem] leading-[1.65] ${
                    idx === 2 ? "text-[color:var(--color-bone-200)]" : "text-[color:var(--color-moss-800)]"
                  }`}
                >
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FAQ — Accordion ============ */}
      <section id="faq" className="bg-[color:var(--color-bone-200)]/50 py-28 md:py-36">
        <div className="max-w-[1100px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-10 mb-14">
            <div className="col-span-12 md:col-span-5">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-copper-600)] mb-4">§ F — Field Guide</div>
              <h2 className="font-serif text-[clamp(2.4rem,4.6vw,4rem)] leading-[0.95] text-[color:var(--color-moss-900)]">
                Seven<br /><em className="font-light">asked questions.</em>
              </h2>
            </div>
          </div>

          <div className="border-t border-[color:var(--color-moss-900)]/15">
            {FAQ.map((f, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className="border-b border-[color:var(--color-moss-900)]/15">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full py-7 flex items-start gap-6 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-copper-600)] pt-2 w-14 shrink-0">
                      Q.0{i + 1}
                    </span>
                    <span className="font-serif text-[1.3rem] md:text-[1.5rem] leading-tight text-[color:var(--color-moss-900)] flex-1">
                      {f.q}
                    </span>
                    <span
                      className={`font-serif text-[1.8rem] text-[color:var(--color-copper-500)] shrink-0 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                      aria-hidden
                    >
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-8 pl-20 pr-8 text-[1.02rem] leading-[1.75] text-[color:var(--color-moss-800)]">
                      {f.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============ CONTACT — Split ============ */}
      <section id="contact" className="bg-[color:var(--color-moss-900)] text-[color:var(--color-bone-100)] py-28 md:py-36">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10">
          <div className="grid grid-cols-12 gap-6 md:gap-16">
            <div className="col-span-12 md:col-span-7">
              <div className="font-mono text-[11px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-6">§ G — Ring the Yard</div>
              <h2 className="font-serif text-[clamp(2.8rem,6vw,5.4rem)] leading-[0.98] text-[color:var(--color-bone-50)]">
                Call Mehdi.<br />
                <em className="font-light">The trees are picked at the yard.</em>
              </h2>
              <a href={PHONE_HREF} className="inline-block mt-12 group">
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-3">Primary line</div>
                <div className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-none text-[color:var(--color-bone-50)] group-hover:text-[color:var(--color-copper-500)] transition-colors">
                  {PHONE_DISPLAY}
                </div>
              </a>
              <div className="mt-6">
                <a
                  href={FACEBOOK}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 px-5 py-3 border border-[color:var(--color-bone-200)]/30 font-mono text-[11px] tracking-[0.26em] uppercase hover:border-[color:var(--color-copper-500)] transition-colors"
                >
                  Facebook · @treelocate88
                </a>
              </div>
            </div>

            <div className="col-span-12 md:col-span-4 md:col-start-9 space-y-8">
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-2">Yard</div>
                <div className="font-serif text-[1.3rem] text-[color:var(--color-bone-50)] leading-tight">
                  Milton, Ontario<br />
                  <span className="text-[color:var(--color-bone-200)] text-[0.98rem]">Halton Hills · Hornby · GTA</span>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-2">Hours</div>
                <div className="font-serif text-[1.1rem] text-[color:var(--color-bone-100)] leading-relaxed">
                  Opens 8 a.m. daily<br />
                  <span className="text-[color:var(--color-bone-200)] text-[0.95rem]">(call ahead for yard visits)</span>
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-2">Service Area</div>
                <div className="text-[color:var(--color-bone-200)] text-[0.98rem] leading-relaxed">
                  Milton, Halton Hills, Greater Toronto Area and surrounding regions. Long-distance delivery routine — an hour out from the yard is a standard run.
                </div>
              </div>
              <div>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-[color:var(--color-brass-400)] mb-2">Record</div>
                <div className="text-[color:var(--color-bone-200)] text-[0.98rem] leading-relaxed">
                  Over 10 years at the yard · 64 Google reviews · 4.8 average · 7 named installs quoted above.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ FOOTER ============ */}
      <footer className="bg-[color:var(--color-bone-50)] border-t border-[color:var(--color-moss-900)]/15">
        <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-14 grid grid-cols-12 gap-6 md:gap-10">
          <div className="col-span-12 md:col-span-5 flex items-start gap-4">
            <LeafMark className="w-10 h-10 text-[color:var(--color-moss-900)] mt-1" />
            <div>
              <div className="font-serif text-[1.4rem] text-[color:var(--color-moss-900)]">Treelocate</div>
              <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-moss-800)] mt-2">
                Milton Nursery · Est. a decade at the yard
              </div>
            </div>
          </div>
          <div className="col-span-6 md:col-span-3">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-copper-600)] mb-4">Contact</div>
            <div className="font-serif text-[1.1rem] text-[color:var(--color-moss-900)]">{PHONE_DISPLAY}</div>
            <a
              href={FACEBOOK}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-[11px] tracking-[0.2em] uppercase text-[color:var(--color-moss-800)] hover:text-[color:var(--color-copper-600)] block mt-2"
            >
              @treelocate88
            </a>
          </div>
          <div className="col-span-6 md:col-span-2">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-copper-600)] mb-4">Yard</div>
            <div className="font-serif text-[1rem] text-[color:var(--color-moss-900)] leading-tight">
              Milton, ON<br />
              <span className="text-[color:var(--color-moss-800)] text-sm">Halton Hills · GTA</span>
            </div>
          </div>
          <div className="col-span-12 md:col-span-2 md:text-right">
            <div className="font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-copper-600)] mb-4">Record</div>
            <div className="font-serif text-[1.4rem] text-[color:var(--color-moss-900)]">
              4.8<span className="text-[color:var(--color-copper-500)]">★</span> <span className="text-[0.95rem] text-[color:var(--color-moss-800)]">/ 64</span>
            </div>
          </div>
        </div>
        <div className="border-t border-[color:var(--color-moss-900)]/15">
          <div className="max-w-[1280px] mx-auto px-5 md:px-10 py-5 flex items-center justify-between font-mono text-[10px] tracking-[0.26em] uppercase text-[color:var(--color-moss-800)]">
            <div>Treelocate Nursery · All rights reserved</div>
            <div>Mehdi · Graham · and crew</div>
          </div>
        </div>
      </footer>

      {/* ============ JSON-LD ============ */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Treelocate Nursery and Landscape Services",
            description:
              "Milton, Ontario tree nursery and planting crew. Mature trees, large-caliper installs, cedar privacy walls, long-distance delivery across the GTA.",
            telephone: PHONE_DISPLAY,
            address: {
              "@type": "PostalAddress",
              addressLocality: "Milton",
              addressRegion: "ON",
              addressCountry: "CA",
            },
            areaServed: ["Milton", "Halton Hills", "Greater Toronto Area"],
            aggregateRating: {
              "@type": "AggregateRating",
              ratingValue: "4.8",
              reviewCount: "64",
            },
            sameAs: [FACEBOOK],
          }),
        }}
      />
    </main>
  );
}
