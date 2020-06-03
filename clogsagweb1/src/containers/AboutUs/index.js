import React from 'react';
import Card from './../../components/UI/Card';
import './style.css';

/**
* @author
* @function AboutUs
**/

const AboutUs = (props) => {
    return (
        <Card>
            <div classs="about-section">
                <section class="about-details section-padding">
                    <div class="container">
                        <div class="container2">
                            <div class="container3" data-aos="fade-right">
                                <div class="container4">
                                    <h2 class="header1">About CLOGSAG</h2>
                                    <span></span>
                                    <p class="mb20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet</p>
                                    <p class="mb20">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet.consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.Lorem ipsum dolor sit amet. </p>
                                </div>
                            </div>
                            <div class="container4">
                                <div class="container5">
                                    <img class="img-responsive" src="http://ekramit.net/tf/kaniz/assets/img/desktop2.png" alt=""></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </Card>

    )

}

export default AboutUs