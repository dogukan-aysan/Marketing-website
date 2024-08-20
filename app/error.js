"use client";

import Button from "./_components/Button";

export default function Error({ error, reset }) {
  return (
    <main className="flex justify-center items-center flex-col gap-6 text-neutral-900 absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4">
      <h1 className="text-3xl font-semibold">Something went wrong!</h1>
      <p className="text-lg">{error.message}</p>
      <Button size="md" hierarchy="primary" content="label-only" handleClick={reset}>
        Try Again
      </Button>
    </main>
  );
}
