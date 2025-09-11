import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Protected({ children, requiresAuth = true }) {

    const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    const authStatus = useSelector(state => state.auth.status)
    const isAuthenticated = Boolean(authStatus);
    useEffect(() => {
        /*
        If requiresAuth is true (you want the user to be logged in to access this page)
        And the user is not authenticated
        Redirect to /login 
        */
        if (requiresAuth && isAuthenticated ===false ) {
            navigate("/login")
        }
        /**
         If requiresAuth is false (you want the user to be logged out to access this page, e.g., login/signup page)
        And the user is authenticated
        Redirect to / 
         */
        else if (!requiresAuth && isAuthenticated === true) {
            navigate("/")

        }
        setLoader(false);
    }, [authStatus, navigate, requiresAuth])
    return loader ? <h1>Loading...</h1> : <>{children}</>
}



