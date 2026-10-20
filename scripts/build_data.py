# -*- coding: utf-8 -*-
"""
Generator script to compile the complete, literal, exhaustive roadmap dataset
into data/roadmap-data.js with clean UTF-8 encoding.
"""
import json
import os

roadmap_data = {
    "storageKey": "ahkh_roadmap_v2",
    "header": {
        "title": "Roadmap: Marketing Websites Freelancer",
        "subtitle": "One service: fast, premium marketing websites for local businesses — clinics, restaurants, gyms, shops — with local SEO, a WhatsApp button, and a booking form.",
        "currentFocus": "Phase 0 & 1: Web — everything else stays hidden until its turn.",
        "rule": "The rule: don't start a new course before publishing the previous phase's project.",
        "startDate": "2026-10-20"
    },
    "milestones": [
        {"id": "ms-1", "title": "First live site published (bookshop page)", "phase": "phase-0-1"},
        {"id": "ms-2", "title": "3 Figma homepages designed (clinic, restaurant, gym)", "phase": "phase-2"},
        {"id": "ms-3", "title": "3 live sites published with Lighthouse 90+", "phase": "phase-3"},
        {"id": "ms-4", "title": "Portfolio site live on my own domain", "phase": "phase-4"},
        {"id": "ms-5", "title": "First paying client onboarded (~Month 3)", "phase": "phase-5"},
        {"id": "ms-6", "title": "Professional freelance level reached (~Month 6)", "phase": "phase-6"}
    ],
    "principles": [
        {
            "title": "The Idea",
            "body": "Don't study web, design, and SEO in full — learn only the parts that serve this service. UX/UI lives inside design; AI is a tool in every phase."
        },
        {
            "title": "The Edge",
            "body": "Design quality + fast delivery + understanding the client + a site that gets results. Not just \"using AI\"."
        },
        {
            "title": "Long-Term Trajectory",
            "body": "Raise prices → delegate → start a studio. The same path leads toward Design Engineer."
        },
        {
            "title": "AI Along the Way",
            "list": [
                "Free tiers of Cursor or GitHub Copilot, only after I understand the code",
                "Content drafts, image generation, and copy revisions",
                "Later upsell: a booking bot or auto-replies for clients"
            ]
        },
        {
            "title": "Later (Post-Core Roadmap)",
            "body": "Not now, but after the core path: Advanced Python · Full backend · Machine Learning · React Native · Advanced SEO · Full corporate branding"
        }
    ],
    "stages": [
        {
            "id": "phase-0-1",
            "number": "01",
            "tag": "Web Craft",
            "title": "Phase 0 & 1: Web Foundations",
            "timing": "Weeks 1–6",
            "cadence": "~2–3 hours / day",
            "status": "In Progress",
            "atmosphere": "terminal",
            "colorAccent": "#10b981",
            "summary": "Master the absolute core of the modern web: semantic HTML5, modern responsive CSS layouts, and targeted vanilla JavaScript DOM interaction. Sticking to hand-written code with zero AI shortcuts until fundamentals are muscle memory.",
            "note": "Stuck? Elzero Web School or MDN Web Docs as a reference — not an excuse to abandon this course and restart.",
            "courses": [
                {
                    "id": "c-html-css",
                    "title": "Scrimba — Learn HTML and CSS",
                    "url": "https://scrimba.com/learn/htmlandcss",
                    "author": "Per Harald Borgen",
                    "description": "Interactive screencasts with hands-on coding challenges building real web components from scratch.",
                    "modules": [
                        {
                            "id": "m-hc-1",
                            "title": "Module 1: Build & Deploy Your First Website",
                            "duration": "16 lessons · ~76 min",
                            "lessons": [
                                {"id": "l-hc-1-1", "title": "Welcome to the HTML & CSS Course"},
                                {"id": "l-hc-1-2", "title": "HTML Tags: Headings (h1–h6) and Paragraphs (p)"},
                                {"id": "l-hc-1-3", "title": "Challenge: Write a News Article Structure"},
                                {"id": "l-hc-1-4", "title": "The Image Tag (img) and Alt Attributes"},
                                {"id": "l-hc-1-5", "title": "Nesting HTML Elements and Document Indentation"},
                                {"id": "l-hc-1-6", "title": "Internet Superpowers: Inspect and Change Live BBC News"},
                                {"id": "l-hc-1-7", "title": "Interactive Elements: Buttons and Click Affordances"},
                                {"id": "l-hc-1-8", "title": "Input Elements: Types, Placeholders, and Values"},
                                {"id": "l-hc-1-9", "title": "Challenge: Build Google's Search Input Form"},
                                {"id": "l-hc-1-10", "title": "Anchor Tags (a href) and Hyperlink Navigation"},
                                {"id": "l-hc-1-11", "title": "Adding Target Attributes and External Linking"},
                                {"id": "l-hc-1-12", "title": "Proper HTML5 Document Structure: Doctype, Head, Title, Body"},
                                {"id": "l-hc-1-13", "title": "Working with Lists: Unordered (ul) and Ordered (ol)"},
                                {"id": "l-hc-1-14", "title": "Solo Project: Build Your Personal Website"},
                                {"id": "l-hc-1-15", "title": "Deploying Your Website Live to Netlify via Drop"},
                                {"id": "l-hc-1-16", "title": "HTML Recap, Semantic Elements, and Core Mental Models"}
                            ]
                        },
                        {
                            "id": "m-hc-2",
                            "title": "Module 2: Build a Google.com Clone",
                            "duration": "12 lessons · ~82 min",
                            "lessons": [
                                {"id": "l-hc-2-1", "title": "Introduction to CSS: The Role of Stylesheets"},
                                {"id": "l-hc-2-2", "title": "Linking External Stylesheets via <link rel=\"stylesheet\">"},
                                {"id": "l-hc-2-3", "title": "CSS Selectors: Element, Class, and ID Selectors"},
                                {"id": "l-hc-2-4", "title": "The CSS Box Model: Margin, Border, Padding, and Content"},
                                {"id": "l-hc-2-5", "title": "Inline vs. Block Display Properties"},
                                {"id": "l-hc-2-6", "title": "Centering Block Elements with margin: 0 auto"},
                                {"id": "l-hc-2-7", "title": "Sizing Google's Search Bar and Pill Buttons"},
                                {"id": "l-hc-2-8", "title": "Sizing and Positioning the Google Logo"},
                                {"id": "l-hc-2-9", "title": "Chrome DevTools: Live CSS Inspection & Box Model Debugging"},
                                {"id": "l-hc-2-10", "title": "Footer Alignment and Subtle Shadows (box-shadow)"},
                                {"id": "l-hc-2-11", "title": "Challenge: Pixel-Perfect Google Clone Assembly"},
                                {"id": "l-hc-2-12", "title": "Deploying the Google Clone Live to Netlify"}
                            ]
                        },
                        {
                            "id": "m-hc-3",
                            "title": "Module 3: Build a Digital Business Card",
                            "duration": "14 lessons · ~72 min",
                            "lessons": [
                                {"id": "l-hc-3-1", "title": "Digital Business Card Project Intro & Wireframe Spec"},
                                {"id": "l-hc-3-2", "title": "Structuring the Card Container and Aspect Constraints"},
                                {"id": "l-hc-3-3", "title": "Image Styling: Avatar Radii, Borders, and Object Fit"},
                                {"id": "l-hc-3-4", "title": "Typography Hierarchy: Font-Family, Weight, Size, and Line-Height"},
                                {"id": "l-hc-3-5", "title": "Modern Color Systems: Hex, RGB, and Contrast Accessibility"},
                                {"id": "l-hc-3-6", "title": "Flexbox Fundamentals: display: flex and Flex Direction"},
                                {"id": "l-hc-3-7", "title": "Alignment Axes: justify-content (Main) and align-items (Cross)"},
                                {"id": "l-hc-3-8", "title": "Flexbox Spacing: Modern gap Property vs. Margin Hacks"},
                                {"id": "l-hc-3-9", "title": "Action Buttons: Email, LinkedIn, and WhatsApp CTA Styling"},
                                {"id": "l-hc-3-10", "title": "Micro-Interactions: :hover, :focus-visible, and :active States"},
                                {"id": "l-hc-3-11", "title": "Card Shadows, Elevation, and Subtle Border Highlights"},
                                {"id": "l-hc-3-12", "title": "Solo Project: Customize Your Personal Digital Business Card"},
                                {"id": "l-hc-3-13", "title": "Responsive Constraints: Max-Width and Mobile Viewport Centering"},
                                {"id": "l-hc-3-14", "title": "Final Netlify Deployment & Live Mobile Device Audit"}
                            ]
                        },
                        {
                            "id": "m-hc-4",
                            "title": "Module 4: Build a Space Exploration Site",
                            "duration": "14 lessons · ~44 min",
                            "lessons": [
                                {"id": "l-hc-4-1", "title": "Space Exploration Landing Page Walkthrough & Layout Goals"},
                                {"id": "l-hc-4-2", "title": "Background Images: background-size: cover & background-position"},
                                {"id": "l-hc-4-3", "title": "Contrast Techniques: Overlaying Text Legibly on Photography"},
                                {"id": "l-hc-4-4", "title": "Building the Navigation Bar with Flexbox and Space-Between"},
                                {"id": "l-hc-4-5", "title": "Flex Wrap: Handling Narrow Viewport Link Wrapping"},
                                {"id": "l-hc-4-6", "title": "Hero Section Typography & Eye-Catching Visual Hierarchy"},
                                {"id": "l-hc-4-7", "title": "Call-to-Action (CTA) Button Design and Pulse Hover States"},
                                {"id": "l-hc-4-8", "title": "Multi-Column Feature Cards Layout with Flexbox"},
                                {"id": "l-hc-4-9", "title": "Card Hover Effects: transform: translateY() and Transitions"},
                                {"id": "l-hc-4-10", "title": "Building the Mission Stat Counters (Metrics Grid Layout)"},
                                {"id": "l-hc-4-11", "title": "Footer Structure, Social Links, and Copyright Metadata"},
                                {"id": "l-hc-4-12", "title": "Relative vs. Absolute Units: rem, px, %, vh, and vw Demystified"},
                                {"id": "l-hc-4-13", "title": "Challenge: Assemble the Complete Space Exploration Page"},
                                {"id": "l-hc-4-14", "title": "Cross-Device Testing & Live Production Deployment"}
                            ]
                        },
                        {
                            "id": "m-hc-5",
                            "title": "Module 5: Build a Birthday GIFt Site",
                            "duration": "12 lessons · ~99 min",
                            "lessons": [
                                {"id": "l-hc-5-1", "title": "Birthday GIFt Project Overview & Delight Interaction Concept"},
                                {"id": "l-hc-5-2", "title": "Embedding Rich Media: Video, Animated GIFs, and Audio Tags"},
                                {"id": "l-hc-5-3", "title": "The CSS :hover Pseudo-class and Dynamic State Changes"},
                                {"id": "l-hc-5-4", "title": "Hidden Reveals: Expanding Elements and Cards on Hover"},
                                {"id": "l-hc-5-5", "title": "CSS Transitions: Duration, Timing Functions, and Delays"},
                                {"id": "l-hc-5-6", "title": "Keyframe Animations (@keyframes) for Subtle Delight Effects"},
                                {"id": "l-hc-5-7", "title": "CSS Transforms: rotate(), scale(), and translate()"},
                                {"id": "l-hc-5-8", "title": "Interactive 3D Gift Box Cover Opening Simulation"},
                                {"id": "l-hc-5-9", "title": "Organizing Stylesheet Architecture and CSS Custom Variables"},
                                {"id": "l-hc-5-10", "title": "Solo Project: Custom Gift Card Built for a Friend"},
                                {"id": "l-hc-5-11", "title": "Cross-Browser Testing: Safari, Firefox, and Chromium Parity"},
                                {"id": "l-hc-5-12", "title": "Final Netlify Deployment & Shareable Link Generation"}
                            ]
                        },
                        {
                            "id": "m-hc-6",
                            "title": "Module 6: Solo Capstone: Hometown Homepage",
                            "duration": "8 project milestones",
                            "lessons": [
                                {"id": "l-hc-6-1", "title": "Capstone Brief: Multi-Section Hometown Directory & Guide"},
                                {"id": "l-hc-6-2", "title": "Wireframing the Homepage Architecture & Information Hierarchy"},
                                {"id": "l-hc-6-3", "title": "Hero Section: Catchy Headline, Sub-copy, and Local Imagery"},
                                {"id": "l-hc-6-4", "title": "Places to Visit: 3-Card Responsive Grid Layout with Flexbox"},
                                {"id": "l-hc-6-5", "title": "Local Cuisine & Culture Feature Showcase with High Contrast"},
                                {"id": "l-hc-6-6", "title": "Contact / Visitor Inquiry Form Structure and Inputs"},
                                {"id": "l-hc-6-7", "title": "Code Quality Checklist: Valid HTML5, Organized CSS, Semantic Tags"},
                                {"id": "l-hc-6-8", "title": "Git & GitHub: Repository Setup, Commits, and Continuous Netlify Link"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-space-tourism",
                    "title": "Scrimba — Build a Multi-Page Website",
                    "url": "https://scrimba.com/learn/spacetravel",
                    "author": "Kevin Powell",
                    "description": "Production multi-page architecture from a real Figma design system. Teaches professional component organization, CSS variables, and fluid typography.",
                    "modules": [
                        {
                            "id": "m-st-1",
                            "title": "Module 1: Project Setup & Design System Tokens",
                            "duration": "10 lessons",
                            "lessons": [
                                {"id": "l-st-1-1", "title": "Course Introduction & Space Tourism Multi-Page Brief"},
                                {"id": "l-st-1-2", "title": "Figma File Inspection: Colors, Typography, and Spacing Tokens"},
                                {"id": "l-st-1-3", "title": "Design Tokens in CSS Custom Properties (:root Variables)"},
                                {"id": "l-st-1-4", "title": "Modern CSS Reset: box-sizing, Margin Zeroing, Media Defaults"},
                                {"id": "l-st-1-5", "title": "Typography Scale & Fluid Font Sizing with clamp()"},
                                {"id": "l-st-1-6", "title": "Utility Classes vs. Component Classes Architecture"},
                                {"id": "l-st-1-7", "title": "Global Layout Wrappers: Container, Flow Utility (* + *)"},
                                {"id": "l-st-1-8", "title": "Accessible Visually-Hidden Class (.sr-only) for Screen Readers"},
                                {"id": "l-st-1-9", "title": "Setting Up the Git Repository and Local Development Server"},
                                {"id": "l-st-1-10", "title": "Design Parity Audit: Comparing Code to Figma Mockup"}
                            ]
                        },
                        {
                            "id": "m-st-2",
                            "title": "Module 2: Navigation & Header Component",
                            "duration": "10 lessons",
                            "lessons": [
                                {"id": "l-st-2-1", "title": "Semantic Header & <nav> Markup Architecture"},
                                {"id": "l-st-2-2", "title": "Primary Navigation Bar Layout with Flexbox"},
                                {"id": "l-st-2-3", "title": "Glassmorphism Navigation Bar: backdrop-filter: blur()"},
                                {"id": "l-st-2-4", "title": "Navigation Underline Indicators with CSS Pseudo-elements (::after)"},
                                {"id": "l-st-2-5", "title": "Active and Hover States with Custom CSS Transitions"},
                                {"id": "l-st-2-6", "title": "Mobile Hamburger Button: Semantic Accessible Markup"},
                                {"id": "l-st-2-7", "title": "Responsive Breakpoints with Mobile-First Media Queries"},
                                {"id": "l-st-2-8", "title": "Vanilla JS Slide-in Drawer Toggle (data-visible Attribute)"},
                                {"id": "l-st-2-9", "title": "Keyboard Accessibility: Focus Trapping and Escape Key Handling"},
                                {"id": "l-st-2-10", "title": "Deploying Navigation Prototype & Cross-Device Testing"}
                            ]
                        },
                        {
                            "id": "m-st-3",
                            "title": "Module 3: Homepage Hero & Interactive Explore Button",
                            "duration": "8 lessons",
                            "lessons": [
                                {"id": "l-st-3-1", "title": "Two-Column Hero Grid on Desktop vs. Stacked Mobile Layout"},
                                {"id": "l-st-3-2", "title": "Editorial Lead Paragraph & Numbered Subtitle Typography"},
                                {"id": "l-st-3-3", "title": "The 'Explore' Button: Radial Pulsing Hover Ring with Pseudo-elements"},
                                {"id": "l-st-3-4", "title": "Transition Timing and Organic Easing Curve Optimization"},
                                {"id": "l-st-3-5", "title": "Responsive Background Images via <picture> and Media Queries"},
                                {"id": "l-st-3-6", "title": "Performance Audit: WebP Image Optimization & LCP Preloading"},
                                {"id": "l-st-3-7", "title": "Accessibility Audit: Lighthouse 100 on Homepage"},
                                {"id": "l-st-3-8", "title": "Milestone Review: Homepage Component Locked and Committed"}
                            ]
                        },
                        {
                            "id": "m-st-4",
                            "title": "Module 4: Destination Tabs Page",
                            "duration": "10 lessons",
                            "lessons": [
                                {"id": "l-st-4-1", "title": "Multi-Page Architecture: Directory Structure & Shared Asset Paths"},
                                {"id": "l-st-4-2", "title": "Numbered Page Heading Hierarchy (01 PICK YOUR DESTINATION)"},
                                {"id": "l-st-4-3", "title": "Tabbed Navigation Pattern: WAI-ARIA Accessible Tabs (role='tablist')"},
                                {"id": "l-st-4-4", "title": "Vanilla JS Tab Controller: Switching Moon, Mars, Europa, Titan"},
                                {"id": "l-st-4-5", "title": "Tab Switching Animation with CSS Opacity and Transform Fade"},
                                {"id": "l-st-4-6", "title": "Two-Column Grid: Planetary Visual vs. Tab Content Details"},
                                {"id": "l-st-4-7", "title": "Tabular Metric Numbers (Distance, Travel Time) Layout"},
                                {"id": "l-st-4-8", "title": "Keyboard Navigation for Tabs (Left/Right Arrow Key Traversal)"},
                                {"id": "l-st-4-9", "title": "Mobile Responsive Stacking for Tab Page Elements"},
                                {"id": "l-st-4-10", "title": "Destination Page Validation and Lighthouse Verification"}
                            ]
                        },
                        {
                            "id": "m-st-5",
                            "title": "Module 5: Crew & Technology Pages + Final Polish",
                            "duration": "12 lessons",
                            "lessons": [
                                {"id": "l-st-5-1", "title": "Crew Page Architecture: Slider and Dot Indicator Pattern"},
                                {"id": "l-st-5-2", "title": "ARIA Dots Navigation Markup & Keyboard Accessibility"},
                                {"id": "l-st-5-3", "title": "Commander, Specialist, Pilot, Engineer Biographies Layout"},
                                {"id": "l-st-5-4", "title": "Technology Page: Numbered Circle Steps Navigation (1, 2, 3)"},
                                {"id": "l-st-5-5", "title": "Landscape vs. Portrait Media Queries for Hardware Photography"},
                                {"id": "l-st-5-6", "title": "Page Transitions: Smooth Inter-Page Continuity and State"},
                                {"id": "l-st-5-7", "title": "Comprehensive CSS Audit: Removing Redundancies and Dead Code"},
                                {"id": "l-st-5-8", "title": "Cross-Browser Testing: Safari, Firefox, and Chromium Engines"},
                                {"id": "l-st-5-9", "title": "Full Keyboard Navigation & Screen Reader Flow Testing"},
                                {"id": "l-st-5-10", "title": "Final Netlify Deployment & Custom Domain Linking"},
                                {"id": "l-st-5-11", "title": "Lighthouse Audit: 100/100 Performance, A11y, Best Practices, SEO"},
                                {"id": "l-st-5-12", "title": "Project Retrospective & Kevin Powell Key Takeaways"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-conquering-responsive",
                    "title": "Kevin Powell — Conquering Responsive Layouts",
                    "url": "https://courses.kevinpowell.co/conquering-responsive-layouts",
                    "author": "Kevin Powell",
                    "description": "21-day immersive curriculum mastering fluid design, intrinsic layouts, and responsive CSS without media query overload.",
                    "modules": [
                        {
                            "id": "m-cr-all",
                            "title": "The Full 21 Days — Verbatim Curriculum",
                            "duration": "21 daily lessons & drills",
                            "lessons": [
                                {"id": "l-cr-1", "title": "Day 01: Why Responsive Web Design Matters (Embracing the Fluid Web)"},
                                {"id": "l-cr-2", "title": "Day 02: Stop Thinking in Pixels — The Power of % and Viewport Units"},
                                {"id": "l-cr-3", "title": "Day 03: Don't Fight the Browser (Default Flow Is Already Responsive)"},
                                {"id": "l-cr-4", "title": "Day 04: Max-Width Is Your Best Friend (max-width vs. width)"},
                                {"id": "l-cr-5", "title": "Day 05: Practical Exercise: Fluid Container and Column Stacking"},
                                {"id": "l-cr-6", "title": "Day 06: Relative Units Deep Dive: rem vs. em and When to Use Which"},
                                {"id": "l-cr-7", "title": "Day 07: Challenge: Build a Fully Responsive Hero Header Without Media Queries"},
                                {"id": "l-cr-8", "title": "Day 08: Introduction to Media Queries (Mobile-First Philosophy)"},
                                {"id": "l-cr-9", "title": "Day 09: Breakpoint Strategy: Break Content, Not Specific Devices"},
                                {"id": "l-cr-10", "title": "Day 10: Flexbox for Responsive Design — flex-wrap and Dynamic Wrapping"},
                                {"id": "l-cr-11", "title": "Day 11: flex-grow, flex-shrink, and flex-basis Demystified"},
                                {"id": "l-cr-12", "title": "Day 12: Building Responsive Navigation Bars that Collapse Gracefully"},
                                {"id": "l-cr-13", "title": "Day 13: CSS Grid Introduction — When to Use Grid vs. Flexbox"},
                                {"id": "l-cr-14", "title": "Day 14: Responsive CSS Grid Without Media Queries (minmax & repeat(auto-fit))"},
                                {"id": "l-cr-15", "title": "Day 15: Responsive Images: max-width: 100%, aspect-ratio, and object-fit"},
                                {"id": "l-cr-16", "title": "Day 16: Fluid Typography with clamp(min, preferred, max)"},
                                {"id": "l-cr-17", "title": "Day 17: Multi-Column Card Grids that Auto-Reflow Across All Screens"},
                                {"id": "l-cr-18", "title": "Day 18: Avoiding Common Responsive Pitfalls: Overflow Scrolling & Horizontal Bleed"},
                                {"id": "l-cr-19", "title": "Day 19: Debugging Responsive Layouts with Chrome & Firefox DevTools"},
                                {"id": "l-cr-20", "title": "Day 20: Full Capstone Walkthrough: Responsive Landing Page from Scratch"},
                                {"id": "l-cr-21", "title": "Day 21: Graduation & Production Checklist: Touch Targets, Safe Areas, and Viewport Meta"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-js-dom",
                    "title": "Scrimba — Learn JavaScript (DOM + Events Focus)",
                    "url": "https://scrimba.com/learn/learnjavascript",
                    "author": "Per Harald Borgen",
                    "description": "Targeted JavaScript instruction focused strictly on DOM selection, class manipulation, event listeners, form handling, and WhatsApp links. (No full computer science backend needed).",
                    "modules": [
                        {
                            "id": "m-js-1",
                            "title": "Module 1: The DOM Tree & Element Selection",
                            "duration": "8 lessons",
                            "lessons": [
                                {"id": "l-js-1-1", "title": "What is the DOM? (Document Object Model Architecture)"},
                                {"id": "l-js-1-2", "title": "Selecting Elements by ID via document.getElementById()"},
                                {"id": "l-js-1-3", "title": "Selecting with CSS Selectors: querySelector and querySelectorAll"},
                                {"id": "l-js-1-4", "title": "Traversing Nodes: parentElement, children, and nextElementSibling"},
                                {"id": "l-js-1-5", "title": "NodeList vs. HTMLCollection: Differences and Iteration"},
                                {"id": "l-js-1-6", "title": "Performance Best Practice: Caching DOM Query References"},
                                {"id": "l-js-1-7", "title": "Defensive Coding: Checking Element Existence Before Operations"},
                                {"id": "l-js-1-8", "title": "Module 1 Practice Challenges: Selector Mastery"}
                            ]
                        },
                        {
                            "id": "m-js-2",
                            "title": "Module 2: Reading & Modifying DOM Nodes",
                            "duration": "8 lessons",
                            "lessons": [
                                {"id": "l-js-2-1", "title": "Updating Content: textContent vs. innerText vs. innerHTML"},
                                {"id": "l-js-2-2", "title": "Preventing XSS: When Never to Inject Unsanitized innerHTML"},
                                {"id": "l-js-2-3", "title": "Reading & Setting Attributes: getAttribute, setAttribute, hasAttribute"},
                                {"id": "l-js-2-4", "title": "Working with CSS Classes: classList.add, remove, toggle, contains"},
                                {"id": "l-js-2-5", "title": "Inline Style Manipulation via the element.style Object"},
                                {"id": "l-js-2-6", "title": "Using HTML5 Data Attributes (dataset) for UI State Flags"},
                                {"id": "l-js-2-7", "title": "Creating and Appending Nodes: createElement, append, prepend, remove"},
                                {"id": "l-js-2-8", "title": "Module 2 Practice: Interactive Dynamic Tab Content Builder"}
                            ]
                        },
                        {
                            "id": "m-js-3",
                            "title": "Module 3: Event Listeners & User Interaction",
                            "duration": "10 lessons",
                            "lessons": [
                                {"id": "l-js-3-1", "title": "Introduction to addEventListener() and Handler Functions"},
                                {"id": "l-js-3-2", "title": "The Click Event: Toggle Buttons and Mobile Navigation Triggers"},
                                {"id": "l-js-3-3", "title": "The Event Object (e): target, currentTarget, and event.type"},
                                {"id": "l-js-3-4", "title": "Event Propagation: Bubbling, Capturing, and Event Delegation"},
                                {"id": "l-js-3-5", "title": "Keyboard Events: keydown, keyup, and Listening for Enter and Escape"},
                                {"id": "l-js-3-6", "title": "Form Submit Events and event.preventDefault()"},
                                {"id": "l-js-3-7", "title": "Input and Change Events for Real-Time Validation Feedback"},
                                {"id": "l-js-3-8", "title": "Scroll and Resize Events: Debouncing and Throttling Basics"},
                                {"id": "l-js-3-9", "title": "Pointer Events: pointerenter and pointerleave for Micro-interactions"},
                                {"id": "l-js-3-10", "title": "Module 3 Practice: Interactive FAQ Accordion Component"}
                            ]
                        },
                        {
                            "id": "m-js-4",
                            "title": "Module 4: Forms, Validation & WhatsApp Booking Bridge",
                            "duration": "8 lessons",
                            "lessons": [
                                {"id": "l-js-4-1", "title": "Capturing User Input with the Modern FormData API"},
                                {"id": "l-js-4-2", "title": "Client-Side Form Validation (Required Fields, Phone, Email)"},
                                {"id": "l-js-4-3", "title": "Displaying Inline Validation Errors and Error States Dynamically"},
                                {"id": "l-js-4-4", "title": "Disabling Submit Buttons to Prevent Duplicate Form Submissions"},
                                {"id": "l-js-4-5", "title": "Asynchronous Form Submission Simulation with fetch()"},
                                {"id": "l-js-4-6", "title": "Building Accessible Success Confirmation and Failure Messages"},
                                {"id": "l-js-4-7", "title": "Constructing WhatsApp Direct Click-to-Chat URLs with Pre-filled Text"},
                                {"id": "l-js-4-8", "title": "Module 4 Capstone: Functional Local Business Booking Bridge"}
                            ]
                        }
                    ]
                }
            ],
            "drills": [
                {
                    "id": "d-froggy",
                    "title": "Flexbox Froggy — All 24 Levels",
                    "url": "https://flexboxfroggy.com",
                    "items": [
                        {"id": "l-frog-1", "title": "Levels 01–08: justify-content (flex-start, flex-end, center, space-between, space-around)"},
                        {"id": "l-frog-2", "title": "Levels 09–13: align-items (flex-start, flex-end, center, baseline, stretch)"},
                        {"id": "l-frog-3", "title": "Levels 14–17: flex-direction & order (row-reverse, column, column-reverse)"},
                        {"id": "l-frog-4", "title": "Levels 18–21: align-self and Individual Item Overrides"},
                        {"id": "l-frog-5", "title": "Levels 22–24: flex-wrap, flex-flow, and align-content Master Challenges"}
                    ]
                },
                {
                    "id": "d-garden",
                    "title": "Grid Garden — All 28 Levels",
                    "url": "https://cssgridgarden.com",
                    "items": [
                        {"id": "l-gard-1", "title": "Levels 01–09: grid-column-start, grid-column-end, and Shorthand Syntax"},
                        {"id": "l-gard-2", "title": "Levels 10–13: grid-row-start, grid-row-end, and Row Spanning"},
                        {"id": "l-gard-3", "title": "Levels 14–19: grid-area and Reordering with order"},
                        {"id": "l-gard-4", "title": "Levels 20–25: grid-template-columns, grid-template-rows, and repeat()"},
                        {"id": "l-gard-5", "title": "Levels 26–28: Fractional Units (fr), Auto-fill, and Final Grid Layouts"}
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-0-1",
                "title": "Phase 0 & 1 Capstone: Hand-Written Bookshop Page",
                "subtitle": "Published live on Netlify · 100% hand-crafted · Zero AI generation",
                "steps": [
                    {"id": "p-step-1", "title": "Write semantic HTML5 structure: header, nav, hero, catalog grid, modal, WhatsApp inquiry, footer"},
                    {"id": "p-step-2", "title": "Author CSS stylesheet with custom properties, fluid clamp() typography, and mobile-first breakpoints"},
                    {"id": "p-step-3", "title": "Implement vanilla JS for mobile drawer navigation, filter tabs, and WhatsApp inquiry button"},
                    {"id": "p-step-4", "title": "Convert all book images to modern WebP with explicit width/height to eliminate layout shift (CLS: 0)"},
                    {"id": "p-step-5", "title": "Test layout on real mobile devices (iOS Safari & Android Chrome) for touch target compliance"},
                    {"id": "p-step-6", "title": "Publish live on Netlify with verified title, meta description, and social preview card"}
                ]
            }
        },
        {
            "id": "phase-2",
            "number": "02",
            "tag": "Design Craft",
            "title": "Phase 2: Design & UX/UI",
            "timing": "Weeks 4–10",
            "cadence": "Starts in parallel with Phase 1 at Week 4",
            "status": "Next Phase",
            "atmosphere": "canvas",
            "colorAccent": "#6366f1",
            "summary": "Learn to design like a professional designer without relying on guesswork. Study visual hierarchy, spacing systems, accessible color palettes, and production Figma workflows so that every site looks boutique and premium.",
            "note": "A developer who understands spacing and typography earns 3x-5x more than one who just cuts code.",
            "courses": [
                {
                    "id": "c-refactoring-ui",
                    "title": "Refactoring UI (Book)",
                    "author": "Adam Wathan & Steve Schoger",
                    "description": "The definitive tactical manual for developers designing interfaces. Zero fluff, 100% practical visual decisions.",
                    "modules": [
                        {
                            "id": "m-rf-1",
                            "title": "Chapter 1: Starting from Scratch",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-1-1", "title": "Think in features, not layouts — design the core problem first"},
                                {"id": "l-rf-1-2", "title": "Don't design too much upfront; iterate with high fidelity incrementally"},
                                {"id": "l-rf-1-3", "title": "Establish an inventory of content before choosing component shapes"},
                                {"id": "l-rf-1-4", "title": "Start with too much whitespace; eliminate clutter aggressively"},
                                {"id": "l-rf-1-5", "title": "Save the fine details (icons, illustrations, shadows) for the end"}
                            ]
                        },
                        {
                            "id": "m-rf-2",
                            "title": "Chapter 2: Hierarchy is Everything",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-2-1", "title": "Not all elements are equal: establishing the primary focus point"},
                                {"id": "l-rf-2-2", "title": "Size isn't everything: use font weight and subtle color contrast to rank text"},
                                {"id": "l-rf-2-3", "title": "Don't use grey text on colored backgrounds (use tinted variants)"},
                                {"id": "l-rf-2-4", "title": "Emphasize by de-emphasizing surrounding secondary items"},
                                {"id": "l-rf-2-5", "title": "Labels are a last resort: format data so its context is self-evident"}
                            ]
                        },
                        {
                            "id": "m-rf-3",
                            "title": "Chapter 3: Layout and Spacing",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-3-1", "title": "Start with too much whitespace and work backwards to tighten"},
                                {"id": "l-rf-3-2", "title": "Establish a strict spacing system based on a fixed 8pt/16pt scale"},
                                {"id": "l-rf-3-3", "title": "Use relative spacing: related elements sit closer than unrelated ones"},
                                {"id": "l-rf-3-4", "title": "Avoid ambiguous spacing where elements float unattached"},
                                {"id": "l-rf-3-5", "title": "Overlapping elements deliberately to create visual depth and layers"}
                            ]
                        },
                        {
                            "id": "m-rf-4",
                            "title": "Chapter 4: Designing Text",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-4-1", "title": "Establish a modular type scale (12, 14, 16, 18, 20, 24, 30, 36, 48px)"},
                                {"id": "l-rf-4-2", "title": "Keep line length strictly under control (45 to 75 characters per line)"},
                                {"id": "l-rf-4-3", "title": "Baseline grids: line-height should decrease proportionally as font size increases"},
                                {"id": "l-rf-4-4", "title": "Letter-spacing rules: tighter tracking for large headlines, wider for all-caps"},
                                {"id": "l-rf-4-5", "title": "Choose good workhorse fonts and avoid decorative gimmicks"}
                            ]
                        },
                        {
                            "id": "m-rf-5",
                            "title": "Chapter 5: Working with Color",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-5-1", "title": "Ditch hex codes for HSL when generating shades and tints"},
                                {"id": "l-rf-5-2", "title": "Greys don't have to be grey: warm stone, slate, or cool blue neutrals"},
                                {"id": "l-rf-5-3", "title": "Accessible contrast: ensuring readable text against every background"},
                                {"id": "l-rf-5-4", "title": "Use accent color with extreme discipline: reserved for primary CTAs"},
                                {"id": "l-rf-5-5", "title": "Secondary functional colors: success emerald, error red, warning amber"}
                            ]
                        },
                        {
                            "id": "m-rf-6",
                            "title": "Chapter 6: Depth and Polish",
                            "duration": "Core Principles",
                            "lessons": [
                                {"id": "l-rf-6-1", "title": "Elevating cards with multi-layered, soft, realistic box-shadows"},
                                {"id": "l-rf-6-2", "title": "Colored shadows that pick up the tone of the surface underneath"},
                                {"id": "l-rf-6-3", "title": "Flat design doesn't mean boring: border highlights and inner borders"},
                                {"id": "l-rf-6-4", "title": "Subtle border accents that catch light on top edges of containers"},
                                {"id": "l-rf-6-5", "title": "Background textures, subtle dot grids, and noise that ground interfaces"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-practical-ui",
                    "title": "Practical UI (Book)",
                    "author": "Adham Dannaway",
                    "description": "Logic-driven UI design system guidelines covering layout, component design, forms, and accessibility.",
                    "modules": [
                        {
                            "id": "m-pui-1",
                            "title": "The 8 Core UI System Guidelines",
                            "duration": "8 comprehensive guidelines",
                            "lessons": [
                                {"id": "l-pui-1", "title": "Guideline 1: Visual Hierarchy & Eye Scanning Patterns (F-Pattern & Z-Pattern)"},
                                {"id": "l-pui-2", "title": "Guideline 2: Spacing & The 8pt / 4pt Layout Grid Rhythm"},
                                {"id": "l-pui-3", "title": "Guideline 3: Accessible Typography Scale & Contrast Ratios (WCAG AA/AAA)"},
                                {"id": "l-pui-4", "title": "Guideline 4: Color Distribution (The 60-30-10 Rule & State Palettes)"},
                                {"id": "l-pui-5", "title": "Guideline 5: High-Converting Form Design (Single-Column, Top-Aligned Labels)"},
                                {"id": "l-pui-6", "title": "Guideline 6: Button Architecture & Interactive States (Default, Hover, Active, Disabled)"},
                                {"id": "l-pui-7", "title": "Guideline 7: Mobile-First Navigation & Thumb Zone Ergonomics"},
                                {"id": "l-pui-8", "title": "Guideline 8: Consistent Iconography & Optical Visual Weight Balance"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-figma-beginners",
                    "title": "Figma Design for Beginners",
                    "url": "https://help.figma.com",
                    "author": "Figma Official",
                    "description": "Mastering the industry standard vector interface tool with a focus on Auto Layout and developer handoff.",
                    "modules": [
                        {
                            "id": "m-fig-1",
                            "title": "Figma Professional Fundamentals",
                            "duration": "6 hands-on modules",
                            "lessons": [
                                {"id": "l-fig-1", "title": "Module 1: Figma Canvas Navigation, Frames, and Layers Hierarchy"},
                                {"id": "l-fig-2", "title": "Module 2: Auto Layout Deep Dive (Direction, Padding, Gap, Hug vs. Fill vs. Fixed)"},
                                {"id": "l-fig-3", "title": "Module 3: Components, Variants, and Component Properties"},
                                {"id": "l-fig-4", "title": "Module 4: Design Tokens: Local Color, Typography, and Effect Styles"},
                                {"id": "l-fig-5", "title": "Module 5: Prototyping: Smart Animate, Interactive Overlays, and Mobile Preview"},
                                {"id": "l-fig-6", "title": "Module 6: Developer Handoff: Inspect Panel, CSS Properties, and Asset Exporting"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-laws-of-ux",
                    "title": "Laws of UX",
                    "url": "https://lawsofux.com",
                    "author": "Jon Yablonski",
                    "description": "Core psychological heuristics that explain how users perceive and interact with digital interfaces.",
                    "modules": [
                        {
                            "id": "m-lux-1",
                            "title": "The 12 Core UX Laws for Marketing Sites",
                            "duration": "12 psychological heuristics",
                            "lessons": [
                                {"id": "l-lux-1", "title": "01. Fitts's Law: Touch Target Size & Screen Edge Proximity"},
                                {"id": "l-lux-2", "title": "02. Hick's Law: Minimizing Choices to Accelerate Decision & Conversion"},
                                {"id": "l-lux-3", "title": "03. Jakob's Law: Users Expect Your Site to Work Like Familiar Sites"},
                                {"id": "l-lux-4", "title": "04. Miller's Law: Information Chunking in Digestible Sets of 7±2 Items"},
                                {"id": "l-lux-5", "title": "05. Law of Proximity: Objects Near Each Other Are Perceived as Related"},
                                {"id": "l-lux-6", "title": "06. Law of Common Region: Enclosed Boundaries Group Related Content"},
                                {"id": "l-lux-7", "title": "07. Serial Position Effect: Users Remember the First and Last Items Best"},
                                {"id": "l-lux-8", "title": "08. Aesthetic-Usability Effect: Polished Design Creates Perceived Ease of Use"},
                                {"id": "l-lux-9", "title": "09. Von Restorff Effect: Visual Contrast Commands Immediate Attention"},
                                {"id": "l-lux-10", "title": "10. Doherty Threshold: Response Times Under 400ms Keep Users Engaged"},
                                {"id": "l-lux-11", "title": "11. Zeigarnik Effect: Uncompleted Tasks Create Cognitive Drive to Complete"},
                                {"id": "l-lux-12", "title": "12. Occam's Razor: The Simplest Solution with Fewest Assumptions Wins"}
                            ]
                        }
                    ]
                }
            ],
            "drills": [
                {
                    "id": "d-daily-design",
                    "title": "Daily Design Drill (20 Minutes Every Day)",
                    "url": "https://godly.website",
                    "items": [
                        {"id": "l-drill-1", "title": "Select 1 standout hero section from godly.website or land-book.com"},
                        {"id": "l-drill-2", "title": "Recreate the layout pixel-for-pixel in Figma using Auto Layout and real typography"},
                        {"id": "l-drill-3", "title": "Code the exact section in semantic HTML and CSS to bridge design to browser"}
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-2",
                "title": "Phase 2 Project: 3 Figma Homepages for Real Local Businesses",
                "subtitle": "High-fidelity production designs ready for client presentation",
                "steps": [
                    {"id": "p-fig-1", "title": "Design Homepage 1: Dental / Medical Clinic (Trustworthy, clean, doctors, WhatsApp booking CTA)"},
                    {"id": "p-fig-2", "title": "Design Homepage 2: Premium Restaurant / Specialty Cafe (Appetizing visual showcase, menu preview, reservation CTA)"},
                    {"id": "p-fig-3", "title": "Design Homepage 3: Fitness Gym / CrossFit Studio (High energy, class schedule, membership tiers, WhatsApp free pass CTA)"},
                    {"id": "p-fig-4", "title": "Ensure all 3 files use structured Auto Layout, complete typography styles, and responsive mobile artboards"}
                ]
            }
        },
        {
            "id": "phase-3",
            "number": "03",
            "tag": "Pro Stack",
            "title": "Phase 3: Pro Website Stack",
            "timing": "Weeks 8–14",
            "cadence": "Full stack production build",
            "status": "Upcoming",
            "atmosphere": "engine",
            "colorAccent": "#f59e0b",
            "summary": "Graduate to a production-grade developer workflow. Use Astro for sub-second static page loads with zero unnecessary JavaScript, Tailwind CSS for velocity, and GSAP ScrollTrigger for buttery 60fps micro-animations.",
            "note": "Speed is a core feature. A site loading in 0.8s converts 2x better than one taking 3.5s.",
            "courses": [
                {
                    "id": "c-astro",
                    "title": "Astro Official Tutorial & Documentation",
                    "url": "https://docs.astro.build",
                    "author": "Astro Core Team",
                    "description": "The web framework built for content-driven websites. Zero client-side JS overhead by default.",
                    "modules": [
                        {
                            "id": "m-as-1",
                            "title": "Astro Architecture & Build Pipeline",
                            "duration": "10 production modules",
                            "lessons": [
                                {"id": "l-as-1", "title": "01. Why Astro? (Zero-JS Islands Architecture vs. Heavy SPA Frameworks)"},
                                {"id": "l-as-2", "title": "02. Scaffolding a Clean Astro Project (npm create astro@latest)"},
                                {"id": "l-as-3", "title": "03. Project Structure: src/pages, src/components, src/layouts, public/"},
                                {"id": "l-as-4", "title": "04. Astro Component Syntax (.astro Frontmatter Script + HTML Template)"},
                                {"id": "l-as-5", "title": "05. Layouts and Slots (<slot /> Pattern for Reusable Global Wrappers)"},
                                {"id": "l-as-6", "title": "06. Static Site Generation (SSG) & Production Build Output"},
                                {"id": "l-as-7", "title": "07. Content Collections for Structured Data with Strict Zod Schema Validation"},
                                {"id": "l-as-8", "title": "08. Image Optimization with astro:assets <Image /> (Auto WebP/AVIF and CLS Prevention)"},
                                {"id": "l-as-9", "title": "09. Head SEO & OpenGraph Social Sharing Metadata Components"},
                                {"id": "l-as-10", "title": "10. Automated Production Deployment to Vercel and Netlify via Git Hooks"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-tailwind",
                    "title": "Tailwind CSS Production Mastery",
                    "url": "https://tailwindcss.com/docs",
                    "author": "Tailwind Labs",
                    "description": "Modern utility-first CSS for unprecedented development velocity and strict design consistency.",
                    "modules": [
                        {
                            "id": "m-tw-1",
                            "title": "Tailwind Workflow for Client Marketing Sites",
                            "duration": "8 core topics",
                            "lessons": [
                                {"id": "l-tw-1", "title": "01. Utility-First Philosophy: Composing Complex Layouts Without Context Switching"},
                                {"id": "l-tw-2", "title": "02. Configuring Custom Brand Tokens: Colors, Font Families, Spacing Scales"},
                                {"id": "l-tw-3", "title": "03. Mobile-First Responsive Breakpoints (sm, md, lg, xl)"},
                                {"id": "l-tw-4", "title": "04. Interactive State Modifiers (hover, focus-visible, active, disabled, group-hover)"},
                                {"id": "l-tw-5", "title": "05. Modern Flexbox and CSS Grid Composition Utilities"},
                                {"id": "l-tw-6", "title": "06. Fluid Typography & Dynamic Values with Arbitrary Value Syntax"},
                                {"id": "l-tw-7", "title": "07. Typography Plugin (@tailwindcss/typography) for Long-Form Articles & Case Studies"},
                                {"id": "l-tw-8", "title": "08. Production CSS Purging: Delivering Sub-15KB Minified Stylesheets"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-gsap",
                    "title": "GSAP + ScrollTrigger",
                    "url": "https://gsap.com",
                    "author": "GreenSock",
                    "description": "Buttery 60fps animations and scroll-driven interactions that make marketing sites feel alive.",
                    "modules": [
                        {
                            "id": "m-gs-1",
                            "title": "GSAP Core & ScrollTrigger Integration",
                            "duration": "8 lessons",
                            "lessons": [
                                {"id": "l-gs-1", "title": "01. GSAP Core Architecture: gsap.to(), gsap.from(), and gsap.fromTo()"},
                                {"id": "l-gs-2", "title": "02. Orchestrating Sequences with gsap.timeline()"},
                                {"id": "l-gs-3", "title": "03. Choosing Easing Curves: power2, back.out, and Custom Bézier Curves"},
                                {"id": "l-gs-4", "title": "04. ScrollTrigger Basics: trigger, start, end, markers, and toggleActions"},
                                {"id": "l-gs-5", "title": "05. Scrubbed Animations: Binding Tween Progress Directly to Scroll Position"},
                                {"id": "l-gs-6", "title": "06. Section Pinning: Creating Fixed Showcase Panels While Background Scrolls"},
                                {"id": "l-gs-7", "title": "07. Staggered Card & Text Reveals for Cinematic Section Entrances"},
                                {"id": "l-gs-8", "title": "08. 60fps Performance Guardrails: will-change, GPU Acceleration, Avoiding Reflows"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-infrastructure",
                    "title": "Deployment, Forms & Infrastructure Stack",
                    "author": "Production Setup",
                    "description": "Zero-maintenance, cost-effective hosting and form handling infrastructure for client handoffs.",
                    "modules": [
                        {
                            "id": "m-inf-1",
                            "title": "Client Production Architecture",
                            "duration": "4 essential setup guides",
                            "lessons": [
                                {"id": "l-inf-1", "title": "01. Netlify / Vercel Setup: Continuous Deployment from GitHub with Instant Rollbacks"},
                                {"id": "l-inf-2", "title": "02. Formspree / Web3Forms Setup: Contact Submissions Direct to Client Email & WhatsApp"},
                                {"id": "l-inf-3", "title": "03. Domain Management: Namecheap DNS Setup (A Records, CNAME, Free Auto-SSL)"},
                                {"id": "l-inf-4", "title": "04. Client Billing Separation: Client Purchases Domain & Hosting on Their Own Card"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-advanced-css",
                    "title": "Advanced CSS Mastery",
                    "author": "Josh W. Comeau & Kevin Powell",
                    "description": "Deep understanding of the browser rendering engine, stacking contexts, and container queries.",
                    "modules": [
                        {
                            "id": "m-ac-1",
                            "title": "Modern Layout Engineering",
                            "duration": "4 deep-dive topics",
                            "lessons": [
                                {"id": "l-ac-1", "title": "01. Josh W. Comeau: The Stacking Context and z-index Mental Models"},
                                {"id": "l-ac-2", "title": "02. Modern Container Queries (@container) for Truly Modular Responsive Components"},
                                {"id": "l-ac-3", "title": "03. CSS Subgrid: Aligning Nested Grid Children Across Sibling Containers"},
                                {"id": "l-ac-4", "title": "04. Advanced Fluid Typography and Spacing with CSS Math Functions"}
                            ]
                        }
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-3",
                "title": "Phase 3 Project: Turn the 3 Figma Designs into Live Astro Sites",
                "subtitle": "All 3 live websites scoring 90+ across all Lighthouse categories",
                "steps": [
                    {"id": "p-stk-1", "title": "Build Site 1 (Clinic) in Astro + Tailwind: Sub-second load, interactive booking form, verified SEO schema"},
                    {"id": "p-stk-2", "title": "Build Site 2 (Restaurant) in Astro + Tailwind: Menu showcase, WebP image pipeline, WhatsApp order CTA"},
                    {"id": "p-stk-3", "title": "Build Site 3 (Gym) in Astro + Tailwind + GSAP: Membership tier switcher, entrance animations, trial pass form"},
                    {"id": "p-stk-4", "title": "Run Google Lighthouse on all 3 sites and guarantee 90+ on Performance, Accessibility, Best Practices, and SEO"}
                ]
            }
        },
        {
            "id": "phase-4",
            "number": "04",
            "tag": "Sells Craft",
            "title": "Phase 4: A Site That Sells",
            "timing": "Weeks 10–14",
            "cadence": "Persuasion, Copy & Local Search",
            "status": "Upcoming",
            "atmosphere": "editorial",
            "colorAccent": "#e11d48",
            "summary": "A pretty website that doesn't bring in paying customers is useless to a local business owner. Learn the psychology of high-converting copywriting (StoryBrand) and complete local SEO so your clients actually get phone calls and WhatsApp inquiries.",
            "note": "When you explain to a clinic owner how your copy gets more patients through the door, price resistance disappears.",
            "courses": [
                {
                    "id": "c-storybrand",
                    "title": "Building a StoryBrand (Book)",
                    "author": "Donald Miller",
                    "description": "Clarify your message so customers will listen. The 7-part framework that turns website visitors into buyers.",
                    "modules": [
                        {
                            "id": "m-sb-1",
                            "title": "The SB7 Framework for Local Websites",
                            "duration": "8 core chapters",
                            "lessons": [
                                {"id": "l-sb-1", "title": "01. Principle 1: The Customer is the Hero of the Story, Not Your Brand"},
                                {"id": "l-sb-2", "title": "02. Principle 2: Customers Buy Solutions to Internal Problems (Frustration, Doubt)"},
                                {"id": "l-sb-3", "title": "03. Principle 3: Customers Are Looking for a Guide with Empathy and Proven Authority"},
                                {"id": "l-sb-4", "title": "04. Principle 4: The Guide Gives Them a Simple 3-Step Plan to Remove Confusion"},
                                {"id": "l-sb-5", "title": "05. Principle 5: Clear Calls to Action (Direct CTA 'Book Now' vs. Transitional CTA)"},
                                {"id": "l-sb-6", "title": "06. Principle 6: The Stakes — What Concrete Failure Are You Helping Them Avoid?"},
                                {"id": "l-sb-7", "title": "07. Principle 7: The Transformation — How Does Life Look After Working with Them?"},
                                {"id": "l-sb-8", "title": "08. The High-Converting One-Page Wireframe: Layout of the 7 StoryBrand Sections"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-google-seo",
                    "title": "Google SEO Starter Guide",
                    "url": "https://developers.google.com/search/docs/fundamentals/seo-starter-guide",
                    "author": "Google Search Central",
                    "description": "Official best practices directly from Google engineers on how to make your sites discoverable and rankable.",
                    "modules": [
                        {
                            "id": "m-gseo-1",
                            "title": "Search Engine Fundamentals & Technical Crawlability",
                            "duration": "7 essential topics",
                            "lessons": [
                                {"id": "l-gseo-1", "title": "01. How Google Search Works: Crawling, Indexing, and Search Intent Serving"},
                                {"id": "l-gseo-2", "title": "02. Title Tags (<title>) & Meta Descriptions: Click-Through Rate Optimization"},
                                {"id": "l-gseo-3", "title": "03. Semantic Heading Hierarchy (h1 to h6) for Topic Authority"},
                                {"id": "l-gseo-4", "title": "04. Image SEO: Descriptive Filenames, Alt Attributes, and Modern Formats"},
                                {"id": "l-gseo-5", "title": "05. Clean URL Architecture & Descriptive Slugs"},
                                {"id": "l-gseo-6", "title": "06. Core Web Vitals (LCP, INP, CLS) as Direct Ranking Signals"},
                                {"id": "l-gseo-7", "title": "07. XML Sitemap Generation and robots.txt Crawler Directives"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-moz-seo",
                    "title": "Moz Beginner's Guide to SEO",
                    "url": "https://moz.com/beginners-guide-to-seo",
                    "author": "Moz Editorial",
                    "description": "Comprehensive industry introduction to keyword research, search intent, and authority building.",
                    "modules": [
                        {
                            "id": "m-moz-1",
                            "title": "Search Intent & Local Visibility",
                            "duration": "5 core chapters",
                            "lessons": [
                                {"id": "l-moz-1", "title": "01. Keyword Research: Discovering High-Intent Local Search Queries"},
                                {"id": "l-moz-2", "title": "02. On-Page Semantic Keyword Integration Without Keyword Stuffing"},
                                {"id": "l-moz-3", "title": "03. Technical Foundation: Fast Page Speed, HTTPS Security, Clean HTML"},
                                {"id": "l-moz-4", "title": "04. Local Search Authority: Building Citations and Inbound Reviews"},
                                {"id": "l-moz-5", "title": "05. Setting Up Google Search Console to Track Real Search Impressions and Clicks"}
                            ]
                        }
                    ]
                }
            ],
            "drills": [
                {
                    "id": "d-local-seo-checklist",
                    "title": "The Mandatory Local SEO Checklist (Applied to Every Single Client Site)",
                    "items": [
                        {"id": "l-lseo-1", "title": "Google Business Profile: Setup / Claim, NAP Consistency (Name, Address, Phone), Categories, Hours"},
                        {"id": "l-lseo-2", "title": "Schema.org LocalBusiness JSON-LD: Structured data embedded in HTML <head>"},
                        {"id": "l-lseo-3", "title": "WhatsApp Floating CTA Button: Direct click-to-chat with pre-filled message"},
                        {"id": "l-lseo-4", "title": "Interactive Google Map Embed: Exact verified business location pin"},
                        {"id": "l-lseo-5", "title": "Local Geo-Keywords in H1, Meta Title, and Service Areas Copy (e.g. 'Clinic in 10th of Ramadan')"},
                        {"id": "l-lseo-6", "title": "Mobile Speed Optimization: Sub-1.2 second first contentful paint on 4G connections"}
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-4",
                "title": "Phase 4 Project: Launch Portfolio on Your Own Custom Domain",
                "subtitle": "Your agency storefront demonstrating design taste, speed, and real case studies",
                "steps": [
                    {"id": "p-port-1", "title": "Purchase your custom brand domain (e.g. ahkh.studio or your own personal domain)"},
                    {"id": "p-port-2", "title": "Write portfolio copy using the StoryBrand framework: Positioning your service for local business growth"},
                    {"id": "p-port-3", "title": "Showcase the 3 live client sites with case study breakdowns, Lighthouse 90+ badges, and live demo links"},
                    {"id": "p-port-4", "title": "Add WhatsApp direct chat button and contact form for inbound client inquiries"}
                ]
            }
        },
        {
            "id": "phase-5",
            "number": "05",
            "tag": "Selling Craft",
            "title": "Phase 5: Selling & Landing Clients",
            "timing": "From Week 12",
            "cadence": "Direct Client Acquisition",
            "status": "Upcoming",
            "atmosphere": "executive",
            "colorAccent": "#d97706",
            "summary": "Turn technical skills into a sustainable freelance business. Stop competing on freelance bidding platforms for \$20 scraps. Package high-value offers, visit local businesses in person with tailored prototypes, and close deals with confidence.",
            "note": "Don't send cold emails to strangers. Walk into local shops in your area with a finished design of their site on your tablet. It changes the entire conversation.",
            "courses": [
                {
                    "id": "c-100m-offers",
                    "title": "$100M Offers (Book)",
                    "author": "Alex Hormozi",
                    "description": "How to make offers so good people feel stupid saying no. Mastering value equations, pricing, and risk reversal.",
                    "modules": [
                        {
                            "id": "m-hz-1",
                            "title": "Grand Slam Offers for Web Freelancers",
                            "duration": "6 core modules",
                            "lessons": [
                                {"id": "l-hz-1", "title": "01. The Value Equation: (Dream Outcome × Perceived Likelihood) / (Time Delay × Effort & Sacrifice)"},
                                {"id": "l-hz-2", "title": "02. Grand Slam Offers: Crafting High-Value Propositions that Stand Apart from Cheap Competitors"},
                                {"id": "l-hz-3", "title": "03. Niche Selection: Identifying High-Pain, High-Purchasing-Power Local Sectors (Clinics, Gyms, High-End Dining)"},
                                {"id": "l-hz-4", "title": "04. Pricing Strategy: Why Low Prices Hurt Client Results, and Shifting from Cost-Plus to Value-Based"},
                                {"id": "l-hz-5", "title": "05. Offer Stacking: Sweetening the Deal with Guarantees (Risk Reversal), Bonuses, and Setup Services"},
                                {"id": "l-hz-6", "title": "06. Naming Your Offer: The M-A-G-I-C Formula (Magnetic Reason, Announce Avatar, Goal, Interval, Container)"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-win-without-pitching",
                    "title": "The Win Without Pitching Manifesto (Book)",
                    "author": "Blair Enns",
                    "description": "The agency advisory playbook. How creative professionals stop begging for work and position as trusted authorities.",
                    "modules": [
                        {
                            "id": "m-wwp-1",
                            "title": "The 12 Proclamations Applied to Freelancing",
                            "duration": "8 selected proclamations",
                            "lessons": [
                                {"id": "l-wwp-1", "title": "01. Proclamation 1: We Will Specialize (The Immense Power of Narrow Positioning as a Specialist)"},
                                {"id": "l-wwp-2", "title": "02. Proclamation 2: We Will Say No to Free Pitching and Speculative Work"},
                                {"id": "l-wwp-3", "title": "03. Proclamation 3: We Will Diagnose Before We Prescribe (The Expert Consultation Framework)"},
                                {"id": "l-wwp-4", "title": "04. Proclamation 4: We Will Treat Talking About Money as Normal, Healthy, and Professional"},
                                {"id": "l-wwp-5", "title": "05. Proclamation 5: We Will Address Issues of Money Early in the Conversation"},
                                {"id": "l-wwp-6", "title": "06. Proclamation 6: We Will Charge for Our Strategic Thinking, Not Just Pixel Pushing"},
                                {"id": "l-wwp-7", "title": "07. Proclamation 7: We Will Never Put the Client in Charge of Our Production Process"},
                                {"id": "l-wwp-8", "title": "08. Proclamation 8: We Will Close with Conviction and Walk Away from Mismatched Clients"}
                            ]
                        }
                    ]
                }
            ],
            "drills": [
                {
                    "id": "d-first-clients",
                    "title": "First 3 Clients Acquisition Strategy (In-Person Field Playbook)",
                    "items": [
                        {"id": "l-cl-1", "title": "Target Area Selection: Focus on commercial districts in 10th of Ramadan or Zagazig"},
                        {"id": "l-cl-2", "title": "Pre-Approach Prep: Pick an active local clinic or restaurant; design a tailored 1-page prototype in Figma/Astro"},
                        {"id": "l-cl-3", "title": "The In-Person Visit: Walk in respectfully, ask for the owner/manager, and open the live prototype on your tablet"},
                        {"id": "l-cl-4", "title": "The Contrast Pitch: Show their current non-existent or broken mobile presence vs. the lightning-fast demo with WhatsApp booking"},
                        {"id": "l-cl-5", "title": "The No-Brainer Offer: Steep introductory price in exchange for a recorded video testimonial + detailed case study"},
                        {"id": "l-cl-6", "title": "Lightning 5-Day Delivery: Deliver the site in 5 days flat, set up their Google Business Profile, and secure the referral"}
                    ]
                },
                {
                    "id": "d-packages",
                    "title": "Service Packages & Pricing Architecture",
                    "items": [
                        {"id": "l-pkg-1", "title": "Basic Tier: One-Page High-Speed Marketing Site for Small Retail Shops (Hero, Products/Services, WhatsApp CTA, Google Map)"},
                        {"id": "l-pkg-2", "title": "Standard Tier: Full Multi-Section Site + Local SEO + Google Business Profile Setup + Formspree Booking (Most Popular)"},
                        {"id": "l-pkg-3", "title": "Premium Tier: High-End Motion & Micro-Interactions + StoryBrand Copywriting + Custom Photography Curation + WhatsApp CRM Flow"}
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-5",
                "title": "Phase 5 Milestone: Onboard 3 Paying Clients and Publish Case Studies",
                "subtitle": "Real commercial validation with cash in hand and public client proof",
                "steps": [
                    {"id": "p-deal-1", "title": "Sign Client 1 from local in-person outreach (10th of Ramadan / Zagazig)"},
                    {"id": "p-deal-2", "title": "Sign Client 2 through word-of-mouth referral or targeted clinic outreach"},
                    {"id": "p-deal-3", "title": "Sign Client 3 at full standard pricing"},
                    {"id": "p-deal-4", "title": "Collect 3 glowing video/written testimonials and publish deep case studies on your agency domain"}
                ]
            }
        },
        {
            "id": "phase-6",
            "number": "06",
            "tag": "Advanced Architecture",
            "title": "After Month 6: Advanced & Scale",
            "timing": "Month 6+",
            "cadence": "Systems Architecture & International Work",
            "status": "Locked",
            "atmosphere": "systems",
            "colorAccent": "#06b6d4",
            "summary": "When clients require authenticated portals, customer dashboards, dynamic booking calendars, or headless content management, this is where you expand into React and Next.js. This begins the journey toward high-earning Design Engineer and international client contracts.",
            "note": "Only touch React and Next.js AFTER you have completed the core path and landed real paying marketing clients.",
            "courses": [
                {
                    "id": "c-react",
                    "title": "Scrimba — Learn React (Free)",
                    "url": "https://scrimba.com/learn/learnreact",
                    "author": "Bob Ziroll",
                    "description": "Interactive mental models of component-driven user interfaces, state management, and props.",
                    "modules": [
                        {
                            "id": "m-re-1",
                            "title": "React Architecture & Dynamic State",
                            "duration": "10 core lessons",
                            "lessons": [
                                {"id": "l-re-1", "title": "01. The React Mental Model: Declarative UI vs. Imperative DOM Manipulation"},
                                {"id": "l-re-2", "title": "02. JSX Syntax and Rules of Component Architecture"},
                                {"id": "l-re-3", "title": "03. Props: Passing Data into Reusable Child Components"},
                                {"id": "l-re-4", "title": "04. State Management with the useState Hook"},
                                {"id": "l-re-5", "title": "05. Handling User Events and Form Inputs in React"},
                                {"id": "l-re-6", "title": "06. Conditional Rendering and Ternary Operators in UI"},
                                {"id": "l-re-7", "title": "07. Rendering Lists and Keys with JavaScript Array.map()"},
                                {"id": "l-re-8", "title": "08. Controlled Form Components and State Synchronization"},
                                {"id": "l-re-9", "title": "09. Side Effects & External Data Fetching with useEffect"},
                                {"id": "l-re-10", "title": "10. Building a Reusable Client Booking Portal Component"}
                            ]
                        }
                    ]
                },
                {
                    "id": "c-nextjs",
                    "title": "Next.js Official Learn",
                    "url": "https://nextjs.org/learn",
                    "author": "Vercel",
                    "description": "The industry-standard full-stack framework for React. Server components, routing, and database mutations.",
                    "modules": [
                        {
                            "id": "m-nxt-1",
                            "title": "Next.js App Router Architecture",
                            "duration": "8 production modules",
                            "lessons": [
                                {"id": "l-nxt-1", "title": "01. The Next.js App Router & File-System Based Routing Hierarchy"},
                                {"id": "l-nxt-2", "title": "02. React Server Components (RSC) vs. Client Components ('use client')"},
                                {"id": "l-nxt-3", "title": "03. Layouts, Nested Pages, and Reusable Templates"},
                                {"id": "l-nxt-4", "title": "04. Optimizing Fonts (next/font), Images (next/image), and Metadata"},
                                {"id": "l-nxt-5", "title": "05. Server-Side Data Fetching and Streaming UI with React Suspense"},
                                {"id": "l-nxt-6", "title": "06. Server Actions: Type-Safe Mutations Without Separate REST Endpoints"},
                                {"id": "l-nxt-7", "title": "07. Authentication Patterns & Protected Client Dashboard Routes"},
                                {"id": "l-nxt-8", "title": "08. Headless CMS Integration (Sanity / Strapi) for Client Self-Editing"}
                            ]
                        }
                    ]
                }
            ],
            "project": {
                "id": "proj-phase-6",
                "title": "After Month 6 Project: Bespoke Client Portal with Next.js",
                "subtitle": "The bridge from marketing sites to enterprise freelance contracts",
                "steps": [
                    {"id": "p-adv-1", "title": "Build a client dashboard with Next.js App Router and Server Actions"},
                    {"id": "p-adv-2", "title": "Connect a Headless CMS so client staff can edit blog posts, menu items, or clinic doctor bios without touching code"},
                    {"id": "p-adv-3", "title": "Deploy to Vercel with automated preview branch environments and edge caching"}
                ]
            }
        }
    ],
    "marketingTrack": {
        "id": "track-marketing",
        "tag": "Companion Track",
        "title": "Track: Marketing & Sales",
        "timing": "Runs alongside Design & Stack",
        "status": "Active Companion",
        "atmosphere": "growth",
        "colorAccent": "#14b8a6",
        "rationale": "Marketing websites only sell if I understand marketing and sales as deeply as code and design. This is a full professional track, not casual tips.",
        "cadence": "Starts after HTML/CSS is solid, then runs continuously alongside Design.",
        "method": "The Unit System: Read a chapter, close the book, write the core concept from memory in your own words, then apply it immediately to a real client site.",
        "stages": [
            {
                "id": "mkt-stage-1",
                "number": "01",
                "title": "1. Marketing Basics",
                "focus": "Target customer, positioning, funnel stages, and distribution channels.",
                "items": [
                    {"id": "l-mkt-1-1", "title": "HubSpot Academy: Inbound Marketing Certification (Free online course)"},
                    {"id": "l-mkt-1-2", "title": "This Is Marketing — Seth Godin (Smallest viable market, tension, status, and trust)"},
                    {"id": "l-mkt-1-3", "title": "Obviously Awesome — April Dunford (The 10-step market positioning framework)"}
                ]
            },
            {
                "id": "mkt-stage-2",
                "number": "02",
                "title": "2. Messaging & Copy",
                "focus": "How a webpage persuades a visitor to pick up the phone or click WhatsApp.",
                "items": [
                    {"id": "l-mkt-2-1", "title": "Building a StoryBrand — Donald Miller (The 7-part narrative messaging framework)"},
                    {"id": "l-mkt-2-2", "title": "Copyhackers — Joanna Wiebe (Free articles on value propositions, high-converting headlines, and CTA copy)"}
                ]
            },
            {
                "id": "mkt-stage-3",
                "number": "03",
                "title": "3. SEO & Local SEO",
                "focus": "Organic search visibility and dominating Google Maps for local commercial queries.",
                "items": [
                    {"id": "l-mkt-3-1", "title": "Moz Beginner's Guide to SEO (Search engine algorithms, crawling, and search intent)"},
                    {"id": "l-mkt-3-2", "title": "Google Search Central Official Documentation (Indexing guidelines, Core Web Vitals)"},
                    {"id": "l-mkt-3-3", "title": "Google Business Profile Masterclass (Categories, review velocity, local citations, geo-relevance)"}
                ]
            },
            {
                "id": "mkt-stage-4",
                "number": "04",
                "title": "4. Conversion & Analytics",
                "focus": "Call-to-actions, conversion rate optimization (CRO), A/B testing, and Google Analytics 4.",
                "items": [
                    {"id": "l-mkt-4-1", "title": "Google Skillshop: GA4 Certification (Free training on data streams, custom events, and conversion funnels)"},
                    {"id": "l-mkt-4-2", "title": "Don't Make Me Think — Steve Krug (Web usability, intuitive scanning, and eliminating question marks)"}
                ]
            },
            {
                "id": "mkt-stage-5",
                "number": "05",
                "title": "5. Sales & Negotiation",
                "focus": "Lead generation, discovery calls, diagnosing pain, overcoming objections, and closing.",
                "items": [
                    {"id": "l-mkt-5-1", "title": "HubSpot Academy: Inbound Sales Certification (Free sales methodology course)"},
                    {"id": "l-mkt-5-2", "title": "SPIN Selling — Neil Rackham (Situation, Problem, Implication, and Need-Payoff questioning)"},
                    {"id": "l-mkt-5-3", "title": "Never Split the Difference — Chris Voss (Tactical empathy, calibrated questions, and mirroring)"}
                ]
            },
            {
                "id": "mkt-stage-6",
                "number": "06",
                "title": "6. Offers & Pricing",
                "focus": "Packaging deliverables, risk reversal, and value-based advisory pricing.",
                "items": [
                    {"id": "l-mkt-6-1", "title": "$100M Offers — Alex Hormozi (Value equations, grand slam offers, bonuses, and guarantees)"},
                    {"id": "l-mkt-6-2", "title": "The Win Without Pitching Manifesto — Blair Enns (Advisory mindset, eliminating free pitches, commanding premium fees)"}
                ]
            }
        ]
    },
    "studioPlaybook": {
        "id": "track-studio",
        "tag": "Studio Governance",
        "title": "AHKH Studio: Services & Scope",
        "status": "Standing Operating Rules",
        "atmosphere": "monochrome",
        "colorAccent": "#cbd5e1",
        "corePrinciple": "One core service, add-ons sold separately, and a strict public list of what I do not do. Stay narrow, become the recognized expert.",
        "coreService": {
            "title": "The Core Service Offering",
            "tagline": "A fast, premium marketing website for a local business",
            "features": [
                "Bespoke UI/UX design + clean hand-crafted code (Astro / HTML5)",
                "Mobile-first responsive architecture",
                "High-converting floating WhatsApp button",
                "Contact or booking submission form (Formspree / Web3Forms)",
                "Fundamental Local SEO (Sub-1s speed, meta titles, Google Map embed)"
            ]
        },
        "outOfScope": {
            "title": "Strictly Out of Scope (What I Do NOT Do)",
            "rule": "A request outside these limits gets a polite no or a referral to an external specialist. Review these limits every 6 months.",
            "items": [
                "Full e-commerce online stores (Shopify / WooCommerce carts)",
                "Client user logins, complex dashboards, or relational backend databases",
                "Native mobile applications (iOS / Android)",
                "Social media management and paid advertising campaigns (Meta Ads / Google Ads)",
                "Full corporate branding from scratch (Logos, mascot design, brand guidelines)",
                "Fixing, debugging, or maintaining legacy WordPress sites built by someone else"
            ]
        },
        "operatingRules": {
            "title": "Working Rules & Contract Guardrails",
            "items": [
                {"id": "rule-1", "title": "Fixed revision rounds: Exactly 2 revision rounds included; any additional revisions are billed at an hourly rate"},
                {"id": "rule-2", "title": "Content upfront: Client provides high-resolution photography and copy before work starts, or purchases the Copywriting add-on"},
                {"id": "rule-3", "title": "Scope creep defense: Any request outside the signed written agreement requires a separate written quote"}
            ]
        },
        "packagesTable": [
            {"tier": "Basic", "details": "High-speed one-page marketing site for small retail shops, doctors, or neighborhood cafes."},
            {"tier": "Standard", "details": "Full multi-section website + Local SEO setup + Google Business Profile optimization (Most Popular)."},
            {"tier": "Premium", "details": "Custom GSAP motion + StoryBrand conversion copywriting + WhatsApp CRM bridge + analytics reporting."}
        ],
        "addonsTable": [
            {"addon": "Local SEO Optimization", "details": "Google Business Profile setup, structured schema.org data, area landing pages, and monthly search checks."},
            {"addon": "StoryBrand Copywriting", "details": "I interview the business owner and write all website copy from scratch instead of waiting for client drafts."},
            {"addon": "GA4 Analytics Setup", "details": "Google Analytics 4 setup, conversion event tracking (clicks on phone/WhatsApp), and simple monthly executive summary."},
            {"addon": "Care Plan / Retainer", "details": "Fast managed hosting, regular uptime monitoring, SSL renewals, and 1 hour of small monthly content updates."},
            {"addon": "Extra Landing Pages", "details": "Dedicated campaign landing page for seasonal promotions, events, or specific high-margin services."},
            {"addon": "Later Upsell: AI Booking Bot", "details": "WhatsApp automated auto-responder bot or calendar appointment booking bridge."}
        ]
    }
}

output_path = os.path.join(os.path.dirname(__file__), "..", "data", "roadmap-data.js")
with open(output_path, "w", encoding="utf-8") as f:
    f.write("/**\n")
    f.write(" * Roadmap: Marketing Websites Freelancer — Single Source of Truth\n")
    f.write(" * Exhaustive, literal, screencast-by-screencast curriculum and studio operating system.\n")
    f.write(" * Generated with clean UTF-8 encoding. All items have stable IDs persisted in localStorage.\n")
    f.write(" */\n\n")
    f.write("window.ROADMAP_DATA = ")
    json.dump(roadmap_data, f, ensure_ascii=False, indent=2)
    f.write(";\n")

print(f"Successfully generated {output_path} with {len(roadmap_data['stages'])} stages and full literal curriculum!")
