export default function Loading() {
  return (
    <main className="min-h-screen animate-pulse bg-[#080b12] text-white">
      {/* Hero skeleton */}
      <section className="border-b border-white/10 px-5 py-16 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-2">
          <div className="space-y-5">
            <div className="h-7 w-36 rounded-full bg-white/10" />

            <div className="space-y-3">
              <div className="h-10 w-full max-w-lg rounded-lg bg-white/10 sm:h-14" />
              <div className="h-10 w-4/5 max-w-md rounded-lg bg-white/10 sm:h-14" />
            </div>

            <div className="space-y-2 pt-2">
              <div className="h-4 w-full max-w-lg rounded bg-white/[0.07]" />
              <div className="h-4 w-11/12 max-w-md rounded bg-white/[0.07]" />
              <div className="h-4 w-3/4 max-w-sm rounded bg-white/[0.07]" />
            </div>

            <div className="flex flex-wrap gap-3 pt-3">
              <div className="h-11 w-36 rounded-lg bg-blue-400/20" />
              <div className="h-11 w-32 rounded-lg border border-white/10 bg-white/[0.04]" />
            </div>
          </div>

          <div className="h-64 rounded-2xl border border-white/10 bg-white/[0.04] sm:h-80 lg:h-96" />
        </div>
      </section>

      {/* Content skeleton */}
      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
        <div className="mb-8 space-y-3">
          <div className="h-3 w-28 rounded bg-blue-300/20" />
          <div className="h-8 w-64 max-w-full rounded-lg bg-white/10" />
          <div className="h-4 w-full max-w-md rounded bg-white/[0.06]" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 bg-[#0d121d] p-5"
            >
              <div className="h-12 w-12 rounded-xl bg-white/10" />
              <div className="mt-6 h-5 w-3/4 rounded bg-white/10" />
              <div className="mt-4 h-3 w-full rounded bg-white/[0.07]" />
              <div className="mt-2 h-3 w-5/6 rounded bg-white/[0.07]" />
              <div className="mt-6 flex gap-2">
                <div className="h-7 w-16 rounded-md bg-white/[0.07]" />
                <div className="h-7 w-20 rounded-md bg-white/[0.07]" />
                <div className="h-7 w-14 rounded-md bg-white/[0.07]" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}