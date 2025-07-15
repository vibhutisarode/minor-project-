# G H Raisoni College of Engineering - Management System

## 🎓 Project Overview

A comprehensive web-based management system designed for G H Raisoni College of Engineering and Management, Nagpur. This system provides streamlined access to various college services including student management, faculty management, scheduling, and administrative functions.

## ✨ Features

### 🏠 **Home Page**
- Modern, responsive design with college branding
- Hero section with college image and motto
- Feature highlights showcasing college strengths
- Smooth scrolling navigation and parallax effects

### 👥 **User Management**
- **Students Portal**: Dedicated interface for student activities
- **Faculty Portal**: Teacher-specific functionalities
- **Admin Panel**: Administrative controls and oversight
- **Authentication**: Secure login and signup system

### 📅 **Scheduler System**
- Interactive scheduling interface
- Timetable management for different classes
- Backend support for scheduling operations
- Class-wise timetable display (3C class example included)

### 📞 **Contact & Communication**
- Contact page for inquiries
- User-friendly signup and login forms
- Faculty-specific signin options

## 🛠️ Technology Stack

### Frontend
- **HTML5**: Semantic structure and accessibility
- **CSS3**: Modern styling with responsive design
- **JavaScript**: Interactive functionality and smooth animations
- **Responsive Design**: Mobile-first approach

### Backend
- **Node.js**: Server-side JavaScript runtime
- **Express.js**: Web application framework
- **EJS**: Templating engine for dynamic content

### Database
- **SQL**: Database management and queries
- Structured data storage for users and schedules

## 📁 Project Structure

```
├── admin.html              # Admin dashboard
├── home.html               # Main landing page
├── student.html            # Student portal
├── teachers.html           # Faculty portal
├── scheduler.html          # Scheduling interface
├── login.html              # User authentication
├── signup.html             # User registration
├── contact.html            # Contact information
├── raisoni.css            # Main stylesheet
├── style.css              # Additional styles
├── script.js              # Frontend JavaScript
├── server.js              # Main server file
├── database.sql           # Database schema
├── student-scheduler-backend/  # Backend modules
│   ├── config/            # Database configuration
│   ├── models/            # Data models
│   ├── routes/            # API routes
│   └── views/             # EJS templates
└── timetable/             # Timetable resources
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager
- SQL database (MySQL/PostgreSQL)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/vibhutisarode/minor-project-.git
   cd minor-project-
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up the database**
   ```bash
   # Import the database schema
   mysql -u your_username -p your_database < database.sql
   ```

4. **Configure environment variables**
   Create a `.env` file in the root directory:
   ```env
   DB_HOST=localhost
   DB_USER=your_username
   DB_PASSWORD=your_password
   DB_NAME=your_database
   PORT=3000
   ```

5. **Start the application**
   ```bash
   npm start
   # or
   node server.js
   ```

6. **Access the application**
   Open your browser and navigate to `http://localhost:3000`

## 🎯 Usage

### For Students
1. Navigate to the **Students** section
2. Register or login with your credentials
3. Access your dashboard and schedule
4. View timetables and important announcements

### For Faculty
1. Use the **Teachers** portal
2. Login with faculty credentials
3. Manage your classes and schedules
4. Access administrative tools

### For Administrators
1. Access the **Admin** panel
2. Manage users, schedules, and system settings
3. Generate reports and analytics
4. Oversee overall system operations

## 🎨 Design Features

- **Modern UI/UX**: Clean, intuitive interface design
- **Responsive Layout**: Optimized for desktop, tablet, and mobile
- **College Branding**: Consistent use of GHRCEMN colors and imagery
- **Accessibility**: Semantic HTML and keyboard navigation support
- **Performance**: Optimized images and efficient CSS/JS

## 📋 Future Enhancements

- [ ] Real-time notifications system
- [ ] Mobile app development
- [ ] Advanced reporting and analytics
- [ ] Integration with external academic systems
- [ ] Multi-language support
- [ ] Enhanced security features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is developed as part of an academic minor project for G H Raisoni College of Engineering and Management, Nagpur.

## 👥 Team

**Project Developer**: Vibhuti Sarode  
**Institution**: G H Raisoni College of Engineering and Management, Nagpur  
**Academic Year**: 2024-2025



---

**Motto**: *"Empowering Minds, Transforming Futures"* - GHRCEMN

## 📊 Project Status

- ✅ Frontend Development Complete
- ✅ Backend API Implementation
- ✅ Database Design and Setup
- ✅ User Authentication System
- ✅ Responsive Design Implementation
- 🔄 Testing and Optimization (In Progress)
- ⏳ Deployment (Upcoming)

---

*This project demonstrates modern web development practices and serves as a practical solution for college management needs.*
