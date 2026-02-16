# 🍱 MessMate – Full Stack Mess Management System

Live Demo 👉 https://messmate-red.vercel.app/

MessMate is a full-stack web application that allows users to view, add, and manage mess listings with authentication and protected routes.

---

## 🚀 Tech Stack

### Frontend
- React (Vite)
- Axios
- React Router
- Modern UI Design

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcryptjs
- jsonwebtoken (JWT)

### Deployment
- Frontend: Vercel
- Backend: Render
- Database: MongoDB Atlas

---

## 🔐 Features

- User Signup & Login
- JWT Authentication
- Protected Dashboard Route
- Add New Mess
- Delete Mess
- Persistent Login (localStorage)
- Responsive UI
- Production Deployment

---

## 📁 Project Structure

messmate-project/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── middleware/
│ ├── server.js
│ └── .env
│
├── frontend/
│ ├── src/
│ ├── components/
│ ├── pages/
│ ├── api.js
│ └── vite.config.js
│
└── README.md

yaml
Copy code

---

## ⚙️ Environment Variables

### Backend (.env)

PORT=10000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key

yaml
Copy code

---

## 🛠 Installation (Local Setup)

### 1️⃣ Clone Repository

git clone https://github.com/yourusername/messmate-project.git
cd messmate-project

shell
Copy code

### 2️⃣ Backend Setup

cd backend
npm install
npm start

shell
Copy code

### 3️⃣ Frontend Setup

cd frontend
npm install
npm run dev

yaml
Copy code

---

## 🔐 Authentication Flow

1. User signs up → Password hashed using bcryptjs  
2. User logs in → JWT token generated  
3. Token stored in localStorage  
4. Protected routes verify token  
5. Dashboard accessible only when authenticated  

---

## 🌍 Production Deployment

- Backend deployed on Render
- Frontend deployed on Vercel
- MongoDB Atlas used as cloud database

---

## 👨‍💻 Author

Shree (Full Stack Developer)

---

## ⭐ Future Improvements

- Edit Mess Feature
- Image Upload
- Admin Role System
- Pagination
- Search & Filter
- Dark Mode
- Payment Integration

---

## 📜 License

This project is licensed for educational purposes.