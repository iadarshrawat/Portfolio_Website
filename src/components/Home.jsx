import React, { useRef } from 'react';
import { animate, motion } from "framer-motion"
import Typewriter from 'typewriter-effect';
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs"
import me from "../assets/me.jpeg"
import "../styles/home.scss"


const Home = () => {

  const clientCount = useRef(null);
  const projectCount = useRef(null);
  const animationClientsCount = ()=>{
    animate(0, 100,{
      duration:1,
      onUpdate:(v)=>(clientCount.current.textContent = v.toFixed()),
    })
  }

  const animationProjectsCount = ()=>{
    animate(0, 200, {
      duration:1,
      onUpdate:(v)=>(projectCount.current.textContent = v.toFixed()),
    })
  }

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
          <motion.h1 {...animation.h1}>
            Hi, I am <br /> Adarsh Rawat
          </motion.h1>

          <Typewriter options={{
            strings: ["A Developer", "A Designer", "A Creater"],
            autoStart: true,
            loop: true,
            wrapperClassName: "typewriterpara",
            cursor: "",
          }} />

          <div>
            <a href="mailto:00adarshrawat00@gmail.com"> Hire Me </a>
            <a href="work"> Projects <BsArrowUpRight /> </a>
          </div>

          <article>
            <p>
              +<motion.span whileInView={animationClientsCount} ref={clientCount}>100</motion.span>
            </p>
            <span>Client WorldWide</span>
          </article>

          <aside>
            <article>
              <p>
              +<motion.span whileInView={animationProjectsCount} ref={projectCount}>100</motion.span>
              </p>
              <span>Projects Made</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>00adarshrawat00@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Adarsh" />
      </section>


      <BsChevronDown />
      
    </div>
  )
}

export default Home