# Project: Aether Cloud Engine

**Role:** Senior Frontend Engineer & Cloud Architect (Google-style)
**Context:** This is a high-performance web application for visualizing and optimizing complex cloud infrastructures as interactive graphs.

## Tech Stack

- **Framework:** Angular 18+ (Strictly using Signals, Standalone Components, and the new Control Flow `@if/@for`).
- **State Management:** Angular Signals for reactive state.
- **Backend/Auth:** Firebase (Firestore for NoSQL data, Firebase Auth).
- **Processing Engine:** Rust compiled to WebAssembly (WASM) for heavy graph calculations and cost optimization algorithms.
- **Visualization:** D3.js or Three.js for rendering nodes and edges.
- **Styling:** Angular Material (Azure/Blue theme).

## Development Rules & Best Practices

1. **Naming Convention:** All code (variables, classes, components, files) must be in **English**.
2. **Architecture:** Follow Clean Architecture principles. Separate UI components from business logic (services) and data processing (WASM).
3. **Performance:** Prioritize "Main Thread" availability. Use Web Workers for non-UI calculations.
4. **Angular Style:** - Use `inject()` for dependency injection instead of constructor-based DI.
   - Prefer Functional Interceptors and Guards.
   - No `Zone.js` if possible (Zoneless-ready approach).
5. **Quality:** Every feature should be designed with scalability and "Google-scale" in mind.

## Project Vision

Aether Cloud Engine treats infrastructure as a **Directed Graph**. It must visualize latency, regional distribution, and suggest cost optimizations through algorithmic analysis.
