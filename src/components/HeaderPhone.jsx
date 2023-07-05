import React from 'react'
import { AiOutlineClose } from "react-icons/ai"

function HeaderPhone({ menuOpen, setMenuOpen }) {
  return (
    <div className={`navPhone ${menuOpen ? 'navPhoneComes' : ""}`}>
      <button onClick={() => setMenuOpen(!menuOpen)}>
          <AiOutlineClose />
        </button>
      <h2>Adarsh Rawat</h2>
      <div>
        <a href='#home'>Home</a>
        <a href='#work'>Work</a>
        <a href='#timeline'>Experience</a>
        <a href='#services'>Services</a>
        <a href='#testimonial'>Testimonial</a>
        <a href='#contact'>Contact</a>
      </div>
      <a href='mailto:00adarshrawat00@gmail.com'>
        <button>Email</button>
      </a>
    </div>
  )
}

export default HeaderPhone