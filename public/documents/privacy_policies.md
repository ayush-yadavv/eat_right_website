# EatRight AI: Privacy Policy

**Last Updated: August 6, 2026**

At **EatRight AI** ("we", "us", "our"), we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use the EatRight AI mobile application (the "App" or "Service"). 

By using the Service, you consent to the data practices described in this policy.

---

## 1. Information We Collect
We collect information that you directly provide to us, as well as data automatically retrieved through your device integrations and third-party APIs.

### A. Information You Provide
* **Account Onboarding:** When you create an account, we collect profile details such as age, gender, height, weight, dietary restrictions (e.g., allergies, preferences), and fitness goals.
* **User Input & AI Queries:** We collect text inputs, food logs, and questions you submit to the EatRight AI assistant.

### B. Google Health Connect Data
With your explicit consent, EatRight reads and writes health and fitness data via Google Health Connect. We limit our data collection to the minimum required for the App's core features:
* **Metrics Accessed:** Calories burned, body weight, step count, sleep duration, and workout logs.
* **Disclosure:** A prominent disclosure is displayed in-app before requesting permissions, ensuring you understand why each metric is needed.

### C. Technical and Usage Data
* **App Performance:** We use Firebase Crashlytics and Firebase Performance Monitoring to collect anonymous diagnostic data, crash reports, and app execution speed.
* **Device Info:** Operating system version and unique device identifiers to assist with notifications and authentication.

---

## 2. How We Use Your Information
We use the collected information for the following purposes:
* **Personalized Nutrition & Coaching:** To generate customized meal plans, nutrition estimates, and wellness insights.
* **Generative AI Analysis:** We securely transmit your profile details (e.g., weight, dietary restrictions) and query text to Google's Gemini 2.5 Flash backend to construct accurate AI nutrition advice.
* **Progress Tracking:** To visualize your health metrics over time by syncing with Google Health Connect.
* **App Optimization:** To debug crashes, analyze usage, and improve the user experience.

---

## 3. Google Health Connect Data Compliance
Because health data is highly sensitive, we adhere to strict Google Play Health Connect developer policies:

* **Limited Use Requirement:** Data retrieved from Health Connect (Sleep, Weight, Steps, Calories, Workouts) is used **solely** to provide, maintain, and improve the nutrition tracking and health-coaching features of the EatRight App.
* **Strict Prohibition on Data Sale:** We will **never** sell, rent, license, or broker your Health Connect data to any third party, including advertising platforms, data brokers, or information resellers.
* **No Advertising or Marketing:** Health Connect data is never used to display advertisements, target promotional offers, or construct marketing profiles.
* **Secure Storage:** All health-related data synced from your device is encrypted in transit and at rest when stored in our backend databases.

---

## 4. How Your Data is Shared and Processed
* **Google Gemini AI API:** To provide AI responses, relevant context (such as your weight, allergies, and query) is sent to Google's generative AI API. Google processes this data securely in accordance with its enterprise privacy commitments, and it is not used to train public models.
* **Firebase Backend:** User profiles and log histories are stored securely using Firebase Firestore. Firebase provides enterprise-grade physical and logical security measures.
* **Legal Disclosures:** We will only disclose your data if required to do so by law or in the good faith belief that such action is necessary to comply with legal obligations.

---

## 5. Security of Your Data
We implement robust administrative, technical, and physical security measures to protect your personal and health data:
* All database communications are secured via HTTPS / TLS encryption.
* Firebase Firestore rules are strictly configured to ensure only you can read or write your own data.
* Data stored on your local device is handled using secure on-device storage options.

---

## 6. Your Rights and Data Deletion (GDPR & CCPA Compliance)
Depending on your location, you may have specific rights regarding your personal information, including the right to access, rectify, or restrict processing of your data.

* **Right to be Forgotten (Deletion):** We believe all users should control their data. You can delete your account and all associated data at any time through the in-app settings menu. Clicking "Delete Account" executes a direct database command (`deleteUserData()`) that permanently wipes your profile, logs, and synced health data from Firebase Firestore and local device storage.
* **Revoking Permissions:** You can revoke EatRight's access to Google Health Connect at any time via your Android system settings.

---

## 7. Children's Privacy
Our Service is not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we learn that we have collected information from a child under 18, we will take immediate steps to delete that data from our servers.

---


## 8. Medical Disclaimer
Eat Right is not a medical device and does not diagnose, treat, cure, or prevent any medical condition. Any health-related features, insights, or AI suggestions provided by the App are for informational purposes only. Always consult a qualified healthcare professional for medical advice, diagnosis, or treatment before making any significant changes to your diet, exercise, or lifestyle.

---

## 9. Changes to This Privacy Policy

We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last Updated" date. We encourage you to review this policy periodically to stay informed about how we protect your information.

---

## 10. Contact Us
If you have any questions or concerns about this Privacy Policy or our data practices, please contact our Data Protection Officer at:
* **Email:** privacy@eatrightai.example.com
