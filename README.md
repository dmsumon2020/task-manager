Task Management Application
Overview
The Task Management Application is a web-based tool designed to help users manage their tasks efficiently. Users can add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into three sections: To-Do, In Progress, and Done. The application ensures that changes are saved instantly to the database, providing a seamless user experience.

Key Features

1. Authentication
   Users can sign in using Firebase Authentication (Google sign-in).
   User details (User ID, email, and display name) are stored in the database upon first login.
2. Task Management System
   Users can:
   Add new tasks with a title (max 50 characters) and an optional description (max 200 characters).
   Edit existing tasks.
   Delete tasks permanently from the database.
   Reorder tasks within a category and drag tasks between categories (To-Do, In Progress, Done).
   Each task includes:
   Title
   Description
   Timestamp (auto-generated upon creation)
   Category
3. Database & Persistence
   Tasks are stored in a MongoDB database via an Express.js server.
   Real-time updates ensure tasks remain in their last known order after refreshing or reopening the app.
   Changes are saved instantly in the database using one of the following approaches:
   MongoDB Change Streams
   WebSockets
   Optimistic UI Updates
   Polling (as a fallback)
4. Frontend UI
   Built using Vite.js and React.
   Utilizes a drag-and-drop library (e.g., react-beautiful-dnd).
   Features a modern, clean, and responsive design with a maximum of four colors for a minimalistic look.
5. Responsiveness
   The application is fully responsive, providing a smooth experience on both desktop and mobile devices.
   Mobile-friendly drag-and-drop functionality is implemented.
6. Backend
   An Express.js API handles CRUD operations for tasks.
   Endpoints include:
   POST /tasks – Add a new task
   GET /tasks – Retrieve all tasks for the logged-in user
   PUT /tasks/:id – Update task details (title, description, category)
   DELETE /tasks/:id – Delete a task
   Technologies Used
   Frontend: Vite.js, React, react-beautiful-dnd (or alternative drag-and-drop library)
   Backend: Express.js, MongoDB
   Authentication: Firebase Authentication (Google sign-in)
   Getting Started
   Prerequisites
   Node.js and npm installed on your machine.
   MongoDB database set up and accessible.
   Firebase project created with authentication enabled.
   Installation
   Clone the repository:

bash
Run
Copy code
git clone https://github.com/yourusername/task-management-app.git
cd task-management-app
Install dependencies for the backend:

bash
Run
Copy code
cd backend
npm install
Install dependencies for the frontend:

bash
Run
Copy code
cd frontend
npm install
Set up environment variables for Firebase and MongoDB in both the frontend and backend.

Running the Application
Start the backend server:

bash
Run
Copy code
cd backend
npm start
Start the frontend application:

bash
Run
Copy code
cd frontend
npm run dev
Open your browser and navigate to http://localhost:3000 to access the application.

Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any enhancements or bug fixes.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
Thanks to the creators of the libraries and frameworks used in this project.
Special thanks to the open-source community for their contributions and support.
