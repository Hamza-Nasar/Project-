# BOXpad - Premium CRM Support Dashboard

BOXpad is a high-performance, aesthetically premium CRM support dashboard built with **React**, **TypeScript**, and **Vite**. It features a modern 4-column layout, advanced loading states, and a clean UI aligned with the provided Figma designs.

## 🚀 Key Features

- **Full-Width Workspace**: Responsive 4-column grid (Sidebar | Conversation List | Chat Panel | Details Panel) that expands to fill the entire screen.
- **Figma-Aligned UI**: Pixel-perfect implementation of the "BOXpad" design, including:
  - Lavender/Purple outgoing chat bubbles.
  - Custom SVG-based Loading Screen with a glowing orb and honeycomb animations.
  - Yellow/Amber notes section in the Details Panel.
  - WhatsApp/Instagram channel branding.
- **Live API Integration**: Powered by `dummyjson.com` for users, comments, and posts, with a custom service layer for data mapping and overrides.
- **Advanced State Management**: Built-in loading stage with minimum display duration for visual consistency and error/retry flows.

## 🛠️ Technology Stack

- **Framework**: [React 19](https://reactjs.org/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) + Vanilla CSS (Modern CSS variables, Flexbox, and CSS Grid)
- **Icons**: Custom SVG icons for precision and lightweight performance.

## 📂 Project Structure

```text
Project-/
├── app/                  # Main application source
│   ├── src/
│   │   ├── components/   # Modular UI components (TopBar, Sidebar, etc.)
│   │   ├── services/     # API service layer (dashboardApi.ts)
│   │   ├── App.tsx       # Main layout and state orchestration
│   │   ├── App.css       # Core design system and styling tokens
│   │   └── types.ts      # TypeScript interfaces
│   ├── public/           # Static assets
│   └── package.json      # Dependencies and scripts
└── .gitignore            # Git exclusion rules
```

## 🏁 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Navigate to the `app` directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173/`.

## 🎨 Design System

The project uses a custom design system defined in `App.css`, focusing on:
- **Typography**: Plus Jakarta Sans for a modern, clean look.
- **Color Palette**: Deep navy gradients for the shell and light grays/whites for the workspace.
- **Glassmorphism**: Subtle borders and shadows to create depth.

### Tailwind CSS Setup

Tailwind CSS is configured for this project with:

**Installation:**
```bash
npm install -D tailwindcss postcss autoprefixer
```

**Configuration Files:**
- `tailwind.config.js` - Main Tailwind configuration with theme extensions
- `postcss.config.js` - PostCSS configuration for processing Tailwind CSS

**Usage:**
The Tailwind CSS directives are included in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

You can now use Tailwind utility classes throughout your components:
```jsx
<div className="flex items-center justify-between bg-blue-50 p-4 rounded-lg">
  <span className="text-lg font-semibold">Hello World</span>
</div>
```

## 📝 Customization & Overrides

The application includes a custom data override layer in `src/services/dashboardApi.ts`. This allows you to map raw API data to specific Figma-required names and emails (e.g., overriding dummy names with `Olivia Mckinsey` and her corresponding details).

---

Developed for the **Front-End Assessment** project.
