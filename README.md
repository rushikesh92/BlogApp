# BlogBit

BlogBit is a blogging application built with **React** and powered by **Appwrite** for backend services. It provides a seamless experience for users to create, read, update, delete and explore blog posts, complete with user authentication and a rich text editor.

## Features

-   **User Authentication**: Secure sign-up with email verification using OTP. 
-   **State Management**: Centralized state management using Redux Toolkit for posts and authentication.
-   **Rich Text Editor**: Integrated TinyMCE for a powerful and intuitive writing experience.
-   **CRUD for Blogs**: Create, read, update, and delete blog posts. 
-   **File Uploads**: Upload and manage featured images for posts using Appwrite Storage.
-   **View All Blogs**: View list of all the blogs that are created by other users.
-   **User Profile**: View your profile and list of the blogs you've created.

## Tech Stack

-   **Frontend**: React, Vite, React Router
-   **Styling**: Tailwind CSS
-   **State Management**: Redux Toolkit
-   **Backend**: Appwrite (Authentication, Database, Storage)
-   **Form Handling**: React Hook Form
-   **Text Editor**: TinyMCE


## Project Structure

The project follows a standard React application structure

```
/src
├── appwrite/       # Appwrite service configuration
├── assets/         # images and svgs
├── components/     # Reusable React components 
├── config/         # Environment variable configuration
├── pages/          # Top-level page components for each route
├── store/          # Redux Toolkit store and slices 
├── App.jsx         
└── main.jsx       
```

## Getting Started

Follow these instructions to set up and run the project locally

### Prerequisites

-   Node.js and npm 
-   An Appwrite account
-   TinyMCE account (API key)

### Setup Instructions

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/rushikesh92/BlogBit.git
    cd BlogBit
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Appwrite:**
    -   Log in to your Appwrite console and create a new project.
    -   **Authentication**: No special setup is required
    -   **Database**: Create a new database.
    -   **Collection**: Inside your database, create a collection with the following attributes:
        -   `title` (string, required)
        -   `content` (string, required)
        -   `featuredImage` (string, required)
        -   `status` (string, required)
        -   `userId` (string, required)
    -   **Storage**: Create a new storage bucket for images. 
    -   **Create Platform**: To allow Cross-Platform resource sharing(CORS)

4.  **Configure Environment Variables:**
    -   Create a `.env` file in the root of the project by copying the .env.sample file and fill with correct values.



5.  **Run:**
    ```bash
    npm run dev
    ```

## Screenshots
