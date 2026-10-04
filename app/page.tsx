import type { CSSProperties } from "react";
import Image from "next/image";
import { asset, site } from "@/lib/site";

const delay = (ms: number): CSSProperties => ({ animationDelay: `${ms}ms` });

const pillars = [
  { title: "Technology", body: "Engineering that holds up when things get hard." },
  { title: "Design", body: "Interfaces that make the complex feel simple." },
  { title: "Creativity", body: "Fresh angles on problems others walk away from." },
];

export default function Home() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden">
      {/* Background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="grid-bg absolute inset-0" />
        <div className="orb left-[-10%] top-[-10%] h-[45vmax] w-[45vmax] bg-deep-violet" />
        <div
          className="orb bottom-[-20%] right-[-15%] h-[40vmax] w-[40vmax] bg-coral opacity-20"
          style={{ animationDelay: "-9s" }}
        />
      </div>

      <header className="reveal mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
        <Image
          src={asset("/brand/mn-logo.png")}
          alt={site.name}
          width={371}
          height={92}
          priority
          className="h-8 w-auto sm:h-9"
        />
        <nav className="flex items-center gap-3">
          <span className="hidden rounded-full border border-soft-violet/20 px-3 py-1 text-xs text-soft-violet/80 sm:inline">
            Coming soon
          </span>
          <a
            href={site.developersUrl}
            className="group inline-flex items-center gap-1.5 rounded-full border border-deep-violet/50 bg-deep-violet/15 px-4 py-1.5 text-sm text-cloud transition-colors hover:border-deep-violet hover:bg-deep-violet/30"
          >
            Developers
            <span
              aria-hidden
              className="transition-transform group-hover:translate-x-0.5"
            >
              →
            </span>
          </a>
        </nav>
      </header>

      <main className="mx-auto flex w-full max-w-6xl flex-1 flex-col items-center justify-center px-6 pb-16 pt-6 text-center">
        <div className="relative mb-10 w-40 sm:w-52">
          <div className="nut-glow" aria-hidden />
          <div className="nut">
            <Image
              src={asset("/brand/mn-icon-transparent.png")}
              alt=""
              width={347}
              height={320}
              priority
              className="nut-half nut-top"
            />
            <Image
              src={asset("/brand/mn-icon-transparent.png")}
              alt=""
              width={347}
              height={320}
              priority
              className="nut-half nut-bottom"
            />
          </div>
        </div>

        <p
          className="reveal mb-6 inline-flex items-center gap-2.5 rounded-full border border-coral/30 bg-coral/10 px-4 py-1.5 text-sm text-coral"
          style={delay(500)}
        >
          <span className="ping-dot relative h-2 w-2 rounded-full bg-coral" />
          We&apos;re working on something new
        </p>

        <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
          <span className="reveal inline-block" style={delay(650)}>
            We&nbsp;
          </span>
          <span className="reveal inline-block text-coral" style={delay(780)}>
            crack&nbsp;
          </span>
          <br className="sm:hidden" />
          <span className="reveal inline-block text-gradient" style={delay(910)}>
            complex problems
          </span>
        </h1>

        <p
          className="reveal mt-6 max-w-2xl text-base leading-relaxed text-cloud/70 sm:text-lg"
          style={delay(1100)}
        >
          {site.description}
        </p>

        <div className="reveal mt-10 w-full max-w-xs" style={delay(1250)}>
          <div className="progress-bar h-1 w-full rounded-full bg-soft-violet/15" />
          <p className="mt-3 text-xs uppercase tracking-[0.2em] text-soft-violet/60">
            Site under construction
          </p>
        </div>
      </main>

      <section className="mx-auto w-full max-w-6xl px-6 pb-20">
        <div
          className="reveal rounded-3xl border border-soft-violet/10 bg-white/[0.03] p-8 backdrop-blur-sm sm:p-12"
          style={delay(1400)}
        >
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-soft-violet">
            About us
          </h2>
          <p className="mt-4 max-w-3xl font-display text-xl leading-snug text-cloud sm:text-2xl">
            At Majornutcracker, we love hard problems. We take them on,
            understand them, and turn them into digital solutions that actually
            work.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className="reveal rounded-2xl border border-soft-violet/10 p-5 transition-colors hover:border-deep-violet/60 hover:bg-deep-violet/10"
                style={delay(1550 + i * 120)}
              >
                <h3 className="font-display font-semibold text-cloud">{p.title}</h3>
                <p className="mt-2 text-sm text-cloud/60">{p.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-10 text-cloud/60">
            We combine technology, design and creativity to make the complex
            feel much simpler.
          </p>
        </div>
      </section>

      <footer className="border-t border-soft-violet/10">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-2 px-6 py-6 text-sm text-cloud/40 sm:flex-row">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span className="font-display">{site.tagline}.</span>
        </div>
      </footer>
    </div>
  );
}
