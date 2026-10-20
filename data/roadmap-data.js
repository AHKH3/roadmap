/**
 * ============================================================================
 * AHKH ROADMAP DATA — SINGLE SOURCE OF TRUTH
 * ============================================================================
 * HOW TO EDIT THIS ROADMAP IN CODE:
 * - Every phase, course, module, lesson, milestone, and studio rule lives here.
 * - Each checkable item has a unique `id`. Keep existing `id` values unchanged
 *   when editing text so your browser `localStorage` progress stays intact.
 * - To add a new lesson/module/course, just add a new object with a unique `id`.
 * ============================================================================
 */

window.ROADMAP_DATA = {
  meta: {
    version: "1.0.0",
    storageKey: "ahkh_marketing_freelancer_roadmap_v1",
    title: "Roadmap: Marketing Websites Freelancer",
    titleAr: "خارطة الطريق: مستقل مواقع التسويق للشركات المحلية",
    serviceTagline:
      "One service: fast, premium marketing websites for local businesses — clinics, restaurants, gyms, shops — with local SEO, a WhatsApp button, and a booking form.",
    serviceTaglineAr:
      "خدمة واحدة مركّزة: مواقع تسويقية سريعة وفاخرة للأعمال المحلية (عيادات، مطاعم، جيم، محلات) مع سيو محلي، زر واتساب، ونموذج حجز.",
    currentFocus: {
      badge: "Current Focus",
      badgeAr: "التركيز الحالي",
      title: "Phase 0 & 1: Web — everything else stays hidden until its turn.",
      titleAr: "المرحلة 0 و 1: الويب — كل شيء آخر يبقى مخفياً حتى يأتي دوره.",
      goldenRule: "The rule: don’t start a new course before publishing the previous phase’s project.",
      goldenRuleAr: "القاعدة الذهبية: لا تبدأ أي كورس جديد قبل نشر مشروع المرحلة السابقة فعلياً."
    },
    pathFlow: [
      { id: "phase-0-1", label: "Phase 0–1: Web", labelAr: "المرحلة 0–1: الويب", weeks: "Weeks 1–6" },
      { id: "phase-2", label: "Phase 2: Design", labelAr: "المرحلة 2: التصميم", weeks: "Weeks 4–10" },
      { id: "phase-3", label: "Phase 3: Stack", labelAr: "المرحلة 3: التقنيات", weeks: "Weeks 8–14" },
      { id: "phase-4", label: "Phase 4: Sells", labelAr: "المرحلة 4: موقع يبيع", weeks: "Weeks 10–14" },
      { id: "phase-5", label: "Phase 5: Selling", labelAr: "المرحلة 5: البيع", weeks: "From Week 12" },
      { id: "phase-6", label: "After Month 6", labelAr: "بعد الشهر السادس", weeks: "Month 6+" }
    ],
    strategyCards: [
      {
        id: "strat-idea",
        icon: "compass",
        accent: "cyan",
        title: "The Idea",
        titleAr: "الفكرة الجوهرية",
        body: "Don’t study web, design, and SEO in full — learn only the parts that serve this service. UX/UI lives inside design; AI is a tool in every phase.",
        bodyAr: "لا تدرس الويب والتصميم والسيو بالكامل — تعلّم فقط الأجزاء التي تخدم هذه الخدمة تحديداً. الـ UX/UI يعيش داخل التصميم، والذكاء الاصطناعي أداة مساعدة في كل مرحلة."
      },
      {
        id: "strat-edge",
        icon: "zap",
        accent: "emerald",
        title: "The Edge",
        titleAr: "الميزة التنافسية",
        body: "Design quality + fast delivery + understanding the client + a site that gets results. Not just “using AI”.",
        bodyAr: "جودة التصميم + سرعة التسليم + فهم العميل المحلي + موقع يحقق نتائج ومبيعات حقيقية. وليس مجرد «استخدام الذكاء الاصطناعي»."
      },
      {
        id: "strat-longterm",
        icon: "trending-up",
        accent: "violet",
        title: "Long-Term Vision",
        titleAr: "الرؤية بعيدة المدى",
        body: "Raise prices → delegate → start a studio. The same path leads toward Design Engineer.",
        bodyAr: "ارفع الأسعار ← فوّض المهام ← أسّس استوديو (AHKH Studio). نفس هذا المسار يقودك لتصبح Design Engineer عالمي."
      },
      {
        id: "strat-ai",
        icon: "cpu",
        accent: "amber",
        title: "AI Along the Way",
        titleAr: "الذكاء الاصطناعي في الطريق",
        items: [
          "Free tiers of Cursor or GitHub Copilot, only after I understand the code",
          "Content drafts and images generation/enhancement",
          "Later, an upsell: a booking bot or auto-replies"
        ],
        itemsAr: [
          "النسخ المجانية من Cursor أو GitHub Copilot — فقط بعد فهم الكود وكتابته بيدك أولاً",
          "مسودات المحتوى التسويقي والصور المبدئية",
          "لاحقاً كخدمة إضافية (Upsell): بوت حجز أو ردود تلقائية"
        ]
      },
      {
        id: "strat-later",
        icon: "clock",
        accent: "rose",
        title: "Parking Lot (Later — Not Now)",
        titleAr: "مؤجل لما بعد المسار الأساسي",
        body: "Not now, but I will learn these after the core path:",
        bodyAr: "ليس الآن، ولكن سأتعلمها بعد إتقان المسار الأساسي وتحقيق الدخل:",
        pills: [
          "Advanced Python",
          "Full Backend",
          "Machine Learning (ML)",
          "React Native",
          "Advanced SEO",
          "Full Branding"
        ]
      }
    ]
  },

  // ==========================================================================
  // CORE MILESTONES (6 Major Checkpoints)
  // ==========================================================================
  milestones: [
    {
      id: "ms-1-bookshop",
      order: 1,
      title: "First live site published (bookshop page)",
      titleAr: "نشر أول موقع حي (صفحة مكتبة الكتب بالكود اليدوي)",
      targetPhase: "Phase 0 & 1",
      timeline: "Week 6",
      icon: "globe"
    },
    {
      id: "ms-2-figma",
      order: 2,
      title: "3 Figma homepages designed",
      titleAr: "تصميم 3 صفحات رئيسية في فيجما (عيادة، مطعم، جيم)",
      targetPhase: "Phase 2",
      timeline: "Week 10",
      icon: "figma"
    },
    {
      id: "ms-3-lighthouse",
      order: 3,
      title: "3 live sites, Lighthouse 90+",
      titleAr: "نشر 3 مواقع حية بأداء Lighthouse فوق 90+",
      targetPhase: "Phase 3",
      timeline: "Week 14",
      icon: "gauge"
    },
    {
      id: "ms-4-portfolio",
      order: 4,
      title: "Portfolio site on my own domain",
      titleAr: "إطلاق موقع البورتفوليو الشخصي على دومين خاص بي",
      targetPhase: "Phase 5",
      timeline: "Week 12–14",
      icon: "award"
    },
    {
      id: "ms-5-first-client",
      order: 5,
      title: "First paying client (~month 3)",
      titleAr: "أول عميل يدفع مقابل الخدمة (~الشهر الثالث)",
      targetPhase: "Phase 5",
      timeline: "~Month 3",
      icon: "banknote"
    },
    {
      id: "ms-6-pro-level",
      order: 6,
      title: "Professional level (~month 6)",
      titleAr: "الوصول للمستوى الاحترافي الكامل (~الشهر السادس)",
      targetPhase: "After Month 6",
      timeline: "~Month 6",
      icon: "crown"
    }
  ],

  // ==========================================================================
  // CORE PHASES (With Literal Course, Book, Module & Lesson Breakdowns)
  // ==========================================================================
  phases: [
    // ------------------------------------------------------------------------
    // PHASE 0 & 1: WEB (WEEKS 1-6)
    // ------------------------------------------------------------------------
    {
      id: "phase-0-1",
      number: "0 & 1",
      title: "Phase 0 & 1: Web Foundations",
      titleAr: "المرحلة 0 و 1: تأسيس الويب (HTML, CSS, Responsive, DOM)",
      weeks: "Weeks 1–6",
      pace: "~2–3 h/day",
      initialStatus: "current", // current | locked
      accent: "emerald",
      summary:
        "Master clean semantic HTML, modern CSS, responsive layouts without frameworks, and essential JavaScript DOM manipulation & events.",
      summaryAr:
        "إتقان كتابة HTML الدلالي، وCSS الحديثة، والتخطيطات المتجاوبة لكل الشاشات، وأساسيات التعامل مع الـ DOM والأحداث في JavaScript.",
      referenceNote: "Stuck? Use Elzero Web School or MDN as a reference — not a new course.",
      referenceNoteAr: "وقفت في نقطة؟ استخدم Elzero أو MDN كمرجع للبحث فقط — ولا تشتت نفسك بكورس جديد.",
      courses: [
        {
          id: "c-scrimba-html-css",
          type: "Interactive Course",
          typeAr: "كورس تفاعلي",
          provider: "Scrimba · Per Harald Borgen",
          title: "Scrimba — Learn HTML and CSS",
          titleAr: "كورس Scrimba — تعلّم HTML و CSS بالتطبيق العملي",
          url: "https://scrimba.com/learn/htmlandcss",
          duration: "~5.5 Hours · 6 Modules · 95 Interactive Casts",
          description:
            "Build and deploy 5 real mini-projects while learning HTML5 tags, CSS box model, Flexbox, typography, and Netlify deployment.",
          descriptionAr:
            "بناء ونشر 5 مشاريع مصغرة مع تعلم وسوم HTML5، الصندوق المرن Flexbox، الخطوط، والرفع على Netlify.",
          modules: [
            {
              id: "m-shc-1",
              title: "Module 1: Build and Deploy Your First Website",
              titleAr: "الوحدة 1: بناء ونشر موقعك الأول من الصفر",
              lessons: [
                { id: "l-shc-1-1", title: "1.1 Welcome to the course & Scrimba interactive editor", time: "4m" },
                { id: "l-shc-1-2", title: "1.2 HTML tags: headings <h1>–<h6> & paragraphs <p>", time: "8m" },
                { id: "l-shc-1-3", title: "1.3 Self-closing tags & rendering images <img src alt>", time: "9m" },
                { id: "l-shc-1-4", title: "1.4 Nesting HTML elements & proper indentation", time: "7m" },
                { id: "l-shc-1-5", title: "1.5 Interactive elements: <button> & <input> attributes (type, placeholder)", time: "10m" },
                { id: "l-shc-1-6", title: "1.6 Anchor tags <a href>, target='_blank', and multi-page linking", time: "8m" },
                { id: "l-shc-1-7", title: "1.7 Ordered <ol> and Unordered <ul> lists", time: "6m" },
                { id: "l-shc-1-8", title: "1.8 Proper HTML5 document structure: <!doctype html>, <head>, <title>, <meta>, <body>", time: "9m" },
                { id: "l-shc-1-9", title: "1.9 Personal Website Project & Live Deployment to Netlify", time: "12m" }
              ]
            },
            {
              id: "m-shc-2",
              title: "Module 2: Build a Google.com Clone (CSS Basics & Box Model)",
              titleAr: "الوحدة 2: بناء نسخة Google.com (أساسيات CSS والـ Box Model)",
              lessons: [
                { id: "l-shc-2-1", title: "2.1 Linking external styles.css & writing CSS rulesets", time: "7m" },
                { id: "l-shc-2-2", title: "2.2 Inline vs Block elements & display: block", time: "8m" },
                { id: "l-shc-2-3", title: "2.3 The CSS Box Model: width, margin, padding, and border", time: "12m" },
                { id: "l-shc-2-4", title: "2.4 CSS Classes (.class) vs Element selectors", time: "8m" },
                { id: "l-shc-2-5", title: "2.5 Centering block elements with margin-left/right: auto", time: "9m" },
                { id: "l-shc-2-6", title: "2.6 Grouping with <div> containers & styling the search input/buttons", time: "11m" },
                { id: "l-shc-2-7", title: "2.7 Intro to Flexbox for side-by-side buttons (display: flex, justify-content: center, gap)", time: "10m" }
              ]
            },
            {
              id: "m-shc-3",
              title: "Module 3: Build a Digital Business Card (Flexbox & Utility Classes)",
              titleAr: "الوحدة 3: بناء بطاقة أعمال رقمية (Flexbox والكلاسات المساعدة)",
              lessons: [
                { id: "l-shc-3-1", title: "3.1 Setting up card layout, avatar image, and semantic alt text", time: "8m" },
                { id: "l-shc-3-2", title: "3.2 Flexbox child containers & two-column card layout", time: "10m" },
                { id: "l-shc-3-3", title: "3.3 Utility classes & Single Responsibility Principle in CSS", time: "8m" },
                { id: "l-shc-3-4", title: "3.4 Horizontal & text centering (justify-content, text-align)", time: "7m" },
                { id: "l-shc-3-5", title: "3.5 CSS Inheritance & setting font-family on <body>", time: "7m" },
                { id: "l-shc-3-6", title: "3.6 Choosing professional color palettes (Coolors) & accent bottom borders", time: "10m" }
              ]
            },
            {
              id: "m-shc-4",
              title: "Module 4: Build a Space Exploration Landing Page (Typography & Hero)",
              titleAr: "الوحدة 4: بناء صفحة استكشاف الفضاء (الخطوط والـ Hero Section)",
              lessons: [
                { id: "l-shc-4-1", title: "4.1 Full-bleed Hero background images (background-image, background-size: cover)", time: "9m" },
                { id: "l-shc-4-2", title: "4.2 Importing Google Fonts & custom @font-face", time: "10m" },
                { id: "l-shc-4-3", title: "4.3 Inline styling with <span> for underlined CTA words", time: "6m" },
                { id: "l-shc-4-4", title: "4.4 Element IDs (#id) vs Classes & specificity basics", time: "8m" },
                { id: "l-shc-4-5", title: "4.5 Improving text contrast over images with text-shadow", time: "8m" },
                { id: "l-shc-4-6", title: "4.6 WebP animated/optimized formats & viewport clean margins", time: "7m" }
              ]
            },
            {
              id: "m-shc-5",
              title: "Module 5: Build a Birthday GIFt Site (Flex Alignment, Gradients & Hover)",
              titleAr: "الوحدة 5: بناء موقع تفاعلي (محاذاة Flexbox، التدرجات، وحالات Hover)",
              lessons: [
                { id: "l-shc-5-1", title: "5.1 Flex-direction: column & align-items vs justify-content axes", time: "12m" },
                { id: "l-shc-5-2", title: "5.2 Turning circular avatars with border-radius: 50%", time: "6m" },
                { id: "l-shc-5-3", title: "5.3 Interactive :hover pseudo-class for background image swaps", time: "11m" },
                { id: "l-shc-5-4", title: "5.4 Grouping selectors & reusable gift-section components", time: "8m" },
                { id: "l-shc-5-5", title: "5.5 CSS linear-gradient() backgrounds & semantic footer", time: "9m" }
              ]
            },
            {
              id: "m-shc-6",
              title: "Module 6: Solo Project — Hometown Homepage",
              titleAr: "الوحدة 6: المشروع الفردي — الصفحة الرئيسية لمدينتك",
              lessons: [
                { id: "l-shc-6-1", title: "6.1 Reading the Figma spec: colors, typography, spacing", time: "10m" },
                { id: "l-shc-6-2", title: "6.2 Building the Hero banner with centered badge headings", time: "15m" },
                { id: "l-shc-6-3", title: "6.3 Building the 3-column 'Top 3 Activities' Flexbox section", time: "20m" },
                { id: "l-shc-6-4", title: "6.4 Building the 'Your Local Guide' testimonial card & deploying", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-scrimba-multipage-kp",
          type: "Project Course",
          typeAr: "كورس مشروع متكامل",
          provider: "Scrimba · Kevin Powell",
          title: "Scrimba — Build a Multi-Page Website (Kevin Powell)",
          titleAr: "كورس Scrimba — بناء موقع متعدد الصفحات بنظام تصميم احترافي (Kevin Powell)",
          url: "https://scrimba.com/learn/spacetravel",
          duration: "~8 Hours · 5 Modules · 66 Lessons",
          description:
            "Build a production-grade responsive multi-page site from a professional Figma file using CSS custom properties, utility systems, CSS Grid, and accessible tabs/navigation.",
          descriptionAr:
            "بناء موقع متكامل متعدد الصفحات من ملف فيجما احترافي باستخدام متغيرات CSS، نظام التصميم، CSS Grid، والقوائم المتجاوبة.",
          modules: [
            {
              id: "m-smp-1",
              title: "Module 1: Modern CSS Reset & Design System Tokens",
              titleAr: "الوحدة 1: تصفير CSS وبناء نظام التصميم والمتغيرات (Design System)",
              lessons: [
                { id: "l-smp-1-1", title: "1.1 Analyzing the Figma Design System & multi-page architecture", time: "10m" },
                { id: "l-smp-1-2", title: "1.2 Setting up a modern CSS Reset (box-sizing, margins, images, form inherit)", time: "14m" },
                { id: "l-smp-1-3", title: "1.3 CSS Custom Properties (:root) for HSL colors & alpha channels", time: "15m" },
                { id: "l-smp-1-4", title: "1.4 Fluid Typography scale across breakpoints using CSS variables", time: "16m" },
                { id: "l-smp-1-5", title: "1.5 Utility classes for colors, typography, uppercase, and letter-spacing", time: "14m" },
                { id: "l-smp-1-6", title: "1.6 Accessibility utilities: .sr-only for screen readers", time: "8m" }
              ]
            },
            {
              id: "m-smp-2",
              title: "Module 2: Layout Primitives, Spacing & Components",
              titleAr: "الوحدة 2: قوالب التخطيط (Grid & Flex) والمسافات والمكونات",
              lessons: [
                { id: "l-smp-2-1", title: "2.1 Building .flex and .grid layout primitives with dynamic --gap", time: "12m" },
                { id: "l-smp-2-2", title: "2.2 The Lobotomized Owl selector (* + *) & .flow vertical rhythm utility", time: "14m" },
                { id: "l-smp-2-3", title: "2.3 Responsive .container and .grid-container with max-width & minmax()", time: "18m" },
                { id: "l-smp-2-4", title: "2.4 Interactive Large CTA Button with animated hover aura ring (::after)", time: "15m" },
                { id: "l-smp-2-5", title: "2.5 Interactive Underline Indicators, Tab Buttons & Dot Indicators", time: "16m" },
                { id: "l-smp-2-6", title: "2.6 Building the Living Design System documentation page", time: "15m" }
              ]
            },
            {
              id: "m-smp-3",
              title: "Module 3: Homepage, Responsive Backgrounds & Mobile Navigation",
              titleAr: "الوحدة 3: الصفحة الرئيسية، الخلفيات المتجاوبة، وقائمة الموبايل",
              lessons: [
                { id: "l-smp-3-1", title: "3.1 Structuring the Homepage HTML &numbered section titles", time: "12m" },
                { id: "l-smp-3-2", title: "3.2 Responsive grid layout: Mobile stack → Tablet centered → Desktop 2-column", time: "18m" },
                { id: "l-smp-3-3", title: "3.3 Glassmorphic Primary Navbar (backdrop-filter: blur) & @supports fallback", time: "15m" },
                { id: "l-smp-3-4", title: "3.4 Slide-out Mobile Hamburger Menu with data-visible & aria-expanded", time: "20m" },
                { id: "l-smp-3-5", title: "3.5 Writing clean JavaScript for the mobile navigation toggle", time: "14m" },
                { id: "l-smp-3-6", title: "3.6 Responsive art-directed background images per device viewport", time: "12m" }
              ]
            },
            {
              id: "m-smp-4",
              title: "Module 4: Destination Page, CSS Grid Areas & Accessible Tabs",
              titleAr: "الوحدة 4: صفحة الوجهات، مناطق CSS Grid، والتبويبات التفاعلية",
              lessons: [
                { id: "l-smp-4-1", title: "4.1 Building complex multi-breakpoint layouts with grid-template-areas", time: "20m" },
                { id: "l-smp-4-2", title: "4.2 Structuring ARIA tablists, tabs, and tabpanels for accessibility", time: "15m" },
                { id: "l-smp-4-3", title: "4.3 JavaScript Keyboard Navigation (ArrowLeft / ArrowRight focus management)", time: "18m" },
                { id: "l-smp-4-4", title: "4.4 Dynamic tab panel switching & image swapping (<picture> + WebP)", time: "18m" }
              ]
            },
            {
              id: "m-smp-5",
              title: "Module 5: Crew Page, Technology Page & Production Polish",
              titleAr: "الوحدة 5: الصفحات الداخلية، عنصر <picture>، والمراجعة النهائية",
              lessons: [
                { id: "l-smp-5-1", title: "5.1 Crew Page layout: Reordering DOM vs visual order with grid-template-areas", time: "18m" },
                { id: "l-smp-5-2", title: "5.2 Reusable JS tab architecture across Dot & Numbered indicators", time: "15m" },
                { id: "l-smp-5-3", title: "5.3 Technology Page: Responsive <picture media='...'> portrait vs landscape images", time: "16m" },
                { id: "l-smp-5-4", title: "5.4 Cross-browser QA, Lighthouse accessibility & performance audit", time: "14m" }
              ]
            }
          ]
        },
        {
          id: "c-kp-conquering-responsive",
          type: "21-Day Flagship Course",
          typeAr: "تحدي 21 يوماً",
          provider: "Kevin Powell · courses.kevinpowell.co",
          title: "Kevin Powell — Conquering Responsive Layouts",
          titleAr: "كورس Kevin Powell — إتقان التصميم المتجاوب (Conquering Responsive Layouts)",
          url: "https://courses.kevinpowell.co/conquering-responsive-layouts",
          duration: "21 Days · 5 Modules · 6 Hands-On Challenges",
          description:
            "The definitive mental model for responsive CSS: why websites are naturally responsive before we break them with fixed widths/heights, mastering Flexbox, media queries, and mobile-first architecture.",
          descriptionAr:
            "أقوى كورس لبناء عقلية التجاوب في CSS: التخلص من الأبعاد الثابتة التي تكسر الشاشات، احتراف Flexbox، والـ Media Queries بنهج Mobile-First.",
          modules: [
            {
              id: "m-kpr-1",
              title: "Module 1 (Days 1–5): Fluid Widths, Percentages & Avoiding Fixed Heights",
              titleAr: "الوحدة 1 (الأيام 1–5): النسب المئوية، max-width، وتجنب الارتفاعات الثابتة",
              lessons: [
                { id: "l-kpr-1-1", title: "Day 1: Percentages vs Fixed px widths & child percentage calculations", time: "18m" },
                { id: "l-kpr-1-2", title: "Day 2: Why you should almost never set fixed height (letting content dictate height)", time: "15m" },
                { id: "l-kpr-1-3", title: "Day 3: Challenge #1 — Fixing overflow & responsive container constraints", time: "25m" },
                { id: "l-kpr-1-4", title: "Day 4: Solution walkthrough + The magic of max-width + width: 80–90%", time: "20m" },
                { id: "l-kpr-1-5", title: "Day 5: Challenge #2 + Solution — Full-bleed bands with centered inner containers", time: "25m" }
              ]
            },
            {
              id: "m-kpr-2",
              title: "Module 2 (Days 6–8): Entering the World of Flexbox",
              titleAr: "الوحدة 2 (الأيام 6–8): الدخول لعالم Flexbox وبناء الـ Hero Section",
              lessons: [
                { id: "l-kpr-2-1", title: "Day 6: Display: flex, flex items, and column spacing with gap", time: "20m" },
                { id: "l-kpr-2-2", title: "Day 7: Controlling main & cross axes (justify-content & align-items)", time: "18m" },
                { id: "l-kpr-2-3", title: "Day 8: Challenge #3 — Building the 3-column feature row & Hero banner", time: "35m" }
              ]
            },
            {
              id: "m-kpr-3",
              title: "Module 3 (Days 9–12): Flexbox Deeper Dive & Navigation Bars",
              titleAr: "الوحدة 3 (الأيام 9–12): التعمق في Flexbox وبناء شريط التنقل (Navbar)",
              lessons: [
                { id: "l-kpr-3-1", title: "Day 9: Responsive images (max-width: 100%) & 2-column Hero + Sidebar layout", time: "25m" },
                { id: "l-kpr-3-2", title: "Day 10: Understanding flex-grow, flex-shrink, and flex-basis", time: "20m" },
                { id: "l-kpr-3-3", title: "Day 11: Building a clean Navbar (Logo + Links + Primary CTA button with margin: auto)", time: "25m" },
                { id: "l-kpr-3-4", title: "Day 12: Flexbox Challenge #4 — Multi-section page from design spec", time: "45m" }
              ]
            },
            {
              id: "m-kpr-4",
              title: "Module 4 (Days 13–17): Media Queries & Mobile-First Strategy",
              titleAr: "الوحدة 4 (الأيام 13–17): الـ Media Queries واستراتيجية Mobile-First",
              lessons: [
                { id: "l-kpr-4-1", title: "Day 13: How @media (min-width: ...) works & the viewport meta tag", time: "20m" },
                { id: "l-kpr-4-2", title: "Day 14: Why Mobile-First writes 40% less CSS than Desktop-First", time: "18m" },
                { id: "l-kpr-4-3", title: "Day 15: Choosing breakpoints based on content, not specific iPhone/iPad models", time: "15m" },
                { id: "l-kpr-4-4", title: "Day 16–17: Responsive Navigation Challenge — Stacked mobile to horizontal desktop", time: "35m" }
              ]
            },
            {
              id: "m-kpr-5",
              title: "Module 5 (Days 18–21): Final Comprehensive Responsive Challenge",
              titleAr: "الوحدة 5 (الأيام 18–21): التحدي النهائي الشامل لبناء صفحة هبوط متكاملة",
              lessons: [
                { id: "l-kpr-5-1", title: "Day 18: Analyzing the Final Challenge design spec (3 breakpoints: Mobile, Tablet, Desktop)", time: "20m" },
                { id: "l-kpr-5-2", title: "Day 19: Writing semantic HTML5 & base mobile styles", time: "40m" },
                { id: "l-kpr-5-3", title: "Day 20: Adding tablet (700px) & desktop (1000px) layout transformations", time: "45m" },
                { id: "l-kpr-5-4", title: "Day 21: Final review, refactoring CSS, and responsive polish", time: "30m" }
              ]
            }
          ]
        },
        {
          id: "c-scrimba-js-dom",
          type: "Targeted Course",
          typeAr: "كورس موجّه (DOM + Events فقط)",
          provider: "Scrimba · Per Harald Borgen",
          title: "Scrimba — Learn JavaScript → DOM + Events Only",
          titleAr: "كورس Scrimba — تعلّم JavaScript (التركيز الحصري على الـ DOM والأحداث)",
          url: "https://scrimba.com/learn/learnjavascript",
          duration: "~4 Hours Focused · 4 Modules · DOM & UI Interactivity",
          description:
            "Follow the roadmap rule: don't get lost in complex algorithms—focus strictly on DOM selection, event listeners, state toggling, and interactive marketing UI components.",
          descriptionAr:
            "تطبيقاً لقاعدة الخارطة: لا تغرق في الخوارزميات المعقدة؛ ركّز فقط على التحكم في عناصر الصفحة (DOM) والاستجابة لأحداث المستخدم (Events) التي تحتاجها المواقع التسويقية.",
          modules: [
            {
              id: "m-sjs-1",
              title: "Module 1: DOM Manipulation Basics (Passenger Counter App)",
              titleAr: "الوحدة 1: أساسيات التحكم في الـ DOM والمتغيرات والدوال",
              lessons: [
                { id: "l-sjs-1-1", title: "1.1 Variables (let, const), numbers, strings, and console.log() debugging", time: "12m" },
                { id: "l-sjs-1-2", title: "1.2 Writing functions & triggering them from UI buttons", time: "10m" },
                { id: "l-sjs-1-3", title: "1.3 Selecting elements: document.getElementById() & document.querySelector()", time: "12m" },
                { id: "l-sjs-1-4", title: "1.4 Updating text dynamically: textContent vs innerText", time: "10m" }
              ]
            },
            {
              id: "m-sjs-2",
              title: "Module 2: Conditionals, Arrays & Dynamic Lists",
              titleAr: "الوحدة 2: الجمل الشرطية، المصفوفات، وتوليد عناصر الواجهة ديناميكياً",
              lessons: [
                { id: "l-sjs-2-1", title: "2.1 Booleans & if / else conditionals for UI state (open/closed, valid/invalid)", time: "14m" },
                { id: "l-sjs-2-2", title: "2.2 Arrays & looping over items to render HTML cards/lists", time: "15m" },
                { id: "l-sjs-2-3", title: "2.3 Objects for storing structured data (testimonials, pricing tiers, FAQs)", time: "12m" }
              ]
            },
            {
              id: "m-sjs-3",
              title: "Module 3: Event Listeners, Inputs & LocalStorage (Lead Tracker)",
              titleAr: "الوحدة 3: مستمعات الأحداث (addEventListener)، المدخلات، وذاكرة المتصفح",
              lessons: [
                { id: "l-sjs-3-1", title: "3.1 Professional event handling with element.addEventListener('click', ...)", time: "14m" },
                { id: "l-sjs-3-2", title: "3.2 Reading form inputs (.value), clearing inputs, and template literals (`${var}`)", time: "15m" },
                { id: "l-sjs-3-3", title: "3.3 Manipulating classes: classList.add(), remove(), toggle(), contains()", time: "14m" },
                { id: "l-sjs-3-4", title: "3.4 Persisting state with localStorage.setItem(), getItem(), and JSON.parse/stringify", time: "16m" }
              ]
            },
            {
              id: "m-sjs-4",
              title: "Module 4: The 5 Essential Marketing Site JS Patterns",
              titleAr: "الوحدة 4: الأنماط الخمسة الأساسية في أي موقع تسويقي محلي",
              lessons: [
                { id: "l-sjs-4-1", title: "4.1 Pattern 1: Mobile Hamburger Drawer & backdrop click-outside close", time: "15m" },
                { id: "l-sjs-4-2", title: "4.2 Pattern 2: Interactive FAQ Accordion (expand/collapse + aria-expanded)", time: "15m" },
                { id: "l-sjs-4-3", title: "4.3 Pattern 3: Booking Modal & Tabbed Service/Menu Switcher", time: "15m" },
                { id: "l-sjs-4-4", title: "4.4 Pattern 4: Sticky Header on scroll & smooth scroll to sections", time: "12m" },
                { id: "l-sjs-4-5", title: "4.5 Pattern 5: Dynamic WhatsApp Booking URL builder from form inputs", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-practice-games",
          type: "Interactive Practice",
          typeAr: "تدريب تفاعلي",
          provider: "Codepip Games",
          title: "Practice: Flexbox Froggy (24 Levels) + Grid Garden (28 Levels)",
          titleAr: "تطبيق عملي: لعبة Flexbox Froggy (24 مستوى) + لعبة Grid Garden (28 مستوى)",
          url: "https://flexboxfroggy.com/",
          duration: "52 Total Levels · Muscle Memory",
          description:
            "Build instant muscle memory for CSS Flexbox and CSS Grid properties until you never have to guess alignment syntax again.",
          descriptionAr:
            "بناء ذاكرة عضلية فورية لخصائص Flexbox و CSS Grid حتى لا تضطر للتخمين عند بناء أي تخطيط.",
          modules: [
            {
              id: "m-pg-froggy",
              title: "Flexbox Froggy — All 24 Levels",
              titleAr: "لعبة Flexbox Froggy — جميع الـ 24 مستوى",
              lessons: [
                { id: "l-pg-f1", title: "Levels 1–6: Horizontal & vertical alignment (justify-content & align-items)", time: "15m" },
                { id: "l-pg-f2", title: "Levels 7–13: Axis flipping (flex-direction: row, row-reverse, column, column-reverse)", time: "20m" },
                { id: "l-pg-f3", title: "Levels 14–17: Individual item control (order & align-self)", time: "15m" },
                { id: "l-pg-f4", title: "Levels 18–24: Multi-line wrapping (flex-wrap, flex-flow, align-content)", time: "25m" }
              ]
            },
            {
              id: "m-pg-garden",
              title: "Grid Garden — All 28 Levels (cssgridgarden.com)",
              titleAr: "لعبة Grid Garden — جميع الـ 28 مستوى",
              lessons: [
                { id: "l-pg-g1", title: "Levels 1–10: Column placement (grid-column-start, grid-column-end, span, negative lines)", time: "20m" },
                { id: "l-pg-g2", title: "Levels 11–17: Row placement & shorthand (grid-row, grid-column, grid-area)", time: "20m" },
                { id: "l-pg-g3", title: "Levels 18–28: Grid templates (grid-template-columns/rows, fr units, percentages, repeat)", time: "25m" }
              ]
            }
          ]
        }
      ],
      project: {
        id: "proj-phase-1",
        title: "Phase 0 & 1 Gate Project: Bookshop Marketing Page (Hand-Written, No AI)",
        titleAr: "مشروع اجتياز المرحلة 0 و 1: صفحة تسويقية لمكتبة كتب (كتابة يدوية 100% بدون ذكاء اصطناعي)",
        rule: "Must be published live on Netlify before unlocking Phase 2.",
        ruleAr: "يجب كتابة الكود باليد ونشره على Netlify قبل فتح المرحلة الثانية.",
        deliverables: [
          {
            id: "del-p1-1",
            title: "Bookshop page, hand-written HTML & CSS, zero AI code generation",
            titleAr: "صفحة مكتبة الكتب مكتوبة يدوياً بالكامل (HTML + CSS + JS) بدون توليد كود بالذكاء الاصطناعي"
          },
          {
            id: "del-p1-2",
            title: "Mobile-first responsive layout (Hero, Featured Books Grid, Testimonials, Location & WhatsApp Order Button)",
            titleAr: "تخطيط متجاوب Mobile-First يضم (Hero، شبكة الكتب المميزة، آراء القراء، الموقع وزر الطلب عبر واتساب)"
          },
          {
            id: "del-p1-3",
            title: "Published live on Netlify with a shareable public URL",
            titleAr: "منشور فعلياً على استضافة Netlify برابط حي يعمل على الموبايل والكمبيوتر"
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // PHASE 2: DESIGN & UX/UI (WEEKS 4-10)
    // ------------------------------------------------------------------------
    {
      id: "phase-2",
      number: "2",
      title: "Phase 2: Design & UX/UI",
      titleAr: "المرحلة 2: التصميم وتجربة المستخدم (Design & UX/UI)",
      weeks: "Weeks 4–10",
      pace: "Starts in parallel with Phase 1 at Week 4",
      initialStatus: "locked",
      accent: "cyan",
      summary:
        "Develop elite visual taste and tactical UI engineering rules so your local business websites look like $5,000 agency builds.",
      summaryAr:
        "تطوير ذائقة بصرية رفيعة وقواعد هندسة واجهات عملية تجعل مواقعك للشركات المحلية تبدو وكأنها من تنفيذ وكالة عالمية.",
      dailyDrill: {
        id: "drill-phase-2",
        title: "Daily 20-Minute Design Drill",
        titleAr: "التمرين اليومي (20 دقيقة يومياً)",
        description: "20 minutes: pick one section from godly.website or land-book.com → copy it pixel-by-pixel in Figma → code it.",
        descriptionAr: "20 دقيقة يومياً: اختر قسماً واحداً من موقع godly.website أو land-book.com ← انسخه بدقة في فيجما ← حوله لكود."
      },
      courses: [
        {
          id: "c-refactoring-ui",
          type: "Core Book (#1 Resource)",
          typeAr: "الكتاب الأهم على الإطلاق",
          provider: "Adam Wathan & Steve Schoger (Creators of Tailwind CSS)",
          title: "Refactoring UI (Book) — The Most Important Resource",
          titleAr: "كتاب Refactoring UI — المرجع الأهم في خارطة الطريق",
          url: "https://www.refactoringui.com/",
          duration: "8 Chapters · 50 Tactical Visual Lessons",
          description:
            "Tactical, developer-focused design rules for hierarchy, spacing systems, typography scales, HSL colors, shadows/depth, and finishing touches.",
          descriptionAr:
            "قواعد تصميم عملية ومباشرة للمبرمجين: التسلسل البصري، أنظمة المسافات، مقاييس الخطوط، الألوان، الظلال، واللمسات النهائية.",
          modules: [
            {
              id: "m-rui-1",
              title: "Chapter 1: Starting from Scratch",
              titleAr: "الفصل 1: البدء من الصفر (Starting from Scratch)",
              lessons: [
                { id: "l-rui-1-1", title: "1.1 Start with a feature, not a layout (design the booking card before the shell)", time: "12m" },
                { id: "l-rui-1-2", title: "1.2 Detail comes later (low-fidelity grayscale & sharpie thinking first)", time: "10m" },
                { id: "l-rui-1-3", title: "1.3 Don't design too much upfront & work in short cycles", time: "10m" },
                { id: "l-rui-1-4", title: "1.4 Choose a personality (serif luxury vs rounded playful vs crisp geometric)", time: "14m" },
                { id: "l-rui-1-5", title: "1.5 Limit your choices (define predefined scales for size, color, spacing, shadows)", time: "15m" }
              ]
            },
            {
              id: "m-rui-2",
              title: "Chapter 2: Hierarchy is Everything",
              titleAr: "الفصل 2: التسلسل الهرمي البصري هو كل شيء (Hierarchy is Everything)",
              lessons: [
                { id: "l-rui-2-1", title: "2.1 Not all elements are equal (deliberate visual noise reduction)", time: "10m" },
                { id: "l-rui-2-2", title: "2.2 Size isn't everything — use font-weight (600/700) and color hierarchy (primary/secondary/tertiary text)", time: "15m" },
                { id: "l-rui-2-3", title: "2.3 Don't use grey text on colored backgrounds (use hue-matched saturation)", time: "10m" },
                { id: "l-rui-2-4", title: "2.4 Emphasize by de-emphasizing competing elements", time: "10m" },
                { id: "l-rui-2-5", title: "2.5 Labels are a last resort (combine values and format naturally, e.g. '12 spots left')", time: "12m" },
                { id: "l-rui-2-6", title: "2.6 Separate visual hierarchy from semantic HTML tags (<h2> doesn't have to look giant)", time: "10m" },
                { id: "l-rui-2-7", title: "2.7 Balance weight and contrast (offsetting bold icons with softer contrast)", time: "10m" },
                { id: "l-rui-2-8", title: "2.8 Semantics are secondary to action Hierarchy (Primary CTA vs Secondary Ghost/Outline)", time: "14m" }
              ]
            },
            {
              id: "m-rui-3",
              title: "Chapter 3: Layout and Spacing",
              titleAr: "الفصل 3: التخطيط والمسافات البيضاء (Layout and Spacing)",
              lessons: [
                { id: "l-rui-3-1", title: "3.1 Start with too much white space, then remove until it's right", time: "12m" },
                { id: "l-rui-3-2", title: "3.2 Establish a non-linear spacing and sizing system (4, 8, 12, 16, 24, 32, 48, 64, 96px)", time: "15m" },
                { id: "l-rui-3-3", title: "3.3 You don't have to fill the whole screen (constrain max-width for readability)", time: "12m" },
                { id: "l-rui-3-4", title: "3.4 Grids are overrated — use fixed widths for sidebars/cards where appropriate", time: "12m" },
                { id: "l-rui-3-5", title: "3.5 Relative sizing doesn't scale blindly across mobile and desktop", time: "10m" },
                { id: "l-rui-3-6", title: "3.6 Avoid ambiguous spacing (group headings tightly to their paragraph, separate sections generously)", time: "14m" }
              ]
            },
            {
              id: "m-rui-4",
              title: "Chapter 4: Designing Text",
              titleAr: "الفصل 4: هندسة النصوص والخطوط (Designing Text)",
              lessons: [
                { id: "l-rui-4-1", title: "4.1 Establish a modular type scale (avoid arbitrary 15px, 17px, 19px sizes)", time: "14m" },
                { id: "l-rui-4-2", title: "4.2 Use good fonts (safe high-craft sans-serifs & multi-weight families)", time: "12m" },
                { id: "l-rui-4-3", title: "4.3 Keep your line length in check (45 to 75 characters per line / max-w-prose)", time: "12m" },
                { id: "l-rui-4-4", title: "4.4 Align mixed font sizes by baseline, not vertical center", time: "10m" },
                { id: "l-rui-4-5", title: "4.5 Line-height is inversely proportional to font size (1.6 for body, 1.15 for large hero headings)", time: "14m" },
                { id: "l-rui-4-6", title: "4.6 Not every link needs a loud color; align text with readability & use tight letter-spacing on headlines", time: "14m" }
              ]
            },
            {
              id: "m-rui-5",
              title: "Chapter 5: Working with Color",
              titleAr: "الفصل 5: العمل الاحترافي بالألوان (Working with Color)",
              lessons: [
                { id: "l-rui-5-1", title: "5.1 Ditch Hex for HSL (Hue, Saturation, Lightness mental model)", time: "14m" },
                { id: "l-rui-5-2", title: "5.2 Why you need 9–10 shades (50–900) for Greys, Primary, and Semantic colors", time: "16m" },
                { id: "l-rui-5-3", title: "5.3 Define your shades upfront & rotate hue toward perceived brightness", time: "14m" },
                { id: "l-rui-5-4", title: "5.4 Greys don't have to be pure grey (cool slate greys vs warm stone greys)", time: "12m" },
                { id: "l-rui-5-5", title: "5.5 Accessible contrast (dark text on light tinted pill badges) & never relying on color alone", time: "14m" }
              ]
            },
            {
              id: "m-rui-6",
              title: "Chapter 6: Creating Depth",
              titleAr: "الفصل 6: خلق العمق والظلال (Creating Depth)",
              lessons: [
                { id: "l-rui-6-1", title: "6.1 Emulate a top light source (lighter top edge highlight / border-t, darker shadow below)", time: "14m" },
                { id: "l-rui-6-2", title: "6.2 Use 5 elevation levels of shadows (sm → 2xl) to convey z-axis hierarchy", time: "14m" },
                { id: "l-rui-6-3", title: "6.3 Two-part shadows (ambient diffused shadow + tight direct contact shadow)", time: "12m" },
                { id: "l-rui-6-4", title: "6.4 Overlapping cards across section boundaries to create layered depth", time: "12m" }
              ]
            },
            {
              id: "m-rui-7",
              title: "Chapter 7: Working with Images",
              titleAr: "الفصل 7: التعامل مع الصور (Working with Images)",
              lessons: [
                { id: "l-rui-7-1", title: "7.1 Use high-craft photography & avoid cheesy generic stock photos", time: "10m" },
                { id: "l-rui-7-2", title: "7.2 Text over images needs consistent contrast (semi-transparent overlays, gradient scrims, subtle text glow)", time: "15m" },
                { id: "l-rui-7-3", title: "7.3 Respect intended icon sizes & control user/client-provided logos with fixed aspect containers & subtle inner borders", time: "14m" }
              ]
            },
            {
              id: "m-rui-8",
              title: "Chapter 8: Finishing Touches",
              titleAr: "الفصل 8: اللمسات الختامية الفاخرة (Finishing Touches)",
              lessons: [
                { id: "l-rui-8-1", title: "8.1 Supercharge default bullets with checkmarks/icons & custom styled quotes/tables", time: "12m" },
                { id: "l-rui-8-2", title: "8.2 Add color with top/side accent borders on cards and alerts", time: "10m" },
                { id: "l-rui-8-3", title: "8.3 Decorate backgrounds carefully (subtle grids, radial glows, geometric patterns)", time: "12m" },
                { id: "l-rui-8-4", title: "8.4 Use fewer borders (use background tint or spacing instead of boxy lines)", time: "12m" },
                { id: "l-rui-8-5", title: "8.5 Think outside the box (multi-column dropdowns, rich pricing tables, visual testimonials)", time: "14m" }
              ]
            }
          ]
        },
        {
          id: "c-practical-ui",
          type: "Design System Book",
          typeAr: "كتاب أنظمة التصميم",
          provider: "Adham Dannaway",
          title: "Practical UI (Book)",
          titleAr: "كتاب Practical UI — القواعد العملية لتصميم الواجهات",
          url: "https://www.practical-ui.com/",
          duration: "8 Chapters · Logic-Driven UI Guidelines",
          description:
            "A systematic, rule-based playbook covering the 8pt spatial grid, 12-column grids, HSB color systems, accessible contrast, interface copywriting, button hierarchy, and high-converting form design.",
          descriptionAr:
            "دليل منهجي قائم على القواعد المنطقية يغطي شبكة الـ 8pt، الألوان بنظام HSB، التباين القياسي، صياغة نصوص الواجهة، الأزرار، وتصميم النماذج عالية التحويل.",
          modules: [
            {
              id: "m-pui-1",
              title: "Chapter 1 & 2: Fundamentals & Less is More",
              titleAr: "الفصل 1 و 2: الأساسيات وتقليل العبء الذهني (Less is More)",
              lessons: [
                { id: "l-pui-1-1", title: "1.1 Usability before aesthetics & minimizing cognitive load", time: "15m" },
                { id: "l-pui-1-2", title: "1.2 Removing visual clutter, unnecessary borders, and redundant decorative boxes", time: "15m" },
                { id: "l-pui-1-3", title: "1.3 Progressive disclosure — show only what the visitor needs at each scroll stage", time: "12m" }
              ]
            },
            {
              id: "m-pui-2",
              title: "Chapter 3: Color Systems & Dark/Light Mode",
              titleAr: "الفصل 3: نظام الألوان HSB والتباين القياسي",
              lessons: [
                { id: "l-pui-2-1", title: "3.1 Building palettes with HSB (Hue, Saturation, Brightness) & the 60-30-10 rule", time: "18m" },
                { id: "l-pui-2-2", title: "3.2 WCAG 2.1 AA/AAA Contrast ratios (4.5:1 normal text, 3:1 large text & UI components)", time: "15m" },
                { id: "l-pui-2-3", title: "3.3 Crafting authentic Dark Mode surfaces (elevation = lighter surface, desaturated accents)", time: "16m" }
              ]
            },
            {
              id: "m-pui-3",
              title: "Chapter 4 & 5: Layout, 8pt Spacing Grid & Typography",
              titleAr: "الفصل 4 و 5: شبكة الـ 8pt، التخطيط، والخطوط",
              lessons: [
                { id: "l-pui-3-1", title: "4.1 The 8pt spatial system & 12-column responsive layout grid", time: "18m" },
                { id: "l-pui-3-2", title: "4.2 Clear visual grouping (Internal padding < External margin between cards)", time: "15m" },
                { id: "l-pui-3-3", title: "5.1 Type scale, left/start alignment for scanability, and number alignment", time: "16m" }
              ]
            },
            {
              id: "m-pui-4",
              title: "Chapter 6, 7 & 8: Microcopy, Buttons & High-Converting Forms",
              titleAr: "الفصل 6 و 7 و 8: نصوص الواجهة، الأزرار، ونماذج الحجز",
              lessons: [
                { id: "l-pui-4-1", title: "6.1 Front-loading important keywords in headings & active-voice microcopy", time: "15m" },
                { id: "l-pui-4-2", title: "7.1 Button Hierarchy: 1 Primary CTA per view, Secondary outline, Tertiary link + 48px touch target", time: "16m" },
                { id: "l-pui-4-3", title: "8.1 Single-column forms, visible top labels (never placeholder-only), and minimal fields for higher bookings", time: "20m" }
              ]
            }
          ]
        },
        {
          id: "c-figma-beginners",
          type: "Official Course",
          typeAr: "الدليل الرسمي من فيجما",
          provider: "Figma Help Center · help.figma.com",
          title: "Figma Design for Beginners",
          titleAr: "كورس Figma Design for Beginners — تصميم الواجهات والـ Auto Layout",
          url: "https://help.figma.com/hc/en-us/sections/4405269443991-Figma-design-for-beginners",
          duration: "4 Modules · 18 Hands-On Lessons",
          description:
            "Learn just enough Figma to rapidly wireframe, copy elite inspirations, master Auto Layout, and design client homepages.",
          descriptionAr:
            "إتقان أساسيات فيجما اللازمة لبناء الصفحات، استخدام Auto Layout الذي يطابق Flexbox، وتجهيز التصميم للكود.",
          modules: [
            {
              id: "m-fig-1",
              title: "Module 1: What is Figma & Exploring the Canvas",
              titleAr: "الوحدة 1: واجهة فيجما، الإطارات (Frames)، والأشكال",
              lessons: [
                { id: "l-fig-1-1", title: "1.1 Figma workspace tour, toolbar, layers panel, and properties inspector", time: "10m" },
                { id: "l-fig-1-2", title: "1.2 Frames vs Groups (why Frames behave like HTML <div> containers)", time: "12m" },
                { id: "l-fig-1-3", title: "1.3 Shapes, images, masks, and boolean operations", time: "12m" },
                { id: "l-fig-1-4", title: "1.4 Text layers, Google/local Arabic & English fonts, and resizing modes", time: "10m" }
              ]
            },
            {
              id: "m-fig-2",
              title: "Module 2: Auto Layout & Responsive Constraints",
              titleAr: "الوحدة 2: احتراف Auto Layout (الـ Flexbox داخل فيجما)",
              lessons: [
                { id: "l-fig-2-1", title: "2.1 Auto Layout fundamentals (Shift+A): direction, gap, and padding", time: "16m" },
                { id: "l-fig-2-2", title: "2.2 Resizing rules: Fixed width vs Hug contents vs Fill container", time: "18m" },
                { id: "l-fig-2-3", title: "2.3 Nesting Auto Layout frames to build Navbar, Hero, and Pricing Cards", time: "20m" },
                { id: "l-fig-2-4", title: "2.4 Layout Grids (12-column desktop + 4-column mobile) & alignment", time: "14m" }
              ]
            },
            {
              id: "m-fig-3",
              title: "Module 3: Styles, Variables & Reusable Components",
              titleAr: "الوحدة 3: الأنماط، المتغيرات، والمكونات القابلة لإعادة الاستخدام",
              lessons: [
                { id: "l-fig-3-1", title: "3.1 Creating Color Styles, Text Styles, and Effect (Shadow/Blur) Styles", time: "14m" },
                { id: "l-fig-3-2", title: "3.2 Local Variables for spacing tokens and brand theming", time: "15m" },
                { id: "l-fig-3-3", title: "3.3 Creating Components (Buttons, Service Cards, Testimonial Cards) & Variants", time: "18m" }
              ]
            },
            {
              id: "m-fig-4",
              title: "Module 4: Prototyping, Exporting & Figma-to-Code Workflow",
              titleAr: "الوحدة 4: العرض التفاعلي للعميل وتحويل التصميم إلى كود",
              lessons: [
                { id: "l-fig-4-1", title: "4.1 Interactive prototype preview links to impress local business owners", time: "12m" },
                { id: "l-fig-4-2", title: "4.2 Exporting optimized SVGs and WebP/PNG assets", time: "10m" },
                { id: "l-fig-4-3", title: "4.3 Translating Figma Auto Layout & tokens directly into CSS/Tailwind", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-laws-of-ux",
          type: "Interactive Reference",
          typeAr: "مرجع مبادئ نفسية المستخدم",
          provider: "Jon Yablonski · lawsofux.com",
          title: "Laws of UX — lawsofux.com",
          titleAr: "قوانين تجربة المستخدم — Laws of UX (الـ 21 قانوناً مقسمة عملياً)",
          url: "https://lawsofux.com/",
          duration: "4 Categories · 21 Core UX Laws",
          description:
            "Psychological heuristics that explain how real customers scan, trust, and click on a local business website.",
          descriptionAr:
            "القوانين النفسية التي تفسر كيف يتصفح العميل الموقع، وكيف يثق بالعلامة التجارية، وكيف يضغط على زر الحجز أو الواتساب.",
          modules: [
            {
              id: "m-lux-1",
              title: "Category 1: Trust, Familiarity & Visual Standout",
              titleAr: "المجموعة 1: قوانين الثقة والألفة والتميز البصري",
              lessons: [
                { id: "l-lux-1-1", title: "Jakob’s Law: Users spend most of their time on other sites — keep navigation & layout familiar", time: "8m" },
                { id: "l-lux-1-2", title: "Aesthetic-Usability Effect: Visually premium designs are perceived as more trustworthy and professional", time: "8m" },
                { id: "l-lux-1-3", title: "Von Restorff Effect (Isolation): Make the primary WhatsApp/Booking CTA visually distinct from everything else", time: "8m" },
                { id: "l-lux-1-4", title: "Serial Position Effect: Put the strongest hook in the Hero (first) and repeat the CTA in the Footer (last)", time: "8m" }
              ]
            },
            {
              id: "m-lux-2",
              title: "Category 2: Decision Speed & Cognitive Load",
              titleAr: "المجموعة 2: سرعة اتخاذ القرار وتخفيف التشتت",
              lessons: [
                { id: "l-lux-2-1", title: "Hick’s Law: More choices = slower decisions (limit navbar links to 4–5 and packages to 3 tiers)", time: "8m" },
                { id: "l-lux-2-2", title: "Miller’s Law: Chunk information into groups of 3 to 5 digestible cards", time: "8m" },
                { id: "l-lux-2-3", title: "Cognitive Load & Tesler’s Law: Strip booking forms down to Name + Phone + Service", time: "8m" },
                { id: "l-lux-2-4", title: "Choice Overload & Paradox of Active Users: Guide visitors to 1 clear action", time: "8m" }
              ]
            },
            {
              id: "m-lux-3",
              title: "Category 3: Gestalt Laws of Visual Grouping",
              titleAr: "المجموعة 3: قوانين الجشطالت للتجميع البصري",
              lessons: [
                { id: "l-lux-3-1", title: "Law of Proximity: Items close together are perceived as a single related group", time: "8m" },
                { id: "l-lux-3-2", title: "Law of Common Region: Cards with subtle borders or background tint group content clearly", time: "8m" },
                { id: "l-lux-3-3", title: "Law of Similarity & Uniform Connectedness: Consistent styling for interactive elements", time: "8m" },
                { id: "l-lux-3-4", title: "Law of Prägnanz: People interpret complex visuals in the simplest form possible", time: "8m" }
              ]
            },
            {
              id: "m-lux-4",
              title: "Category 4: Interaction Speed & Conversion Momentum",
              titleAr: "المجموعة 4: سرعة التفاعل وتحفيز التحويل",
              lessons: [
                { id: "l-lux-4-1", title: "Fitts’s Law: Make primary CTA and mobile WhatsApp buttons large and within thumb reach", time: "8m" },
                { id: "l-lux-4-2", title: "Doherty Threshold (<400ms): Instant page loads & immediate button feedback keep users engaged", time: "8m" },
                { id: "l-lux-4-3", title: "Peak-End Rule & Goal-Gradient Effect: Delightful confirmation state after booking submission", time: "8m" }
              ]
            }
          ]
        }
      ],
      project: {
        id: "proj-phase-2",
        title: "Phase 2 Gate Project: 3 Figma Homepages for Real Local Businesses",
        titleAr: "مشروع اجتياز المرحلة 2: تصميم 3 صفحات رئيسية كاملة في Figma لأعمال محلية حقيقية",
        rule: "Complete all 3 industry designs before starting Phase 3 stack builds.",
        ruleAr: "أكمل التصاميم الثلاثة في فيجما قبل الانتقال لبناء المواقع في المرحلة الثالثة.",
        deliverables: [
          {
            id: "del-p2-1",
            title: "Design #1: Local Medical / Dental Clinic Homepage (Trust, Doctors, Services, Before/After, Instant WhatsApp & Booking)",
            titleAr: "التصميم الأول: صفحة رئيسية لعيادة طبية / عيادة أسنان (الثقة، الأطباء، الخدمات، الحجز الفوري والواتساب)"
          },
          {
            id: "del-p2-2",
            title: "Design #2: Local Restaurant / Specialty Cafe Homepage (Appetizing Hero, Menu Highlights, Ambience, Google Map & Table/Order CTA)",
            titleAr: "التصميم الثاني: صفحة رئيسية لمطعم أو كافيه مميز (صور جذابة، أبرز الأصناف، الأجواء، الخريطة وطلب/حجز طاولة)"
          },
          {
            id: "del-p2-3",
            title: "Design #3: Local Fitness Gym / Health Club Homepage (High-Energy Hero, Transformations, Membership Tiers, Free Trial Pass CTA)",
            titleAr: "التصميم الثالث: صفحة رئيسية لجيم / نادي رياضي (تصميم حماسي، قصص التحول، باقات الاشتراك، وحجز حصة تجريبية)"
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // PHASE 3: PRO WEBSITE STACK (WEEKS 8-14)
    // ------------------------------------------------------------------------
    {
      id: "phase-3",
      number: "3",
      title: "Phase 3: Pro Website Stack",
      titleAr: "المرحلة 3: حزمة التقنيات الاحترافية (Astro + Tailwind + GSAP)",
      weeks: "Weeks 8–14",
      pace: "Production Agency Workflow",
      initialStatus: "locked",
      accent: "violet",
      summary:
        "Build blazing-fast, Lighthouse 95–100 marketing websites using Astro, Tailwind CSS, GSAP + ScrollTrigger, Formspree, and Netlify/Vercel.",
      summaryAr:
        "بناء مواقع تسويقية فائقة السرعة (Lighthouse 95–100) باستخدام Astro و Tailwind CSS وحركات GSAP + ScrollTrigger مع النماذج والاستضافة.",
      courses: [
        {
          id: "c-astro-tutorial",
          type: "Official Tutorial",
          typeAr: "الدليل التطبيقي الرسمي",
          provider: "Astro Docs · docs.astro.build",
          title: "Astro — Official Tutorial (docs.astro.build)",
          titleAr: "كورس Astro الرسمي — بناء مواقع تسويقية سريعة جداً وصديقة لمحركات البحث",
          url: "https://docs.astro.build/en/tutorial/0-introduction/",
          duration: "7 Units (Units 0–6) · Zero-JS by Default Architecture",
          description:
            "Learn why Astro is the ultimate secret weapon for marketing websites: reusable component architecture that ships pure, ultra-fast HTML/CSS with 95–100 Lighthouse scores.",
          descriptionAr:
            "تعلّم لماذا يُعد Astro السلاح السري الأقوى للمواقع التسويقية: مكونات منظمة تنتج HTML/CSS فائق السرعة بدون ثقل JavaScript غير الضروري.",
          modules: [
            {
              id: "m-ast-0",
              title: "Unit 0 & 1: Setup, Project Structure & First Deployment",
              titleAr: "الوحدة 0 و 1: التثبيت، هيكل المشروع، والرفع التلقائي على الاستضافة",
              lessons: [
                { id: "l-ast-1-1", title: "Unit 0: Why Astro for marketing sites (MPA vs SPA, zero JS by default, Islands)", time: "10m" },
                { id: "l-ast-1-2", title: "Unit 1.1: Creating an Astro project via npm create astro@latest & dev server", time: "12m" },
                { id: "l-ast-1-3", title: "Unit 1.2: File-based routing in src/pages/ (index.astro, about.astro, services.astro)", time: "12m" },
                { id: "l-ast-1-4", title: "Unit 1.3: Connecting GitHub repository to Netlify/Vercel for automatic deploys", time: "12m" }
              ]
            },
            {
              id: "m-ast-2",
              title: "Unit 2: Pages, Frontmatter Data & Scoped Styling",
              titleAr: "الوحدة 2: الصفحات، متغيرات الـ Frontmatter، والتنسيقات المعزولة",
              lessons: [
                { id: "l-ast-2-1", title: "Unit 2.1: The .astro component anatomy (--- code fences --- + HTML template)", time: "14m" },
                { id: "l-ast-2-2", title: "Unit 2.2: Rendering dynamic variables and arrays with JSX-like {expressions}", time: "15m" },
                { id: "l-ast-2-3", title: "Unit 2.3: Scoped <style> tags, CSS variables define:vars, and global stylesheets", time: "14m" }
              ]
            },
            {
              id: "m-ast-3",
              title: "Unit 3 & 4: Reusable Components & Master Layouts",
              titleAr: "الوحدة 3 و 4: بناء المكونات القابلة لإعادة الاستخدام والقوالب (Layouts)",
              lessons: [
                { id: "l-ast-3-1", title: "Unit 3.1: Creating Header.astro, Navigation.astro, Footer.astro, and WhatsAppFab.astro", time: "18m" },
                { id: "l-ast-3-2", title: "Unit 3.2: Passing data with Astro.props (ServiceCard, TestimonialCard, PricingCard)", time: "18m" },
                { id: "l-ast-3-3", title: "Unit 4.1: Building BaseLayout.astro with <slot /> and dynamic SEO <head> metadata", time: "20m" }
              ]
            },
            {
              id: "m-ast-5",
              title: "Unit 5 & 6: Content Collections, Image Optimization & Islands",
              titleAr: "الوحدة 5 و 6: إدارة البيانات، ضغط الصور التلقائي، واختبار Lighthouse 90+",
              lessons: [
                { id: "l-ast-5-1", title: "Unit 5.1: Dynamic routes (getStaticPaths) for local area/service landing pages", time: "18m" },
                { id: "l-ast-5-2", title: "Unit 5.2: Content Collections for structured services, FAQs, and case studies", time: "18m" },
                { id: "l-ast-5-3", title: "Unit 6.1: Using <Image /> and <Picture /> from astro:assets for automatic WebP/AVIF & zero CLS", time: "16m" },
                { id: "l-ast-5-4", title: "Unit 6.2: Client directives & client-side <script> tags for GSAP and interactive menus", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-tailwind-docs",
          type: "Official Documentation",
          typeAr: "التوثيق الرسمي والتطبيق",
          provider: "Tailwind Labs · tailwindcss.com/docs",
          title: "Tailwind CSS — tailwindcss.com/docs",
          titleAr: "إتقان Tailwind CSS — بناء واجهات مخصصة بسرعة قياسية",
          url: "https://tailwindcss.com/docs",
          duration: "5 Modules · Rapid Production Styling",
          description:
            "Translate your Refactoring UI knowledge directly into Tailwind utility classes, custom brand themes, responsive grids, and reusable Astro components.",
          descriptionAr:
            "تحويل قواعد كتاب Refactoring UI مباشرة إلى كلاسات Tailwind مع تخصيص الهوية اللونية والخطوط لكل عميل.",
          modules: [
            {
              id: "m-tw-1",
              title: "Module 1: Utility-First Workflow & State Variants",
              titleAr: "الوحدة 1: فلسفة Utility-First وحالات التفاعل (Hover, Focus, Group)",
              lessons: [
                { id: "l-tw-1-1", title: "1.1 Installing Tailwind CSS in Astro & configuring IDE IntelliSense", time: "10m" },
                { id: "l-tw-1-2", title: "1.2 Interactive states: hover:, focus-visible:, active:, group-hover:, and peer", time: "15m" },
                { id: "l-tw-1-3", title: "1.3 Mobile-first responsive modifiers: default (mobile) → sm: → md: → lg: → xl:", time: "15m" }
              ]
            },
            {
              id: "m-tw-2",
              title: "Module 2: Customizing Theme Tokens per Client Brand",
              titleAr: "الوحدة 2: تخصيص نظام الألوان والخطوط لكل عميل (@theme / Config)",
              lessons: [
                { id: "l-tw-2-1", title: "2.1 Defining custom brand color scales (primary-50 to primary-950) & semantic tokens", time: "15m" },
                { id: "l-tw-2-2", title: "2.2 Configuring Arabic (Cairo / Tajawal / IBM Plex Arabic) & English font families", time: "14m" },
                { id: "l-tw-2-3", title: "2.3 Custom container padding, border-radius tokens, and elevation shadows", time: "12m" }
              ]
            },
            {
              id: "m-tw-3",
              title: "Module 3: Bento Grids, Glassmorphism & RTL/LTR Support",
              titleAr: "الوحدة 3: شبكات Bento، التأثيرات الزجاجية، ودعم العربية والإنجليزية",
              lessons: [
                { id: "l-tw-3-1", title: "3.1 Building asymmetric Bento Grids with grid-cols-1 md:grid-cols-12 & col-span-*", time: "18m" },
                { id: "l-tw-3-2", title: "3.2 Modern visual polish: backdrop-blur-md, bg-white/5, ring-1 ring-white/10, gradients", time: "15m" },
                { id: "l-tw-3-3", title: "3.3 Logical properties (ms-*, me-*, ps-*, pe-*, text-start) for flawless Arabic RTL & English LTR", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-gsap-scrolltrigger",
          type: "Motion Engineering",
          typeAr: "هندسة التحريك التفاعلي",
          provider: "GreenSock · gsap.com",
          title: "GSAP + ScrollTrigger — gsap.com",
          titleAr: "احتراف GSAP + ScrollTrigger — الحركات الفاخرة للمواقع التسويقية",
          url: "https://gsap.com/resources/get-started/",
          duration: "4 Modules · Premium Motion Choreography",
          description:
            "Learn how to add tasteful, butter-smooth 60fps animations, staggered hero reveals, and scroll-triggered storytelling that justify Premium package pricing.",
          descriptionAr:
            "إضافة حركات انسيابية بسرعة 60 إطاراً في الثانية وظهور تدريجي عند التمرير يرفع قيمة الموقع للباقة الفاخرة (Premium).",
          modules: [
            {
              id: "m-gsap-1",
              title: "Module 1: GSAP Core (Tweens, Transforms & Easing)",
              titleAr: "الوحدة 1: أساسيات GSAP (Tweens, Transforms, Easing)",
              lessons: [
                { id: "l-gsap-1-1", title: "1.1 gsap.to(), gsap.from(), and gsap.fromTo() — animating GPU-accelerated x, y, scale, opacity", time: "15m" },
                { id: "l-gsap-1-2", title: "1.2 Mastering Easing: why power3.out and expo.out feel luxurious compared to linear", time: "12m" },
                { id: "l-gsap-1-3", title: "1.3 Staggers: revealing feature cards, stats, and headline words sequentially", time: "15m" }
              ]
            },
            {
              id: "m-gsap-2",
              title: "Module 2: Timelines & Choreographed Hero Reveals",
              titleAr: "الوحدة 2: الجداول الزمنية (Timelines) وتصميم دخول الـ Hero",
              lessons: [
                { id: "l-gsap-2-1", title: "2.1 Sequencing with gsap.timeline() & defaults configuration", time: "15m" },
                { id: "l-gsap-2-2", title: "2.2 The Position Parameter ('-=0.3', '<', '<0.1') for overlapping organic motion", time: "15m" },
                { id: "l-gsap-2-3", title: "2.3 Avoiding Flash of Unstyled/Unanimated Content (FOUC) with autoAlpha", time: "12m" }
              ]
            },
            {
              id: "m-gsap-3",
              title: "Module 3: ScrollTrigger Fundamentals",
              titleAr: "الوحدة 3: أساسيات ScrollTrigger للتحريك أثناء التمرير",
              lessons: [
                { id: "l-gsap-3-1", title: "3.1 Registering ScrollTrigger, setting trigger element, and start/end viewport thresholds ('top 80%')", time: "18m" },
                { id: "l-gsap-3-2", title: "3.2 Debugging with markers: true and configuring toggleActions", time: "14m" },
                { id: "l-gsap-3-3", title: "3.3 Batching scroll reveals for service grids & gallery cards (ScrollTrigger.batch)", time: "15m" }
              ]
            },
            {
              id: "m-gsap-4",
              title: "Module 4: Scrubbing, Pinning & Accessibility (matchMedia)",
              titleAr: "الوحدة 4: الـ Scrubbing، التثبيت (Pinning)، ومراعاة الأداء والموبايل",
              lessons: [
                { id: "l-gsap-4-1", title: "4.1 Smooth scroll-linked animations with scrub: 1 & subtle image parallax", time: "18m" },
                { id: "l-gsap-4-2", title: "4.2 Pinning showcase sections (pin: true) without hurting mobile UX", time: "18m" },
                { id: "l-gsap-4-3", title: "4.3 Using gsap.matchMedia() for responsive motion & respecting prefers-reduced-motion", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-deploy-forms-domains",
          type: "Production Ops",
          typeAr: "البنية التحتية للتسليم",
          provider: "Netlify · Vercel · Formspree · Namecheap",
          title: "Deploy: Netlify or Vercel · Formspree Forms · Namecheap Domains (Client Pays)",
          titleAr: "النشر والإطلاق: Netlify/Vercel + نماذج Formspree + دومينات Namecheap (يدفعها العميل)",
          url: "https://formspree.io/",
          duration: "3 Modules · Client Launch Workflow",
          description:
            "The zero-backend production setup: instant global CDN hosting, reliable email/WhatsApp booking forms, and custom domain DNS setup.",
          descriptionAr:
            "إعداد الإطلاق الكامل بدون تعقيد Backend: استضافة سحابية، استقبال طلبات الحجز على الإيميل والواتساب، وربط الدومين الرسمي للعميل.",
          modules: [
            {
              id: "m-dfd-1",
              title: "Module 1: Netlify & Vercel Production Hosting",
              titleAr: "الوحدة 1: النشر الاحترافي على Netlify و Vercel",
              lessons: [
                { id: "l-dfd-1-1", title: "1.1 Git-based continuous deployment & preview links for client feedback rounds", time: "12m" },
                { id: "l-dfd-1-2", title: "1.2 Automatic HTTPS/SSL certificates, redirects (_redirects / vercel.json), and caching headers", time: "12m" }
              ]
            },
            {
              id: "m-dfd-2",
              title: "Module 2: Formspree Booking Forms + WhatsApp Hybrid Flow",
              titleAr: "الوحدة 2: ربط نماذج الحجز بـ Formspree والواتساب",
              lessons: [
                { id: "l-dfd-2-1", title: "2.1 Connecting HTML/Astro booking forms to Formspree endpoints with AJAX fetch submission", time: "15m" },
                { id: "l-dfd-2-2", title: "2.2 Spam protection (_gotcha honeypot) & custom Arabic/English confirmation toast/screen", time: "12m" },
                { id: "l-dfd-2-3", title: "2.3 Instant WhatsApp click-to-chat link (https://wa.me/201XXXXXXXXX?text=...) with pre-filled booking details", time: "12m" }
              ]
            },
            {
              id: "m-dfd-3",
              title: "Module 3: Namecheap Domains & DNS Handover (Client Pays)",
              titleAr: "الوحدة 3: شراء الدومين من Namecheap وربط الـ DNS (على حساب العميل)",
              lessons: [
                { id: "l-dfd-3-1", title: "3.1 Guiding the client to purchase their domain (or buying on their account so they own renewals)", time: "10m" },
                { id: "l-dfd-3-2", title: "3.2 Configuring A Records, CNAME (www), and custom Nameservers for Netlify/Vercel", time: "14m" }
              ]
            }
          ]
        },
        {
          id: "c-advanced-css-comeau-kp",
          type: "Deep-Dive Articles & Videos",
          typeAr: "مقالات وفيديوهات متقدمة",
          provider: "Josh W. Comeau (joshwcomeau.com) + Kevin Powell YouTube",
          title: "Advanced CSS: joshwcomeau.com Articles + Kevin Powell’s YouTube",
          titleAr: "الـ CSS المتقدمة: مقالات Josh Comeau التفاعلية + قناة Kevin Powell",
          url: "https://www.joshwcomeau.com/css/",
          duration: "2 Modules · 10 High-Craft CSS Guides",
          description:
            "Curated interactive deep-dives on shadows, gradients, stacking contexts, fluid clamp(), and modern CSS selectors.",
          descriptionAr:
            "أهم المقالات التفاعلية والفيديوهات لاحتراف الظلال الواقعية، التدرجات اللونية، وطبقات الـ Z-Index والـ CSS الحديثة.",
          modules: [
            {
              id: "m-acss-1",
              title: "Module 1: Josh W. Comeau’s Interactive CSS Guides",
              titleAr: "الوحدة 1: مقالات Josh W. Comeau التفاعلية الأساسية",
              lessons: [
                { id: "l-acss-1-1", title: "1.1 An Interactive Guide to Flexbox & An Interactive Guide to CSS Grid", time: "35m" },
                { id: "l-acss-1-2", title: "1.2 Designing Beautiful Shadows in CSS (layered shadows, elevation, color-matched shadows)", time: "25m" },
                { id: "l-acss-1-3", title: "1.3 Make Beautiful Gradients (HSL interpolation & avoiding muddy gray dead zones)", time: "20m" },
                { id: "l-acss-1-4", title: "1.4 What the Heck, z-index?? (Understanding Stacking Contexts & isolation: isolate)", time: "20m" },
                { id: "l-acss-1-5", title: "1.5 An Interactive Guide to CSS Transitions & Custom Cubic-Beziers", time: "25m" }
              ]
            },
            {
              id: "m-acss-2",
              title: "Module 2: Kevin Powell’s Modern CSS Power Tools",
              titleAr: "الوحدة 2: تقنيات Kevin Powell الحديثة في CSS",
              lessons: [
                { id: "l-acss-2-1", title: "2.1 Fluid Typography & Spacing with clamp(min, preferred, max)", time: "18m" },
                { id: "l-acss-2-2", title: "2.2 CSS Grid Subgrid for perfectly aligned pricing & feature card rows", time: "18m" },
                { id: "l-acss-2-3", title: "2.3 The :has() relational selector & modern CSS aspect-ratio / object-fit", time: "18m" }
              ]
            }
          ]
        }
      ],
      project: {
        id: "proj-phase-3",
        title: "Phase 3 Gate Project: Turn the 3 Designs into Live Sites — Lighthouse 90+",
        titleAr: "مشروع اجتياز المرحلة 3: تحويل التصاميم الثلاثة إلى مواقع حية بأداء Lighthouse 90+",
        rule: "All 3 sites must score 90+ across Performance, Accessibility, Best Practices, and SEO.",
        ruleAr: "يجب نشر المواقع الثلاثة فعلياً وتحقيق نتيجة 90+ في فحص Lighthouse.",
        deliverables: [
          {
            id: "del-p3-1",
            title: "Live Site #1: Medical/Dental Clinic built with Astro + Tailwind + GSAP (Lighthouse 90+)",
            titleAr: "الموقع الحي الأول: موقع العيادة الطبية بـ Astro و Tailwind و GSAP (Lighthouse 90+)"
          },
          {
            id: "del-p3-2",
            title: "Live Site #2: Restaurant/Cafe built with Astro + Tailwind + GSAP (Lighthouse 90+)",
            titleAr: "الموقع الحي الثاني: موقع المطعم/الكافيه بـ Astro و Tailwind و GSAP (Lighthouse 90+)"
          },
          {
            id: "del-p3-3",
            title: "Live Site #3: Fitness Gym built with Astro + Tailwind + GSAP (Lighthouse 90+)",
            titleAr: "الموقع الحي الثالث: موقع الجيم الرياضي بـ Astro و Tailwind و GSAP (Lighthouse 90+)"
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // PHASE 4: A SITE THAT SELLS (WEEKS 10-14)
    // ------------------------------------------------------------------------
    {
      id: "phase-4",
      number: "4",
      title: "Phase 4: A Site That Sells",
      titleAr: "المرحلة 4: موقع يحقق مبيعات (Copywriting & Local SEO)",
      weeks: "Weeks 10–14",
      pace: "Conversion & Search Visibility",
      initialStatus: "locked",
      accent: "amber",
      summary:
        "Combine clear StoryBrand copywriting with Google Local SEO, structured schema, and frictionless WhatsApp conversion so your clients get real customers.",
      summaryAr:
        "دمج كتابة المحتوى الإقناعي (StoryBrand) مع السيو المحلي (Local SEO) وبيانات Google Business لكي يجلب الموقع عملاء حقيقيين لصاحب النشاط.",
      courses: [
        {
          id: "c-storybrand-book",
          type: "Copywriting Book",
          typeAr: "كتاب كتابة المحتوى الإقناعي",
          provider: "Donald Miller",
          title: "Copywriting: Building a StoryBrand (Book)",
          titleAr: "كتاب Building a StoryBrand — إطار الرسالة التسويقية الواضحة (SB7)",
          url: "https://storybrand.com/",
          duration: "3 Parts · The 7-Part StoryBrand Framework (SB7)",
          description:
            "People don't buy the best services; they buy the services they can understand the fastest. Turn every client homepage into a clear story where the customer is the hero.",
          descriptionAr:
            "إذا أربكت الزائر خسرته؛ تعلّم كيف تصيغ نصوص الصفحة الرئيسية بحيث يفهم الزائر الخدمة في 5 ثوانٍ ويضغط على زر الحجز.",
          modules: [
            {
              id: "m-sb-1",
              title: "Part 1: Why Most Marketing Fails (Clarity Over Cleverness)",
              titleAr: "الجزء 1: لماذا يفشل معظم التسويق؟ (الوضوح يتفوق على الفلسفة)",
              lessons: [
                { id: "l-sb-1-1", title: "1.1 The key to being seen, heard, and understood: burning fewer mental calories", time: "15m" },
                { id: "l-sb-1-2", title: "1.2 The Grunt Test (5-Second Hero Test): What do you offer? How does it make my life better? What do I need to do to buy it?", time: "18m" }
              ]
            },
            {
              id: "m-sb-2",
              title: "Part 2: Building Your StoryBrand 7-Part Framework (SB7)",
              titleAr: "الجزء 2: عناصر إطار StoryBrand السبعة (SB7)",
              lessons: [
                { id: "l-sb-2-1", title: "Element 1 — A Character: The customer is the hero, not the clinic/restaurant/gym", time: "16m" },
                { id: "l-sb-2-2", title: "Element 2 — Has a Problem: Addressing External, Internal, and Philosophical problems", time: "18m" },
                { id: "l-sb-2-3", title: "Element 3 — And Meets a Guide: Expressing Empathy + Authority (reviews, years of experience, stats)", time: "18m" },
                { id: "l-sb-2-4", title: "Element 4 — Who Gives Them a Plan: The simple 3-Step Process section that removes fear", time: "15m" },
                { id: "l-sb-2-5", title: "Element 5 — And Calls Them to Action: Direct CTA (Book Now on WhatsApp) vs Transitional CTA", time: "15m" },
                { id: "l-sb-2-6", title: "Element 6 & 7 — Helps Them Avoid Failure & Ends in a Success (Before/After transformation)", time: "18m" }
              ]
            },
            {
              id: "m-sb-3",
              title: "Part 3: The High-Converting StoryBrand Website Wireframe",
              titleAr: "الجزء 3: تخطيط أقسام الموقع التسويقي وفق StoryBrand",
              lessons: [
                { id: "l-sb-3-1", title: "3.1 Above the Fold: Aspirational Headline + Subheadline + Primary CTA top-right & center", time: "15m" },
                { id: "l-sb-3-2", title: "3.2 The Value Stack (3 crisp benefit icons) & The Stakes section", time: "15m" },
                { id: "l-sb-3-3", title: "3.3 Authority Proof (Testimonials + Logos/Numbers) + 3-Step Plan + Explanatory One-Liner", time: "18m" }
              ]
            }
          ]
        },
        {
          id: "c-google-seo-starter",
          type: "Official Google Guide",
          typeAr: "الدليل الرسمي من جوجل",
          provider: "Google Search Central · developers.google.com/search",
          title: "Google SEO Starter Guide — developers.google.com/search",
          titleAr: "دليل المبتدئين لتحسين محركات البحث من Google Search Central",
          url: "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
          duration: "4 Core Modules · Search Engine Fundamentals",
          description:
            "Everything Google officially requires to crawl, index, understand, and rank a local business website.",
          descriptionAr:
            "كل ما تطلبه جوجل رسمياً لأرشفة الموقع وفهمه وتصدّره في نتائج البحث المحلية.",
          modules: [
            {
              id: "m-gseo-1",
              title: "Module 1: How Google Search Works & Indexing",
              titleAr: "الوحدة 1: كيف يعمل محرك بحث جوجل والأرشفة الفورية",
              lessons: [
                { id: "l-gseo-1-1", title: "1.1 Crawling, Indexing, and Serving results + site:domain.com inspection", time: "12m" },
                { id: "l-gseo-1-2", title: "1.2 Setting up Google Search Console, submitting sitemap.xml, and URL Inspection", time: "15m" },
                { id: "l-gseo-1-3", title: "1.3 Controlling crawlers with robots.txt and <meta name='robots'>", time: "10m" }
              ]
            },
            {
              id: "m-gseo-2",
              title: "Module 2: Site Structure, Titles & Meta Descriptions",
              titleAr: "الوحدة 2: هيكلة الروابط، عناوين الصفحات <title>، والوصف التعريفي",
              lessons: [
                { id: "l-gseo-2-1", title: "2.1 Writing high-CTR <title> tags with Service + City/Neighborhood (e.g., 'عيادة أسنان في العاشر من رمضان')", time: "15m" },
                { id: "l-gseo-2-2", title: "2.2 Crafting persuasive <meta name='description'> snippets that win the click", time: "12m" },
                { id: "l-gseo-2-3", title: "2.3 Clean URL slugs, canonical URLs, and semantic heading hierarchy (single H1, logical H2/H3)", time: "14m" }
              ]
            },
            {
              id: "m-gseo-3",
              title: "Module 3: Images, Mobile-First Indexing & Structured Data",
              titleAr: "الوحدة 3: سيو الصور، الفهرسة عبر الموبايل، والبيانات المنظمة",
              lessons: [
                { id: "l-gseo-3-1", title: "3.1 Descriptive image filenames & localized alt text + OpenGraph social preview images", time: "12m" },
                { id: "l-gseo-3-2", title: "3.2 Mobile-First Indexing requirements & Core Web Vitals (LCP, INP, CLS)", time: "14m" },
                { id: "l-gseo-3-3", title: "3.3 Rich Results & JSON-LD Structured Data testing tool", time: "15m" }
              ]
            }
          ]
        },
        {
          id: "c-moz-seo-guide",
          type: "Complete Guide",
          typeAr: "الدليل الشامل للسيو",
          provider: "Moz · moz.com",
          title: "Moz Beginner’s Guide to SEO — moz.com",
          titleAr: "دليل Moz الشامل لأساسيات السيو (7 فصول كاملة)",
          url: "https://moz.com/beginners-guide-to-seo",
          duration: "7 Chapters · End-to-End SEO Mastery",
          description:
            "Understand search intent, local keyword research, on-page optimization, technical SEO, and local authority signals.",
          descriptionAr:
            "إتقان البحث عن الكلمات المفتاحية المحلية، نية الباحث، تهيئة الصفحات، السيو التقني، وبناء الثقة المحلية.",
          modules: [
            {
              id: "m-moz-1",
              title: "Chapters 1–3: Search Engines, Keyword Research & On-Site SEO",
              titleAr: "الفصول 1–3: عمل محركات البحث، الكلمات المفتاحية، والسيو الداخلي",
              lessons: [
                { id: "l-moz-1-1", title: "Chapter 1: How Search Engines Work — Crawling, indexing, and local pack ranking factors", time: "18m" },
                { id: "l-moz-1-2", title: "Chapter 2: Keyword Research — Transactional & local intent ('near me', city/area queries)", time: "22m" },
                { id: "l-moz-1-3", title: "Chapter 3: On-Site Optimization — Mapping keywords to service sections, internal links, and local area pages", time: "22m" }
              ]
            },
            {
              id: "m-moz-2",
              title: "Chapters 4–7: Technical SEO, Local Authority & Measurement",
              titleAr: "الفصول 4–7: السيو التقني، بناء السلطة المحلية، وقياس النتائج",
              lessons: [
                { id: "l-moz-2-1", title: "Chapter 4: Technical SEO — Page speed, Astro static HTML advantage, HTTPS, and mobile usability", time: "20m" },
                { id: "l-moz-2-2", title: "Chapter 5: Link Building & Local Citations — NAP consistency across directories & social profiles", time: "18m" },
                { id: "l-moz-2-3", title: "Chapter 6 & 7: Measuring, Prioritizing & Executing SEO + Core SEO Glossary", time: "20m" }
              ]
            }
          ]
        }
      ],
      checklist: {
        id: "chk-phase-4-local-seo",
        title: "Local SEO Checklist (Applied to Every Client Site)",
        titleAr: "قائمة فحص السيو المحلي (تُطبّق إجبارياً لكل عميل)",
        items: [
          {
            id: "chk-lseo-1",
            title: "Google Business Profile — Verified profile, exact Name/Address/Phone (NAP), primary category, real photos, website link, and review request link",
            titleAr: "ملف Google Business Profile — توثيق النشاط، تطابق الاسم والعنوان والهاتف، التصنيف الدقيق، صور حقيقية، ورابط الموقع"
          },
          {
            id: "chk-lseo-2",
            title: "LocalBusiness Schema — Valid JSON-LD script in <head> (MedicalClinic / Restaurant / ExerciseGym / Store) with geo coordinates, openingHours, telephone, and address",
            titleAr: "كود LocalBusiness Schema (JSON-LD) — بيانات منظمة في الـ <head> تشمل الإحداثيات، مواعيد العمل، رقم الهاتف، والعنوان"
          },
          {
            id: "chk-lseo-3",
            title: "WhatsApp Button + Embedded Google Map — Sticky/floating WhatsApp CTA with pre-filled message + fast lazy-loaded interactive Google Map with 'Get Directions' button",
            titleAr: "زر واتساب عائم ومباشر برسالة جاهزة + خريطة جوجل تفاعلية سريعة التحميل مع زر «احصل على الاتجاهات»"
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // PHASE 5: SELLING (FROM WEEK 12)
    // ------------------------------------------------------------------------
    {
      id: "phase-5",
      number: "5",
      title: "Phase 5: Selling & Getting Clients",
      titleAr: "المرحلة 5: البيع، العروض التي لا تُقاوم، وأول 3 عملاء",
      weeks: "From Week 12",
      pace: "Outreach & Client Acquisition",
      initialStatus: "locked",
      accent: "rose",
      summary:
        "Stop pitching 'coding hours' and start selling high-ROI business outcomes using Grand Slam Offers, consultative positioning, and in-person local outreach with ready designs.",
      summaryAr:
        "توقف عن بيع «ساعات برمجة» وابدأ ببيع «نتائج وعوائد تجارية» عبر صياغة عروض لا تُقاوم وزيارة الأنشطة المحلية بتصميم جاهز لموقعهم.",
      courses: [
        {
          id: "c-100m-offers",
          type: "Sales & Offer Book",
          typeAr: "كتاب بناء العروض",
          provider: "Alex Hormozi",
          title: "$100M Offers — Alex Hormozi",
          titleAr: "كتاب $100M Offers — كيف تصنع عرضاً قوياً يستحيل رفضه",
          url: "https://www.acquisition.com/books",
          duration: "5 Sections · 17 Chapters · The Grand Slam Offer System",
          description:
            "Make people an offer so good they would feel stupid saying no. Transform 'I build websites' into 'I install a Local Patient/Customer Booking Engine in 7 days'.",
          descriptionAr:
            "تحويل خدمتك من سلعة عادية يتنافس الكل على رخص سعرها إلى عرض متكامل (Grand Slam Offer) يضاعف قيمتها لدى صاحب العمل.",
          modules: [
            {
              id: "m-hor-1",
              title: "Section 1 & 2: Grand Slam Offers & Pricing Strategy",
              titleAr: "القسم 1 و 2: الهروب من فخ السلعة الرخيصة وتسعير القيمة",
              lessons: [
                { id: "l-hor-1-1", title: "1.1 Why selling 'a website' makes you a commodity competing on lowest price", time: "18m" },
                { id: "l-hor-1-2", title: "2.1 Finding a Starving Crowd (High-margin local clinics, restaurants, gyms with outdated/no websites)", time: "18m" },
                { id: "l-hor-1-3", title: "2.2 Charge What It’s Worth: Price vs Value discrepancy (1 new dental implant patient pays for the site)", time: "20m" }
              ]
            },
            {
              id: "m-hor-2",
              title: "Section 3: The Value Equation & Creating Your Offer",
              titleAr: "القسم 3: معادلة القيمة الرباعية وتفكيك عقبات العميل",
              lessons: [
                { id: "l-hor-2-1", title: "3.1 The Value Equation: Maximize (Dream Outcome × Perceived Likelihood) / Minimize (Time Delay × Effort & Sacrifice)", time: "25m" },
                { id: "l-hor-2-2", title: "3.2 Listing every obstacle the business owner faces ('I don't have time to write text', 'I don't know tech')", time: "20m" },
                { id: "l-hor-2-3", title: "3.3 Trim & Stack: Turning solved obstacles into high-value low-cost deliverables", time: "20m" }
              ]
            },
            {
              id: "m-hor-3",
              title: "Section 4: Enhancing the Offer (Scarcity, Urgency, Bonuses, Guarantees)",
              titleAr: "القسم 4: مضاعفات العرض (الندرة، الاستعجال، البونص، والضمان)",
              lessons: [
                { id: "l-hor-3-1", title: "4.1 Real Scarcity & Urgency: Taking only 3 local clients per month for dedicated 7-day delivery", time: "15m" },
                { id: "l-hor-3-2", title: "4.2 Unbeatable Bonuses: Free Google Business Profile optimization + QR Menu/Review card + WhatsApp scripts", time: "18m" },
                { id: "l-hor-3-3", title: "4.3 Risk Reversal / Guarantees & M-A-G-I-C Offer Naming", time: "18m" }
              ]
            }
          ]
        },
        {
          id: "c-win-without-pitching",
          type: "Positioning Book",
          typeAr: "كتاب التموضع الاستشاري",
          provider: "Blair Enns",
          title: "The Win Without Pitching Manifesto — Blair Enns",
          titleAr: "كتاب The Win Without Pitching Manifesto — القواعد الـ 12 لبيع خدمات التصميم",
          url: "https://www.winwithoutpitching.com/the-manifesto/",
          duration: "12 Proclamations · Studio Authority Playbook",
          description:
            "How to position yourself as a trusted specialist advisor rather than an order-taking freelancer.",
          descriptionAr:
            "كيف تتعامل مع العميل كخبير استشاري متخصص يحل مشكلة تجارية، وليس كمنفّذ أوامر يقبل بأي شروط.",
          modules: [
            {
              id: "m-wwp-1",
              title: "Proclamations 1–4: Specialization & Diagnosis Before Prescription",
              titleAr: "المبادئ 1–4: التخصص الدقيق والتشخيص قبل كتابة الوصفة",
              lessons: [
                { id: "l-wwp-1-1", title: "1. We Will Specialize: Being the #1 go-to expert for fast local business marketing sites", time: "15m" },
                { id: "l-wwp-1-2", title: "2. We Will Replace Presentations with Conversations: Calm consultative discovery", time: "15m" },
                { id: "l-wwp-1-3", title: "3. We Will Diagnose Before We Prescribe: Uncovering missed leads before quoting a package", time: "15m" },
                { id: "l-wwp-1-4", title: "4. We Will Rethink What It Means to Sell: Helping the right client make a confident business decision", time: "15m" }
              ]
            },
            {
              id: "m-wwp-2",
              title: "Proclamations 5–8: Selectivity, Value Pricing & Peer Status",
              titleAr: "المبادئ 5–8: الانتقائية، التسعير بالقيمة، ومكانة الخبير",
              lessons: [
                { id: "l-wwp-2-1", title: "5 & 6. We Will Do Without Bad-Fit RFPs & Refuse to Work at a Loss", time: "15m" },
                { id: "l-wwp-2-2", title: "7. We Will Charge More: Presenting 3 tiered options (Basic, Standard, Premium)", time: "18m" },
                { id: "l-wwp-2-3", title: "8. We Will Hold Our Heads High: Controlling scope and revision boundaries with respect", time: "15m" }
              ]
            },
            {
              id: "m-wwp-3",
              title: "Proclamations 9–12: Money Conversations & Walking Away",
              titleAr: "المبادئ 9–12: التحدث عن الميزانية مبكراً والقدرة على قول «لا»",
              lessons: [
                { id: "l-wwp-3-1", title: "9 & 10. We Will Be Selective & Manage Scope Explicitly", time: "15m" },
                { id: "l-wwp-3-2", title: "11 & 12. Address Money Early & Always Be Willing to Walk Away from out-of-scope traps", time: "15m" }
              ]
            }
          ]
        }
      ],
      project: {
        id: "proj-phase-5",
        title: "Phase 5 Execution: First 3 Paying Clients & Studio Launch",
        titleAr: "التطبيق الميداني للمرحلة 5: الفوز بأول 3 عملاء وإطلاق البورتفوليو الرسمي",
        rule: "Show, don't tell: walk into real local businesses with their custom homepage already designed.",
        ruleAr: "تواصل مع المحلات والعيادات في العاشر من رمضان أو الزقازيق ومعك تصميم جاهز لموقعهم باسمهم وشعارهم.",
        deliverables: [
          {
            id: "del-p5-1",
            title: "Visit shops/clinics in 10th of Ramadan or Zagazig with a ready custom design of their own site",
            titleAr: "زيارة الأنشطة المحلية في العاشر من رمضان أو الزقازيق ومعك تصميم جاهز خاص بموقعهم على التابلت/اللابتوب"
          },
          {
            id: "del-p5-2",
            title: "Close first 3 clients at an introductory price in exchange for a glowing testimonial + measurable case study",
            titleAr: "إغلاق أول 3 عملاء بسعر افتتاحي مقابل شهادة موثقة (Testimonial) ودراسة حالة (Case Study)"
          },
          {
            id: "del-p5-3",
            title: "Publish official AHKH Studio Portfolio site on my own custom domain showcasing the 3 live case studies",
            titleAr: "نشر موقع البورتفوليو الرسمي على دومين خاص يعرض المشاريع الحية ودراسات الحالة وباقات الخدمة"
          }
        ]
      }
    },

    // ------------------------------------------------------------------------
    // AFTER MONTH 6: DESIGN ENGINEER EXPANSION
    // ------------------------------------------------------------------------
    {
      id: "phase-6",
      number: "6+",
      title: "After Month 6: React, Next.js & Design Engineer Path",
      titleAr: "ما بعد الشهر السادس: React و Next.js والانتقال لمستوى Design Engineer والعملاء الدوليين",
      weeks: "After Month 6",
      pace: "Advanced Web Applications",
      initialStatus: "locked",
      accent: "blue",
      summary:
        "When clients need custom booking engines, interactive calculators, or dashboards, this is where the road to Design Engineer and international clients begins.",
      summaryAr:
        "عندما يحتاج العملاء لأنظمة حجز مخصصة أو لوحات تحكم (Dashboards)، هنا يبدأ طريقك نحو لقب Design Engineer والعمل مع عملاء دوليين.",
      courses: [
        {
          id: "c-scrimba-react",
          type: "Interactive Course (Free)",
          typeAr: "كورس تفاعلي مجاني",
          provider: "Scrimba · Bob Ziroll",
          title: "React — Scrimba Learn React (Free)",
          titleAr: "كورس Scrimba Learn React — احتراف React الحديثة (Bob Ziroll)",
          url: "https://scrimba.com/learn/learnreact",
          duration: "~15 Hours · 4 Comprehensive Modules · 150+ Challenges",
          description:
            "The gold-standard interactive React curriculum covering components, props, data-driven rendering, complex state, forms, side effects, and capstone apps.",
          descriptionAr:
            "أفضل كورس تفاعلي لتعلم React بالتطبيق المستمر: المكونات، الـ Props، إدارة الحالة (State)، النماذج، والـ Hooks.",
          modules: [
            {
              id: "m-rea-1",
              title: "Module 1: Static Pages & Component Thinking",
              titleAr: "الوحدة 1: الصفحات الثابتة والتفكير بالمكونات (Components & JSX)",
              lessons: [
                { id: "l-rea-1-1", title: "1.1 React setup with Vite, declarative vs imperative UI, and JSX rules", time: "25m" },
                { id: "l-rea-1-2", title: "1.2 Creating composable custom components & styling in React", time: "25m" },
                { id: "l-rea-1-3", title: "1.3 Project 1: ReactFacts / Digital Profile Card in React", time: "35m" }
              ]
            },
            {
              id: "m-rea-2",
              title: "Module 2: Data-Driven React (Props & Array Mapping)",
              titleAr: "الوحدة 2: تمرير البيانات بالـ Props وتوليد القوائم بـ .map()",
              lessons: [
                { id: "l-rea-2-1", title: "2.1 Reusable components with Props & destructuring props cleanly", time: "25m" },
                { id: "l-rea-2-2", title: "2.2 Rendering dynamic arrays of objects with .map() and unique key props", time: "30m" },
                { id: "l-rea-2-3", title: "2.3 Project 2: Travel Journal / Service Directory from structured data", time: "40m" }
              ]
            },
            {
              id: "m-rea-3",
              title: "Module 3: Interactive React — State, Forms & Conditional UI",
              titleAr: "الوحدة 3: التفاعل وإدارة الحالة (useState, Forms, Conditional Rendering)",
              lessons: [
                { id: "l-rea-3-1", title: "3.1 Event listeners in React & managing component state with useState()", time: "35m" },
                { id: "l-rea-3-2", title: "3.2 Updating arrays and objects in state immutably + passing state across components", time: "35m" },
                { id: "l-rea-3-3", title: "3.3 Modern React Forms, form actions, and conditional rendering (&&, ternary)", time: "35m" },
                { id: "l-rea-3-4", title: "3.4 Project 3: Interactive Chef Claude / Dynamic Quote & Booking Estimator", time: "45m" }
              ]
            },
            {
              id: "m-rea-4",
              title: "Module 4: Side Effects (useEffect), APIs & Capstone Projects",
              titleAr: "الوحدة 4: التأثيرات الجانبية (useEffect)، جلب البيانات، ومشاريع التخرج",
              lessons: [
                { id: "l-rea-4-1", title: "4.1 Understanding side effects, useEffect() dependency arrays, and cleanup functions", time: "35m" },
                { id: "l-rea-4-2", title: "4.2 Fetching external APIs, loading states, and useRef() for DOM access", time: "30m" },
                { id: "l-rea-4-3", title: "4.3 Capstone Projects: Tenzies + Assembly: Endgame (Full State Architecture)", time: "60m" }
              ]
            }
          ]
        },
        {
          id: "c-nextjs-learn",
          type: "Official Curriculum",
          typeAr: "المنهج الرسمي من Vercel",
          provider: "Vercel · nextjs.org/learn",
          title: "Next.js — nextjs.org/learn (App Router Dashboard Course)",
          titleAr: "كورس Next.js الرسمي — بناء تطبيقات الويب ولوحات التحكم (16 فصلاً)",
          url: "https://nextjs.org/learn",
          duration: "16 Chapters · Full-Stack App Router Architecture",
          description:
            "Build a full-stack dashboard application with Next.js App Router, React Server Components, Streaming, Server Actions, Postgres, and Authentication.",
          descriptionAr:
            "المنهج الرسمي لبناء تطبيقات كاملة بـ Next.js App Router: مكونات الخادم، قواعد البيانات، الـ Server Actions، وتسجيل الدخول.",
          modules: [
            {
              id: "m-nxt-1",
              title: "Chapters 1–4: App Router Foundations, Styling, Assets & Layouts",
              titleAr: "الفصول 1–4: أساسيات App Router، الخطوط والصور، والقوالب المتداخلة",
              lessons: [
                { id: "l-nxt-1-1", title: "Chapter 1 & 2: Getting Started & CSS Styling (Tailwind + clsx conditional styling)", time: "25m" },
                { id: "l-nxt-1-2", title: "Chapter 3: Optimizing Fonts (next/font) and Images (next/image) for zero layout shift", time: "20m" },
                { id: "l-nxt-1-3", title: "Chapter 4: Creating Nested Layouts and Pages with file-system routing (layout.tsx, page.tsx)", time: "25m" }
              ]
            },
            {
              id: "m-nxt-2",
              title: "Chapters 5–8: Navigation, Databases & React Server Components",
              titleAr: "الفصول 5–8: التنقل السريع، قواعد البيانات، ومكونات الخادم (RSC)",
              lessons: [
                { id: "l-nxt-2-1", title: "Chapter 5: Navigating Between Pages (<Link> prefetching & usePathname active states)", time: "20m" },
                { id: "l-nxt-2-2", title: "Chapter 6 & 7: Setting Up Postgres Database & Fetching Data in Server Components", time: "35m" },
                { id: "l-nxt-2-3", title: "Chapter 8: Static vs Dynamic Rendering & avoiding request waterfalls", time: "25m" }
              ]
            },
            {
              id: "m-nxt-3",
              title: "Chapters 9–12: Streaming, Search/Pagination & Server Actions",
              titleAr: "الفصول 9–12: البث التدريجي (Streaming)، البحث، وتعديل البيانات بـ Server Actions",
              lessons: [
                { id: "l-nxt-3-1", title: "Chapter 9 & 10: Streaming with React Suspense, loading.tsx skeletons, and Partial Prerendering", time: "30m" },
                { id: "l-nxt-3-2", title: "Chapter 11: Adding URL-driven Search and Pagination (useSearchParams, useRouter, debouncing)", time: "30m" },
                { id: "l-nxt-3-3", title: "Chapter 12: Mutating Data with React Server Actions (create, update, delete, revalidatePath)", time: "35m" }
              ]
            },
            {
              id: "m-nxt-4",
              title: "Chapters 13–16: Error Handling, Accessibility, Auth & Metadata",
              titleAr: "الفصول 13–16: معالجة الأخطاء، الوصولية، نظام الدخول (Auth)، والـ Metadata",
              lessons: [
                { id: "l-nxt-4-1", title: "Chapter 13 & 14: Handling Errors (error.tsx, not-found.tsx) & Server-Side Form Validation", time: "30m" },
                { id: "l-nxt-4-2", title: "Chapter 15: Adding Authentication with NextAuth.js & route protection middleware", time: "30m" },
                { id: "l-nxt-4-3", title: "Chapter 16: Adding Dynamic Metadata, OpenGraph images, and production deployment", time: "20m" }
              ]
            }
          ]
        }
      ]
    }
  ],

  // ==========================================================================
  // PARALLEL TRACK: MARKETING & SALES (6 STAGES WITH LITERAL MODULES)
  // ==========================================================================
  marketingTrack: {
    id: "track-marketing-sales",
    title: "Track: Marketing & Sales",
    titleAr: "المسار الموازي الكامل: التسويق والمبيعات (Marketing & Sales Track)",
    why: "Marketing websites only sell if I understand marketing and sales as well as code and design. This is a full track, not tips.",
    whyAr: "المواقع التسويقية لا تحقق مبيعات إلا إذا فهمتُ التسويق والبيع بنفس عمق فهمي للكود والتصميم. هذا مسار كامل وليس مجرد نصائح عابرة.",
    when: "Starts after HTML/CSS is solid, then runs alongside Design.",
    whenAr: "يبدأ بعد إتقان HTML/CSS، ويسير بالتوازي مع مرحلة التصميم.",
    method: "Method: same unit system. Read a part, close it, write from memory, then apply it to a real site.",
    methodAr: "طريقة المذاكرة: نفس نظام الوحدات — اقرأ جزءاً، أغلقه، لخّصه من الذاكرة، ثم طبّقه فوراً على موقع حقيقي.",
    stages: [
      {
        id: "ms-stage-1",
        number: "01",
        title: "1. Marketing Basics",
        titleAr: "المرحلة 1: أساسيات التسويق والتموضع",
        focus: "Target customer, positioning, funnel, channels.",
        focusAr: "تحديد العميل المستهدف، التموضع في السوق، قمع التسويق (Funnel)، والقنوات.",
        accent: "emerald",
        resources: [
          {
            id: "ms-r-hubspot-inbound",
            type: "Free Certification",
            typeAr: "شهادة مجانية معتمدة",
            provider: "HubSpot Academy",
            title: "HubSpot Academy: Inbound Marketing (Free)",
            titleAr: "كورس HubSpot Academy: التسويق الداخلي (Inbound Marketing)",
            url: "https://academy.hubspot.com/courses/inbound-marketing",
            duration: "~4.5 Hours · 5 Modules · 18 Lessons",
            modules: [
              {
                id: "m-hbi-1",
                title: "Module 1: Inbound Marketing Fundamentals & Buyer Personas",
                titleAr: "الوحدة 1: أساسيات التسويق الداخلي وبناء شخصية العميل (Buyer Persona)",
                lessons: [
                  { id: "l-hbi-1-1", title: "1.1 What is Inbound Marketing? (Attract → Engage → Delight flywheel)", time: "12m" },
                  { id: "l-hbi-1-2", title: "1.2 Creating Buyer Personas for local business customers (patients, diners, gym members)", time: "15m" },
                  { id: "l-hbi-1-3", title: "1.3 Conducting rapid buyer persona interviews & review mining", time: "12m" }
                ]
              },
              {
                id: "m-hbi-2",
                title: "Module 2: Mapping the Buyer’s Journey",
                titleAr: "الوحدة 2: رسم رحلة المشتري (الوعي ← المفاضلة ← القرار)",
                lessons: [
                  { id: "l-hbi-2-1", title: "2.1 Awareness Stage: How local customers realize they have a problem", time: "12m" },
                  { id: "l-hbi-2-2", title: "2.2 Consideration Stage: Comparing local options & what builds instant trust", time: "14m" },
                  { id: "l-hbi-2-3", title: "2.3 Decision Stage: Removing friction so they book via WhatsApp or form", time: "14m" }
                ]
              },
              {
                id: "m-hbi-3",
                title: "Module 3: Content, Social & Conversational Growth Strategy",
                titleAr: "الوحدة 3: استراتيجية المحتوى والنمو الحواري عبر الواتساب",
                lessons: [
                  { id: "l-hbi-3-1", title: "3.1 Planning high-intent service & local area content", time: "15m" },
                  { id: "l-hbi-3-2", title: "3.2 Conversational Growth: Using instant WhatsApp chat to close local leads", time: "15m" },
                  { id: "l-hbi-3-3", title: "3.3 Measuring Conversion Optimization & Marketing Attribution", time: "15m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-seth-godin",
            type: "Book",
            typeAr: "كتاب تسويق تأسيسي",
            provider: "Seth Godin",
            title: "This Is Marketing — Seth Godin",
            titleAr: "كتاب This Is Marketing — سيث غودين",
            url: "https://seths.blog/tim/",
            duration: "4 Core Parts · 12 Key Chapters",
            modules: [
              {
                id: "m-sg-1",
                title: "Part 1: The Smallest Viable Market & Empathy",
                titleAr: "الجزء 1: أصغر سوق قابل للحياة والربح (Smallest Viable Market)",
                lessons: [
                  { id: "l-sg-1-1", title: "Ch 1–3: Marketing is the generous act of helping someone solve a problem", time: "20m" },
                  { id: "l-sg-1-2", title: "Ch 4–5: The Smallest Viable Market — Why 'everyone' is not your customer", time: "20m" },
                  { id: "l-sg-1-3", title: "Ch 6–7: 'People like us do things like this' — Worldviews, status, and affiliation", time: "20m" }
                ]
              },
              {
                id: "m-sg-2",
                title: "Part 2: Permission, Trust, Tension & The Funnel",
                titleAr: "الجزء 2: التسويق بالإذن، بناء الثقة، ومعادلة القمع التسويقي",
                lessons: [
                  { id: "l-sg-2-1", title: "Ch 10–12: Trust & Tension — Creating forward motion on a landing page", time: "20m" },
                  { id: "l-sg-2-2", title: "Ch 14–16: Price is a story & Permission Marketing asset building", time: "20m" },
                  { id: "l-sg-2-3", title: "Ch 17–19: Funnel Math — Why a high-converting website makes every ad profitable", time: "20m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-obviously-awesome",
            type: "Book",
            typeAr: "كتاب التموضع الاستراتيجي",
            provider: "April Dunford",
            title: "Obviously Awesome — April Dunford",
            titleAr: "كتاب Obviously Awesome — أبريل داتفورد (التموضع التنافسي)",
            url: "https://www.aprildunford.com/books",
            duration: "3 Parts · The 10-Step Positioning Method",
            modules: [
              {
                id: "m-oa-1",
                title: "Part 1: The 5 Components of Effective Positioning",
                titleAr: "الجزء 1: المكونات الخمسة للتموضع الفعّال",
                lessons: [
                  { id: "l-oa-1-1", title: "Component 1: Competitive Alternatives (What local clients actually do instead: Instagram/Facebook only)", time: "18m" },
                  { id: "l-oa-1-2", title: "Component 2 & 3: Unique Attributes (Fast load, Google Maps SEO, WhatsApp flow) → Concrete Business Value", time: "20m" },
                  { id: "l-oa-1-3", title: "Component 4 & 5: Best-Fit Target Customers & Winning Market Category", time: "18m" }
                ]
              },
              {
                id: "m-oa-2",
                title: "Part 2: The 10-Step Positioning Execution & Sales Translation",
                titleAr: "الجزء 2: خطوات التطبيق العشر وتحويل التموضع لقصة بيع",
                lessons: [
                  { id: "l-oa-2-1", title: "Steps 1–6: Isolating differentiation & proving ROI to local business owners", time: "20m" },
                  { id: "l-oa-2-2", title: "Steps 7–10: Translating positioning into your website Hero messaging and sales script", time: "20m" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ms-stage-2",
        number: "02",
        title: "2. Messaging & Copy",
        titleAr: "المرحلة 2: الرسالة التسويقية وكتابة الإعلانات (Copywriting)",
        focus: "How a page persuades a visitor.",
        focusAr: "كيف تقنع الصفحة الزائر وتدفعه لاتخاذ قرار الحجز أو التواصل.",
        accent: "cyan",
        resources: [
          {
            id: "ms-r-storybrand-applied",
            type: "Book & Wireframe",
            typeAr: "تطبيق عملي على النصوص",
            provider: "Donald Miller",
            title: "Building a StoryBrand — Donald Miller",
            titleAr: "التطبيق العملي لكتاب Building a StoryBrand على المواقع",
            url: "https://storybrand.com/",
            duration: "3 Applied Copywriting Drills",
            modules: [
              {
                id: "m-sba-1",
                title: "Applied StoryBrand Copywriting Drills",
                titleAr: "تمارين تطبيقية لكتابة نصوص الصفحات الرئيسية",
                lessons: [
                  { id: "l-sba-1-1", title: "Drill 1: Write 5 Hero Section headlines & subheadlines that pass the 5-second Grunt Test", time: "25m" },
                  { id: "l-sba-1-2", title: "Drill 2: Write Problem → Empathy/Authority → 3-Step Plan sections for a clinic & restaurant", time: "30m" },
                  { id: "l-sba-1-3", title: "Drill 3: Write the Brand One-Liner & Risk-Reversal CTA block", time: "20m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-copyhackers",
            type: "Free Articles & Playbooks",
            typeAr: "مقالات وأطر كتابة التحويل",
            provider: "Copyhackers · Joanna Wiebe",
            title: "Copyhackers (Free Articles)",
            titleAr: "مقالات وأطر Copyhackers المجانية لكتابة صفحات الهبوط",
            url: "https://copyhackers.com/",
            duration: "4 Core Copywriting Frameworks",
            modules: [
              {
                id: "m-ch-1",
                title: "Module 1: Voice-of-Customer (VoC) & Persuasion Formulas",
                titleAr: "الوحدة 1: استخراج لغة العميل (VoC) وصيغ الإقناع (PAS / AIDA)",
                lessons: [
                  { id: "l-ch-1-1", title: "1.1 Review Mining: Extracting exact customer pains & desires from Google Maps reviews", time: "20m" },
                  { id: "l-ch-1-2", title: "1.2 Applying PAS (Problem - Agitation - Solution) to service section copy", time: "20m" },
                  { id: "l-ch-1-3", title: "1.3 Writing magnetic Headlines, Subheads, and Crossheads for mobile scanners", time: "20m" },
                  { id: "l-ch-1-4", title: "1.4 High-Converting Button Copy ('Book My Consultation' vs 'Submit') & Click Triggers", time: "15m" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ms-stage-3",
        number: "03",
        title: "3. SEO & Local SEO",
        titleAr: "المرحلة 3: السيو والسيو المحلي (SEO & Local SEO)",
        focus: "Ranking local businesses on Google Search & Google Maps.",
        focusAr: "تصدّر نتائج بحث جوجل وخرائط جوجل في المدينة والمنطقة المحيطة.",
        accent: "violet",
        resources: [
          {
            id: "ms-r-moz-applied",
            type: "Guide",
            typeAr: "تطبيق استراتيجية السيو",
            provider: "Moz",
            title: "Moz Beginner’s Guide to SEO",
            titleAr: "تطبيق دليل Moz للسيو على الكلمات المفتاحية المحلية",
            url: "https://moz.com/beginners-guide-to-seo",
            duration: "2 Applied Modules",
            modules: [
              {
                id: "m-mza-1",
                title: "Local Keyword & On-Page Implementation",
                titleAr: "بناء مصفوفة الكلمات المفتاحية المحلية وتطبيقها",
                lessons: [
                  { id: "l-mza-1-1", title: "1.1 Building a Local Keyword Matrix (Service + City/District in Arabic & English)", time: "25m" },
                  { id: "l-mza-1-2", title: "1.2 On-Page SEO Blueprint: Mapping keywords to H1, H2s, Meta Title, URL slugs, and Alt text", time: "25m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-gsc-docs",
            type: "Official Docs",
            typeAr: "التوثيق التقني لجوجل",
            provider: "Google",
            title: "Google Search Central Docs",
            titleAr: "وثائق Google Search Central (الفهرسة والبيانات المنظمة)",
            url: "https://developers.google.com/search/docs",
            duration: "2 Core Modules",
            modules: [
              {
                id: "m-gscd-1",
                title: "Schema Markup & Search Console Mastery",
                titleAr: "البيانات المنظمة وتقارير Search Console",
                lessons: [
                  { id: "l-gscd-1-1", title: "1.1 Creating reusable JSON-LD templates for MedicalClinic, Restaurant, HealthClub, LocalBusiness", time: "25m" },
                  { id: "l-gscd-1-2", title: "1.2 Reading Search Console Queries, Impressions, and CTR to prove growth to clients", time: "20m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-gbp-mastery",
            type: "Local Dominance",
            typeAr: "السيطرة على خرائط جوجل",
            provider: "Google Business Profile",
            title: "Google Business Profile Optimization",
            titleAr: "إتقان تهيئة ملف Google Business Profile للأنشطة المحلية",
            url: "https://www.google.com/business/",
            duration: "3 Local Pack Modules",
            modules: [
              {
                id: "m-gbp-1",
                title: "Google Maps Local 3-Pack Optimization",
                titleAr: "تصدر النتائج الثلاث الأولى في خرائط جوجل (Local 3-Pack)",
                lessons: [
                  { id: "l-gbp-1-1", title: "1.1 Complete GBP Setup: Exact NAP, primary/secondary categories, services menu, geo-tagged photos", time: "20m" },
                  { id: "l-gbp-1-2", title: "1.2 Review Engine: Creating direct Google Review link + QR code stand for the shop/clinic desk", time: "20m" },
                  { id: "l-gbp-1-3", title: "1.3 Adding UTM parameters (?utm_source=google&utm_medium=gbp) to the Website & Booking links", time: "15m" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ms-stage-4",
        number: "04",
        title: "4. Conversion & Analytics",
        titleAr: "المرحلة 4: معدل التحويل والتحليلات (CRO & GA4)",
        focus: "CTA, CRO, A/B testing, Google Analytics.",
        focusAr: "تحسين أزرار الدعوة للإجراء (CTA)، رفع معدل التحويل (CRO)، وإثبات النتائج بـ Google Analytics 4.",
        accent: "amber",
        resources: [
          {
            id: "ms-r-ga4-skillshop",
            type: "Free Official Course",
            typeAr: "كورس جوجل الرسمي المجاني",
            provider: "Google Skillshop",
            title: "Google Skillshop: GA4 (Free)",
            titleAr: "كورس Google Skillshop الرسمي: إتقان Google Analytics 4 (مجاني)",
            url: "https://skillshop.docebosaas.com/",
            duration: "4 Modules · Conversion Event Tracking",
            modules: [
              {
                id: "m-ga4-1",
                title: "GA4 Setup, Events & Client Reporting",
                titleAr: "إعداد GA4 وتتبع نقرات الواتساب والحجوزات",
                lessons: [
                  { id: "l-ga4-1-1", title: "1.1 Creating a GA4 Property, Data Stream, and installing gtag.js in Astro", time: "20m" },
                  { id: "l-ga4-1-2", title: "1.2 Understanding Acquisition, Engagement, and Mobile vs Desktop reports", time: "20m" },
                  { id: "l-ga4-1-3", title: "1.3 Firing custom Key Events: whatsapp_click, booking_submit, phone_click, map_directions", time: "25m" },
                  { id: "l-ga4-1-4", title: "1.4 Designing a clean 1-page Monthly Analytics Summary for the Analytics Add-on", time: "20m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-dont-make-me-think",
            type: "UX Classic Book",
            typeAr: "كتاب سهولة الاستخدام الأشهر",
            provider: "Steve Krug",
            title: "Don’t Make Me Think — Steve Krug",
            titleAr: "كتاب Don’t Make Me Think — ستيف كروغ (البداهة وسهولة الاستخدام)",
            url: "https://sensible.com/dont-make-me-think/",
            duration: "3 Parts · 13 Short Chapters",
            modules: [
              {
                id: "m-dmmt-1",
                title: "Guiding Principles of Instant Usability",
                titleAr: "القواعد الذهبية للبداهة وعدم إجهاد الزائر بالتفكير",
                lessons: [
                  { id: "l-dmmt-1-1", title: "Ch 1–2: Krug’s First Law ('Don’t make me think!') & how users scan pages at 100 mph", time: "20m" },
                  { id: "l-dmmt-1-2", title: "Ch 3–5: Billboard Design 101, mindless clicks, and cutting 50% of unnecessary words", time: "20m" },
                  { id: "l-dmmt-1-3", title: "Ch 6–7: Navigation clarity (The Trunk Test) & designing the Homepage to answer 'What is this?' in 2 seconds", time: "20m" },
                  { id: "l-dmmt-1-4", title: "Ch 9–11: Mobile Usability rules & Usability as Common Courtesy (building customer goodwill)", time: "20m" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ms-stage-5",
        number: "05",
        title: "5. Sales & Negotiation",
        titleAr: "المرحلة 5: المبيعات، مكالمات الاستكشاف، والتفاوض",
        focus: "Leads, discovery calls, objections, negotiation.",
        focusAr: "جلب العملاء المحتملين، إدارة جلسات التشخيص، التعامل مع الاعتراضات، والتفاوض الاحترافي.",
        accent: "rose",
        resources: [
          {
            id: "ms-r-hubspot-sales",
            type: "Free Certification",
            typeAr: "شهادة مبيعات مجانية",
            provider: "HubSpot Academy",
            title: "HubSpot Academy: Inbound Sales (Free)",
            titleAr: "كورس HubSpot Academy: المبيعات الاستشارية (Inbound Sales)",
            url: "https://academy.hubspot.com/courses/inbound-sales",
            duration: "3 Modules · Consultative Selling",
            modules: [
              {
                id: "m-hbs-1",
                title: "Inbound Sales Pipeline (Identify → Connect → Explore → Advise)",
                titleAr: "مراحل البيع الأربع (التحديد ← التواصل ← الاستكشاف ← تقديم الحل)",
                lessons: [
                  { id: "l-hbs-1-1", title: "1.1 Identifying ideal local businesses (high LTV, active ads or strong foot traffic, weak website)", time: "20m" },
                  { id: "l-hbs-1-2", title: "1.2 Connecting: In-person visit or personalized 90-second video audit showing their custom homepage", time: "20m" },
                  { id: "l-hbs-1-3", title: "1.3 Exploring & Advising: Running a 15-minute diagnostic meeting & presenting the 3 packages", time: "25m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-spin-selling",
            type: "Sales Book",
            typeAr: "كتاب البيع الاستشاري",
            provider: "Neil Rackham",
            title: "SPIN Selling — Neil Rackham",
            titleAr: "كتاب SPIN Selling — نيل راكهام (فن البيع بالأسئلة الذكية)",
            url: "https://www.goodreads.com/book/show/83303.SPIN_Selling",
            duration: "4 Question Frameworks (S-P-I-N)",
            modules: [
              {
                id: "m-spin-1",
                title: "Mastering the S-P-I-N Question Sequence",
                titleAr: "إتقان تسلسل أسئلة S-P-I-N الأربعة في جلسات العميل",
                lessons: [
                  { id: "l-spin-1-1", title: "1. Situation Questions: 'How do new patients/customers currently find and book with you?'", time: "15m" },
                  { id: "l-spin-1-2", title: "2. Problem Questions: 'How often do people ask the same questions on WhatsApp or get lost finding the address?'", time: "15m" },
                  { id: "l-spin-1-3", title: "3. Implication Questions: 'If 5 patients a month choose another clinic on Google Maps, what does that cost in a year?'", time: "20m" },
                  { id: "l-spin-1-4", title: "4. Need-Payoff Questions: 'How much time would it save your reception if bookings arrived pre-qualified from the site?'", time: "20m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-never-split",
            type: "Negotiation Book",
            typeAr: "كتاب التفاوض التكتيكي",
            provider: "Chris Voss",
            title: "Never Split the Difference — Chris Voss",
            titleAr: "كتاب Never Split the Difference — كريس فوس (التفاوض الذكي)",
            url: "https://www.blackswanltd.com/never-split-the-difference",
            duration: "10 Chapters · FBI Negotiation Tactics",
            modules: [
              {
                id: "m-nsd-1",
                title: "Tactical Empathy & Calibrated Questions in Freelancing",
                titleAr: "التعاطف التكتيكي والأسئلة المعايرة لحماية السعر والنطاق",
                lessons: [
                  { id: "l-nsd-1-1", title: "Ch 1–3: Tactical Empathy, Mirroring, and Labeling ('It seems like you want certainty this will bring real bookings')", time: "25m" },
                  { id: "l-nsd-1-2", title: "Ch 4–5: Triggering 'That’s Right' (when the client feels 100% understood) & No-oriented questions", time: "20m" },
                  { id: "l-nsd-1-3", title: "Ch 6–8: Calibrated Questions ('How am I supposed to do that?' when asked for discounts or free scope creep)", time: "25m" },
                  { id: "l-nsd-1-4", title: "Ch 9–10: Bargaining, Anchoring, and spotting Black Swans", time: "20m" }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "ms-stage-6",
        number: "06",
        title: "6. Offers & Pricing",
        titleAr: "المرحلة 6: هندسة الباقات والتسعير المبني على القيمة",
        focus: "Packages, value-based pricing.",
        focusAr: "بناء الباقات الثلاث (Basic / Standard / Premium) والتسعير المبني على العائد التجاري.",
        accent: "blue",
        resources: [
          {
            id: "ms-r-offers-applied",
            type: "Applied Playbook",
            typeAr: "تطبيق هندسة الباقات",
            provider: "Alex Hormozi",
            title: "$100M Offers — Alex Hormozi (Applied Package Design)",
            titleAr: "تطبيق $100M Offers لبناء باقات AHKH Studio الثلاث",
            url: "https://www.acquisition.com/books",
            duration: "2 Applied Modules",
            modules: [
              {
                id: "m-ofa-1",
                title: "AHKH Studio Offer Stack & Upsell Architecture",
                titleAr: "هيكلة الباقات الثلاث والإضافات المستمرة (Add-ons)",
                lessons: [
                  { id: "l-ofa-1-1", title: "1.1 Designing the 3-Tier Proposal Sheet (Basic / Standard / Premium) with clear ROI framing", time: "25m" },
                  { id: "l-ofa-1-2", title: "1.2 Pitching the Monthly Care Plan & Local SEO Add-on for recurring monthly income", time: "25m" }
                ]
              }
            ]
          },
          {
            id: "ms-r-wwp-applied",
            type: "Applied Playbook",
            typeAr: "تطبيق التسعير والعقود",
            provider: "Blair Enns",
            title: "Win Without Pitching Manifesto — Blair Enns (Applied Pricing)",
            titleAr: "تطبيق Win Without Pitching في تقديم عروض الأسعار والعقود",
            url: "https://www.winwithoutpitching.com/",
            duration: "2 Applied Modules",
            modules: [
              {
                id: "m-wwpa-1",
                title: "Value Anchoring & Scope Firewall",
                titleAr: "تسعير القيمة وتطبيق اتفاقية العمل الصارمة",
                lessons: [
                  { id: "l-wwpa-1-1", title: "1.1 Anchoring price against the client's annual customer lifetime value (LTV)", time: "20m" },
                  { id: "l-wwpa-1-2", title: "1.2 1-Page Clear Agreement: 2 revision rounds, content upfront rule, and new quote for out-of-scope additions", time: "20m" }
                ]
              }
            ]
          }
        ]
      }
    ]
  },

  // ==========================================================================
  // AHKH STUDIO: SERVICES, PACKAGES & SCOPE PLAYBOOK
  // ==========================================================================
  studio: {
    title: "AHKH Studio: Services & Scope",
    titleAr: "دستور استوديو AHKH: الخدمات، الباقات، وحدود النطاق",
    rule: "Rule: one core service, add-ons sold separately, and a clear list of what I don’t do. Stay narrow, become the expert.",
    ruleAr: "القاعدة: خدمة أساسية واحدة، إضافات تُباع بشكل منفصل، وقائمة واضحة بما لا أفعله. ابقَ متخصصاً لتصبح الخبير الأول.",
    principle: "Principle: a request outside these limits gets a polite no or a referral. Review these limits every 6 months.",
    principleAr: "المبدأ الحازم: أي طلب خارج هذه الحدود يقابل باعتذار مهذب أو إحالة لشخص آخر. تُراجع هذه الحدود كل 6 أشهر.",
    coreService: {
      title: "Core Service: Fast Marketing Website for a Local Business",
      titleAr: "الخدمة الأساسية: موقع تسويقي سريع لنشاط تجاري محلي",
      pillars: [
        { id: "cs-1", label: "Custom Design + Clean Development", labelAr: "تصميم مخصص + تطوير نظيف وسريع" },
        { id: "cs-2", label: "Mobile-First Responsive Experience", labelAr: "مصمم للموبايل أولاً (Mobile-First)" },
        { id: "cs-3", label: "Direct WhatsApp Conversion Button", labelAr: "زر تواصل وحجز مباشر عبر واتساب" },
        { id: "cs-4", label: "Contact or Booking Form", labelAr: "نموذج تواصل أو حجز مواعيد" },
        { id: "cs-5", label: "Basic SEO (Speed, Titles, Google Map)", labelAr: "سيو أساسي (سرعة فائقة، عناوين، خريطة جوجل)" }
      ]
    },
    packages: [
      {
        id: "pkg-basic",
        tier: "Basic",
        tierAr: "الباقة الأساسية (Basic)",
        badge: "Entry Level",
        badgeAr: "للمحلات الصغيرة",
        summary: "One-page site for small shops",
        summaryAr: "موقع من صفحة واحدة (Landing Page) للمحلات والأنشطة الصغيرة",
        features: [
          "High-converting single-page layout",
          "Mobile-first responsive design",
          "Floating + inline WhatsApp CTA button",
          "Embedded Google Map & opening hours",
          "Fast static hosting setup (Lighthouse 90+)"
        ],
        featuresAr: [
          "صفحة هبوط واحدة عالية التحويل",
          "تصميم متجاوب بالكامل مع الموبايل",
          "زر واتساب مباشر للطلب أو الاستفسار",
          "خريطة جوجل ومواعيد العمل",
          "استضافة سريعة جداً بأداء Lighthouse 90+"
        ]
      },
      {
        id: "pkg-standard",
        tier: "Standard",
        tierAr: "الباقة القياسية (Standard)",
        badge: "Most Popular",
        badgeAr: "الأكثر طلباً للعيادات والمطاعم",
        featured: true,
        summary: "Full site + SEO",
        summaryAr: "موقع متكامل متعدد الصفحات/الأقسام + تهيئة محركات البحث (SEO)",
        features: [
          "Full multi-page or rich multi-section website",
          "Custom Figma UI tailored to the local brand",
          "Booking / Contact form via Formspree + WhatsApp",
          "On-Page SEO + LocalBusiness Schema + Search Console",
          "Google Business Profile integration"
        ],
        featuresAr: [
          "موقع كامل متعدد الصفحات أو الأقسام التفصيلية",
          "تصميم مخصص في Figma يعكس هوية النشاط",
          "نموذج حجز مواعيد + ربط مباشر بالواتساب",
          "تهيئة SEO كاملة + LocalBusiness Schema + أرشفة جوجل",
          "ربط وتكامل مع ملف Google Business Profile"
        ]
      },
      {
        id: "pkg-premium",
        tier: "Premium",
        tierAr: "الباقة الفاخرة (Premium)",
        badge: "Flagship Agency",
        badgeAr: "للبراندات الرائدة",
        summary: "Motion + content + AI",
        summaryAr: "حركات تفاعلية (GSAP Motion) + كتابة المحتوى التسويقي + أدوات الذكاء الاصطناعي",
        features: [
          "Everything in Standard + bespoke GSAP & ScrollTrigger motion",
          "Full StoryBrand copywriting written for the client",
          "GA4 conversion tracking setup (WhatsApp & Booking events)",
          "AI-assisted lead capture / smart auto-reply integration",
          "Priority turnaround & launch support"
        ],
        featuresAr: [
          "كل مميزات Standard + حركات GSAP & ScrollTrigger فاخرة",
          "كتابة المحتوى التسويقي بالكامل بنظام StoryBrand",
          "إعداد تتبع التحويلات على Google Analytics 4",
          "دمج الردود الذكية أو مساعد الحجز بالذكاء الاصطناعي",
          "أولوية قصوى في التنفيذ والدعم عند الإطلاق"
        ]
      }
    ],
    addons: [
      {
        id: "add-local-seo",
        name: "Local SEO",
        nameAr: "السيو المحلي المتقدم (Local SEO)",
        desc: "Google Business Profile, area pages, monthly follow-up",
        descAr: "إدارة وتطوير ملف Google Business، صفحات استهداف المناطق، ومتابعة شهرية",
        icon: "map-pin"
      },
      {
        id: "add-copywriting",
        name: "Copywriting",
        nameAr: "كتابة المحتوى الإقناعي (Copywriting)",
        desc: "I write the site content instead of the client sending it",
        descAr: "كتابة نصوص الموقع بالكامل بدلاً من انتظار العميل لإرسال المحتوى",
        icon: "pen-tool"
      },
      {
        id: "add-analytics",
        name: "Analytics",
        nameAr: "التحليلات والتقارير (Analytics)",
        desc: "GA4 setup + monthly report",
        descAr: "إعداد Google Analytics 4 لتتبع النقرات والحجوزات + تقرير أداء شهري",
        icon: "bar-chart-3"
      },
      {
        id: "add-care-plan",
        name: "Care Plan",
        nameAr: "باقة الرعاية والصيانة (Care Plan)",
        desc: "Hosting + small monthly edits",
        descAr: "إدارة الاستضافة والتحديثات + تعديلات شهرية بسيطة ومستمرة",
        icon: "shield-check"
      },
      {
        id: "add-extra-pages",
        name: "Extra Pages",
        nameAr: "صفحات إضافية أو صفحات حملات",
        desc: "More pages or a landing page for a campaign",
        descAr: "إضافة صفحات خدمات جديدة أو صفحة هبوط مخصصة لحملة إعلانية",
        icon: "layers"
      },
      {
        id: "add-later-ai",
        name: "Later: AI Booking Bot",
        nameAr: "لاحقاً: بوت حجز وردود تلقائية",
        desc: "Booking bot or auto-replies",
        descAr: "بوت ذكي للرد التلقائي وتأكيد الحجوزات على مدار الساعة",
        icon: "bot"
      }
    ],
    outOfScope: [
      {
        id: "oos-1",
        title: "Full online stores (E-commerce with carts, inventory, payment gateways)",
        titleAr: "المتاجر الإلكترونية الكاملة (سلة مشتريات، مخزون، بوابات دفع معقدة)"
      },
      {
        id: "oos-2",
        title: "Logins, dashboards, or complex backend systems",
        titleAr: "أنظمة تسجيل الدخول، لوحات التحكم المعقدة، أو الـ Backend الثقيل"
      },
      {
        id: "oos-3",
        title: "Mobile apps (iOS / Android)",
        titleAr: "تطبيقات الهواتف الذكية (iOS / Android)"
      },
      {
        id: "oos-4",
        title: "Social media management and paid ads management",
        titleAr: "إدارة حسابات السوشيال ميديا أو إدارة الحملات الإعلانية الممولة"
      },
      {
        id: "oos-5",
        title: "Full branding (logo and identity design from scratch)",
        titleAr: "بناء الهوية البصرية الكاملة والشعارات من الصفر"
      },
      {
        id: "oos-6",
        title: "Fixing old WordPress sites built by someone else",
        titleAr: "إصلاح أو ترقيع مواقع ووردبريس قديمة بناها شخص آخر"
      }
    ],
    workingRules: [
      {
        id: "wr-1",
        title: "Fixed number of revision rounds (e.g. 2); extra rounds are paid",
        titleAr: "عدد محدد وثابت من جولات التعديل (مثلاً جولتان فقط)؛ وأي جولة إضافية تكون مدفوعة"
      },
      {
        id: "wr-2",
        title: "Client sends content before work starts, or buys the Copywriting add-on",
        titleAr: "يرسل العميل المحتوى كاملاً قبل بدء العمل، أو يشتري إضافة كتابة المحتوى (Copywriting Add-on)"
      },
      {
        id: "wr-3",
        title: "Anything outside the agreement = a new quote",
        titleAr: "أي طلب إضافي خارج الاتفاق المكتوب = عرض سعر جديد ومستقل"
      }
    ]
  }
};
