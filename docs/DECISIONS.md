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


## ADR-003: Horizontal Whiteboard Expedition with Tactile Sticky Notes & Physical Surfaces
- **Date**: 2026-10-20
- **Context**: The user clarified the desired interaction model: a real physical whiteboard/pinboard that scrolls horizontally, avoiding rigid card panels. Each stage features its own authentic physical board surface (chalkboard, blueprint mat, carbon workbench, cork pinboard, archival linen, industrial steel, banker's green felt, aerospace glass), and each course, book, and capstone is represented as a tactile Sticky Note pinned, taped, or clipped along an undulating winding expedition road.
- **Decision**: Redesigned the entire canvas into an interactive horizontal Whiteboard Expedition:
  1. Notes are staggered organically (`.stagger-high`, `.stagger-low`, `.stagger-center`, `.stagger-capstone`) with realistic rotational tilts (`-1.5deg`, `1.8deg`).
  2. Each territory implements genuine physical stationery attachments:
     - Phase 0-1: Amber industrial tape strips on dark chalkboard
     - Phase 2: White drafting tape strips on blueprint cutting mat
     - Phase 3: Neon mint electrical tape strips on carbon workbench
     - Phase 4: Vivid magenta round push-pins on amethyst pinboard
     - Phase 5: Vintage brass binder clips on ivory parchment & walnut
     - Phase 6: Safety hazard orange magnetic rivets on industrial steel
     - Track 7: Brass banker's paperclips on crisp prospectus ledger paper & green felt
     - Track 8: Cyan diamond acrylic tacks on aerospace glassboard
  3. Notes feature tactile completion checkboxes that stamp a green `MASTERED` watermark on the paper and dynamically illuminate the continuous winding SVG trail.
  4. Tested with zero detector warnings (`impeccable detect` = 0).
