# Experimental Repository Modification with Django

### Objective

The primary goal of this experiment was to explore rendering specific pages with plain HTML, CSS, or JavaScript instead of a frontend framework like React, especially for pages that don’t require heavy interactivity (e.g., home pages). This approach focuses on improving performance and page load speed. 

Although frameworks like Next.js allow for React-first development, they don't inherently provide the flexibility to selectively render certain pages with Vanilla JavaScript. Inspired by a [LinkedIn post on Netflix’s move from React to Vanilla JavaScript](https://www.linkedin.com/posts/shubhaam-tiwary_netflix-javascript-activity-7255448941612195842-WTQD?utm_source=share&utm_medium=member_desktop), I considered adopting a similar approach to leverage plain JavaScript where feasible.

### Approach

To implement this feature without impacting the existing codebase, I set up an experimental repository that shadows our in-house repository. The base of this setup is TimonWeb's [Django Tailwind React](https://github.com/timonweb/django-tailwind/). Here is an outline of the steps I followed:

### Initial Setup

1. **Local Environment**: Although we use Docker containers to run our Django server, I replicated the environment locally to facilitate testing and quick iteration.
2. **Required Packages**: I created a virtual environment and installed the necessary packages for Django, Django-Tailwind, dotenv, and other essentials to run the server.
3. **Server Setup**: I started the Django server to verify a working baseline before introducing any changes.

### Installation of DJ-Tailwind

Following the installation steps outlined in the [Django Tailwind documentation](https://django-tailwind.readthedocs.io/en/latest/), I created a Django app configured to support Tailwind CSS. From this point, I began implementing the following modifications to support a flexible environment for both Vanilla JavaScript and React-based components.

### React Integration Requirements

To integrate React within the existing Django-Tailwind setup, I identified the following requirements:

- **TypeScript Compiler**: I chose TypeScript over JavaScript for its strong typing capabilities.
- **Webpack**: Used to bundle React components and other JavaScript dependencies. I created custom configurations for:
  - `webpack.dev.config.ts` – for development
  - `webpack.production.config.ts` – for production
- **Babel**: Required to transpile TypeScript to JavaScript.

### Implementation Steps

1. **Directory Structure**:
   - I created a new folder called `react` within `test_app/static_src/` to store React components. This setup allows us to manage both Vanilla JS and React-based components within the same app.

2. **Webpack Configuration**:
   - Two configuration files, `webpack.dev.config.ts` and `webpack.production.config.ts`, were created to handle development and production builds. The entry point is set to the newly created React component folder.

3. **TypeScript Configuration**:
   - I added a `tsconfig.json` file to define TypeScript configurations, directing the compiled output to the `test_app/static/` folder.

4. **Babel Configuration**:
   - A `.babelrc` file was created to define Babel settings for the TypeScript-to-JavaScript transpilation process.

5. **Package Management**:
   - The `package.json` file was modified to add new scripts:
     - Developers can run either a Tailwind watch (`npm run tailwind`) or both Tailwind and Webpack development servers.

6. **Production Build**:
   - I updated scripts to handle production builds by adjusting the commands in `package.json` and adding a `webpack.production.config.ts` for optimized output.

### Developer Commands

To simplify the setup and make the process more intuitive for developers unfamiliar with npm commands, I added several custom Django commands:

- **`python manage.py dev`**: Runs both the Webpack server (React) and Django server simultaneously.
- **`python manage.py prod`**: Builds the production-ready assets.
- **`python manage.py install`**: Installs the required packages.

### Disclaimer

This repository is experimental, created to meet specific parameters and requirements. While this solution is functional, I am open to feedback and suggestions for improvement.
