# Job Wave – Modern Freelance Marketplace Platform

A full-stack web application connecting freelancers with clients in a seamless, secure, and user-friendly marketplace. Post jobs, bid on projects, and collaborate with top talent globally.

---

## 📋 Project Overview

**Job Wave** is a comprehensive freelance marketplace platform that bridges the gap between skilled professionals and businesses seeking talent. The platform enables users to post job listings, browse opportunities by category, place competitive bids, and manage projects efficiently. With role-based access control, secure payments, and real-time notifications, Job Wave creates a trustworthy ecosystem for remote collaboration.

**Who it's for:**

- Freelancers looking for diverse project opportunities
- Businesses seeking specialized talent
- Agencies managing multiple projects
- Professionals transitioning to remote work

---

## 🌐 Live Demo & Repository

| Link                    | URL                                               |
| ----------------------- | ------------------------------------------------- |
| **Live Demo**           | https://job-wave-client.vercel.app                |
| **Frontend Repository** | https://github.com/alamin6688/job-wave-client.git |
| **Backend Repository**  | https://github.com/alamin6688/job-wave-server.git |

---

## 🛠️ Tech Stack

### **Frontend**

- **Framework:** React 18+ with Vite
- **Styling:** Tailwind CSS, PostCSS
- **Animations:** Framer Motion
- **HTTP Client:** Axios
- **Authentication:** Firebase Auth, JWT
- **UI Components:** Lucide React Icons, React Tabs
- **State Management:** React Context API
- **Routing:** React Router DOM
- **Deployment:** Vercel

### **Backend**

- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **Authentication:** JWT (JSON Web Tokens)
- **Environment:** dotenv
- **CORS:** Enabled for secure cross-origin requests
- **Deployment:** Render/Railway

### **Database**

- **Primary:** MongoDB (NoSQL)
- **ODM:** Mongoose
- **Collections:** Users, Jobs, Bids, Reviews

### **Authentication & Security**

- **Frontend Auth:** Firebase Authentication
- **API Auth:** JWT Tokens
- **Password Security:** Encrypted storage

---

## ✨ Key Features

### **User Management**

- ✅ User registration and login (Email/Password)
- ✅ Firebase authentication integration
- ✅ Role-based access control (Freelancer, Client, Admin)
- ✅ User profile management
- ✅ Profile verification system

### **Job Management**

- ✅ Post new job listings with detailed descriptions
- ✅ Browse jobs by category (Web Dev, Graphics Design, Digital Marketing, etc.)
- ✅ Advanced filtering and sorting options
- ✅ Job detail pages with full information
- ✅ Job status tracking (Open, In Progress, Completed)
- ✅ Edit and update posted jobs
- ✅ Delete job listings

### **Bidding System**

- ✅ Freelancers can place competitive bids on projects
- ✅ View all bids received on posted jobs
- ✅ Accept/reject bids from interested freelancers
- ✅ Bid tracking and management dashboard
- ✅ Bid status notifications

### **Dashboard & Analytics**

- ✅ Personalized user dashboard
- ✅ Job analytics and statistics
- ✅ Active jobs tracking
- ✅ Bid history and status
- ✅ Earnings summary
- ✅ Performance metrics

### **UI/UX Enhancements**

- ✅ Smooth animations and transitions (Framer Motion)
- ✅ Responsive design (Mobile, Tablet, Desktop)
- ✅ Loading skeletons for better UX
- ✅ Tab-based job categorization
- ✅ Interactive hero section with parallax effects
- ✅ Smooth card animations and hover effects

### **Additional Features**

- ✅ Search and filter functionality
- ✅ Pagination for job listings
- ✅ Real-time status updates
- ✅ Mobile-optimized interface
- ✅ 404 Error page handling
- ✅ Contact form

---

## 🚀 Installation & Setup

### **Prerequisites**

- Node.js (v14 or higher)
- npm or yarn
- MongoDB account (Atlas recommended)
- Firebase project account

### **Frontend Setup**

1. **Clone the repository**

```bash
git clone https://github.com/alamin6688/job-wave-client.git
cd job-wave-client
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env.local` file in the root directory:

```
VITE_API_URL=http://localhost:5000
VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_firebase_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_firebase_messaging_sender_id
VITE_FIREBASE_APP_ID=your_firebase_app_id
```

4. **Run development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### **Backend Setup**

1. **Clone the repository**

```bash
git clone https://github.com/alamin6688/job-wave-server.git
cd job-wave-server
```

2. **Install dependencies**

```bash
npm install
```

3. **Configure environment variables**
   Create a `.env` file:

```
PORT=5000
DATABASE_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
NODE_ENV=development
```

4. **Run development server**

```bash
npm start
```

or for development with auto-reload:

```bash
npm run dev
```

The server will run at `http://localhost:5000`

---

## 🔐 Test Credentials

Use the following credentials to test the application:

| Email            | Password   | Role       |
| ---------------- | ---------- | ---------- |
| raihan@gmail.com | User1234#$ | Freelancer |
| rafid@gmail.com  | User1234#$ | Client     |

---

## 📡 API Documentation

### **Base URL**

```
http://localhost:5000/api
```

### **Major Endpoints**

#### **Authentication**

| Method | Endpoint         | Description       | Auth |
| ------ | ---------------- | ----------------- | ---- |
| POST   | `/auth/register` | User registration | ❌   |
| POST   | `/auth/login`    | User login        | ❌   |
| POST   | `/auth/logout`   | User logout       | ✅   |
| GET    | `/auth/me`       | Get current user  | ✅   |

#### **Jobs**

| Method | Endpoint                   | Description          | Auth |
| ------ | -------------------------- | -------------------- | ---- |
| GET    | `/jobs`                    | Get all jobs         | ❌   |
| GET    | `/jobs/:id`                | Get job details      | ❌   |
| POST   | `/jobs`                    | Create new job       | ✅   |
| PUT    | `/jobs/:id`                | Update job           | ✅   |
| DELETE | `/jobs/:id`                | Delete job           | ✅   |
| GET    | `/jobs/category/:category` | Get jobs by category | ❌   |

#### **Bids**

| Method | Endpoint           | Description        | Auth |
| ------ | ------------------ | ------------------ | ---- |
| GET    | `/bids`            | Get user's bids    | ✅   |
| GET    | `/bids/job/:jobId` | Get bids for a job | ✅   |
| POST   | `/bids`            | Place a bid        | ✅   |
| PUT    | `/bids/:id`        | Update bid         | ✅   |
| DELETE | `/bids/:id`        | Delete bid         | ✅   |

#### **Dashboard**

| Method | Endpoint           | Description         | Auth |
| ------ | ------------------ | ------------------- | ---- |
| GET    | `/dashboard/stats` | Get user statistics | ✅   |
| GET    | `/dashboard/jobs`  | Get user's jobs     | ✅   |
| GET    | `/dashboard/bids`  | Get user's bids     | ✅   |

---

## 📦 Project Structure

```
job-wave-client/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.css
│   ├── assets/
│   ├── Components/
│   │   ├── Button.jsx
│   │   └── SocialLogin.jsx
│   ├── Firebase/
│   │   └── firebase.config.js
│   ├── Hooks/
│   │   ├── UseAuth.jsx
│   │   └── useAxiosSecure.jsx
│   ├── Layout/
│   │   └── Main.jsx
│   ├── Pages/
│   │   ├── Home/
│   │   │   ├── Hero/
│   │   │   │   ├── Hero.jsx
│   │   │   │   └── WaveBackground.jsx
│   │   │   ├── TabCategories/
│   │   │   ├── Portfolio/
│   │   │   └── ...
│   │   ├── Dashboard/
│   │   ├── AllJobs/
│   │   └── ...
│   ├── Providers/
│   │   ├── AuthProvider.jsx
│   │   └── PrivateRoute.jsx
│   └── Routes/
│       └── Routes.jsx
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

---

## 🎨 Features Showcase

### **Homepage Hero Section**

- Animated parallax background with glowing orbs
- Interactive cards that follow mouse movement
- Smooth entrance animations
- Call-to-action buttons with hover effects
- Statistics display

### **Job Categories Section**

- Tab-based job browsing by category
- Loading skeleton animations
- Responsive grid layout (1-4 columns)
- Smooth card animations with stagger effect

### **Dashboard**

- Personal job listings management
- Bid tracking and notifications
- Profile completion status
- Statistics and analytics

### **Job Details Page**

- Complete job information
- Bidding interface
- Related jobs carousel
- Freelancer recommendations

---

## 🔄 Workflow

1. **User Registration** → User creates account via email or social login
2. **Profile Setup** → Complete user profile information
3. **Job Creation/Browsing** → Clients post jobs; Freelancers browse opportunities
4. **Bidding** → Freelancers place bids on projects they're interested in
5. **Selection** → Client reviews bids and selects freelancer
6. **Project Execution** → Collaboration and project completion
7. **Review & Rating** → Users rate and review each other

---

## 🚧 Future Improvements

### **Planned Features**

- 🔔 Real-time notifications (WebSocket integration)
- 💬 In-app messaging system
- 💳 Integrated payment gateway (Stripe/PayPal)
- ⭐ Rating and review system
- 📊 Advanced analytics dashboard
- 🔔 Email notifications
- 📱 Mobile app (React Native)
- 🤖 AI-powered job recommendations
- 🔍 Advanced search with AI
- 📈 Performance analytics for freelancers

### **Known Limitations**

- Payment processing not yet implemented
- Real-time updates require page refresh
- Limited scalability for large concurrent users
- No dispute resolution system

### **Scalability Ideas**

- Implement message queuing (RabbitMQ/Redis)
- Database optimization with indexing
- CDN integration for static assets
- Microservices architecture
- Horizontal scaling with load balancing
- Caching layer (Redis) for frequently accessed data

---

## 🐛 Known Issues & Troubleshooting

### **Common Issues**

**1. MongoDB Connection Error**

```
Solution: Verify DATABASE_URL in .env file and ensure MongoDB Atlas IP whitelist includes your IP
```

**2. Firebase Authentication Not Working**

```
Solution: Check Firebase credentials in .env.local and ensure Firebase project is properly configured
```

**3. CORS Errors**

```
Solution: Ensure backend CORS is configured to accept frontend URL
```

**4. Port Already in Use**

```
Solution: Change PORT in .env or kill process using the port
```

---

## 📝 Environment Variables Reference

### **Frontend (.env.local)**

```
VITE_API_URL=              # Backend API base URL
VITE_FIREBASE_API_KEY=     # Firebase API key
VITE_FIREBASE_AUTH_DOMAIN= # Firebase auth domain
VITE_FIREBASE_PROJECT_ID=  # Firebase project ID
```

### **Backend (.env)**

```
PORT=                      # Server port (default: 5000)
DATABASE_URL=              # MongoDB connection string
JWT_SECRET=                # JWT secret key
JWT_EXPIRE=                # JWT expiration time (e.g., 7d)
NODE_ENV=                  # Environment (development/production)
```

---

## 🧪 Testing

### **Manual Testing**

1. Create account with test credentials
2. Post a sample job
3. Browse jobs by category
4. Place a bid on a job
5. Accept/reject bids
6. View dashboard statistics

### **Automated Testing** (Future)

```bash
npm run test              # Run unit tests
npm run test:e2e         # Run end-to-end tests
npm run coverage         # Generate coverage report
```

---

## 📄 License

This project is open source and available under the MIT License.

---

## 👤 Author & Contact

**Name:** Fuade Hasan Alamin  
**Role:** Full-Stack Developer  
**Email:** alamin6688@gmail.com  
**GitHub:** https://github.com/alamin6688

---

## 🙏 Acknowledgments

- Framer Motion for smooth animations
- Tailwind CSS for responsive styling
- Firebase for authentication
- MongoDB for reliable database
- Vercel for frontend hosting
- React community for excellent documentation

---

## 📞 Support & Feedback

For issues, feature requests, or feedback:

- Open an issue on GitHub
- Contact via email
- Check existing documentation

---

**Last Updated:** January 25, 2026  
**Version:** 1.0.0

---

_Built with ❤️ by Fuade Hasan Alamin_
