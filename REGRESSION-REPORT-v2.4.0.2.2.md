# Regression Report — v2.4.0.2.2

## Automated verification completed

- JavaScript syntax passed for both patch files.
- HTML contains no duplicate IDs.
- All local files referenced by the HTML are present.
- Service worker includes the v2.4.0.2.2 JavaScript and CSS files.
- Manifest and visible version references identify v2.4.0.2.2.
- Static requirement checks passed 16 of 16. See `STATIC-QA-v2.4.0.2.2.json`.
- ZIP integrity passed after packaging.

## Functional areas covered by implementation review

### Workout Flow

- Build My Own and Exercise Library additions use previous-performance preload.
- Saved and Favorite workout loading use the shared preload route.
- Paste Workout supports title, workout notes, cardio values, sets, effort, exercise notes, and creation of missing library exercises after review.
- Random Workout respects focus, custom muscles, equipment, duration, difficulty, and exercise count while balancing muscle groups and movement patterns.
- Repeat routes preserve the selected completed workout rather than replacing it with unrelated newer exercise values.
- Workout Complete includes strength and cardio statistics, and Back to Workout restores a timer that was running before Finish.

### Exercise Library

- Quick Add naming enforcement is active.
- Custom equipment names are reusable.
- Paste Exercise supports editing, Include/Skip, validation, duplicate update, duplicate skip, and explicit rename.
- Duplicate, Copy Structured Exercise, Delete, and History controls remain present.
- Exercise History includes last performed date, sessions, sets, max weight, volume/rep trend, cardio trend, effort, and notes.

### History

- Detailed records include duration, exercise count, sets, reps, volume, cardio minutes, floors, structured set tables, effort, exercise notes, and overall workout notes.
- Existing History actions remain available.
- Last Workout opens the latest workout's specific expanded History record.

### Dashboard and Navigation

- Dashboard order is explicitly enforced as Greeting, Streak, Today's Workout, Last Workout, Quick Actions, Weight/Goal/BMI, Tip, and Need Help.
- Metric cards use compact sizing.
- Hamburger and bottom navigation markup and handlers remain unchanged.

### Data and Firebase

- Migration creates a recoverable backup first.
- Backup creation, listing, and restoration are available in Settings.
- Upload and Download are separate actions.
- Local/cloud conflict choice is explicit.
- Failed uploads are stored in a persistent offline queue and retried when the browser returns online.

## Environment-dependent verification

Firebase sign-in and cloud operations require the actual Firebase project to have Authentication enabled, the app's host authorized, and Firestore rules deployed. Those external settings are not contained entirely inside the ZIP.
