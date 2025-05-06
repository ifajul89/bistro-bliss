# Bistro Bliss - Frontend

![Bistro Bliss](./src/assets/header.jpg)

## 🍽️ Live Site

[Visit Bistro Bliss](https://bistro-bliss-restaurant.web.app/)

## 📋 Project Overview

Bistro Bliss is an elegant and responsive restaurant management application built with React. The frontend provides a beautiful, intuitive interface for customers to browse menus, place orders, and for restaurant owners to manage their food items.

## ✨ Key Features

- **Elegant User Interface** - Modern, responsive design with intuitive navigation
- **Interactive Food Gallery** - Browse food items with beautiful imagery and detailed descriptions
- **User Dashboard** - Personal profile with order history and favorite items
- **Restaurant Owner Portal** - Add, update, and manage menu items with real-time updates
- **Advanced Search & Filtering** - Find food items by name, category, price, or popularity

## 🛠️ Frontend Technology Stack

- **React.js** - Component-based UI development with efficient rendering
- **React Router (v6)** - Dynamic routing with protected routes
- **TanStack Query** - Optimized data fetching with caching and state management
- **Tailwind CSS & DaisyUI** - Utility-first CSS framework for responsive design
- **Firebase Authentication** - Secure user authentication with email and social login
- **Framer Motion** - Smooth, engaging animations and transitions
- **React Helmet Async** - Dynamic document head management for SEO
- **SweetAlert2** - Beautiful, customizable alerts and modals
- **Vite** - Lightning-fast frontend build tool and development server

## 📱 Responsive Design

Bistro Bliss is fully responsive and works beautifully on:
- Desktop computers
- Tablets
- Mobile devices

The UI adapts intelligently to different screen sizes while maintaining functionality and aesthetic appeal.

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation

1. Clone the frontend repository
   ```bash
   git clone https://github.com/ifajul89/bistro-bliss.git
   cd bistro-bliss
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   Create a `.env` file in the root directory with the following:
   ```
   VITE_apiKey=your-firebase-api-key
   VITE_authDomain=your-firebase-auth-domain
   VITE_projectId=your-firebase-project-id
   VITE_storageBucket=your-firebase-storage-bucket
   VITE_messagingSenderId=your-firebase-messaging-sender-id
   VITE_appId=your-firebase-app-id
   VITE_API_URL=your-backend-api-url
   ```

4. Start the development server
   ```bash
   npm run dev
   ```

## 🧩 Project Structure

```
bistro-bliss/
├── public/                # Static files and assets
├── src/
│   ├── assets/            # Images and media files
│   ├── Components/        # Reusable UI components
│   │   ├── Navbar/        # Navigation components
│   │   └── Footer/        # Footer components
│   ├── Firebase/          # Firebase configuration and services
│   ├── Layout/            # Layout components and structure
│   ├── Pages/             # Page components
│   │   ├── Home/          # Homepage components
│   │   ├── All-Items/     # Food menu listing
│   │   ├── SingleFood/    # Food detail page
│   │   ├── AddFood/       # Add new food item
│   │   ├── MyAddedFood/   # User's added food items
│   │   ├── UpdateFood/    # Update food item
│   │   ├── PurchasePage/  # Food ordering
│   │   ├── MyOrder/       # User's order history
│   │   ├── LogIn/         # Authentication
│   │   ├── Register/      # User registration
│   │   ├── Blog/          # Blog posts
│   │   └── Error/         # 404 page
│   ├── Provider/          # Context providers
│   │   └── AuthProvider/  # Authentication context
│   └── Routes/            # Application routing
├── index.html             # HTML entry point
├── vite.config.js         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
├── postcss.config.js      # PostCSS configuration
├── .eslintrc.cjs          # ESLint configuration
└── .prettierrc            # Prettier configuration
```

## 🔒 Authentication Features

- **Email/Password Authentication** - Traditional signup and login
- **Social Login** - Google authentication integration
- **Protected Routes** - Secure access to user-specific features
- **JWT Implementation** - Secure API communications with token-based auth
- **Persistent Login** - Remember user sessions

## 🖼️ UI Components

- **Dynamic Navbar** - Context-aware navigation with user profile
- **Food Cards** - Visually appealing displays of menu items
- **Pagination** - Smart, responsive pagination for food listings
- **Form Components** - Validated inputs with error handling
- **Loading States** - Elegant loading spinners and skeleton screens
- **Animations** - Subtle motion effects for enhanced UX

## 🔍 Frontend Features

- **Dynamic Page Titles** - Context-aware document titles using React Helmet
- **Form Validation** - Client-side validation with error messages
- **Toast Notifications** - User feedback for actions and events
- **Error Boundaries** - Graceful error handling
- **Lazy Loading** - Optimized performance with code splitting
- **Persistent Storage** - Local storage for user preferences

## 🤝 Connection to Backend

This frontend connects to a [dedicated backend API](https://github.com/ifajul89/bistro-bliss-backend) built with:
- Node.js and Express
- MongoDB for database
- JWT for authentication
- RESTful API architecture

## 💡 Future Frontend Enhancements

- Theme customization with dark/light mode
- Internationalization support for multiple languages
- Advanced filtering options for menu items
- Wishlist functionality
- Enhanced animations and micro-interactions
- Progressive Web App (PWA) features

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🙏 Acknowledgements

- [React.js](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [DaisyUI](https://daisyui.com/)
- [Firebase](https://firebase.google.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Vite](https://vitejs.dev/)

---

Designed and developed with ❤️ by [Ifajul Islam]