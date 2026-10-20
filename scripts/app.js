/**
 * Roadmap: Marketing Websites Freelancer — Horizontal Whiteboard Expedition
 * Tactile Sticky Notes · Distinct Physical Surfaces Per Phase · Connected Expedition Road
 * Zero AI Slop · Local-First Persistence · High-Signal Core Curricula
 */

(function () {
  'use strict';

  const DATA = window.ROADMAP_DATA;
  if (!DATA) {
    console.error('ROADMAP_DATA not found. Ensure data/roadmap-data.js is loaded.');
    return;
  }

  // --- WHITEBOARD TERRITORIES & STAGGERED STICKY NOTES ---
  const TERRITORIES = [
    // Territory 1: The Hacker Workshop (Chalkboard & Amber Phosphor)
    {
      id: 'phase-0-1',
      number: '01',
      tag: 'Web Craft',
      title: 'Web Foundations & Developer Mechanics',
      timing: 'Weeks 1–6 · 2–3h / day',
      objective: 'Master raw HTML5, modern CSS layouts (Flexbox & Grid), responsive typography, and fundamental DOM scripting without relying on visual abstractions or AI shortcuts.',
      colorAccent: '#F59E0B',
      attachment: 'tape',
      stickies: [
        {
          id: 'sn-html-css-scrimba',
          type: 'Core Course',
          title: 'Learn HTML & CSS (Scrimba)',
          author: 'Per Harald Borgen · 11 Hours',
          stagger: 'stagger-high',
          bullets: [
            'Semantic markup architecture without div soup',
            'Modern Flexbox navigation & fluid multi-column grids',
            'CSS cascade, specificity, and modular custom properties'
          ],
          deliverable: 'Google Search Clone & Responsive Business Card'
        },
        {
          id: 'sn-responsive-layouts',
          title: 'Conquering Responsive Layouts',
          author: 'Kevin Powell · 21-Day Masterclass',
          stagger: 'stagger-low',
          bullets: [
            'Fluid typography with clamp() and viewport units',
            'Intrinsic web design without brittle media queries',
            'Container queries and responsive image aspect ratios'
          ],
          deliverable: '3 Production Responsive Layout Benchmarks'
        },
        {
          id: 'sn-space-tourism-portal',
          title: 'Multi-Page Space Travel Website',
          author: 'Kevin Powell · Advanced Scrimba',
          stagger: 'stagger-capstone',
          bullets: [
            'Full Figma-to-code implementation across 4 pages',
            'Sub-navigation, tabbed data switching & slider states',
            'Accessible keyboard focus rings & mobile overlay drawer'
          ],
          deliverable: 'Production Multi-Page Space Tourism Portal'
        },
        {
          id: 'sn-js-dom-foundations',
          title: 'JavaScript DOM & Event Mechanics',
          author: 'Scrimba · DOM & Events Focus',
          stagger: 'stagger-high',
          bullets: [
            'DOM element selection, traversal, and event listeners',
            'Interactive modal dialogs, drawers, and accordions',
            'Client-side state persistence with localStorage'
          ],
          deliverable: 'Interactive Local Business Booking Widget'
        }
      ]
    },

    // Territory 2: The Architect Drafting Mat (Blueprint & Azure)
    {
      id: 'phase-2',
      number: '02',
      tag: 'Design Mastery',
      title: 'Design Systems & High-Conversion UI/UX',
      timing: 'Weeks 7–10 · 2–3h / day',
      objective: 'Design like an engineer: master visual hierarchy, typographic scale, white space, and design systems in Figma to produce agency-grade interfaces.',
      colorAccent: '#38BDF8',
      attachment: 'tape',
      stickies: [
        {
          id: 'sn-refactoring-ui',
          type: 'Visual Hierarchy',
          title: 'Refactoring UI',
          author: 'Adam Wathan & Steve Schoger · Definitive Book',
          stagger: 'stagger-low',
          bullets: [
            'Starting with hierarchy and content before adding color',
            '8pt spatial rhythm and deliberate elevation shadows',
            'Curated color palettes: primary, neutral, and accent tints'
          ],
          deliverable: 'Complete Local Business UI Design System'
        },
        {
          id: 'sn-practical-ui',
          type: 'Design Mechanics',
          title: 'Practical UI',
          author: 'Adham Dannaway · Logic-Driven Design',
          stagger: 'stagger-high',
          bullets: [
            'Mathematical spacing guidelines and visual balance',
            'High-contrast accessible text pairings (WCAG AA)',
            'Actionable button states, form inputs, and validation UI'
          ],
          deliverable: 'Conversion-Optimized Checkout & Lead Form'
        },
        {
          id: 'sn-figma-mastery',
          type: 'CAD Tooling',
          title: 'Figma Auto-Layout & Design Tokens',
          author: 'Figma Official Certification Track',
          stagger: 'stagger-low',
          bullets: [
            'Nested Auto-Layout frames mirroring CSS Flexbox',
            'Design token variables for typography, spacing, and hues',
            'Responsive component variants and prototype flows'
          ],
          deliverable: 'Full Responsive Design System Artboard'
        },
        {
          id: 'sn-figma-homepages-capstone',
          type: 'Capstone Project',
          title: '3 Bespoke Figma Local Homepages',
          author: 'Clinic · Restaurant · Gym',
          stagger: 'stagger-capstone',
          bullets: [
            'Medical Clinic: high-trust aesthetic with doctor profiles',
            'Restaurant: sensory typography with menu highlight grid',
            'Fitness Gym: high-energy membership lead generation'
          ],
          deliverable: '3 Production Figma Desktop & Mobile Mockups'
        }
      ]
    },

    // Territory 3: The Velocity Engine (Carbon & Laser Mint)
    {
      id: 'phase-3',
      number: '03',
      tag: 'Stack Velocity',
      title: 'Modern Production Stack: Astro, Tailwind & Edge',
      timing: 'Weeks 11–14 · 2–3h / day',
      objective: 'Build ultra-fast, zero-bloat marketing sites using Astro Islands, Tailwind CSS v4, and modern headless deployment with guaranteed 95+ Lighthouse scores.',
      colorAccent: '#10B981',
      attachment: 'tape',
      stickies: [
        {
          id: 'sn-astro-mastery',
          type: 'Core Framework',
          title: 'Astro 5 Architecture & Content Collections',
          author: 'Astro Core Team · Official Masterclass',
          stagger: 'stagger-high',
          bullets: [
            'Zero-JS by default with island hydration on demand',
            'Content Collections with strict Zod type validation',
            'Dynamic page routing and markdown publishing workflows'
          ],
          deliverable: 'Sub-50ms Multi-Page Local Business Architecture'
        },
        {
          id: 'sn-tailwind-v4',
          type: 'Utility Engine',
          title: 'Tailwind CSS v4 Production Engineering',
          author: 'Tailwind Labs · Modern Engine',
          stagger: 'stagger-low',
          bullets: [
            'Modern CSS-first theme configuration with @theme',
            'Container queries and fluid typography plugins',
            'Purged zero-runtime production stylesheets under 10KB'
          ],
          deliverable: 'Reusable Component Library (Navbar, Hero, Grid, FAQ)'
        },
        {
          id: 'sn-lighthouse-audit-capstone',
          type: 'Performance Capstone',
          title: '3 Live Sites with Lighthouse 95+ Scores',
          author: 'Production Benchmark Audit',
          stagger: 'stagger-capstone',
          bullets: [
            'Cloudflare Pages Anycast edge distribution with instant SSL',
            'Serverless form handling via Web3Forms & Formspree',
            'Automated OpenGraph card generation & 100/100 SEO audit'
          ],
          deliverable: '3 Live Published Domains Audited by Lighthouse'
        }
      ]
    },

    // Territory 4: The Kinetic Workshop (Amethyst Felt & Pinboard)
    {
      id: 'phase-4',
      number: '04',
      tag: 'Kinetic Lab',
      title: 'Creative Interaction, Motion & Conversion',
      timing: 'Weeks 15–18 · 2–3h / day',
      objective: 'Elevate ordinary static websites into world-class interactive experiences with smooth GSAP animations, tactile micro-interactions, and high-conversion copy.',
      colorAccent: '#A855F7',
      attachment: 'pin',
      stickies: [
        {
          id: 'sn-gsap-motion',
          type: 'Motion Engine',
          title: 'GSAP 3 & ScrollTrigger Systems',
          author: 'GreenSock · Creative Interaction',
          stagger: 'stagger-high',
          bullets: [
            'Performant scroll-linked timelines with batch rendering',
            'Custom easing curves: cubic-bezier and spring physics',
            'Subtle hover magnetic effects and reveal choreography'
          ],
          deliverable: 'Award-Level Landing Page Scroll Choreography'
        },
        {
          id: 'sn-storybrand-copy',
          type: 'Conversion Strategy',
          title: 'Building a StoryBrand Copywriting',
          author: 'Donald Miller · Customer-Centric Story',
          stagger: 'stagger-low',
          bullets: [
            'The 7-part narrative framework: making the client the hero',
            'Clear above-the-fold value propositions that pass the grunt test',
            'Eliminating industry jargon and crafting irresistible CTAs'
          ],
          deliverable: 'Conversion Wireframe with Complete Real Copy'
        },
        {
          id: 'sn-portfolio-domain-capstone',
          type: 'Flagship Deliverable',
          title: 'Studio Portfolio Live on Custom Domain',
          author: 'AHKH Studio Master Launch',
          stagger: 'stagger-capstone',
          bullets: [
            'Own domain, sub-second global load times, and custom branding',
            'Interactive case studies showcasing clinic, cafe, and gym sites',
            'Integrated client intake booking workflow & WhatsApp hotline'
          ],
          deliverable: 'Live Production Studio Portfolio on Custom Domain'
        }
      ]
    },

    // Territory 5: The Editorial Atelier (Archival Linen & Fine Walnut)
    {
      id: 'phase-5',
      number: '05',
      tag: 'Editorial Atelier',
      title: 'Haute Typographie & Commercial Acumen',
      timing: 'Weeks 19–22 · 2–3h / day',
      objective: 'Craft boutique editorial experiences with classical typography, bespoke layout grids, and elite client positioning that commands premium pricing.',
      colorAccent: '#D4AF37',
      attachment: 'clip',
      stickies: [
        {
          id: 'sn-100m-offers',
          type: 'Commercial Offering',
          title: '$100M Offers: Grand Slam Packaging',
          author: 'Alex Hormozi · Value Frameworks',
          stagger: 'stagger-high',
          bullets: [
            'The Value Equation: Dream Outcome vs Time Delay & Effort',
            'Bespoke service packaging: Website + Local SEO + Maintenance',
            'Irresistible risk reversals and unconditional satisfaction guarantees'
          ],
          deliverable: 'The $3,000–$5,000 Grand Slam Local Business Offer'
        },
        {
          id: 'sn-win-without-pitching',
          type: 'Agency Mindset',
          title: 'The Win Without Pitching Manifesto',
          author: 'Blair Enns · Advisory Consulting',
          stagger: 'stagger-low',
          bullets: [
            'The 12 Proclamations: replacing competitive bidding with expert diagnostic',
            'Price the client, not the job; diagnostic conversation protocols',
            'Refusing free conceptual work and commanding respect as an advisor'
          ],
          deliverable: 'Diagnostic Client Intake & Proposal Master Template'
        },
        {
          id: 'sn-first-paying-client-capstone',
          type: 'Commercial Milestone',
          title: 'First Paying Client Onboarded & Deployed',
          author: 'Milestone Execution ~ Month 3',
          stagger: 'stagger-capstone',
          bullets: [
            'Outbound Loom video audits targeting local business deficiencies',
            'Closed signed contract with 50% upfront deposit received',
            'Production deployment, domain setup, and Google Business integration'
          ],
          deliverable: 'First Commercial Invoice Paid & Client Case Study'
        }
      ]
    },

    // Territory 6: The Telemetry Vault (Industrial Steel Rack)
    {
      id: 'phase-6',
      number: '06',
      tag: 'Telemetry Vault',
      title: 'Infrastructure Telemetry, Local SEO & Retainers',
      timing: 'Post Month 6 · Continuous Operations',
      objective: 'Scale into a sovereign agency: automate hosting retainers, dominate local Google 3-pack rankings, and deliver enterprise-grade performance telemetry.',
      colorAccent: '#F97316',
      attachment: 'pin',
      stickies: [
        {
          id: 'sn-local-seo-domination',
          type: 'Organic Traffic',
          title: 'Local SEO & Schema.org Architecture',
          author: 'Google & Moz Official Standards',
          stagger: 'stagger-high',
          bullets: [
            'JSON-LD Structured Data: LocalBusiness, MedicalClinic, Restaurant',
            'Google Business Profile optimization and review generation funnel',
            'Targeted geo-landing pages and local citation consistency'
          ],
          deliverable: 'Rank #1 in Google Local 3-Pack for Client Services'
        },
        {
          id: 'sn-care-plans-retainers-capstone',
          type: 'Recurring Revenue',
          title: 'Monthly Recurring Care Plans & Infrastructure',
          author: 'SaaS Agency Operations',
          stagger: 'stagger-capstone',
          bullets: [
            'Managed Cloudflare edge caching, SSL, and uptime alerting',
            'Automated weekly backups and monthly analytics PDF digests',
            '$150–$300/mo care plans generating predictable recurring cash flow'
          ],
          deliverable: '10 Active Client Maintenance Contracts ($2k+/mo MRR)'
        }
      ]
    },

    // Territory 7: The Deal Room (Banker's Green Felt Table)
    {
      id: 'marketing-sales',
      number: '07',
      tag: 'Deal Room',
      title: 'The Deal Room: Cold Acquisition & Negotiations',
      timing: 'Companion Track · Runs Alongside Build',
      objective: 'The client acquisition engine: high-value Loom audits, diagnostic sales conversations, value-based pricing, and closing without competing.',
      colorAccent: '#EAB308',
      attachment: 'clip',
      stickies: [
        {
          id: 'sn-niche-selection',
          type: 'Market Strategy',
          title: 'Niche Selection & Moat Architecture',
          author: 'Commercial Acquisition',
          stagger: 'stagger-high',
          bullets: [
            'Targeting high ticket local businesses: Dental, Solar, High-End Cafes',
            'Auditing competitors in Google Maps to spot outdated sites',
            'Developing domain-specific vocabulary and authority'
          ],
          deliverable: 'List of 50 Vetted Local Prospects with Direct Contacts'
        },
        {
          id: 'sn-loom-audit-engine',
          type: 'Cold Outreach',
          title: 'The 3-Minute Loom Video Audit Funnel',
          author: 'Outbound Engine',
          stagger: 'stagger-low',
          bullets: [
            'Screen-recording mobile flaws, slow load times, and missing CTAs',
            'Presenting the live redesigned mockup before asking for anything',
            'Sending personalized cold emails with 30%+ response rates'
          ],
          deliverable: '10 Recorded Video Audits Dispatched Weekly'
        },
        {
          id: 'sn-diagnostic-closing-capstone',
          type: 'Negotiation',
          title: 'The Diagnostic Sales & Proposal Closing',
          author: 'Blair Enns / Hormozi Systems',
          stagger: 'stagger-capstone',
          bullets: [
            'Uncovering client business goals: average customer lifetime value',
            'Presenting 3 option tiers so the choice is which, not whether',
            'Contract templates with strict scope boundaries and payment schedules'
          ],
          deliverable: 'Standardized Proposal & Client Agreement Package'
        }
      ]
    },

    // Territory 8: Studio Command (Aerospace Glassboard)
    {
      id: 'studio-playbook',
      number: '08',
      tag: 'Studio Command',
      title: 'AHKH Studio Operating System & Playbook',
      timing: 'Permanent Governance · Standing Rules',
      objective: 'The founder operating system: strict scope boundaries, standard delivery SLA timelines, non-negotiable contract guardrails, and three-tier pricing.',
      colorAccent: '#06B6D4',
      attachment: 'pin',
      stickies: [
        {
          id: 'sn-core-service-scope',
          type: 'Operating Rules',
          title: 'Core Service Standard & Scope Firewall',
          author: 'Studio Architecture',
          stagger: 'stagger-high',
          bullets: [
            'Core offering: Fast marketing website + Local SEO + WhatsApp CTA',
            'Strictly out of scope: complex eCommerce, mobile apps, custom auth',
            'Saying no with confidence to protect speed and profit margins'
          ],
          deliverable: 'Strictly Enforced Studio Scope Boundary Document'
        },
        {
          id: 'sn-delivery-timeline-sla',
          type: 'Production Cadence',
          title: 'The 5-Day Sprint Delivery Protocol',
          author: 'SLA Timeline',
          stagger: 'stagger-low',
          bullets: [
            'Day 1: Wireframe & Copy approval · Day 3: Full interactive build',
            'Day 4: Mobile audit & form testing · Day 5: DNS propagation & launch',
            'Two revision rounds included; additional requests billed hourly'
          ],
          deliverable: 'Standard Operating Procedure (SOP) Checklist'
        },
        {
          id: 'sn-packages-addons-capstone',
          type: 'Pricing Structure',
          title: 'Three-Tier Pricing & High-Margin Add-Ons',
          author: 'Agency Economics',
          stagger: 'stagger-capstone',
          bullets: [
            'Basic ($1,500): 1-Page fast site · Standard ($3,000): Full site + Local SEO',
            'Premium ($5,000): StoryBrand copy + GSAP motion + CRM integration',
            'High-margin add-ons: Care Plans ($200/mo), Copywriting, GA4 Setup'
          ],
          deliverable: 'Published Client Rate Card & Add-On Catalog'
        }
      ]
    }
  ];

  // Total stickies count across the whole whiteboard
  function getAllStickies() {
    const list = [];
    TERRITORIES.forEach((t) => {
      (t.stickies || []).forEach((s) => {
        list.push({ ...s, territoryId: t.id });
      });
    });
    return list;
  }

  const ALL_STICKIES = getAllStickies();
  const TOTAL_STICKIES = ALL_STICKIES.length;

  // --- STATE ---
  const state = {
    completed: new Set(),
    filter: 'all', // 'all' | 'incomplete' | 'completed'
    searchQuery: '',
    searchMatches: [],
    searchMatchIndex: 0,
    overviewMode: false,
    milestonesOpen: false,
    theme: 'dark'
  };

  const STORAGE_KEY = DATA.storageKey || 'ahkh_roadmap_v2';

  // --- STORAGE ---
  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.completed)) {
          state.completed = new Set(parsed.completed);
        }
      }
      const savedTheme = localStorage.getItem('ahkh_theme');
      if (savedTheme) {
        state.theme = savedTheme;
      }
    } catch (e) {
      console.warn('Failed to load roadmap localStorage state:', e);
    }
  }

  function saveState() {
    try {
      const payload = {
        completed: Array.from(state.completed),
        updatedAt: new Date().toISOString()
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      localStorage.setItem('ahkh_theme', state.theme);
    } catch (e) {
      console.warn('Failed to save roadmap state:', e);
    }
  }

  // --- DOM REFERENCES ---
  const dom = {
    html: document.documentElement,
    topProgressFill: document.getElementById('top-progress-fill'),
    whiteboardViewport: document.getElementById('whiteboard-viewport'),
    whiteboardCanvas: document.getElementById('whiteboard-canvas'),
    whiteboardStrip: document.getElementById('whiteboard-strip'),
    trailBasePath: document.getElementById('trail-base-path'),
    trailActivePath: document.getElementById('trail-active-path'),
    globalStatReadout: document.getElementById('global-stat-readout'),
    globalStatPercent: document.getElementById('global-stat-percent'),
    searchInput: document.getElementById('roadmap-search-input'),
    searchMatchesCount: document.getElementById('search-matches-count'),
    filterChips: document.querySelectorAll('.filter-chip'),
    countFilterAll: document.getElementById('count-filter-all'),
    countFilterIncomplete: document.getElementById('count-filter-incomplete'),
    countFilterCompleted: document.getElementById('count-filter-completed'),
    btnToggleOverview: document.getElementById('btn-toggle-overview'),
    overviewLabel: document.getElementById('overview-label'),
    btnMilestonesDrawer: document.getElementById('btn-milestones-drawer'),
    milestonesPanel: document.getElementById('milestones-panel'),
    milestonesList: document.getElementById('milestones-list'),
    principlesList: document.getElementById('principles-list'),
    btnTheme: document.getElementById('btn-theme'),
    btnResetData: document.getElementById('btn-reset-data'),
    btnPrevZone: document.getElementById('btn-prev-zone'),
    btnNextZone: document.getElementById('btn-next-zone'),
    minimapContainer: document.getElementById('minimap-container'),
    minimapTrack: document.getElementById('minimap-track'),
    minimapLens: document.getElementById('minimap-lens'),
    chronosDate: document.getElementById('chronos-date'),
    chronosCadence: document.getElementById('chronos-cadence')
  };

  // --- LIVE CHRONOS ---
  function updateChronos() {
    const now = new Date();
    const options = { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' };
    const dateStr = now.toLocaleDateString('en-GB', options);
    const hour = now.getHours();
    let cadence = 'Deep Focus';
    if (hour >= 5 && hour < 12) cadence = 'Morning Build';
    else if (hour >= 12 && hour < 17) cadence = 'Afternoon Velocity';
    else if (hour >= 17 && hour < 22) cadence = 'Evening Focus';
    else cadence = 'Night Architect';

    if (dom.chronosDate) dom.chronosDate.textContent = dateStr;
    if (dom.chronosCadence) dom.chronosCadence.textContent = cadence;
  }

  // --- GET TACTILE ATTACHMENT HTML ---
  function getAttachmentHTML(type) {
    if (type === 'tape') {
      return `<div class="sticky-attachment attachment-tape" aria-hidden="true"></div>`;
    } else if (type === 'clip') {
      return `<div class="sticky-attachment attachment-clip" aria-hidden="true"></div>`;
    } else {
      return `<div class="sticky-attachment attachment-pin" aria-hidden="true"></div>`;
    }
  }

  // --- RENDER CONTINUOUS WHITEBOARD ---
  function renderContinuousWhiteboard() {
    if (!dom.whiteboardStrip) return;
    dom.whiteboardStrip.innerHTML = '';

    // 1. Origin Expedition Monument
    const originEl = document.createElement('div');
    originEl.className = 'origin-monument';
    originEl.id = 'monument-origin';
    originEl.innerHTML = `
      <svg class="origin-compass-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12,4 15,12 12,20 9,12"></polygon>
      </svg>
      <div class="origin-tag">Base Camp Origin</div>
      <h1 class="origin-title">Web Foundations &amp; Developer Mechanics</h1>
      <p class="origin-desc">Follow the winding pinboard trail. Every sticky note represents an indispensable course, canonical book, or architectural milestone.</p>
      <button type="button" class="origin-start-btn" id="btn-journey-start">Commence Expedition &rarr;</button>
    `;
    dom.whiteboardStrip.appendChild(originEl);

    // 2. Render each of the 8 Territories
    TERRITORIES.forEach((terr, terrIdx) => {
      const terrEl = document.createElement('section');
      terrEl.className = 'board-territory';
      terrEl.dataset.territory = terr.id;
      terrEl.id = `territory-${terr.id}`;

      const stickies = terr.stickies || [];
      const terrTotal = stickies.length;

      // Territory Signboard
      const signEl = document.createElement('div');
      signEl.className = 'territory-sign';
      signEl.innerHTML = `
        <div class="sign-top">
          <div class="sign-phase-tag">
            <span>${terr.number ? `Phase ${terr.number}` : 'Track'}</span>
            <span aria-hidden="true">&middot;</span>
            <span>${terr.timing || 'Continuous'}</span>
          </div>
          <h2 class="sign-title">${terr.title}</h2>
          <p class="sign-objective">${terr.objective}</p>
        </div>

        <div class="sign-bottom">
          <div class="sign-stat-row">
            <span class="sign-stat-label">Milestones</span>
            <span class="sign-stat-readout" id="terr-stat-${terr.id}">0 / ${terrTotal} (0%)</span>
          </div>
          <div class="sign-progress-track">
            <div class="sign-progress-fill" id="terr-fill-${terr.id}"></div>
          </div>
        </div>
      `;
      terrEl.appendChild(signEl);

      // Winding Trail of Sticky Notes
      const trailEl = document.createElement('div');
      trailEl.className = 'stickies-trail';

      stickies.forEach((sticky) => {
        const isCompleted = state.completed.has(sticky.id);
        const noteEl = document.createElement('article');
        noteEl.className = `sticky-note ${sticky.stagger || 'stagger-center'} ${isCompleted ? 'is-completed' : ''}`;
        noteEl.id = `note-${sticky.id}`;
        noteEl.dataset.stickyId = sticky.id;
        noteEl.dataset.territoryId = terr.id;

        noteEl.innerHTML = `
          ${getAttachmentHTML(terr.attachment)}
          <span class="completed-watermark">MASTERED</span>

          <header class="sticky-header">
            <span class="sticky-type-stamp">${sticky.type || 'Pillar'}</span>
            <h3 class="sticky-title">${sticky.title}</h3>
            <span class="sticky-author">${sticky.author}</span>
          </header>

          <div class="sticky-body">
            <ul class="sticky-bullets">
              ${(sticky.bullets || []).map((b) => `<li>${b}</li>`).join('')}
            </ul>
          </div>

          ${
            sticky.deliverable
              ? `
            <div class="sticky-deliverable">
              <span class="deliverable-label">Target Deliverable</span>
              <span class="deliverable-desc">${sticky.deliverable}</span>
            </div>
          `
              : ''
          }

          <footer class="sticky-action-row">
            <button
              type="button"
              class="sticky-checkbox-btn ${isCompleted ? 'is-checked' : ''}"
              data-id="${sticky.id}"
              aria-label="Mark ${sticky.title} mastered"
            >
              ${isCompleted ? '✓' : ''}
            </button>
            <span class="sticky-action-text">${isCompleted ? 'Mastered & Verified' : 'Mark as Mastered'}</span>
          </footer>
        `;

        // Click to toggle milestone completion
        noteEl.addEventListener('click', (e) => {
          toggleStickyCompleted(sticky.id);
        });

        trailEl.appendChild(noteEl);
      });

      terrEl.appendChild(trailEl);
      dom.whiteboardStrip.appendChild(terrEl);

      // 3. Inter-Territory Transition Waypoint Gate (if not last)
      if (terrIdx < TERRITORIES.length - 1) {
        const nextTerr = TERRITORIES[terrIdx + 1];
        const gateEl = document.createElement('div');
        gateEl.className = 'waypoint-gate';
        gateEl.dataset.from = terr.id;
        gateEl.dataset.to = nextTerr.id;
        gateEl.innerHTML = `
          <div class="gate-pylon">
            <div class="gate-waypoint-ring" title="Waypoint ${terrIdx + 1} to ${terrIdx + 2}">
              <span>0${terrIdx + 1}</span>
            </div>
            <div class="gate-info">
              <span class="gate-transfer-label">Waypoint Trail</span>
              <span class="gate-dest-name">&rarr; ${nextTerr.number ? `Phase 0${nextTerr.number}` : nextTerr.tag || 'Track'}</span>
            </div>
          </div>
        `;
        dom.whiteboardStrip.appendChild(gateEl);
      }
    });

    // 4. Apex Expedition Summit (Finish Line)
    const apexEl = document.createElement('div');
    apexEl.className = 'apex-monument';
    apexEl.id = 'monument-apex';
    apexEl.innerHTML = `
      <svg class="apex-crest-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
      </svg>
      <div class="apex-tag">Expedition Summit</div>
      <h2 class="apex-title">$100k Boutique Freelance Studio</h2>
      <p class="apex-desc">All 26 core milestones, books, capstones, and commercial playbooks mastered. Sovereign positioning, zero technical compromises, and predictable client acquisition.</p>
      <button type="button" class="origin-start-btn" id="btn-journey-rewind">&larr; Return to Base Camp</button>
    `;
    dom.whiteboardStrip.appendChild(apexEl);

    // Setup origin & apex navigation buttons
    document.getElementById('btn-journey-start')?.addEventListener('click', () => {
      const firstTerr = document.getElementById(`territory-${TERRITORIES[0].id}`);
      if (firstTerr) {
        firstTerr.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      }
    });

    document.getElementById('btn-journey-rewind')?.addEventListener('click', () => {
      dom.whiteboardViewport.scrollTo({ left: 0, behavior: 'smooth' });
    });

    // Initialize SVG Winding Trail
    setTimeout(updateTrailPath, 150);
  }

  // --- RENDER MINI-MAP TRACK ---
  function renderMiniMap() {
    if (!dom.minimapTrack) return;
    dom.minimapTrack.innerHTML = '';

    TERRITORIES.forEach((terr, idx) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'minimap-stage-slot';
      slotEl.dataset.territoryId = terr.id;
      slotEl.title = `${terr.title} (Click to jump)`;

      const code = terr.number ? `PH 0${terr.number}` : (terr.tag ? terr.tag.slice(0, 6).toUpperCase() : `TRK ${idx + 1}`);

      slotEl.innerHTML = `
        <div class="minimap-slot-meta">
          <span class="minimap-slot-code">${code}</span>
          <span class="minimap-slot-pct" id="minimap-pct-${terr.id}">0%</span>
        </div>
        <div class="minimap-slot-bar">
          <div class="minimap-slot-fill" id="minimap-fill-${terr.id}"></div>
        </div>
      `;

      slotEl.addEventListener('click', () => {
        scrollToTerritory(terr.id);
      });

      dom.minimapTrack.appendChild(slotEl);
    });
  }

  // --- SVG WINDING TRAIL ROUTE GENERATOR ---
  function updateTrailPath() {
    if (!dom.whiteboardStrip || !dom.trailBasePath || !dom.trailActivePath) return;

    const notes = Array.from(document.querySelectorAll('.sticky-note'));
    if (notes.length === 0) return;

    const stripRect = dom.whiteboardStrip.getBoundingClientRect();
    const points = [];

    // Origin Start Point
    const origin = document.getElementById('monument-origin');
    if (origin) {
      const oRect = origin.getBoundingClientRect();
      points.push({
        x: oRect.right - stripRect.left,
        y: oRect.top - stripRect.top + oRect.height / 2
      });
    }

    // Connect through each sticky note's pin location
    notes.forEach((note) => {
      const nRect = note.getBoundingClientRect();
      points.push({
        x: nRect.left - stripRect.left + nRect.width / 2,
        y: nRect.top - stripRect.top + 10 // pin position at top
      });
    });

    // Apex Finish Point
    const apex = document.getElementById('monument-apex');
    if (apex) {
      const aRect = apex.getBoundingClientRect();
      points.push({
        x: aRect.left - stripRect.left,
        y: aRect.top - stripRect.top + aRect.height / 2
      });
    }

    // Generate smooth undulating bezier curve
    if (points.length < 2) return;

    let d = `M ${points[0].x} ${points[0].y}`;
    for (let i = 1; i < points.length; i++) {
      const prev = points[i - 1];
      const curr = points[i];
      const midX = (prev.x + curr.x) / 2;
      d += ` C ${midX} ${prev.y}, ${midX} ${curr.y}, ${curr.x} ${curr.y}`;
    }

    dom.trailBasePath.setAttribute('d', d);
    dom.trailActivePath.setAttribute('d', d);

    // Active path fill calculation
    const totalLength = dom.trailBasePath.getTotalLength ? dom.trailBasePath.getTotalLength() : 8000;
    dom.trailActivePath.style.strokeDasharray = `${totalLength}`;

    const ratio = TOTAL_STICKIES > 0 ? state.completed.size / TOTAL_STICKIES : 0;
    const activeLength = totalLength * ratio;
    dom.trailActivePath.style.strokeDashoffset = `${totalLength - activeLength}`;
  }

  // --- TOGGLE STICKY COMPLETION ---
  function toggleStickyCompleted(stickyId) {
    if (state.completed.has(stickyId)) {
      state.completed.delete(stickyId);
    } else {
      state.completed.add(stickyId);
    }
    saveState();
    updateUI();
  }

  // --- UPDATE UI STATS & VISUALS ---
  function updateUI() {
    const completedCount = state.completed.size;
    const pct = TOTAL_STICKIES > 0 ? Math.round((completedCount / TOTAL_STICKIES) * 100) : 0;
    const scale = completedCount / TOTAL_STICKIES;

    // 1. Top Progress Line
    if (dom.topProgressFill) {
      dom.topProgressFill.style.transform = `scaleX(${scale})`;
    }

    // 2. Global Metric Pill
    if (dom.globalStatReadout) {
      dom.globalStatReadout.innerHTML = `<strong>${completedCount}</strong> / ${TOTAL_STICKIES}`;
    }
    if (dom.globalStatPercent) {
      dom.globalStatPercent.textContent = `(${pct}%)`;
    }

    // 3. Filter Counts
    if (dom.countFilterAll) dom.countFilterAll.textContent = `(${TOTAL_STICKIES})`;
    if (dom.countFilterIncomplete) dom.countFilterIncomplete.textContent = `(${TOTAL_STICKIES - completedCount})`;
    if (dom.countFilterCompleted) dom.countFilterCompleted.textContent = `(${completedCount})`;

    // 4. Update each Territory & its Stickies
    TERRITORIES.forEach((terr) => {
      let terrCompleted = 0;
      const stickies = terr.stickies || [];
      const terrTotal = stickies.length;

      stickies.forEach((sticky) => {
        const isCompleted = state.completed.has(sticky.id);
        if (isCompleted) {
          terrCompleted++;
        }

        const noteEl = document.getElementById(`note-${sticky.id}`);
        if (noteEl) {
          if (isCompleted) {
            noteEl.classList.add('is-completed');
          } else {
            noteEl.classList.remove('is-completed');
          }
          const btn = noteEl.querySelector('.sticky-checkbox-btn');
          const label = noteEl.querySelector('.sticky-action-text');
          if (btn) {
            if (isCompleted) {
              btn.classList.add('is-checked');
              btn.textContent = '✓';
            } else {
              btn.classList.remove('is-checked');
              btn.textContent = '';
            }
          }
          if (label) {
            label.textContent = isCompleted ? 'Mastered & Verified' : 'Mark as Mastered';
          }
        }
      });

      // Update territory sign stats & progress fill
      const terrPct = terrTotal > 0 ? Math.round((terrCompleted / terrTotal) * 100) : 0;
      const statEl = document.getElementById(`terr-stat-${terr.id}`);
      const fillEl = document.getElementById(`terr-fill-${terr.id}`);
      if (statEl) statEl.textContent = `${terrCompleted} / ${terrTotal} (${terrPct}%)`;
      if (fillEl) fillEl.style.transform = `scaleX(${terrTotal > 0 ? terrCompleted / terrTotal : 0})`;

      // Update mini-map slot
      const minimapPctEl = document.getElementById(`minimap-pct-${terr.id}`);
      const minimapFillEl = document.getElementById(`minimap-fill-${terr.id}`);
      if (minimapPctEl) minimapPctEl.textContent = `${terrPct}%`;
      if (minimapFillEl) minimapFillEl.style.transform = `scaleX(${terrTotal > 0 ? terrCompleted / terrTotal : 0})`;
    });

    // 5. Update Trail
    updateTrailPath();

    // 6. Apply filter visibility
    applyFilter();
  }

  // --- FILTER SYSTEM ---
  function applyFilter() {
    const notes = document.querySelectorAll('.sticky-note');
    notes.forEach((note) => {
      const isCompleted = note.classList.contains('is-completed');
      if (state.filter === 'incomplete' && isCompleted) {
        note.style.display = 'none';
      } else if (state.filter === 'completed' && !isCompleted) {
        note.style.display = 'none';
      } else {
        note.style.display = 'flex';
      }
    });
  }

  // --- SEARCH SYSTEM ---
  function handleSearch(query) {
    state.searchQuery = (query || '').trim().toLowerCase();
    const notes = document.querySelectorAll('.sticky-note');
    state.searchMatches = [];
    state.searchMatchIndex = 0;

    notes.forEach((note) => {
      note.classList.remove('matched-highlight');
      if (!state.searchQuery) return;

      const text = note.textContent.toLowerCase();
      if (text.includes(state.searchQuery)) {
        note.classList.add('matched-highlight');
        state.searchMatches.push(note);
      }
    });

    if (dom.searchMatchesCount) {
      if (state.searchQuery) {
        dom.searchMatchesCount.hidden = false;
        dom.searchMatchesCount.textContent = `${state.searchMatches.length} found`;
      } else {
        dom.searchMatchesCount.hidden = true;
      }
    }

    if (state.searchMatches.length > 0) {
      jumpToNextMatch();
    }
  }

  function jumpToNextMatch() {
    if (state.searchMatches.length === 0) return;
    const targetNote = state.searchMatches[state.searchMatchIndex];
    if (targetNote) {
      targetNote.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    state.searchMatchIndex = (state.searchMatchIndex + 1) % state.searchMatches.length;
  }

  // --- VIEWPORT SCROLL & MINI-MAP SYNCHRONIZATION ---
  function updateMiniMapLens() {
    if (!dom.whiteboardViewport || !dom.minimapLens) return;
    const scrollLeft = dom.whiteboardViewport.scrollLeft;
    const scrollWidth = dom.whiteboardViewport.scrollWidth;
    const clientWidth = dom.whiteboardViewport.clientWidth;

    const maxScroll = Math.max(1, scrollWidth - clientWidth);
    const scrollRatio = scrollLeft / maxScroll;

    const viewportRatio = Math.max(0.08, Math.min(1, clientWidth / scrollWidth));
    const lensWidthPct = viewportRatio * 100;
    const lensLeftPct = scrollRatio * (100 - lensWidthPct);

    dom.minimapLens.style.width = `${lensWidthPct}%`;
    dom.minimapLens.style.transform = `translateX(${(lensLeftPct / lensWidthPct) * 100}%)`;
  }

  function scrollToTerritory(territoryId) {
    const terrEl = document.getElementById(`territory-${territoryId}`);
    if (terrEl) {
      terrEl.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }

  function stepTerritory(direction) {
    const currentScroll = dom.whiteboardViewport.scrollLeft;
    const territories = Array.from(document.querySelectorAll('.board-territory'));
    if (direction > 0) {
      const next = territories.find((t) => t.offsetLeft > currentScroll + 50);
      if (next) next.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    } else {
      const prev = territories.reverse().find((t) => t.offsetLeft < currentScroll - 50);
      if (prev) prev.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      else dom.whiteboardViewport.scrollTo({ left: 0, behavior: 'smooth' });
    }
  }

  // --- MILESTONES & AXIOMS DRAWER ---
  function renderMilestonesDrawer() {
    if (dom.milestonesList) {
      dom.milestonesList.innerHTML = '';
      (DATA.milestones || []).forEach((ms) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'milestone-drawer-card';
        cardEl.innerHTML = `
          <div>
            <h3 class="milestone-drawer-title">${ms.title}</h3>
            <span class="milestone-drawer-proof">${ms.phase}</span>
          </div>
        `;
        dom.milestonesList.appendChild(cardEl);
      });
    }

    if (dom.principlesList) {
      dom.principlesList.innerHTML = '';
      (DATA.principles || []).forEach((ax) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'principle-card';
        cardEl.innerHTML = `
          <h3 class="principle-title">${ax.title}</h3>
          <p class="principle-desc">${ax.body || (ax.list || []).join(' · ')}</p>
        `;
        dom.principlesList.appendChild(cardEl);
      });
    }
  }

  // --- EVENT LISTENERS SETUP ---
  function setupEvents() {
    // 1. Mouse Wheel Translation (Vertical to Horizontal)
    dom.whiteboardViewport.addEventListener(
      'wheel',
      (e) => {
        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          dom.whiteboardViewport.scrollLeft += e.deltaY * 1.35;
        }
      },
      { passive: false }
    );

    // 2. Click and Drag to Pan Canvas
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    dom.whiteboardViewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, input, a, .sticky-note, .minimap-container')) return;
      isDown = true;
      dom.whiteboardViewport.classList.add('is-dragging');
      startX = e.pageX - dom.whiteboardViewport.offsetLeft;
      scrollStart = dom.whiteboardViewport.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        dom.whiteboardViewport.classList.remove('is-dragging');
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - dom.whiteboardViewport.offsetLeft;
      const walk = (x - startX) * 1.6;
      dom.whiteboardViewport.scrollLeft = scrollStart - walk;
    });

    // 3. Mini-Map Sync
    dom.whiteboardViewport.addEventListener('scroll', () => {
      updateMiniMapLens();
    });

    window.addEventListener('resize', () => {
      updateMiniMapLens();
      updateTrailPath();
    });

    // 4. Keyboard Arrow Navigation
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepTerritory(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepTerritory(-1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        dom.whiteboardViewport.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        dom.whiteboardViewport.scrollTo({ left: dom.whiteboardViewport.scrollWidth, behavior: 'smooth' });
      } else if (e.key === ' ') {
        e.preventDefault();
        toggleOverviewMode();
      }
    });

    // 5. Navigation Buttons
    dom.btnPrevZone?.addEventListener('click', () => stepTerritory(-1));
    dom.btnNextZone?.addEventListener('click', () => stepTerritory(1));

    // 6. Filter Chips
    dom.filterChips.forEach((chip) => {
      chip.addEventListener('click', () => {
        dom.filterChips.forEach((c) => c.classList.remove('active'));
        chip.classList.add('active');
        state.filter = chip.dataset.filter;
        applyFilter();
      });
    });

    // 7. Search Input
    dom.searchInput?.addEventListener('input', (e) => {
      handleSearch(e.target.value);
    });

    dom.searchInput?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        jumpToNextMatch();
      }
    });

    // 8. Overview Mode Toggle
    function toggleOverviewMode() {
      state.overviewMode = !state.overviewMode;
      if (state.overviewMode) {
        dom.whiteboardCanvas.classList.add('overview-mode');
        dom.btnToggleOverview?.classList.add('active');
        if (dom.overviewLabel) dom.overviewLabel.textContent = 'Exit Overview';
      } else {
        dom.whiteboardCanvas.classList.remove('overview-mode');
        dom.btnToggleOverview?.classList.remove('active');
        if (dom.overviewLabel) dom.overviewLabel.textContent = 'Overview';
      }
    }

    dom.btnToggleOverview?.addEventListener('click', toggleOverviewMode);

    dom.whiteboardCanvas?.addEventListener('click', (e) => {
      if (state.overviewMode) {
        const terr = e.target.closest('.board-territory');
        toggleOverviewMode();
        if (terr) {
          setTimeout(() => {
            terr.scrollIntoView({ behavior: 'smooth', inline: 'start' });
          }, 150);
        }
      }
    });

    // 9. Milestones Drawer Toggle
    dom.btnMilestonesDrawer?.addEventListener('click', () => {
      state.milestonesOpen = !state.milestonesOpen;
      dom.milestonesPanel.hidden = !state.milestonesOpen;
      dom.btnMilestonesDrawer.setAttribute('aria-expanded', state.milestonesOpen);
      if (state.milestonesOpen) {
        renderMilestonesDrawer();
      }
    });

    // 10. Theme Toggle
    dom.btnTheme?.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      if (state.theme === 'light') {
        dom.html.classList.remove('dark');
        dom.html.classList.add('light');
      } else {
        dom.html.classList.remove('light');
        dom.html.classList.add('dark');
      }
      saveState();
    });

    if (state.theme === 'light') {
      dom.html.classList.remove('dark');
      dom.html.classList.add('light');
    }

    // 11. Reset Button
    dom.btnResetData?.addEventListener('click', () => {
      if (confirm('Reset all completed whiteboard milestones?')) {
        state.completed.clear();
        saveState();
        updateUI();
      }
    });
  }

  // --- INITIALIZATION ---
  function init() {
    loadState();
    updateChronos();
    setInterval(updateChronos, 60000);
    renderContinuousWhiteboard();
    renderMiniMap();
    renderMilestonesDrawer();
    setupEvents();
    updateUI();
    setTimeout(updateMiniMapLens, 200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
