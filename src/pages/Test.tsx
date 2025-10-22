const summaryBlocks = [
  {
    title: "Docs Placeholder",
    description:
      "Link your design system and API docs here. Keep the layout and palette consistent by leaning on accent surfaces.",
  },
  {
    title: "Component Library",
    description:
      "Showcase reusable widgets with cards that inherit palette tokens. Mix text-contrast with bg-accent-* layers for depth.",
  },
  {
    title: "Support Hub",
    description:
      "Swap this content for FAQs or contact details. The palette ensures headings, body copy, and buttons stay legible.",
  },
];

const Test = () => {
  return (
    <section className="space-y-10">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight text-contrast sm:text-4xl">
          Placeholder route, polished visuals.
        </h1>
        <p className="max-w-2xl text-base text-contrast/80">
          This page is ready to host Features, Pricing, Docs—whatever you are building next. When you
          flesh it out, lean on the palette utilities so your typography, surfaces, and callouts feel
          intentional in both themes.
        </p>
      </header>

      <div className="rounded-3xl border border-brand/40 bg-brand/15 p-6 text-sm text-contrast shadow-inner shadow-brand/30">
        <p>
          Tip: pair <code className="font-mono text-xs">bg-brand/15</code> with{" "}
          <code className="font-mono text-xs">border-brand/40</code> to spotlight content without
          overwhelming the layout. Buttons can stay bold with{" "}
          <code className="font-mono text-xs">bg-brand</code> and neutral body copy should default to{" "}
          <code className="font-mono text-xs">text-contrast</code>.
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {summaryBlocks.map((block) => (
          <article
            key={block.title}
            className="flex h-full flex-col gap-3 rounded-2xl border border-accent-3/50 bg-accent-2/70 p-6 shadow-sm shadow-accent-4/30"
          >
            <h2 className="text-lg font-semibold text-contrast">{block.title}</h2>
            <p className="text-sm text-contrast/80">{block.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Test;
