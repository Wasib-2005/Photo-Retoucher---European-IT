# Photo Retoucher - European IT 

A modern web application built for photo retouching and image comparison, powered by React 19, Vite, Tailwind CSS, and Flowbite React.

## Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) & [Flowbite React](https://flowbite-react.com/)
- **Components:** [React Compare Slider](https://github.com/nerdtechi/react-compare-slider), `rc-slider`
- **Typography:** `@fontsource-variable/roboto-flex`
- **Quality & Performance:** ESLint 10, React Compiler (`babel-plugin-react-compiler`)

---

## Getting Started

Follow these steps to get your local development environment up and running.

### Prerequisites

Make sure you have **Node.js** (v18.0.0 or higher recommended) and a package manager installed.

### Installation

1. Clone or download the repository, then navigate to the project directory:
   ```bash
   cd photo-retoucher---european-it
   ```

2. Install the project dependencies:
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

---

## Available Scripts

In the project directory, you can run the following commands:

### `npm run dev`
Starts the local development server with Vite Hot Module Replacement (HMR).
> Open [http://localhost:5173](http://localhost:5173) in your browser to view it.

### `npm run build`
Builds and optimizes the app for production into the `dist` directory.

### `npm run preview`
Locally previews the production build created in the `dist` folder.

### `npm run lint`
Runs ESLint to inspect your code for warnings, formatting issues, and syntax errors.

---

## Key Features & Components

- **Image Comparison:** Integrated with `react-compare-slider` to allow interactive before/after photo retouching previews.
- **Custom Sliders:** Integrated with `rc-slider` for granular retouching controls (e.g., contrast, brightness, or exposure adjustments).
- **Tailwind CSS v4 & Flowbite:** Modern UI component styling using the Vite Tailwind plugin.