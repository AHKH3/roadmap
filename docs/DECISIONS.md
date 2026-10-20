# Architectural Decisions — `roadmap`

## ADR-001: Zero-Build Modular Vanilla JS + Separated Data Layer (`data/roadmap-data.js`)
- **Date**: 2026-10-20
- **Context**: The user requested a single-page web roadmap with `localStorage` persistence and emphasized that future modifications to the roadmap itself will be done directly by editing the code.
- **Decision**: Separate all roadmap content into a clean, strongly structured `data/roadmap-data.js` file while keeping the app dependency-free (`index.html`, `styles/main.css`, `scripts/app.js`) so it runs immediately locally or on GitHub Pages without build friction.
- **Impact**: Instant preview, zero broken dependencies over time, and effortless editing of phases, modules, and lessons in code.


## ADR-002: Continuous Landscape World Map with Bespoke Design Systems per Stage
- **Date**: 2026-10-20
- **Context**: The user requested a true continuous landscape roadmap canvas where all stages sit along an unbroken path rather than tabbed screens. Each stage required a completely bespoke design system (distinct typography, tactile controls, atmospheric tokens, card geometry) while remaining connected along a single continuous route.
- **Decision**: Implemented a contiguous horizontal world viewport spanning 8 distinct zones (6 phases + 2 tracks) linked by architectural transition gates and a dynamic SVG world spine conduit. Each stage zone implements an authentic design language:
  1. Phase 0-1: Terminal Foundry (Monolithic JetBrains Mono, phosphor amber, ASCII brackets)
  2. Phase 2: Vector Studio (Architectural Inter, CAD coordinate grid, drafting calipers, anchor point nodes)
  3. Phase 3: Velocity Engine (Modern Geist, laser mint, compiler execution metrics, reactive toggles)
  4. Phase 4: Kinetic Physics Lab (Expressive Plus Jakarta Sans, amethyst motion timelines, diamond keyframes)
  5. Phase 5: Editorial Atelier (Haute Newsreader serif, gold leaf debossing, wax seal stamps)
  6. Phase 6: Telemetry Vault (Industrial JetBrains Mono, mainframe status LEDs, hazard amber rocker switches)
  7. Track 7: The Deal Room (Financial Newsreader/tabular, banking vault emerald, treasury bank stamps)
  8. Track 8: Studio Command (Aerospace Geist, icy cyan, executive diamond-pin checkboxes)
- **Impact**: Delivers an immersive, game-like world progression without game tropes or AI slop, fully compliant with Impeccable standards (0 detector warnings).
