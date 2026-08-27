import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft, Trash2, Smartphone, Mail, ShieldAlert, CheckCircle2, Clock, Info } from 'lucide-react';
import { siteConfig } from '@/data/site';
import { Link000 } from '@/components/skiper40';
import { DeleteAccountRequestActions } from '@/components/delete-account-request';

export const metadata: Metadata = {
  title: `Request Account & Data Deletion`,
  description: `Official instructions and web request options to request permanent account and personal data deletion for ${siteConfig.name}.`,
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-background text-text-main py-12 px-4 sm:px-6 lg:px-8">
      {/* Navigation Header */}
      <header className="max-w-4xl mx-auto flex items-center justify-between mb-12 border-b border-border pb-6">
        <Link href="/" className="font-heading font-bold text-xl tracking-tight" aria-label={`${siteConfig.name} Home`}>
          {siteConfig.name.substring(0, 3)}<span className="text-primary">{siteConfig.name.substring(3)}</span>
        </Link>
        <Link000 href="/" className="inline-flex items-center gap-2 text-sm font-medium text-text-muted hover:text-primary transition-colors">
          <ArrowLeft className="w-4 h-4 rtl:-scale-x-100" />
          Back to home
        </Link000>
      </header>

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Page Hero Title & Subtitle */}
        <section className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-error/10 text-error text-xs font-semibold uppercase tracking-wider">
            <Trash2 className="w-3.5 h-3.5" />
            <span>Account & Data Privacy Control</span>
          </div>
          <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-text-main">
            Request Account & Data Deletion
          </h1>
          <p className="text-lg text-text-muted leading-relaxed text-pretty max-w-3xl">
            At <strong>{siteConfig.name}</strong>, we strictly respect your privacy and data sovereignty. You have the right to permanently delete your account and request complete erasure of all associated personal data at any time.
          </p>
        </section>

        {/* Chunked Card 1: Option 1 - In-App Deletion */}
        <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm transition-all">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-3 rounded-xl bg-primary/10 text-primary">
              <Smartphone className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-main">
                Option 1: In-App Deletion (Immediate Self-Service)
              </h2>
              <p className="text-sm text-text-muted mt-1">
                If you currently have the {siteConfig.name} mobile app installed on your iOS or Android device:
              </p>
            </div>
          </div>

          <ol className="space-y-3 pl-2 text-text-main text-sm sm:text-base">
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0 mt-0.5">1</span>
              <span>Open the <strong>{siteConfig.name}</strong> mobile app on your smartphone.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0 mt-0.5">2</span>
              <span>Navigate to <strong>Settings</strong> &gt; <strong>Account Management</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0 mt-0.5">3</span>
              <span>Tap <strong className="text-error font-semibold">Delete Account</strong> and review the final confirmation dialog.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-primary/15 text-primary text-xs font-bold shrink-0 mt-0.5">4</span>
              <span>Confirm deletion. Your user profile, token credentials, and saved logs will be purged immediately from our active database.</span>
            </li>
          </ol>
        </section>

        {/* Chunked Card 2: Option 2 - Web Request */}
        <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm transition-all">
          <div className="flex items-start gap-4 mb-4">
            <div className="p-3 rounded-xl bg-info/10 text-info">
              <Mail className="w-6 h-6" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-semibold text-text-main">
                Option 2: Web Account Deletion Request
              </h2>
              <p className="text-sm text-text-muted mt-1">
                If you no longer have access to the mobile app or have uninstalled it, you can submit a direct erasure request to our privacy compliance team.
              </p>
            </div>
          </div>

          <div className="bg-background/80 rounded-xl p-5 border border-border/80 my-4 space-y-3">
            <div className="flex items-center gap-2 text-sm text-text-muted">
              <Info className="w-4 h-4 text-primary shrink-0" />
              <span>Please send your request from or include the email address linked to your {siteConfig.name} account.</span>
            </div>
            <div className="p-3.5 bg-surface rounded-lg border border-border font-mono text-sm text-primary flex items-center justify-between overflow-x-auto">
              <span>{siteConfig.contact.email}</span>
              <span className="text-xs text-text-muted font-sans font-normal ml-2">Subject: &quot;Account Deletion Request - {siteConfig.name}&quot;</span>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs text-text-muted">
            <Clock className="w-4 h-4 text-warning-text shrink-0" />
            <span>Deletion SLA: All web deletion requests are processed within <strong>48 hours</strong> of verification.</span>
          </div>

          <DeleteAccountRequestActions />
        </section>

        {/* Chunked Card 3: Data Retention & Purge Policy */}
        <section className="bg-surface border border-border rounded-2xl p-6 md:p-8 shadow-sm transition-all">
          <div className="flex items-center gap-3 mb-6">
            <ShieldAlert className="w-5 h-5 text-warning-text" />
            <h2 className="font-heading text-xl font-semibold text-text-main">
              Data Retention & Erasure Policy
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-primary/10 border border-primary/20">
              <h3 className="font-heading text-sm font-bold text-primary uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Data Permanently Purged
              </h3>
              <ul className="space-y-2 text-sm text-text-main">
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>User account profile, name, and email address.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Food logs, meal photos, and nutrition analysis history.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>Cached Health Connect / Apple Health sync records.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">•</span>
                  <span>AI chat history, preferences, and prompt memories.</span>
                </li>
              </ul>
            </div>

            <div className="p-5 rounded-xl bg-background border border-border">
              <h3 className="font-heading text-sm font-bold text-text-muted uppercase tracking-wider mb-3 flex items-center gap-2">
                <Info className="w-4 h-4" />
                Anonymized Telemetry
              </h3>
              <ul className="space-y-2 text-sm text-text-muted">
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Aggregated system performance metrics stripped of user identifiers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span>•</span>
                  <span>Anonymized crash diagnostics retained strictly for security & stability debugging.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-muted">
          <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/legal/privacy_policies" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/legal/terms_of_service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
