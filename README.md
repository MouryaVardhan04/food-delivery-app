# 🍕 Food Delivery Application

A full-stack food delivery application with customer-facing frontend, admin panel, and backend API. Built with React, Node.js, Express, and MongoDB.

## 📋 Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## ✨ Features

### Customer Features
- 🍽️ **Browse Food Items** - View available food items with images and descriptions
- 🛒 **Shopping Cart** - Add/remove items, manage quantities
- 👤 **User Authentication** - Sign up, login, and profile management
- 📱 **Order Management** - Place orders, track order status, view order history
- 💳 **Payment Integration** - Secure payment processing with Stripe
- 📍 **Order Tracking** - Real-time order status updates
- 🔍 **Search & Filter** - Find food items by category or search terms

### Admin Features
- ➕ **Add Food Items** - Upload food images and add new menu items
- 📝 **Manage Inventory** - Edit, update, and delete food items
- 📊 **Order Management** - View and manage customer orders
- 📈 **Dashboard** - Overview of orders and sales
- 👥 **User Management** - View customer information

### Technical Features
- 🔐 **JWT Authentication** - Secure user authentication
- 🖼️ **Image Upload** - Multer for handling food images
- 🗄️ **MongoDB Database** - Scalable NoSQL database
- 🌐 **RESTful API** - Clean and organized API endpoints
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- ⚡ **Real-time Updates** - Live order status updates

## 🛠️ Tech Stack

### Frontend (Customer App)
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications
- **Stripe.js** - Payment processing

### Admin Panel
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API calls
- **React Toastify** - Toast notifications

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB ODM
- **JWT** - Authentication
- **bcrypt** - Password hashing
- **Multer** - File upload handling
- **CORS** - Cross-origin resource sharing
- **Stripe** - Payment processing
- **Validator** - Input validation
- **Nodemon** - Development server

## 📁 Project Structure

```
food-delivery-app/
├── frontend/                 # Customer-facing React app
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Images and static files
│   │   ├── components/      # Reusable UI components
│   │   │   ├── AppDownload/
│   │   │   ├── ExploreMenu/
│   │   │   ├── FoodDisplay/
│   │   │   ├── FoodItem/
│   │   │   ├── Footer/
│   │   │   ├── Header/
│   │   │   ├── LoginPopup/
│   │   │   └── Navbar/
│   │   ├── Context/         # React context for state management
│   │   ├── pages/           # Page components
│   │   │   ├── Cart/
│   │   │   ├── Home/
│   │   │   ├── MyOrders/
│   │   │   ├── PlaceOrder/
│   │   │   └── Verify/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── admin/                   # Admin panel React app
│   ├── public/
│   ├── src/
│   │   ├── assets/          # Admin-specific assets
│   │   ├── components/      # Admin components
│   │   │   ├── Navbar/
│   │   │   └── Sidebar/
│   │   ├── pages/           # Admin pages
│   │   │   ├── Add/
│   │   │   ├── List/
│   │   │   └── Orders/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
├── backend/                 # Node.js/Express API
│   ├── config/             # Database configuration
│   ├── controllers/        # Route controllers
│   │   ├── cartController.js
│   │   ├── foodController.js
│   │   ├── orderController.js
│   │   └── userController.js
│   ├── middleware/         # Custom middleware
│   │   └── auth.js
│   ├── models/            # MongoDB schemas
│   │   ├── foodModel.js
│   │   ├── orderModel.js
│   │   └── userModel.js
│   ├── routes/            # API routes
│   │   ├── cartRoute.js
│   │   ├── foodRoute.js
│   │   ├── orderRoute.js
│   │   └── userRoute.js
│   ├── uploads/           # Uploaded food images
│   ├── package.json
│   └── server.js
└── README.md
```

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local installation or MongoDB Atlas)
- Git

### Step 1: Clone the Repository
```bash
git clone https://github.com/MouryaVardhan04/food-delivery-app.git
cd food-delivery-app
```

### Step 2: Install Backend Dependencies
```bash
cd backend
npm install
```

### Step 3: Install Frontend Dependencies
```bash
cd ../frontend
npm install
```

### Step 4: Install Admin Panel Dependencies
```bash
cd ../admin
npm install
```

### Step 5: Set Up Environment Variables
Create a `.env` file in the backend directory:
```env
PORT=4000
MONGODB_URI=mongodb://localhost:27017/food-del
JWT_SECRET=your_jwt_secret_key
STRIPE_SECRET_KEY=your_stripe_secret_key
```

### Step 6: Start MongoDB
Make sure MongoDB is running on your local machine:
```bash
# On macOS with Homebrew
brew services start mongodb-community

# On Windows
net start MongoDB

# On Linux
sudo systemctl start mongod
```

## 🎯 Usage

### Start the Backend Server
```bash
cd backend
npm run server
```
The backend will start on `http://localhost:4000`

### Start the Frontend (Customer App)
```bash
cd frontend
npm run dev
```
The frontend will start on `http://localhost:5173`

### Start the Admin Panel
```bash
cd admin
npm run dev
```
The admin panel will start on `http://localhost:5174`

## 🔌 API Endpoints

### Authentication
- `POST /api/user/signup` - User registration
- `POST /api/user/login` - User login
- `POST /api/user/verify` - Verify user account

### Food Items
- `GET /api/food/list` - Get all food items
- `POST /api/food/add` - Add new food item (Admin only)
- `PUT /api/food/edit/:id` - Edit food item (Admin only)
- `DELETE /api/food/remove/:id` - Remove food item (Admin only)

### Cart
- `POST /api/cart/add` - Add item to cart
- `POST /api/cart/remove` - Remove item from cart
- `POST /api/cart/get` - Get user's cart

### Orders
- `POST /api/order/add` - Place new order
- `GET /api/order/list` - Get user's orders
- `PUT /api/order/update/:id` - Update order status (Admin only)

## 🔧 Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Backend server port | `4000` |
| `MONGODB_URI` | MongoDB connection string | `mongodb://localhost:27017/food-del` |
| `JWT_SECRET` | Secret key for JWT tokens | `your_secret_key_here` |
| `STRIPE_SECRET_KEY` | Stripe secret key for payments | `sk_test_...` |

## 🎨 Key Features Implementation

### User Authentication
- JWT-based authentication
- Password hashing with bcrypt
- Protected routes with middleware

### Shopping Cart
- Persistent cart data in user document
- Real-time cart updates
- Quantity management

### Order Processing
- Order status tracking
- Payment integration with Stripe
- Order history management

### Admin Dashboard
- Food item management (CRUD operations)
- Order management and status updates
- Image upload for food items

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the ISC License.

## 👨‍💻 Author

**Mourya Vardhan Rathod**
- GitHub: [@MouryaVardhan04](https://github.com/MouryaVardhan04)

## 🙏 Acknowledgments

- React team for the amazing framework
- MongoDB for the database
- Stripe for payment processing
- All the open-source libraries used in this project

---

⭐ If you found this project helpful, please give it a star on GitHub! 