# Favlogix Front-End Assessment

React + TypeScript implementation of a CRM-style support workspace based on the provided assessment PDF and accessible Figma preview.

## Stack
- React 19
- TypeScript (strict)
- Vite
- Plain CSS (tokenized with CSS custom properties)

## What is implemented
- Modular UI architecture with reusable components:
  - `TopBar`
  - `Sidebar` (conversation queue)
  - `ConversationPane` (chat thread)
  - `DetailsPanel` (contact/case info)
  - `LoadingScreen` (animated loading state)
- API integration (mandatory):
  - `https://dummyjson.com/users`
  - `https://dummyjson.com/comments`
  - `https://dummyjson.com/posts`
- Loading state with minimum display duration for visual consistency
- Error + retry flow when API loading fails
- Search/filter over conversations
- Responsive behavior for desktop/tablet/mobile

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
npm run preview
```

## Assumptions
- The Figma file comments/tasks were not programmatically accessible from this environment (authentication/permission boundary), so exact comment-level interactions were inferred from the visible design preview and assessment PDF.
- Real-time messaging behavior was not requested in the accessible requirements, so thread content is derived from public dummy APIs and mapped into a CRM conversation model.

## Project structure
```text
src/
  components/
    ConversationPane.tsx
    DetailsPanel.tsx
    LoadingScreen.tsx
    Sidebar.tsx
    TopBar.tsx
  services/
    dashboardApi.ts
  App.tsx
  App.css
  index.css
  types.ts
```
