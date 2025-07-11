# TechCraft Website

A modern, responsive website built for TechCraft digital agency showcasing their services, portfolio, and expertise in web development, dashboards, mobile apps, and AI solutions.

## Features

-   **Modern Design**: Clean, professional layout with smooth animations
-   **Responsive**: Fully responsive design that works on all devices
-   **Interactive Sections**:
    -   Hero section with call-to-action
    -   About section with company information and stats
    -   Services showcase with tabbed interface
    -   Portfolio with filterable projects
    -   FAQ section with expandable questions
    -   Contact form with business information
-   **Smooth Animations**: GSAP-powered animations triggered on scroll
-   **Fast Performance**: Built with Vite for optimal loading speeds

## Tech Stack

-   **Frontend**: React 18
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS 3
-   **Animations**: GSAP with ScrollTrigger
-   **Icons**: Inline SVG icons
-   **Fonts**: Inter (Google Fonts)

## Getting Started

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd ai-admin-dashboard
```

2. Install dependencies

```bash
npm install
```

3. Start the development server

```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## Available Scripts

-   `npm run dev` - Start development server
-   `npm run build` - Build for production
-   `npm run preview` - Preview production build
-   `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Fixed navigation header
│   ├── HeroSection.jsx     # Main hero/landing section
│   ├── AboutSection.jsx    # Company information and stats
│   ├── ServicesSection.jsx # Services showcase with tabs
│   ├── PortfolioSection.jsx# Project portfolio with filters
│   ├── FAQSection.jsx      # Frequently asked questions
│   ├── ContactSection.jsx  # Contact form and information
│   └── Footer.jsx          # Footer with links and newsletter
├── App.jsx                 # Main app component
├── main.jsx               # Entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors

The website uses a grayscale color palette with Tailwind CSS. To customize colors, modify the `tailwind.config.js` file.

### Content

Update the content in each component file to match your business information:

-   Company name and branding
-   Services and descriptions
-   Portfolio projects
-   Contact information
-   FAQ questions and answers

### Animations

GSAP animations are configured in each component's `useEffect` hook. Modify the animation parameters to customize the effects.

## Deployment

1. Build the project:

```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

## Browser Support

-   Chrome (latest)
-   Firefox (latest)
-   Safari (latest)
-   Edge (latest)

## License

This project is licensed under the MIT License.

## Contact

For questions or support, please contact the development team.+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

-   [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
-   [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
