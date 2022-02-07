import React from 'react';
import "./footer.css";

import gpt3Logo from "../../assets/logo.svg";

function Footer() {
  return (
    <div className='gpt3_footer section_padding'>
      <div className='gpt3_footer-heading'>
        <h1 className='gradient_text'>Do you want to step into the future before otehrs.</h1>
      </div>
      <div className='gpt3_footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3_footer-links'>
        <div className='gpt3_footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Crechterwoord K12 182 Dk Alkinjiko, All Rights Reserved</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Conunters</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='gpt3_footer-links_div'>
          <h4>Get In Touch</h4>
          <p>Crechterwoord K12 182 Dk Alkinjiko</p>
          <p>045-345-5346</p>
          <p>Info@payme.net</p>
        </div>
      </div>
      <div className='gpt3_footer-copyright'>
        <p>@2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;