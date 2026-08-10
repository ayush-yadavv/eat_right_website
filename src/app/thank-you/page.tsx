import Link from 'next/link';

export const metadata = {
  title: 'Thank You | Eat Right',
  description: 'Thank you for getting in touch with us.',
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen" style={{ backgroundColor: '#020617', color: 'white' }}>
      <nav className="navbar" style={{ position: 'relative' }}>
         <div className="container nav-container">
           <Link href="/" className="logo">Eat<span>Right</span></Link>
         </div>
      </nav>
      
      <div className="container" style={{ paddingTop: '2rem', paddingBottom: '6rem' }}>
        {/* Breadcrumbs */}
        <nav className="text-sm text-gray-400 mb-8" aria-label="Breadcrumb">
          <ol className="list-none p-0 inline-flex">
            <li className="flex items-center">
              <Link href="/" className="hover:text-emerald-400">Home</Link>
              <span className="mx-2">/</span>
            </li>
            <li className="flex items-center text-gray-200" aria-current="page">
              Thank You
            </li>
          </ol>
        </nav>

        <div className="text-center max-w-2xl mx-auto py-16">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 mb-6">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
          </div>
          <h1 className="text-4xl font-bold mb-4">Thank You!</h1>
          <p className="text-gray-300 mb-8 text-lg">
            We have received your enquiry. Our team will get back to you shortly. We aim to respond within 24 hours.
          </p>
          <Link href="/" className="btn-primary inline-block" style={{ padding: '0.75rem 1.5rem', borderRadius: '9999px', backgroundColor: '#10b981', color: 'white', fontWeight: 'bold' }}>
            Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
