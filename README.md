# Arizon E-Commerce Frontend

A responsive and fully functional e-commerce frontend application built with **React.js**, **Tailwind CSS**, and **Context API** for cart management. It integrates with a public API to fetch product data and allows users to add items to their cart.

## Table of Contents

- [Project Setup](#project-setup)
- [Features](#features)
- [Technologies](#technologies)
- [Folder Structure](#folder-structure)
- [Running Locally](#running-locally)
- [License](#license)

---

## Project Setup

Follow the steps below to set up and run the project locally:

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/arizon-ecommerce.git
```

### 2. Install Dependencies

Navigate to the project folder and install the required dependencies:

```bash
cd arizon-ecommerce
npm install
```

### 3. Run the Development Server

Start the React development server:

```bash
npm start
```
## Open your browser and go to [Link](http://localhost:3000))
 to view the app.

 # Features

 - Product Listing Page: Displays products fetched from the [FakeAPI](#fakeapi) in a responsive grid layout.
 - Add to Cart: Users can add products to their cart by clicking the "Add to Cart" button on each product card.
 - Cart Management: Cart state is managed using React Context API with a reducer pattern.
 - Responsive Design: The application is fully responsive and adapts to different screen sizes using Tailwind CSS.


# Technologies
- React.js: JavaScript library for building user interfaces
- Tailwind CSS: A utility-first CSS framework for rapid UI development.
- React Context API: A state management solution for passing data through the component tree.
- Fetch API: Used to fetch product data from the FakeStore API.

# Folder Structure

```bash
src/
│
├── components/
│   ├── ProductCard/
│   │   └── index.jsx         # Displays individual product card
│   └── ProductListingPage/
│       └── index.jsx         # Fetches and displays list of products
│
├── context/
│   └── CartContext.js        # Context and reducer for managing cart state
│
├── App.js                    # Main application component
├── index.js                  # Entry point of the application
└── tailwind.config.js         # Tailwind CSS configuration
```

# Running Locally

To run the project locally, follow these steps:

### 1. Clone the repository to your local machine:

```bash
git clone https://github.com/your-username/arizon-ecommerce.git
cd arizon-ecommerce
```
### 2. Install the necessary dependencies:

```bash
npm install
npm install tailwindcss postcss autoprefixer
```
### 3. Run the Development Server

Start the React development server:

```bash
npm start
```
## Open your browser and go to [Link](http://localhost:3000))
 to view the app.


 # License
 This project is licensed under the MIT License.



