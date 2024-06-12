# Artix-Client

Artix-Client is the client-side application for the Artix app, a chatbot designed to solve math problems through text or image inputs. Built with React, React Query for state management, and Framer Motion for animations, it offers a dynamic and responsive user experience for anyone seeking help with mathematics.

## Project Structure

The project is structured as follows:

- `src/components`: Contains reusable UI components like buttons, dialogs, and input fields.
- `src/containers`: Holds the main container components that form the pages of the application, such as the Home container.
- `src/queries`: Manages the asynchronous operations and state management logic using React Query.
- `src/configs`: Stores configuration files.
- `src/main.tsx`: The entry point of the application.
- `globals.css`: Global styles for the application.

## Running the Project Locally

To run Artix-Client on your local machine, follow these steps:

1. **Clone the repository**

   ```sh
   git clone https://github.com/your-repository/artix-client.git
   cd artix-client
   ```

2. **Install dependencies**

   ```sh
   npm install
   # bun or yarn base on your preference
   ```

3. **Set up environment variables**

   Create a `.env` file in the root directory of the project and add the following environment variables:

   ```sh
   VITE_API_BASE_URL=http://localhost:5000
   ```

4. **Start the development server**

   ```sh
   npm run dev
   ```

This command will start the Vite development server. Open http://localhost:5173 to view the application in your browser.

## Features:

- **Solve Math Problems**: Users can input math problems in text or image format and receive solutions in real-time.
- **Animations**: Smooth and responsive animations powered by Framer Motion enhance the user experience.

## Tech Stack:

- **React**: A JavaScript library for building user interfaces.
- **React Query**: A library for managing, caching, and synchronizing server state in React applications.
- **Framer Motion**: A production-ready motion library for React that makes it easy to create animations and gestures.
