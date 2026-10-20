# Marketing Websites Freelancer — Interactive Roadmap (`roadmap`)

An interactive, single-page developer & freelancer roadmap inspired by **21st.dev / Linear / Aceternity UI** aesthetics. Built for **AHKH Studio** to track the complete path to building fast, high-converting marketing websites for local businesses (clinics, restaurants, gyms, shops).

## ✨ Key Features

- **Literal Curriculum Breakdown**: Every course, book, and official tutorial is broken down into its real-world **Modules, Chapters, and Individual Lessons** with durations and direct links.
- **Browser `localStorage` Persistence**: Every lesson, module, course, milestone, project deliverable, Local SEO item, and studio rule is saved automatically in your browser's `localStorage` (`ahkh_marketing_freelancer_roadmap_v1`), along with personal study notes per course.
- **Code-First Editable Architecture**: All roadmap content lives in one clean file (`data/roadmap-data.js`). Any future changes to the roadmap only require editing `data/roadmap-data.js`.
- **Focus Mode vs. Explorer Mode**: Toggle between strict **Focus Mode** (locks future phases until the previous phase's project is published) and **Explorer Mode** (view and check anything across all phases).
- **Bilingual Experience (`EN + عربي` / `عربي فقط` / `English Only`)**: Instant toggle in the top command bar.
- **Command Palette (`Ctrl + K`)**: Instant search across all courses, books, modules, and 200+ lessons.
- **JSON Backup & Restore**: Export or import your `localStorage` progress anytime.

## 📁 Project Structure

```text
roadmap/
├── index.html              # Single-page interactive application shell
├── data/
│   └── roadmap-data.js     # Single source of truth for all phases, modules & lessons
├── styles/
│   └── main.css            # 21st.dev spotlight cards, aurora canvas & dark UI tokens
├── scripts/
│   └── app.js              # LocalStorage state engine, progress calculator & search
└── docs/                   # Project scope, architecture & ADR documentation
```
