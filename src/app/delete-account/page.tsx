import React from 'react';
import Metadata from 'next';

export const metadata = {
  title: 'Request Account & Data Deletion | Annura AI',
  description: 'Instructions and form to request account and data deletion for Annura AI.',
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 py-16 px-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-white">Annura AI — Account & Data Deletion Request</h1>
      
      <p className="text-slate-300 mb-6 leading-relaxed">
        At <strong>Annura AI</strong>, we respect your privacy and give you full control over your personal data. 
        You can request the permanent deletion of your account and all associated personal data at any time.
      </p>

      <section className="mb-8 p-6 bg-slate-900 border border-slate-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Option 1: In-App Deletion (Immediate)</h2>
        <ol className="list-decimal list-inside space-y-2 text-slate-300">
          <li>Open the <strong>Annura AI</strong> app on your device.</li>
          <li>Navigate to <strong>Settings</strong> &gt; <strong>Account</strong>.</li>
          <li>Tap <strong>Delete Account</strong>.</li>
          <li>Confirm deletion. Your account and personal data will be purged immediately.</li>
        </ol>
      </section>

      <section className="mb-8 p-6 bg-slate-900 border border-slate-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-emerald-400">Option 2: Submit a Web Request</h2>
        <p className="text-slate-300 mb-4">
          If you no longer have the app installed, please send an email to our data privacy team:
        </p>
        <div className="p-4 bg-slate-950 rounded-lg border border-slate-800 text-emerald-400 font-mono text-sm">
          Email: support@ay7.me (Subject: "Account Deletion Request - Annura AI")
        </div>
        <p className="text-slate-400 text-sm mt-4">
          Please include the email address associated with your Annura AI account. We will process your request within 48 hours.
        </p>
      </section>

      <section className="p-6 bg-slate-900 border border-slate-800 rounded-xl">
        <h2 className="text-xl font-semibold mb-4 text-amber-400">Data Retention & Deletion Policy</h2>
        <ul className="list-disc list-inside space-y-2 text-slate-300 text-sm">
          <td><strong>Deleted immediately upon request:</strong> Profile info, email, food logs, Health Connect cached data, and AI chat history.</td>
          <td><strong>Anonymized metrics:</strong> Crash logs and aggregate performance metrics are retained in anonymous form for security and reliability.</td>
        </ul>
      </section>
    </main>
  );
}
