import React from 'react';
import './style.css';
import { SocialIcon } from 'react-social-icons';

/**
* @author
* @function Footer
**/

const Footer = (props) => {
    return (
        <footer class="footer-distributed">

            <div class="footer-right">

                <SocialIcon url="http://jaketrent.com" network="twitter" style={{ width: 35, height: 35, bgColor: "#292c2f", borderradius: 2, padding: 2, margin: 2.5 }} />
                <SocialIcon url="http://jaketrent.com" network="facebook" style={{ width: 35, height: 35, bgColor: "#292c2f", borderradius: 2, padding: 2, margin: 2.5 }} />
                <SocialIcon url="http://jaketrent.com" network="instagram" style={{ width: 35, height: 35, bgColor: "#292c2f", borderradius: 2, padding: 2, margin: 2.5 }} />
                <SocialIcon url="http://jaketrent.com" network="whatsapp" style={{ width: 35, height: 35, bgColor: "#292c2f", borderradius: 2, padding: 2, margin: 2.5 }} />

            </div>

            <div class="footer-left">

                <p class="footer-links">
                    <a class="link-1" href="#">Home</a>

                    <a href="#">Blog</a>

                    <a href="#">Pricing</a>

                    <a href="#">About</a>

                    <a href="#">FAQ</a>

                    <a href="#">Contact</a>
                </p>

                <p>CLOGSAG &copy; 2020</p>
            </div>

        </footer>
    )
}

export default Footer