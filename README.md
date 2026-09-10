Here is a structured `README.md` tailored for your GitHub repository.

---

# Aaditya Raj - Dynamic Portfolio & Engineering Showcase

A responsive, interactive, and customizable portfolio application built with **React**, **Tailwind CSS**, and **Lucide Icons**. This web application acts as a personal developer dashboard, featuring dynamic project filtering, interactive skill metrics, state management, and real-time JSON configuration import/export capabilities.

---

## 🛠 Tech Stack

* **Frontend Framework:** React (ES6+, Hooks, Functional Components)
* **Styling:** Tailwind CSS
* **Icons:** Lucide React (`lucide-react`)
* **State Persistence:** Web Storage API (`localStorage`)

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed on your local machine:

* [Node.js](https://nodejs.org/) (v16.0.0 or higher)
* [npm](https://www.npmjs.com/) (v8.0.0 or higher) or [yarn](https://yarnpkg.com/)

### Installation & Local Setup

1. **Clone the repository:**
```bash
git clone https://github.com/aadityaraj-dev/portfolio-dashboard.git
cd portfolio-dashboard

```


2. **Install dependencies:**
```bash
npm install
# or
yarn install

```


3. **Start the development server:**
```bash
npm start
# or
yarn start

```


4. **Open in browser:**
Navigate to `http://localhost:3000` to view the application live.

---

## 📦 Package Structure

```text
portfolio-dashboard/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── assets/              # Static images, media, and SVGs
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header & dynamic tabs
│   │   ├── ProfileCard.jsx  # Personal bio and contact actions
│   │   ├── SkillBar.jsx     # Visual skill progress indicator
│   │   ├── ProjectCard.jsx  # Interactive project showcase cards
│   │   ├── ProjectModal.jsx # Detailed project detail modal
│   │   └── SettingsModal.jsx# Import/Export state & reset menu
│   ├── data/
│   │   └── initialData.js   # Fallback configuration JSON object
│   ├── App.jsx              # Main application logic & state orchestrator
│   ├── index.css            # Tailwind directives & global styling
│   └── index.js             # React DOM entry point
├── .gitignore
├── package.json             # Project dependencies and script runner
├── tailwind.config.js       # Tailwind configuration file
└── README.md                # Project documentation

```

---

## 💡 Algorithm & Architecture Logic

The portfolio engine operates around an efficient, reactive data pipeline ensuring fast rendering, persistence, and state updates.

### 1. Persistent State Initialization Algorithm

```text
Step 1: Check localStorage for existing JSON payload ('aaditya_portfolio_data').
Step 2: If payload exists -> Parse JSON and hydrate React state.
Step 3: If payload is null/invalid -> Load fallback state from `initialData.js`.
Step 4: Attach a side-effect (useEffect) to continuously sync state changes back to localStorage.

```

### 2. Multi-Criteria Dynamic Search & Filtering Matrix

The application uses computed memoization (`useMemo`) to compute active project lists, minimizing unnecessary re-renders:

$$\text{Filtered Projects} = \{ p \in \text{Projects} \mid (p.\text{category} = \text{Filter} \lor \text{Filter} = \text{"All"}) \land (p.\text{title} \cup p.\text{tech} \text{ contains } \text{SearchQuery}) \}$$

```javascript
const filteredProjects = useMemo(() => {
  return data.projects.filter((project) => {
    const matchesCategory =
      projectFilter === 'All' || project.category === projectFilter;
    const matchesSearch =
      project.title.toLowerCase().includes(projectSearch.toLowerCase()) ||
      project.tech.some((t) =>
        t.toLowerCase().includes(projectSearch.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });
}, [data.projects, projectFilter, projectSearch]);

```

### 3. State Import/Export Pipeline

* **Exporting Configuration:** Serializes current state using `JSON.stringify(data, null, 2)` into a downloadable `.json` file stream via dynamic Blob URL.
* **Importing Configuration:** Parses user-uploaded file using `FileReader API`, validates schema fields (`profile`, `skills`, `projects`), updates local state, and refreshes the dashboard UI dynamically.

---

## 🔁 Reproducing Results & Customization

To customize this portfolio with your own personal details, projects, and skill sets:

### Option A: Edit Source Data directly

1. Open `src/data/initialData.js` (or `App.jsx`).
2. Replace the contents of `initialData` object with your custom information:
```javascript
const initialData = {
  profile: {
    name: "Your Name",
    title: "Your Title",
    // ... additional fields
  },
  skills: [...],
  projects: [...]
};

```


3. Save the file and restart the development server.

### Option B: Use the Settings Menu (In-App JSON Editor)

1. Launch the application in your browser.
2. Click the **Settings / Reset** icon in the upper right header.
3. Export the current schema as JSON, modify the JSON fields locally in any code editor, and re-upload it directly into the app using the **Upload / Import JSON** button.
4. Click **Reset to Defaults** anytime to purge local storage and restore original seed data.

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.
