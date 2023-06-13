import React ,{Component}  from "react";
import './navbar.css';


class Navbar extends Component {
    constructor() {
        super();
        this.state = {
            innerWidth:window.innerWidth,
            work:false,
            height:"0px",
            width: "0%",
            right:"200px"
        };
        this.change_state_of_menu = this.change_state_of_menu.bind(this);
    }

    change_state_of_menu() {
        this.setState ({
            innerWidth:window.innerWidth
        })
        if(!this.state.work) {
            this.setState({
                height:"300px",
                width:"100%",
                right:"0px",
                work:true
            })
        }
        else {
            this.setState({
                height:"0px",
                width:"0%",
                right:"200px",
                work:false
            })
        }
    }

    render() {

        return (
        <>
            <nav className="main-nav">
                <div className="logo">
                    <h3>Digital NewsPaper</h3>
                </div>
                <div style={this.state.innerWidth<=1020?{height:this.state.height}:{}} className="menu-link" >
                    <div style={this.state.innerWidth<=1020?{right:this.state.right , width:this.state.width}:{}} className="links" >
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