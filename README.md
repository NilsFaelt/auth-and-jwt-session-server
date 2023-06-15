# NestJS Auth and Session JWT Generation Project

## Overview
This project is a small application developed for generating authentication and session JSON Web Tokens (JWT) in NestJS. It was created as a personal project for fun and learning purposes.

## Features
- User registration and login functionality
- Token-based authentication using JWT
- Session management using JWT
- Secure password storage using hashing algorithms
- RESTful API endpoints for user-related operations

## Technologies Used
- **NestJS**: A powerful Node.js framework for building scalable and modular applications.
- **TypeScript**: A typed superset of JavaScript that enhances developer productivity and code quality.
- **JWT (JSON Web Tokens)**: A compact, URL-safe means of representing claims between two parties.
- **Bcrypt**: A popular password-hashing library used for secure password storage.
- **RESTful API**: Adopting a RESTful architectural style for designing the application's API endpoints.

## Project Structure
The project follows a modular structure, with directories and files organized as follows:

- **src**: Main source code directory
  - **controllers**: Contains controller classes responsible for handling incoming requests and generating responses.
  - **services**: Implements the business logic and data access layer for the application.
  - **modules**: Houses the main application modules, such as the authentication module and user module.
  - **middlewares**: Contains middleware functions used for authentication, error handling, etc.
  - **dto**: Data Transfer Objects (DTOs) used for validating and sanitizing input data.
  - **models**: Defines the data models and entities used in the application.
  - **utils**: Utility functions and helper classes used throughout the project.

## Getting Started
To run the project locally, follow these steps:
1. Clone the repository: `git clone https://github.com/your-username/nest-auth-jwt-project.git`
2. Install dependencies: `npm install` or `yarn install`
3. Configure the necessary environment variables (e.g., database connection details, JWT secret key).
4. Start the application: `npm run start` or `yarn start`
5. Access the application at `http://localhost:3000` in your browser.

## Contribution
Contributions, bug reports, and feature requests are welcome! Feel free to fork the project and submit pull requests.

## License
This project is released under the [MIT License](https://opensource.org/licenses/MIT).
