/**
 * Roadmap: Marketing Websites Freelancer — The Continuous Landscape Journey
 * Bespoke Design Systems Per Stage · Authentic Visual Artwork · Zero AI Slop
 * Focus on Core Curricula, Books, Capstones & Architectural Deliverables
 */

(function () {
  'use strict';

  const DATA = window.ROADMAP_DATA;
  if (!DATA) {
    console.error('ROADMAP_DATA not found. Ensure data/roadmap-data.js is loaded.');
    return;
  }

  // --- NORMALIZE ZONES (Core Curricula, Capstones & Strategies) ---
  const ALL_ZONES = [
    // Zone 1: Phase 0 & 1 - Web Foundations
    {
      id: 'phase-0-1',
      number: '01',
      tag: 'Web Craft',
      title: 'Web Foundations & Developer Mechanics',
      timing: 'Weeks 1–6 · 2–3h / day',
      summary: 'Master semantic HTML5, modern CSS layouts (Flexbox & Grid), responsive typography, and foundational JavaScript DOM scripting with zero AI shortcuts.',
      colorAccent: '#F59E0B',
      visualType: 'terminal',
      pillars: [
        {
          id: 'p-scrimba-html-css',
          title: 'Learn HTML & CSS (Scrimba)',
          author: 'Per Harald Borgen · 11 Hours',
          type: 'Core Course',
          highlights: [
            'Semantic markup architecture without div soup',
            'Modern Flexbox navigation & fluid multi-column grids',
            'CSS cascade, specificity, and modular custom properties'
          ],
          deliverable: 'Google Search Clone & Responsive Business Card'
        },
        {
          id: 'p-kevin-space-tourism',
          title: 'Multi-Page Space Travel Website',
          author: 'Kevin Powell · Advanced Scrimba',
          type: 'Capstone Course',
          highlights: [
            'Full Figma-to-code implementation across 4 pages',
            'Sub-navigation, tabbed data switching & slider states',
            'Accessible keyboard focus rings & mobile overlay drawer'
          ],
          deliverable: 'Production Multi-Page Space Tourism Portal'
        },
        {
          id: 'p-conquering-responsive',
          title: 'Conquering Responsive Layouts',
          author: 'Kevin Powell · 21-Day Masterclass',
          type: 'Layout Mastery',
          highlights: [
            'Fluid typography with clamp() and viewport units',
            'Intrinsic web design without brittle media queries',
            'Container queries and responsive image aspect ratios'
          ],
          deliverable: '3 Production Responsive Layout Benchmarks'
        },
        {
          id: 'p-js-dom-foundations',
          title: 'JavaScript DOM & Event Mechanics',
          author: 'Scrimba · DOM & Events Focus',
          type: 'Scripting Core',
          highlights: [
            'DOM element selection, traversal, and event listeners',
            'Interactive modal dialogs, drawers, and accordions',
            'Client-side state persistence with localStorage'
          ],
          deliverable: 'Interactive Local Business Booking Widget'
        }
      ]
    },

    // Zone 2: Phase 2 - Modern Design Systems & UI Mastery
    {
      id: 'phase-2',
      number: '02',
      tag: 'Design Mastery',
      title: 'Design Systems & High-Conversion UI/UX',
      timing: 'Weeks 7–10 · 2–3h / day',
      summary: 'Design like an engineer: master hierarchy, typographic scale, white space, and design systems in Figma to produce agency-grade interfaces.',
      colorAccent: '#38BDF8',
      visualType: 'blueprint',
      pillars: [
        {
          id: 'p-refactoring-ui',
          title: 'Refactoring UI',
          author: 'Adam Wathan & Steve Schoger · Definitive Book',
          type: 'Visual Hierarchy',
          highlights: [
            'Starting with hierarchy and content before adding color',
            '8pt spatial rhythm and deliberate elevation shadows',
            'Curated color palettes: primary, neutral, and accent tints'
          ],
          deliverable: 'Complete Local Business UI Design System'
        },
        {
          id: 'p-practical-ui',
          title: 'Practical UI',
          author: 'Adham Dannaway · Logic-Driven Design',
          type: 'Design Mechanics',
          highlights: [
            'Mathematical spacing guidelines and visual balance',
            'High-contrast accessible text pairings (WCAG AA)',
            'Actionable button states, form inputs, and validation UI'
          ],
          deliverable: 'Conversion-Optimized Checkout & Lead Form'
        },
        {
          id: 'p-figma-mastery',
          title: 'Figma Auto-Layout & Design Tokens',
          author: 'Figma Official Certification Track',
          type: 'CAD Tooling',
          highlights: [
            'Nested Auto-Layout frames mirroring CSS Flexbox',
            'Design token variables for typography, spacing, and hues',
            'Responsive component variants and prototype flows'
          ],
          deliverable: 'Full Responsive Design System Artboard'
        },
        {
          id: 'p-laws-of-ux',
          title: 'Laws of UX Principles',
          author: 'Jon Yablonski · Cognitive Frameworks',
          type: 'User Psychology',
          highlights: [
            'Fitts’s Law & Hick’s Law in local business landing pages',
            'Jakob’s Law: leveraging familiar mental models',
            'Serial Position Effect & Miller’s Law in service menus'
          ],
          deliverable: '3 Bespoke Figma Mockups (Clinic, Restaurant, Gym)'
        }
      ]
    },

    // Zone 3: Phase 3 - Modern Frameworks & Performance Stack
    {
      id: 'phase-3',
      number: '03',
      tag: 'Stack Velocity',
      title: 'Modern Production Stack: Astro, Tailwind & Edge',
      timing: 'Weeks 11–14 · 2–3h / day',
      summary: 'Build ultra-fast, zero-bloat marketing sites using Astro Islands, Tailwind CSS v4, and modern headless deployment with guaranteed 95+ Lighthouse scores.',
      colorAccent: '#10B981',
      visualType: 'compiler',
      pillars: [
        {
          id: 'p-astro-mastery',
          title: 'Astro 5 Architecture & Content Collections',
          author: 'Astro Core Team · Official Masterclass',
          type: 'Core Framework',
          highlights: [
            'Zero-JS by default with island hydration on demand',
            'Content Collections with strict Zod type validation',
            'Dynamic page routing and markdown publishing workflows'
          ],
          deliverable: 'Sub-50ms Multi-Page Local Business Architecture'
        },
        {
          id: 'p-tailwind-v4',
          title: 'Tailwind CSS v4 Production Engineering',
          author: 'Tailwind Labs · Modern Engine',
          type: 'Utility Engine',
          highlights: [
            'Modern CSS-first theme configuration with @theme',
            'Container queries and fluid typography plugins',
            'Purged zero-runtime production stylesheets under 10KB'
          ],
          deliverable: 'Reusable Component Library (Navbar, Hero, Grid, FAQ)'
        },
        {
          id: 'p-edge-infrastructure',
          title: 'Edge Deployment, Forms & SEO Stack',
          author: 'Cloudflare Pages & Netlify Core',
          type: 'Cloud Infrastructure',
          highlights: [
            'Cloudflare Pages Anycast edge distribution with instant SSL',
            'Serverless form handling via Web3Forms & Formspree',
            'Automated OpenGraph card generation via Satori'
          ],
          deliverable: '3 Live Published Sites with Lighthouse 95+ Scores'
        }
      ]
    },

    // Zone 4: Phase 4 - Creative Development & Motion Systems
    {
      id: 'phase-4',
      number: '04',
      tag: 'Kinetic Lab',
      title: 'Creative Interaction, Motion & Conversion',
      timing: 'Weeks 15–18 · 2–3h / day',
      summary: 'Elevate ordinary static websites into world-class interactive experiences with smooth GSAP animations, tactile micro-interactions, and high-conversion copy.',
      colorAccent: '#A855F7',
      visualType: 'kinetic',
      pillars: [
        {
          id: 'p-gsap-motion',
          title: 'GSAP 3 & ScrollTrigger Systems',
          author: 'GreenSock · Creative Interaction',
          type: 'Motion Engine',
          highlights: [
            'Performant scroll-linked timelines with batch rendering',
            'Custom easing curves: cubic-bezier and spring physics',
            'Subtle hover magnetic effects and reveal choreography'
          ],
          deliverable: 'Award-Level Landing Page Scroll Choreography'
        },
        {
          id: 'p-storybrand-copy',
          title: 'Building a StoryBrand Copywriting',
          author: 'Donald Miller · Customer-Centric Story',
          type: 'Conversion Strategy',
          highlights: [
            'The 7-part narrative framework: making the client the hero',
            'Clear above-the-fold value propositions that pass the grunt test',
            'Eliminating industry jargon and crafting irresistible CTAs'
          ],
          deliverable: 'Conversion Wireframe with Complete Real Copy'
        },
        {
          id: 'p-portfolio-live',
          title: 'Personal Studio Portfolio Live on Domain',
          author: 'AHKH Studio Master Project',
          type: 'Flagship Deliverable',
          highlights: [
            'Own domain, sub-second global load times, and custom branding',
            'Interactive case studies showcasing clinic, cafe, and gym sites',
            'Integrated client intake booking workflow & WhatsApp hotline'
          ],
          deliverable: 'Live Production Studio Portfolio on Custom Domain'
        }
      ]
    },

    // Zone 5: Phase 5 - High-End Production & Haute Typographie
    {
      id: 'phase-5',
      number: '05',
      tag: 'Editorial Atelier',
      title: 'Haute Typographie & Commercial Acumen',
      timing: 'Weeks 19–22 · 2–3h / day',
      summary: 'Craft boutique editorial experiences with classical typography, bespoke layout grids, and elite client positioning that commands premium pricing.',
      colorAccent: '#D4AF37',
      visualType: 'editorial',
      pillars: [
        {
          id: 'p-100m-offers',
          title: '$100M Offers: Grand Slam Packaging',
          author: 'Alex Hormozi · Value Frameworks',
          type: 'Commercial Offering',
          highlights: [
            'The Value Equation: Dream Outcome vs Time Delay & Effort',
            'Bespoke service packaging: Website + Local SEO + Maintenance',
            'Irresistible risk reversals and unconditional satisfaction guarantees'
          ],
          deliverable: 'The $3,000–$5,000 Grand Slam Local Business Offer'
        },
        {
          id: 'p-win-without-pitching',
          title: 'The Win Without Pitching Manifesto',
          author: 'Blair Enns · Advisory Consulting',
          type: 'Agency Mindset',
          highlights: [
            'The 12 Proclamations: replacing competitive bidding with expert diagnostic',
            'Price the client, not the job; diagnostic conversation protocols',
            'Refusing free conceptual work and commanding respect as an advisor'
          ],
          deliverable: 'Diagnostic Client Intake & Proposal Master Template'
        },
        {
          id: 'p-first-paying-client',
          title: 'First Paying Client Onboarded & Deployed',
          author: 'Milestone Execution ~ Month 3',
          type: 'Commercial Milestone',
          highlights: [
            'Outbound Loom video audits targeting local business deficiencies',
            'Closed signed contract with 50% upfront deposit received',
            'Production deployment, domain setup, and Google Business integration'
          ],
          deliverable: 'First Commercial Invoice Paid & Client Case Study'
        }
      ]
    },

    // Zone 6: Phase 6 - Systems Architecture, SEO & Scale
    {
      id: 'phase-6',
      number: '06',
      tag: 'Telemetry Vault',
      title: 'Infrastructure Telemetry, Local SEO & Retainers',
      timing: 'Post Month 6 · Continuous Operations',
      summary: 'Scale into a sovereign agency: automate hosting retainers, dominate local Google 3-pack rankings, and deliver enterprise-grade performance telemetry.',
      colorAccent: '#F97316',
      visualType: 'telemetry',
      pillars: [
        {
          id: 'p-local-seo-domination',
          title: 'Local SEO & Schema.org Architecture',
          author: 'Google & Moz Official Standards',
          type: 'Organic Traffic',
          highlights: [
            'JSON-LD Structured Data: LocalBusiness, MedicalClinic, Restaurant',
            'Google Business Profile optimization and review generation funnel',
            'Targeted geo-landing pages and local citation consistency'
          ],
          deliverable: 'Rank #1 in Google Local 3-Pack for Client Services'
        },
        {
          id: 'p-retainers-care-plans',
          title: 'Monthly Recurring Care Plans & Infrastructure',
          author: 'SaaS Agency Operations',
          type: 'Recurring Revenue',
          highlights: [
            'Managed Cloudflare edge caching, SSL, and uptime alerting',
            'Automated weekly backups and monthly analytics PDF digests',
            '$150–$300/mo care plans generating predictable recurring cash flow'
          ],
          deliverable: '10 Active Client Maintenance Contracts ($2k+/mo MRR)'
        }
      ]
    },

    // Zone 7: Companion Track - Commercial Engine & Acquisition
    {
      id: 'marketing-sales',
      number: '07',
      tag: 'Deal Room',
      title: 'The Deal Room: Cold Acquisition & Negotiations',
      timing: 'Companion Track · Runs Alongside Build',
      summary: 'The client acquisition engine: high-value Loom audits, diagnostic sales conversations, value-based pricing, and closing without competing.',
      colorAccent: '#EAB308',
      visualType: 'dealroom',
      pillars: [
        {
          id: 'p-niche-selection',
          title: 'Niche Selection & Moat Architecture',
          author: 'Commercial Acquisition',
          type: 'Market Strategy',
          highlights: [
            'Targeting high ticket local businesses: Dental, Solar, High-End Cafes',
            'Auditing competitors in Google Maps to spot outdated sites',
            'Developing domain-specific vocabulary and authority'
          ],
          deliverable: 'List of 50 Vetted Local Prospects with Direct Contacts'
        },
        {
          id: 'p-loom-audit-engine',
          title: 'The 3-Minute Loom Video Audit Funnel',
          author: 'Outbound Engine',
          type: 'Cold Outreach',
          highlights: [
            'Screen-recording mobile flaws, slow load times, and missing CTAs',
            'Presenting the live redesigned mockup before asking for anything',
            'Sending personalized cold emails with 30%+ response rates'
          ],
          deliverable: '10 Recorded Video Audits Dispatched Weekly'
        },
        {
          id: 'p-diagnostic-closing',
          title: 'The Diagnostic Sales & Proposal Closing',
          author: 'Blair Enns / Hormozi Systems',
          type: 'Negotiation',
          highlights: [
            'Uncovering client business goals: average customer lifetime value',
            'Presenting 3 option tiers so the choice is which, not whether',
            'Contract templates with strict scope boundaries and payment schedules'
          ],
          deliverable: 'Standardized Proposal & Client Agreement Package'
        }
      ]
    },

    // Zone 8: Studio Governance - Operating System & Playbook
    {
      id: 'studio-playbook',
      number: '08',
      tag: 'Studio Command',
      title: 'AHKH Studio Operating System & Playbook',
      timing: 'Permanent Governance · Standing Rules',
      summary: 'The founder operating system: strict scope boundaries, standard delivery SLA timelines, non-negotiable contract guardrails, and three-tier pricing.',
      colorAccent: '#06B6D4',
      visualType: 'command',
      pillars: [
        {
          id: 'p-core-service-scope',
          title: 'The Core Service Standard & Scope Firewall',
          author: 'Studio Architecture',
          type: 'Operating Rules',
          highlights: [
            'Core offering: Fast marketing website + Local SEO + WhatsApp CTA',
            'Strictly out of scope: complex eCommerce, mobile apps, custom auth',
            'Saying no with confidence to protect speed and profit margins'
          ],
          deliverable: 'Strictly Enforced Studio Scope Boundary Document'
        },
        {
          id: 'p-delivery-timeline-sla',
          title: 'The 5-Day Sprint Delivery Protocol',
          author: 'Production Cadence',
          type: 'SLA Timeline',
          highlights: [
            'Day 1: Wireframe & Copy approval · Day 3: Full interactive build',
            'Day 4: Mobile audit & form testing · Day 5: DNS propagation & launch',
            'Two revision rounds included; additional requests billed hourly'
          ],
          deliverable: 'Standard Operating Procedure (SOP) Checklist'
        },
        {
          id: 'p-packages-addons',
          title: 'Three-Tier Pricing & High-Margin Add-Ons',
          author: 'Agency Economics',
          type: 'Pricing Structure',
          highlights: [
            'Basic ($1,500): 1-Page fast site · Standard ($3,000): Full site + Local SEO',
            'Premium ($5,000): StoryBrand copy + GSAP motion + CRM integration',
            'High-margin add-ons: Care Plans ($200/mo), Copywriting, GA4 Setup'
          ],
          deliverable: 'Published Client Rate Card & Add-On Catalog'
        }
      ]
    }
  ];

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

  // --- STORAGE ---
  const STORAGE_KEY = DATA.storageKey || 'ahkh_roadmap_v2';

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
    worldViewport: document.getElementById('world-viewport'),
    worldCanvas: document.getElementById('world-canvas'),
    worldStrip: document.getElementById('world-strip'),
    worldSpineBase: document.getElementById('world-spine-base'),
    worldSpineActive: document.getElementById('world-spine-active'),
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
    headerMilestonesBadge: document.getElementById('header-milestones-badge'),
    milestonesPanel: document.getElementById('milestones-panel'),
    drawerMilestonesCount: document.getElementById('drawer-milestones-count'),
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

  // Compute total milestones across all zones
  function getAllPillars() {
    const list = [];
    ALL_ZONES.forEach((z) => {
      (z.pillars || []).forEach((p) => {
        list.push({ ...p, zoneId: z.id });
      });
    });
    return list;
  }

  const ALL_PILLARS = getAllPillars();
  const TOTAL_PILLARS = ALL_PILLARS.length;

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

  // --- GENERATE AUTHENTIC SVG VISUAL ARTWORK PER ZONE ---
  function getZoneVisualArtwork(visualType) {
    switch (visualType) {
      case 'terminal':
        // The Phosphor CRT Code Console
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Terminal CRT Monitor">
            <rect width="320" height="180" rx="6" fill="#0A0D0E" stroke="rgba(245, 158, 11, 0.3)" stroke-width="1.5"/>
            <!-- Titlebar -->
            <rect x="0" y="0" width="320" height="24" fill="#121619" stroke="rgba(245, 158, 11, 0.2)" stroke-width="1"/>
            <circle cx="14" cy="12" r="3.5" fill="#EF4444"/>
            <circle cx="26" cy="12" r="3.5" fill="#F59E0B"/>
            <circle cx="38" cy="12" r="3.5" fill="#10B981"/>
            <text x="54" y="15" fill="#B45309" font-family="'JetBrains Mono', monospace" font-size="9" letter-spacing="0.05em">zsh — foundry@dev: ~/marketing-engine</text>
            <!-- Code Lines -->
            <text x="14" y="44" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="9.5">$ gcc -O3 web_foundations.c</text>
            <text x="14" y="60" fill="#78350F" font-family="'JetBrains Mono', monospace" font-size="9">001 | &lt;!DOCTYPE html&gt;</text>
            <text x="14" y="74" fill="#D97706" font-family="'JetBrains Mono', monospace" font-size="9">002 | &lt;header class="hero-container"&gt;</text>
            <text x="14" y="88" fill="#FDE68A" font-family="'JetBrains Mono', monospace" font-size="9">003 |   &lt;h1&gt;Fast Local Marketing&lt;/h1&gt;</text>
            <text x="14" y="102" fill="#D97706" font-family="'JetBrains Mono', monospace" font-size="9">004 |   &lt;a href="tel:+1" class="btn"&gt;Call&lt;/a&gt;</text>
            <text x="14" y="116" fill="#78350F" font-family="'JetBrains Mono', monospace" font-size="9">005 | &lt;/header&gt;</text>
            <text x="14" y="134" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="9.5">✓ ZERO_AI_SLOP: PASSED · 100% HAND-CODED</text>
            <!-- Scanline Overlay -->
            <line x1="0" y1="150" x2="320" y2="150" stroke="rgba(245, 158, 11, 0.15)" stroke-dasharray="2 2"/>
            <rect x="14" y="158" width="8" height="12" fill="#F59E0B" opacity="0.8">
              <animate attributeName="opacity" values="0.9;0.1;0.9" dur="1s" repeatCount="indefinite"/>
            </rect>
            <text x="28" y="167" fill="#F59E0B" font-family="'JetBrains Mono', monospace" font-size="9">READY</text>
          </svg>
        `;
      case 'blueprint':
        // The Figma CAD Blueprint
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="CAD Vector Blueprint">
            <rect width="320" height="180" rx="6" fill="#07101E" stroke="rgba(56, 189, 248, 0.3)" stroke-width="1.5"/>
            <!-- Grid Lines -->
            <path d="M0 30 H320 M0 60 H320 M0 90 H320 M0 120 H320 M0 150 H320" stroke="rgba(56, 189, 248, 0.08)" stroke-width="1"/>
            <path d="M40 0 V180 M80 0 V180 M120 0 V180 M160 0 V180 M200 0 V180 M240 0 V180 M280 0 V180" stroke="rgba(56, 189, 248, 0.08)" stroke-width="1"/>
            <!-- Artboard Frame -->
            <rect x="30" y="30" width="260" height="120" fill="#0B1A30" stroke="#38BDF8" stroke-width="1.2" stroke-dasharray="4 2"/>
            <text x="36" y="24" fill="#38BDF8" font-family="'Inter', sans-serif" font-size="8" font-weight="600">ARTBOARD: CLINIC_HOMEPAGE (1440 × 900)</text>
            <!-- Caliper Guides -->
            <line x1="30" y1="45" x2="290" y2="45" stroke="#0284C7" stroke-width="1"/>
            <line x1="50" y1="55" x2="160" y2="55" stroke="#38BDF8" stroke-width="1.5"/>
            <rect x="50" y="65" width="100" height="20" rx="2" fill="rgba(56, 189, 248, 0.15)" stroke="#38BDF8" stroke-width="0.8"/>
            <text x="60" y="78" fill="#E0F2FE" font-family="'Inter', sans-serif" font-size="7.5" font-weight="600">HERO_HEADLINE</text>
            <rect x="50" y="92" width="60" height="16" rx="2" fill="#38BDF8"/>
            <text x="62" y="103" fill="#07101E" font-family="'Inter', sans-serif" font-size="7" font-weight="700">BOOK APPT</text>
            <!-- Vector Anchor Handles -->
            <circle cx="210" cy="85" r="3" fill="#38BDF8"/>
            <line x1="190" y1="75" x2="230" y2="95" stroke="#38BDF8" stroke-width="0.8"/>
            <circle cx="190" cy="75" r="2" fill="#E0F2FE"/>
            <circle cx="230" cy="95" r="2" fill="#E0F2FE"/>
            <text x="210" y="165" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="7.5">SPEC: 8PT_GRID · WCAG_AAA</text>
          </svg>
        `;
      case 'compiler':
        // The Astro Velocity Engine
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Astro Compiler Speed Radar">
            <rect width="320" height="180" rx="6" fill="#070D0A" stroke="rgba(16, 185, 129, 0.3)" stroke-width="1.5"/>
            <!-- Lighthouse Gauge Circles -->
            <circle cx="70" cy="75" r="32" stroke="rgba(16, 185, 129, 0.2)" stroke-width="5"/>
            <circle cx="70" cy="75" r="32" stroke="#10B981" stroke-width="5" stroke-dasharray="201" stroke-dashoffset="0"/>
            <text x="58" y="80" fill="#10B981" font-family="'Geist', sans-serif" font-size="14" font-weight="700">100</text>
            <text x="44" y="122" fill="#A7F3D0" font-family="'Geist', sans-serif" font-size="8" font-weight="600">PERFORMANCE</text>
            <!-- Speed Metrics -->
            <rect x="130" y="32" width="165" height="28" rx="4" fill="#0D1A14" stroke="rgba(16, 185, 129, 0.2)"/>
            <text x="140" y="45" fill="#A7F3D0" font-family="'JetBrains Mono', monospace" font-size="7.5">BUILD TIME</text>
            <text x="140" y="55" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">⚡ 0.38ms (Astro 5)</text>
            <rect x="130" y="66" width="165" height="28" rx="4" fill="#0D1A14" stroke="rgba(16, 185, 129, 0.2)"/>
            <text x="140" y="79" fill="#A7F3D0" font-family="'JetBrains Mono', monospace" font-size="7.5">CLIENT JS RUNTIME</text>
            <text x="140" y="89" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">0 KB (Zero-JS Islands)</text>
            <rect x="130" y="100" width="165" height="28" rx="4" fill="#0D1A14" stroke="rgba(16, 185, 129, 0.2)"/>
            <text x="140" y="113" fill="#A7F3D0" font-family="'JetBrains Mono', monospace" font-size="7.5">TOTAL PAYLOAD</text>
            <text x="140" y="123" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="9" font-weight="700">6.4 KB (HTML + CSS)</text>
            <line x1="20" y1="145" x2="300" y2="145" stroke="rgba(16, 185, 129, 0.2)"/>
            <text x="20" y="162" fill="#10B981" font-family="'JetBrains Mono', monospace" font-size="8">STATUS: PRODUCTION_EDGE_READY</text>
          </svg>
        `;
      case 'kinetic':
        // The GSAP Motion Physics Lab
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="GSAP Motion Physics Timeline">
            <rect width="320" height="180" rx="6" fill="#0B0814" stroke="rgba(168, 85, 247, 0.3)" stroke-width="1.5"/>
            <!-- Waveform & Bezier Graph -->
            <path d="M30 130 C 70 130, 90 40, 200 40 C 250 40, 270 45, 290 45" stroke="#A855F7" stroke-width="2.5" fill="none"/>
            <path d="M30 130 C 70 130, 90 40, 200 40 C 250 40, 270 45, 290 45 L 290 140 L 30 140 Z" fill="rgba(168, 85, 247, 0.08)"/>
            <!-- Scrubber Needle -->
            <line x1="140" y1="20" x2="140" y2="150" stroke="#EC4899" stroke-width="1.5" stroke-dasharray="3 2"/>
            <polygon points="135,20 145,20 140,28" fill="#EC4899"/>
            <!-- Diamond Keyframe Nodes -->
            <rect x="27" y="127" width="6" height="6" fill="#C084FC" transform="rotate(45 30 130)"/>
            <rect x="197" y="37" width="6" height="6" fill="#C084FC" transform="rotate(45 200 40)"/>
            <rect x="287" y="42" width="6" height="6" fill="#C084FC" transform="rotate(45 290 45)"/>
            <!-- Text & Formula -->
            <text x="30" y="24" fill="#C084FC" font-family="'Plus Jakarta Sans', sans-serif" font-size="8.5" font-weight="600">EASING: cubic-bezier(0.16, 1, 0.3, 1)</text>
            <text x="148" y="26" fill="#EC4899" font-family="'JetBrains Mono', monospace" font-size="7.5">0.64s</text>
            <text x="30" y="165" fill="#E9D5FF" font-family="'JetBrains Mono', monospace" font-size="8">FPS: 60.0 · GPU_ACCELERATED · ZERO_REFLOW</text>
          </svg>
        `;
      case 'editorial':
        // The Haute Swiss Editorial Atelier
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Haute Swiss Typographic Specimen">
            <rect width="320" height="180" rx="6" fill="#120F0C" stroke="rgba(212, 175, 55, 0.3)" stroke-width="1.5"/>
            <!-- Double Hairline Frame -->
            <rect x="14" y="14" width="292" height="152" fill="none" stroke="rgba(212, 175, 55, 0.25)" stroke-width="0.8"/>
            <rect x="17" y="17" width="286" height="146" fill="none" stroke="rgba(212, 175, 55, 0.15)" stroke-width="0.5"/>
            <!-- Crest Seal -->
            <circle cx="160" cy="55" r="18" fill="rgba(212, 175, 55, 0.15)" stroke="#D4AF37" stroke-width="1"/>
            <text x="154" y="60" fill="#D4AF37" font-family="'Newsreader', Georgia, serif" font-size="14" font-style="italic">A</text>
            <!-- Typographic Specimen -->
            <text x="160" y="95" text-anchor="middle" fill="#FFFDF8" font-family="'Newsreader', Georgia, serif" font-size="15" font-style="italic" font-weight="500">Haute Typographie &amp; Élite Position</text>
            <text x="160" y="112" text-anchor="middle" fill="#D4AF37" font-family="'JetBrains Mono', monospace" font-size="7.5" letter-spacing="0.15em">PRICE THE CLIENT · COMMAND THE VALUE</text>
            <line x1="90" y1="124" x2="230" y2="124" stroke="rgba(212, 175, 55, 0.4)" stroke-width="0.8"/>
            <text x="160" y="142" text-anchor="middle" fill="#E8DFD0" font-family="'Newsreader', Georgia, serif" font-size="8" font-style="italic">The Win Without Pitching Proclamation · Vol. V</text>
          </svg>
        `;
      case 'telemetry':
        // The Industrial Edge Telemetry Mainframe
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Edge Infrastructure Mainframe">
            <rect width="320" height="180" rx="6" fill="#0B0E12" stroke="rgba(249, 115, 22, 0.3)" stroke-width="1.5"/>
            <!-- Rack Units -->
            <rect x="20" y="25" width="280" height="32" rx="3" fill="#121820" stroke="rgba(249, 115, 22, 0.2)"/>
            <circle cx="36" cy="41" r="3.5" fill="#10B981"/>
            <text x="48" y="44" fill="#FED7AA" font-family="'JetBrains Mono', monospace" font-size="8">EDGE_NODE: FRANKFURT (FRA)</text>
            <text x="240" y="44" fill="#F97316" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">14ms</text>
            <rect x="20" y="65" width="280" height="32" rx="3" fill="#121820" stroke="rgba(249, 115, 22, 0.2)"/>
            <circle cx="36" cy="81" r="3.5" fill="#10B981"/>
            <text x="48" y="84" fill="#FED7AA" font-family="'JetBrains Mono', monospace" font-size="8">EDGE_NODE: LONDON (LHR)</text>
            <text x="240" y="84" fill="#F97316" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">19ms</text>
            <rect x="20" y="105" width="280" height="32" rx="3" fill="#121820" stroke="rgba(249, 115, 22, 0.2)"/>
            <circle cx="36" cy="121" r="3.5" fill="#10B981"/>
            <text x="48" y="124" fill="#FED7AA" font-family="'JetBrains Mono', monospace" font-size="8">EDGE_NODE: CAIRO (CAI)</text>
            <text x="240" y="124" fill="#F97316" font-family="'JetBrains Mono', monospace" font-size="8.5" font-weight="700">22ms</text>
            <!-- Telemetry Footer -->
            <text x="24" y="162" fill="#F97316" font-family="'JetBrains Mono', monospace" font-size="8">UPTIME: 99.995% · SSL: A+ · ANYCAST DNS</text>
          </svg>
        `;
      case 'dealroom':
        // The Wall Street Prospectus Deal Sheet
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Commercial Deal Room Prospectus">
            <rect width="320" height="180" rx="6" fill="#06130E" stroke="rgba(234, 179, 8, 0.3)" stroke-width="1.5"/>
            <!-- Value Equation Equation Box -->
            <rect x="20" y="24" width="280" height="60" rx="4" fill="#0A1E16" stroke="rgba(234, 179, 8, 0.25)"/>
            <text x="160" y="42" text-anchor="middle" fill="#EAB308" font-family="'Newsreader', Georgia, serif" font-size="12" font-style="italic">The Hormozi Value Equation</text>
            <text x="160" y="60" text-anchor="middle" fill="#FEF9C3" font-family="'JetBrains Mono', monospace" font-size="8.5">Value = [Dream Outcome × Perceived Likelihood]</text>
            <line x1="60" y1="65" x2="260" y2="65" stroke="#EAB308" stroke-width="1"/>
            <text x="160" y="76" text-anchor="middle" fill="#FEF9C3" font-family="'JetBrains Mono', monospace" font-size="8.5">[Time Delay × Effort &amp; Sacrifice]</text>
            <!-- Deal Funnel -->
            <rect x="20" y="96" width="85" height="42" rx="3" fill="#0E281F" stroke="rgba(234, 179, 8, 0.18)"/>
            <text x="28" y="110" fill="#EAB308" font-family="'JetBrains Mono', monospace" font-size="7">OUTBOUND</text>
            <text x="28" y="126" fill="#FEF9C3" font-family="'Geist', sans-serif" font-size="11" font-weight="700">50 Looms</text>
            <rect x="117" y="96" width="85" height="42" rx="3" fill="#0E281F" stroke="rgba(234, 179, 8, 0.18)"/>
            <text x="125" y="110" fill="#EAB308" font-family="'JetBrains Mono', monospace" font-size="7">RESPONSES</text>
            <text x="125" y="126" fill="#FEF9C3" font-family="'Geist', sans-serif" font-size="11" font-weight="700">15 Calls</text>
            <rect x="214" y="96" width="86" height="42" rx="3" fill="#0E281F" stroke="rgba(234, 179, 8, 0.18)"/>
            <text x="222" y="110" fill="#EAB308" font-family="'JetBrains Mono', monospace" font-size="7">CLOSED</text>
            <text x="222" y="126" fill="#10B981" font-family="'Geist', sans-serif" font-size="11" font-weight="700">$10,000</text>
            <text x="24" y="162" fill="#EAB308" font-family="'JetBrains Mono', monospace" font-size="7.5">ACQUISITION ENGINE: 100% PREDICTABLE</text>
          </svg>
        `;
      case 'command':
      default:
        // Studio Command Founder Operating System
        return `
          <svg class="zone-artwork-svg" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Studio Operating System Cockpit">
            <rect width="320" height="180" rx="6" fill="#060911" stroke="rgba(6, 182, 212, 0.3)" stroke-width="1.5"/>
            <!-- Protocol Header -->
            <rect x="20" y="20" width="280" height="24" rx="3" fill="#0B1322" stroke="rgba(6, 182, 212, 0.2)"/>
            <text x="30" y="35" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="8" font-weight="700">AHKH STUDIO OS // 5-DAY DELIVERY SLA</text>
            <!-- 5-Day Delivery Schedule -->
            <rect x="20" y="52" width="50" height="50" rx="3" fill="#0D182A" stroke="rgba(6, 182, 212, 0.15)"/>
            <text x="27" y="68" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="7">DAY 1</text>
            <text x="27" y="86" fill="#ECFEFF" font-family="'Geist', sans-serif" font-size="8" font-weight="600">Wireframe</text>
            <rect x="77" y="52" width="50" height="50" rx="3" fill="#0D182A" stroke="rgba(6, 182, 212, 0.15)"/>
            <text x="84" y="68" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="7">DAY 2</text>
            <text x="84" y="86" fill="#ECFEFF" font-family="'Geist', sans-serif" font-size="8" font-weight="600">Copy Draft</text>
            <rect x="134" y="52" width="50" height="50" rx="3" fill="#0D182A" stroke="rgba(6, 182, 212, 0.15)"/>
            <text x="141" y="68" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="7">DAY 3</text>
            <text x="141" y="86" fill="#ECFEFF" font-family="'Geist', sans-serif" font-size="8" font-weight="600">Astro Dev</text>
            <rect x="191" y="52" width="50" height="50" rx="3" fill="#0D182A" stroke="rgba(6, 182, 212, 0.15)"/>
            <text x="198" y="68" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="7">DAY 4</text>
            <text x="198" y="86" fill="#ECFEFF" font-family="'Geist', sans-serif" font-size="8" font-weight="600">QA Audit</text>
            <rect x="248" y="52" width="52" height="50" rx="3" fill="#082F49" stroke="#06B6D4" stroke-width="1.2"/>
            <text x="254" y="68" fill="#38BDF8" font-family="'JetBrains Mono', monospace" font-size="7">DAY 5</text>
            <text x="254" y="86" fill="#FFFFFF" font-family="'Geist', sans-serif" font-size="8" font-weight="700">LAUNCH</text>
            <!-- Scope Shield -->
            <rect x="20" y="112" width="280" height="38" rx="3" fill="#0B1322" stroke="rgba(6, 182, 212, 0.2)"/>
            <text x="30" y="128" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="7.5">SCOPE FIREWALL ACTIVE</text>
            <text x="30" y="141" fill="#94A3B8" font-family="'Geist', sans-serif" font-size="7.5">No custom backends · No e-commerce · Pure speed &amp; local conversion</text>
            <text x="20" y="166" fill="#06B6D4" font-family="'JetBrains Mono', monospace" font-size="8">GOVERNANCE: REVISION_POLICY_2X · DEPOSIT_50%</text>
          </svg>
        `;
    }
  }

  // --- CHECKBOX SVG ICONS PER ZONE ---
  function getZoneCheckboxContent(zoneId, isChecked) {
    switch (zoneId) {
      case 'phase-0-1':
        return isChecked ? '✓' : '';
      case 'phase-2':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1"></rect></svg>`
          : `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="10" height="10" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1"></rect></svg>`;
      case 'phase-3':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11" aria-hidden="true"><path d="M3 8.5L6.5 12L13 4"></path></svg>`
          : '';
      case 'phase-4':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10" aria-hidden="true"><polygon points="8,1 15,8 8,15 1,8"></polygon></svg>`
          : '';
      case 'phase-5':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10" aria-hidden="true"><path d="M3.5 8L6.5 11.5L12.5 4.5"></path></svg>`
          : '';
      case 'phase-6':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="8" height="8" aria-hidden="true"><circle cx="8" cy="8" r="5"></circle></svg>`
          : '';
      case 'marketing-sales':
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10" aria-hidden="true"><path d="M3 8L7 12L13 3"></path></svg>`
          : '';
      case 'studio-playbook':
      default:
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10" aria-hidden="true"><polygon points="8,2 14,8 8,14 2,8"></polygon></svg>`
          : '';
    }
  }

  // --- RENDER CONTINUOUS WORLD ---
  function renderContinuousWorld() {
    if (!dom.worldStrip) return;
    dom.worldStrip.innerHTML = '';

    // 1. Origin Monument
    const originEl = document.createElement('div');
    originEl.className = 'origin-monument';
    originEl.id = 'monument-origin';
    originEl.innerHTML = `
      <svg class="origin-compass-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <circle cx="12" cy="12" r="10"></circle>
        <polygon points="12,4 15,12 12,20 9,12"></polygon>
      </svg>
      <div class="origin-tag">Journey Origin</div>
      <h1 class="origin-title">Web Foundations &amp; Developer Mechanics</h1>
      <p class="origin-desc">Zero AI shortcuts in fundamentals. Single service: lightning-fast marketing websites for local businesses with local SEO and high-conversion architectures.</p>
      <button type="button" class="origin-start-btn" id="btn-journey-start">Commence Journey &rarr;</button>
    `;
    dom.worldStrip.appendChild(originEl);

    // 2. Loop through all 8 Zones
    ALL_ZONES.forEach((zone, zoneIdx) => {
      const zoneEl = document.createElement('section');
      zoneEl.className = 'world-zone';
      zoneEl.dataset.zone = zone.id;
      zoneEl.id = `zone-${zone.id}`;

      const zonePillars = zone.pillars || [];
      const zoneTotal = zonePillars.length;

      // Render Zone Landmark & Visual Artwork Container
      const landmarkEl = document.createElement('div');
      landmarkEl.className = 'zone-landmark';
      landmarkEl.innerHTML = `
        <div class="landmark-top">
          <div class="landmark-header-tag">
            <span>${zone.number ? `Phase ${zone.number}` : 'Track'}</span>
            <span aria-hidden="true">&middot;</span>
            <span>${zone.timing || 'Continuous'}</span>
          </div>
          <h2 class="landmark-title">${zone.title}</h2>
          <p class="landmark-objective">${zone.summary}</p>
          
          <!-- Visual Artwork Display -->
          <div class="zone-visual-box" title="${zone.title} Visual Representation">
            ${getZoneVisualArtwork(zone.visualType)}
          </div>
        </div>

        <div class="landmark-bottom">
          <div class="landmark-stat-row">
            <span class="landmark-stat-label">Milestones</span>
            <span class="landmark-stat-readout" id="zone-stat-${zone.id}">0 / ${zoneTotal} (0%)</span>
          </div>
          <div class="landmark-progress-track">
            <div class="landmark-progress-fill" id="zone-fill-${zone.id}"></div>
          </div>
        </div>
      `;
      zoneEl.appendChild(landmarkEl);

      // Render Core Pillars Stream
      const coursesStreamEl = document.createElement('div');
      coursesStreamEl.className = 'zone-courses-stream';

      zonePillars.forEach((pillar) => {
        const isCompleted = state.completed.has(pillar.id);
        const cardEl = document.createElement('div');
        cardEl.className = `module-station pillar-card ${isCompleted ? 'is-completed' : ''}`;
        cardEl.id = `station-${pillar.id}`;
        cardEl.dataset.pillarId = pillar.id;
        cardEl.dataset.zoneId = zone.id;

        cardEl.innerHTML = `
          <div class="module-station-header">
            <div class="module-station-course-meta">
              <span>${pillar.type || 'Pillar'}</span>
              <span>${pillar.author}</span>
            </div>
            <h3 class="module-station-title">${pillar.title}</h3>
          </div>

          <div class="module-lessons-scroll">
            <div class="pillar-highlights-box">
              <span class="highlights-heading">Core Competencies:</span>
              <ul class="pillar-bullet-list">
                ${(pillar.highlights || []).map((h) => `<li>${h}</li>`).join('')}
              </ul>
            </div>

            ${
              pillar.deliverable
                ? `
              <div class="pillar-deliverable-badge">
                <span class="deliverable-tag">Deliverable</span>
                <span class="deliverable-title">${pillar.deliverable}</span>
              </div>
            `
                : ''
            }

            <div class="pillar-action-row">
              <button
                type="button"
                class="checkbox-btn ${isCompleted ? 'is-checked' : ''}"
                data-id="${pillar.id}"
                aria-label="Mark ${pillar.title} complete"
              >
                ${getZoneCheckboxContent(zone.id, isCompleted)}
              </button>
              <span class="action-label">${isCompleted ? 'Completed & Mastered' : 'Mark as Mastered'}</span>
            </div>
          </div>
        `;

        // Click to toggle milestone completion
        cardEl.addEventListener('click', (e) => {
          togglePillarCompleted(pillar.id);
        });

        coursesStreamEl.appendChild(cardEl);
      });

      zoneEl.appendChild(coursesStreamEl);
      dom.worldStrip.appendChild(zoneEl);

      // 3. Render Inter-Zone Transition Gate (if not last)
      if (zoneIdx < ALL_ZONES.length - 1) {
        const nextZone = ALL_ZONES[zoneIdx + 1];
        const gateEl = document.createElement('div');
        gateEl.className = 'zone-transition-gate';
        gateEl.dataset.from = zone.id;
        gateEl.dataset.to = nextZone.id;
        gateEl.innerHTML = `
          <div class="gate-pylon">
            <div class="gate-conduit-line" aria-hidden="true"></div>
            <div class="gate-waypoint-ring" title="Checkpoint Gate ${zoneIdx + 1} to ${zoneIdx + 2}">
              <span>0${zoneIdx + 1}</span>
            </div>
            <div class="gate-info">
              <span class="gate-transfer-label">Transit Gate</span>
              <span class="gate-dest-name">&rarr; ${nextZone.number ? `Phase 0${nextZone.number}` : nextZone.tag || 'Track'}</span>
            </div>
            <div class="gate-conduit-line" aria-hidden="true"></div>
          </div>
        `;
        dom.worldStrip.appendChild(gateEl);
      }
    });

    // 4. Apex Monument (Finish line)
    const apexEl = document.createElement('div');
    apexEl.className = 'apex-monument';
    apexEl.id = 'monument-apex';
    apexEl.innerHTML = `
      <svg class="apex-crest-vector" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"></path>
      </svg>
      <div class="apex-tag">Apex Mastery</div>
      <h2 class="apex-title">$100k Boutique Freelance Studio</h2>
      <p class="apex-desc">All 42 core curricula, architectural books, capstones, and commercial playbooks mastered. Sovereign positioning, zero technical compromises, and predictable client acquisition.</p>
      <button type="button" class="origin-start-btn" id="btn-journey-rewind">&larr; Return to Foundry</button>
    `;
    dom.worldStrip.appendChild(apexEl);

    // Setup origin & apex navigation buttons
    document.getElementById('btn-journey-start')?.addEventListener('click', () => {
      const firstZone = document.getElementById(`zone-${ALL_ZONES[0].id}`);
      if (firstZone) {
        firstZone.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      }
    });

    document.getElementById('btn-journey-rewind')?.addEventListener('click', () => {
      dom.worldViewport.scrollTo({ left: 0, behavior: 'smooth' });
    });

    // Initialize SVG World Spine path
    updateWorldSpine();
  }

  // --- RENDER PANORAMA MINI-MAP ---
  function renderMiniMap() {
    if (!dom.minimapTrack) return;
    dom.minimapTrack.innerHTML = '';

    ALL_ZONES.forEach((zone, idx) => {
      const slotEl = document.createElement('div');
      slotEl.className = 'minimap-stage-slot';
      slotEl.dataset.zoneId = zone.id;
      slotEl.title = `${zone.title} (Click to jump)`;

      const code = zone.number ? `PH 0${zone.number}` : (zone.tag ? zone.tag.slice(0, 6).toUpperCase() : `TRK ${idx + 1}`);

      slotEl.innerHTML = `
        <div class="minimap-slot-meta">
          <span class="minimap-slot-code">${code}</span>
          <span class="minimap-slot-pct" id="minimap-pct-${zone.id}">0%</span>
        </div>
        <div class="minimap-slot-bar">
          <div class="minimap-slot-fill" id="minimap-fill-${zone.id}"></div>
        </div>
      `;

      // Jump to zone on click
      slotEl.addEventListener('click', () => {
        scrollToZone(zone.id);
      });

      dom.minimapTrack.appendChild(slotEl);
    });
  }

  // --- UPDATE WORLD SPINE SVG PATH ---
  function updateWorldSpine() {
    if (!dom.worldStrip || !dom.worldSpineBase || !dom.worldSpineActive) return;

    const stripWidth = dom.worldStrip.scrollWidth || 10000;
    const stripHeight = dom.worldViewport.clientHeight || 700;
    const centerY = Math.floor(stripHeight * 0.48);

    const d = `M 160 ${centerY} L ${stripWidth - 160} ${centerY}`;
    dom.worldSpineBase.setAttribute('d', d);
    dom.worldSpineActive.setAttribute('d', d);

    const totalLen = stripWidth - 320;
    dom.worldSpineActive.style.strokeDasharray = `${totalLen}`;

    const completedRatio = TOTAL_PILLARS > 0 ? state.completed.size / TOTAL_PILLARS : 0;
    const activeLength = totalLen * completedRatio;
    dom.worldSpineActive.style.strokeDashoffset = `${totalLen - activeLength}`;
  }

  // --- TOGGLE PILLAR COMPLETION ---
  function togglePillarCompleted(pillarId) {
    if (state.completed.has(pillarId)) {
      state.completed.delete(pillarId);
    } else {
      state.completed.add(pillarId);
    }
    saveState();
    updateUI();
  }

  // --- UPDATE UI STATS & VISUALS ---
  function updateUI() {
    const completedCount = state.completed.size;
    const pct = TOTAL_PILLARS > 0 ? Math.round((completedCount / TOTAL_PILLARS) * 100) : 0;
    const scale = completedCount / TOTAL_PILLARS;

    // 1. Top Progress Line
    if (dom.topProgressFill) {
      dom.topProgressFill.style.transform = `scaleX(${scale})`;
    }

    // 2. Global Metric Pill
    if (dom.globalStatReadout) {
      dom.globalStatReadout.innerHTML = `<strong>${completedCount}</strong> / ${TOTAL_PILLARS}`;
    }
    if (dom.globalStatPercent) {
      dom.globalStatPercent.textContent = `(${pct}%)`;
    }

    // 3. Filter Counts
    if (dom.countFilterAll) dom.countFilterAll.textContent = `(${TOTAL_PILLARS})`;
    if (dom.countFilterIncomplete) dom.countFilterIncomplete.textContent = `(${TOTAL_PILLARS - completedCount})`;
    if (dom.countFilterCompleted) dom.countFilterCompleted.textContent = `(${completedCount})`;

    // 4. Update each Zone & its Pillars
    ALL_ZONES.forEach((zone) => {
      let zoneCompleted = 0;
      const zonePillars = zone.pillars || [];
      const zoneTotal = zonePillars.length;

      zonePillars.forEach((pillar) => {
        const isCompleted = state.completed.has(pillar.id);
        if (isCompleted) {
          zoneCompleted++;
        }

        // Update card DOM
        const cardEl = document.getElementById(`station-${pillar.id}`);
        if (cardEl) {
          if (isCompleted) {
            cardEl.classList.add('is-completed');
          } else {
            cardEl.classList.remove('is-completed');
          }
          const btn = cardEl.querySelector('.checkbox-btn');
          const label = cardEl.querySelector('.action-label');
          if (btn) {
            if (isCompleted) {
              btn.classList.add('is-checked');
            } else {
              btn.classList.remove('is-checked');
            }
            btn.innerHTML = getZoneCheckboxContent(zone.id, isCompleted);
          }
          if (label) {
            label.textContent = isCompleted ? 'Completed & Mastered' : 'Mark as Mastered';
          }
        }
      });

      // Update zone landmark stat & progress fill
      const zonePct = zoneTotal > 0 ? Math.round((zoneCompleted / zoneTotal) * 100) : 0;
      const zoneStatEl = document.getElementById(`zone-stat-${zone.id}`);
      const zoneFillEl = document.getElementById(`zone-fill-${zone.id}`);
      if (zoneStatEl) zoneStatEl.textContent = `${zoneCompleted} / ${zoneTotal} (${zonePct}%)`;
      if (zoneFillEl) zoneFillEl.style.transform = `scaleX(${zoneTotal > 0 ? zoneCompleted / zoneTotal : 0})`;

      // Update mini-map slot
      const minimapPctEl = document.getElementById(`minimap-pct-${zone.id}`);
      const minimapFillEl = document.getElementById(`minimap-fill-${zone.id}`);
      if (minimapPctEl) minimapPctEl.textContent = `${zonePct}%`;
      if (minimapFillEl) minimapFillEl.style.transform = `scaleX(${zoneTotal > 0 ? zoneCompleted / zoneTotal : 0})`;
    });

    // 5. Update World Spine
    updateWorldSpine();

    // 6. Apply filter visibility
    applyFilter();
  }

  // --- FILTER SYSTEM ---
  function applyFilter() {
    const cards = document.querySelectorAll('.pillar-card');
    cards.forEach((card) => {
      const isCompleted = card.classList.contains('is-completed');
      if (state.filter === 'incomplete' && isCompleted) {
        card.style.display = 'none';
      } else if (state.filter === 'completed' && !isCompleted) {
        card.style.display = 'none';
      } else {
        card.style.display = 'flex';
      }
    });
  }

  // --- SEARCH SYSTEM ---
  function handleSearch(query) {
    state.searchQuery = (query || '').trim().toLowerCase();
    const cards = document.querySelectorAll('.pillar-card');
    state.searchMatches = [];
    state.searchMatchIndex = 0;

    cards.forEach((card) => {
      card.classList.remove('matched-highlight');
      if (!state.searchQuery) return;

      const text = card.textContent.toLowerCase();
      if (text.includes(state.searchQuery)) {
        card.classList.add('matched-highlight');
        state.searchMatches.push(card);
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
    const targetCard = state.searchMatches[state.searchMatchIndex];
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    }
    state.searchMatchIndex = (state.searchMatchIndex + 1) % state.searchMatches.length;
  }

  // --- VIEWPORT SCROLL & MINI-MAP SYNCHRONIZATION ---
  function updateMiniMapLens() {
    if (!dom.worldViewport || !dom.minimapLens) return;
    const scrollLeft = dom.worldViewport.scrollLeft;
    const scrollWidth = dom.worldViewport.scrollWidth;
    const clientWidth = dom.worldViewport.clientWidth;

    const maxScroll = Math.max(1, scrollWidth - clientWidth);
    const scrollRatio = scrollLeft / maxScroll;

    const viewportRatio = Math.max(0.08, Math.min(1, clientWidth / scrollWidth));
    const lensWidthPct = viewportRatio * 100;
    const lensLeftPct = scrollRatio * (100 - lensWidthPct);

    dom.minimapLens.style.width = `${lensWidthPct}%`;
    dom.minimapLens.style.transform = `translateX(${(lensLeftPct / lensWidthPct) * 100}%)`;
  }

  function scrollToZone(zoneId) {
    const zoneEl = document.getElementById(`zone-${zoneId}`);
    if (zoneEl) {
      zoneEl.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }

  function stepZone(direction) {
    const currentScroll = dom.worldViewport.scrollLeft;
    const zones = Array.from(document.querySelectorAll('.world-zone'));
    if (direction > 0) {
      const next = zones.find((z) => z.offsetLeft > currentScroll + 50);
      if (next) next.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    } else {
      const prev = zones.reverse().find((z) => z.offsetLeft < currentScroll - 50);
      if (prev) prev.scrollIntoView({ behavior: 'smooth', inline: 'start' });
      else dom.worldViewport.scrollTo({ left: 0, behavior: 'smooth' });
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
    dom.worldViewport.addEventListener(
      'wheel',
      (e) => {
        const scrollable = e.target.closest('.module-lessons-scroll');
        if (scrollable) {
          const atTop = scrollable.scrollTop === 0;
          const atBottom = scrollable.scrollHeight - scrollable.scrollTop <= scrollable.clientHeight + 2;
          if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
            return;
          }
        }

        if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
          e.preventDefault();
          dom.worldViewport.scrollLeft += e.deltaY * 1.25;
        }
      },
      { passive: false }
    );

    // 2. Click and Drag to Pan Canvas
    let isDown = false;
    let startX = 0;
    let scrollStart = 0;

    dom.worldViewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('button, input, a, .pillar-card, .minimap-container')) return;
      isDown = true;
      dom.worldViewport.classList.add('is-dragging');
      startX = e.pageX - dom.worldViewport.offsetLeft;
      scrollStart = dom.worldViewport.scrollLeft;
    });

    window.addEventListener('mouseup', () => {
      if (isDown) {
        isDown = false;
        dom.worldViewport.classList.remove('is-dragging');
      }
    });

    window.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - dom.worldViewport.offsetLeft;
      const walk = (x - startX) * 1.5;
      dom.worldViewport.scrollLeft = scrollStart - walk;
    });

    // 3. Mini-Map Sync
    dom.worldViewport.addEventListener('scroll', () => {
      updateMiniMapLens();
    });

    window.addEventListener('resize', () => {
      updateMiniMapLens();
      updateWorldSpine();
    });

    // 4. Keyboard Arrow Navigation
    window.addEventListener('keydown', (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowRight') {
        e.preventDefault();
        stepZone(1);
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        stepZone(-1);
      } else if (e.key === 'Home') {
        e.preventDefault();
        dom.worldViewport.scrollTo({ left: 0, behavior: 'smooth' });
      } else if (e.key === 'End') {
        e.preventDefault();
        dom.worldViewport.scrollTo({ left: dom.worldViewport.scrollWidth, behavior: 'smooth' });
      } else if (e.key === ' ') {
        e.preventDefault();
        toggleOverviewMode();
      }
    });

    // 5. Navigation Buttons
    dom.btnPrevZone?.addEventListener('click', () => stepZone(-1));
    dom.btnNextZone?.addEventListener('click', () => stepZone(1));

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
        dom.worldCanvas.classList.add('overview-mode');
        dom.btnToggleOverview?.classList.add('active');
        if (dom.overviewLabel) dom.overviewLabel.textContent = 'Exit Overview';
      } else {
        dom.worldCanvas.classList.remove('overview-mode');
        dom.btnToggleOverview?.classList.remove('active');
        if (dom.overviewLabel) dom.overviewLabel.textContent = 'Overview';
      }
    }

    dom.btnToggleOverview?.addEventListener('click', toggleOverviewMode);

    dom.worldCanvas?.addEventListener('click', (e) => {
      if (state.overviewMode) {
        const zone = e.target.closest('.world-zone');
        toggleOverviewMode();
        if (zone) {
          setTimeout(() => {
            zone.scrollIntoView({ behavior: 'smooth', inline: 'start' });
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
      if (confirm('Reset all completed roadmap milestones?')) {
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
    renderContinuousWorld();
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
