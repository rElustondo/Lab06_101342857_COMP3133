# Lab06_101342857_COMP3133

This repository contains two exercises demonstrating different web application frameworks and configurations.

## Exercise 1: Express.js Application

This exercise demonstrates a basic web application built using Express.js.

### Project Structure
exercise-1/ myapp/ app.js bin/ www package.json public/ stylesheets/ style.css routes/ index.js users.js views/ error.pug index.pug layout.pug


### Description

- **app.js**: Main application file where the Express app is configured.
- **bin/www**: Script to start the HTTP server.
- **routes/index.js**: Route handler for the home page.
- **routes/users.js**: Route handler for the users page.
- **views/**: Contains Pug templates for rendering HTML.
- **public/stylesheets/style.css**: CSS styles for the application.

### Running the Application

To run the Express.js application:

1. Navigate to the `exercise-1/myapp` directory.
2. Install dependencies: `npm install`
3. Start the server: `npm start`
4. Open your browser and navigate to `http://localhost:3000`

## Exercise 2: Angular Application

This exercise demonstrates a basic web application built using Angular.

### Project Structure
exercise-2/ my-app/ angular.json package.json README.md server.ts src/ app/ app.component.css app.component.html app.component.spec.ts app.component.ts ... index.html main.server.ts main.ts styles.css tsconfig.app.json tsconfig.json tsconfig.spec.json

### Description

- **src/app/app.component.ts**: Main component of the Angular application.
- **src/app/app.component.html**: HTML template for the main component.
- **src/app/app.component.css**: CSS styles for the main component.
- **src/main.ts**: Entry point for the client-side application.
- **src/main.server.ts**: Entry point for the server-side application.
- **server.ts**: Express server configuration for server-side rendering.
- **angular.json**: Angular CLI configuration file.
- **tsconfig.json**: TypeScript configuration file.

### Running the Application

To run the Angular application:

1. Navigate to the `exercise-2/my-app` directory.
2. Install dependencies: `npm install`
3. Start the development server: `npm start`
4. Open your browser and navigate to `http://localhost:4200`

