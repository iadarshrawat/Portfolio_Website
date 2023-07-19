import React from 'react'
import {AiOutlineMenu} from "react-icons/ai"

const Header = ({menuOpen, setMenuOpen}) => {
  return <nav>

    <h2>
      <span className='green'>A</span>
      <span>darsh</span>
      <span className='green'> R</span>
      <span>awat</span>
    </h2>
    <div>
      <a href='#home'>Home</a>
      <a href='#work'>Work</a>
      <a href='#timeline'>Experience</a>
      <a href='#services'>Services</a>
      <a href='#testimonial'>Testimonial</a>
      <a href='#contact'>Contact</a>
    </div>
    <div>
    <a href='mailto:00adarshrawat00@gmail.com'>
      <button>Email</button>
    </a>
    <a href='https://docs.google.com/document/d/15lQh1WiPPCjSkPqjveS0EFdFxLkyEtVPrQ-ZMoqZ2NE/edit'>
      <button>Resume</button>
    </a>
    </div>
    

    <button onClick={()=>setMenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
    </button>
  
  </nav>;
};

export default Header;