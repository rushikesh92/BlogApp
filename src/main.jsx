import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import store from './store/store.js'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import { HomePage, AddPost, AllPosts, Post, Login, Signup, EditPost } from './pages'
import { AuthLayout } from './components'


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/login',
        element:
          <AuthLayout requiresAuth={false} >
            <Login />
          </AuthLayout>
      },
      {
        path: '/signup',
        element:
          <AuthLayout requiresAuth={false} >
            <Signup />
          </AuthLayout>
      },
      {
        path: '/all-posts',
        element:
          <AuthLayout requiresAuth={true} >
            <AllPosts />
          </AuthLayout>
      },
      {
        path: '/post/:slug',
        element:
          <AuthLayout requiresAuth={true} >
            <Post />
          </AuthLayout>
      },

      {
        path: '/add-post',
        element:
          <AuthLayout requiresAuth={true} >
            <AddPost />
          </AuthLayout>
      },
      {
        path: '/edit-post/:slug',
        element:
          <AuthLayout requiresAuth={true} >
            <EditPost />
          </AuthLayout>
      },
    ]

  }
])

createRoot(document.getElementById('root')).render(

  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>,
)
