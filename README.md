# Hostless Angular Example

A simple Angular application demonstrating dynamic navigation and modern web development practices.

## Features

- **Dynamic Navigation**: Seamless routing between different pages using Angular Router
- **Responsive Design**: Mobile-first approach that works on all devices
- **Modern Architecture**: Built with Angular 17+ using standalone components
- **Interactive Components**: 
  - Home page with hero section and feature cards
  - About page with company information and tech stack
  - Products page with filtering capabilities
  - Contact page with working form

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── navigation/          # Navigation bar component
│   │   ├── home/               # Home page component
│   │   ├── about/              # About page component
│   │   ├── contact/            # Contact page component
│   │   └── products/           # Products page component
│   ├── app.component.ts        # Main app component
│   └── app.routes.ts           # Routing configuration
├── assets/                     # Static assets
├── index.html                  # Main HTML file
├── main.ts                     # Application bootstrap
└── styles.css                  # Global styles
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Hostless-Angular-Example
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

### Running the Application

1. Start the development server:
   ```bash
   npm start
   ```
   or
   ```bash
   ng serve
   ```

2. Open your browser and navigate to `http://localhost:4200`

3. The application will automatically reload when you make changes to the source files

### Building for Production

To build the project for production:

```bash
npm run build
```

The build artifacts will be stored in the `dist/` directory.

## Available Scripts

- `npm start` - Starts the development server
- `npm run build` - Builds the project for production
- `npm run watch` - Builds the project and watches for changes
- `npm test` - Runs unit tests
- `npm run serve` - Serves the application and opens it in the browser

## Navigation

The application includes the following pages:

- **Home** (`/`) - Welcome page with feature overview
- **About** (`/about`) - Company information and values
- **Products** (`/products`) - Product catalog with filtering
- **Contact** (`/contact`) - Contact form and information

## Technologies Used

- **Angular 17+** - Modern frontend framework
- **TypeScript** - Type-safe JavaScript
- **Angular Router** - Client-side routing
- **CSS3** - Modern styling with responsive design
- **RxJS** - Reactive programming

## Key Features Demonstrated

1. **Standalone Components**: Modern Angular architecture without NgModules
2. **Reactive Forms**: Form handling with validation
3. **Dynamic Filtering**: Product filtering by category
4. **Responsive Navigation**: Mobile-friendly navigation menu
5. **Component Communication**: Data flow between components
6. **Routing Guards**: Navigation protection and redirects

## Customization

You can easily customize this application by:

1. **Adding New Pages**: Create new components and add routes
2. **Modifying Styles**: Update the CSS in `styles.css` or component styles
3. **Adding Features**: Implement new functionality in existing components
4. **Integrating APIs**: Connect to backend services for data

## Browser Support

This application supports all modern browsers including:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## Support

If you have any questions or need help with this project, please open an issue in the repository.
