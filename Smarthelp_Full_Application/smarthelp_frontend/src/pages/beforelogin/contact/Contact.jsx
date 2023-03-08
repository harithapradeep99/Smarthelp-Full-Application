import React from 'react';
import './contact.css';
import { Footer, Subheader } from '../../../components';

const Contact = () => {

    const topic = 'Contact Us';

    return (
        <div>
            <Subheader topic={topic} />

            {/* <!-- ------------------------------contact us content------------------------------- --> */}

            <section class="location">
                <iframe width="600" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" id="gmap_canvas" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.686913119254!2d79.99075251428663!3d6.807886495079493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24e1a4acef3e7%3A0xb2ef9c84206274fc!2sInstitute%20of%20Technology%2C%20University%20of%20Moratuwa!5e0!3m2!1sen!2slk!4v1660594201068!5m2!1sen!2slk"></iframe>

            </section>
            <section>
                <div class="contact-us">
                    <div class="contact-row">
                        <div class="contact-col">
                            <div>
                                <i class="fa fa-home"></i>
                                <span>
                                    <h5>Institute of Technology</h5>
                                    <p>University of Moratuwa</p>
                                </span>
                            </div>
                            <div>
                                <i class="fa fa-phone"></i>
                                <span>
                                    <h5>+9471234567</h5>
                                    <p>Always available</p>
                                </span>
                            </div>
                            <div>
                                <i class="fa fa-envelope-o"></i>
                                <span>
                                    <h5>info@gmail.com</h5>
                                    <p>Email</p>
                                </span>
                            </div>
                        </div>
                        <div class="contact-col">
                            <form action="">
                                <input type="text" placeholder="Enter your Name" required />
                                <input type="email" placeholder="Enter Email address" required />
                                <input type="text" placeholder="Enter your subject" required />
                                <textarea rows="8" placeholder="Message" required></textarea>
                                <button type="submit" class="hero-btn red-btn">Send Message</button>
                            </form>
                        </div>
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

export default Contact