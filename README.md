# The Hipkinsey Wedding Website

A beautiful single-page wedding website built with React, TypeScript, and Tailwind CSS.

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn


### Development

To run the development server:

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in the browser.

### Building for Production

```bash
npm run build
```

### Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the main branch
3. Enable GitHub Pages in your repository settings
4. The GitHub Action will automatically deploy your site

## Features

- Responsive design for mobile and desktop
- Elegant pastel color scheme
- Three main sections: Landing Page, Our Story, and FAQ
- Accordion-style FAQ section
- Optimized for performance and accessibility

## Technology Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS v3
- **Build Tool**: Vite
- **UI Components**: Radix UI (for accordion)
- **Icons**: Lucide React
- **Deployment**: GitHub Pages with GitHub Actions

## Project Structure

```
src/
├── components/
│   ├── FAQ.tsx           # FAQ section with accordion
│   ├── LandingPage.tsx   # Main landing page
│   ├── Navigation.tsx    # Navigation component
│   ├── OurStory.tsx      # Our story section
│   ├── figma/
│   │   └── ImageWithFallback.tsx
│   └── ui/
│       ├── accordion.tsx # Accordion component
│       └── utils.ts      # Utility functions
├── styles/
│   └── globals.css       # Global styles and Tailwind imports
├── App.tsx               # Main application component
└── main.tsx              # Application entry point
```

## Customization

- **Colors**: Update the color palette in `tailwind.config.ts`
- **Typography**: Modify font imports in `globals.css` and `index.html`
- **Content**: Edit the content in individual component files
- **Styling**: Customize styles using Tailwind classes

## License

This project is private and intended for personal use only.


Frank Kinsey 2025.