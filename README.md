# MacBook Landing Page

An immersive and interactive product landing page inspired by Apple's design philosophy, built using **React**, **Vite**, **Tailwind CSS**, **GSAP**, **React Three Fiber**, and **Three.js**.

The project combines smooth scroll-based animations, 3D product visualization, responsive design, and modern frontend development practices to create a premium user experience.

---

## Overview

This project recreates a modern Apple-style product showcase website featuring:

* Interactive 3D MacBook model
* Smooth scroll-triggered animations
* Responsive layouts
* Product feature highlights
* Video showcase sections
* Performance-focused rendering

The primary goal was to explore advanced frontend concepts such as 3D rendering, animation orchestration, and interactive user experiences.

---

## Features

### 3D Product Visualization

* Interactive MacBook 3D model
* Real-time model rendering
* Smooth user interactions
* Camera-controlled viewing experience

### Scroll-Based Animations

* GSAP animations
* ScrollTrigger integration
* Section reveal effects
* Smooth transitions between content blocks

### Responsive Design

* Mobile-first layout
* Tablet support
* Desktop optimization
* Adaptive content positioning

### Product Showcase

* Feature highlights
* Product specifications
* Marketing sections
* Interactive storytelling experience

---

## Tech Stack

### Frontend

* React
* Vite
* JavaScript

### Styling

* Tailwind CSS

### Animation

* GSAP
* ScrollTrigger

### 3D Graphics

* Three.js
* React Three Fiber
* Drei

### State Management

* Zustand

---

## Architecture

```text
User Interaction
       │
       ▼
React Components
       │
       ▼
GSAP Animation Layer
       │
       ▼
React Three Fiber
       │
       ▼
Three.js Renderer
       │
       ▼
WebGL
```

---

## Key Technologies Explained

### React

React is used to build reusable UI components and manage application state.

Examples:

* Navbar
* Hero Section
* Features Section
* Model Viewer
* Footer

---

### GSAP

GSAP powers the smooth animations throughout the application.

Used for:

* Scroll-based animations
* Section transitions
* Element reveals
* Product showcase effects

Example:

```javascript
gsap.from(".title", {
  opacity: 0,
  y: 100,
  duration: 1,
});
```

---

### ScrollTrigger

ScrollTrigger synchronizes animations with scrolling.

Benefits:

* Better storytelling
* Interactive user experience
* Smooth section transitions

Example:

```javascript
ScrollTrigger.create({
  trigger: ".section",
  start: "top center",
});
```

---

### Three.js

Three.js is responsible for rendering the 3D MacBook model using WebGL.

Responsibilities:

* Lighting
* Materials
* Camera setup
* Rendering pipeline

---

### React Three Fiber

React Three Fiber provides a React-based abstraction over Three.js.

Benefits:

* Declarative syntax
* Component-based architecture
* Easier integration with React

Example:

```jsx
<Canvas>
  <Model />
</Canvas>
```

---

### Zustand

Zustand is used for lightweight global state management.

Responsibilities:

* Product state
* Model configuration
* UI interactions

Benefits:

* Minimal boilerplate
* Simple API
* High performance

---

## Project Structure

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Features.jsx
│   ├── Showcase.jsx
│   ├── Footer.jsx
│
├── models/
│   ├── MacBook.jsx
│
├── store/
│   ├── useStore.js
│
├── constants/
│
├── assets/
│
├── App.jsx
└── main.jsx
```

---

## Performance Optimizations

### Lazy Loading

* Reduces initial bundle size
* Improves load performance

### Component Reusability

* Modular architecture
* Easier maintenance

### Efficient Animations

* Hardware-accelerated transforms
* Optimized GSAP timelines

### Lightweight State Management

* Zustand minimizes unnecessary re-renders

---

## Getting Started

### Clone Repository

```bash
git clone <repository-url>
```

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

---

## Challenges Solved

* Integrating 3D models into a React application
* Synchronizing animations with scrolling
* Managing application state efficiently
* Maintaining responsiveness across devices
* Optimizing rendering performance for smooth interactions

---

## What I Learned

* React component architecture
* GSAP animation workflows
* ScrollTrigger integration
* React Three Fiber fundamentals
* Three.js rendering concepts
* Zustand state management
* Performance optimization techniques

---

## Future Improvements

* Dark/Light theme support
* Advanced model interactions
* Product customization options
* Additional animation sequences
* Performance profiling and optimization

---

## Author

**Trishna K**

Integrated M.Tech Software Engineering
VIT-AP University

Frontend Developer passionate about creating immersive, performant, and visually engaging web experiences.
