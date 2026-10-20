/**
 * Roadmap Interactive Controller & LocalStorage Persistence
 */

(function () {
  const DATA = window.ROADMAP_DATA;
  const STORAGE_KEY = DATA.storageKey || "ahkh_roadmap_v2";

  const CHECK_SVG = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
  const CHEVRON_SVG = `<svg class="chevron-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>`;

  const defaultState = {
    completed: {},
    openCourses: { "c-html-css": true },
    unlockedPhases: { "phase-0-1": true },
    focusMode: false,
    theme: "dark"
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
        openCourses: parsed.openCourses || { "c-html-css": true },
        unlockedPhases: parsed.unlockedPhases || { "phase-0-1": true }
      };
    } catch (_) {
      return structuredClone(defaultState);
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  function applyTheme() {
    if (state.theme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }

  // Helpers to collect leaf checkable IDs
  function getItemLeafIds(item) {
    if (!item.modules || item.modules.length === 0) {
      return [item.id];
    }
    const ids = [];
    item.modules.forEach((mod) => {
      (mod.lessons || []).forEach((lesson) => ids.push(lesson.id));
    });
    return ids;
  }

  function getPhaseLeafIds(phase) {
    const ids = [];
    (phase.sections || []).forEach((sec) => {
      (sec.items || []).forEach((item) => {
        ids.push(...getItemLeafIds(item));
      });
    });
    return ids;
  }

  function getAllLeafIds() {
    const set = new Set();
    DATA.milestones.forEach((m) => set.add(m.id));
    DATA.phases.forEach((p) => getPhaseLeafIds(p).forEach((id) => set.add(id)));
    DATA.marketingTrack.stages.forEach((st) => {
      (st.items || []).forEach((item) => {
        getItemLeafIds(item).forEach((id) => set.add(id));
      });
    });
    DATA.studio.workingRules.forEach((r) => set.add(r.id));
    return Array.from(set);
  }

  function statsFor(ids) {
    const total = ids.length;
    if (!total) return { done: 0, total: 0, pct: 0 };
    let done = 0;
    for (let i = 0; i < total; i++) {
      if (state.completed[ids[i]]) done++;
    }
    return { done, total, pct: Math.round((done / total) * 100) };
  }

  function esc(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderCheckableItem(item) {
    const hasModules = Array.isArray(item.modules) && item.modules.length > 0;
    if (!hasModules) {
      const checked = !!state.completed[item.id];
      return `
        <div class="check-row ${checked ? "is-checked" : ""}" data-toggle-id="${item.id}">
          <span class="check-box ${checked ? "is-checked" : ""}">${CHECK_SVG}</span>
          <span class="check-label ${checked ? "is-checked" : ""}">${esc(item.title)}</span>
        </div>
      `;
    }

    const leafIds = getItemLeafIds(item);
    const st = statsFor(leafIds);
    const allDone = st.total > 0 && st.done === st.total;
    const isOpen = !!state.openCourses[item.id];

    return `
      <div class="course-item ${isOpen ? "is-open" : ""}" id="item-${item.id}">
        <div class="course-bar" data-toggle-open="${item.id}">
          <div class="course-bar-left">
            <span class="check-box ${allDone ? "is-checked" : ""}" data-toggle-batch="${leafIds.join(",")}">${CHECK_SVG}</span>
            <span class="course-title ${allDone ? "is-checked" : ""}">${esc(item.title)}</span>
          </div>
          <div class="course-bar-right">
            ${item.url ? `<a href="${item.url}" target="_blank" rel="noopener noreferrer" class="source-link" onclick="event.stopPropagation()">source ↗</a>` : ""}
            <span>${st.done}/${st.total}</span>
            ${CHEVRON_SVG}
          </div>
        </div>

        <div class="curriculum-tree">
          ${item.modules
            .map((mod) => {
              const modIds = (mod.lessons || []).map((l) => l.id);
              const mst = statsFor(modIds);
              const modDone = mst.total > 0 && mst.done === mst.total;
              return `
              <div class="module-group">
                <div class="module-header" data-toggle-batch="${modIds.join(",")}">
                  <div class="module-header-left">
                    <span class="check-box ${modDone ? "is-checked" : ""}">${CHECK_SVG}</span>
                    <span class="module-name">${esc(mod.title)}</span>
                  </div>
                  <span class="module-count">${mst.done}/${mst.total}</span>
                </div>
                <div class="lesson-list">
                  ${(mod.lessons || [])
                    .map((lesson) => {
                      const lDone = !!state.completed[lesson.id];
                      return `
                      <div class="lesson-row ${lDone ? "is-checked" : ""}" data-toggle-id="${lesson.id}">
                        <span class="check-box ${lDone ? "is-checked" : ""}">${CHECK_SVG}</span>
                        <span class="lesson-name">${esc(lesson.title)}</span>
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
      </div>
    `;
  }

  function render() {
    applyTheme();

    const allIds = getAllLeafIds();
    const globalStats = statsFor(allIds);

    const topFill = document.getElementById("top-progress-fill");
    if (topFill) topFill.style.width = `${globalStats.pct}%`;

    const globalReadout = document.getElementById("global-stat-readout");
    if (globalReadout) {
      globalReadout.innerHTML = `<strong>${globalStats.done}</strong> / ${globalStats.total} completed (${globalStats.pct}%)`;
    }

    const focusBtn = document.getElementById("btn-focus");
    if (focusBtn) {
      focusBtn.setAttribute("aria-pressed", state.focusMode ? "true" : "false");
    }

    // Path strip
    const pathStrip = document.getElementById("path-strip");
    if (pathStrip) {
      pathStrip.innerHTML = DATA.phases
        .map((phase) => {
          const pst = statsFor(getPhaseLeafIds(phase));
          return `
          <a href="#${phase.id}" class="path-cell">
            <div class="path-cell-top">
              <span>${phase.timing}</span>
              <span>${pst.pct}%</span>
            </div>
            <div class="path-cell-title">${phase.title.replace("Phase ", "")}</div>
            <div class="path-cell-bar">
              <div class="path-cell-bar-fill" style="width: ${pst.pct}%"></div>
            </div>
          </a>
        `;
        })
        .join("");
    }

    // Milestones
    const msList = document.getElementById("milestones-list");
    const msCount = document.getElementById("milestones-count");
    if (msList) {
      const mst = statsFor(DATA.milestones.map((m) => m.id));
      if (msCount) msCount.textContent = `${mst.done} / ${mst.total}`;
      msList.innerHTML = DATA.milestones
        .map((m) => {
          const checked = !!state.completed[m.id];
          return `
          <div class="check-row ${checked ? "is-checked" : ""}" data-toggle-id="${m.id}">
            <span class="check-box ${checked ? "is-checked" : ""}">${CHECK_SVG}</span>
            <span class="check-label ${checked ? "is-checked" : ""}">${m.title}</span>
          </div>
        `;
        })
        .join("");
    }

    // Principles
    const principlesList = document.getElementById("principles-list");
    if (principlesList) {
      principlesList.innerHTML = DATA.principles
        .map((p) => {
          const content = p.list
            ? `<ul class="principle-sublist">${p.list.map((li) => `<li>${li}</li>`).join("")}</ul>`
            : `<div class="principle-desc">${p.body}</div>`;
          return `
          <div class="principle-row">
            <div class="principle-term">${p.title}</div>
            ${content}
          </div>
        `;
        })
        .join("");
    }

    // Phases
    const phasesContainer = document.getElementById("phases");
    if (phasesContainer) {
      phasesContainer.innerHTML = DATA.phases
        .map((phase, idx) => {
          const pIds = getPhaseLeafIds(phase);
          const pst = statsFor(pIds);
          const isUnlocked = !state.focusMode || idx === 0 || !!state.unlockedPhases[phase.id];

          let packagesHtml = "";
          if (phase.packagesTable) {
            packagesHtml = `
              <div class="subsection-block">
                <div class="subsection-title">Packages</div>
                <table class="data-table">
                  <thead>
                    <tr><th>Tier</th><th>What’s in it</th></tr>
                  </thead>
                  <tbody>
                    ${phase.packagesTable.map((row) => `<tr><td>${row.tier}</td><td>${row.details}</td></tr>`).join("")}
                  </tbody>
                </table>
              </div>
            `;
          }

          return `
          <article id="${phase.id}" class="phase-section">
            <div class="phase-header">
              <h2 class="phase-title">${phase.title}</h2>
              <span class="phase-progress-meta">${pst.done} / ${pst.total} completed · ${pst.pct}%</span>
            </div>
            <div class="phase-submeta">${phase.meta}</div>

            ${
              !isUnlocked
                ? `
              <div class="locked-notice">
                <span>Hidden until previous phase project is published.</span>
                <button type="button" class="control-btn" data-unlock-phase="${phase.id}">Show Phase</button>
              </div>
            `
                : `
              ${phase.note ? `<div class="phase-note">${phase.note}</div>` : ""}
              ${(phase.sections || [])
                .map(
                  (sec) => `
                <div class="subsection-block">
                  <div class="subsection-title">${sec.heading}</div>
                  <div>
                    ${(sec.items || []).map((item) => renderCheckableItem(item)).join("")}
                  </div>
                </div>
              `
                )
                .join("")}
              ${packagesHtml}
            `
            }
          </article>
        `;
        })
        .join("");
    }

    // Marketing & Sales Track
    const mtContainer = document.getElementById("marketing-track");
    if (mtContainer) {
      const mt = DATA.marketingTrack;
      mtContainer.innerHTML = `
        <h2 class="major-title">${mt.title}</h2>
        <div class="phase-submeta">${mt.stagesFlow}</div>

        <div class="track-meta-grid">
          <div class="track-meta-cell"><p>${mt.why}</p></div>
          <div class="track-meta-cell"><p>${mt.when}</p></div>
          <div class="track-meta-cell"><p>${mt.method}</p></div>
        </div>

        <div class="stages-list">
          ${mt.stages
            .map(
              (stage) => `
            <div class="stage-block">
              <h3 class="stage-title">${stage.title}</h3>
              <p class="stage-subtitle">${stage.subtitle}</p>
              <div>
                ${stage.items.map((item) => renderCheckableItem(item)).join("")}
              </div>
            </div>
          `
            )
            .join("")}
        </div>
      `;
    }

    // Studio Services & Scope
    const stContainer = document.getElementById("studio-scope");
    if (stContainer) {
      const st = DATA.studio;
      stContainer.innerHTML = `
        <h2 class="major-title">${st.title}</h2>
        <blockquote class="pullout-axiom">
          <p>“${st.rule}”</p>
          <footer>${st.principle}</footer>
        </blockquote>

        <div class="studio-grid">
          <div>
            <div class="subsection-title">Core service — A fast marketing website for a local business</div>
            <ul class="plain-list">
              ${st.coreService.map((c) => `<li>${c}</li>`).join("")}
            </ul>

            <div class="subsection-title" style="margin-top:2rem;">Packages</div>
            <table class="data-table">
              <thead>
                <tr><th>Tier</th><th>What’s in it</th></tr>
              </thead>
              <tbody>
                ${st.packages.map((p) => `<tr><td>${p.tier}</td><td>${p.what}</td></tr>`).join("")}
              </tbody>
            </table>

            <div class="subsection-title" style="margin-top:2rem;">Working rules</div>
            <div>
              ${st.workingRules.map((r) => renderCheckableItem(r)).join("")}
            </div>
          </div>

          <div>
            <div class="subsection-title">Add-ons (sold separately)</div>
            <table class="data-table">
              <thead>
                <tr><th>Add-on</th><th>What it includes</th></tr>
              </thead>
              <tbody>
                ${st.addons.map((a) => `<tr><td>${a.name}</td><td>${a.includes}</td></tr>`).join("")}
              </tbody>
            </table>

            <div class="subsection-title" style="margin-top:2rem;">Out of scope</div>
            <ul class="plain-list">
              ${st.outOfScope.map((o) => `<li>${o}</li>`).join("")}
            </ul>
          </div>
        </div>
      `;
    }
  }

  // Event delegation
  document.addEventListener("click", (e) => {
    const batchEl = e.target.closest("[data-toggle-batch]");
    if (batchEl) {
      e.stopPropagation();
      const ids = batchEl.getAttribute("data-toggle-batch").split(",").filter(Boolean);
      const allDone = ids.every((id) => state.completed[id]);
      ids.forEach((id) => {
        if (allDone) delete state.completed[id];
        else state.completed[id] = true;
      });
      saveState();
      render();
      return;
    }

    const singleEl = e.target.closest("[data-toggle-id]");
    if (singleEl) {
      e.stopPropagation();
      const id = singleEl.getAttribute("data-toggle-id");
      if (state.completed[id]) delete state.completed[id];
      else state.completed[id] = true;
      saveState();
      render();
      return;
    }

    const openEl = e.target.closest("[data-toggle-open]");
    if (openEl) {
      const id = openEl.getAttribute("data-toggle-open");
      state.openCourses[id] = !state.openCourses[id];
      saveState();
      const domItem = document.getElementById(`item-${id}`);
      if (domItem) domItem.classList.toggle("is-open", !!state.openCourses[id]);
      else render();
      return;
    }

    const unlockEl = e.target.closest("[data-unlock-phase]");
    if (unlockEl) {
      const phaseId = unlockEl.getAttribute("data-unlock-phase");
      state.unlockedPhases[phaseId] = true;
      saveState();
      render();
    }
  });

  document.addEventListener("DOMContentLoaded", () => {
    const focusBtn = document.getElementById("btn-focus");
    if (focusBtn) {
      focusBtn.addEventListener("click", () => {
        state.focusMode = !state.focusMode;
        saveState();
        render();
      });
    }

    const expandBtn = document.getElementById("btn-expand");
    if (expandBtn) {
      expandBtn.addEventListener("click", () => {
        const allCourseIds = [];
        DATA.phases.forEach((p) =>
          (p.sections || []).forEach((s) =>
            (s.items || []).forEach((i) => {
              if (i.modules) allCourseIds.push(i.id);
            })
          )
        );
        DATA.marketingTrack.stages.forEach((st) =>
          (st.items || []).forEach((i) => {
            if (i.modules) allCourseIds.push(i.id);
          })
        );
        const allOpen = allCourseIds.every((id) => state.openCourses[id]);
        allCourseIds.forEach((id) => {
          state.openCourses[id] = !allOpen;
        });
        expandBtn.setAttribute("aria-pressed", !allOpen ? "true" : "false");
        saveState();
        render();
      });
    }

    const themeBtn = document.getElementById("btn-theme");
    if (themeBtn) {
      themeBtn.addEventListener("click", () => {
        state.theme = state.theme === "dark" ? "light" : "dark";
        saveState();
        render();
      });
    }

    render();
  });
})();
