# React-Dev-Tool
React Dev Tool - Next.js Setup Guide

📌 Overview

This project is a React Dev Tool built using Next.js, TypeScript, and Tailwind CSS. If you have only the .tsx files and need to set up the project from scratch, follow the steps below.

🛠️ Prerequisites

Ensure you have the following installed:

Node.js (Recommended: v18 or later) → [Download](https://nodejs.org/en)

Git → [Download](https://git-scm.com/)

VS Code (Optional, but recommended) → [Download](https://code.visualstudio.com/)

📂 Project Setup

1️⃣ Create a New Next.js Project

If you do not have a package.json, tsconfig.json, or next.config.js, create a new Next.js project:

npx create-next-app@latest react-dev-tool --ts
cd react-dev-tool

2️⃣ Copy .tsx Files into the Project

Move all .tsx files into the appropriate folders:

react-dev-tool/
│── app/
│   ├── layout.tsx
│   ├── page.tsx
│── components/
│   ├── Inspector.tsx
│   ├── ComponentTree.tsx
│   ├── TailwindEditor.tsx
│   ├── VisualOverlay.tsx
│   ├── DemoElements.tsx
│── store/
│   ├── useInspectorStore.ts

Ensure all imports in page.tsx match the correct paths.

3️⃣ Install Dependencies

Run the following command to install Next.js, React, and TypeScript dependencies:

npm install next react react-dom typescript @types/react @types/node tailwindcss postcss autoprefixer

4️⃣ Configure Tailwind CSS

Initialize Tailwind CSS:

npx tailwindcss init -p

Modify tailwind.config.js:

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

Add Tailwind styles in app/globals.css:

@tailwind base;
@tailwind components;
@tailwind utilities;

5️⃣ Run the Development Server

npm run dev

The project should now be running at http://localhost:3000.

🚀 Features

Component Tree Inspection

Tailwind CSS Styling Editor

Live Element Interaction & Visualization

📖 Notes

If you get a 404 error, ensure app/page.tsx is correctly placed in the app/ directory.

Restart the server after modifying the folder structure using Ctrl + C and running npm run dev again.

🎯 Author

Rahul Naidu Boddeti.
