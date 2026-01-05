
# Foodify - Food Order Website (Backend)

A **secure, scalable backend system** for a food ordering application that supports **user authentication, menu management cart operations, order processing, and payment handling**.  
Built using **Node.js, Express.js, and MongoDB**, following real-world backend architecture and best practices.

---

## 🚀 Features

- 🔐 JWT-based user authentication
- 👥 Role-based access control (Admin / User)
- 🍽️ Menu management (Add, Update, Delete food items)
- 🛒 User-specific cart system
- 📦 Order placement & order history
- 💳 Payment flow (Mock Pay)
- 🧱 Modular and scalable project structure
- 🗃️ MongoDB data modeling using Mongoose

---

## 🛠️ Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose

### Security & Utilities
- JWT Authentication
- bcrypt (Password Hashing)
- dotenv
- CORS

### Payments
- Mock Payment Logic


## 🔑 Environment Variables

Create a `.env` file in the root directory:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret

