# React Front-End System

## Overview
This project is a React-based front-end system designed for managing user registration, login functionality, product management, and vendor management. It provides a user-friendly interface for users to interact with the application.

## Features
- **User Registration**: Users can create an account by providing their details such as name, email, and password.
- **User Login**: Registered users can log in using their email and password.
- **Product Management**: Admins can add, update, list, and mark products as inactive.
- **Vendor Management**: Admins can add vendors, list all vendors, and mark vendors as inactive.
- **Responsive Design**: The application is designed to be responsive and user-friendly.

## Project Structure
```
react-front-end-system
├── public
│   └── index.html
├── src
│   ├── components
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   ├── ProductManagement.jsx
│   │   └── VendorManagement.jsx
│   ├── pages
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Products.jsx
│   │   └── Vendors.jsx
│   ├── App.jsx
│   ├── index.jsx
│   └── styles
│       └── global.css
├── package.json
├── README.md
└── .gitignore
```

## Setup Instructions
1. **Clone the repository**:
   ```
   git clone <repository-url>
   ```
2. **Navigate to the project directory**:
   ```
   cd react-front-end-system
   ```
3. **Install dependencies**:
   ```
   npm install
   ```
4. **Start the development server**:
   ```
   npm start
   ```
5. **Open your browser** and go to `http://localhost:3000` to view the application.

## Technologies Used
- React
- React Router
- CSS for styling

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.