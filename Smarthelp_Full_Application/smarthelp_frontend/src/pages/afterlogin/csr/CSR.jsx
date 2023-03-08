import React from 'react';
import { Footer, Subheader_X } from '../../../components';
import { Link } from 'react-router-dom';
import './csr.css';

const CSR = () => {

    const topic = 'CSR Projects';

    return (

        <div>
            <Subheader_X topic={topic} />

            {/* <!-- ------------------------------CSR Projects------------------------------- --> */}

            <section className="csr_main">
                <div className="csr_main_row">
                    <Link to="/csr/ongoing_projects/all">

                        <div className="csr_main_col">
                            <h3>Ongoing CSR Projects</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                                visual form of a document or a typeface without relying on meaningful content.</p>
                        </div>
                    </Link>
                    <Link to="/csr/my_projects">

                        <div className="csr_main_col">
                            <h3>My CSR Projects</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                                visual form of a document or a typeface without relying on meaningful content.</p>
                        </div>
                    </Link>
                    <Link to="/csr/csr_events">

                        <div className="csr_main_col">
                            <h3>CSR Events</h3>
                            <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the
                                visual form of a document or a typeface without relying on meaningful content.</p>
                        </div>
                    </Link>
                </div>


            </section>





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

export default CSR