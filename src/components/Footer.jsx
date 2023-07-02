import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineArrowUp} from 'react-icons/ai'
import "../styles/mediaquery.scss"

function Footer() {
    return (
        <footer>
            <div>
                <img src="https://avatars.githubusercontent.com/u/42698533?v=4" alt="Founder" />
                <h2>Adarsh Rawat</h2>
                <p>Motivation is temporary, but discipline last forewer.</p>
            </div>

            <aside>
                <h2>Social Media</h2>
                <article>
                    <a href="https://github.com/iadarshrawat" target={"blank"}>
                        <AiFillGithub/>
                    </a>
                    <a href="https://instagram.com/iadarshrawat" target={"blank"}>
                        <AiFillInstagram/>
                    </a>
                    <a href="https://www.linkedin.com/in/adarsh-rawat-238301214/" target={"blank"}>
                        <AiFillLinkedin/>
                    </a>
                </article>
            </aside>
            <mark>
            <a href="#home">
                <AiOutlineArrowUp/>
            </a>
            </mark>
            
        </footer>


    )
}

export default Footer   