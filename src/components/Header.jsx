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
      <a href='#skills'>Skills</a>
      <a href='#contact'>Contact</a>
    </div>
    <div>
    <a href='mailto:00adarshrawat00@gmail.com' target='blank'>
      <button>Email</button>
    </a>
    <a href='https://github.com/iadarshrawat' target='blank'>
      <button>Github</button>
    </a>
    </div>
    

    <button onClick={()=>setMenuOpen(!menuOpen)}>
      <AiOutlineMenu/>
    </button>
  
  </nav>;
};

export default Header;