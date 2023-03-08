import React from 'react';
import './about.css';
import { Footer, Subheader } from '../../../components';

const About = () => {

    const topic = 'About Us';

    return (
        <div>
            <Subheader topic={topic} />

            {/* <!-- ------------------------------About us content------------------------------- --> */}

            <section class="about-us">
                <div class="about-row">
                    <div class="about-col">
                        <h1>SMART Help Team</h1>
                        <p>Wikipedia is an online free content encyclopedia project helping to create a world in which everyone
                            can freely share in the sum of all knowledge. The project is supported by the Wikimedia Foundation
                            and based on a model of freely editable content. The name "Wikipedia" is a blending of the words
                            wiki (a technology for creating collaborative websites, from the Hawaiian word wiki, meaning
                            "quick") and encyclopedia. Wikipedia's articles provide links designed to guide the user to related
                            pages with additional information.</p>
                        <a href="" class="hero-btn red-btn">EXPLORE NOW</a>
                    </div>
                    <div class="about-col">
                        <img src="./images/about.png" />
                    </div>
                </div>
            </section>


            {/* <!-- ------------------------------Footer------------------------------- --> */}

            <Footer />




            {/* <!-------------------------- JavaScript for Toggle Menu ---------------------------> */}
            {/* <script>

        var navLinks = document.getElementById("navLinks");
        function showMenu() {
            navLinks.style.right = "0";
        }
        function hideMenu() {
            navLinks.style.right = "-200px";
        }



    </script> */}
        </div>
    )
}

export default About