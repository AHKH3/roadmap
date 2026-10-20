# Architecture — `roadmap`

## Structure
- `index.html`: Single-page application shell, semantic layout, command bar, hero bento grid, interactive timeline, parallel track, and AHKH Studio playbook.
- `data/roadmap-data.js`: Single source of truth (`window.ROADMAP_DATA`) containing all metadata, milestones, core phases (0–6+), parallel Marketing & Sales track (6 stages), AHKH Studio scope/packages, and literal modules & lessons for every resource.
- `styles/main.css`: Design tokens, 21st.dev spotlight card effects, beam animations, custom checkboxes, responsive bento grid, and RTL/LTR bilingual styling.
- `scripts/app.js`: Reactive UI renderer, `localStorage` state manager (`ahkh_roadmap_state_v1`), Focus Mode vs. Explorer Mode controller, search/command palette (`Ctrl+K`), bilingual switcher (`EN` / `AR`), and JSON backup import/export.
