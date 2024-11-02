# Django + Tailwind CSS + React

Django + Tailwind CSS + React = 🧡

## Note :
This project is not a typical two-folder setup with separate frontend and backend directories, nor does it run on two ports. Instead, it is designed to serve React components directly through Django templates, with everything running on a single Django server. This integrated approach allows Django to handle routing, template rendering, and serving static files, while React components are embedded within Django templates as needed.

## Project Overview

This project is more than just a boilerplate for integrating React, Django, and Tailwind CSS. Initially created as an experimental feature for an internal project, it served as a sandbox to test new ideas and integrations.

Based on [Timonweb's Django Tailwind](https://github.com/timonweb/django-tailwind), this setup combines Django—a high-level Python web framework—with Tailwind CSS for rapid UI development and React for building dynamic user interfaces. Together, they provide a foundation for a modern, full-stack web application leveraging both backend and frontend capabilities.

The repository includes the minimal setup needed to run the project. Although it wasn’t initially intended as a boilerplate, feel free to adapt it or reverse-engineer any part to meet your needs.

---

##  Advantages of This Setup
- **Unified Application Flow**: Running on a single server simplifies deployment and avoids the complexity of managing two separate servers for backend and frontend.
- **Seamless Integration**: React components are embedded within Django templates, enabling Django to handle routing while maintaining the flexibility of a dynamic frontend where needed.
- **Easier Deployment**: With only one server to deploy, you can avoid configuring additional proxies (e.g., Nginx or Apache) to route traffic between frontend and backend servers.
- **Efficient Development**: All assets are managed within Django, reducing the overhead of configuring a standalone frontend framework.

---

## Screenshots

### Home Page

![Home Page](https://github.com/thenameisajay/django-tailwind-react/blob/main/screenshots/home.png)
This screenshot provides a glimpse of the home page, which serves as a static Django template supported by the React DevTools extension.


### React Page
![React Page](https://github.com/thenameisajay/django-tailwind-react/blob/main/screenshots/react.png)
This screenshot provides a glimpse of the React page, which serves as a Django template with a React component embedded within it.

---

## Features

- **Django**: Handles server-side logic, routing, and database interactions.
- **Tailwind CSS**: A utility-first CSS framework to streamline UI development.
- **React**: A JavaScript library for creating interactive, client-side user interfaces.

---

## Local Development

To get started with the project, follow these steps:

1. **Clone the repository**:
    ```bash
    git clone https://github.com/thenameisajay/dj-tailwind-react.git
    cd dj-tailwind-react
    ```

2. **Set up the backend**:
    - Create a virtual environment:
        ```bash
        python3 -m venv env
        source env/bin/activate
        ```
    - Install the required Python packages:
        ```bash
        pip install -r requirements.txt
        ```
    - Apply migrations:
        ```bash
        python manage.py migrate
        ```
    - Start the Django development server:
        ```bash
        python manage.py runserver 0.0.0.0:8000
        ```

3. **Set up the frontend**:

    The setup allows you to either run Tailwind in watch mode or run both Tailwind and Webpack. ( Note: Node.js Environment must be present either in docker container or running environment)

    - Install the npm packages:
      ```bash
      python manage.py install
      ```

    - To run **only Tailwind** in watch mode (without React):
      ```bash
      python manage.py tailwind start
      ```

    - To run both **Tailwind and Webpack development servers**:
      ```bash
      python manage.py dev
      ```

    - To generate a **production build**:
      ```bash
      python manage.py prod
      ```

    - Optional: When deploying, remember to collect static files:
      ```bash
      python manage.py collectstatic
      ```

---

## Usage

Once the servers are running, you can access the application at `http://localhost:8000`. The application has two main pages:
- **Home** (`/`): Served as a static Django template.
- **React Page** (`/react`): Served via a React component within a Django template.

---

## How It Was Built

For a detailed setup guide, refer to `INSTALLATION.md`.

---

## Contribution

Contributions are welcome! Feel free to open an issue or submit a pull request if you have any improvements or suggestions.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements 

Influenced by @ewalsh's SBT setup and [Timonweb's Django Tailwind](https://github.com/timonweb/django-tailwind).
