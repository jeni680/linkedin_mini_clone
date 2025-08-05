# 🌐 Mini LinkedIn-like Community Platform

A full-stack MERN (MongoDB, Express.js, React, Node.js) application that mimics the core features of LinkedIn. Users can register, log in, create posts, and manage their profiles. Authentication is handled using JWT.

---

## 🚀 Features

- 👤 User Registration & Login (with JWT Authentication)
- 🔐 Protected routes for authenticated users
- 📝 Create and view community posts
- 📄 Profile view with user details
- ⚙️ Secure backend API with Express & MongoDB
- 🌐 React frontend for dynamic UI

---

## 📁 Project Structure

linkedin-mini-clone/
├── backend/
│ ├── controllers/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── .env
│ └── server.js
├── frontend/
│ └── src/
│ ├── pages/
│ │ ├── Login.jsx
│ │ ├── Signup.jsx
│ │ ├── Profile.jsx
│ │ ├── Createpost.jsx
│ │ ├── Home.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
└── README.md

yaml
Copy
Edit

---

## 🛠️ Tech Stack

### Frontend:
- React.js
- Axios
- Tailwind CSS (or custom CSS)

### Backend:
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT (jsonwebtoken)
- dotenv

---

## 🔐 Environment Variables

Create a `.env` file inside the `backend/` directory:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/?retryWrites=true&w=majority
JWT_SECRET=yourSuperSecretJWTKey
PORT=5000
🧪 Getting Started
1. Clone the repository
bash
Copy
Edit
git clone https://github.com/<your-username>/linkedin-mini-clone.git
cd linkedin-mini-clone
2. Install backend dependencies
bash
Copy
Edit
cd backend
npm install
Start the backend server:

bash
Copy
Edit
npm start
3. Install frontend dependencies
bash
Copy
Edit
cd ../frontend
npm install
Start the React development server:

bash
Copy
Edit
npm run dev
🔐 Authentication Flow
Upon login/signup, a JWT token is generated and stored in localStorage.

All protected API requests include this token in the Authorization header as:

makefile
Copy
Edit
Authorization: Bearer <token>
Backend middleware (verifyToken) authenticates and decodes the token to allow access.

✨ Future Improvements
✅ Like & Comment features for posts

🖼️ Image upload for posts (using Cloudinary or local uploads)

🔔 Notification system

💬 Messaging between users

🌍 Search and filter user profiles/posts