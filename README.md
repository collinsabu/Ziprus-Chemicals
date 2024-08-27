# 🏗️ Responsive Website Design for Solid Mineral Processing Organization

This project is a responsive information website developed for a solid mineral processing organization. The application features a public-facing website that provides information about the organization and an admin panel with role-based access control, allowing authenticated users to manage internal processes and data.

## 📋 Table of Contents
- [Features](#features)
  - [Public Route](#public-route)
  - [Admin Route](#admin-route)
    - [Admin Level One Access](#admin-level-one-access)
    - [Admin Level Two Access](#admin-level-two-access)
  - [E-Learning Route](#e-learning-route)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Features

### Public Route
The public route is the information website accessible to everyone. It provides detailed information about the organization's services and products. Key features include:

- **Order Form:** Visitors can place orders by filling out an order form. The submitted data is sent to the database and later displayed in the admin panel for processing.
- **Contact Form:** Visitors can also send inquiries through a contact form. Like the order form, the data is stored in the database and displayed in the admin section.

### Admin Route
The admin route is accessible only to authenticated users. Role-based access control (RBAC) is implemented to restrict access based on the admin's level.

#### Admin Level One Access
Admins with Level One access have limited permissions within the admin panel. They can view and manage specific sections of the application, including:

- **Order List:** View and manage the list of orders placed by customers.
- **Contact List:** Access and manage contact form submissions.
- **Reports:** Submit and view reports related to various aspects of the organization's operations.
- **Light Usage:** Calculate production efficiency based on light availability and usage against set targets. This helps determine whether the available light is being fully utilized.

#### Admin Level Two Access
Admins with Level Two access have broader permissions and can access all routes, including the balance management sections. Key features include:

- **Customer Payment and Balance:** Track customer supplies, payments made, and calculate outstanding balances.
- **Salary Balance:** Calculate the work done by workers and the corresponding payments made.
- **Bag Balance:** Monitor bag purchases and usage to ensure inventory management.
- **Crude Balance:** Manage and track crude purchases and supplies.
- **Crude Payment Balance:** Calculate and manage payments made for crude materials against their purchase.

### E-Learning Route
The application includes an e-learning route with access controlled based on user levels. This section provides detailed tutorials and explanations on how to use the admin panel for both Level One and Level Two admins.

## 🛠️ Technologies Used

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - A React-based framework used for building the website and admin panel.
- ![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white) - A NoSQL database used to store orders, contact forms, reports, and other data.
- ![NextAuth.js](https://img.shields.io/badge/NextAuth.js-000000?style=for-the-badge&logo=next.js&logoColor=white) - For handling authentication and session management, including role-based access control.

## 🚀 Getting Started

To get started with the Responsive Website Design project, follow these steps:

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/responsive-website-design.git
   cd responsive-website-design
Install dependencies:

bash
Copy code
npm install
Set up environment variables: Create a .env.local file in the root directory and add the necessary environment variables for MongoDB, NextAuth, etc.

Run the development server:

bash
Copy code
npm run dev
The app will be available at http://localhost:3000.

Usage
Public Route: Accessible by all users to view information and interact with order/contact forms.
Admin Route: Accessible only by authenticated users with appropriate role-based permissions.
E-Learning Route: Provides guidance on how to use the admin panel.
🤝 Contributing
Contributions are welcome! If you have suggestions or improvements, please feel free to submit a Pull Request or open an issue.
