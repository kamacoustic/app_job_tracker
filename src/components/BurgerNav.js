import React from 'react' 
import reactDom from 'react-dom'
import './BurgerNav.css'
import { slide as Menu } from 'react-burger-menu'
import { Link, withRouter } from "react-router-dom"
import ClearRoundedIcon from '@mui/icons-material/ClearRounded';


const BurgerNav = ( { closeBurger }) => {

    return reactDom.createPortal (
        <Menu id="menu">
            <nav className="burgernav" >
                <div className="closeBMenu">
                    <ClearRoundedIcon onClick={() => closeBurger(false)} />
                </div>
            <div className="burgernav_container">
                <Link className="nav_link"  to="/" onClick={() => closeBurger(false)}>
                    Home
                </Link>

                <Link className="nav_link" to="/applied_jobs" onClick={() => closeBurger(false)}>
                    Applied Jobs
                </Link>

                <Link className="nav_link" to="/rejections" onClick={() => closeBurger(false)}>
                    Rejections
                </Link>

                
            
                <div className="burgernav_login_signup_container">
                    <Link className="nav_link" to="/login" onClick={() => closeBurger(false)}>
                        Log In
                    </Link>

                    <Link className="nav_link" to="/signup" onClick={() => closeBurger(false)}>
                        Sign Up
                    </Link>
                </div>
            
            </div>
        
        </nav>
        </Menu>, document.getElementById('burger')

    )

}

export default withRouter(BurgerNav)