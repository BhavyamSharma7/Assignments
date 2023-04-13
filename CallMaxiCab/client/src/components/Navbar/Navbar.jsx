import "./Navbar.css";
import {PhoneInTalkOutlined, Menu} from "@mui/icons-material";
import logo from "../../assets/MaxiCab.png";
import { useState } from "react";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="main-nav">
            <div className="nav-wrapper">
                <div className="resp-menu" onClick={()=>setToggleMenu(!toggleMenu)}>
                    <Menu style={{fontSize: "40px", width: "100%"}} />
                </div>
                <div className="logo">
                    <img width="200" src={logo} alt="logo" />
                </div>
                <div className="nav-items-container">
                    <ul className="nav-items">
                        <li className="nav-item">GET QUOTE</li>
                        <li className="nav-item">ABOUT</li>
                        <li className="nav-item">SERVICES</li>
                        <li className="nav-item">BLOG</li>
                        <li className="nav-item">CONTACT</li>
                        <li className="nav-item">COVID-19</li>
                    </ul>
                </div>
                <div className="phone">
                    <PhoneInTalkOutlined className="phoneImg" />
                    <h2>+61414322847</h2>
                </div>
            </div>
            {toggleMenu && <div className="nav-extended">
                <ul className="extended-nav-items">
                    <hr />
                    <li className="extended-nav-item">GET QUOTE</li>
                    <hr />
                    <li className="extended-nav-item">ABOUT</li>
                    <hr />
                    <li className="extended-nav-item">SERVICES</li>
                    <hr />
                    <li className="extended-nav-item">BLOG</li>
                    <hr />
                    <li className="extended-nav-item">CONTACT</li>
                    <hr />
                    <li className="extended-nav-item">COVID-19</li>
                    <hr />
                </ul>
            </div>}
        </div>
    );
}

export default Navbar;
