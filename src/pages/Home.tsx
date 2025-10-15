const Home = () => {
  return (
    <section className="space-y-8">
      <header className="space-y-3">
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-500">
          Welcome to your starter kit
        </p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          React, Vite, Tailwind, and routing—ready when you are.
        </h1>
        <p className="max-w-2xl text-base text-slate-600 dark:text-slate-300">
          This project ships with sensible defaults so you can focus on building features. Replace
          this copy, wire up your first components, and you are off to the races.
        </p>
      </header>
      <div className="grid gap-5 sm:grid-cols-3">
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Start here</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Update the brand, swap in your own routes, and set up API clients or state management.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Keep it tidy</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Check the sample ThemeToggle and Navbar components to see how shared UI is organized.
          </p>
        </div>
        <div className="rounded-xl bg-white p-6 shadow-sm ring-1 ring-slate-200/70 dark:bg-slate-900 dark:ring-slate-800">
          <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Next steps</h2>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Add authentication, connect real data sources, or scaffold feature pages when you are
            ready.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
