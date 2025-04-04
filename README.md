# Vue-Nuxt-Firebase-Vitesse Template

A modern, production-ready template combining Vue 3, Nuxt 3, Firebase, and Vitesse's configuration for rapid application development.

## Features

- ⚡️ [Vue 3](https://v3.vuejs.org/) with [Vite](https://vitejs.dev/)
- 🏗️ [Nuxt 3](https://v3.nuxtjs.org/) - SSR, file-based routing, components auto-importing
- 🔥 [Firebase](https://firebase.google.com/) - Authentication, Firestore, Storage, Cloud Functions
- 📦 [VueFire](https://vuefire.vuejs.org/) - Firebase integration for Vue/Nuxt
- 🏷️ [TypeScript](https://www.typescriptlang.org/) - Type safe development
- 📱 [PWA](https://web.dev/progressive-web-apps/) support via [Nuxt PWA module](https://pwa.nuxtjs.org/) 
- 🎨 [UnoCSS](https://github.com/unocss/unocss) - The instant on-demand atomic CSS engine
- 📲 [Pinia](https://pinia.vuejs.org/) - Intuitive, type safe store for Vue
- 🌎 [I18n](https://i18n.nuxtjs.org/) ready
- 🧩 [Auto import components](https://github.com/antfu/unplugin-vue-components)
- 🦾 [Auto import composables and APIs](https://github.com/antfu/unplugin-auto-import)
- 📝 [ESLint](https://eslint.org/) - Code linting with Vue 3 and TypeScript support
- 🧪 [Vitest](https://vitest.dev/) - Unit testing solution powered by Vite

## Quick Start

### Prerequisites
- Node.js (v16 or later recommended)
- Git
- Firebase project

### Installation

1. Clone this repository
```bash
npx nuxi init my-project -t leddits/vue-nuxt-firebase-vitesse-template
```

2. Go to your project folder
```bash
cd my-project
```

3. Install dependencies
```bash
npm install
```

4. Configure Firebase

Create a `.env` file in the root of your project and add your Firebase configuration:

```
FIREBASE_API_KEY=your-api-key
FIREBASE_AUTH_DOMAIN=your-project.firebaseapp.com
FIREBASE_PROJECT_ID=your-project-id
FIREBASE_STORAGE_BUCKET=your-project.appspot.com
FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
FIREBASE_APP_ID=your-app-id
```

5. Start development server
```bash
npm run dev
```

## Project Structure

```
.
├── components/       # Vue components
├── composables/      # Composable functions
├── layouts/          # Layout components
├── pages/            # Route pages
├── public/           # Static assets
├── server/           # Server middleware and API endpoints
├── firebase/         # Firebase specific configuration and functions
│  └── firestore/     # Firestore rules and implementation
│  └── functions/     # Cloud Functions implementation
│  └── auth/          # Authentication helper functions
├── stores/           # Pinia stores
├── locales/          # i18n translation files
├── types/            # TypeScript type definitions
├── assets/           # Assets that will be imported
├── styles/           # Global and utility styles
├── utils/            # Utility functions
└── tests/            # Unit and E2E tests
```

## Firebase Integration

This template includes:

- Authentication:
  - Email/password authentication
  - Google, GitHub OAuth providers
  - User management and profile handling
  
- Firestore:
  - Pre-configured security rules
  - Composables for CRUD operations
  - TypeScript models for collections

- Storage:
  - Configured for user uploads
  - Security rules implementation

- Cloud Functions:
  - TypeScript support
  - Deployment configuration

## Development

### Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint with ESLint
npm run lint

# Run unit tests
npm run test

# Run Firebase emulators
npm run firebase:emulate

# Deploy Firebase configuration and functions
npm run firebase:deploy
```

## License

[MIT](./LICENSE) License © 2025