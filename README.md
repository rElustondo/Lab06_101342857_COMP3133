# Lab06_101342857_COMP3133

This repository contains two exercises demonstrating different web application frameworks and configurations.
# Project Structure
- **exercise-1/**
  - **myapp/**
    - **bin/**
      - `www`
    - **node_modules/**
    - **public/**
      - **images/**
      - **javascripts/**
      - **stylesheets/**
        - `style.css`
    - **routes/**
      - `index.js`
      - `users.js`
    - **views/**
      - `error.pug`
      - `index.pug`
      - `layout.pug`
    - `app.js`
    - `package.json`
    - `package-lock.json`
- **exercise-2/**
  - **my-app/**
    - **dist/**
    - **e2e/**
    - **node_modules/**
    - **src/**
      - **app/**
        - `app.component.css`
        - `app.component.html`
        - `app.component.spec.ts`
        - `app.component.ts`
        - `app.module.ts`
        - `app.routes.ts`
      - **assets/**
      - **environments/**
        - `environment.prod.ts`
        - `environment.ts`
      - `favicon.ico`
      - `index.html`
      - `main.server.ts`
      - `main.ts`
      - `polyfills.ts`
      - `styles.css`
      - `test.ts`
    - `angular.json`
    - `package.json`
    - `package-lock.json`
    - `README.md`
    - `tsconfig.app.json`
    - `tsconfig.json`
    - `tsconfig.spec.json`
    - `server.ts`
- `README.md`
## Exercise 1: Express.js Application

This exercise demonstrates a basic web application built using Express.js.


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

