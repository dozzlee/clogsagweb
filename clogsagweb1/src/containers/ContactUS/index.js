import './style.css';
import React from 'react';
import { render } from "react-dom";
import Card from './../../components/UI/Card';
import { faHome, faMarker, faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MyMapComponent from './../../components/GoogleMaps';


/**
* @author
* @function ContactUs
**/

var bgColors = {
    "white": "#FFFFFF",
};

const ContactUs = (props) => {
    return (
        <Card style={{ marginBottom: '100px', padding: '100px', boxSizing: 'border-box', width: '100%', height: '100%', bgColors: 'transparent' }}>
            <div class="body1">
                <div class="header1">
                    <header2> Contact Us </header2>
                </div>
                <div class="contact form">
                    <div class="map">
                        <MyMapComponent />
                    </div>
                    <div class="address">
                        <p> Contact us we will get back to you as soon as posssible </p>
                        <p><FontAwesomeIcon icon={faMapMarkerAlt} /> East Legon Accra Ghana </p>
                        <p><FontAwesomeIcon icon={faPhone} /> +233 0208888788878 </p>
                        <p><FontAwesomeIcon icon={faEnvelope} /> ozzz@domain.com </p>
                    </div>

                </div>
            </div>
        </Card>
    )

}

export default ContactUs;