import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'
import { useSelector } from 'react-redux'

const Navbar = () =>{
    const counter = useSelector(state => state.counter)
    console.log(Object.keys(useSelector).length)
    console.log(counter)
    const [ menu, setMenu ] = useState(false)

    let open
    if(window.innerWidth < 1000){ 
        open = menu ? { height: "3.4em" } : { height: "0" }
        open.transition = "ease all 1s"
    }
    console.log("innerWidth: ", window.innerWidth)

    return(
        <nav id="navbar">
            <div className="navigation">
                <header className="navigation-title">
                    <h1 className="navigation-title-txt">Calendar</h1>
                </header>
                <label className="navigation-toggler-icon" onClick={ () => setMenu(!menu) }>
                    <img src="https://icon-icons.com/icons2/1659/PNG/64/3844438-hamburger-menu-more-navigation_110319.png" alt="menu-icon"/>
                </label>
            </div>
            <div className="sites" style={open}>
                <div className="sites-site">
                    <Link to="/"><h3 className="sites-site-txt">Home</h3></Link>
                </div>
                <div className="sites-site">
                    <Link to="/account"><h3 className="sites-site-txt">Account</h3></Link>
                </div>
                <div className="sites-site">
                    <Link to="/account"><h3 className="sites-site-txt">Calendar</h3></Link>
                </div>
                <div className="sites-site">
                    <Link to="/account"><h3 className="sites-site-txt">Account</h3></Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar