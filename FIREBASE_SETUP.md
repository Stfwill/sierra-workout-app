# Sweat & Stats Firebase Setup

Version 2.3 includes permanent local Workout History, exercise history, profile settings, and a cloud-ready data model. Firebase login is not activated until a Firebase project is connected.

1. Create a Firebase project.
2. Add a Web App in Project Settings.
3. Enable Authentication > Email/Password.
4. Create a Firestore database.
5. Copy `firebase-config.example.js` to `firebase-config.js` and paste your project values.
6. Apply user-scoped Firestore rules before storing private data.

Do not publish service-account keys. The normal Firebase web configuration is designed to be used in a browser, while Firestore Security Rules protect the records.

The next connection step will add Firebase SDK loading, account creation/sign-in, migration of local records, and per-user syncing.
