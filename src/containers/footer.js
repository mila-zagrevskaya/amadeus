import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/logo.png";
import Navigation from "../components/navigation";

const socialLinks = [
    { src: "https://www.facebook.com",  id: 1,  className: "icon-facebook" },
    { src: "https://twitter.com/?lang=ru",  id: 2, className: "icon-twitter" },
    { src: "https://www.instagram.com",  id: 3, className: "icon-instagram" },
    { src: "https://www.tripadvisor.com/Restaurants",  id: 4, className: "icon-tripadvisor"},
]



export default class Footer extends React.Component {
  render() {
    return (
    <>
        <footer className="footer">
            <div className="wrapper">
                <div className="logo-box">
                    <Link to="/">
                        <img src={logo} className="logo" alt="logo" />
                    </Link>
                </div>
                <div className="footer-nav">
                    <h5>Navigation</h5>
                    <Navigation></Navigation>
                </div>
                <div className="contacts">
                    <h5>Visit us</h5>
                    <p>Nec sagittis sem nibh id elit. Duis sed odio sit amet nibh. <span> View on the map.</span></p>
                    <h5>Connect with us</h5>
                    <div className="social-box">
                        {socialLinks.map (el => (
                            <a href={el.src} key={el.id}><span className = {el.className}></span></a>
                        ))}
                    </div>
                   


                    {/* <span className = "icon-facebook"></span>
                    <span className = "icon-twitter"></span>
                    <span className = "icon-instagram"></span>
                    <span className = "icon-tripadvisor"></span> */}
                </div>
            </div>
        </footer>
    </>
    );
  }
}
