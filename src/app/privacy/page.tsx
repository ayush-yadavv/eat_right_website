import LegalPage from '../legal/[slug]/page';

export function generateMetadata() {
  return {
    title: 'Privacy Policies',
    description: 'Read the Privacy Policies for Annura AI.',
  }
}

export default function PrivacyPage() {
  return <LegalPage params={Promise.resolve({ slug: 'privacy_policies' })} />;
}
