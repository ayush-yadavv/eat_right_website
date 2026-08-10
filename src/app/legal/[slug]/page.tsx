import fs from 'fs';
import path from 'path';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Link from 'next/link';

export function generateStaticParams() {
  return [
    { slug: 'privacy_policies' },
    { slug: 'terms_of_service' },
  ];
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const title = slug.split('_').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  return {
    title: `${title} | Eat Right`,
    description: `Read the ${title} for Eat Right.`,
  };
}

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  let content = '';
  try {
    const filePath = path.join(process.cwd(), 'public', 'documents', `${slug}.md`);
    content = fs.readFileSync(filePath, 'utf8');
  } catch (error) {
    content = '# Document Not Found\n\nThe requested legal document could not be found.';
  }

  return (
    <main className="legal-page min-h-screen" style={{ backgroundColor: '#020617' }}>
      <nav className="navbar" style={{ position: 'relative' }}>
         <div className="container nav-container">
           <Link href="/" className="logo">Eat<span>Right</span></Link>
         </div>
      </nav>
      <div className="container" style={{ maxWidth: '800px', paddingTop: '4rem', paddingBottom: '6rem' }}>
        <div className="prose prose-invert prose-emerald max-w-none">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {content}
          </ReactMarkdown>
        </div>
      </div>
    </main>
  );
}
