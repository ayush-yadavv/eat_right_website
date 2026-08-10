import Link from 'next/link';

export const metadata = {
  title: '404 - Page Not Found | Eat Right',
  description: 'The page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center px-4" style={{ backgroundColor: '#020617', color: 'white' }}>
      <h1 className="text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-500">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-gray-400 mb-8 max-w-md">
        Oops! The page you're looking for seems to have gone missing or was moved.
      </p>
      <Link href="/" className="btn-primary" style={{ padding: '0.75rem 1.5rem', borderRadius: '9999px', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold' }}>
        Return to Home
      </Link>
    </main>
  );
}
