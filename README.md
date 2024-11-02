# Django + Tailwind CSS + React

Django + Tailwind CSS + React = 🧡

---

## Project Overview

This project is more than just a boilerplate for integrating React, Django, and Tailwind CSS. Initially created as an experimental feature for an internal project, it served as a sandbox to test new ideas and integrations.

Based on [Timonweb's Django Tailwind](https://github.com/timonweb/django-tailwind), this setup combines Django—a high-level Python web framework—with Tailwind CSS for rapid UI development and React for building dynamic user interfaces. Together, they provide a foundation for a modern, full-stack web application leveraging both backend and frontend capabilities.

The repository includes the minimal setup needed to run the project. Although it wasn’t initially intended as a boilerplate, feel free to adapt it or reverse-engineer any part to meet your needs.

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
