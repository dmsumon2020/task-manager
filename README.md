# Task Management Application

This project is a Task Management Application built using Vite.js, React, Express.js, and MongoDB. It allows users to add, edit, delete, and reorder tasks using a drag-and-drop interface. Tasks are categorized into To-Do, In Progress, and Done sections, with changes saved instantly to the database. The app features real-time synchronization, a clean UI, and a responsive design for both desktop and mobile devices. User authentication is handled via Firebase (Google sign-in).

**Key Features:**

- **Authentication:** Secure access using Firebase Authentication (Google sign-in). User details are stored in the database upon first login.
- **Task Management:** Add, edit, delete, and reorder tasks. Drag-and-drop interface for moving tasks between categories (To-Do, In Progress, Done). Real-time synchronization with the database. Task details include: Title (required, max 50 characters), Description (optional, max 200 characters), Timestamp (auto-generated), and Category (To-Do, In Progress, Done).
- **Database & Persistence:** MongoDB is used to store tasks, ensuring data persistence. Real-time updates are achieved using [mention your chosen method: MongoDB Change Streams, WebSockets, or Optimistic UI Updates].
- **Frontend UI:** Modern and clean UI built with Vite.js and React. Responsive design for desktop and mobile. Uses a drag-and-drop library (e.g., `react-beautiful-dnd`). Limited to four colors for a clean aesthetic.
- **Responsiveness:** Fully responsive design for optimal viewing on various devices.
- **Backend:** Express.js API handles CRUD operations for tasks.

**Technologies Used:**

- **Frontend:** Vite.js, React, [Name of Drag-and-Drop Library], CSS
- **Backend:** Express.js, Node.js
- **Database:** MongoDB
- **Authentication:** Firebase Authentication

**Installation:**

1. Clone the repository: `git clone [https://github.com/](https://github.com/)[your-username]/[repo-name].git`
2. Navigate to the project directory: `cd [repo-name]`
3. Install dependencies (frontend): `cd client && npm install`
4. Install dependencies (backend): `cd server && npm install`
5. Configure Firebase: Create a Firebase project and add your configuration to the appropriate files in the client directory.
6. Configure MongoDB: Set up a MongoDB database and add your connection string to the server-side configuration.
7. Start the development server: `npm run dev` (client) and `npm start` (server) in separate terminals.

**Usage:**

Open the application in your browser, sign in using your Google account, and add, edit, delete, and reorder tasks using the drag-and-drop interface. Changes are saved instantly to the database.

**Backend API:**

- `POST /tasks`: Add a new task.
- `GET /tasks`: Retrieve all tasks for the logged-in user.
- `PUT /tasks/:id`: Update task details (title, description, category).
- `DELETE /tasks/:id`: Delete a task.

**Future Enhancements:**

Implement search and filtering, add user profiles and task assignment, implement more advanced drag-and-drop interactions, and add unit and integration tests.

**Contributing:**

Contributions are welcome! Please open an issue or submit a pull request.

**License:**

[Choose a license (e.g., MIT)]
