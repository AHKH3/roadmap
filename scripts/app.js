/**
 * Roadmap: Marketing Websites Freelancer — Main Application Engine
 * Linear Stage-by-Stage Navigation, Exhaustive Literal Curricula, Local-First Persistence
 */

(function () {
  'use strict';

  const DATA = window.ROADMAP_DATA;
  if (!DATA) {
    console.error('ROADMAP_DATA not found. Ensure data/roadmap-data.js is loaded.');
    return;
  }

  // --- STATE ---
  const state = {
    completed: new Set(),
    activeStageId: 'phase-0-1',
    filter: 'all', // 'all' | 'incomplete' | 'completed'
    searchQuery: '',
    openModules: new Set(),
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
      const savedStage = localStorage.getItem('ahkh_active_stage');
      if (savedStage) {
        state.activeStageId = savedStage;
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
      localStorage.setItem('ahkh_active_stage', state.activeStageId);
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
    linearStageRail: document.getElementById('linear-stage-rail'),
    stageFocusArena: document.getElementById('stage-focus-arena'),
    globalStatReadout: document.getElementById('global-stat-readout'),
    globalStatPercent: document.getElementById('global-stat-percent'),
    btnMilestonesDrawer: document.getElementById('btn-milestones-drawer'),
    milestonesPanel: document.getElementById('milestones-panel'),
    milestonesList: document.getElementById('milestones-list'),
    drawerMilestonesCount: document.getElementById('drawer-milestones-count'),
    principlesList: document.getElementById('principles-list'),
    btnTheme: document.getElementById('btn-theme'),
    btnResetData: document.getElementById('btn-reset-data'),
    chronosDate: document.getElementById('chronos-date'),
    chronosCadence: document.getElementById('chronos-cadence')
  };

  // --- STAGES CATALOG ---
  function getAllNavStages() {
    const list = DATA.stages.map((st) => ({
      id: st.id,
      number: st.number,
      title: st.title.replace(/^Phase \d+( & \d+)?:?\s*/, ''),
      tag: st.tag,
      timing: st.timing,
      isCore: true
    }));

    if (DATA.marketingTrack) {
      list.push({
        id: DATA.marketingTrack.id,
        number: 'MKT',
        title: 'Marketing Track',
        tag: 'Companion',
        timing: 'Continuous',
        isCore: false
      });
    }

    if (DATA.studioPlaybook) {
      list.push({
        id: DATA.studioPlaybook.id,
        number: 'STU',
        title: 'Studio Playbook',
        tag: 'Governance',
        timing: 'Standing Rules',
        isCore: false
      });
    }

    return list;
  }

  function getActiveStageData() {
    if (state.activeStageId === 'track-marketing') return DATA.marketingTrack;
    if (state.activeStageId === 'track-studio') return DATA.studioPlaybook;
    return DATA.stages.find((s) => s.id === state.activeStageId) || DATA.stages[0];
  }

  // --- TOTAL ROADMAP METRICS ---
  function calculateTotalStats() {
    let total = 0;
    let done = 0;

    // Core stages
    DATA.stages.forEach((stage) => {
      stage.courses?.forEach((c) => {
        c.modules?.forEach((m) => {
          m.lessons?.forEach((l) => {
            total++;
            if (state.completed.has(l.id)) done++;
          });
        });
      });
      stage.drills?.forEach((d) => {
        d.items?.forEach((i) => {
          total++;
          if (state.completed.has(i.id)) done++;
        });
      });
      stage.project?.steps?.forEach((p) => {
        total++;
        if (state.completed.has(p.id)) done++;
      });
    });

    // Marketing Track
    DATA.marketingTrack?.stages?.forEach((st) => {
      st.items?.forEach((i) => {
        total++;
        if (state.completed.has(i.id)) done++;
      });
    });

    // Studio Playbook operating rules
    DATA.studioPlaybook?.operatingRules?.items?.forEach((r) => {
      total++;
      if (state.completed.has(r.id)) done++;
    });

    return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }

  function calculateStageStats(stageId) {
    let total = 0;
    let done = 0;

    if (stageId === 'track-marketing') {
      DATA.marketingTrack?.stages?.forEach((st) => {
        st.items?.forEach((i) => {
          total++;
          if (state.completed.has(i.id)) done++;
        });
      });
      return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
    }

    if (stageId === 'track-studio') {
      DATA.studioPlaybook?.operatingRules?.items?.forEach((r) => {
        total++;
        if (state.completed.has(r.id)) done++;
      });
      return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
    }

    const stage = DATA.stages.find((s) => s.id === stageId);
    if (!stage) return { total: 0, done: 0, percent: 0 };

    stage.courses?.forEach((c) => {
      c.modules?.forEach((m) => {
        m.lessons?.forEach((l) => {
          total++;
          if (state.completed.has(l.id)) done++;
        });
      });
    });
    stage.drills?.forEach((d) => {
      d.items?.forEach((i) => {
        total++;
        if (state.completed.has(i.id)) done++;
      });
    });
    stage.project?.steps?.forEach((p) => {
      total++;
      if (state.completed.has(p.id)) done++;
    });

    return { total, done, percent: total > 0 ? Math.round((done / total) * 100) : 0 };
  }

  // --- PROGRESS UI UPDATES ---
  function updateGlobalMetrics() {
    const stats = calculateTotalStats();

    if (dom.globalStatReadout) {
      dom.globalStatReadout.innerHTML = `<strong>${stats.done}</strong> / ${stats.total}`;
    }
    if (dom.globalStatPercent) {
      dom.globalStatPercent.textContent = `(${stats.percent}%)`;
    }
    if (dom.topProgressFill) {
      dom.topProgressFill.style.transform = `scaleX(${stats.percent / 100})`;
    }

    // Milestones count
    const milestoneCount = DATA.milestones.filter((m) => state.completed.has(m.id)).length;
    if (dom.btnMilestonesDrawer) {
      dom.btnMilestonesDrawer.textContent = `Milestones (${milestoneCount}/${DATA.milestones.length})`;
    }
    if (dom.drawerMilestonesCount) {
      dom.drawerMilestonesCount.textContent = `${milestoneCount} / ${DATA.milestones.length} Completed`;
    }

    // Update mini progress bars on rail
    const cards = dom.linearStageRail?.querySelectorAll('.step-card');
    cards?.forEach((card) => {
      const stageId = card.getAttribute('data-stage-id');
      if (stageId) {
        const sStats = calculateStageStats(stageId);
        const fill = card.querySelector('.step-mini-fill');
        const badge = card.querySelector('.step-count');
        if (fill) fill.style.transform = `scaleX(${sStats.percent / 100})`;
        if (badge) badge.textContent = `${sStats.done}/${sStats.total}`;
      }
    });
  }

  // --- LINEAR RAIL RENDERING ---
  function renderLinearRail() {
    if (!dom.linearStageRail) return;
    const stages = getAllNavStages();

    dom.linearStageRail.innerHTML = stages
      .map((st) => {
        const sStats = calculateStageStats(st.id);
        const isActive = st.id === state.activeStageId;
        return `
          <button type="button" class="step-card ${isActive ? 'active' : ''}" data-stage-id="${st.id}" aria-selected="${isActive}">
            <div class="step-card-top">
              <span class="step-num">${st.number}</span>
              <span class="step-badge step-count">${sStats.done}/${sStats.total}</span>
            </div>
            <div class="step-label" title="${st.title}">${st.title}</div>
            <div class="step-meta">${st.timing}</div>
            <div class="step-mini-progress">
              <div class="step-mini-fill" style="transform: scaleX(${sStats.percent / 100});"></div>
            </div>
          </button>
        `;
      })
      .join('');

    dom.linearStageRail.querySelectorAll('.step-card').forEach((btn) => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-stage-id');
        if (targetId && targetId !== state.activeStageId) {
          switchActiveStage(targetId);
        }
      });
    });
  }

  // --- STAGE SWITCHING ---
  function switchActiveStage(stageId) {
    state.activeStageId = stageId;
    dom.body.setAttribute('data-stage', stageId);

    // Save and re-render
    saveState();
    renderLinearRail();
    renderActiveStageArena();
    updateGlobalMetrics();

    // Scroll smoothly to top of focus arena
    dom.stageFocusArena?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // --- CHECKBOX TOGGLING ---
  function toggleItem(id) {
    if (state.completed.has(id)) {
      state.completed.delete(id);
    } else {
      state.completed.add(id);
    }
    saveState();
    updateGlobalMetrics();
    refreshStageCompletionVisuals();
  }

  function refreshStageCompletionVisuals() {
    // Update active stage hero progress
    const sStats = calculateStageStats(state.activeStageId);
    const heroFill = document.getElementById('hero-stage-progress-fill');
    const heroCount = document.getElementById('hero-stage-progress-count');
    if (heroFill) heroFill.style.transform = `scaleX(${sStats.percent / 100})`;
    if (heroCount) heroCount.innerHTML = `<strong>${sStats.done}</strong> / ${sStats.total} completed (${sStats.percent}%)`;

    // Update lesson rows
    document.querySelectorAll('.lesson-row[data-item-id]').forEach((row) => {
      const id = row.getAttribute('data-item-id');
      const isDone = state.completed.has(id);
      row.classList.toggle('completed', isDone);
      const box = row.querySelector('.check-box-visual');
      if (box) box.classList.toggle('checked', isDone);

      // Filter handling
      applyFilterToRow(row, isDone);
    });

    // Update module pills
    document.querySelectorAll('.module-accordion').forEach((acc) => {
      const totalLessons = acc.querySelectorAll('.lesson-row').length;
      const doneLessons = acc.querySelectorAll('.lesson-row.completed').length;
      const pill = acc.querySelector('.module-stat-pill');
      if (pill) {
        pill.textContent = `${doneLessons} / ${totalLessons}`;
        pill.classList.toggle('all-done', totalLessons > 0 && doneLessons === totalLessons);
      }
    });

    // Update milestone drawer items
    document.querySelectorAll('.milestone-item[data-item-id]').forEach((item) => {
      const id = item.getAttribute('data-item-id');
      const isDone = state.completed.has(id);
      item.classList.toggle('checked', isDone);
      const box = item.querySelector('.check-box-visual');
      if (box) box.classList.toggle('checked', isDone);
    });
  }

  function applyFilterToRow(row, isDone) {
    const q = state.searchQuery.toLowerCase();
    const titleText = (row.querySelector('.lesson-title')?.textContent || '').toLowerCase();
    const matchesSearch = !q || titleText.includes(q);

    let matchesFilter = true;
    if (state.filter === 'incomplete' && isDone) matchesFilter = false;
    if (state.filter === 'completed' && !isDone) matchesFilter = false;

    row.style.display = matchesSearch && matchesFilter ? 'flex' : 'none';
  }

  // --- ACTIVE STAGE RENDERING ---
  function renderActiveStageArena() {
    if (!dom.stageFocusArena) return;

    if (state.activeStageId === 'track-marketing') {
      renderCompanionMarketingArena();
      return;
    }
    if (state.activeStageId === 'track-studio') {
      renderCompanionStudioArena();
      return;
    }

    const stage = DATA.stages.find((s) => s.id === state.activeStageId) || DATA.stages[0];
    const sStats = calculateStageStats(stage.id);

    // Initial expand of modules in this stage
    stage.courses?.forEach((c) => {
      c.modules?.forEach((m) => {
        state.openModules.add(m.id);
      });
    });

    dom.stageFocusArena.innerHTML = `
      <!-- Stage Hero Banner -->
      <section class="stage-hero">
        <div class="stage-hero-meta">
          <span class="atmosphere-badge">${stage.tag} · Phase ${stage.number}</span>
          <span class="stage-timing-pill">${stage.timing}</span>
          <span class="stage-timing-pill">${stage.cadence}</span>
          <span class="stage-status-pill">${stage.status}</span>
        </div>

        <h1 class="stage-title">${stage.title}</h1>
        <p class="stage-summary">${stage.summary}</p>

        <div class="stage-rule-box">
          <p class="stage-rule-text">"${DATA.header.rule}"</p>
          <p class="stage-note-text">${stage.note}</p>
        </div>

        <div class="stage-progress-card">
          <div class="stage-progress-header">
            <span class="progress-stage-name">${stage.title} Progress</span>
            <span id="hero-stage-progress-count" class="progress-stage-count">
              <strong>${sStats.done}</strong> / ${sStats.total} completed (${sStats.percent}%)
            </span>
          </div>
          <div class="stage-progress-track">
            <div id="hero-stage-progress-fill" class="stage-progress-fill" style="transform: scaleX(${sStats.percent / 100});"></div>
          </div>
        </div>
      </section>

      <!-- In-Stage Control & Filter Bar -->
      <div class="stage-control-bar">
        <div class="filter-group" role="tablist" aria-label="Lesson Filters">
          <button type="button" class="filter-btn ${state.filter === 'all' ? 'active' : ''}" data-filter="all">All Lessons</button>
          <button type="button" class="filter-btn ${state.filter === 'incomplete' ? 'active' : ''}" data-filter="incomplete">Incomplete</button>
          <button type="button" class="filter-btn ${state.filter === 'completed' ? 'active' : ''}" data-filter="completed">Completed</button>
        </div>

        <div class="search-box-wrapper">
          <input type="search" id="stage-search-input" class="search-input" placeholder="Search lessons in this phase..." value="${state.searchQuery}" />
          ${state.searchQuery ? '<button type="button" id="stage-search-clear" class="search-clear-btn" title="Clear search">✕</button>' : ''}
        </div>

        <div class="action-group">
          <button type="button" id="btn-expand-all" class="action-btn-sm">Expand All</button>
          <button type="button" id="btn-collapse-all" class="action-btn-sm">Collapse All</button>
        </div>
      </div>

      <!-- Courses & Literal Modules List -->
      <section class="courses-container" aria-label="Phase Courses">
        ${renderCoursesHtml(stage.courses)}
      </section>

      <!-- Practice Drills (If any) -->
      ${stage.drills && stage.drills.length > 0 ? renderDrillsHtml(stage.drills) : ''}

      <!-- Capstone Deliverable Project -->
      ${stage.project ? renderProjectHtml(stage.project) : ''}

      <!-- Traversal Footer Navigation -->
      ${renderTraversalFooterHtml(stage.id)}
    `;

    bindStageArenaEvents();
  }

  function renderCoursesHtml(courses) {
    if (!courses || courses.length === 0) return '';

    return courses
      .map((c) => {
        return `
          <article class="course-card">
            <header class="course-header">
              <div class="course-info">
                <div class="course-title-wrap">
                  <h2 class="course-title">${c.title}</h2>
                  ${c.author ? `<span class="course-author">${c.author}</span>` : ''}
                </div>
                ${c.description ? `<p class="course-desc">${c.description}</p>` : ''}
              </div>
              ${c.url ? `<a href="${c.url}" target="_blank" rel="noopener noreferrer" class="course-link-btn">Open Course ↗</a>` : ''}
            </header>

            <div class="modules-list">
              ${c.modules
                ?.map((m) => {
                  const isOpen = state.openModules.has(m.id);
                  const total = m.lessons?.length || 0;
                  const done = m.lessons?.filter((l) => state.completed.has(l.id)).length || 0;
                  const allDone = total > 0 && done === total;

                  return `
                    <div class="module-accordion ${isOpen ? 'open' : ''}" data-module-id="${m.id}">
                      <div class="module-header" data-toggle-module="${m.id}" role="button" tabindex="0">
                        <div class="module-header-left">
                          <svg class="module-chevron" viewBox="0 0 24 24"><polyline points="9 18 15 12 9 6"></polyline></svg>
                          <span class="module-title">${m.title}</span>
                        </div>
                        <div class="module-header-right">
                          ${m.duration ? `<span class="module-duration">${m.duration}</span>` : ''}
                          <span class="module-stat-pill ${allDone ? 'all-done' : ''}">${done} / ${total}</span>
                        </div>
                      </div>

                      <div class="module-body">
                        ${m.lessons
                          ?.map((lesson, idx) => {
                            const isDone = state.completed.has(lesson.id);
                            const numStr = String(idx + 1).padStart(2, '0');
                            return `
                              <div class="lesson-row ${isDone ? 'completed' : ''}" data-item-id="${lesson.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
                                <span class="check-box-visual ${isDone ? 'checked' : ''}">
                                  <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                                </span>
                                <span class="lesson-idx">${numStr}</span>
                                <span class="lesson-title">${lesson.title}</span>
                              </div>
                            `;
                          })
                          .join('')}
                      </div>
                    </div>
                  `;
                })
                .join('')}
            </div>
          </article>
        `;
      })
      .join('');
  }

  function renderDrillsHtml(drills) {
    return `
      <section class="drills-container">
        <h3 class="section-block-title">Interactive Practice Drills</h3>
        <div class="drills-grid">
          ${drills
            .map((drill) => {
              return `
                <div class="drill-card">
                  <div style="display:flex; justify-content:space-between; align-items:baseline;">
                    <h4 class="drill-title">${drill.title}</h4>
                    ${drill.url ? `<a href="${drill.url}" target="_blank" rel="noopener noreferrer" class="drill-link">Play ↗</a>` : ''}
                  </div>
                  <div class="capstone-steps-list">
                    ${drill.items
                      ?.map((item) => {
                        const isDone = state.completed.has(item.id);
                        return `
                          <div class="lesson-row ${isDone ? 'completed' : ''}" data-item-id="${item.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
                            <span class="check-box-visual ${isDone ? 'checked' : ''}">
                              <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </span>
                            <span class="lesson-title">${item.title}</span>
                          </div>
                        `;
                      })
                      .join('')}
                  </div>
                </div>
              `;
            })
            .join('')}
        </div>
      </section>
    `;
  }

  function renderProjectHtml(project) {
    return `
      <section class="capstone-container">
        <div class="capstone-hero">
          <h3 class="capstone-title">${project.title}</h3>
          <p class="capstone-subtitle">${project.subtitle}</p>
        </div>

        <div class="capstone-steps-list">
          ${project.steps
            ?.map((step) => {
              const isDone = state.completed.has(step.id);
              return `
                <div class="lesson-row ${isDone ? 'completed' : ''}" data-item-id="${step.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
                  <span class="check-box-visual ${isDone ? 'checked' : ''}">
                    <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </span>
                  <span class="lesson-title">${step.title}</span>
                </div>
              `;
            })
            .join('')}
        </div>
      </section>
    `;
  }

  function renderTraversalFooterHtml(currentId) {
    const navStages = getAllNavStages();
    const currentIndex = navStages.findIndex((s) => s.id === currentId);
    const prevStage = currentIndex > 0 ? navStages[currentIndex - 1] : null;
    const nextStage = currentIndex < navStages.length - 1 ? navStages[currentIndex + 1] : null;

    return `
      <nav class="stage-traversal-nav" aria-label="Stage Navigation Controls">
        <button type="button" class="nav-stage-btn" id="btn-prev-stage" ${prevStage ? `data-target-id="${prevStage.id}"` : 'disabled'}>
          ← ${prevStage ? `Previous: ${prevStage.title}` : 'Beginning of Roadmap'}
        </button>

        <span class="nav-stage-center">Phase ${currentIndex + 1} of ${navStages.length}</span>

        <button type="button" class="nav-stage-btn" id="btn-next-stage" ${nextStage ? `data-target-id="${nextStage.id}"` : 'disabled'}>
          ${nextStage ? `Next: ${nextStage.title}` : 'Completed Track'} →
        </button>
      </nav>
    `;
  }

  // --- COMPANION MARKETING ARENA ---
  function renderCompanionMarketingArena() {
    const track = DATA.marketingTrack;
    const stats = calculateStageStats(track.id);

    dom.stageFocusArena.innerHTML = `
      <section class="stage-hero">
        <div class="stage-hero-meta">
          <span class="atmosphere-badge">${track.tag}</span>
          <span class="stage-timing-pill">${track.timing}</span>
          <span class="stage-status-pill">${track.status}</span>
        </div>

        <h1 class="stage-title">${track.title}</h1>
        <p class="stage-summary">${track.rationale}</p>

        <div class="stage-rule-box">
          <p class="stage-rule-text">"${track.method}"</p>
          <p class="stage-note-text">${track.cadence}</p>
        </div>

        <div class="stage-progress-card">
          <div class="stage-progress-header">
            <span class="progress-stage-name">Marketing Track Progress</span>
            <span id="hero-stage-progress-count" class="progress-stage-count">
              <strong>${stats.done}</strong> / ${stats.total} completed (${stats.percent}%)
            </span>
          </div>
          <div class="stage-progress-track">
            <div id="hero-stage-progress-fill" class="stage-progress-fill" style="transform: scaleX(${stats.percent / 100});"></div>
          </div>
        </div>
      </section>

      <section class="courses-container">
        ${track.stages
          .map((st) => {
            return `
              <article class="course-card">
                <header class="course-header">
                  <div class="course-info">
                    <h2 class="course-title">${st.title}</h2>
                    <p class="course-desc">${st.focus}</p>
                  </div>
                </header>
                <div class="capstone-steps-list" style="margin-top: 10px;">
                  ${st.items
                    .map((item) => {
                      const isDone = state.completed.has(item.id);
                      return `
                        <div class="lesson-row ${isDone ? 'completed' : ''}" data-item-id="${item.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
                          <span class="check-box-visual ${isDone ? 'checked' : ''}">
                            <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                          </span>
                          <span class="lesson-title">${item.title}</span>
                        </div>
                      `;
                    })
                    .join('')}
                </div>
              </article>
            `;
          })
          .join('')}
      </section>

      ${renderTraversalFooterHtml(track.id)}
    `;

    bindStageArenaEvents();
  }

  // --- COMPANION STUDIO ARENA ---
  function renderCompanionStudioArena() {
    const studio = DATA.studioPlaybook;

    dom.stageFocusArena.innerHTML = `
      <section class="stage-hero">
        <div class="stage-hero-meta">
          <span class="atmosphere-badge">${studio.tag}</span>
          <span class="stage-status-pill">${studio.status}</span>
        </div>

        <h1 class="stage-title">${studio.title}</h1>
        <p class="stage-summary">${studio.corePrinciple}</p>
      </section>

      <section class="companion-stage-container">
        <!-- Core Service & Out of Scope Grid -->
        <div class="scope-grid">
          <div class="scope-box">
            <h3 class="scope-box-title">${studio.coreService.title}</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted);">${studio.coreService.tagline}</p>
            <ul class="scope-list">
              ${studio.coreService.features.map((f) => `<li>${f}</li>`).join('')}
            </ul>
          </div>

          <div class="scope-box forbidden">
            <h3 class="scope-box-title">${studio.outOfScope.title}</h3>
            <p style="font-size: 0.8125rem; color: var(--text-muted);">${studio.outOfScope.rule}</p>
            <ul class="scope-list">
              ${studio.outOfScope.items.map((i) => `<li>${i}</li>`).join('')}
            </ul>
          </div>
        </div>

        <!-- Working Rules Checkable List -->
        <div class="course-card">
          <h3 class="scope-box-title">${studio.operatingRules.title}</h3>
          <div class="capstone-steps-list">
            ${studio.operatingRules.items
              .map((rule) => {
                const isDone = state.completed.has(rule.id);
                return `
                  <div class="lesson-row ${isDone ? 'completed' : ''}" data-item-id="${rule.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
                    <span class="check-box-visual ${isDone ? 'checked' : ''}">
                      <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </span>
                    <span class="lesson-title">${rule.title}</span>
                  </div>
                `;
              })
              .join('')}
          </div>
        </div>

        <!-- Service Packages Table -->
        <div class="course-card">
          <h3 class="scope-box-title">Client Pricing Packages</h3>
          <div class="spec-table-wrap">
            <table class="spec-table">
              <thead>
                <tr>
                  <th>Tier</th>
                  <th>Deliverables &amp; Inclusions</th>
                </tr>
              </thead>
              <tbody>
                ${studio.packagesTable
                  .map((p) => {
                    return `
                      <tr>
                        <td class="strong-col">${p.tier}</td>
                        <td>${p.details}</td>
                      </tr>
                    `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>

        <!-- Add-ons Menu Table -->
        <div class="course-card">
          <h3 class="scope-box-title">Add-Ons Menu (Sold Separately)</h3>
          <div class="spec-table-wrap">
            <table class="spec-table">
              <thead>
                <tr>
                  <th>Add-on Service</th>
                  <th>Scope &amp; Operating Model</th>
                </tr>
              </thead>
              <tbody>
                ${studio.addonsTable
                  .map((a) => {
                    return `
                      <tr>
                        <td class="strong-col">${a.addon}</td>
                        <td>${a.details}</td>
                      </tr>
                    `;
                  })
                  .join('')}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      ${renderTraversalFooterHtml(studio.id)}
    `;

    bindStageArenaEvents();
  }

  // --- ARENA EVENT BINDINGS ---
  function bindStageArenaEvents() {
    // Lesson Checkboxes
    dom.stageFocusArena?.querySelectorAll('.lesson-row[data-item-id]').forEach((row) => {
      row.addEventListener('click', (e) => {
        // Prevent clicking child link from toggling
        if (e.target.tagName === 'A') return;
        const id = row.getAttribute('data-item-id');
        if (id) toggleItem(id);
      });

      row.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          const id = row.getAttribute('data-item-id');
          if (id) toggleItem(id);
        }
      });
    });

    // Module Accordion Toggle
    dom.stageFocusArena?.querySelectorAll('[data-toggle-module]').forEach((header) => {
      header.addEventListener('click', () => {
        const modId = header.getAttribute('data-toggle-module');
        const acc = header.closest('.module-accordion');
        if (acc && modId) {
          if (state.openModules.has(modId)) {
            state.openModules.delete(modId);
            acc.classList.remove('open');
          } else {
            state.openModules.add(modId);
            acc.classList.add('open');
          }
        }
      });

      header.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          header.click();
        }
      });
    });

    // Expand / Collapse All
    document.getElementById('btn-expand-all')?.addEventListener('click', () => {
      dom.stageFocusArena?.querySelectorAll('.module-accordion').forEach((acc) => {
        const id = acc.getAttribute('data-module-id');
        if (id) state.openModules.add(id);
        acc.classList.add('open');
      });
    });

    document.getElementById('btn-collapse-all')?.addEventListener('click', () => {
      dom.stageFocusArena?.querySelectorAll('.module-accordion').forEach((acc) => {
        const id = acc.getAttribute('data-module-id');
        if (id) state.openModules.delete(id);
        acc.classList.remove('open');
      });
    });

    // Filters
    dom.stageFocusArena?.querySelectorAll('.filter-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        dom.stageFocusArena?.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
        btn.classList.add('active');
        state.filter = btn.getAttribute('data-filter') || 'all';
        refreshStageCompletionVisuals();
      });
    });

    // Search
    const searchInput = document.getElementById('stage-search-input');
    searchInput?.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      refreshStageCompletionVisuals();
    });

    document.getElementById('stage-search-clear')?.addEventListener('click', () => {
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      refreshStageCompletionVisuals();
    });

    // Traversal buttons
    document.getElementById('btn-prev-stage')?.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-target-id');
      if (targetId) switchActiveStage(targetId);
    });

    document.getElementById('btn-next-stage')?.addEventListener('click', (e) => {
      const targetId = e.currentTarget.getAttribute('data-target-id');
      if (targetId) switchActiveStage(targetId);
    });
  }

  // --- MILESTONES DRAWER RENDERING ---
  function renderMilestonesDrawer() {
    if (!dom.milestonesList) return;

    dom.milestonesList.innerHTML = DATA.milestones
      .map((m) => {
        const isDone = state.completed.has(m.id);
        return `
          <div class="milestone-item ${isDone ? 'checked' : ''}" data-item-id="${m.id}" role="checkbox" aria-checked="${isDone}" tabindex="0">
            <span class="check-box-visual ${isDone ? 'checked' : ''}">
              <svg class="check-svg" viewBox="0 0 24 24"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </span>
            <div>
              <span class="milestone-text">${m.title}</span>
              <span class="milestone-phase-tag">${m.phase}</span>
            </div>
          </div>
        `;
      })
      .join('');

    dom.milestonesList.querySelectorAll('.milestone-item').forEach((item) => {
      item.addEventListener('click', () => {
        const id = item.getAttribute('data-item-id');
        if (id) toggleItem(id);
      });
      item.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') {
          e.preventDefault();
          const id = item.getAttribute('data-item-id');
          if (id) toggleItem(id);
        }
      });
    });

    // Principles
    if (dom.principlesList) {
      dom.principlesList.innerHTML = DATA.principles
        .map((p) => {
          return `
            <div class="principle-entry">
              <h4>${p.title}</h4>
              ${p.body ? `<p>${p.body}</p>` : ''}
              ${p.list ? `<ul>${p.list.map((li) => `<li>${li}</li>`).join('')}</ul>` : ''}
            </div>
          `;
        })
        .join('');
    }
  }

  // --- KEYBOARD NAVIGATION (ARROW KEYS) ---
  function setupKeyboardNavigation() {
    window.addEventListener('keydown', (e) => {
      // Ignore if user is currently typing in an input
      if (['INPUT', 'TEXTAREA'].includes(document.activeElement?.tagName)) return;

      const navStages = getAllNavStages();
      const currentIndex = navStages.findIndex((s) => s.id === state.activeStageId);

      if (e.key === 'ArrowRight' && currentIndex < navStages.length - 1) {
        e.preventDefault();
        switchActiveStage(navStages[currentIndex + 1].id);
      } else if (e.key === 'ArrowLeft' && currentIndex > 0) {
        e.preventDefault();
        switchActiveStage(navStages[currentIndex - 1].id);
      }
    });
  }

  // --- TIME & CALENDAR ANCHOR ---
  function setupLiveChronos() {
    const update = () => {
      const now = new Date();
      // Format 20 Oct 2026 style
      const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const dayName = days[now.getDay()];
      const dayNum = now.getDate();
      const monthName = months[now.getMonth()];
      const year = now.getFullYear();

      const hours = now.getHours();
      let cadence = 'Evening Focus';
      if (hours >= 5 && hours < 12) cadence = 'Morning Cadence';
      else if (hours >= 12 && hours < 17) cadence = 'Afternoon Cadence';
      else if (hours >= 17 && hours < 22) cadence = 'Evening Focus';
      else cadence = 'Night Deep Work';

      if (dom.chronosDate) {
        dom.chronosDate.textContent = `${dayName}, ${dayNum} ${monthName} ${year}`;
      }
      if (dom.chronosCadence) {
        dom.chronosCadence.textContent = cadence;
      }
    };

    update();
    setInterval(update, 60000);
  }

  // --- THEME ENGINE ---
  function initTheme() {
    if (state.theme === 'light') {
      dom.html.classList.remove('dark');
    } else {
      dom.html.classList.add('dark');
    }

    dom.btnTheme?.addEventListener('click', () => {
      const isDark = dom.html.classList.toggle('dark');
      state.theme = isDark ? 'dark' : 'light';
      saveState();
    });
  }

  // --- RESET ALL DATA ---
  function initReset() {
    dom.btnResetData?.addEventListener('click', () => {
      const ok = confirm('Reset all stored lesson and milestone progress back to zero?');
      if (ok) {
        state.completed.clear();
        saveState();
        renderLinearRail();
        renderActiveStageArena();
        renderMilestonesDrawer();
        updateGlobalMetrics();
      }
    });
  }

  // --- INIT APPLICATION ---
  function init() {
    loadState();
    initTheme();
    setupLiveChronos();
    setupKeyboardNavigation();

    // Drawer toggle
    dom.btnMilestonesDrawer?.addEventListener('click', () => {
      state.milestonesOpen = !state.milestonesOpen;
      dom.btnMilestonesDrawer.setAttribute('aria-expanded', String(state.milestonesOpen));
      if (dom.milestonesPanel) {
        dom.milestonesPanel.hidden = !state.milestonesOpen;
      }
    });

    renderMilestonesDrawer();
    renderLinearRail();
    switchActiveStage(state.activeStageId);
    initReset();
  }

  // Launch when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
