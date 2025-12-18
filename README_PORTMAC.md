# Portmac ✨

A small, responsive React app that provides a macOS-inspired web interface — ideal for interactive portfolios, demoing windowed UIs, and showcasing content like a resume or projects.

---

## 🚀 Overview

**Portmac** is a lightweight, Vite-powered React project that emulates a desktop-style experience in the browser. It includes a dock, windowed components (e.g., `Resume`, `Safari`, `Terminal`), and a minimal global store powered by `zustand` for UI state (window locations, open/close state, etc.).

## ✅ Key Features

- macOS-like Dock and window manager UI
- Multi-window components (Resume, Safari, Terminal) that can be opened from the dock
- Resume viewer powered by `react-pdf`
- Lightweight, simple global state using `zustand`
- Fast development with Vite and ESLint integration for code quality

## 💡 Use Cases

- Interactive personal portfolio or resume site
- UI/UX experiments for windowed desktop-like web apps
- Teaching/demo app for state management patterns in React
- Base template for building a web-based productivity/dashboard interface

## ✨ What makes it unique

- Focused small codebase that demonstrates a polished desktop UI without heavy dependencies
- `react-pdf` integrated to render a resume or other PDFs directly in the browser
- `zustand` keeps state logic minimal and easy to reason about compared to heavier stores
- Easy-to-extend component and window system for rapidly prototyping new windows or features

## 🔧 Tech Stack

- React (v19)
- Vite (dev server & build)
- Zustand (state management)
- react-pdf (PDF rendering)
- ESLint for linting and code quality

## 📦 Quick Start

1. Install dependencies

```bash
npm install
```

2. Start development server

```bash
npm run dev
```

3. Build for production

```bash
npm run build
```

4. Preview the production build

```bash
npm run preview
```

5. Lint the code

```bash
npm run lint
```

## 📁 Project Structure (highlight)

- `index.html` — app entry
- `src/` — source files
  - `components/` — UI pieces like `Dock`, `Navbar`, `Welcome`
  - `windows/` — window components such as `Resume.jsx`, `Safari.jsx`, `Terminal.jsx`
  - `store/` — global state (`location.js`, `window.js`)
  - `constants/` — app constants

## Contributing

Contributions are welcome! Suggested workflow:

1. Fork the repo and create a feature branch
2. Add or modify components/tests as needed
3. Run lint and ensure the app builds
4. Open a PR with a clear description of the change

## License

This project is provided as-is. Consider adding a `LICENSE` (e.g., MIT) if you plan to open-source.

## Contact

If you want help customizing this README or adding documentation for specific components, open an issue or reach out in the repository.

---

Happy hacking! ✨