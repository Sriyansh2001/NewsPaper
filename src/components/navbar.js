import React ,{Component} from "react";
import './navbar.css';



class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            mobile_menu:false
        };
        this.change_state_of_menu = this.change_state_of_menu.bind(this);
    }

    change_state_of_menu() {
        this.setState({
            mobile_menu:(!this.state.mobile_menu)
        })
    }

    render() {

        return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h3>Digital NewsPaper</h3>
                </div>
                <div className={this.state.mobile_menu?"mobile-menu-link menu-link":"menu-link"}>
                    <ul type="none">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">Business</a></li>
                        <li><a href="/">Entertainment</a></li>
                        <li><a href="/">General</a></li>
                        <li><a href="/">Health</a></li>
                        <li><a href="/">Science</a></li>
                        <li><a href="/">Sports</a></li>
                        <li><a href="/">Technology</a></li>
                    </ul>
                </div>
                <div className="social-media">
                    <ul className="social-media-desktop" type="none">
                        <li><a href="/">FB</a></li>
                        <li><a href="/">YT</a></li>
                        <li><a href="/">In</a></li>
                    </ul>
                </div>
                <div className="hamburger" onClick={this.change_state_of_menu}>
                    <div className="icon" id="a"></div>
                    <div className="icon" id="b"></div>
                    <div className="icon" id="c"></div>
                </div>
            </nav>
            {/* <div className="main_section">
                <p>Welcome To the</p> 
                <h1>Website</h1>
            </div> */}
        </>
        )
    }
}

export default Navbar;