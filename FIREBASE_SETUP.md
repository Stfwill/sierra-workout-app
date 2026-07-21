# Sweat & Stats v2.3.1 Firebase Setup

The Firebase project configuration is already connected in `index.html`.

## Before testing login

1. In Firebase Console, open **Authentication → Settings → Authorized domains**.
2. Add your GitHub Pages domain, usually `YOUR-GITHUB-USERNAME.github.io`. Do not include `https://` or a path.
3. Open **Firestore Database → Rules → Edit rules**.
4. Replace the existing rules with the contents of `firestore.rules`.
5. Tap **Publish**.

## First sign-in

Open the updated app and tap **Create Account**. The first time you sign in, the app checks for existing local Sweat & Stats data and asks whether to move it into your private cloud account.

## Data model

Personal app state is stored at `users/{uid}/app/state`. Firestore rules restrict access to the signed-in owner of that UID.
