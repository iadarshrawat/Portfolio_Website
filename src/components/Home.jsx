import React, { useRef } from 'react';
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/me.png"
import "../styles/home.scss"
import "../styles/mediaquery.scss"

const Home = () => {

  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: 0,
        opacity: 1,
      }
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: 0,
        opacity: 1,
      }
    }
  }

  return (
    <div id='home'>
      <section>
        <div>
          <div className="left">
            <motion.h1 {...animation.h1} className='h1'>
              Hi, I am <br /> Adarsh Rawat
            </motion.h1>
            <p>Fullstack Developer, 
              Hi there! My name is Adarsh Rawat and I’m a software developer and having a knowledge of MERN technology with git and github, docker. I love all things tech and coding, and I love to share my knowledge with others.</p>
            <button><a href='https://github.com/iadarshrawat'> GitHup Profile </a></button>
          </div>
          <div className="right">
            <img src={me} alt="My imgae" />
          </div>
        </div>
      </section >

    </div >
  )
}
export default Home