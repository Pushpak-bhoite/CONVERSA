# 💬 CONVERSA - Real-Time Chat Application with Video Calling

> A full-stack, real-time chat application with seamless communication and integrated video calling capabilities. Connect, collaborate, and communicate with ease.

**[🌐 Live Demo](https://conversa-frontend-bay.vercel.app)** | **[Backend Repo](https://github.com/Pushpak-bhoite/conversa-backend)**

---

## ✨ Features

- 🔐 **User Authentication** - Secure signup and login with JWT tokens
- 💬 **Real-Time Messaging** - Instant message delivery using WebSockets
- 🎥 **Video Calling** - Integrated video call support for direct communication
- 👥 **User Presence** - See who's online in real-time
- 🔍 **Search & Filter** - Find conversations and messages easily
- 📱 **Responsive Design** - Works seamlessly on all devices (desktop, tablet, mobile)
- 🎨 **Modern UI** - Clean and intuitive user interface
- 🔔 **Notifications** - Get alerts for new messages and incoming calls

---

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI library with hooks and context API
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first CSS framework
- **Socket.io Client** - Real-time bidirectional communication
- **Axios** - HTTP client for API calls
- **WebRTC** - Peer-to-peer video and audio streaming

### Backend
- **Node.js & Express.js** - RESTful API server
- **MongoDB** - NoSQL database for data persistence
- **Socket.io** - WebSocket library for real-time features
- **JWT** - Secure authentication
- **Bcrypt** - Password encryption
- **WebRTC Signaling** - Coordinate video calls between peers

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB instance
- For video calling: Modern browser with WebRTC support

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
echo "VITE_WS_URL=ws://localhost:5000" >> .env

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
│   │   ├── components/
│   │   │   ├── Chat/
│   │   │   │   ├── ChatWindow.jsx       # Main chat interface
│   │   │   │   ├── MessageList.jsx      # Message display
│   │   │   │   ├── MessageInput.jsx     # Input field
│   │   │   │   └── ConversationList.jsx # Conversations
│   │   │   ├── Video/
│   │   │   │   ├── VideoCall.jsx        # Video call interface
│   │   │   │   ├── VideoStream.jsx      # Video streams
│   │   │   │   ├── CallControls.jsx     # Call buttons
│   │   │   │   └── IncomingCall.jsx     # Call notification
│   │   │   ├── Auth/
│   │   │   │   ├── Login.jsx            # Login form
│   │   │   │   └── SignUp.jsx           # Sign up form
│   │   │   └── Common/
│   │   │       ├── Header.jsx
│   │   │       ├── UserStatus.jsx
│   │   │       └── Notifications.jsx
│   │   ├── pages/
│   │   ├── services/
│   │   │   ├── api.js                   # API calls
│   │   │   ├── socket.js                # Socket.io setup
│   │   │   └── webrtc.js                # WebRTC setup
│   │   ├── hooks/
│   │   │   ├── useChat.js               # Chat hook
│   │   │   ├── useVideoCall.js          # Video call hook
│   │   │   └── useAuth.js               # Auth hook
│   │   ├── styles/
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── models/
│   │   ├── User.js                      # User schema
│   │   ├── Message.js                   # Message schema
│   │   └── Conversation.js              # Conversation schema
│   ├── routes/
│   │   ├── auth.js                      # Auth endpoints
│   │   ├── messages.js                  # Message endpoints
│   │   └── calls.js                     # Call signaling
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── messageController.js
│   │   └── callController.js
│   ├── middleware/
│   │   ├── auth.js                      # JWT verification
│   │   └── validation.js                # Input validation
│   ├── socket/
│   │   ├── socketHandler.js             # Socket.io handlers
│   │   ├── messageHandler.js            # Message events
│   │   └── callHandler.js               # Video call events
│   └── server.js
└── README.md
```

---

## 🔌 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/profile` - Get user profile
- `POST /api/auth/logout` - Logout user

### Messages
- `GET /api/messages/:conversationId` - Fetch messages
- `POST /api/messages` - Send message
- `DELETE /api/messages/:id` - Delete message
- `PUT /api/messages/:id` - Edit message

### Conversations
- `GET /api/conversations` - Get all conversations
- `POST /api/conversations` - Create new conversation
- `GET /api/conversations/:id` - Get conversation details
- `DELETE /api/conversations/:id` - Delete conversation

### Users
- `GET /api/users/online` - Get online users
- `GET /api/users/search/:query` - Search users
- `PUT /api/users/profile` - Update profile

---

## 🎥 Video Calling Features

### Initiate a Call
```javascript
import { useVideoCall } from '@/hooks/useVideoCall';

const { startCall, endCall, acceptCall } = useVideoCall();

// Start video call with user
const handleStartCall = async (userId) => {
  const call = await startCall(userId);
};
```

### WebRTC Signaling Flow
```
User A initiates call → Signal sent via Socket.io → 
Server relays to User B → User B sees incoming call notification →
User B accepts → Exchange SDP offers/answers → 
Establish P2P connection → Video/audio streams active
```

### Real-Time Video Updates
```javascript
// Receive video stream updates
socket.on('video-stream-started', (streamData) => {
  displayRemoteStream(streamData);
});

socket.on('call-ended', () => {
  closeVideoConnection();
});
```

---

## 🔐 Security

- ✅ JWT token-based authentication
- ✅ Password encryption with bcrypt
- ✅ Socket.io authentication for real-time events
- ✅ Message validation and sanitization
- ✅ Rate limiting on API endpoints
- ✅ HTTPS/WSS for encrypted connections (production)
- ✅ XSS protection via React escaping

---

## 💻 Environment Variables

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
VITE_WS_URL=ws://localhost:5000
```

### Backend (.env)
```env
MONGODB_URI=mongodb://localhost:27017/conversa
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
PORT=5000
NODE_ENV=development

# Optional: WebRTC STUN/TURN servers
STUN_SERVER=stun:stun.l.google.com:19302
TURN_SERVER=your_turn_server_url
```

---

## 📊 Real-Time Events (Socket.io)

### Chat Events
```javascript
socket.on('message-received', (message) => {});
socket.on('typing-indicator', (userId) => {});
socket.on('user-online', (userId) => {});
socket.on('user-offline', (userId) => {});
socket.on('conversation-updated', (conversation) => {});
```

### Video Call Events
```javascript
socket.on('incoming-call', (callData) => {});
socket.on('call-accepted', (peerConnection) => {});
socket.on('call-rejected', (reason) => {});
socket.on('call-ended', () => {});
socket.on('ice-candidate', (candidate) => {});
socket.on('offer', (offer) => {});
socket.on('answer', (answer) => {});
```

---

## 🧪 Testing

```bash
# Frontend tests
cd frontend
npm run test

# Backend tests
cd backend
npm run test
```

---

## 🚢 Deployment

### Frontend (Vercel)
```bash
cd frontend
npm run build
# Deploy to Vercel
```

### Backend (Heroku/Railway/AWS)
```bash
# Set environment variables on your hosting platform
# Deploy using Git or container deployment
```

---

## 🐛 Troubleshooting

### Video Call Issues
- **No video stream**: Check browser permissions for camera/microphone
- **Connection issues**: Verify WebRTC STUN/TURN servers are configured
- **Audio problems**: Ensure audio input device is selected in browser settings
- **Connection timeout**: Check firewall rules allow WebRTC traffic

### Message Delivery Issues
- **Messages not sending**: Verify backend is running and Socket.io is connected
- **Messages not appearing**: Check MongoDB connection and message schema
- **Delayed messages**: Monitor network latency and server performance

### Authentication Issues
- **Login fails**: Verify credentials and MongoDB user collection
- **Token expired**: Token refresh should happen automatically, check token expiry settings
- **CORS errors**: Verify frontend URL is in backend CORS whitelist

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
- Email: bhoitepushpak6@gmail.com

---

## 📞 Support

If you have any questions or issues, feel free to:
- Open an issue on GitHub
- Check existing issues for solutions
- Contact me via email

---

## 🙏 Acknowledgments

- [Socket.io](https://socket.io/) - Real-time communication
- [WebRTC](https://webrtc.org/) - Video/audio streaming
- [MongoDB](https://www.mongodb.com/) - Database
- [Express.js](https://expressjs.com/) - Backend framework
- [React](https://react.dev/) - Frontend library

---

⭐ If you found this project helpful, please consider giving it a star!
