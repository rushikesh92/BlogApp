# BlogBit



BlogBit is a full-stack blogging application built with React and powered by Appwrite for backend services. It provides a seamless experience for users to create, read, update, delete and explore blog posts, complete with user authentication and a rich text editor.

## Features

-   **User Authentication**: Secure sign-up, login, and logout functionality.
-   **CRUD for Posts**: Create, read, update, and delete blog posts. 
-   **Rich Text Editor**: Integrated TinyMCE for a powerful and intuitive writing experience.
-   **File Uploads**: Upload and manage featured images for posts using Appwrite Storage.

-   **View All Posts**: View list of all the blogs that are created by other users.
-   **User Profile**: View your profile and list of all the blogs you've created.
-   **Protected Routes**: Certain routes and actions (like creating/editing posts) are only accessible to authenticated users.
-   **State Management**: Centralized state management using Redux Toolkit for authentication status.

## Tech Stack

-   **Frontend**: React, Vite, React Router
--   **Styling**: Tailwind CSS
-   **State Management**: Redux Toolkit
-   **Backend**: Appwrite (Authentication, Database, Storage)
-   **Form Handling**: React Hook Form
-   **Text Editor**: TinyMCE


## Project Structure

The project follows a standard React application structure, organizing files by feature and type.

```
/src
├── appwrite/       # Appwrite service configuration (auth, db, storage)
├── assets/         # Static assets like images and svgs
├── components/     # Reusable React components (Button, Input, PostCard, etc.)
├── config/         # Environment variable configuration
├── pages/          # Top-level page components for each route
├── store/          # Redux Toolkit store and slices (authSlice)
├── App.jsx         # Main application component with routing logic
└── main.jsx        # Application entry point
```

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

-   Node.js and npm (or a compatible package manager)
-   An Appwrite account

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rushikesh92/BlogApp.git
    cd BlogApp
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Appwrite:**
    -   Log in to your Appwrite console and create a new project.
    -   **Authentication**: No special setup is required; the Email/Password method is enabled by default.
    -   **Database**: Create a new database.
    -   **Collection**: Inside your database, create a collection with the following attributes:
        -   `title` (string, required)
        -   `content` (string, required)
        -   `featuredImage` (string, required)
        -   `status` (string, required)
        -   `userId` (string, required)
    -   **Storage**: Create a new storage bucket. Note its ID.
    -   **Create Platform**: To allow Cross-Platform resource sharing(CORS)

4.  **Configure Environment Variables:**
    -   Create a `.env` file in the root of the project by copying the sample file:
        ```bash
        cp .env.sample .env
        ```
    -   Fill in the `.env` file with your Appwrite project details:

    ```env
    VITE_APPWRITE_URL="<your_appwrite_endpoint>"
    VITE_APPWRITE_PROJECT_ID="<your_appwrite_project_id>"
    VITE_APPWRITE_DATABASE_ID="<your_appwrite_database_id>"
    VITE_APPWRITE_COLLECTION_ID="<your_appwrite_collection_id>"
    VITE_APPWRITE_BUCKET_ID="<your_appwrite_bucket_id>"
    ```

5.  **Run the development server:**
    ```bash
    npm run dev
    ```

The application will now be running on `http://localhost:5173`.