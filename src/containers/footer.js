import React from "react";
import Scrollchor from 'react-scrollchor';
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
        <footer className="footer" id = "contact">
            <div className="wrapper">
                <div className="logo-box">
                <Scrollchor to = "#main">
                    <img src= {logo} className = "logo" alt="logo"/>
                </Scrollchor>
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
                            <a href={el.src} key={el.id}><span className = {el.className} ></span></a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    </>
    );
  }
}

//  target = "_blank" rel="nofollow" 