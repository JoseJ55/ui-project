import React from 'react';
import "./header.css";

import people from "../../assets/people.png"
import ai from "../../assets/ai.png"

function Header() {
  return (
    <div className='gpt3_header section_padding' id="home">
        <div className='gpt3_header-content'>
          <h1 className='gradient_text'>Let's Build Something Amazing with GPT-3 OpenAI</h1>
          <p>Yet bed any for traveling indulgence unpleasing. Not thorughts all exercise blessing. Indulfence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          
          <div className='gpt3_header-content_input'>
            <input type="email" placeholder='Your Email Address' />
            <button type="button">Get Started</button>
          </div>

          <div className='gpt3_header-content_people'>
            <img src={people} alt='people' />
            <p>1600 people requested access a vist in last 24 hours</p>
          </div>

        </div>
        <div className='gpt3_header-image'>
          <img src={ai} alt="ai" />
        </div>
    </div>
  );
}

export default Header;
