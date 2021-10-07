import React from 'react'
import './Nav.css'
import { Link, withRouter } from "react-router-dom"

const Nav = () => {
    return (
        <div className="nav">

            <div className="nav_container">
                <Link className="nav_link" to="/">
                    Home
                </Link>

                <Link className="nav_link" to="/applied_jobs">
                    Applied Jobs
                </Link>

                <Link className="nav_link" to="/rejections">
                    Rejections
                </Link>
           

              
                <div className="login_signup_container">
                    <Link className="nav_link" to="/login">
                        Log In
                    </Link>

                    <Link className="nav_link" to="/signup">
                         Sign Up
                    </Link>
                </div>
               
            </div>
        
        </div>
    )
}

export default withRouter(Nav)