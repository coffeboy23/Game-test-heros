#!/usr/bin/env node
/* Sync the game into the Android project.
   embervale.html (repo root) is the single source of truth:
   edit it, run `npm run sync`, then rebuild in Android Studio. */
const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

const src = path.join(__dirname, "..", "embervale.html");
const dst = path.join(__dirname, "www", "index.html");
fs.copyFileSync(src, dst);
console.log(`copied embervale.html -> www/index.html (${fs.statSync(dst).size} bytes)`);
execSync("npx cap copy android", { cwd: __dirname, stdio: "inherit" });
console.log("done — rebuild/Run in Android Studio to see the change on your phone.");
