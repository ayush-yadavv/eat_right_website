# EatRight AI: Legal & Compliance Considerations

As a health, diet, and nutrition application integrating Google Health Connect and Generative AI, the **EatRight app** must adhere to strict data privacy and compliance frameworks.

This document outlines the core legal, privacy, and compliance requirements the application must maintain.

---

## 1. Google Health Connect Developer Policy
Because EatRight reads and writes sensitive health data (Calories, Weight, Steps, Sleep, Workouts) via Google Health Connect, it must strictly comply with the [Google Play Health Connect Policies](https://support.google.com/googleplay/android-developer/answer/13010189):

* **Prominent Disclosure:** The app must present a clear, in-app disclosure explaining exactly *why* it needs access to health data before prompting the Health Connect permission dialog.
* **Limited Use Requirement:** The data retrieved from Health Connect (e.g., Sleep, Weight, Calories) may *only* be used to provide or improve the health/fitness features of the EatRight app.
* **Prohibition on Data Sale:** Health Connect data must **never** be sold, transferred, or brokered to advertising platforms, data brokers, or information resellers.
* **Privacy Policy:** The app’s privacy policy must be easily accessible and explicitly state how Health Connect data is accessed, collected, used, and shared.

## 2. Artificial Intelligence (AI) Transparency
The app utilizes Google's Gemini 2.5 Flash model to provide personalized nutritional advice. Since this constitutes an AI health assistant, certain compliance guardrails are necessary:

* **No Medical Advice Disclaimer:** The AI prompt and the app UI must clearly state that EatRight AI is a **nutrition assistant, not a medical professional**. Advice given by the AI should not be treated as medical diagnoses, treatments, or cures.
* **Data Processing via LLM:** The user must be informed (via Terms of Service or Privacy Policy) that their profile data (weight, height, dietary restrictions, synced health metrics) is securely transmitted to Google's generative AI backend for processing their specific prompts.
* **Hallucination Mitigation:** Because LLMs can hallucinate, the prompt engineering relies on strict JSON generation and specific instructions to prioritize data over assumptions, but users should be advised to verify critical allergen or medical information themselves.

## 3. Data Privacy & User Rights (GDPR & CCPA)
To operate in regions like the EU (GDPR) and California (CCPA), the app architecture currently supports these user rights:

* **Right to Deletion:** The `UserController` implements a `deleteUserData()` method which wipes the user's data from Firebase Firestore and local storage, ensuring compliance with "Right to be Forgotten" mandates.
* **Data Minimization:** Only data directly relevant to nutrition and the app's functionality (e.g., steps, calories, sleep) is requested from Health Connect.
* **Secure Storage:** User data (including health profiles) is stored securely on Firebase Firestore, which provides encryption at rest and in transit.

## 4. Action Items for App Release
Before launching the EatRight app to the Google Play Store or Apple App Store, ensure the following are completed:

1. **Draft a Comprehensive Privacy Policy:** Ensure it includes a specific section titled "Google Health Connect Data".
2. **Add a Disclaimer UI:** Add a persistent disclaimer in the `AnnuraAiScreen` and `AskAiScreen` stating: *"EatRight AI provides nutritional estimates and general advice. It is not a substitute for professional medical advice."*
3. **Data Safety Form:** Complete the Google Play Data Safety form, accurately declaring the collection and use of Health and Fitness data.
4. **Consent Checkbox:** Add a checkbox during onboarding where the user explicitly agrees to the Terms of Service and acknowledges the Privacy Policy before creating an account in `UserController`.
