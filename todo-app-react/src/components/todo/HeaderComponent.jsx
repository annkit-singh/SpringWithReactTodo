import React, { Component } from "react";
import AuthenticationService from "./AuthenticationService";
import { Link } from "react-router-dom";
class HeaderComponent extends Component {

  
    render() {
        let isUserLoggedIn = AuthenticationService.getUserNameLoggedIn()
        // console.log(isUserLoggedIn)

        return (
            <header>
                <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                    <div> <a href='https:www.google.com' className='navbar-brand'>Google</a></div>
                    <ul className='navbar-nav'>
                        {isUserLoggedIn && <li className='navbar-link'><Link className='nav-link' to={
                            {
                                pathname: `/welcome/${isUserLoggedIn}`,
                            }
                        } >Home</Link></li>}
                        {isUserLoggedIn && <li className='navbar-link'><Link className='nav-link' to="/todos">Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li className='navbar-link'><Link className='nav-link' to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li className='navbar-link'><Link className='nav-link' to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}


export default HeaderComponent