import React from 'react'
import Navbar from '../navbar/Navbar';
import './subheader.css';

function Subheader(props) {
    const topic = props.topic;
    return (
        <div>
            <section class="sub-header">
                <Navbar />

                <h1>{topic}</h1>

            </section></div>
    )
}

export default Subheader