import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4">
      <h1 className="font-heading text-3xl font-semibold text-indigo-500">
        Page introuvable
      </h1>
      <p className="text-neutral-600">
        La page que tu cherches n&apos;existe pas ou a été déplacée.
      </p>
      <Link
        href="/"
        className="rounded-md bg-secondary-400 px-6 py-3 text-neutral-900 transition-colors hover:bg-secondary-500"
      >
        Retour à l&apos;accueil
      </Link>
    </div>
  );
}
