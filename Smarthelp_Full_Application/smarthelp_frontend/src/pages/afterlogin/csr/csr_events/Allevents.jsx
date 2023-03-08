import React from 'react';
import { Link } from 'react-router-dom';
import { Footer, Subheader_X } from '../../../../components';
import './events.css';

const Allevents = () => {

    const topic = 'CSR Projects';

    return (

        <div>
            <Subheader_X topic={topic} />

            {/* <!-- ------------------------------CSR Projects------------------------------- --> */}

            <section class="event_col">
                <h1>CSR Events</h1>
                <p>Lorem ipsum may be used as a placeholder before the final copy is available.</p>

                <div class="event_types">
                    <ul>
                        <li><Link to="">All</Link></li>
                        <li><Link to="">Latest Events</Link></li>
                    </ul>
                </div>
                <div class="event_body">
                    <div class="event-column">
                        <div class="event-row">
                            <div class="event-box">
                                <div class="event-box-topic">
                                    <h4>Event Name</h4>
                                    <h5>Event Type</h5>
                                </div>
                                <div class="event-box-img"></div>
                            </div>
                            <div class="event-box">
                                <div class="event-box-topic">
                                    <h4>Event Name</h4>
                                    <h5>Event Type</h5>
                                </div>
                                <div class="event-box-img"></div>
                            </div>
                            <div class="event-box">
                                <div class="event-box-topic">
                                    <h4>Event Name</h4>
                                    <h5>Event Type</h5>
                                </div>
                                <div class="event-box-img"></div>
                            </div>
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

export default Allevents