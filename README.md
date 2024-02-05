# A Basic SSO-Project

This project is a simple Node.js application that implements OAuth authentication with Google using Passport.js. It's designed to demonstrate the basic setup required to authenticate users via Google in a web application.

## Description

The project leverages several key technologies:
- **Express.js**: A minimal and flexible Node.js web application framework that provides a robust set of features to develop web and mobile applications.
- **Passport.js**: An authentication middleware for Node.js that abstracts away the details of handling logins with different providers.
- **dotenv**: A zero-dependency module that loads environment variables from a `.env` file into `process.env`, making it easy to configure your application for development, testing, and production environments.

The application initializes an Express.js server, configures Passport.js to use the Google OAuth 2.0 strategy for authentication, and sets up routes to handle authentication requests and redirects.

## Features

- **Google OAuth 2.0 Authentication**: Users can authenticate using their Google accounts.
- **Environment Variable Configuration**: Uses dotenv to manage environment variables for better configuration management.
- **Modular Route Handling**: Authentication routes are organized in a separate module for better code organization.

## Installation

To run this project, you need Node.js and npm installed on your machine. Once you have those, follow these steps:

1. Clone the repository to your local machine.
2. Run `npm install` to install the project dependencies.
3. Create a `.env` file in the root directory of your project and define the following environment variables:

PORT=your_port_number
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GOOGLE_REDIRECT_URL=your_redirect_url_after_authentication

4. Start the application by running `npm start`.

## Usage

Once the application is running, you can authenticate with Google by navigating to `/api/auth/google`. After successful authentication, you will be redirected to `/api/auth/google/redirect`, which simply responds with a status code of 200.


## Acknowledgments

Thank you for this tutorial:
https://www.youtube.com/watch?v=Q49gGXCCY_4
