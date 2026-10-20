/**
 * ============================================================================
 * AHKH ROADMAP — INTERACTIVE ENGINE & LOCALSTORAGE STATE MANAGER
 * ============================================================================
 */

(function () {
  const DATA = window.ROADMAP_DATA;
  const STORAGE_KEY = DATA.meta.storageKey || "ahkh_marketing_freelancer_roadmap_v1";

  // Default persistent state
  const defaultState = {
    completed: {}, // { [itemId]: true }
    openCourses: { "c-scrimba-html-css": true }, // Open first course by default so user sees literal lessons immediately
    unlockedPhases: { "phase-0-1": true },
    focusMode: false, // false = Full Explorer (all visible), true = Strict Focus Mode (locks future phases)
    lang: "bilingual", // "bilingual" | "en" | "ar"
    notes: {} // { [courseId]: "user notes..." }
  };

  let state = loadState();

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return structuredClone(defaultState);
      const parsed = JSON.parse(raw);
      return {
        ...structuredClone(defaultState),
        ...parsed,
        completed: parsed.completed || {},
        openCourses: parsed.openCourses || { "c-scrimba-html-css": true },
        unlockedPhases: parsed.unlockedPhases || { "phase-0-1": true },
        notes: parsed.notes || {}
      };
    } catch (e) {
      console.warn("Failed to read localStorage state, using default:", e);
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (e) {
      console.warn("Failed to save state to localStorage:", e);
    }
  }

  // SVG Icons helper
  const ICONS = {
    check: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`,
    chevronDown: `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>`,
    external: `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>`,
    lock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
    unlock: `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 9.9-1"></path></svg>`,
    compass: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"></polygon></svg>`,
    zap: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>`,
    "trending-up": `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>`,
    cpu: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`,
    clock: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>`,
    rocket: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>`,
    flame: `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path></svg>`
  };

  // ==========================================================================
  // PROGRESS CALCULATION HELPERS
  // ==========================================================================
  function getCourseLessonIds(course) {
    const ids = [];
    (course.modules || []).forEach((m) => {
      (m.lessons || []).forEach((l) => ids.push(l.id));
    });
    return ids;
  }

  function getPhaseItemIds(phase) {
    const ids = [];
    (phase.courses || []).forEach((c) => {
      ids.push(...getCourseLessonIds(c));
    });
    if (phase.dailyDrill) ids.push(phase.dailyDrill.id);
    if (phase.project && phase.project.deliverables) {
      phase.project.deliverables.forEach((d) => ids.push(d.id));
    }
    if (phase.checklist && phase.checklist.items) {
      phase.checklist.items.forEach((item) => ids.push(item.id));
    }
    return ids;
  }

  function getStageItemIds(stage) {
    const ids = [];
    (stage.resources || []).forEach((r) => {
      ids.push(...getCourseLessonIds(r));
    });
    return ids;
  }

  function getAllTrackableIds() {
    const all = new Set();
    DATA.milestones.forEach((m) => all.add(m.id));
    DATA.phases.forEach((p) => getPhaseItemIds(p).forEach((id) => all.add(id)));
    DATA.marketingTrack.stages.forEach((s) => getStageItemIds(s).forEach((id) => all.add(id)));
    DATA.studio.coreService.pillars.forEach((p) => all.add(p.id));
    DATA.studio.workingRules.forEach((w) => all.add(w.id));
    return Array.from(all);
  }

  function computeStats(ids) {
    const total = ids.length;
    if (total === 0) return { done: 0, total: 0, pct: 0 };
    let done = 0;
    for (const id of ids) {
      if (state.completed[id]) done++;
    }
    return {
      done,
      total,
      pct: Math.round((done / total) * 100)
    };
  }

  function isPhaseUnlocked(phase, index) {
    if (!state.focusMode) return true;
    if (index === 0 || phase.initialStatus === "current") return true;
    if (state.unlockedPhases[phase.id]) return true;
    // Also auto-unlock if previous phase's project/checklist is 100% done
    const prevPhase = DATA.phases[index - 1];
    if (prevPhase) {
      const prevGateIds = [];
      if (prevPhase.project) prevPhase.project.deliverables.forEach((d) => prevGateIds.push(d.id));
      if (prevPhase.checklist) prevPhase.checklist.items.forEach((i) => prevGateIds.push(i.id));
      if (prevGateIds.length > 0 && prevGateIds.every((id) => state.completed[id])) {
        return true;
      }
    }
    return false;
  }

  // ==========================================================================
  // RENDER FUNCTIONS
  // ==========================================================================
  function renderApp() {
    document.body.setAttribute("data-lang", state.lang);

    renderHudStats();
    renderPathPipeline();
    renderMilestones();
    renderBentoStrategy();
    renderCoreTimeline();
    renderMarketingTrack();
    renderStudioPlaybook();
    initSpotlightEffect();
  }

  function renderHudStats() {
    const allIds = getAllTrackableIds();
    const { done, total, pct } = computeStats(allIds);

    const pctEl = document.getElementById("global-pct-text");
    const countEl = document.getElementById("global-count-text");
    const ringEl = document.getElementById("global-progress-ring");

    if (pctEl) pctEl.textContent = `${pct}%`;
    if (countEl) countEl.textContent = `${done}/${total}`;
    if (ringEl) {
      const radius = 9;
      const circumference = 2 * Math.PI * radius;
      ringEl.style.strokeDasharray = `${circumference}`;
      const offset = circumference - (pct / 100) * circumference;
      ringEl.style.strokeDashoffset = `${offset}`;
    }

    // Focus mode button state
    const focusBtn = document.getElementById("btn-focus-mode");
    if (focusBtn) {
      focusBtn.classList.toggle("is-active-focus", state.focusMode);
      const labelSpan = focusBtn.querySelector(".focus-btn-label");
      if (labelSpan) {
        labelSpan.textContent = state.focusMode ? "Focus Mode: ON" : "Explorer Mode: ALL";
      }
    }

    // Language button label
    const langBtn = document.getElementById("btn-lang-mode");
    if (langBtn) {
      const map = { bilingual: "EN + عربي", en: "English Only", ar: "عربي فقط" };
      langBtn.textContent = map[state.lang] || "EN + عربي";
    }
  }

  function renderPathPipeline() {
    const container = document.getElementById("path-pipeline-container");
    if (!container) return;

    container.innerHTML = DATA.phases
      .map((phase, idx) => {
        const stats = computeStats(getPhaseItemIds(phase));
        const isCurrent = idx === 0 && stats.pct < 100;
        return `
        <div class="pipeline-node spotlight-card ${isCurrent ? "is-current" : ""}" data-scroll-to="${phase.id}">
          <div class="pipeline-node__top">
            <span class="pipeline-node__step">${phase.weeks}</span>
            <span class="pipeline-node__pct">${stats.pct}%</span>
          </div>
          <div class="pipeline-node__title en-only">Phase ${phase.number}</div>
          <div class="pipeline-node__ar ar-text">${phase.titleAr.split(":")[0]}</div>
          <div class="pipeline-node__bar">
            <div class="pipeline-node__bar-fill" style="width: ${stats.pct}%"></div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  function renderMilestones() {
    const container = document.getElementById("milestones-grid-container");
    if (!container) return;

    const msIds = DATA.milestones.map((m) => m.id);
    const msStats = computeStats(msIds);
    const badgeEl = document.getElementById("milestones-counter-badge");
    if (badgeEl) badgeEl.textContent = `${msStats.done} / ${msStats.total} Achieved`;

    container.innerHTML = DATA.milestones
      .map((ms) => {
        const checked = !!state.completed[ms.id];
        return `
        <div class="milestone-card spotlight-card ${checked ? "is-completed" : ""}" data-toggle-id="${ms.id}">
          <div class="custom-check ${checked ? "is-checked" : ""}">${ICONS.check}</div>
          <div class="milestone-card__content">
            <div class="milestone-card__meta">
              <span class="milestone-badge">0${ms.order} · ${ms.targetPhase}</span>
              <span>${ms.timeline}</span>
            </div>
            <div class="milestone-card__title en-only">${ms.title}</div>
            <div class="milestone-card__ar ar-text">${ms.titleAr}</div>
          </div>
        </div>
      `;
      })
      .join("");
  }

  function renderBentoStrategy() {
    const container = document.getElementById("bento-grid-container");
    if (!container) return;

    const spans = ["bento-card--span-4", "bento-card--span-4", "bento-card--span-4", "bento-card--span-6", "bento-card--span-6"];

    container.innerHTML = DATA.meta.strategyCards
      .map((card, i) => {
        const spanClass = spans[i] || "bento-card--span-4";
        const iconSvg = ICONS[card.icon] || ICONS.compass;

        let extraHtml = "";
        if (card.items) {
          extraHtml = `
            <ul class="bento-list en-only">
              ${card.items.map((item) => `<li><span>${item}</span></li>`).join("")}
            </ul>
            <ul class="bento-list ar-text" style="direction:rtl; font-family:var(--font-ar);">
              ${(card.itemsAr || []).map((item) => `<li><span>${item}</span></li>`).join("")}
            </ul>
          `;
        }
        if (card.pills) {
          extraHtml += `
            <div class="pill-cloud">
              ${card.pills.map((p) => `<span class="later-pill">${p}</span>`).join("")}
            </div>
          `;
        }

        return `
        <article class="bento-card spotlight-card ${spanClass}" data-accent="${card.accent}">
          <div>
            <div class="bento-card__icon">${iconSvg}</div>
            <h3 class="bento-card__title en-only">${card.title}</h3>
            <div class="bento-card__title-ar ar-text">${card.titleAr}</div>
            ${card.body ? `<p class="bento-card__body en-only">${card.body}</p>` : ""}
            ${card.bodyAr ? `<p class="bento-card__body-ar ar-text">${card.bodyAr}</p>` : ""}
            ${extraHtml}
          </div>
        </article>
      `;
      })
      .join("");
  }

  function renderCourseCard(course) {
    const lessonIds = getCourseLessonIds(course);
    const stats = computeStats(lessonIds);
    const isCourseDone = stats.total > 0 && stats.done === stats.total;
    const isOpen = !!state.openCourses[course.id];
    const savedNote = state.notes[course.id] || "";

    return `
      <div class="course-card ${isCourseDone ? "is-course-completed" : ""} ${isOpen ? "is-open" : ""}" id="course-${course.id}">
        <div class="course-card__header" data-toggle-course-open="${course.id}">
          <div class="course-card__main">
            <div class="custom-check ${isCourseDone ? "is-checked" : ""}" data-toggle-batch="${lessonIds.join(",")}" title="Toggle entire course/book">
              ${ICONS.check}
            </div>
            <div>
              <div class="course-card__meta-row">
                <span class="course-type-tag">${course.type}</span>
                <span class="course-provider">${course.provider}</span>
                ${course.duration ? `<span class="course-duration">${course.duration}</span>` : ""}
              </div>
              <h4 class="course-title en-only">${course.title}</h4>
              <div class="course-title-ar ar-text">${course.titleAr || course.title}</div>
              ${course.description ? `<p class="course-desc en-only">${course.description}</p>` : ""}
              ${course.descriptionAr ? `<p class="course-desc-ar ar-text">${course.descriptionAr}</p>` : ""}
            </div>
          </div>

          <div class="course-card__actions">
            <span class="course-progress-chip">${stats.done}/${stats.total} · ${stats.pct}%</span>
            ${
              course.url
                ? `<a href="${course.url}" target="_blank" rel="noopener noreferrer" class="icon-link-btn" onclick="event.stopPropagation()">
                    <span>Open</span> ${ICONS.external}
                   </a>`
                : ""
            }
            <button type="button" class="expand-curriculum-btn" data-toggle-course-open="${course.id}">
              <span>${ (course.modules || []).length } Modules</span>
              ${ICONS.chevronDown}
            </button>
          </div>
        </div>

        <div class="course-curriculum">
          <div class="modules-grid">
            ${(course.modules || [])
              .map((mod) => {
                const modLessonIds = (mod.lessons || []).map((l) => l.id);
                const modStats = computeStats(modLessonIds);
                const isModDone = modStats.total > 0 && modStats.done === modStats.total;

                return `
                <div class="module-box ${isModDone ? "is-module-complete" : ""}">
                  <div class="module-box__header">
                    <div class="module-box__title-group" data-toggle-batch="${modLessonIds.join(",")}">
                      <div class="custom-check ${isModDone ? "is-checked" : ""}">${ICONS.check}</div>
                      <div>
                        <div class="module-title en-only">${mod.title}</div>
                        ${mod.titleAr ? `<div class="module-title-ar ar-text">${mod.titleAr}</div>` : ""}
                      </div>
                    </div>
                    <span class="module-count-badge">${modStats.done}/${modStats.total} Lessons</span>
                  </div>

                  <div class="lessons-list">
                    ${(mod.lessons || [])
                      .map((lesson) => {
                        const lChecked = !!state.completed[lesson.id];
                        return `
                        <div class="lesson-row ${lChecked ? "is-completed" : ""}" data-toggle-id="${lesson.id}">
                          <div class="lesson-row__left">
                            <div class="custom-check ${lChecked ? "is-checked" : ""}">${ICONS.check}</div>
                            <span class="lesson-title">${lesson.title}</span>
                          </div>
                          ${lesson.time ? `<span class="lesson-time">${lesson.time}</span>` : ""}
                        </div>
                      `;
                      })
                      .join("")}
                  </div>
                </div>
              `;
              })
              .join("")}
          </div>

          <div class="course-notes-box">
            <div class="course-notes-label">
              <span>📝 Personal Study Notes & Takeaways (Saved automatically in Browser LocalStorage)</span>
              <span>ملاحظاتك الشخصية على الكورس/الكتاب</span>
            </div>
            <textarea
              class="course-notes-input"
              data-note-course="${course.id}"
              placeholder="Write your summary from memory, links to your Figma/GitHub practice, or key lessons here..."
            >${escapeHtml(savedNote)}</textarea>
          </div>
        </div>
      </div>
    `;
  }

  function renderCoreTimeline() {
    const container = document.getElementById("core-timeline-container");
    if (!container) return;

    // Update overall timeline beam height
    const allPhaseIds = [];
    DATA.phases.forEach((p) => allPhaseIds.push(...getPhaseItemIds(p)));
    const overallPhaseStats = computeStats(allPhaseIds);
    const beamFill = document.getElementById("timeline-beam-fill");
    if (beamFill) {
      beamFill.style.height = `${Math.max(8, overallPhaseStats.pct)}%`;
    }

    container.innerHTML = DATA.phases
      .map((phase, idx) => {
        const phaseIds = getPhaseItemIds(phase);
        const stats = computeStats(phaseIds);
        const unlocked = isPhaseUnlocked(phase, idx);
        const isComplete = stats.total > 0 && stats.done === stats.total;

        // Daily drill HTML if present
        let drillHtml = "";
        if (phase.dailyDrill) {
          const dChecked = !!state.completed[phase.dailyDrill.id];
          drillHtml = `
            <div class="deliverable-item ${dChecked ? "is-completed" : ""}" style="margin-top:16px;" data-toggle-id="${phase.dailyDrill.id}">
              <div class="custom-check ${dChecked ? "is-checked" : ""}">${ICONS.check}</div>
              <div>
                <div style="font-weight:700; color:#67e8f9; font-size:0.9rem;">⚡ ${phase.dailyDrill.title} — ${phase.dailyDrill.titleAr}</div>
                <div class="en-only" style="font-size:0.86rem; color:var(--text-secondary);">${phase.dailyDrill.description}</div>
                <div class="ar-text" style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-ar); direction:rtl;">${phase.dailyDrill.descriptionAr}</div>
              </div>
            </div>
          `;
        }

        // Reference note if present
        let refNoteHtml = "";
        if (phase.referenceNote) {
          refNoteHtml = `
            <div style="margin-top:14px; padding:10px 14px; border-radius:10px; background:rgba(245,158,11,0.08); border:1px solid rgba(245,158,11,0.25); font-size:0.84rem; color:#fde68a;">
              💡 <span class="en-only">${phase.referenceNote}</span>
              <span class="ar-text" style="font-family:var(--font-ar); margin-inline-start:8px;">${phase.referenceNoteAr}</span>
            </div>
          `;
        }

        // Gate Project or Checklist HTML
        let gateHtml = "";
        if (phase.project) {
          gateHtml = `
            <div class="gate-project-box">
              <div class="gate-project-box__header">
                <div>
                  <div class="gate-project-title">
                    ${ICONS.rocket}
                    <span class="en-only">${phase.project.title}</span>
                  </div>
                  <div class="ar-text" style="font-family:var(--font-ar); color:#a7f3d0; font-size:0.92rem; margin-top:2px; direction:rtl;">
                    ${phase.project.titleAr}
                  </div>
                </div>
                <span class="badge-pill badge-pill--current">${phase.project.rule}</span>
              </div>
              <div class="deliverables-list">
                ${phase.project.deliverables
                  .map((del) => {
                    const delChecked = !!state.completed[del.id];
                    return `
                    <div class="deliverable-item ${delChecked ? "is-completed" : ""}" data-toggle-id="${del.id}">
                      <div class="custom-check ${delChecked ? "is-checked" : ""}">${ICONS.check}</div>
                      <div>
                        <div class="en-only" style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">${del.title}</div>
                        <div class="ar-text" style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-ar); direction:rtl;">${del.titleAr}</div>
                      </div>
                    </div>
                  `;
                  })
                  .join("")}
              </div>
            </div>
          `;
        }

        if (phase.checklist) {
          gateHtml += `
            <div class="gate-project-box" style="border-color:rgba(245,158,11,0.4); background:linear-gradient(135deg, rgba(245,158,11,0.1), rgba(15,21,38,0.8));">
              <div class="gate-project-box__header">
                <div>
                  <div class="gate-project-title" style="color:#fef3c7;">
                    ${ICONS.flame}
                    <span class="en-only">${phase.checklist.title}</span>
                  </div>
                  <div class="ar-text" style="font-family:var(--font-ar); color:#fde68a; font-size:0.92rem; margin-top:2px; direction:rtl;">
                    ${phase.checklist.titleAr}
                  </div>
                </div>
              </div>
              <div class="deliverables-list">
                ${phase.checklist.items
                  .map((item) => {
                    const cChecked = !!state.completed[item.id];
                    return `
                    <div class="deliverable-item ${cChecked ? "is-completed" : ""}" data-toggle-id="${item.id}">
                      <div class="custom-check ${cChecked ? "is-checked" : ""}">${ICONS.check}</div>
                      <div>
                        <div class="en-only" style="font-size:0.9rem; font-weight:600; color:var(--text-primary);">${item.title}</div>
                        <div class="ar-text" style="font-size:0.85rem; color:var(--text-muted); font-family:var(--font-ar); direction:rtl;">${item.titleAr}</div>
                      </div>
                    </div>
                  `;
                  })
                  .join("")}
              </div>
            </div>
          `;
        }

        return `
        <section class="phase-block ${unlocked ? "is-unlocked" : ""} ${isComplete ? "is-phase-complete" : ""}" id="${phase.id}">
          <div class="phase-node-dot">
            ${isComplete ? ICONS.check : `<span style="font-family:var(--font-mono); font-size:0.65rem; font-weight:700;">${idx + 1}</span>`}
          </div>

          <div class="phase-card spotlight-card">
            <div class="phase-header">
              <div>
                <div class="phase-badges">
                  <span class="badge-pill ${idx === 0 ? "badge-pill--current" : "badge-pill--locked"}">
                    ${idx === 0 ? "● Current Focus Phase" : unlocked ? "● Unlocked / Explorer" : "🔒 Locked Until Turn"}
                  </span>
                  <span class="badge-pill">🗓️ ${phase.weeks}</span>
                  <span class="badge-pill">⚡ ${phase.pace}</span>
                </div>
                <h3 class="phase-title en-only">${phase.title}</h3>
                <div class="phase-title-ar ar-text">${phase.titleAr}</div>
                <p class="phase-summary en-only">${phase.summary}</p>
                <p class="phase-summary-ar ar-text">${phase.summaryAr}</p>
              </div>

              <div class="phase-stats-box">
                <div class="phase-stats-box__top">
                  <span class="phase-stats-box__pct">${stats.pct}%</span>
                  <span class="phase-stats-box__count">${stats.done} / ${stats.total} Tasks</span>
                </div>
                <div class="phase-progress-bar">
                  <div class="phase-progress-bar__fill" style="width: ${stats.pct}%"></div>
                </div>
              </div>
            </div>

            ${
              !unlocked
                ? `
              <div class="locked-gate-banner">
                <div class="locked-gate-banner__info">
                  <div class="golden-rule-icon" style="color:#fbbf24; border-color:rgba(245,158,11,0.4); background:rgba(245,158,11,0.12);">
                    ${ICONS.lock}
                  </div>
                  <div>
                    <div style="font-weight:700; color:#fef3c7;">Hidden in Focus Mode — Finish the previous phase's project first!</div>
                    <div style="font-size:0.84rem; color:var(--text-muted); font-family:var(--font-ar);">
                      مخفي في وضع التركيز الحالي تطبيقاً لقاعدة الخارطة (أو اضغط لفتحه واستعراضه الآن)
                    </div>
                  </div>
                </div>
                <button type="button" class="hud-btn" data-unlock-phase="${phase.id}">
                  ${ICONS.unlock} <span>Unlock & Peek Phase ${phase.number}</span>
                </button>
              </div>
            `
                : `
              ${drillHtml}
              ${refNoteHtml}
              <div class="courses-list">
                ${(phase.courses || []).map((course) => renderCourseCard(course)).join("")}
              </div>
              ${gateHtml}
            `
            }
          </div>
        </section>
      `;
      })
      .join("");
  }

  function renderMarketingTrack() {
    const container = document.getElementById("marketing-stages-container");
    if (!container) return;

    const allTrackIds = [];
    DATA.marketingTrack.stages.forEach((s) => allTrackIds.push(...getStageItemIds(s)));
    const trackStats = computeStats(allTrackIds);
    const badgeEl = document.getElementById("marketing-track-badge");
    if (badgeEl) badgeEl.textContent = `${trackStats.done} / ${trackStats.total} Lessons (${trackStats.pct}%)`;

    container.innerHTML = DATA.marketingTrack.stages
      .map((stage) => {
        const sStats = computeStats(getStageItemIds(stage));
        return `
        <div class="stage-card spotlight-card">
          <div class="stage-card__top">
            <span class="stage-number">STAGE ${stage.number}</span>
            <span class="course-progress-chip">${sStats.done}/${sStats.total} · ${sStats.pct}%</span>
          </div>
          <h3 class="phase-title en-only" style="font-size:1.3rem;">${stage.title}</h3>
          <div class="phase-title-ar ar-text" style="font-size:1rem;">${stage.titleAr}</div>
          <p class="phase-summary en-only" style="margin-bottom:6px;">${stage.focus}</p>
          <p class="phase-summary-ar ar-text" style="margin-bottom:16px;">${stage.focusAr}</p>

          <div class="courses-list">
            ${(stage.resources || []).map((res) => renderCourseCard(res)).join("")}
          </div>
        </div>
      `;
      })
      .join("");
  }

  function renderStudioPlaybook() {
    const pillarsContainer = document.getElementById("studio-pillars-container");
    const packagesContainer = document.getElementById("studio-packages-container");
    const addonsContainer = document.getElementById("studio-addons-container");
    const oosContainer = document.getElementById("studio-oos-container");
    const rulesContainer = document.getElementById("studio-rules-container");

    if (pillarsContainer) {
      pillarsContainer.innerHTML = DATA.studio.coreService.pillars
        .map((p) => {
          const checked = !!state.completed[p.id];
          return `
          <div class="deliverable-item ${checked ? "is-completed" : ""}" data-toggle-id="${p.id}">
            <div class="custom-check ${checked ? "is-checked" : ""}">${ICONS.check}</div>
            <div>
              <div class="en-only" style="font-weight:700; font-size:0.9rem;">${p.label}</div>
              <div class="ar-text" style="font-family:var(--font-ar); font-size:0.84rem; color:var(--text-muted); direction:rtl;">${p.labelAr}</div>
            </div>
          </div>
        `;
        })
        .join("");
    }

    if (packagesContainer) {
      packagesContainer.innerHTML = DATA.studio.packages
        .map((pkg) => {
          return `
          <div class="package-card spotlight-card ${pkg.featured ? "is-featured" : ""}">
            <div>
              <div style="display:flex; align-items:center; justify-content:space-between; gap:8px;">
                <span class="badge-pill ${pkg.featured ? "badge-pill--current" : ""}">${pkg.badge}</span>
                <span class="ar-text" style="font-family:var(--font-ar); font-size:0.78rem; color:var(--cyan);">${pkg.badgeAr}</span>
              </div>
              <h4 class="package-tier-name">${pkg.tier}</h4>
              <div class="ar-text" style="font-family:var(--font-ar); font-size:0.95rem; color:var(--emerald); margin-bottom:6px; direction:rtl;">${pkg.tierAr}</div>
              <p class="en-only" style="font-size:0.92rem; color:var(--text-secondary); font-weight:600;">${pkg.summary}</p>
              <p class="ar-text" style="font-family:var(--font-ar); font-size:0.86rem; color:var(--text-muted); direction:rtl;">${pkg.summaryAr}</p>

              <ul class="package-features en-only">
                ${pkg.features.map((f) => `<li><span>${f}</span></li>`).join("")}
              </ul>
              <ul class="package-features ar-text" style="font-family:var(--font-ar); direction:rtl;">
                ${pkg.featuresAr.map((f) => `<li><span>${f}</span></li>`).join("")}
              </ul>
            </div>
          </div>
        `;
        })
        .join("");
    }

    if (addonsContainer) {
      addonsContainer.innerHTML = DATA.studio.addons
        .map((add) => {
          return `
          <div class="addon-card spotlight-card">
            <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:8px;">
              <span style="font-family:var(--font-display); font-weight:700; font-size:1.02rem; color:var(--text-primary);">${add.name}</span>
              <span class="badge-pill" style="color:#6ee7b7; border-color:rgba(16,185,129,0.3);">+ Add-on</span>
            </div>
            <div class="ar-text" style="font-family:var(--font-ar); font-size:0.88rem; color:var(--cyan); margin-bottom:6px; direction:rtl;">${add.nameAr}</div>
            <p class="en-only" style="font-size:0.86rem; color:var(--text-secondary);">${add.desc}</p>
            <p class="ar-text" style="font-family:var(--font-ar); font-size:0.82rem; color:var(--text-muted); margin-top:4px; direction:rtl;">${add.descAr}</p>
          </div>
        `;
        })
        .join("");
    }

    if (oosContainer) {
      oosContainer.innerHTML = DATA.studio.outOfScope
        .map(
          (item) => `
        <li>
          <span style="color:#f43f5e; font-weight:800;">✕</span>
          <div>
            <div class="en-only" style="font-weight:600;">${item.title}</div>
            <div class="ar-text" style="font-family:var(--font-ar); font-size:0.82rem; color:#fda4af; direction:rtl;">${item.titleAr}</div>
          </div>
        </li>
      `
        )
        .join("");
    }

    if (rulesContainer) {
      rulesContainer.innerHTML = DATA.studio.workingRules
        .map((rule) => {
          const checked = !!state.completed[rule.id];
          return `
          <div class="deliverable-item ${checked ? "is-completed" : ""}" data-toggle-id="${rule.id}">
            <div class="custom-check ${checked ? "is-checked" : ""}">${ICONS.check}</div>
            <div>
              <div class="en-only" style="font-weight:600; font-size:0.9rem;">${rule.title}</div>
              <div class="ar-text" style="font-family:var(--font-ar); font-size:0.84rem; color:var(--text-muted); direction:rtl;">${rule.titleAr}</div>
            </div>
          </div>
        `;
        })
        .join("");
    }
  }

  // ==========================================================================
  // EVENT DELEGATION & INTERACTIVITY
  // ==========================================================================
  document.addEventListener("click", (e) => {
    // 1. Batch Toggle (Course or Module checkbox)
    const batchBtn = e.target.closest("[data-toggle-batch]");
    if (batchBtn) {
      e.stopPropagation();
      const ids = batchBtn
        .getAttribute("data-toggle-batch")
        .split(",")
        .filter(Boolean);
      const allDone = ids.every((id) => state.completed[id]);
      ids.forEach((id) => {
        if (allDone) {
          delete state.completed[id];
        } else {
          state.completed[id] = true;
        }
      });
      saveState();
      renderApp();
      return;
    }

    // 2. Single Item Toggle (Lesson, Milestone, Deliverable, Checklist, Working Rule)
    const toggleItem = e.target.closest("[data-toggle-id]");
    if (toggleItem) {
      e.stopPropagation();
      const id = toggleItem.getAttribute("data-toggle-id");
      if (state.completed[id]) {
        delete state.completed[id];
      } else {
        state.completed[id] = true;
      }
      saveState();
      renderApp();
      return;
    }

    // 3. Expand/Collapse Course Curriculum Accordion
    const courseOpenToggle = e.target.closest("[data-toggle-course-open]");
    if (courseOpenToggle) {
      const courseId = courseOpenToggle.getAttribute("data-toggle-course-open");
      state.openCourses[courseId] = !state.openCourses[courseId];
      saveState();
      const cardEl = document.getElementById(`course-${courseId}`);
      if (cardEl) {
        cardEl.classList.toggle("is-open", !!state.openCourses[courseId]);
      } else {
        renderApp();
      }
      return;
    }

    // 4. Unlock Phase in Focus Mode
    const unlockBtn = e.target.closest("[data-unlock-phase]");
    if (unlockBtn) {
      const phaseId = unlockBtn.getAttribute("data-unlock-phase");
      state.unlockedPhases[phaseId] = true;
      saveState();
      renderApp();
      return;
    }

    // 5. Smooth Scroll to Phase
    const scrollTarget = e.target.closest("[data-scroll-to]");
    if (scrollTarget) {
      const targetId = scrollTarget.getAttribute("data-scroll-to");
      const el = document.getElementById(targetId);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
  });

  // Auto-save personal course notes on input
  document.addEventListener("input", (e) => {
    if (e.target.matches("[data-note-course]")) {
      const courseId = e.target.getAttribute("data-note-course");
      state.notes[courseId] = e.target.value;
      saveState();
    }
  });

  // Top HUD Controls
  function bindHudControls() {
    const focusBtn = document.getElementById("btn-focus-mode");
    if (focusBtn) {
      focusBtn.addEventListener("click", () => {
        state.focusMode = !state.focusMode;
        saveState();
        renderApp();
      });
    }

    const langBtn = document.getElementById("btn-lang-mode");
    if (langBtn) {
      langBtn.addEventListener("click", () => {
        const order = ["bilingual", "ar", "en"];
        const nextIdx = (order.indexOf(state.lang) + 1) % order.length;
        state.lang = order[nextIdx];
        saveState();
        renderApp();
      });
    }

    const expandAllBtn = document.getElementById("btn-expand-all");
    if (expandAllBtn) {
      expandAllBtn.addEventListener("click", () => {
        const allCourses = [];
        DATA.phases.forEach((p) => (p.courses || []).forEach((c) => allCourses.push(c.id)));
        DATA.marketingTrack.stages.forEach((s) => (s.resources || []).forEach((r) => allCourses.push(r.id)));
        const currentlyAllOpen = allCourses.every((id) => state.openCourses[id]);
        allCourses.forEach((id) => {
          state.openCourses[id] = !currentlyAllOpen;
        });
        saveState();
        renderApp();
      });
    }

    // Export JSON Backup
    const exportBtn = document.getElementById("btn-export-json");
    if (exportBtn) {
      exportBtn.addEventListener("click", () => {
        const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = `ahkh-roadmap-progress-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
      });
    }

    // Import JSON Backup
    const importInput = document.getElementById("input-import-json");
    const importBtn = document.getElementById("btn-import-json");
    if (importBtn && importInput) {
      importBtn.addEventListener("click", () => importInput.click());
      importInput.addEventListener("change", (ev) => {
        const file = ev.target.files && ev.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = () => {
          try {
            const parsed = JSON.parse(String(reader.result));
            state = {
              ...structuredClone(defaultState),
              ...parsed
            };
            saveState();
            renderApp();
          } catch (err) {
            alert("Invalid JSON backup file.");
          }
        };
        reader.readAsText(file);
      });
    }

    // Search / Command Modal (Ctrl+K)
    const searchBtn = document.getElementById("btn-open-search");
    const modalBackdrop = document.getElementById("command-modal-backdrop");
    const searchInput = document.getElementById("command-search-input");
    const searchResults = document.getElementById("command-search-results");

    function openSearch() {
      if (!modalBackdrop) return;
      modalBackdrop.classList.add("is-open");
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
        renderSearchResults("");
      }
    }

    function closeSearch() {
      if (modalBackdrop) modalBackdrop.classList.remove("is-open");
    }

    if (searchBtn) searchBtn.addEventListener("click", openSearch);
    if (modalBackdrop) {
      modalBackdrop.addEventListener("click", (e) => {
        if (e.target === modalBackdrop) closeSearch();
      });
    }

    document.addEventListener("keydown", (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        openSearch();
      } else if (e.key === "Escape") {
        closeSearch();
      }
    });

    if (searchInput) {
      searchInput.addEventListener("input", () => {
        renderSearchResults(searchInput.value.trim());
      });
    }

    function renderSearchResults(query) {
      if (!searchResults) return;
      const q = query.toLowerCase();
      const matches = [];

      const collectFromCourse = (course, parentLabel) => {
        if (
          !q ||
          course.title.toLowerCase().includes(q) ||
          (course.titleAr && course.titleAr.includes(q)) ||
          course.provider.toLowerCase().includes(q)
        ) {
          matches.push({
            type: course.type,
            title: course.title,
            sub: `${parentLabel} · ${course.titleAr || ""}`,
            courseId: course.id
          });
        }
        (course.modules || []).forEach((m) => {
          (m.lessons || []).forEach((l) => {
            if (q && l.title.toLowerCase().includes(q)) {
              matches.push({
                type: "Lesson",
                title: l.title,
                sub: `${course.title} → ${m.title}`,
                courseId: course.id
              });
            }
          });
        });
      };

      DATA.phases.forEach((p) => {
        (p.courses || []).forEach((c) => collectFromCourse(c, p.title));
      });
      DATA.marketingTrack.stages.forEach((s) => {
        (s.resources || []).forEach((r) => collectFromCourse(r, s.title));
      });

      const limited = matches.slice(0, 25);
      if (limited.length === 0) {
        searchResults.innerHTML = `<div style="padding:20px; text-align:center; color:var(--text-muted);">No matching courses, modules, or lessons found.</div>`;
        return;
      }

      searchResults.innerHTML = limited
        .map(
          (item) => `
        <div class="command-result-item" data-jump-course="${item.courseId}">
          <div>
            <div style="font-weight:700; font-size:0.9rem; color:var(--text-primary);">${item.title}</div>
            <div style="font-size:0.78rem; color:var(--text-muted);">${item.sub}</div>
          </div>
          <span class="course-type-tag">${item.type}</span>
        </div>
      `
        )
        .join("");

      searchResults.querySelectorAll("[data-jump-course]").forEach((el) => {
        el.addEventListener("click", () => {
          const cId = el.getAttribute("data-jump-course");
          state.openCourses[cId] = true;
          state.focusMode = false;
          saveState();
          closeSearch();
          renderApp();
          setTimeout(() => {
            const targetEl = document.getElementById(`course-${cId}`);
            if (targetEl) targetEl.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 60);
        });
      });
    }
  }

  // 21st.dev Mouse-Tracking Spotlight Border Effect
  function initSpotlightEffect() {
    const cards = document.querySelectorAll(".spotlight-card");
    cards.forEach((card) => {
      if (card.dataset.spotlightBound) return;
      card.dataset.spotlightBound = "1";
      card.addEventListener("mousemove", (ev) => {
        const rect = card.getBoundingClientRect();
        const x = ev.clientX - rect.left;
        const y = ev.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Boot
  document.addEventListener("DOMContentLoaded", () => {
    bindHudControls();
    renderApp();
  });
})();
