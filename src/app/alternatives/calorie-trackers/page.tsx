import RoundupPage, { buildRoundupMetadata, type Entry } from '@/components/roundup-page';

const slug = 'alternatives/calorie-trackers';

const title = 'Calorie Tracker Alternatives in 2026: Six Apps Compared';
const description =
  'Six calorie trackers compared on logging speed, ad load, fasting support, and whether the app closes the loop between meals and symptoms. Includes where each one beats Annura AI.';

export const metadata = buildRoundupMetadata({ slug, title, description });

const entries: Entry[] = [
  {
    name: 'Annura AI',
    self: true,
    tagline:
      'Photo logging that continues past the calorie count: it records how you felt after the meal, finds the ingredient that keeps lining up with bad days, and keeps that ingredient out of your recipes and plans.',
    bestFor: 'People who suspect a food is causing a problem but have never been able to prove which one.',
    strengths: [
      'One photo per meal instead of search-and-portion entry',
      'Post-meal symptom capture and trigger-ingredient correlation',
      'Recipes and meal plans automatically avoid identified triggers',
      'Ad-free, no data selling, full data export on request',
      'Intermittent fasting, additive flags, and AI chat in the same app',
    ],
    weaknesses: [
      'Paid — 7 days free, then a subscription. No permanent free tier.',
      'Android only at launch',
      'New app: smaller database and no community features yet',
      'Vision estimates still need correction on unusual or regional dishes',
    ],
    verdict:
      'The only app here built around the meal-to-symptom loop rather than the meal-to-number loop. If calorie counting is all you want, it is more app than you need — and more money than a free tier costs.',
  },
  {
    name: 'MyFitnessPal',
    tagline: 'The category default. Enormous food database, mature social features, and a genuinely usable free tier.',
    bestFor: 'Anyone who wants the biggest database and a free option that actually works.',
    strengths: [
      'Largest branded and regional food database in the category',
      'Friends, challenges, and a long-running community',
      'Free tier is real — you can track indefinitely without paying',
      'Years of public documentation and third-party guides',
    ],
    weaknesses: [
      'Manual search and portion entry is the primary flow, which is slow for mixed plates',
      'Ad load on the free tier is heavy',
      'Barcode scanning and other features are gated by region and tier',
      'No symptom tracking, no trigger correlation, no additive flags',
    ],
    verdict:
      'Still the safest recommendation for someone who cannot or will not pay, and still the best database. The cost is time: logging a five-component plate takes minutes, not seconds.',
  },
  {
    name: 'Cal AI',
    tagline: 'Fast photo calorie estimates with a deliberately narrow scope. Take a picture, get a number, move on.',
    bestFor: 'People who want a number in under ten seconds and nothing else.',
    strengths: [
      'Very fast photo-to-estimate flow',
      'Clean, minimal interface with little friction',
      'Available on both iOS and Android',
      'Ad-free',
    ],
    weaknesses: [
      'The product ends at the calorie estimate',
      'No symptom tracking or trigger correlation',
      'No fasting timer or meal planning',
      'Paid, no meaningful free tier',
    ],
    verdict:
      'Excellent at one job. If that job is all you have, it is a better fit than a broader app you will not use.',
  },
  {
    name: 'Cronometer',
    tagline: 'Micronutrient depth aimed at people who genuinely want to track vitamins and minerals, not just macros.',
    bestFor: 'Users with a clinical or sports reason to track micronutrients precisely.',
    strengths: [
      'Best-in-class micronutrient tracking and verified data sourcing',
      'Detailed reports and exportable data',
      'Strong reputation among dietitians and researchers',
    ],
    weaknesses: [
      'Interface is dense and intimidating for newcomers',
      'Manual entry heavy — very little photo assistance',
      'No conversational AI, no symptom tracking',
      'Steep learning curve before it becomes useful',
    ],
    verdict:
      'If you need micronutrient precision, nothing here replaces it. If you need to log lunch in thirty seconds, it is the wrong tool.',
  },
  {
    name: 'MacroFactor',
    tagline: 'Algorithmic calorie targets that adjust from your actual weight trend. Built by and for serious lifters.',
    bestFor: 'Experienced lifters who want expenditure-adaptive targets and will weigh themselves daily.',
    strengths: [
      'Best adaptive calorie algorithm in the category',
      'Excellent trend-weighting that tolerates daily noise',
      'Very strong for cutting and bulking phases',
    ],
    weaknesses: [
      'No free tier at all',
      'Strongly oriented to physique goals rather than wellbeing',
      'No intermittent fasting support',
      'Requires consistent daily weigh-ins to work as designed',
    ],
    verdict:
      'The best answer for a body-composition goal, and a poor answer for someone trying to work out why lunch makes them feel awful.',
  },
  {
    name: 'Yuka',
    tagline: 'Barcode scanner that rates packaged food on additives and processing. Brilliant at the shelf, blind to the plate.',
    bestFor: 'Grocery shopping decisions on packaged products.',
    strengths: [
      'Clear additive and ultra-processing ratings',
      'Fast, opinionated, easy to understand at a glance',
      'Genuinely changes what people put in their trolley',
      'Strong privacy stance',
    ],
    weaknesses: [
      'Only works on packaged food with a barcode',
      'Cannot log a home-cooked meal or track macros over a day',
      'No fasting, no meal planning, no symptom tracking',
      'Not a calorie tracker at all',
    ],
    verdict:
      'Complements a tracker rather than replacing one. Using it alongside a logging app is a reasonable strategy; using it alone will not tell you anything about your total intake.',
  },
];

export default function Page() {
  return (
    <RoundupPage
      slug={slug}
      title={title}
      description={description}
      intro="Every calorie tracker asks you to do the same thing — record what you ate — and then diverges completely on what it does with that record. Some give you a number, some give you a trend line, some give you nothing but a shelf rating. This page compares six of them on the parts that decide whether you are still using the app in three months: how long logging takes, how much you are advertised to, and whether anything happens after the meal is saved."
      methodology="We compared the apps on published feature sets, current pricing pages, and hands-on use of each app on Android where available. Pricing and feature gates change frequently — especially regional differences in barcode scanning — so verify anything that decides your purchase on the vendor's own page before subscribing. Annura AI is our own product; that disclosure is repeated on its entry rather than buried here."
      entries={entries}
      faqs={[
        {
          q: 'What is the best free calorie tracker?',
          a: 'MyFitnessPal has the most complete free tier of the apps on this list, in exchange for ads. Annura AI does not have a free tier — it is 7 days free, then paid — and we would rather say that clearly than have you discover it at the paywall.',
        },
        {
          q: 'Do photo calorie trackers actually work?',
          a: 'They work well enough to be useful and not well enough to be trusted blindly. Independent testing has found every photo-based app can be off by hundreds of calories on a mixed plate. The workflow that holds up is: photo, then correction. An app that shows you each detected ingredient and lets you fix it is more useful than one that shows a confident single number.',
        },
        {
          q: 'Which app is best if I have a food intolerance?',
          a: 'You need an app that records symptoms alongside meals, not just calories. Most trackers on this list have no symptom field at all. Annura AI was built specifically for that correlation, but it is not a diagnostic tool — for a suspected allergy or coeliac disease, see a doctor rather than an app.',
        },
        {
          q: 'Can I use two of these apps together?',
          a: 'Yes, and for some people it makes sense — Yuka for grocery decisions plus a tracker for daily intake is a common pairing. The cost is duplicated effort, and duplicated effort is the main reason people stop logging.',
        },
      ]}
    />
  );
}
