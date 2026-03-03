'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h2 className="font-heading text-2xl font-semibold text-indigo-500">
        Une erreur est survenue
      </h2>
      <p className="text-neutral-600">
        {error.message || 'Quelque chose s\'est mal passé.'}
      </p>
      <button
        onClick={reset}
        className="rounded-md bg-indigo-500 px-6 py-3 text-neutral-50 transition-colors hover:bg-indigo-600"
      >
        Réessayer
      </button>
    </div>
  );
}
