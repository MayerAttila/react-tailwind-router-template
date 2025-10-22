import { Link } from "react-router-dom";

const bulletPoints = [
  {
    title: "Start With Clarity",
    description:
      "Swap in your brand assets, configure routes, and wire up shared providers in minutes.",
  },
  {
    title: "Design System Ready",
    description:
      "Use the color tokens across typography, surfaces, and borders for instant theme cohesion.",
  },
  {
    title: "Build Real Features",
    description:
      "Layer in data fetching, authentication, and domain logic without fighting your tooling.",
  },
];

const Home = () => {
  return (
    <section className="space-y-12">
      <header className="relative overflow-hidden rounded-3xl border border-accent-3/60 bg-accent-1/80 p-8 shadow-lg shadow-accent-4/20 transition-colors">
        <div className="relative z-10 space-y-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand/15 px-4 py-1 text-xs font-semibold uppercase tracking-wider text-brand">
            Crafted for fast starts
          </span>
          <h1 className="text-3xl font-bold tracking-tight text-contrast sm:text-5xl sm:leading-tight">
            Launch your next React experience with a palette that adapts to every state.
          </h1>
          <p className="max-w-2xl text-base leading-relaxed text-contrast/80 sm:text-lg">
            This starter kit pairs Vite, React Router, and Tailwind with a dynamic color system. Drop
            your components into a cohesive visual language and stay in sync across light and dark
            modes.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              to="/palette"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white shadow-md shadow-brand/40 transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Explore color tokens
            </Link>
            <Link
              to="/features"
              className="inline-flex items-center justify-center rounded-full border border-brand/40 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-brand transition hover:bg-brand/10"
            >
              View feature examples
            </Link>
          </div>
        </div>
        <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-64 w-64 rounded-full bg-brand/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-[-160px] left-[-80px] h-72 w-72 rounded-full bg-brand/5 blur-3xl" />
      </header>

      <section className="grid gap-5 md:grid-cols-3">
        {bulletPoints.map((point) => (
          <article
            key={point.title}
            className="flex h-full flex-col gap-4 rounded-2xl border border-accent-3/60 bg-accent-2/70 p-6 shadow-sm shadow-accent-4/30 transition hover:border-brand/50 hover:shadow-md"
          >
            <h2 className="text-lg font-semibold text-contrast">{point.title}</h2>
            <p className="text-sm leading-relaxed text-contrast/80">{point.description}</p>
          </article>
        ))}
      </section>

      <section className="grid items-center gap-8 rounded-3xl border border-accent-3/60 bg-accent-1/80 p-8 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-contrast">
            Harmony across components, states, and themes
          </h3>
          <p className="text-sm text-contrast/80">
            We map semantic tokens such as <code className="font-mono text-xs">--color-brand</code>{" "}
            and <code className="font-mono text-xs">--color-primary</code> directly to Tailwind
            utilities. Reach for <code className="font-mono text-xs">bg-accent-2</code> on cards or{" "}
            <code className="font-mono text-xs">text-contrast</code> for copy and it will maintain
            readability in every mode.
          </p>
        </div>
        <div className="rounded-2xl border border-accent-3/60 bg-primary/70 p-6 text-sm text-contrast/80 shadow-inner shadow-accent-4/30">
          <h4 className="text-base font-semibold text-contrast">Quick tip</h4>
          <p className="mt-2">
            Combine palette utilities with opacity modifiers to create nuanced layers:{" "}
            <code className="font-mono text-xs">bg-brand/10</code>,{" "}
            <code className="font-mono text-xs">border-accent-4/60</code>, and{" "}
            <code className="font-mono text-xs">text-contrast/70</code> provide depth without extra
            hex codes.
          </p>
        </div>
      </section>
    </section>
  );
};

export default Home;
