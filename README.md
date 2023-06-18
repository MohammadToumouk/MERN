## MERN-APP Repository

This repository contains a MERN (MongoDB, Express.js, React.js, Node.js) stack application for managing users and restaurants. The project consists of a backend API built with Express.js and MongoDB, and a frontend user interface created using React.js.

### Features

- View a list of users and their roles.
- Create new users with their respective roles.
- View a list of restaurants and their types.
- Create new restaurants with their types.

### Backend

The backend code is located in the root directory of the repository. It consists of the following files:

- `index.js`: Entry point of the server application, sets up the Express.js server, establishes a connection to the MongoDB database, and defines the API routes.
- `models/Users.js`: Defines the Mongoose schema and model for the users collection in the MongoDB database.
- `models/Resturants.js`: Defines the Mongoose schema and model for the restaurants collection in the MongoDB database.

To run the backend, ensure that you have Node.js and MongoDB installed. Use the following commands in the root directory:

1. Install the required dependencies:
   ```
   npm install
   ```

2. Start the backend server:
   ```
   npm start
   ```

The server will run on `http://localhost:3001`.

### Frontend

The frontend code is located in the `App.js` file in the root directory. It is a React.js application that communicates with the backend API to fetch and create user and restaurant data.

To run the frontend, navigate to the root directory and use the following commands:

1. Install the required dependencies:
   ```
   npm install
   ```

2. Start the React development server:
   ```
   npm start
   ```

The frontend will be accessible at `http://localhost:3000`.

### Usage

1. Access the frontend user interface through your web browser at `http://localhost:3000`.
2. The main page displays a form to create a new user. Enter the user's name and role, then click the "Create User" button.
3. The created user will appear in the list below the form.
4. Scroll down to view the list of existing users and their roles.
5. The page also displays a list of restaurants and their types.
6. To create a new restaurant, enter the restaurant's name and type in the form below the list, then click the "Create Restaurant" button.
7. The newly created restaurant will appear in the list below the form.

### Requirements

- Node.js
- MongoDB

### Resources

- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [React.js](https://reactjs.org/)

Please refer to the respective documentation for detailed information about each technology used in this project.

**Note:** Make sure to configure the MongoDB connection string in `index.js` to point to your own MongoDB database.

For any questions or issues, feel free to contact the repository owner.
