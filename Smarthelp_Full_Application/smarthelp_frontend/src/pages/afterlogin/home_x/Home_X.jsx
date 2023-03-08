import React from 'react';
import { Footer, Subheader_X } from '../../../components';
import './home_x.css';

function Home_X() {

  const topic = 'Fundraising Social Network';

  return (
    <div className='landingPage'>
      <Subheader_X topic={topic} />

      <h2>Landing Page after login</h2>

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
  )
}

export default Home_X