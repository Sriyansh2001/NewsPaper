import React ,{useState} from "react";
import './navbar.css';

const Navbar = () => {
    const [mobile_menu,change_mobile_menu] = useState(false);

    const change_state_of_menu = () => {
        change_mobile_menu(!mobile_menu);
    }

    return (
    <>
        <nav className="main-nav">
            <div className="logo">
                <h3>Digital NewsPaper</h3>
            </div>
            <div className={mobile_menu?"menu-link mobile-menu-link":"menu-link"}>
                <ul type="none">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Service</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className="social-media">
                <ul className="social-media-desktop" type="none">
                    <li><a href="/">FB</a></li>
                    <li><a href="/">YT</a></li>
                    <li><a href="/">In</a></li>
                </ul>
            </div>
            <div className="hamburger">
                <button onClick={change_state_of_menu}>Menu</button>
            </div>
        </nav>
        <div className="main_section">
            <p>Welcome To the</p> 
            <h1>Website</h1>
        </div>
    </>
    )
}

export default Navbar;