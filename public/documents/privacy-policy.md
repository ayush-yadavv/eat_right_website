# Annura AI: Privacy Policy

**Last Updated: October 12, 2026**

At **Annura AI** ("we", "us", "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the Annura AI mobile application (the "App" or "Service"). 

By using the Service, you consent to the data practices described in this policy.

---

## 1. Information We Collect
We collect information that you directly provide to us, data processing from device integrations, and diagnostic data.

### A. Personal Information You Provide
* **Account Credentials & Contact:** Email address, Name, and optional Phone number when managing your profile.
* **User Identifiers:** Unique user IDs (Firebase UID) to associate your data with your account securely.
* **User Input & Meal Photos:** Text inputs, food photos uploaded for AI vision meal scanning, meal logs, and queries submitted to the Annura AI assistant.
* **Health & Profile Measurements:** Profile details such as age, biological sex/gender, height, weight, dietary restrictions (e.g., allergies), and fitness goals.

### B. Google Health Connect Data (Processed 100% Locally)
With your explicit consent, Annura AI reads health metrics via Google Health Connect.
* **Metrics Accessed:** Step count, body weight, active energy burned, basal energy burned, water/hydration, body fat percentage, height, sleep duration, and workout logs.
* **On-Device Processing:** In compliance with Google Play Health Connect Data Minimization policies, all metrics retrieved via Health Connect are **processed 100% locally on your device** for dashboard visualization and on-device nutritional math.

### C. Technical, Performance and Device Identifiers
* **App Performance & Crash Logs:** Anonymous crash logs and diagnostic metrics collected via Firebase Crashlytics and Firebase Performance Monitoring.
* **Device Identifiers:** Push notification tokens (Firebase Cloud Messaging - FCM) to send meal, fasting, and hydration reminders.

### D. Voice Assistant & App Action Interactions (Google Assistant / Gemini)
When you interact with Annura AI using system voice assistants or platform shortcuts (such as App Actions via Google Assistant or Gemini on Android):
* **Intent & Parameters:** Spoken commands and parameters (such as a requested food item, meal type, or fasting timer command) are interpreted by your operating system's voice platform and transmitted to the App via secure on-device deep links to fulfill your request.
* **Ambient Display & Voice Privacy:** We restrict voice-surfaced and ambient display outputs to general tracking metrics (e.g., elapsed fasting duration, meal logged status). We do not broadcast sensitive medical conditions, allergies, or private profile records to unauthenticated ambient or shared smart displays.

### E. Website Telemetry (Privacy-First, Cookieless Web Analytics)
When you browse our informational website ([https://annura.ai](https://annura.ai)), we use **Vercel Web Analytics** to measure aggregated, anonymous web traffic.
* **Privacy-First & Cookieless Architecture:** Vercel Web Analytics operates completely without cookies. It does not set or store any cookies on your browser, does not access device local storage for tracking, does not log or collect personal identifiers, and does not track users across websites.
* **Telemetry Collected:** Aggregated page views, referring domain, browser engine, operating system, and geographic region (country/city level derived without storing your IP address).
* **No Cookie Consent Required:** Because our website does not utilize advertising cookies or cross-site tracking technologies, no cookie banner or intrusive consent prompts are necessary under the EU ePrivacy Directive and GDPR.
* **Mobile App Exemption:** The Annura AI mobile application contains **zero** third-party advertising cookies, marketing tracking pixels, or commercial telemetry SDKs.

---

## 2. How We Use Your Information
We use the collected information for the following purposes:
* **App Functionality & Account Management:** To authenticate users, enable profile management, manage accounts, and deliver push notifications.
* **Personalized AI Nutrition & Coaching:** To generate customized meal advice, estimate calories/macros from food photos, and power the Annura AI Chat Assistant.
* **Analytics & Performance:** To monitor app health, diagnose bugs, and improve system performance.

---

## 3. Google Health Connect & Consumer Health Data Privacy
Because health and wellness data is highly sensitive, we adhere to strict Google Play Health Connect developer policies and applicable consumer health privacy laws:

* **Limited Use Requirement:** Data retrieved from Health Connect is used **solely** to provide and display nutrition tracking and wellness metrics within the App.
* **On-Device Processing:** Health Connect data is handled locally on your device and is not sold, transferred, or used for external profiling.
* **Strict Prohibition on Data Sale:** We will **never** sell, rent, license, or broker your health data to any third party, advertising platform, or information reseller.
* **No Advertising or Marketing:** Consumer health metrics are never used to target advertisements or commercial promotions.

---

## 4. How Your Data is Shared and Processed
* **Generative AI Processing (Google Gemini via Google GenAI APIs):** Text queries and food photos submitted to the AI assistant are processed securely via Google Gemini models through the Google GenAI API for instant nutritional analysis. Data processed via Google GenAI APIs is subject to enterprise privacy commitments and is not retained or used to train public foundation models.
* **Firebase Cloud Infrastructure:** Account profile details and meal log histories are stored securely using Firebase Firestore. All data in transit is encrypted using HTTPS / TLS 1.3 protocols.
* **Voice Assistant & System Integrations:** When you trigger voice actions or system shortcuts via Google Assistant or Gemini, intent data is processed in accordance with Google's API policies and the [Actions on Google Policies](https://developers.google.com/actions/terms). User health profiles are never shared with advertising networks.
* **No Third-Party Ad Networks:** We do not include third-party ad networks or data-broker trackers in Annura AI.

---

## 5. Security of Your Data
We implement administrative, technical, and physical security measures to protect your personal data:
* All network communications are encrypted in transit via HTTPS / TLS 1.3.
* Firebase Firestore security rules enforce strict authentication checks ensuring users can only access their own data.

---

## 6. Data Retention Policy
We retain personal and sensitive user data only for as long as necessary to provide you with the Service, fulfill the purposes described in this Privacy Policy, and satisfy our legal, tax, or regulatory obligations.

### A. Specific Retention Practices by Data Category
* **Account Profile & Identity Data (Name, Email, Phone Number, Firebase UID):** Retained for the duration of your active account. When you delete your account or submit an account deletion request, your profile and identity credentials are permanently deleted from our active production databases.
* **Meal Logs and Nutritional History:** Retained in Cloud Firestore for the duration of your active account to maintain longitudinal dietary history, macro trend visualizations, and personalized AI meal coaching. Users can delete individual meal consumption logs at any time directly in the app.
* **Food Scan Photos (Zero Cloud Storage Retention):** When you capture a food photo for meal scanning, the image is stored temporarily in local device cache to transmit to our meal analysis endpoint. The image bytes are processed ephemerally in-memory by Google Gemini AI to extract nutritional data and are not saved, archived, or retained in cloud storage or backend databases.
* **Google Health Connect Data (Zero Cloud Retention):** **We do not store or retain Health Connect data on our servers.** All metrics retrieved from Google Health Connect (such as step counts, active calories, sleep, and weight) are processed 100% locally on your device in real-time. No Health Connect metrics are transmitted to or stored in our cloud infrastructure.
* **AI Chat Queries & Vision Processing:** Text queries and food images submitted for AI analysis are processed securely via Google Gemini APIs to return real-time nutritional breakdowns and conversational guidance. In accordance with enterprise AI data privacy standards, query inputs are processed ephemerally and are not retained or used to train public AI foundation models. Conversational chat context is stored with your user account in Firestore while your account is active and deleted upon account termination.
* **Device Identifiers & Push Notification Tokens (FCM Tokens):** Retained only while your device remains registered to receive notifications. Push tokens are automatically deleted from our database upon user logout, device deregistration, or app uninstallation.
* **Technical Performance Telemetry & Crash Diagnostics:** Anonymized crash logs collected via Firebase Crashlytics and diagnostic metrics collected via Firebase Performance Monitoring are retained for a maximum of **90 days** solely for technical diagnostics, debugging, and service stability, after which they are automatically and permanently purged.
* **Website Analytics Telemetry (Vercel Web Analytics):** Aggregated, cookieless web performance and traffic statistics collected on `annura.ai` are retained in de-identified aggregate reports by Vercel for operational reporting and service optimization. No individual personal records or user tracking identifiers are stored or retained.

### B. Retention Criteria
In determining retention periods for personal data, we adhere to the data minimization principle and evaluate:
* The amount, nature, and sensitivity of the data;
* The operational necessity of providing active service features to the user;
* The potential risk of harm from unauthorized access or disclosure;
* Statutory limitation periods and applicable legal, dispute-resolution, and accounting compliance obligations.

---

## 7. Account & Data Deletion Policy (GDPR, CCPA & Google Play Compliance)
You have full ownership and control over your personal data. We provide clear, accessible pathways to permanently delete your data:

### A. How to Request Account and Data Deletion
* **In-App Account Deletion (Immediate Self-Service):** You can delete your account and all associated data at any time directly within the mobile application. Navigate to **Settings > Danger Zone > Delete Account**, type **DELETE** in the confirmation dialog, and confirm. Your user account, profile credentials, meal logs, and local device cache will be permanently purged immediately from active production databases.
* **Public Web Deletion Request Portal:** If you have uninstalled the app or do not have access to your mobile device, you can submit a deletion request through our public web deletion page at: [https://annura.ai/delete-account](https://annura.ai/delete-account) (or [https://annura.ay7.me/delete-account](https://annura.ay7.me/delete-account)) or by emailing **play.ay11@gmail.com** with the subject *"Account Deletion Request"*. Web deletion requests are verified and fulfilled within 48 hours.
* **Selective In-App Data Erasure:** Users can delete individual meal consumption logs or update their dietary restrictions, goals, and health profile metrics at any time directly in the app without deleting their entire account.

### B. Data Purge Timelines
* **Active Production Databases:** Upon confirmation of an account deletion request (in-app or via web), personal identifiers and user data are immediately deleted and cannot be recovered.
* **Secure Backup Archives:** Encrypted rolling disaster recovery backups are retained for system integrity and are completely overwritten and purged within **30 days** of deletion.

### C. Revoking Permissions
* You may revoke Annura AI's access to device permissions (Camera, Google Health Connect, Notifications) at any time through your Android device settings (**Settings > Apps > Annura AI > Permissions**).

---

## 8. Legal Bases for Processing under GDPR (EEA & UK Users)
If you reside within the European Economic Area (EEA) or the United Kingdom (UK), Regulation (EU) 2016/679 (GDPR) and the UK Data Protection Act 2018 govern our processing of your personal data. We process your data exclusively under the following statutory legal bases:

### A. Contractual Necessity (GDPR Article 6(1)(b))
Processing account identifiers, profile parameters (age, height, weight), and dietary records is necessary to execute the contract between you and Annura AI (our Terms of Service) to provide core application features, macro calculations, and personalized coaching.

### B. Legitimate Interests (GDPR Article 6(1)(f))
We process diagnostic telemetry and anonymized crash logs (via Firebase Crashlytics) based on our legitimate interest in securing our infrastructure, detecting and fixing technical defects, preventing fraud, and guaranteeing service uptime. We ensure these interests are balanced against and do not override your fundamental privacy rights.

### C. Explicit Consent for Health & Special Category Data (GDPR Article 9(2)(a))
Nutritional logs, food allergies, health goals, and optional biometric measurements from Google Health Connect constitute **Special Category Data** under GDPR Article 9. We process this data **strictly on the basis of your explicit consent**, requested during onboarding and feature activation.
* **Right to Withdraw Consent:** You may withdraw your consent at any time by disconnecting Google Health Connect in your device permissions, clearing dietary logs in-app, or deleting your account. Withdrawal of consent does not affect the lawfulness of processing carried out prior to withdrawal.

### D. Legal Compliance (GDPR Article 6(1)(c))
Where statutory retention obligations apply (e.g., applicable financial, tax, or legal dispute compliance), we process data to satisfy legal requirements.

### E. Your Statutory GDPR Rights
Under Chapter III of the GDPR, EEA and UK users have the following enforceable rights:
* **Right of Access (Art. 15):** Request confirmation of whether your data is processed and obtain a copy of your personal data.
* **Right to Rectification (Art. 16):** Correct inaccurate or incomplete personal records.
* **Right to Erasure ("Right to be Forgotten", Art. 17):** Request permanent deletion of your data when it is no longer necessary or upon withdrawal of consent.
* **Right to Restriction of Processing (Art. 18):** Restrict how your data is processed under specific legal circumstances.
* **Right to Data Portability (Art. 20):** Receive your personal data in a structured, commonly used, and machine-readable format.
* **Right to Object (Art. 21):** Object to processing based on legitimate interests.
* **Right to Lodge a Complaint:** You have the right to lodge a complaint with your local Data Protection Authority (DPA) if you believe our processing violates applicable data protection laws.

To exercise these rights, submit a request to our Data Protection representative at **play.ay11@gmail.com**.

---

## 9. California Consumer Privacy Disclosures (CCPA & CPRA)
This section applies exclusively to California residents pursuant to the California Consumer Privacy Act of 2018, as amended by the California Privacy Rights Act of 2020 (collectively, "CCPA/CPRA", Cal. Civ. Code § 1798.100 et seq.).

### A. Statutory 12-Month Lookback Statement (Cal. Civ. Code § 1798.130)
In the preceding twelve (12) months:
* **No Sale of Personal Information:** Annura AI has **not** sold personal information of California consumers to any third party for monetary or commercial consideration.
* **No Sharing for Cross-Context Behavioral Advertising:** Annura AI has **not** "shared" personal information with third parties for cross-context behavioral advertising.
* **No Sale or Sharing of Minors' Data:** Annura AI is restricted to users aged 18 and older and does not sell or share personal information of consumers under 16 years of age.

### B. Limitation on Sensitive Personal Information (Cal. Civ. Code § 1798.121)
Annura AI collects Sensitive Personal Information (specifically, consumer health, dietary restrictions, and physical measurements) **solely** to perform the services reasonably expected by an average consumer requesting nutrition intelligence and meal tracking. We do **not** collect, use, or disclose Sensitive Personal Information for purposes other than those specified in California Civil Code § 1798.121 and Title 11, Section 7027(m) of the California Code of Regulations (such as profiling or targeted marketing). Consequently, we do not provide a "Limit the Use of My Sensitive Personal Information" link because our use is already legally restricted to requested service delivery.

### C. Categories of Personal Information Collected
In the preceding 12 months, we have collected the following statutory categories of personal information:
* **Identifiers:** Name, email address, unique online identifier, Firebase UID, and IP address (masked on website).
* **Commercial / Dietary Records:** Records of meals logged, calories tracked, macro targets, and food scan analyses.
* **Internet / Network Activity:** App performance telemetry, crash logs, and non-identifiable web visit metrics on `annura.ai`.
* **Sensitive Personal Information:** Health and physiological metrics (weight, height, allergies, dietary goals, Health Connect activity data).

### D. California Consumer Rights
California consumers possess the following rights under the CCPA/CPRA:
* **Right to Know / Access:** Request disclosure of categories and specific pieces of personal information collected, sources, commercial purposes, and categories of third parties to whom data is disclosed.
* **Right to Delete:** Request deletion of personal information collected from you, subject to statutory exceptions.
* **Right to Correct:** Request correction of inaccurate personal information.
* **Right to Non-Discrimination:** We will never deny services, charge different prices, or provide a different level of quality for exercising your CCPA/CPRA rights.

To submit a verifiable consumer request, contact us at **play.ay11@gmail.com** or use our web portal at [https://annura.ai/delete-account](https://annura.ai/delete-account).

---

## 10. Age Restriction (18+ Only)
Annura AI is **exclusively intended for adults aged 18 and older**. We do not knowingly collect personal information from individuals under the age of 18. Age verification is enforced during onboarding. If we learn that an account belongs to a minor under 18, we will immediately terminate the account and purge associated data.

---

## 11. Medical Disclaimer
**Annura AI is not a medical device and does not diagnose, treat, cure, or prevent any medical condition.** All nutritional estimates, macro breakdowns, and AI recommendations are provided for informational and educational purposes only. Always consult a qualified physician or healthcare professional before making diet, fasting, or lifestyle changes.

---

## 12. Contact Us
If you have any questions, concerns, or requests regarding this Privacy Policy, our data retention practices, or your data privacy rights, please contact our privacy compliance team at:
* **Support Email:** play.ay11@gmail.com
* **Mailing / Regulatory Inquiries:** Annura AI Compliance Team, play.ay11@gmail.com
