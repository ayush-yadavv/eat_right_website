import ComparePage, { buildCompareMetadata } from '@/components/compare-page';

const slug = 'vs/myfitnesspal';

const title = 'Annura AI vs MyFitnessPal (2026)';
const description =
  'An honest comparison of Annura AI and MyFitnessPal: photo logging vs manual entry, ad-supported vs subscriber-funded, and where MyFitnessPal is still the better choice.';

export const metadata = buildCompareMetadata({ slug, title, description });

export default function Page() {
  return (
    <ComparePage
      slug={slug}
      competitor="MyFitnessPal"
      title={title}
      description={description}
      intro="MyFitnessPal built the food database that most of this industry still depends on. Annura AI starts from a different premise: that logging a meal should take one photo, not a search and three portion guesses. This page is a straight comparison of how the two apps actually behave day to day, including the parts where MyFitnessPal is still ahead."
      headlineDifference="MyFitnessPal asks you to translate your plate into a database entry. Annura AI asks for a photo, shows you what it detected, and then closes the loop — it correlates the meal with how you felt afterwards and flags the ingredient that may have caused it. That loop is the product. Calories are just the entry point."
      rows={[
        {
          label: 'Meal logging',
          annura: { v: 'yes' },
          rival: { v: 'partial' },
          note: 'MyFitnessPal offers a photo feature on paid tiers, but the primary flow is still search-and-portion.',
        },
        { label: 'Time to log a mixed plate', annura: { v: 'text', t: '~30 seconds' }, rival: { v: 'text', t: '2–4 minutes' } },
        { label: 'Barcode scanning', annura: { v: 'yes' }, rival: { v: 'partial' }, note: 'Regions and tiers differ — check what your account includes.' },
        { label: 'Ad-free experience', annura: { v: 'yes' }, rival: { v: 'no' }, note: 'Annura AI is funded entirely by subscriptions and has never served an ad.' },
        { label: 'Post-meal symptom tracking', annura: { v: 'yes' }, rival: { v: 'no' }, note: 'Annura AI correlates what you ate with how you felt, then avoids the likely trigger in future plans.' },
        { label: 'Trigger-ingredient correlation', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'Additive / ultra-processed flags', annura: { v: 'yes' }, rival: { v: 'partial' }, note: 'MyFitnessPal shows nutrition values; it does not flag additives.' },
        { label: 'Intermittent fasting timer', annura: { v: 'yes' }, rival: { v: 'partial' } },
        { label: 'AI nutrition chat', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'Food database size', annura: { v: 'text', t: 'Open Food Facts + vision' }, rival: { v: 'text', t: 'Largest in the category' } },
        { label: 'Free tier', annura: { v: 'no' }, rival: { v: 'yes' }, note: 'Annura AI is 7 days free, then paid. There is no permanent free tier.' },
        { label: 'Sells or shares health data', annura: { v: 'no' }, rival: { v: 'partial' }, note: 'Check each app’s current privacy policy — these terms change.' },
      ]}
      whereTheyWin={[
        'Database depth. If you eat a lot of regional branded products, MyFitnessPal will almost certainly already have them, and Annura’s vision model may need you to correct a portion.',
        'Community and social features. MyFitnessPal has friends, challenges, and years of forum history that a newer app simply does not.',
        'A working free tier. If you genuinely cannot pay for a subscription, MyFitnessPal is usable for free and Annura AI is not — after your trial, Annura’s account goes read-only.',
        'Track record. MyFitnessPal has been audited, written about, and stress-tested by millions of users. Annura AI is new.',
      ]}
      faqs={[
        {
          q: 'Is Annura AI a free alternative to MyFitnessPal?',
          a: 'No, and we would rather say so plainly. Annura AI is a paid app with a 7-day free trial. There is no permanent free tier because the app is ad-free and funded entirely by subscribers. If a free app is a hard requirement, MyFitnessPal’s free tier is the better fit.',
        },
        {
          q: 'How is photo logging different from manual entry?',
          a: 'Manual entry makes you decide the food, the portion, and the cooking method before anything gets recorded. Photo logging inverts it: you take one photo, the app proposes the ingredients and portions, and you correct whatever it got wrong. For a mixed plate with five components, that is usually a few taps instead of a few minutes.',
        },
        {
          q: 'What happens to my data if I stop paying?',
          a: 'Your account becomes read-only. Your history stays visible and exportable — you can download a complete copy of your data at any time — but new logging requires an active subscription.',
        },
        {
          q: 'Does Annura AI work on iOS?',
          a: 'Annura AI is Android-only at launch, distributed through Google Play. An iOS version is not available yet.',
        },
      ]}
    />
  );
}
