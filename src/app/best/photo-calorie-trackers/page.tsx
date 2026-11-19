import RoundupPage, { buildRoundupMetadata, type Entry } from '@/components/roundup-page';

const slug = 'best/photo-calorie-trackers';

const title = 'Best Photo Calorie Trackers in 2026, Tested and Ranked';
const description =
  'Five apps that estimate calories from a meal photo, ranked by logging speed, correction quality, and what happens after the estimate. Includes the limits of photo accuracy.';

export const metadata = buildRoundupMetadata({ slug, title, description });

const entries: Entry[] = [
  {
    name: 'Annura AI',
    self: true,
    tagline:
      'Photo logging plus a feedback loop: it captures how the meal made you feel, correlates that with detected ingredients, and steers your recipes and plans away from the ones that keep showing up on bad days.',
    bestFor: 'Anyone who wants the photo to lead somewhere beyond a calorie total.',
    strengths: [
      'Every detected ingredient is visible and correctable in one tap',
      'Post-meal symptom capture, then trigger-ingredient correlation across weeks',
      'Recipes and meal plans adapt to avoid identified triggers',
      'Ad-free and subscriber-funded — no data selling',
      'Fasting timer, additive flags, and AI chat included',
    ],
    weaknesses: [
      'Paid after a 7-day trial; no permanent free tier',
      'Android only at launch',
      'New, so the food database is thinner than the long-established apps',
      'Mixed plates with unusual regional dishes often need portion corrections',
    ],
    verdict:
      'The most complete answer to “the photo was useful, now what?” — and the wrong choice if you only want a number and refuse to pay for one.',
  },
  {
    name: 'Cal AI',
    tagline: 'The fastest photo-to-number flow available. Take the picture, read the estimate, close the app.',
    bestFor: 'Speed above all else, on either iOS or Android.',
    strengths: [
      'Fastest logging flow of the group',
      'Minimal interface with almost no setup',
      'Ships on iOS as well as Android',
      'Ad-free',
    ],
    weaknesses: [
      'No correction depth — the estimate is largely take-it-or-leave-it',
      'Product ends at the number',
      'No symptom tracking, fasting, or meal planning',
      'Paid, with no real free tier',
    ],
    verdict: 'Best if speed is the only criterion. Thinnest product if you want anything to happen after the estimate.',
  },
  {
    name: 'MyFitnessPal',
    tagline: 'The database-first tracker. Photo features exist on paid tiers, but manual entry remains the main path.',
    bestFor: 'Access to the largest food database and a free tier that works.',
    strengths: [
      'Largest branded and regional database in the category',
      'Free tier allows indefinite tracking',
      'Community, challenges, and years of third-party guides',
      'Photo assist available on higher tiers',
    ],
    weaknesses: [
      'Photo is a helper, not the primary flow',
      'Heavy ad load on free',
      'Barcode scanning gated by region and tier',
      'No symptom tracking or trigger correlation',
    ],
    verdict:
      'The right pick when database coverage and price matter more than logging speed. Mixed plates take minutes, not seconds.',
  },
  {
    name: 'Lose It!',
    tagline: 'Friendly, gamified tracker with a photo feature that is helpful for simple plates and thin for complex ones.',
    bestFor: 'People who respond well to streaks and light gamification.',
    strengths: [
      'Approachable interface with strong habit mechanics',
      'Photo logging included for simple meals',
      'Sensible onboarding for first-time trackers',
      'Reasonable free tier',
    ],
    weaknesses: [
      'Photo recognition struggles with multi-component plates',
      'Custom macro targets and fasting sit behind the paid tier',
      'Visual style is not for everyone',
      'No symptom or trigger tracking',
    ],
    verdict:
      'A good on-ramp for someone who has never tracked before. The photo feature will not carry a complex diet on its own.',
  },
  {
    name: 'Cronometer',
    tagline: 'Micronutrient-first tracker with very limited photo assistance and an intimidating amount of detail.',
    bestFor: 'Micronutrient precision for clinical or athletic reasons.',
    strengths: [
      'Best micronutrient tracking and data sourcing in the category',
      'Exportable reports suitable for sharing with a professional',
      'Trusted by dietitians',
    ],
    weaknesses: [
      'Photo logging is minimal — manual entry dominates',
      'Dense interface with a real learning curve',
      'No conversational AI or symptom tracking',
      'Slowest of the group for everyday meal logging',
    ],
    verdict:
      'Choose it for nutrient depth, not for the photo feature. If photo logging is your reason for switching, this is not the app.',
  },
];

export default function Page() {
  return (
    <RoundupPage
      slug={slug}
      title={title}
      description={description}
      intro="Photo calorie trackers all promise the same thing: point your camera at lunch and skip the database. In practice they differ enormously in how much they let you correct, how fast the flow actually is, and whether the estimate is the end of the interaction or the beginning of one. This ranking is ordered by how useful the photo is across a whole week of eating, not by how good the demo looks on the first day."
      methodology="Ranking criteria, in order of weight: how fast a typical mixed plate can be logged, how much correction the app allows when the estimate is wrong, whether anything happens after the meal is saved, and total cost of ownership including ads. We used each app on Android where an Android build exists. Vendor pricing and feature gates change often, so confirm current terms on the vendor's own page before you buy. Annura AI is our own app and is disclosed as such on its entry."
      entries={entries}
      faqs={[
        {
          q: 'How accurate are photo calorie trackers really?',
          a: 'Less accurate than their marketing implies. Independent testing has repeatedly found photo-based estimates can be off by hundreds of calories on a mixed plate, because portion size and cooking fat are hard to judge from an image. The better question is not “which is most accurate” but “which lets me correct the estimate fastest” — an app that shows each detected ingredient is more trustworthy than one that shows a confident total.',
        },
        {
          q: 'Is a photo tracker better than manual logging?',
          a: 'For mixed, home-cooked meals, usually yes — manual entry forces you to guess portions anyway, and it takes several minutes longer. For packaged food with a barcode, scanning is faster and more precise than a photo. Most people end up using both, depending on the meal.',
        },
        {
          q: 'Which of these apps has a free tier?',
          a: 'MyFitnessPal and Lose It! both have usable free tiers, with ads. Annura AI and Cal AI are paid after a trial. Cronometer has a free tier with limits. Free tiers in this category tend to be where the ads and the feature gates live, so budget for what you actually need.',
        },
        {
          q: 'What makes Annura AI different from the other photo trackers?',
          a: 'It does not stop at the estimate. After a meal it asks how you felt, and over several weeks it correlates your answers with the ingredients it detected. Recipes and meal plans then avoid the ingredients that keep appearing on bad days. None of the other apps on this list record symptoms at all.',
        },
      ]}
    />
  );
}
