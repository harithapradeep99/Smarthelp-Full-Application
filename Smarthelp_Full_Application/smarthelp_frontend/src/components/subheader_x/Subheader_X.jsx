import React from 'react'
import { Link } from 'react-router-dom';
import './subheader_x.css';
import { useLogout } from '../../hooks/useLogout';

function Subheader_X(props) {

    const topic = props.topic;
    // const { logout } = useLogout();

    const handleClick = () => {
        // logout()
        console.log("logout");
    }

    return (
        <div>
            <section class="sub-header_x">
                <div>
                    <nav>
                        <Link to="/"><img src="../../../images/logo.png" />
                            {/* Here ../../../ is used instead of ../ because the components that linked in other folders such as csr/csr_events,ongoing,project using the same link */}
                        </Link>
                        <div className="profile" id="profile">
                            <ul>
                                <li><Link to="/profile">Profile</Link></li>
                                <li onClick={handleClick}><Link to="/">Logout</Link></li>
                            </ul>
                        </div>
                        <i class="fa fa-bars" onClick="showMenu()"></i>
                    </nav>
                    <nav>
                        <div class="nav-links" id="navLinks">
                            <i class="fa fa-times" onClick="hideMenu()"></i>
                            <ul>
                                <li><Link to="/home_x">Home</Link></li>
                                <li><Link to="/about_x">ABOUT</Link></li>
                                <li><Link to="/blog_x">BLOG</Link></li>
                                <li><Link to="/contact_x">CONTACT</Link></li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <h1>{topic}</h1>


                <div class="main-sec-row">
                    <div class="main-sec-col">
                        <Link to="/csr">CSR PROJECTS</Link>
                    </div>
                    <div class="main-sec-col">
                        <Link to="/community">COMMUNITY GROUPS</Link>
                    </div>
                    <div class="main-sec-col">
                        <Link to="/trustworthiness">TRUSTWORTHINESS GROUP</Link>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Subheader_X