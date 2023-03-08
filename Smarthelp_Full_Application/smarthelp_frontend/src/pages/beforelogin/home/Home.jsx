import React from "react";
import "./home.css";
import { Footer, Navbar } from "../../../components";

function Home() {
  return (
    <div>
      <section class="header">
        <Navbar />
        <div class="content">
          <div class="content-row">
            <div class="text-box">
              <h1 class="slide-left">Fundraising Social Network</h1>
              <p class="slide-left">
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
                <br /> Lorem ipsum may be used as a placeholder before the final
                copy is available.
              </p>
              <a href="" class="hero-btn slide-left">
                Visit Us To Know More
              </a>
            </div>
            <div class="text-box">
              <img src="./images/sl.png" />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ----------------------------------CSR Projects----------------------------------- --> */}

      <section class="csr-section">
        <h1>CSR Projects</h1>
        <p>
          Lorem ipsum may be used as a placeholder before the final copy is
          available.
        </p>

        <div class="csr-row">
          <div class="csr-col">
            <h3>Ongoing CSR Projects</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div class="csr-col">
            <h3>My CSR Projects</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
          <div class="csr-col">
            <h3>CSR-Events</h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
          </div>
        </div>
      </section>

      {/* <!-- ----------------------------------Events----------------------------------- --> */}

      <section class="event">
        <h1>Events</h1>
        <p>
          In publishing and graphic design, Lorem ipsum is a placeholder text
          commonly used to demonstrate the visual form of a document or a
          typeface without relying on meaningful content.
        </p>

        <div class="event-row">
          <div class="event-col">
            <img src="./images/eve1.jpg" />
            <div class="layer">
              <h3>Event 1</h3>
            </div>
          </div>
          <div class="event-col">
            <img src="./images/eve2.jpg" />
            <div class="layer">
              <h3>Event 2</h3>
            </div>
          </div>
          <div class="event-col">
            <img src="./images/eve3.jpeg" />
            <div class="layer">
              <h3>Event 3</h3>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- ------------------------------Call To Action------------------------------- --> */}

      <section class="cta">
        <h1>
          Never wait for the perfect moment to do charity <br />
          because every moment is perfect for charity
        </h1>
        <a href="contact.html" class="hero-btn">
          CONTACT US
        </a>
      </section>

      {/* <!-- ------------------------------Footer------------------------------- --> */}

      <Footer />

      {/* <!-------------------------- JavaScript for Toggle Menu ---------------------------> */}
      {/* <script>

var navLinks = document.getElementById("navLinks","logReg");
function showMenu() {
navLinks.style.right = "0";
logReg.style.right = "0";
}
function hideMenu() {
navLinks.style.right = "-200px";
logReg.style.right = "-200px";
}



</script> */}
    </div>
  );
}

export default Home;
