# Embervale on Android

The game is wrapped with [Capacitor](https://capacitorjs.com): the whole of
`embervale.html` runs inside a WebView. **`embervale.html` at the repo root stays
the single source of truth** — keep editing it (or asking Claude to); the app is
just a copy that you refresh with one command.

## One-time setup

1. Install [Android Studio](https://developer.android.com/studio) (it bundles the
   JDK and Android SDK — accept the defaults).
2. On your phone: Settings → About phone → tap **Build number** 7 times to unlock
   Developer options, then enable **USB debugging**.
3. In this folder, run once:

   ```
   npm install
   npm run sync
   ```

   (`sync` copies the game into the native project — run it again after any
   game edit.)

## Build and run on your phone

1. Open the `android-app/android` folder in Android Studio (File → Open).
2. Let Gradle sync finish (first time downloads dependencies — a few minutes).
3. Plug in your phone (allow the USB-debugging prompt on the phone).
4. Press the green **Run ▶** button with your phone selected as the device.

The app installs and launches. That's it — no Play Store, no signing setup
needed for your own device.

Want an APK file to share/sideload instead? In Android Studio:
**Build → Build App Bundle(s)/APK(s) → Build APK(s)** — the debug APK lands in
`android/app/build/outputs/apk/debug/app-debug.apk` and installs on any phone
that allows unknown sources.

## The edit loop

```
edit ../embervale.html   (the game — same file as always)
npm run sync             (copies it into the Android project)
press Run ▶ again        (reinstalls on the phone in seconds)
```

`npm run sync` = copy `embervale.html` → `www/index.html` → native assets.
Nothing else in this folder ever needs hand-editing.

## What the wrapper adds

- **Fullscreen immersive mode** and the screen never dims mid-campaign
  (`android/app/src/main/java/com/embervale/game/MainActivity.java`).
- **Back button backgrounds the app** instead of killing it — no lost campaigns.
- The game itself now **autosaves** (each new day and whenever the app is
  backgrounded) and offers *Continue last campaign* on the title screen.
  Export/Import save strings still work exactly as before.

## Troubleshooting

- *Gradle sync fails*: Android Studio → File → Sync Project with Gradle Files;
  make sure Studio finished its first-run SDK download.
- *Phone not listed*: replug USB, accept the debugging prompt, or toggle
  USB mode to "File transfer".
- *Old version runs after an edit*: you probably skipped `npm run sync`.
