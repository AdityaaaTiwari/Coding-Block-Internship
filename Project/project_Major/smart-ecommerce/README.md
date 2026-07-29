# 🛒 Smart Multi-Vendor Marketplace

A modern Full-Stack E-Commerce Marketplace where customers can browse products, manage their cart and wishlist, place orders, and sellers can manage products through a dedicated dashboard.

---

## 🚀 Features

### 👤 User Features
- User Registration & Login
- JWT Authentication
- Browse Products
- Product Details Page
- Add to Cart
- Wishlist Management
- Checkout
- Order History
- Responsive Design

### 🏪 Seller Features
- Seller Dashboard
- Add New Products
- View Product List
- Manage Product Inventory

### ⚙️ System Features
- RESTful API
- PostgreSQL Database
- Secure Password Hashing (bcrypt)
- Protected Routes using JWT
- Redux Toolkit for State Management
- Responsive UI with Tailwind CSS

---

# 🏗️ Project Architecture

```
                User
                  │
                  ▼
        React + Redux Frontend
                  │
             Axios API Calls
                  │
                  ▼
      Node.js + Express Backend
                  │
          Business Logic Layer
                  │
                  ▼
          PostgreSQL Database
```

This project follows a **3-Tier Architecture**:

### 1️⃣ Presentation Layer
- React
- Vite
- Tailwind CSS
- Redux Toolkit

### 2️⃣ Business Logic Layer
- Node.js
- Express.js

### 3️⃣ Data Layer
- PostgreSQL

---

# 🛠 Tech Stack

## Frontend
- React
- Vite
- Redux Toolkit
- React Router
- Tailwind CSS
- Axios

## Backend
- Node.js
- Express.js

## Database
- PostgreSQL

## Authentication
- JWT
- bcrypt

## Tools
- Git
- GitHub
- Postman
- pgAdmin

---

# 📂 Folder Structure

```
smart-ecommerce/
│
├── backend/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── server.js
│
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── services/
│   └── App.jsx
│
├── public/
└── package.json
```

---

# 🔐 Authentication Flow

```
User Login
      │
      ▼
React Form
      │
Axios Request
      │
Express API
      │
JWT Generated
      │
Token Sent Back
      │
Protected Routes
```

---

# 🗄 Database

The application uses **PostgreSQL** for persistent data storage.

### Main Tables

- Users
- Products
- Orders
- Order Items

---

# 📸 Screenshots

Add screenshots here.

Example:

```
screenshots/
│
├── home.png
├── products.png
├── cart.png
├── wishlist.png
├── seller-dashboard.png
└── login.png
```

---

# ⚙️ Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/smart-ecommerce.git
```

---

## Frontend

```bash
npm install
npm run dev
```

---

## Backend

```bash
cd backend
npm install
npm run dev
```

---

## PostgreSQL

Create a PostgreSQL database:

```
smart_ecommerce
```

Configure your `.env` file:

```env
PORT=5000

DATABASE_URL=postgres://username:password@localhost:5432/smart_ecommerce

JWT_SECRET=your_secret_key
```

---

# 🚀 Future Improvements

- Payment Gateway Integration
- Image Upload
- Email Notifications
- Admin Dashboard
- Product Reviews
- Product Ratings
- AI Product Recommendation
- Inventory Analytics

---

# 👨‍💻 Developer

**Aditya Tiwari**

B.Tech Computer Science Engineering

### Connect with Me

- GitHub: https://github.com/AdityaaaTiwari
- LinkedIn: https://www.linkedin.com/in/aditya-tiwari-a99739342/
- Email: aditiwari289.email@example.com

---

# ⭐ If you like this project

Give this repository a ⭐ on GitHub.

---