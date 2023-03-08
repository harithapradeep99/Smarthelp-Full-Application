import React from 'react';
import './blog.css';
import { Footer, Subheader } from '../../../components';

const Blog = () => {

    const topic = 'Blog';

    return (
        <div>
            <Subheader topic={topic} />

            {/* <!-- ------------------------------blog page contents------------------------------- --> */}

            <section class="blog-content">
                <div class="blog-row">
                    <div class="blog-left">
                    </div>
                    <div class="blog-right">
                        <article class="testimonial grid-col-span">
                            <div class="flex">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2>One</h2>
                                    <p></p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas consequatur veritatis quia. Pariatur impedit laborum hic est quas explicabo sapiente consectetur quo maxime voluptatibus iure deserunt non sit, molestiae dolor?
                            </p>

                        </article>

                        <article class="testimonial">
                            <div class="flex">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2>Two</h2>
                                    <p></p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis illum itaque asperiores aperiam rem non obcaecati. Placeat, iusto. Vero nemo tempora sequi cumque, repellendus error explicabo nulla ab eum eos?
                            </p>

                        </article>
                        <article class="testimonial">
                            <div class="flex">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2>Three</h2>
                                    <p></p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit deleniti accusantium reprehenderit animi perspiciatis molestias, ipsum totam dolore amet, eos maiores culpa tempore ullam, quod reiciendis! Distinctio in veritatis nobis?
                            </p>
            
                        </article>
                        <article class="testimonial grid-col-span">
                            <div class="flex">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2>Four</h2>
                                    <p></p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima temporibus laborum explicabo doloremque? Vitae, voluptate magni repellendus eaque numquam molestias rerum non quam eius velit accusantium exercitationem animi ipsa adipisci?
                            </p>
                        
                        </article>
                        <article class="testimonial">
                            <div class="flex">
                                <div>
                                    <img src="" alt="" />
                                </div>
                                <div>
                                    <h2>Five</h2>
                                    <p></p>
                                </div>
                            </div>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero et itaque inventore ducimus nemo, natus perspiciatis quae, culpa laudantium, ipsam unde voluptatibus fugit eveniet porro. Mollitia esse veniam laudantium fugit?
                            </p>
                          
                        </article>

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

export default Blog