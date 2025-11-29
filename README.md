# Venus Dating Agency

Modern dating agency website built with React and Material-UI.

![version](https://img.shields.io/badge/version-1.0.0-blue.svg)
[![GitHub issues](https://img.shields.io/github/issues/lysanenkovika-cloud/venus-date.svg)](https://github.com/lysanenkovika-cloud/venus-date/issues)

## About

Venus Dating Agency is a professional dating service website featuring modern design and responsive layout. The application provides information about services, team, gallery, blog, and contact functionality.

## Features

- **Responsive Design** - Fully responsive layout that works on all devices
- **Multi-language Support** - Built-in internationalization (i18n) using react-i18next
- **Modern UI** - Beautiful Material-UI components and custom styling
- **Blog System** - Dynamic blog with individual post pages
- **Gallery** - Image gallery showcase
- **Contact Form** - Integrated contact form with Web3Forms
- **Security** - hCaptcha integration for form protection

## Tech Stack

- **React 18.2.0** - Frontend framework
- **Material-UI (MUI) 5.12.0** - UI component library
- **React Router 6.10.0** - Navigation and routing
- **i18next** - Internationalization framework
- **Emotion** - CSS-in-JS styling
- **Web3Forms** - Contact form backend
- **hCaptcha** - Security and spam protection

## Project Structure

```
venus-date/
├── public/                 # Static files
├── src/
│   ├── assets/            # Images, themes, styles
│   │   ├── images/        # Project images
│   │   └── theme/         # MUI theme configuration
│   ├── components/        # Reusable components
│   │   ├── MKBox/
│   │   ├── MKButton/
│   │   ├── MKTypography/
│   │   ├── HeroVideoBackground.jsx
│   │   └── LanguageSwitcher.jsx
│   ├── examples/          # Example components
│   │   ├── Cards/
│   │   ├── Navbars/
│   │   └── Footers/
│   ├── layouts/           # Page layouts
│   │   └── pages/
│   │       └── landing-pages/
│   │           ├── about-us/
│   │           ├── blog/
│   │           ├── gallery/
│   │           ├── services/
│   │           └── contact-us/
│   ├── pages/             # Page components
│   │   └── LandingPages/
│   │       ├── AboutUs/
│   │       ├── Blog/
│   │       ├── Gallery/
│   │       ├── Services/
│   │       └── ContactUs/
│   ├── App.js             # Main application component
│   ├── index.js           # Application entry point
│   ├── routes.js          # Route definitions
│   ├── footer.routes.js   # Footer navigation
│   └── i18n.js            # Internationalization config
├── genezio.yaml           # Genezio deployment config
└── package.json
```

## Getting Started

### Prerequisites

- Node.js LTS version (Download from [nodejs.org](https://nodejs.org/))
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/lysanenkovika-cloud/venus-date.git
cd venus-date
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create environment file:
```bash
cp .env.example .env
```

4. Configure your environment variables in `.env` file

### Development

Start the development server:
```bash
npm start
# or
yarn start
```

The application will open at [http://localhost:3000](http://localhost:3000)

### Build

Create a production build:
```bash
npm run build
# or
yarn build
```

## Available Scripts

- `npm start` - Run development server
- `npm run build` - Create production build
- `npm test` - Run tests
- `npm run lint` - Check code quality
- `npm run prettify` - Format code with Prettier
- `npm run deploy` - Deploy to GitHub Pages
- `npm run predeploy` - Pre-deployment build

## Deployment

### Deploy to Genezio

The project is configured for deployment to Genezio. Use the `genezio.yaml` configuration file for deployment settings.

### Deploy to GitHub Pages

```bash
npm run deploy
```

## Pages

- **Home (About Us)** - Main page with company information
- **Blog** - Articles and blog posts
- **Gallery** - Photo gallery
- **Services** - Description of offered services
- **Contact** - Contact form and information

## Configuration

### Web3Forms Setup

See [WEB3FORMS_SETUP.md](WEB3FORMS_SETUP.md) for detailed instructions on configuring the contact form.

### Contact Form Features

See [CONTACT_FORM_FEATURES.md](CONTACT_FORM_FEATURES.md) for information about contact form functionality.

## Browser Support

Supports the last two versions of:

- Chrome
- Firefox
- Safari
- Edge
- Opera

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Issues

Please use the [GitHub Issues](https://github.com/lysanenkovika-cloud/venus-date/issues) page to report bugs or request features.

When reporting issues:
- Use the issue template if provided
- Include steps to reproduce
- Specify browser and OS information
- Attach screenshots if applicable

## License

See license documentation for details.

## Author

**Tabernol**

## Acknowledgments

Built with:
- [Material-UI](https://mui.com/) - React UI framework
- [React Router](https://reactrouter.com/) - Routing library
- [i18next](https://www.i18next.com/) - Internationalization framework
- [React Flatpickr](https://github.com/haoxins/react-flatpickr) - Date picker component
- [React Countup](https://github.com/glennreyes/react-countup) - Animated counters
- [ChromaJS](https://gka.github.io/chroma.js/) - Color manipulation
- [Web3Forms](https://web3forms.com/) - Contact form backend
- [hCaptcha](https://www.hcaptcha.com/) - Security protection

Based on Material Kit 2 React template by [Creative Tim](https://www.creative-tim.com/)
