import Link from 'next/link';

export default function AppFallbackPage() {
  return (
    <main className="min-h-screen flex items-center justify-center" style={{ backgroundColor: '#020617' }}>
      <div className="container" style={{ maxWidth: '600px', textAlign: 'center', padding: '2rem' }}>
        <div className="mb-8" style={{ fontSize: '4rem' }}>📱</div>
        <h1 className="text-4xl font-bold mb-4 text-white font-['Outfit']">
          Get the <span style={{ color: '#00d084' }}>Eat Right</span> App
        </h1>
        <p className="text-gray-400 text-lg mb-10 leading-relaxed">
          The link you clicked requires the Eat Right mobile app. Download it now to track your daily intake, sync your diet, and access your personalized nutrition dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/" className="btn-store flex-1 w-full sm:w-auto" style={{ justifyContent: 'center' }}>
            <span className="store-icon">🍎</span> 
            <div className="store-text">
              <span className="store-sub">Download on the</span>
              <span className="store-main">App Store</span>
            </div>
          </Link>
          <Link href="/" className="btn-store flex-1 w-full sm:w-auto" style={{ justifyContent: 'center' }}>
            <span className="store-icon">▶️</span> 
            <div className="store-text">
              <span className="store-sub">GET IT ON</span>
              <span className="store-main">Google Play</span>
            </div>
          </Link>
        </div>

        <div className="mt-12">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-300 transition-colors">
            &larr; Back to Website
          </Link>
        </div>
      </div>
    </main>
  );
}
