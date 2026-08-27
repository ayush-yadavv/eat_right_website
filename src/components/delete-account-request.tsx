'use client';

import React, { useState } from 'react';
import { Mail, Copy, Check, ExternalLink, AlertCircle } from 'lucide-react';
import { AnnuraButton } from '@/components/annura-button';
import { siteConfig } from '@/data/site';

export function DeleteAccountRequestActions() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const email = siteConfig.contact.email;
  const subject = encodeURIComponent(`Account Deletion Request - ${siteConfig.name}`);
  const body = encodeURIComponent(
    `Hello ${siteConfig.name} Privacy Team,\n\nI would like to request the permanent deletion of my account and all associated personal data.\n\nAccount Email: [Enter your registered email address here]\nReason for deletion (optional): [Enter reason]\n\nThank you.`
  );

  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setCopyError(false);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error('Failed to copy email address', err);
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2500);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-6">
      <AnnuraButton variant="default" className="gap-2" asChild>
        <a href={mailtoUrl} target="_blank" rel="noopener noreferrer">
          <Mail className="w-4 h-4" />
          <span>Send Deletion Email</span>
          <ExternalLink className="w-3.5 h-3.5 opacity-70" />
        </a>
      </AnnuraButton>

      <AnnuraButton
        variant="secondary"
        onClick={handleCopy}
        className="gap-2"
        type="button"
        aria-label="Copy support email address to clipboard"
      >
        {copied ? (
          <>
            <Check className="w-4 h-4 text-success" />
            <span>Copied to Clipboard!</span>
          </>
        ) : copyError ? (
          <>
            <AlertCircle className="w-4 h-4 text-error" />
            <span>Failed to copy</span>
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            <span>Copy Support Email</span>
          </>
        )}
      </AnnuraButton>
    </div>
  );
}
