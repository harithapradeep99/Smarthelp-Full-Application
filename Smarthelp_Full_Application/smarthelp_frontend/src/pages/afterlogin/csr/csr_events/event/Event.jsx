import React from 'react';
import { Footer, Subheader_X } from '../../../../../components';
import './event.css';

const Event = () => {

    const topic = 'CSR Projects';
    return (
        <div>
            <Subheader_X topic={topic} />

            <section class="csr-event">
                <h1>CSR Events</h1>
                <p>Lorem ipsum may be used as a placeholder before the final copy is available.</p>

                <div class="event_name">
                    <h2>Event Name</h2>
                </div>
                <div class="event_details_row">

                </div>

                <div class="event_body">
                    <div class="event_image_grid">
                        <img src="" alt="" />
                    </div>
                    <div class="event_des">
                        <h2>Description</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores animi repellat autem, hic asperiores excepturi accusantium numquam alias non provident harum nisi odio dolorem? Eaque impedit voluptatem quod quam doloremque.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam facilis eos blanditiis autem. Officia optio necessitatibus aliquid distinctio? Natus deleniti blanditiis, placeat nulla aut repellendus qui minus nisi sit laudantium.</p>
                    </div>
                    <div class="event_buttons_row">
                        <button type="submit" value="join">Join</button>
                        <button type="submit" value="share">Share</button>
                    </div>
                </div>

            </section>

            <Footer />

        </div>
    )
}

export default Event;