import React, {  useState } from 'react'
import './Nav.css'
import BurgerNav from './BurgerNav'
import Pic from '../images/logo192.png'
import { Link, withRouter } from "react-router-dom"
import DehazeIcon from '@mui/icons-material/Dehaze'


const Nav = () => {

    const [BurgerNavOpen, setOpenBurgerNav] = useState(false)

    const openBurgerNav = () => {
        setOpenBurgerNav(true)
    }
    

    return (
        <nav className="nav">

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

                <div className="account_container">
                    <img id="avatar" src={Pic} alt="account_pic"></img>
                    <p>KAM</p>
                </div>

                <div className="bNav">
                    <DehazeIcon fontSize="large" onClick={openBurgerNav}/>
                </div>

              
                <div className="login_signup_container">
                    <Link className="nav_link" to="/login">
                        Log In
                    </Link>

                    <Link className="nav_link" to="/signup">
                         Sign Up
                    </Link>
                </div> 
            </div>

        {BurgerNavOpen && <BurgerNav closeBurger={setOpenBurgerNav} />}
        </nav>
    )
}

export default withRouter(Nav)