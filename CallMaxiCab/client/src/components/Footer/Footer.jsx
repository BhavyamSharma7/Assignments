import "./Footer.css";
import {Google, Facebook, Instagram, Mail, Phone} from "@mui/icons-material";

const Footer = () => {
    return (
        <div className="footer">
            <div className="upper-footer">
                <div className="left">
                    <Google style={{fontSize: "25px"}} />
                    <Facebook style={{fontSize: "25px"}} />
                    <Instagram style={{fontSize: "25px"}} />
                </div>
                <div className="center">
                    <h2 style={{fontSize: "25px"}}>Links</h2>
                    <ul>
                        <li>Airport Taxi Perth</li>
                        <li>Wheelchair Taxi Perth</li>
                        <li>Contact Us</li>
                        <li>About Us</li>
                    </ul>
                </div>
                <div className="right">
                    <div>
                        <h2 style={{ fontSize: "25px" }}>Contact</h2>
                        <ul>
                            <li><Mail  style={{color: "orange", margin: "-2px 5px"}} />booking@callmaxicab.com.au</li>
                            <li><Phone style={{color: "orange", margin: "-2px 5px"}} />+61 414322847</li>
                        </ul>
                    </div>
                    <img width="250px" src="https://callmaxicab.com.au/verified-customer-Google-reviews.webp" alt="google-review" />
                </div>
            </div>
            <hr style={{backgroundColor: "whitesmoke", height: "0.1px", border: "none"}} />
            <div className="lower-footer">
                <p>CallMaxiCab ©2022, ODBS 1005667</p>
            </div>
        </div>
    );
}

export default Footer;
