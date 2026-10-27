# Move — Eve's personal workout app (PWA)

Static web app, no build step. Data lives only in the phone's browser storage (export a backup in Settings).

- `js/exercises.js` — exercise catalog (equipment, pattern, level, flags: S one-sided, J jump, H hold, N neck-strain, B deep back stretch/load)
- `js/engine.js` — workout generator (balanced full body, 4-week goal-based month, mix-in equipment, back care, feedback)
- `js/coach.js` — voice + beeps
- `js/app.js` — screens + player
- `img/` — start/end photos from yuhonas/free-exercise-db (public domain, Unlicense)

## Update
1. Edit files.
2. Run `python3 build-sw.py` (refreshes the offline cache version).
3. Commit + push. The phone picks up the new version on the next open (reloads itself, never mid-workout).
