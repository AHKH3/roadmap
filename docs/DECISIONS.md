# Architectural Decisions — `roadmap`

## ADR-001: Zero-Build Modular Vanilla JS + Separated Data Layer (`data/roadmap-data.js`)
- **Date**: 2026-10-20
- **Context**: The user requested a single-page web roadmap with `localStorage` persistence and emphasized that future modifications to the roadmap itself will be done directly by editing the code.
- **Decision**: Separate all roadmap content into a clean, strongly structured `data/roadmap-data.js` file while keeping the app dependency-free (`index.html`, `styles/main.css`, `scripts/app.js`) so it runs immediately locally or on GitHub Pages without build friction.
- **Impact**: Instant preview, zero broken dependencies over time, and effortless editing of phases, modules, and lessons in code.
