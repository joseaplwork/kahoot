# Pokemon App

A responsive and interactive web application to explore and learn about various
Pokémon, built with React and deployed on GitHub Pages.  
Visit the app: [live demo](https://joseaplwork.github.io/kahoot/)

## Table of Contents

- [Requirements](#requirements)
- [Installation](#installation)
- [Features](#features)
- [Architecture](#architecture)
- [Challenges](#challenges)
- [Testing](#testing)

## Requirements

- Node.js (v20 or higher)
- npm (v10 or higher)
- If using nvm, it should automatically use v20 due to the `.nvmrc` file.

## Installation

To set up the Pokémon App locally, follow these steps:

1. **Clone the repository:**

```bash
  git clone https://github.com/joseaplwork/kahoot
  cd kahoot
```

2. **Install dependencies:**

```bash
  npm install
```

3. **Start the development server:**

```bash
  npm run dev
```

## Features

- **Pokemon List:** List of Pokémon with pagination and audio playback.
- **Pokemon Details:** Detailed stats, images, and sound.
- **Responsive Design:** Adaptable UI for various devices.
- **View States:** Loading, error, and empty states.
- **Theme Toggle:** Light and dark theme support.
- **State Persistence:** State is maintained through URL parameters.

## Architecture

- **Component Structure**: This structure colocates logic with its relevant
  components while promoting reusability through the `shared` directory. It
  enhances maintainability and modularity for future scalability.
  ```
  src/
  ├── pages/                     # Main entry points for app views
  │   ├── home/                  # Home page
  │   │   ├── components/        # Components for the home page
  │   │   ├── hooks/             # Custom hooks for the home page
  │   │   ├── constants/         # Constants for the home page
  │   │   ├── interfaces/        # Interfaces for the home page
  │   │   └── services/          # Business logic for the home page
  │   └── pokemon-detail/        # Detail page
  │       ├── components/        # Components for the detail page
  │       ├── hooks/             # Custom hooks for the detail page
  │       ├── constants/         # Constants for the detail page
  │       ├── interfaces/        # Interfaces for the detail page
  │       └── services/          # Business logic for the home page
  └── shared/                    # Reusable functionality for the app
      ├── components/            # Components used across the app
      ├── hooks/                 # Custom hooks used across the app
      ├── constants/             # Constants used across the app
      ├── interfaces/            # Interfaces used across the app
      └── services/              # Services and utilities used across the app
  ```
- **Data Flow**: The app follows a unidirectional data flow using custom hooks
  with URL persistence. URL query parameters and URL params are the source of
  truth, ensuring consistency across navigation and state management.
- **Routing and Navigation**: Utilizes React Router for seamless navigation and
  state persistence in the URL, enhancing user experience during navigation.
- **Separation of Concerns**: Divides functionality into view, controller, and
  service layers, maintaining clean architecture and scalability.
- **Performance Optimization**:Implements lazy loading for pages, pagination for
  the Pokémon list, on-demand audio resource loading, and efficient API requests
  using `AbortController` to enhance performance.
- **Scalability and Maintainability**: Follows a modular approach where logic
  resides close to its consumer, ensuring code readability and maintainability.
  Shared logic is centralized in the `shared` folder, embracing reusability and
  modularity. Consistent naming conventions, custom ESLint rules, and Prettier
  formatting ensure code quality and uniformity.
- **API Integration and State Management**: Leverages the
  [Pokemon API](https://pokeapi.co/) for data fetching. State management is
  achieved using custom hooks, with URL query parameters and params maintaining
  state consistency across navigation.
- **Build and Deployment**: Automated build and deployment on GitHub Pages using
  a GitHub Action triggered by pushes to the main branch.
- **Testing and Quality Assurance**:Utilizes Jest and React Testing Library for
  testing. Integration tests focus on component interactions and user flows,
  while unit tests ensure isolated functionality. Consistent testing maintains
  app stability and scalability.

## Challenges

- **Testing:** Prioritized testing the main functionality and shared logic to
  ensure stability and demonstrate integration,unit and component testing. Given
  more time, I would expand test coverage and include end-to-end tests to
  validate the app's main flow.
- **State Management:** Chose React hooks for state management due to the app's
  simplicity, avoiding the overhead of a state management library while
  maintaining readability and maintainability.
- **Design Architecture:** Ideally, pages would serve as layout containers with
  feature components handling presentation. For simplicity, pages act as
  containers while components are presentational, balancing modularity with
  development efficiency.
- **Performance Optimization:** Implemented pagination instead of infinite
  scroll due to API limitations and the requirement for sorting. This choice
  simplified the implementation while maintaining a responsive user experience.
- **API Integration:** Focused on core functionality, with potential to expand
  on additional API features like Pokémon moves and abilities to enhance user
  experience.

## Testing

**Run tests:**

```bash
  npm run test
```

**Run tests in watch mode:**

```bash
  npm run test:watch
```
