import ComparePage, { buildCompareMetadata } from '@/components/compare-page';

const slug = 'vs/cal-ai';

const title = 'Annura AI vs Cal AI (2026)';
const description =
  'Both apps read a meal from a photo. The difference is what happens after: Cal AI stops at a calorie number, Annura AI closes the loop from meal to symptom to trigger ingredient.';

export const metadata = buildCompareMetadata({ slug, title, description });

export default function Page() {
  return (
    <ComparePage
      slug={slug}
      competitor="Cal AI"
      title={title}
      description={description}
      intro="Cal AI and Annura AI agree on the starting point: a photo beats a search box. They disagree on the ending point. Cal AI is built to give you a calorie number as fast as possible. Annura AI is built to tell you which ingredient in your lunch is the reason you feel bad at 3pm — and to stop putting it in your meal plan."
      headlineDifference="Cal AI answers “how many calories was that?” Annura AI answers “what in that meal should I avoid next time?” The photo is the input to a correlation engine, not the output of the product."
      rows={[
        { label: 'Photo-based logging', annura: { v: 'yes' }, rival: { v: 'yes' } },
        { label: 'Stops at a calorie estimate', annura: { v: 'no' }, rival: { v: 'yes' } },
        {
          label: 'Post-meal symptom capture',
          annura: { v: 'yes' },
          rival: { v: 'no' },
          note: 'Annura AI asks how you felt after the meal; Cal AI has no equivalent because the goal is only the number.',
        },
        { label: 'Trigger-ingredient correlation', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'Recipes and plans avoid your triggers', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'Additive / ultra-processed flags', annura: { v: 'yes' }, rival: { v: 'partial' } },
        { label: 'Intermittent fasting timer', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'AI nutrition chat', annura: { v: 'yes' }, rival: { v: 'partial' }, note: 'Cal AI is focused on logging; coaching is not the core product.' },
        { label: 'Meal planning + grocery lists', annura: { v: 'yes' }, rival: { v: 'no' } },
        { label: 'Ad-free', annura: { v: 'yes' }, rival: { v: 'yes' } },
        { label: 'Free tier', annura: { v: 'no' }, rival: { v: 'no' } },
        { label: 'Platforms', annura: { v: 'text', t: 'Android (Google Play)' }, rival: { v: 'text', t: 'iOS + Android' } },
      ]}
      whereTheyWin={[
        'iOS support. Cal AI ships on both platforms; Annura AI is Android-only at launch.',
        'Simplicity. If all you want is a number in under ten seconds and nothing else, Cal AI is a narrower, faster tool and does not ask you for a symptom journal.',
        'No symptom prompts. Some people find post-meal check-ins intrusive. If that is you, Cal AI never asks.',
      ]}
      faqs={[
        {
          q: 'Are Cal AI and Annura AI both photo calorie trackers?',
          a: 'Yes — both estimate nutrition from a meal photo. The difference is scope. Cal AI ends at the estimate; Annura AI continues into symptom tracking, trigger-ingredient correlation, and recipe or plan avoidance.',
        },
        {
          q: 'Which is more accurate at estimating calories from a photo?',
          a: 'Neither app can promise laboratory accuracy, and any comparison claiming otherwise should be treated with suspicion. Independent testing has repeatedly found every app in this category can be off by hundreds of calories on a mixed plate. Annura AI shows each detected ingredient so you can correct it, and never presents an estimate as a measurement.',
        },
        {
          q: 'Does Annura AI have a free trial?',
          a: 'Yes — 7 days of full access on a new account. After the trial it is a paid subscription, priced in your local currency on Google Play. There is no permanent free tier.',
        },
        {
          q: 'Can I use Annura AI if I have a food intolerance?',
          a: 'That is the case the app was designed around. You log the meal, record how you felt afterwards, and over several weeks the app surfaces which ingredients keep lining up with the bad days. It is not a medical diagnosis and it does not replace an allergist — see a doctor for a suspected allergy.',
        },
      ]}
    />
  );
}
