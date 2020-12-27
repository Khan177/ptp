import React from "react";

const Footer = () => {
    return(
        <footer>
            <div className="footer-top">
                <div className="footer-logo">
                    <img src="/assets/logo.png" alt=""/>
                </div>
                <div className="nav-and-social">
                    <div className="footer-nav">
                        <a href="">
                            HOW IT WORKS?
                        </a>
                        <a href="">
                            ABOUT
                        </a>
                        <a href="">
                            PROJECTS
                        </a>
                    </div>
                    <div className="footer-social">
                        <img src="/assets/facebook.png" alt=""/>
                        <img src="/assets/telega.png" alt=""/>
                        <img src="/assets/twitter.png" alt=""/>
                        <img src="/assets/socialm.png" alt=""/>
                    </div>
                </div>
                <div className="contact">
                    <h3>CONTACT US</h3>
                    <p>
                        (219) 555-0114
                    </p>
                    <p>
                        (219) 555-0114
                    </p>
                    <p>
                        email@email.com
                    </p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>Copyright © 2020 by @__khanter</p>
            </div>
        </footer>
    );
}

export default Footer;