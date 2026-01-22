# Job Wave - Complete Project Documentation

## Table of Contents

1. [System Workflow](#system-workflow)
2. [Pages List](#pages-list)
3. [Roles & Features](#roles--features)
4. [Sections Included](#sections-included)
5. [Key Features](#key-features)
6. [Animation & UI Libraries](#animation--ui-libraries)
7. [Tech Stack](#tech-stack)
8. [Overall Architecture](#overall-architecture)

---

## System Workflow

### User Flow Diagram

```
┌─────────────────────────────────────────────────────────────┐
│                     JOB WAVE PLATFORM                       │
└─────────────────────────────────────────────────────────────┘

1. AUTHENTICATION FLOW
   ├─ Sign Up (Email/Google)
   ├─ Sign In (Email/Google)
   ├─ User Profile Created
   └─ Authentication Token Generated (Firebase)

2. JOB POSTING FLOW (For Buyers)
   ├─ Login Required
   ├─ Navigate to Add Job
   ├─ Fill Job Details (Title, Category, Price Range, Deadline)
   ├─ Submit Job Post
   ├─ Job Appears in All Jobs & Dashboard
   └─ Monitor Posted Jobs in "My Posted Jobs"

3. JOB BROWSING & BIDDING FLOW (For Freelancers)
   ├─ Browse All Jobs with Filters & Search
   ├─ View Job Details
   ├─ Place Bid on Job (Price + Deadline + Comment)
   ├─ Track Bids in "My Bids" Dashboard
   └─ Monitor Bid Status (Pending/Accepted/Rejected)

4. BID MANAGEMENT FLOW (For Job Posters)
   ├─ Receive Bids in "Bid Requests"
   ├─ Review Freelancer Proposals
   ├─ Accept/Reject Bids
   ├─ Update Bid Status
   └─ Maintain Bid History

5. JOB UPDATE FLOW
   ├─ Edit Posted Jobs
   ├─ Update Job Details
   ├─ Change Deadline/Price Range
   └─ Save Changes

6. LOGOUT & SESSION MANAGEMENT
   ├─ Clear User Session
   ├─ Remove Auth Token
   └─ Redirect to Home
```

### Authentication Flow

```
User Input → Firebase Auth → Credential Validation → Token Generation
                                                            ↓
                                                    AuthContext Update
                                                            ↓
                                                    Route Protection
                                                            ↓
                                                    Axios Interceptor
                                                     (Token in Header)
```

---

## Pages List

### Public Pages (No Authentication Required)

| Page           | Route       | Purpose                             | Components                                        |
| -------------- | ----------- | ----------------------------------- | ------------------------------------------------- |
| **Home**       | `/`         | Landing page with platform overview | Banner, TabCategories, HowItWorks, FAQ, Portfolio |
| **Sign Up**    | `/sign-up`  | User registration                   | Form, Google Auth Integration                     |
| **Sign In**    | `/sign-in`  | User login                          | Form, Google Auth Integration                     |
| **All Jobs**   | `/all-jobs` | Browse all job listings             | JobCards, Pagination, Filter, Search, Sort        |
| **Contact**    | `/contact`  | Contact form                        | Contact Form                                      |
| **Error Page** | `*`         | 404 Error handling                  | Error message, Navigation links                   |

### Protected Pages (Authentication Required)

| Page               | Route             | Purpose                | User Type  | Components                             |
| ------------------ | ----------------- | ---------------------- | ---------- | -------------------------------------- |
| **Add Job**        | `/add-job`        | Create new job posting | Employer   | Form, DatePicker, Category Select      |
| **Job Details**    | `/job/:id`        | View job and place bid | Freelancer | Job Info, Bid Form, Comments           |
| **My Posted Jobs** | `/my-posted-jobs` | Manage posted jobs     | Employer   | Job List, Edit, Delete, Table          |
| **My Bids**        | `/my-bids`        | View submitted bids    | Freelancer | Bid Table, Status Tracking, History    |
| **Bid Requests**   | `/bid-requests`   | Review received bids   | Employer   | Bid List, Accept/Reject, Status Update |
| **Update Job**     | `/update/:id`     | Edit job details       | Employer   | Form, Pre-filled Data, DatePicker      |

---

## Roles & Features

### Role 1: Employer/Job Poster (Buyer)

**Capabilities:**

- Create and post new jobs
- Set job title, category, description, price range, and deadline
- View all posted jobs in dashboard
- Receive and review bids from freelancers
- Accept or reject bids
- Update job details before deadline
- Delete job postings
- Track all posted jobs and their bid history

**Access:**

- Add Job Form
- My Posted Jobs Dashboard
- Bid Requests Portal
- Job Update Form

---

### Role 2: Freelancer (Bidder)

**Capabilities:**

- Browse all available jobs
- Filter jobs by category
- Search jobs by keywords
- View detailed job information
- Place bids on jobs with custom price and deadline
- Add comments/proposals with bids
- Track bid status (Pending/Accepted/Rejected)
- View all submitted bids in dashboard
- Receive bid acceptance/rejection updates

**Access:**

- All Jobs Listing Page
- Job Details Page
- My Bids Dashboard

---

### Role 3: Guest (Unauthenticated)

**Capabilities:**

- View home page
- Browse public job listings (read-only)
- View contact page
- Access FAQ and How It Works sections
- View portfolio section
- Must sign up/sign in to post jobs or place bids

---

## Sections Included

### 1. Home Page Sections

```
├─ Header/Navbar
│  ├─ Logo & Branding
│  ├─ Navigation Links
│  ├─ User Menu/Auth State
│  └─ Responsive Mobile Menu
│
├─ Banner/Carousel
│  ├─ Autoplay Image Carousel
│  ├─ Navigation Controls
│  ├─ Pagination Dots
│  └─ Call-to-Action Buttons
│
├─ Tab Categories
│  ├─ Job Category Tabs
│  ├─ Job Cards Grid
│  ├─ Dynamic Filtering
│  └─ Category Selection
│
├─ How It Works
│  ├─ Step-by-step Guide
│  ├─ 4 Main Steps Explanation
│  └─ Icon & Description Cards
│
├─ FAQ Section
│  ├─ Collapsible Q&A
│  ├─ Common Questions
│  └─ Comprehensive Answers
│
├─ Portfolio Section
│  ├─ Featured Projects
│  ├─ Success Stories
│  └─ Platform Highlights
│
└─ Footer
   ├─ Company Info
   ├─ Quick Links
   ├─ Social Media Links
   └─ Contact Information
```

### 2. Authentication Pages

```
├─ Sign Up
│  ├─ Email Registration Form
│  ├─ Google OAuth Integration
│  ├─ Password Validation
│  └─ Profile Picture Upload
│
└─ Sign In
   ├─ Email/Password Form
   ├─ Google OAuth Integration
   ├─ Remember Me Option
   └─ Forgot Password Link
```

### 3. Job Management Sections

```
├─ Add/Update Job Form
│  ├─ Job Title Input
│  ├─ Category Selection
│  ├─ Description Editor
│  ├─ Price Range (Min/Max)
│  ├─ Deadline DatePicker
│  └─ Submit Button
│
├─ Job Listings
│  ├─ Job Cards with Images
│  ├─ Job Info Preview
│  ├─ Price Display
│  ├─ Category Badge
│  ├─ Posted By Info
│  └─ Call-to-Action Buttons
│
├─ All Jobs Page
│  ├─ Category Filter Dropdown
│  ├─ Sort Options
│  ├─ Search Bar
│  ├─ Job Grid Layout
│  ├─ Pagination Controls
│  └─ Results Count
│
└─ My Posted Jobs
   ├─ Table View
   ├─ Job Title, Category
   ├─ Deadline, Bids Count
   ├─ Edit Button
   ├─ Delete Button
   └─ Status Indicator
```

### 4. Bid Management Sections

```
├─ Job Details Page
│  ├─ Full Job Information
│  ├─ Employer Profile
│  ├─ Price Range Display
│  ├─ Deadline Information
│  ├─ Description Section
│  ├─ Bid Form
│  │  ├─ Price Input (with Validation)
│  │  ├─ Deadline DatePicker
│  │  ├─ Comment/Proposal Field
│  │  └─ Submit Bid Button
│  └─ Success/Error Toast Notifications
│
├─ My Bids (Freelancer)
│  ├─ Bid History Table
│  ├─ Job Title Display
│  ├─ Bid Price Submitted
│  ├─ Status Column (Pending/Accepted/Rejected)
│  ├─ Deadline Info
│  └─ Status Update Options
│
└─ Bid Requests (Employer)
   ├─ Incoming Bids Table
   ├─ Freelancer Information
   ├─ Bid Price Submitted
   ├─ Current Status Display
   ├─ Accept Button
   ├─ Reject Button
   ├─ Pending Status Indicator
   └─ Real-time Status Update
```

### 5. Navigation & Layout

```
├─ Navbar
│  ├─ Logo (Home Link)
│  ├─ Main Menu Links
│  ├─ Public Links (All Jobs, Contact)
│  ├─ Auth Links (Sign In/Sign Up)
│  ├─ User Menu (When Logged In)
│  │  ├─ Add Job
│  │  ├─ My Posted Jobs
│  │  ├─ My Bids
│  │  ├─ Bid Requests
│  │  └─ Logout
│  └─ Mobile Responsive Hamburger
│
└─ Footer
   ├─ Company Description
   ├─ Quick Links Section
   ├─ Categories Links
   ├─ Support Links
   └─ Copyright Info
```

---

## Key Features

### 1. Authentication & Authorization

- ✅ Email/Password Registration & Login
- ✅ Google OAuth Integration
- ✅ Secure Token Management
- ✅ Profile Update Capability
- ✅ Protected Routes (Private Route Component)
- ✅ Session Management
- ✅ Auto Logout on Token Expiry

### 2. Job Management

- ✅ Create New Job Postings
- ✅ Edit Job Details (Title, Category, Price, Deadline)
- ✅ Delete Job Postings
- ✅ View All Posted Jobs in Dashboard
- ✅ Filter Jobs by Category
- ✅ Search Jobs by Keywords
- ✅ Sort Jobs (By Price, Date, Popularity)
- ✅ Pagination for Job Listings
- ✅ Dynamic Job Cards with Preview

### 3. Bidding System

- ✅ Place Bids on Jobs with Custom Price
- ✅ Price Validation (Within Range)
- ✅ Deadline Selection for Bid Completion
- ✅ Comments/Proposal with Bid
- ✅ Bid Status Tracking (Pending/Accepted/Rejected)
- ✅ Real-time Bid Notifications
- ✅ Accept/Reject Bid Functionality

### 4. User Dashboard

- ✅ "My Posted Jobs" - Manage all posted jobs
- ✅ "My Bids" - Track all submitted bids
- ✅ "Bid Requests" - Review incoming bids
- ✅ Statistics Display
- ✅ Quick Action Buttons
- ✅ Status Indicators

### 5. Search & Filter

- ✅ Category-based Filtering
- ✅ Keyword Search
- ✅ Price Range Filter
- ✅ Sort by Multiple Options
- ✅ Combined Filter & Search
- ✅ Dynamic Result Count

### 6. User Experience

- ✅ Toast Notifications (Success, Error, Info)
- ✅ Sweet Alert for Confirmations
- ✅ Loading States
- ✅ Error Boundaries
- ✅ Responsive Design
- ✅ Smooth Navigation
- ✅ Loading Spinners

### 7. Data Management

- ✅ Axios Interceptors for API Calls
- ✅ Credential-based Requests
- ✅ Error Handling
- ✅ Automatic Logout on 401/403
- ✅ React Query for Data Caching
- ✅ Optimistic Updates

---

## Animation & UI Libraries

### Animation Packages

| Package         | Version  | Purpose                                  |
| --------------- | -------- | ---------------------------------------- |
| **animate.css** | ^4.1.1   | CSS animations for entrance/exit effects |
| **swiper**      | ^11.1.10 | Image carousel with smooth transitions   |

### UI Component Libraries

| Package             | Version  | Purpose                               |
| ------------------- | -------- | ------------------------------------- |
| **daisyui**         | ^4.12.10 | Pre-built Tailwind CSS components     |
| **react-icons**     | ^5.3.0   | Icon library (SVG icons)              |
| **sweetalert2**     | ^11.12.2 | Beautiful alert dialogs               |
| **react-hot-toast** | ^2.4.1   | Toast notifications                   |
| **react-tabs**      | ^6.0.2   | Tab component for categorized content |

### Animation Features Used

- **Carousel Animations** - Swiper with autoplay, pagination, navigation
- **Toast Animations** - React Hot Toast for notifications
- **Alert Animations** - SweetAlert2 for confirmations
- **CSS Animations** - Animate.css for entrance effects
- **Transition Effects** - Tailwind CSS transitions

---

## Tech Stack

### Frontend Framework

```
React 18.3.1 - UI Library
ReactDOM 18.3.1 - React DOM Rendering
```

### State Management & Data Fetching

```
@tanstack/react-query ^5.55.0 - Server State Management
@tanstack/react-query-devtools ^5.55.0 - Query Debugging
```

### Routing

```
react-router-dom ^6.25.1 - Client-side Routing
```

### Authentication & Backend

```
firebase ^10.12.3 - Authentication & Cloud Services
axios ^1.7.7 - HTTP Client
```

### Form Handling

```
react-hook-form ^7.52.1 - Form State Management
react-datepicker ^7.3.0 - Date Picker Component
date-fns ^3.6.0 - Date Utilities
```

### Styling & UI

```
tailwindcss ^3.4.6 - Utility-first CSS Framework
daisyui ^4.12.10 - Tailwind Component Library
postcss ^8.4.39 - CSS Processing
autoprefixer ^10.4.19 - CSS Vendor Prefixes
```

### Notifications & Alerts

```
react-hot-toast ^2.4.1 - Toast Notifications
sweetalert2 ^11.12.2 - Alert Dialogs
```

### SEO & Metadata

```
react-helmet-async ^2.0.5 - Document Head Management
```

### UI Components

```
swiper ^11.1.10 - Carousel/Slider Component
react-icons ^5.3.0 - Icon Library
react-tabs ^6.0.2 - Tab Component
```

### Build Tools

```
vite ^5.3.4 - Build Tool & Dev Server
@vitejs/plugin-react ^4.3.1 - React Plugin for Vite
```

### Development

```
eslint ^8.57.0 - Code Linting
eslint-plugin-react ^7.34.3 - React ESLint Rules
eslint-plugin-react-hooks ^4.6.2 - Hooks ESLint Rules
eslint-plugin-react-refresh ^0.4.7 - Fast Refresh Rules
```

---

## Overall Architecture

### Project Structure

```
job-wave-client/
│
├── public/                          # Static assets
│   ├── _redirects                   # Netlify redirects config
│   └── data.json                    # Static data
│
├── src/
│   ├── main.jsx                     # Entry point
│   ├── App.jsx                      # Root component
│   ├── index.css                    # Global styles
│   ├── App.css                      # App-specific styles
│   │
│   ├── assets/                      # Images, icons
│   │   └── carousel1.jpg, carousel2.jpg, carousel3.jpg
│   │
│   ├── Firebase/
│   │   └── firebase.config.js       # Firebase initialization
│   │
│   ├── Providers/
│   │   ├── AuthProvider.jsx         # Auth context provider
│   │   └── PrivateRoute.jsx         # Protected route wrapper
│   │
│   ├── Hooks/
│   │   ├── UseAuth.jsx              # Auth custom hook
│   │   └── useAxiosSecure.jsx       # Secure axios instance
│   │
│   ├── Components/
│   │   └── SocialLogin.jsx          # Google OAuth component
│   │
│   ├── Routes/
│   │   └── Routes.jsx               # Router configuration
│   │
│   ├── Layout/
│   │   └── Main.jsx                 # Main layout wrapper
│   │
│   └── Pages/                       # Page components
│       ├── Home/
│       │   ├── Home/
│       │   │   └── Home.jsx         # Main home page
│       │   ├── Banner/
│       │   │   ├── Banner.jsx       # Carousel component
│       │   │   └── Slide.jsx        # Slide component
│       │   ├── TabCategories/
│       │   │   ├── TabCategories.jsx # Category tabs
│       │   │   └── JobCards.jsx     # Job card display
│       │   ├── HowItWorks/
│       │   │   └── HowItWorks.jsx   # Process explanation
│       │   ├── FAQ/
│       │   │   └── FAQ.jsx          # FAQ section
│       │   └── Portfolio/
│       │       └── Portfolio.jsx    # Portfolio showcase
│       │
│       ├── Shared/
│       │   ├── Navbar/
│       │   │   └── Navbar.jsx       # Navigation bar
│       │   └── Footer/
│       │       └── Footer.jsx       # Footer
│       │
│       ├── SignUp/
│       │   └── SignUp.jsx           # Registration page
│       │
│       ├── SignIn/
│       │   └── SignIn.jsx           # Login page
│       │
│       ├── AllJobs/
│       │   └── AllJobs.jsx          # All jobs listing
│       │
│       ├── AddJob/
│       │   └── AddJob.jsx           # Create job
│       │
│       ├── UpdateJob/
│       │   └── UpdateJob.jsx        # Edit job
│       │
│       ├── JobDetails/
│       │   └── JobDetails.jsx       # Job details & bidding
│       │
│       ├── MyPostedJobs/
│       │   └── MyPostedJobs.jsx     # Posted jobs dashboard
│       │
│       ├── MyBids/
│       │   └── MyBids.jsx           # Submitted bids dashboard
│       │
│       ├── BidRequests/
│       │   └── BidRequests.jsx      # Bid management
│       │
│       ├── Contact/
│       │   └── Contact.jsx          # Contact page
│       │
│       └── ErrorPage/
│           └── ErrorPage.jsx        # 404 error page
│
├── index.html                       # HTML entry point
├── vite.config.js                   # Vite configuration
├── tailwind.config.js               # Tailwind CSS config
├── postcss.config.js                # PostCSS config
├── package.json                     # Dependencies
├── firebase.json                    # Firebase config
└── README.md                        # Project readme
```

---

### Data Flow Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERACTION LAYER                    │
│                   (React Components)                         │
└─────────────────────────────────────────────────────────────┘
                           ↓↑
┌─────────────────────────────────────────────────────────────┐
│                    STATE MANAGEMENT LAYER                    │
│  ┌─ React Context (AuthContext)                             │
│  ├─ React Query (@tanstack/react-query)                     │
│  ├─ Component State (useState, useReducer)                  │
│  └─ Custom Hooks (useAuth, useAxiosSecure)                  │
└─────────────────────────────────────────────────────────────┘
                           ↓↑
┌─────────────────────────────────────────────────────────────┐
│                   ROUTING LAYER                              │
│              (React Router v6)                              │
│  ├─ Public Routes (Home, SignIn, SignUp, AllJobs)          │
│  ├─ Protected Routes (AddJob, MyBids, etc.)                 │
│  └─ Route Guards (PrivateRoute)                             │
└─────────────────────────────────────────────────────────────┘
                           ↓↑
┌─────────────────────────────────────────────────────────────┐
│                 API & HTTP CLIENT LAYER                      │
│  ┌─ Axios Instance (useAxiosSecure)                        │
│  ├─ Request Interceptor (Add Auth Token)                    │
│  ├─ Response Interceptor (Error Handling)                   │
│  └─ Firebase Auth Integration                               │
└─────────────────────────────────────────────────────────────┘
                           ↓↑
┌─────────────────────────────────────────────────────────────┐
│                  BACKEND SERVICES LAYER                      │
│  ├─ REST API Endpoints                                     │
│  ├─ Database Operations                                    │
│  └─ Authentication Service                                 │
└─────────────────────────────────────────────────────────────┘
                           ↓↑
┌─────────────────────────────────────────────────────────────┐
│              EXTERNAL SERVICES & DATABASES                   │
│  ├─ Firebase Authentication                                │
│  ├─ Backend API Server                                     │
│  └─ Database (MongoDB/SQL)                                 │
└─────────────────────────────────────────────────────────────┘
```

---

### Component Communication Pattern

```
AuthProvider (Context)
    ├─ Provides: user, loading, createUser, signIn, googleSignIn, logOut
    ├─ Consumers: All authenticated components
    └─ Security: Token validation, Session management

PrivateRoute (Route Guard)
    ├─ Checks: User authentication status
    ├─ Shows: Loading spinner while checking
    └─ Redirects: Unauthenticated users to SignIn

useAxiosSecure (Custom Hook)
    ├─ Creates: Secure Axios instance
    ├─ Adds: Auth interceptors
    ├─ Handles: 401/403 errors
    └─ Auto-logout: On token expiry

useAuth (Custom Hook)
    ├─ Returns: Auth context value
    └─ Simplifies: Component access to auth info
```

---

### API Integration Pattern

```
Component → Event Handler → useAxiosSecure/axios
              ↓
        API Request with Auth Token
              ↓
        Backend Server Processing
              ↓
        Response Data/Error
              ↓
        React Query Cache Update (if used)
        ↓
Component State Update → UI Re-render
        ↓
Toast/Alert Notification → User Feedback
```

---

### Authentication Sequence

```
1. User visits app
   ├─ AuthProvider initializes
   └─ onAuthStateChanged listener activated

2. User Registration/Login
   ├─ Email/Password or Google OAuth
   ├─ Firebase validates credentials
   ├─ AuthContext updates with user data
   └─ Token generated for backend calls

3. Protected Route Access
   ├─ PrivateRoute checks user existence
   ├─ If logged in → Show page
   └─ If not → Redirect to SignIn

4. API Calls
   ├─ Axios interceptor adds auth token
   ├─ Backend validates token
   ├─ Return data/error
   └─ Handle 401/403 → Auto logout

5. Logout
   ├─ Clear Firebase session
   ├─ Clear backend cookies
   ├─ Reset AuthContext
   └─ Redirect to home
```

---

### State Management Strategy

```
Global State (Context):
├─ User information
├─ Loading states
└─ Authentication status

Server State (React Query):
├─ Jobs data
├─ Bids data
├─ Posted jobs
└─ Bid requests

Local Component State:
├─ Form inputs
├─ UI toggles
├─ Pagination page
└─ Filters/Sorting
```

---

### Performance Optimization

```
✅ Code Splitting
   └─ React Router lazy loading

✅ Caching
   ├─ React Query caching
   └─ Browser caching

✅ Lazy Loading
   ├─ Image lazy loading
   └─ Component lazy loading

✅ Memoization
   ├─ useMemo for expensive computations
   └─ useCallback for function memoization

✅ Bundle Optimization
   ├─ Tree shaking
   ├─ Minification
   └─ Vite's optimized build
```

---

## Environment Variables Required

Create a `.env.local` file in the root directory:

```bash
VITE_API_URL=<Your Backend API URL>
VITE_APIKEY=<Firebase API Key>
VITE_AUTHDOMAIN=<Firebase Auth Domain>
VITE_PROJECTID=<Firebase Project ID>
VITE_STORAGEBUCKET=<Firebase Storage Bucket>
VITE_MESSAGINGSENDERID=<Firebase Messaging Sender ID>
VITE_APPID=<Firebase App ID>
```

---

## Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation Steps

```bash
# Clone the repository
git clone <repository-url>

# Install dependencies
npm install

# Create .env.local file with required variables
cp .env.example .env.local

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## File Structure Summary

| Directory         | Purpose                          |
| ----------------- | -------------------------------- |
| `src/Providers/`  | Context providers & route guards |
| `src/Hooks/`      | Custom React hooks               |
| `src/Routes/`     | Route configuration              |
| `src/Layout/`     | Layout wrappers                  |
| `src/Pages/`      | Page components                  |
| `src/Components/` | Reusable components              |
| `src/Firebase/`   | Firebase config                  |
| `public/`         | Static files                     |

---

## Key Technologies Explained

### React Router v6

Handles client-side routing with nested routes, loaders, and error boundaries.

### Firebase Authentication

Provides secure user authentication with email/password and OAuth providers.

### React Query

Manages server state with automatic caching, synchronization, and background refetching.

### Axios Interceptors

Centralized HTTP request/response handling with automatic token injection and error management.

### Tailwind CSS + DaisyUI

Rapid UI development with pre-built components and utility classes.

### React Hot Toast

Non-intrusive notifications for user feedback (success, error, info messages).

---

## API Endpoints Integration

The application communicates with backend via these endpoint patterns:

```
GET /all-jobs              - Fetch all jobs with pagination
GET /all-jobs-count        - Get total job count
GET /job/:id               - Get specific job details
POST /job                  - Create new job
PATCH /job/:id             - Update job
DELETE /job/:id            - Delete job

GET /jobs/:email           - Get jobs by poster email
GET /my-bids/:email        - Get bids placed by freelancer
GET /bid-requests/:email   - Get bids received by employer
POST /bid                  - Place bid on job
PATCH /bid/:id             - Update bid status

POST /logout               - Logout user
```

---

## Deployment

The app is configured for Netlify deployment with `_redirects` file for SPA routing.

---

**Generated: January 23, 2026**
**Project: Job Wave - Freelance Job Platform**
**Version: 1.0.0**
