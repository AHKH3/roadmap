/**
 * Roadmap: Marketing Websites Freelancer — Single Source of Truth
 * Edit this file directly to add, remove, or reorder phases, courses, modules, or lessons.
 * Every checkable item has a stable `id` persisted in browser localStorage.
 */

window.ROADMAP_DATA = {
  storageKey: "ahkh_roadmap_v2",

  header: {
    title: "Roadmap: Marketing Websites Freelancer",
    subtitle:
      "One service: fast, premium marketing websites for local businesses — clinics, restaurants, gyms, shops — with local SEO, a WhatsApp button, and a booking form.",
    currentFocus: "Phase 0 & 1: Web — everything else stays hidden until its turn.",
    rule: "The rule: don’t start a new course before publishing the previous phase’s project.",
    path: [
      { id: "phase-0-1", label: "Phase 0–1 Web", meta: "Weeks 1–6" },
      { id: "phase-2", label: "Phase 2 Design", meta: "Weeks 4–10" },
      { id: "phase-3", label: "Phase 3 Stack", meta: "Weeks 8–14" },
      { id: "phase-4", label: "Phase 4 Sells", meta: "Weeks 10–14" },
      { id: "phase-5", label: "Phase 5 Selling", meta: "From Week 12" },
      { id: "phase-6", label: "After Month 6", meta: "Month 6+" }
    ]
  },

  milestones: [
    { id: "ms-1", title: "First live site published (bookshop page)" },
    { id: "ms-2", title: "3 Figma homepages designed" },
    { id: "ms-3", title: "3 live sites, Lighthouse 90+" },
    { id: "ms-4", title: "Portfolio site on my own domain" },
    { id: "ms-5", title: "First paying client (~month 3)" },
    { id: "ms-6", title: "Professional level (~month 6)" }
  ],

  principles: [
    {
      title: "The idea",
      body: "Don’t study web, design, and SEO in full — learn only the parts that serve this service. UX/UI lives inside design; AI is a tool in every phase."
    },
    {
      title: "The edge",
      body: "Design quality + fast delivery + understanding the client + a site that gets results. Not just “using AI”."
    },
    {
      title: "Long-term",
      body: "Raise prices → delegate → start a studio. The same path leads toward Design Engineer."
    },
    {
      title: "AI along the way",
      list: [
        "Free tiers of Cursor or GitHub Copilot, only after I understand the code",
        "Content drafts and images",
        "Later, an upsell: a booking bot or auto-replies"
      ]
    },
    {
      title: "Later",
      body: "Not now, but I will learn these after the core path: Advanced Python · Full backend · ML · React Native · Advanced SEO · Full branding"
    }
  ],

  phases: [
    {
      id: "phase-0-1",
      index: "01",
      title: "Phase 0 & 1: Web",
      timing: "Weeks 1–6",
      meta: "Current phase · Weeks 1–6 · ~2–3 h/day",
      note: "Stuck? Elzero or MDN as a reference — not a new course.",
      sections: [
        {
          heading: "Courses — in order",
          items: [
            {
              id: "c-html-css",
              title: "Scrimba — Learn HTML and CSS",
              url: "https://scrimba.com/learn/htmlandcss",
              modules: [
                {
                  id: "m-hc-1",
                  title: "Module 1: Build and deploy your first website",
                  lessons: [
                    { id: "l-hc-1-1", title: "HTML tags: headings (h1–h6) and paragraphs (p)" },
                    { id: "l-hc-1-2", title: "Self-closing tags and rendering images (img src & alt)" },
                    { id: "l-hc-1-3", title: "Nesting HTML elements and document indentation" },
                    { id: "l-hc-1-4", title: "Interactive elements: button and input attributes" },
                    { id: "l-hc-1-5", title: "Anchor tags (a href) and multi-page linking" },
                    { id: "l-hc-1-6", title: "Ordered (ol) and unordered (ul) lists" },
                    { id: "l-hc-1-7", title: "HTML5 document structure: doctype, head, title, body" },
                    { id: "l-hc-1-8", title: "Personal Website project and deployment to Netlify" }
                  ]
                },
                {
                  id: "m-hc-2",
                  title: "Module 2: Build a Google.com clone",
                  lessons: [
                    { id: "l-hc-2-1", title: "Linking external styles.css and CSS syntax" },
                    { id: "l-hc-2-2", title: "Inline vs block elements and display: block" },
                    { id: "l-hc-2-3", title: "The Box Model: width, margin, padding, border" },
                    { id: "l-hc-2-4", title: "CSS classes vs element selectors" },
                    { id: "l-hc-2-5", title: "Centering block elements with margin: 0 auto" },
                    { id: "l-hc-2-6", title: "Grouping with <div> containers and styling inputs/buttons" },
                    { id: "l-hc-2-7", title: "Intro to Flexbox for side-by-side button alignment" }
                  ]
                },
                {
                  id: "m-hc-3",
                  title: "Module 3: Build a Digital Business Card",
                  lessons: [
                    { id: "l-hc-3-1", title: "Card layout structure, image styling, and alt text" },
                    { id: "l-hc-3-2", title: "Flexbox child containers and two-column card layout" },
                    { id: "l-hc-3-3", title: "Utility classes and single responsibility in CSS" },
                    { id: "l-hc-3-4", title: "Horizontal and text centering (justify-content, text-align)" },
                    { id: "l-hc-3-5", title: "CSS inheritance and color palette selection" }
                  ]
                },
                {
                  id: "m-hc-4",
                  title: "Module 4: Build a Space Exploration site",
                  lessons: [
                    { id: "l-hc-4-1", title: "Full-bleed Hero background images (background-size: cover)" },
                    { id: "l-hc-4-2", title: "Google Fonts and custom @font-face rules" },
                    { id: "l-hc-4-3", title: "Inline <span> styling for underlined accents" },
                    { id: "l-hc-4-4", title: "IDs vs classes and text-shadow contrast" },
                    { id: "l-hc-4-5", title: "WebP format and viewport margin reset" }
                  ]
                },
                {
                  id: "m-hc-5",
                  title: "Module 5: Build a Birthday GIFt site",
                  lessons: [
                    { id: "l-hc-5-1", title: "flex-direction: column and main vs cross axis alignment" },
                    { id: "l-hc-5-2", title: "Circular avatars with border-radius: 50%" },
                    { id: "l-hc-5-3", title: "Interactive :hover pseudo-class states" },
                    { id: "l-hc-5-4", title: "Grouping selectors and reusable section components" },
                    { id: "l-hc-5-5", title: "CSS linear-gradient() backgrounds and semantic footer" }
                  ]
                },
                {
                  id: "m-hc-6",
                  title: "Module 6: Solo Project — Hometown Homepage",
                  lessons: [
                    { id: "l-hc-6-1", title: "Reading the Figma specification (colors, type, spacing)" },
                    { id: "l-hc-6-2", title: "Building the Hero banner" },
                    { id: "l-hc-6-3", title: "Building the 3-column Activities Flexbox section" },
                    { id: "l-hc-6-4", title: "Building the Local Guide card and deploying" }
                  ]
                }
              ]
            },
            {
              id: "c-multipage-kp",
              title: "Scrimba — Build a Multi-Page Website (Kevin Powell)",
              url: "https://scrimba.com/learn/spacetravel",
              modules: [
                {
                  id: "m-mp-1",
                  title: "Module 1: Modern CSS Reset & Design System Tokens",
                  lessons: [
                    { id: "l-mp-1-1", title: "Analyzing the Figma design system and page architecture" },
                    { id: "l-mp-1-2", title: "Modern CSS Reset (box-sizing, margins, images, form inherit)" },
                    { id: "l-mp-1-3", title: "CSS Custom Properties (:root) for HSL colors and alpha channels" },
                    { id: "l-mp-1-4", title: "Responsive typography scale using CSS variables" },
                    { id: "l-mp-1-5", title: "Utility classes for colors, typography, and .sr-only accessibility" }
                  ]
                },
                {
                  id: "m-mp-2",
                  title: "Module 2: Layout Primitives, Spacing & Components",
                  lessons: [
                    { id: "l-mp-2-1", title: "Building .flex and .grid layout primitives with dynamic --gap" },
                    { id: "l-mp-2-2", title: "Vertical rhythm with the .flow utility (* + *)" },
                    { id: "l-mp-2-3", title: "Responsive .grid-container with max-width and minmax()" },
                    { id: "l-mp-2-4", title: "Large CTA button, underline indicators, tabs, and dot indicators" },
                    { id: "l-mp-2-5", title: "Building the live Design System documentation page" }
                  ]
                },
                {
                  id: "m-mp-3",
                  title: "Module 3: Homepage & Responsive Navigation",
                  lessons: [
                    { id: "l-mp-3-1", title: "Homepage semantic HTML and numbered section titles" },
                    { id: "l-mp-3-2", title: "Mobile stack to tablet centered to desktop 2-column grid" },
                    { id: "l-mp-3-3", title: "Primary header navigation and backdrop-filter support" },
                    { id: "l-mp-3-4", title: "Mobile hamburger menudrawer with data-visible and aria-expanded" },
                    { id: "l-mp-3-5", title: "JavaScript navigation toggle and responsive background art direction" }
                  ]
                },
                {
                  id: "m-mp-4",
                  title: "Module 4: Destination Page, Grid Areas & Accessible Tabs",
                  lessons: [
                    { id: "l-mp-4-1", title: "Multi-breakpoint layout using grid-template-areas" },
                    { id: "l-mp-4-2", title: "ARIA roles: tablist, tab, and tabpanel structure" },
                    { id: "l-mp-4-3", title: "Keyboard arrow navigation (keydown focus management)" },
                    { id: "l-mp-4-4", title: "Dynamic tab content switching and <picture> WebP swapping" }
                  ]
                },
                {
                  id: "m-mp-5",
                  title: "Module 5: Crew Page, Technology Page & QA",
                  lessons: [
                    { id: "l-mp-5-1", title: "Crew page layout and visual order via grid-template-areas" },
                    { id: "l-mp-5-2", title: "Technology page responsive <picture media> portrait/landscape assets" },
                    { id: "l-mp-5-3", title: "Cross-browser review and accessibility audit" }
                  ]
                }
              ]
            },
            {
              id: "c-kp-responsive",
              title: "Kevin Powell — Conquering Responsive Layouts",
              url: "https://courses.kevinpowell.co/conquering-responsive-layouts",
              modules: [
                {
                  id: "m-kpr-1",
                  title: "Days 1–5: Fluid Widths, Percentages & Avoiding Heights",
                  lessons: [
                    { id: "l-kpr-1-1", title: "Day 1: Percentages vs fixed widths on parent and child elements" },
                    { id: "l-kpr-1-2", title: "Day 2: Why fixed heights cause overflow (letting content control height)" },
                    { id: "l-kpr-1-3", title: "Day 3: Challenge 1 — Constraining fluid containers" },
                    { id: "l-kpr-1-4", title: "Day 4: Solution + combining width: 85% with max-width" },
                    { id: "l-kpr-1-5", title: "Day 5: Challenge 2 — Full-width bands with centered inner containers" }
                  ]
                },
                {
                  id: "m-kpr-2",
                  title: "Days 6–8: Entering the World of Flexbox",
                  lessons: [
                    { id: "l-kpr-2-1", title: "Day 6: Flex containers, flex items, and column gaps" },
                    { id: "l-kpr-2-2", title: "Day 7: justify-content and align-items distribution" },
                    { id: "l-kpr-2-3", title: "Day 8: Challenge 3 — Hero banner and 3-column row" }
                  ]
                },
                {
                  id: "m-kpr-3",
                  title: "Days 9–12: Flexbox Deeper Dive & Navigation",
                  lessons: [
                    { id: "l-kpr-3-1", title: "Day 9: Responsive images (max-width: 100%) and 2-column Hero + Sidebar" },
                    { id: "l-kpr-3-2", title: "Day 10: flex-grow, flex-shrink, and flex-basis" },
                    { id: "l-kpr-3-3", title: "Day 11: Navbar alignment (logo, links, CTA button)" },
                    { id: "l-kpr-3-4", title: "Day 12: Flexbox Challenge 4 — Multi-section page from spec" }
                  ]
                },
                {
                  id: "m-kpr-4",
                  title: "Days 13–17: Media Queries & Mobile-First",
                  lessons: [
                    { id: "l-kpr-4-1", title: "Day 13: @media (min-width) syntax and viewport meta tag" },
                    { id: "l-kpr-4-2", title: "Day 14: Why Mobile-First writes cleaner, smaller CSS" },
                    { id: "l-kpr-4-3", title: "Day 15: Picking breakpoints based on layout stress points" },
                    { id: "l-kpr-4-4", title: "Days 16–17: Responsive navigation challenge" }
                  ]
                },
                {
                  id: "m-kpr-5",
                  title: "Days 18–21: Final Responsive Challenge",
                  lessons: [
                    { id: "l-kpr-5-1", title: "Day 18: Breaking down the 3-breakpoint design specification" },
                    { id: "l-kpr-5-2", title: "Day 19: Mobile-first HTML structure and base typography" },
                    { id: "l-kpr-5-3", title: "Day 20: Tablet (700px) and Desktop (1000px) breakpoints" },
                    { id: "l-kpr-5-4", title: "Day 21: Final refactor and responsive polish" }
                  ]
                }
              ]
            },
            {
              id: "c-js-dom",
              title: "Scrimba — Learn JavaScript → DOM + events only",
              url: "https://scrimba.com/learn/learnjavascript",
              modules: [
                {
                  id: "m-js-1",
                  title: "Module 1: DOM Selection & Manipulation Basics",
                  lessons: [
                    { id: "l-js-1-1", title: "Variables (let, const), functions, and console debugging" },
                    { id: "l-js-1-2", title: "Selecting elements: getElementById, querySelector, querySelectorAll" },
                    { id: "l-js-1-3", title: "Reading and updating text: textContent vs innerText" },
                    { id: "l-js-1-4", title: "Toggling classes: classList.add, remove, toggle, contains" }
                  ]
                },
                {
                  id: "m-js-2",
                  title: "Module 2: Event Listeners & Form Inputs",
                  lessons: [
                    { id: "l-js-2-1", title: "Handling clicks and keyboard events with addEventListener()" },
                    { id: "l-js-2-2", title: "Reading input .value, form submit events, and e.preventDefault()" },
                    { id: "l-js-2-3", title: "Template literals and rendering dynamic DOM lists" },
                    { id: "l-js-2-4", title: "Saving and reading UI state with localStorage" }
                  ]
                },
                {
                  id: "m-js-3",
                  title: "Module 3: Marketing Site UI Patterns",
                  lessons: [
                    { id: "l-js-3-1", title: "Mobile menu drawer open/close + Escape key + outside click" },
                    { id: "l-js-3-2", title: "FAQ accordion expand/collapse with aria-expanded" },
                    { id: "l-js-3-3", title: "Service/menu tab switcher and modal dialogs" },
                    { id: "l-js-3-4", title: "Pre-filling WhatsApp message links from booking form fields" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "Practice",
          items: [
            {
              id: "c-flexbox-froggy",
              title: "Flexbox Froggy",
              url: "https://flexboxfroggy.com/",
              modules: [
                {
                  id: "m-ff-1",
                  title: "Levels 1–24",
                  lessons: [
                    { id: "l-ff-1", title: "Levels 1–6: justify-content and align-items" },
                    { id: "l-ff-2", title: "Levels 7–13: flex-direction (row, row-reverse, column, column-reverse)" },
                    { id: "l-ff-3", title: "Levels 14–17: order and align-self" },
                    { id: "l-ff-4", title: "Levels 18–24: flex-wrap, flex-flow, and align-content" }
                  ]
                }
              ]
            },
            {
              id: "c-grid-garden",
              title: "Grid Garden",
              url: "https://cssgridgarden.com/",
              modules: [
                {
                  id: "m-gg-1",
                  title: "Levels 1–28",
                  lessons: [
                    { id: "l-gg-1", title: "Levels 1–10: grid-column-start, grid-column-end, and span" },
                    { id: "l-gg-2", title: "Levels 11–17: grid-row, grid-column, and grid-area" },
                    { id: "l-gg-3", title: "Levels 18–28: grid-template-columns, grid-template-rows, and fr units" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "Project",
          items: [
            { id: "p1-proj-1", title: "Bookshop page, hand-written, no AI" },
            { id: "p1-proj-2", title: "Published on Netlify" }
          ]
        }
      ]
    },

    {
      id: "phase-2",
      index: "02",
      title: "Phase 2: Design & UX/UI",
      timing: "Weeks 4–10",
      meta: "Locked · Weeks 4–10 · starts in parallel with Phase 1 at week 4",
      note: "Daily drill — 20 minutes: one section from godly.website or land-book.com → copy in Figma → code it.",
      sections: [
        {
          heading: "Resources",
          items: [
            {
              id: "c-refactoring-ui",
              title: "Refactoring UI (book) — the most important resource",
              url: "https://www.refactoringui.com/",
              modules: [
                {
                  id: "m-rui-1",
                  title: "Chapter 1: Starting from Scratch",
                  lessons: [
                    { id: "l-rui-1-1", title: "Start with a feature, not a layout" },
                    { id: "l-rui-1-2", title: "Detail comes later" },
                    { id: "l-rui-1-3", title: "Don’t design too much" },
                    { id: "l-rui-1-4", title: "Choose a personality" },
                    { id: "l-rui-1-5", title: "Limit your choices (predefined design systems)" }
                  ]
                },
                {
                  id: "m-rui-2",
                  title: "Chapter 2: Hierarchy is Everything",
                  lessons: [
                    { id: "l-rui-2-1", title: "Not all elements are equal" },
                    { id: "l-rui-2-2", title: "Size isn’t everything (using weight and contrast)" },
                    { id: "l-rui-2-3", title: "Don’t use grey text on colored backgrounds" },
                    { id: "l-rui-2-4", title: "Emphasize by de-emphasizing" },
                    { id: "l-rui-2-5", title: "Labels are a last resort" },
                    { id: "l-rui-2-6", title: "Separate visual hierarchy from document hierarchy" },
                    { id: "l-rui-2-7", title: "Balance weight and contrast" },
                    { id: "l-rui-2-8", title: "Semantics are secondary (Primary, Secondary, Tertiary actions)" }
                  ]
                },
                {
                  id: "m-rui-3",
                  title: "Chapter 3: Layout and Spacing",
                  lessons: [
                    { id: "l-rui-3-1", title: "Start with too much white space" },
                    { id: "l-rui-3-2", title: "Establish a spacing and sizing system" },
                    { id: "l-rui-3-3", title: "You don’t have to fill the whole screen" },
                    { id: "l-rui-3-4", title: "Grids are overrated" },
                    { id: "l-rui-3-5", title: "Relative sizing doesn’t scale" },
                    { id: "l-rui-3-6", title: "Avoid ambiguous spacing" }
                  ]
                },
                {
                  id: "m-rui-4",
                  title: "Chapter 4: Designing Text",
                  lessons: [
                    { id: "l-rui-4-1", title: "Establish a type scale" },
                    { id: "l-rui-4-2", title: "Use good fonts" },
                    { id: "l-rui-4-3", title: "Keep your line length in check (45–75ch)" },
                    { id: "l-rui-4-4", title: "Baseline, not center" },
                    { id: "l-rui-4-5", title: "Line-height is proportional" },
                    { id: "l-rui-4-6", title: "Not every link needs a color" },
                    { id: "l-rui-4-7", title: "Align with readability in mind & use letter-spacing effectively" }
                  ]
                },
                {
                  id: "m-rui-5",
                  title: "Chapter 5: Working with Color",
                  lessons: [
                    { id: "l-rui-5-1", title: "Ditch hex for HSL" },
                    { id: "l-rui-5-2", title: "You need more colors than you think (9-step shade scales)" },
                    { id: "l-rui-5-3", title: "Define your shades up front" },
                    { id: "l-rui-5-4", title: "Don’t let lightness kill your saturation" },
                    { id: "l-rui-5-5", title: "Greys don’t have to be grey" },
                    { id: "l-rui-5-6", title: "Accessible doesn’t have to mean ugly & don’t rely on color alone" }
                  ]
                },
                {
                  id: "m-rui-6",
                  title: "Chapter 6: Creating Depth",
                  lessons: [
                    { id: "l-rui-6-1", title: "Emulate a light source" },
                    { id: "l-rui-6-2", title: "Use shadows to convey elevation" },
                    { id: "l-rui-6-3", title: "Shadows can have two parts" },
                    { id: "l-rui-6-4", title: "Even flat designs can have depth & overlap elements to create layers" }
                  ]
                },
                {
                  id: "m-rui-7",
                  title: "Chapter 7: Working with Images",
                  lessons: [
                    { id: "l-rui-7-1", title: "Use good photos" },
                    { id: "l-rui-7-2", title: "Text needs consistent contrast" },
                    { id: "l-rui-7-3", title: "Everything has an intended size & beware user-uploaded content" }
                  ]
                },
                {
                  id: "m-rui-8",
                  title: "Chapter 8: Finishing Touches",
                  lessons: [
                    { id: "l-rui-8-1", title: "Supercharge the defaults" },
                    { id: "l-rui-8-2", title: "Add color with accent borders" },
                    { id: "l-rui-8-3", title: "Decorate your backgrounds" },
                    { id: "l-rui-8-4", title: "Don’t overlook empty states" },
                    { id: "l-rui-8-5", title: "Use fewer borders & think outside the box" }
                  ]
                }
              ]
            },
            {
              id: "c-practical-ui",
              title: "Practical UI (book)",
              url: "https://www.practical-ui.com/",
              modules: [
                {
                  id: "m-pui-1",
                  title: "Chapters 1–4: Fundamentals, Less is More, Color, Layout & Spacing",
                  lessons: [
                    { id: "l-pui-1-1", title: "Chapter 1: Fundamentals — Usability first and minimizing cognitive load" },
                    { id: "l-pui-1-2", title: "Chapter 2: Less is More — Removing visual noise and progressive disclosure" },
                    { id: "l-pui-1-3", title: "Chapter 3: Color — HSB system, 60-30-10 rule, WCAG contrast ratios, dark mode" },
                    { id: "l-pui-1-4", title: "Chapter 4: Layout and Spacing — 8pt grid, 12-column layout, Gestalt proximity" }
                  ]
                },
                {
                  id: "m-pui-2",
                  title: "Chapters 5–8: Typography, Copywriting, Buttons & Forms",
                  lessons: [
                    { id: "l-pui-2-1", title: "Chapter 5: Typography — Type scale, line length, tracking, and hierarchy" },
                    { id: "l-pui-2-2", title: "Chapter 6: Copywriting — Concise microcopy, active voice, front-loading keywords" },
                    { id: "l-pui-2-3", title: "Chapter 7: Buttons — Primary/Secondary/Tertiary hierarchy and 48px touch targets" },
                    { id: "l-pui-2-4", title: "Chapter 8: Forms — Single-column layout, top labels, inline validation, minimal fields" }
                  ]
                }
              ]
            },
            {
              id: "c-figma-beginners",
              title: "Figma Design for Beginners — help.figma.com",
              url: "https://help.figma.com/hc/en-us/sections/4405269443991-Figma-design-for-beginners",
              modules: [
                {
                  id: "m-fig-1",
                  title: "Modules 1–2: Canvas, Frames & Auto Layout",
                  lessons: [
                    { id: "l-fig-1-1", title: "Frames vs Groups, shapes, images, masks, and text layers" },
                    { id: "l-fig-1-2", title: "Auto Layout (Shift+A): direction, padding, gap, Hug vs Fill container" },
                    { id: "l-fig-1-3", title: "Nesting Auto Layout frames for navbars, heroes, and cards" },
                    { id: "l-fig-1-4", title: "12-column desktop and 4-column mobile layout grids" }
                  ]
                },
                {
                  id: "m-fig-2",
                  title: "Modules 3–4: Styles, Components & Dev Handoff",
                  lessons: [
                    { id: "l-fig-2-1", title: "Color styles, text styles, and local spacing/color variables" },
                    { id: "l-fig-2-2", title: "Components, variants, and reusable UI blocks" },
                    { id: "l-fig-2-3", title: "Exporting SVG/WebP assets and translating Auto Layout to CSS" }
                  ]
                }
              ]
            },
            {
              id: "c-laws-of-ux",
              title: "Laws of UX — lawsofux.com",
              url: "https://lawsofux.com/",
              modules: [
                {
                  id: "m-lux-1",
                  title: "Heuristics & Cognitive Load",
                  lessons: [
                    { id: "l-lux-1-1", title: "Jakob’s Law & Aesthetic-Usability Effect" },
                    { id: "l-lux-1-2", title: "Von Restorff Effect (Isolation) & Serial Position Effect" },
                    { id: "l-lux-1-3", title: "Hick’s Law, Miller’s Law, and Tesler’s Law" }
                  ]
                },
                {
                  id: "m-lux-2",
                  title: "Gestalt Grouping & Interaction Laws",
                  lessons: [
                    { id: "l-lux-2-1", title: "Law of Proximity, Common Region, Similarity, and Prägnanz" },
                    { id: "l-lux-2-2", title: "Fitts’s Law (CTA touch targets), Doherty Threshold (<400ms), Peak-End Rule" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "Project",
          items: [
            { id: "p2-proj-clinic", title: "3 Figma homepages for real local businesses — 1. Clinic" },
            { id: "p2-proj-restaurant", title: "3 Figma homepages for real local businesses — 2. Restaurant" },
            { id: "p2-proj-gym", title: "3 Figma homepages for real local businesses — 3. Gym" }
          ]
        }
      ]
    },

    {
      id: "phase-3",
      index: "03",
      title: "Phase 3: Pro Website Stack",
      timing: "Weeks 8–14",
      meta: "Locked · Weeks 8–14",
      sections: [
        {
          heading: "Resources",
          items: [
            {
              id: "c-astro",
              title: "Astro — official tutorial, docs.astro.build",
              url: "https://docs.astro.build/en/tutorial/0-introduction/",
              modules: [
                {
                  id: "m-ast-1",
                  title: "Units 0–2: Setup, File Routing & .astro Components",
                  lessons: [
                    { id: "l-ast-1-1", title: "Unit 0 & 1: Zero-JS architecture, npm create astro@latest, and src/pages routing" },
                    { id: "l-ast-1-2", title: "Unit 2: Frontmatter fences (---), dynamic expressions, and scoped <style>" }
                  ]
                },
                {
                  id: "m-ast-2",
                  title: "Units 3–6: Components, Layouts, Collections & Optimization",
                  lessons: [
                    { id: "l-ast-2-1", title: "Unit 3 & 4: Reusable components (Astro.props) and BaseLayout.astro (<slot />)" },
                    { id: "l-ast-2-2", title: "Unit 5: Content Collections and dynamic routes (getStaticPaths)" },
                    { id: "l-ast-2-3", title: "Unit 6: <Image /> asset optimization, client scripts, and Lighthouse 90+ checklist" }
                  ]
                }
              ]
            },
            {
              id: "c-tailwind",
              title: "Tailwind CSS — tailwindcss.com/docs",
              url: "https://tailwindcss.com/docs",
              modules: [
                {
                  id: "m-tw-1",
                  title: "Core Workflow, Theme Tokens & Layout",
                  lessons: [
                    { id: "l-tw-1-1", title: "Utility-first workflow, hover/focus states, and mobile-first breakpoints (sm, md, lg, xl)" },
                    { id: "l-tw-1-2", title: "Custom theme configuration (@theme: brand colors, font families, spacing scale)" },
                    { id: "l-tw-1-3", title: "Flexbox, Grid, container constraints, and RTL/LTR logical utilities" }
                  ]
                }
              ]
            },
            {
              id: "c-gsap",
              title: "GSAP + ScrollTrigger — gsap.com",
              url: "https://gsap.com/resources/get-started/",
              modules: [
                {
                  id: "m-gsap-1",
                  title: "Tweens, Timelines & ScrollTrigger",
                  lessons: [
                    { id: "l-gsap-1-1", title: "GSAP Core: gsap.to, gsap.from, gsap.fromTo, easing, and staggers" },
                    { id: "l-gsap-1-2", title: "Sequencing reveals with gsap.timeline() and position parameters" },
                    { id: "l-gsap-1-3", title: "ScrollTrigger: trigger, start/end thresholds, scrub, pin, and gsap.matchMedia()" }
                  ]
                }
              ]
            },
            {
              id: "c-deploy-ops",
              title: "Deploy: Netlify or Vercel · Formspree forms · Namecheap domains (client pays)",
              url: "https://formspree.io/",
              modules: [
                {
                  id: "m-dep-1",
                  title: "Hosting, Forms & Custom Domains",
                  lessons: [
                    { id: "l-dep-1-1", title: "Git continuous deployment to Netlify or Vercel with preview URLs" },
                    { id: "l-dep-1-2", title: "Formspree form submission, spam honeypot, and WhatsApp click-to-chat fallback" },
                    { id: "l-dep-1-3", title: "Namecheap domain purchase (on client account) and DNS A/CNAME setup" }
                  ]
                }
              ]
            },
            {
              id: "c-adv-css",
              title: "Advanced CSS: joshwcomeau.com articles + Kevin Powell’s YouTube",
              url: "https://www.joshwcomeau.com/css/",
              modules: [
                {
                  id: "m-acss-1",
                  title: "Core Interactive Guides & Modern CSS",
                  lessons: [
                    { id: "l-acss-1-1", title: "Josh Comeau: Interactive Guide to Flexbox & Interactive Guide to CSS Grid" },
                    { id: "l-acss-1-2", title: "Josh Comeau: Designing Beautiful Shadows, Gradients, Stacking Contexts, and Transitions" },
                    { id: "l-acss-1-3", title: "Kevin Powell: Fluid clamp() typography, CSS Subgrid, and :has() selector" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "Project",
          items: [
            { id: "p3-proj-1", title: "Turn the 3 designs into live sites — Lighthouse 90+ (1. Clinic)" },
            { id: "p3-proj-2", title: "Turn the 3 designs into live sites — Lighthouse 90+ (2. Restaurant)" },
            { id: "p3-proj-3", title: "Turn the 3 designs into live sites — Lighthouse 90+ (3. Gym)" }
          ]
        }
      ]
    },

    {
      id: "phase-4",
      index: "04",
      title: "Phase 4: A Site That Sells",
      timing: "Weeks 10–14",
      meta: "Locked · Weeks 10–14",
      sections: [
        {
          heading: "Resources",
          items: [
            {
              id: "c-storybrand",
              title: "Copywriting: Building a StoryBrand (book)",
              url: "https://storybrand.com/",
              modules: [
                {
                  id: "m-sb-1",
                  title: "The StoryBrand 7-Part Framework (SB7) & Website Wireframe",
                  lessons: [
                    { id: "l-sb-1-1", title: "Part 1: Clarity over cleverness & the 5-second Hero Grunt Test" },
                    { id: "l-sb-1-2", title: "Principles 1–3: A Character (customer) + Has a Problem + Meets a Guide (Empathy & Authority)" },
                    { id: "l-sb-1-3", title: "Principles 4–7: Gives Them a 3-Step Plan + Calls Them to Action + Avoids Failure & Ends in Success" },
                    { id: "l-sb-1-4", title: "Part 3: The StoryBrand Homepage Wireframe (Above the fold, Value stack, One-liner)" }
                  ]
                }
              ]
            },
            {
              id: "c-google-seo",
              title: "Google SEO Starter Guide — developers.google.com/search",
              url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
              modules: [
                {
                  id: "m-gseo-1",
                  title: "Search Central Fundamentals",
                  lessons: [
                    { id: "l-gseo-1-1", title: "How Google crawls, indexes, and serves pages + Search Console & sitemap.xml" },
                    { id: "l-gseo-1-2", title: "High-intent <title> tags, <meta name='description'>, and semantic heading hierarchy" },
                    { id: "l-gseo-1-3", title: "Descriptive image alt attributes, Core Web Vitals, and structured data" }
                  ]
                }
              ]
            },
            {
              id: "c-moz-seo",
              title: "Moz Beginner’s Guide to SEO — moz.com",
              url: "https://moz.com/beginners-guide-to-seo",
              modules: [
                {
                  id: "m-moz-1",
                  title: "Chapters 1–7",
                  lessons: [
                    { id: "l-moz-1-1", title: "Chapters 1–2: How search engines work & local/transactional Keyword Research" },
                    { id: "l-moz-1-2", title: "Chapters 3–4: On-Site Optimization (service/area pages) & Technical SEO" },
                    { id: "l-moz-1-3", title: "Chapters 5–7: Local citations/authority, Measuring SEO in Search Console, SEO Glossary" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "Local SEO Checklist (every client)",
          items: [
            { id: "p4-chk-gbp", title: "Google Business Profile" },
            { id: "p4-chk-schema", title: "LocalBusiness Schema" },
            { id: "p4-chk-wa-map", title: "WhatsApp Button + Map" }
          ]
        }
      ]
    },

    {
      id: "phase-5",
      index: "05",
      title: "Phase 5: Selling",
      timing: "From Week 12",
      meta: "Locked · From week 12",
      packagesTable: [
        { tier: "Basic", details: "One-page site for small shops" },
        { tier: "Standard", details: "Full site + SEO" },
        { tier: "Premium", details: "Motion + content + AI" }
      ],
      sections: [
        {
          heading: "Books",
          items: [
            {
              id: "c-hormozi",
              title: "$100M Offers — Alex Hormozi",
              url: "https://www.acquisition.com/books",
              modules: [
                {
                  id: "m-hor-1",
                  title: "Sections 1–5: Grand Slam Offer Architecture",
                  lessons: [
                    { id: "l-hor-1-1", title: "Section 1 & 2: Avoiding commodity pricing & finding a starving local market" },
                    { id: "l-hor-1-2", title: "Section 3: The Value Equation (Dream Outcome × Likelihood / Time Delay × Effort)" },
                    { id: "l-hor-1-3", title: "Section 4 & 5: Enhancing the offer (Scarcity, Urgency, Bonuses, Guarantees, Naming)" }
                  ]
                }
              ]
            },
            {
              id: "c-wwp",
              title: "The Win Without Pitching Manifesto — Blair Enns",
              url: "https://www.winwithoutpitching.com/the-manifesto/",
              modules: [
                {
                  id: "m-wwp-1",
                  title: "The 12 Proclamations",
                  lessons: [
                    { id: "l-wwp-1-1", title: "1–4: We Will Specialize, Replace Presentations with Conversations, Diagnose Before Prescribing, Rethink Selling" },
                    { id: "l-wwp-1-2", title: "5–8: Do Without Bad-Fit Clients, Refuse to Work at a Loss, Charge More for Value, Hold Our Heads High" },
                    { id: "l-wwp-1-3", title: "9–12: Be Selective, Manage Scope, Address Money Early, Walk Away When Needed" }
                  ]
                }
              ]
            }
          ]
        },
        {
          heading: "First 3 clients",
          items: [
            { id: "p5-c-1", title: "Visit shops in 10th of Ramadan or Zagazig with a ready design of their own site" },
            { id: "p5-c-2", title: "Low price in exchange for a testimonial + case study" },
            { id: "p5-c-3", title: "Portfolio site on my own domain" }
          ]
        }
      ]
    },

    {
      id: "phase-6",
      index: "06",
      title: "After Month 6",
      timing: "After month 6",
      meta: "Locked · After month 6",
      note: "When clients need booking or dashboards, this is where the road to Design Engineer and international clients begins.",
      sections: [
        {
          heading: "Courses",
          items: [
            {
              id: "c-react",
              title: "React — Scrimba Learn React (free)",
              url: "https://scrimba.com/learn/learnreact",
              modules: [
                {
                  id: "m-react-1",
                  title: "Modules 1–4: Modern React Curriculum",
                  lessons: [
                    { id: "l-react-1", title: "Module 1: Static Pages — JSX, custom components, and styling" },
                    { id: "l-react-2", title: "Module 2: Data-Driven React — Props, reusable components, and array .map()" },
                    { id: "l-react-3", title: "Module 3: Interactive React — useState, event listeners, forms, conditional rendering" },
                    { id: "l-react-4", title: "Module 4: Side Effects — useEffect, API fetching, controlled inputs, and capstones" }
                  ]
                }
              ]
            },
            {
              id: "c-nextjs",
              title: "Next.js — nextjs.org/learn",
              url: "https://nextjs.org/learn",
              modules: [
                {
                  id: "m-next-1",
                  title: "Chapters 1–16: App Router Full-Stack Course",
                  lessons: [
                    { id: "l-next-1", title: "Chapters 1–4: Setup, CSS styling, next/font & next/image, App Router layouts and pages" },
                    { id: "l-next-2", title: "Chapters 5–8: <Link> navigation, Postgres database setup, Server Components data fetching" },
                    { id: "l-next-3", title: "Chapters 9–12: Streaming with Suspense, URL search & pagination, Server Actions mutations" },
                    { id: "l-next-4", title: "Chapters 13–16: Error handling, accessibility, NextAuth authentication, and metadata" }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ],

  marketingTrack: {
    title: "Track: Marketing & Sales",
    why: "Why: marketing websites only sell if I understand marketing and sales as well as code and design. This is a full track, not tips.",
    when: "When: Starts after HTML/CSS is solid, then runs alongside Design.",
    method: "Method: same unit system. Read a part, close it, write from memory, then apply it to a real site.",
    stagesFlow: "1 Marketing Basics → 2 Messaging & Copy → 3 SEO & Local SEO → 4 Conversion & Analytics → 5 Sales → 6 Offers & Pricing",
    stages: [
      {
        id: "mt-1",
        title: "1. Marketing Basics",
        subtitle: "Target customer, positioning, funnel, channels.",
        items: [
          {
            id: "mt-1-hubspot",
            title: "HubSpot Academy: Inbound Marketing (free)",
            url: "https://academy.hubspot.com/courses/inbound-marketing",
            modules: [
              {
                id: "m-mt1-1",
                title: "Inbound Marketing Modules",
                lessons: [
                  { id: "l-mt1-1", title: "Module 1: Inbound Marketing Fundamentals & Buyer Personas" },
                  { id: "l-mt1-2", title: "Module 2: Mapping the Buyer’s Journey (Awareness, Consideration, Decision)" },
                  { id: "l-mt1-3", title: "Module 3: Content Strategy, Social Promotion & Conversational Growth" },
                  { id: "l-mt1-4", title: "Module 4: Conversion Optimization & Attribution" }
                ]
              }
            ]
          },
          {
            id: "mt-1-godin",
            title: "This Is Marketing — Seth Godin",
            modules: [
              {
                id: "m-mt1-2",
                title: "Core Chapters",
                lessons: [
                  { id: "l-mt1-5", title: "The Smallest Viable Market & 'People like us do things like this'" },
                  { id: "l-mt1-6", title: "Trust, tension, permission marketing, and funnel math" }
                ]
              }
            ]
          },
          {
            id: "mt-1-dunford",
            title: "Obviously Awesome — April Dunford",
            modules: [
              {
                id: "m-mt1-3",
                title: "The 10-Step Positioning Process",
                lessons: [
                  { id: "l-mt1-7", title: "Competitive alternatives, unique attributes, and concrete value" },
                  { id: "l-mt1-8", title: "Best-fit target customers, market category, and homepage translation" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "mt-2",
        title: "2. Messaging & Copy",
        subtitle: "How a page persuades a visitor.",
        items: [
          {
            id: "mt-2-storybrand",
            title: "Building a StoryBrand — Donald Miller",
            modules: [
              {
                id: "m-mt2-1",
                title: "Applied Website Copy Drills",
                lessons: [
                  { id: "l-mt2-1", title: "Above-the-fold 5-second test: Headline, Subheadline, Primary CTA" },
                  { id: "l-mt2-2", title: "Problem, Guide (Empathy + Authority), 3-Step Plan, and One-Liner" }
                ]
              }
            ]
          },
          {
            id: "mt-2-copyhackers",
            title: "Copyhackers (free articles)",
            url: "https://copyhackers.com/",
            modules: [
              {
                id: "m-mt2-2",
                title: "Conversion Copywriting Frameworks",
                lessons: [
                  { id: "l-mt2-3", title: "Voice-of-Customer (VoC) mining from customer reviews" },
                  { id: "l-mt2-4", title: "PAS (Problem-Agitation-Solution), headlines, and button click triggers" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "mt-3",
        title: "3. SEO & Local SEO",
        subtitle: "Search visibility and Google Maps ranking.",
        items: [
          { id: "mt-3-moz", title: "Moz Beginner’s Guide to SEO" },
          { id: "mt-3-gsc", title: "Google Search Central docs" },
          { id: "mt-3-gbp", title: "Google Business Profile" }
        ]
      },
      {
        id: "mt-4",
        title: "4. Conversion & Analytics",
        subtitle: "CTA, CRO, A/B testing, Google Analytics.",
        items: [
          {
            id: "mt-4-ga4",
            title: "Google Skillshop: GA4 (free)",
            modules: [
              {
                id: "m-mt4-1",
                title: "GA4 Modules",
                lessons: [
                  { id: "l-mt4-1", title: "Property setup, data streams, and Realtime/Acquisition reports" },
                  { id: "l-mt4-2", title: "Tracking custom Key Events (WhatsApp clicks & booking submissions)" }
                ]
              }
            ]
          },
          {
            id: "mt-4-krug",
            title: "Don’t Make Me Think — Steve Krug",
            modules: [
              {
                id: "m-mt4-2",
                title: "Usability Rules",
                lessons: [
                  { id: "l-mt4-3", title: "Self-evident pages, scanning vs reading, and omitting needless words" },
                  { id: "l-mt4-4", title: "The Trunk Test, mobile usability, and rapid usability testing" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "mt-5",
        title: "5. Sales",
        subtitle: "Leads, discovery calls, objections, negotiation.",
        items: [
          {
            id: "mt-5-hubspot",
            title: "HubSpot Academy: Inbound Sales (free)",
            modules: [
              {
                id: "m-mt5-1",
                title: "Inbound Sales Pipeline",
                lessons: [
                  { id: "l-mt5-1", title: "Identifying ideal local buyers & personalized outreach" },
                  { id: "l-mt5-2", title: "Running discovery calls & presenting tailored recommendations" }
                ]
              }
            ]
          },
          {
            id: "mt-5-spin",
            title: "SPIN Selling — Neil Rackham",
            modules: [
              {
                id: "m-mt5-2",
                title: "The 4 Question Stages",
                lessons: [
                  { id: "l-mt5-3", title: "Situation & Problem questions (uncovering current booking bottlenecks)" },
                  { id: "l-mt5-4", title: "Implication & Need-Payoff questions (quantifying the value of a fast site)" }
                ]
              }
            ]
          },
          {
            id: "mt-5-voss",
            title: "Never Split the Difference — Chris Voss",
            modules: [
              {
                id: "m-mt5-3",
                title: "Tactical Negotiation",
                lessons: [
                  { id: "l-mt5-5", title: "Tactical empathy, mirroring, labeling, and getting to 'That’s right'" },
                  { id: "l-mt5-6", title: "Calibrated 'How' and 'What' questions for pricing and scope boundaries" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "mt-6",
        title: "6. Offers & Pricing",
        subtitle: "Packages, value-based pricing.",
        items: [
          { id: "mt-6-hormozi", title: "$100M Offers — Alex Hormozi" },
          { id: "mt-6-enns", title: "Win Without Pitching Manifesto — Blair Enns" }
        ]
      }
    ]
  },

  studio: {
    title: "AHKH Studio: Services & Scope",
    rule: "Rule: one core service, add-ons sold separately, and a clear list of what I don’t do. Stay narrow, become the expert.",
    principle: "Principle: a request outside these limits gets a polite no or a referral. Review these limits every 6 months.",
    coreService: [
      "Design + development",
      "Mobile-first",
      "WhatsApp button",
      "Contact or booking form",
      "Basic SEO (speed, titles, map)"
    ],
    packages: [
      { tier: "Basic", what: "One-page site for small shops" },
      { tier: "Standard", what: "Full site + SEO" },
      { tier: "Premium", what: "Motion + content + AI" }
    ],
    addons: [
      { name: "Local SEO", includes: "Google Business Profile, area pages, monthly follow-up" },
      { name: "Copywriting", includes: "I write the site content instead of the client sending it" },
      { name: "Analytics", includes: "GA4 setup + monthly report" },
      { name: "Care plan", includes: "Hosting + small monthly edits" },
      { name: "Extra pages", includes: "More pages or a landing page for a campaign" },
      { name: "Later", includes: "Booking bot or auto-replies" }
    ],
    outOfScope: [
      "Full online stores",
      "Logins, dashboards, or complex backend",
      "Mobile apps",
      "Social media management and paid ads",
      "Full branding (logo and identity from scratch)",
      "Fixing old WordPress sites built by someone else"
    ],
    workingRules: [
      { id: "wr-1", title: "Fixed number of revision rounds (e.g. 2); extra rounds are paid" },
      { id: "wr-2", title: "Client sends content before work starts, or buys the Copywriting add-on" },
      { id: "wr-3", title: "Anything outside the agreement = a new quote" }
    ]
  }
};
