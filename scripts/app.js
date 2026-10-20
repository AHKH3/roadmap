/**
 * Roadmap: Marketing Websites Freelancer — Continuous Landscape World Engine
 * Real Continuous Landscape Progression · Multi-Paradigm Design Systems Per Stage
 * Zero AI Slop · Local-First Persistence · 100% Literal Exhaustive Curricula
 */

(function () {
  'use strict';

  const DATA = window.ROADMAP_DATA;
  if (!DATA) {
    console.error('ROADMAP_DATA not found. Ensure data/roadmap-data.js is loaded.');
    return;
  }

  // Combine stages + specialized tracks into a continuous 8-zone sequence
  const ALL_ZONES = [
    ...DATA.stages,
    ...DATA.tracks
  ];

  // --- STATE ---
  const state = {
    completed: new Set(),
    milestonesCompleted: new Set(),
    filter: 'all', // 'all' | 'incomplete' | 'completed'
    searchQuery: '',
    searchMatches: [],
    searchMatchIndex: 0,
    overviewMode: false,
    milestonesOpen: false,
    theme: 'dark'
  };

  // --- STORAGE ---
  function loadState() {
    try {
      const raw = localStorage.getItem(DATA.storageKey);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed.completed)) {
          state.completed = new Set(parsed.completed);
        }
      }
      const rawMs = localStorage.getItem('ahkh_milestones');
      if (rawMs) {
        state.milestonesCompleted = new Set(JSON.parse(rawMs));
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
      localStorage.setItem(DATA.storageKey, JSON.stringify(payload));
      localStorage.setItem('ahkh_milestones', JSON.stringify(Array.from(state.milestonesCompleted)));
      localStorage.setItem('ahkh_theme', state.theme);
    } catch (e) {
      console.warn('Failed to save roadmap state:', e);
    }
  }

  // --- DOM REFERENCES ---
  const dom = {
    html: document.documentElement,
    body: document.body,
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

  // --- DATA HELPERS ---
  function getAllLessons() {
    const list = [];
    ALL_ZONES.forEach((zone) => {
      (zone.courses || []).forEach((course) => {
        (course.modules || []).forEach((mod) => {
          (mod.lessons || []).forEach((lesson) => {
            list.push({ ...lesson, zoneId: zone.id, courseId: course.id, moduleId: mod.id });
          });
        });
      });
    });
    return list;
  }

  const ALL_LESSONS = getAllLessons();
  const TOTAL_LESSONS = ALL_LESSONS.length;

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

  // --- CHECKBOX SVG ICONS PER ZONE ---
  function getZoneCheckboxContent(zoneId, isChecked) {
    switch (zoneId) {
      case 'phase-0-1':
        // Monospace terminal bracket toggle
        return isChecked ? '✓' : '';
      case 'phase-2':
        // Vector anchor node
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1"></rect></svg>`
          : `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" width="10" height="10" aria-hidden="true"><rect x="3" y="3" width="10" height="10" rx="1"></rect></svg>`;
      case 'phase-3':
        // Compiler reactive check
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" width="11" height="11" aria-hidden="true"><path d="M3 8.5L6.5 12L13 4"></path></svg>`
          : '';
      case 'phase-4':
        // Kinetic diamond node
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="10" height="10" aria-hidden="true"><polygon points="8,1 15,8 8,15 1,8"></polygon></svg>`
          : '';
      case 'phase-5':
        // Haute editorial seal check
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" width="10" height="10" aria-hidden="true"><path d="M3.5 8L6.5 11.5L12.5 4.5"></path></svg>`
          : '';
      case 'phase-6':
        // Telemetry vault rocker switch
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="currentColor" width="8" height="8" aria-hidden="true"><circle cx="8" cy="8" r="5"></circle></svg>`
          : '';
      case 'marketing-sales':
        // Bank treasury stamp
        return isChecked
          ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5" width="10" height="10" aria-hidden="true"><path d="M3 8L7 12L13 3"></path></svg>`
          : '';
      case 'studio-playbook':
      default:
        // Executive cyan pin
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

      // Calculate total lessons in this zone
      let zoneLessons = [];
      (zone.courses || []).forEach((c) => {
        (c.modules || []).forEach((m) => {
          zoneLessons.push(...(m.lessons || []));
        });
      });
      const zoneTotal = zoneLessons.length;

      // Render Zone Landmark Monument
      const landmarkEl = document.createElement('div');
      landmarkEl.className = 'zone-landmark';
      landmarkEl.innerHTML = `
        <div class="landmark-top">
          <div class="landmark-header-tag">
            <span>${zone.number ? `Phase ${zone.number}` : 'Track'}</span>
            <span aria-hidden="true">&middot;</span>
            <span>${zone.duration || 'Specialized Track'}</span>
          </div>
          <h2 class="landmark-title">${zone.name}</h2>
          <p class="landmark-objective">${zone.objective}</p>
          ${
            zone.capstone
              ? `
            <div class="landmark-capstone-card">
              <span class="capstone-tag">Capstone Deliverable</span>
              <p class="capstone-text">${zone.capstone}</p>
            </div>
          `
              : ''
          }
        </div>
        <div class="landmark-bottom">
          <div class="landmark-stat-row">
            <span class="landmark-stat-label">Progress</span>
            <span class="landmark-stat-readout" id="zone-stat-${zone.id}">0 / ${zoneTotal} (0%)</span>
          </div>
          <div class="landmark-progress-track">
            <div class="landmark-progress-fill" id="zone-fill-${zone.id}"></div>
          </div>
        </div>
      `;
      zoneEl.appendChild(landmarkEl);

      // Render Courses & Modules Stream
      const coursesStreamEl = document.createElement('div');
      coursesStreamEl.className = 'zone-courses-stream';

      (zone.courses || []).forEach((course) => {
        const clusterEl = document.createElement('div');
        clusterEl.className = 'course-cluster';

        (course.modules || []).forEach((mod) => {
          const modStationEl = document.createElement('div');
          modStationEl.className = 'module-station';
          modStationEl.id = `station-${mod.id}`;

          const modLessons = mod.lessons || [];
          const modTotal = modLessons.length;

          // Station Header
          const headerEl = document.createElement('div');
          headerEl.className = 'module-station-header';
          headerEl.innerHTML = `
            <div class="module-station-course-meta">
              <span>${course.title}</span>
              <span>${modTotal} screencasts</span>
            </div>
            <h3 class="module-station-title">${mod.title}</h3>
            <div class="module-station-progress-row">
              <span class="module-stat-readout" id="mod-stat-${mod.id}">0 / ${modTotal}</span>
              <span class="module-stat-pct" id="mod-pct-${mod.id}">0%</span>
            </div>
          `;
          modStationEl.appendChild(headerEl);

          // Station Lessons Scroll
          const lessonsScrollEl = document.createElement('div');
          lessonsScrollEl.className = 'module-lessons-scroll';

          modLessons.forEach((lesson) => {
            const isCompleted = state.completed.has(lesson.id);
            const cardEl = document.createElement('div');
            cardEl.className = `lesson-card ${isCompleted ? 'is-completed' : ''}`;
            cardEl.dataset.lessonId = lesson.id;
            cardEl.dataset.zoneId = zone.id;

            cardEl.innerHTML = `
              <button
                type="button"
                class="checkbox-btn ${isCompleted ? 'is-checked' : ''}"
                data-id="${lesson.id}"
                aria-label="Mark ${lesson.title} completed"
              >
                ${getZoneCheckboxContent(zone.id, isCompleted)}
              </button>
              <div class="lesson-content">
                <span class="lesson-title">${lesson.title}</span>
                <div class="lesson-meta-chips">
                  ${lesson.screencast ? `<span class="meta-chip notes-chip">#${lesson.screencast}</span>` : ''}
                  ${lesson.drill ? `<span class="meta-chip drill-chip">Drill: ${lesson.drill}</span>` : ''}
                  ${lesson.deliverable ? `<span class="meta-chip deliverable-chip">${lesson.deliverable}</span>` : ''}
                  ${lesson.notes ? `<span class="meta-chip notes-chip">${lesson.notes}</span>` : ''}
                </div>
              </div>
            `;

            // Click listener for toggling completion
            cardEl.addEventListener('click', (e) => {
              toggleLessonCompleted(lesson.id);
            });

            lessonsScrollEl.appendChild(cardEl);
          });

          modStationEl.appendChild(lessonsScrollEl);
          clusterEl.appendChild(modStationEl);
        });

        coursesStreamEl.appendChild(clusterEl);
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
              <span class="gate-dest-name">&rarr; ${nextZone.number ? `Phase 0${nextZone.number}` : nextZone.code || 'Track'}</span>
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
      <p class="apex-desc">All 394 lessons, drills, and deliverables mastered. A single high-demand offer delivered with zero technical compromises and sovereign agency operating procedures.</p>
      <button type="button" class="origin-start-btn" id="btn-journey-rewind">&larr; Return to Foundry</button>
    `;
    dom.worldStrip.appendChild(apexEl);

    // Setup origin & apex buttons
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
      slotEl.title = `${zone.name} (Click to jump)`;

      const code = zone.number ? `PH 0${zone.number}` : (zone.code || `TRK ${idx + 1}`);

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

    const stripWidth = dom.worldStrip.scrollWidth || 12000;
    const stripHeight = dom.worldViewport.clientHeight || 700;
    const centerY = Math.floor(stripHeight * 0.48);

    // Generate a sleek horizontal conduit path across the entire world strip
    const d = `M 160 ${centerY} L ${stripWidth - 160} ${centerY}`;
    dom.worldSpineBase.setAttribute('d', d);
    dom.worldSpineActive.setAttribute('d', d);

    const totalLen = stripWidth - 320;
    dom.worldSpineActive.style.strokeDasharray = `${totalLen}`;

    const completedRatio = TOTAL_LESSONS > 0 ? state.completed.size / TOTAL_LESSONS : 0;
    const activeLength = totalLen * completedRatio;
    dom.worldSpineActive.style.strokeDashoffset = `${totalLen - activeLength}`;
  }

  // --- TOGGLE LESSON COMPLETION ---
  function toggleLessonCompleted(lessonId) {
    if (state.completed.has(lessonId)) {
      state.completed.delete(lessonId);
    } else {
      state.completed.add(lessonId);
    }
    saveState();
    updateUI();
  }

  // --- UPDATE UI STATS & VISUALS ---
  function updateUI() {
    const completedCount = state.completed.size;
    const pct = TOTAL_LESSONS > 0 ? Math.round((completedCount / TOTAL_LESSONS) * 100) : 0;
    const scale = completedCount / TOTAL_LESSONS;

    // 1. Top Progress Line
    if (dom.topProgressFill) {
      dom.topProgressFill.style.transform = `scaleX(${scale})`;
    }

    // 2. Global Metric Pill
    if (dom.globalStatReadout) {
      dom.globalStatReadout.innerHTML = `<strong>${completedCount}</strong> / ${TOTAL_LESSONS}`;
    }
    if (dom.globalStatPercent) {
      dom.globalStatPercent.textContent = `(${pct}%)`;
    }

    // 3. Filter Counts
    if (dom.countFilterAll) dom.countFilterAll.textContent = `(${TOTAL_LESSONS})`;
    if (dom.countFilterIncomplete) dom.countFilterIncomplete.textContent = `(${TOTAL_LESSONS - completedCount})`;
    if (dom.countFilterCompleted) dom.countFilterCompleted.textContent = `(${completedCount})`;

    // 4. Update each Zone & Module
    ALL_ZONES.forEach((zone) => {
      let zoneCompleted = 0;
      let zoneTotal = 0;

      (zone.courses || []).forEach((course) => {
        (course.modules || []).forEach((mod) => {
          let modCompleted = 0;
          const modTotal = (mod.lessons || []).length;
          zoneTotal += modTotal;

          (mod.lessons || []).forEach((lesson) => {
            const isCompleted = state.completed.has(lesson.id);
            if (isCompleted) {
              zoneCompleted++;
              modCompleted++;
            }

            // Update individual lesson card DOM if present
            const cardEl = document.querySelector(`.lesson-card[data-lesson-id="${lesson.id}"]`);
            if (cardEl) {
              if (isCompleted) {
                cardEl.classList.add('is-completed');
              } else {
                cardEl.classList.remove('is-completed');
              }
              const btn = cardEl.querySelector('.checkbox-btn');
              if (btn) {
                if (isCompleted) {
                  btn.classList.add('is-checked');
                } else {
                  btn.classList.remove('is-checked');
                }
                btn.innerHTML = getZoneCheckboxContent(zone.id, isCompleted);
              }
            }
          });

          // Update module station stat
          const modPct = modTotal > 0 ? Math.round((modCompleted / modTotal) * 100) : 0;
          const modStatEl = document.getElementById(`mod-stat-${mod.id}`);
          const modPctEl = document.getElementById(`mod-pct-${mod.id}`);
          if (modStatEl) modStatEl.textContent = `${modCompleted} / ${modTotal}`;
          if (modPctEl) modPctEl.textContent = `${modPct}%`;
        });
      });

      // Update zone landmark stat
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

    // 7. Update Milestones Drawer Counter
    const msCompletedCount = state.milestonesCompleted.size;
    const msTotal = (DATA.milestones || []).length;
    if (dom.drawerMilestonesCount) {
      dom.drawerMilestonesCount.textContent = `${msCompletedCount} / ${msTotal} Completed`;
    }
    if (dom.headerMilestonesBadge) {
      dom.headerMilestonesBadge.textContent = `(${msCompletedCount}/${msTotal})`;
    }
  }

  // --- FILTER SYSTEM ---
  function applyFilter() {
    const cards = document.querySelectorAll('.lesson-card');
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
    const cards = document.querySelectorAll('.lesson-card');
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

    // Viewport width ratio
    const viewportRatio = Math.max(0.08, Math.min(1, clientWidth / scrollWidth));
    const lensWidthPct = viewportRatio * 100;
    const lensLeftPct = scrollRatio * (100 - lensWidthPct);

    dom.minimapLens.style.width = `${lensWidthPct}%`;
    dom.minimapLens.style.transform = `translateX(${(lensLeftPct / lensWidthPct) * 100}%)`;
  }

  // Jump to specific zone
  function scrollToZone(zoneId) {
    const zoneEl = document.getElementById(`zone-${zoneId}`);
    if (zoneEl) {
      zoneEl.scrollIntoView({ behavior: 'smooth', inline: 'start' });
    }
  }

  // Step to prev/next zone
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
        const isCompleted = state.milestonesCompleted.has(ms.id);
        const cardEl = document.createElement('div');
        cardEl.className = 'milestone-drawer-card';
        cardEl.innerHTML = `
          <button type="button" class="drawer-checkbox-btn ${isCompleted ? 'checked' : ''}" data-ms-id="${ms.id}">
            ${
              isCompleted
                ? `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 8L6.5 11.5L13 4.5"></path></svg>`
                : ''
            }
          </button>
          <div>
            <h3 class="milestone-drawer-title">${ms.title}</h3>
            <p class="milestone-drawer-proof">${ms.proof}</p>
          </div>
        `;
        const btn = cardEl.querySelector('.drawer-checkbox-btn');
        btn.addEventListener('click', () => {
          if (state.milestonesCompleted.has(ms.id)) {
            state.milestonesCompleted.delete(ms.id);
          } else {
            state.milestonesCompleted.add(ms.id);
          }
          saveState();
          renderMilestonesDrawer();
          updateUI();
        });
        dom.milestonesList.appendChild(cardEl);
      });
    }

    if (dom.principlesList) {
      dom.principlesList.innerHTML = '';
      (DATA.axioms || []).forEach((ax) => {
        const cardEl = document.createElement('div');
        cardEl.className = 'principle-card';
        cardEl.innerHTML = `
          <h3 class="principle-title">${ax.axiom}</h3>
          <p class="principle-desc">${ax.rule}</p>
        `;
        dom.principlesList.appendChild(cardEl);
      });
    }
  }

  // --- EVENT LISTENERS SETUP ---
  function setupEvents() {
    // 1. Mouse Wheel Translation (Vertical delta to horizontal scroll)
    dom.worldViewport.addEventListener(
      'wheel',
      (e) => {
        // If cursor is over an internally scrollable lesson container, let it scroll vertically if there's room
        const scrollable = e.target.closest('.module-lessons-scroll');
        if (scrollable) {
          const atTop = scrollable.scrollTop === 0;
          const atBottom = scrollable.scrollHeight - scrollable.scrollTop <= scrollable.clientHeight + 2;
          if ((e.deltaY < 0 && !atTop) || (e.deltaY > 0 && !atBottom)) {
            return; // let native vertical scroll happen
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
      if (e.target.closest('button, input, a, .lesson-card, .minimap-container')) return;
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

    // 3. Mini-Map Synchronous Lens Updates
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

    // Clicking anywhere on world canvas in overview mode zooms into that spot
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

    // Apply initial theme
    if (state.theme === 'light') {
      dom.html.classList.remove('dark');
      dom.html.classList.add('light');
    }

    // 11. Reset Button
    dom.btnResetData?.addEventListener('click', () => {
      if (confirm('Are you sure you want to reset all completed roadmap items?')) {
        state.completed.clear();
        state.milestonesCompleted.clear();
        saveState();
        updateUI();
        renderMilestonesDrawer();
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

  // Start application once DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
