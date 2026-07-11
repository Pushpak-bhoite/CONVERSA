# 💬 CONVERSA - Real-Time Chat Application

> A full-stack, real-time chat application built for seamless communication. Connect, collaborate, and communicate with ease.

**[🌐 Live Demo](https://conversa-frontend-bay.vercel.app)** | **[Backend Repo](https://github.com/Pushpak-bhoite/conversa-backend)**

---

## ✨ Features

- 🔐 **User Authentication** - Secure signup and login with JWT tokens
- 💬 **Real-Time Messaging** - Instant message delivery using WebSockets
- 👥 **User Presence** - See who's online in real-time
- 🔍 **Search & Filter** - Find conversations and messages easily
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🎨 **Modern UI** - Clean and intuitive user interface

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library with hooks and context API
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time bidirectional communication
- **Axios** - HTTP client for API calls

### Backend
- **Node.js & Express.js** - RESTful API server
- **MongoDB** - NoSQL database for data persistence
- **Socket.io** - WebSocket library for real-time features
- **JWT** - Secure authentication
- **Bcrypt** - Password encryption

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB instance

### Frontend Setup

```bash
# Clone the repository
git clone https://github.com/Pushpak-bhoite/CONVERSA.git

# Navigate to frontend directory
cd frontend

# Install dependencies
npm install

# Set environment variables
echo "VITE_API_URL=http://localhost:5000" > .env

# Start development server
npm run dev
```

### Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install dependencies
npm install

# Set environment variables
echo "MONGODB_URI=your_mongodb_uri" > .env
echo "JWT_SECRET=your_jwt_secret" >> .env
echo "PORT=5000" >> .env

# Start the server
npm start
```

Visit `http://localhost:5173` to see the application.

---

## 📖 Project Structure

```
CONVERSA/
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── models/             # MongoDB schemas
│   ├── routes/             # API endpoints
│   ├── controllers/        # Business logic
│   ├── middleware/         # Auth & validation
│   └── server.js
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile

### Messages
- `GET /api/messages/:conversationId` - Fetch messages
- `POST /api/messages` - Send message
- `DELETE /api/messages/:id` - Delete message

### Conversations
- `GET /api/conversations` - Get all conversations
- `POST /api/conversations` - Create new conversation
- `GET /api/conversations/:id` - Get conversation details

---

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

## 👨‍💻 Author

**Pushpak Bhoite**
- GitHub: [@Pushpak-bhoite](https://github.com/Pushpak-bhoite)
- Portfolio: [Visit](https://github.com/Pushpak-bhoite)

---

## 📞 Support

If you have any questions or issues, feel free to open an issue on GitHub or contact me directly.

⭐ If you found this project helpful, please consider giving it a star!
