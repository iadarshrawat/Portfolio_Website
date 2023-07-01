import React from 'react'
import user from '../assets/user.png'

const Testimonial = () => {
    const name = "Adarsh";
    const feedback = "very Amazing"
    return (
        <div id='testimonial'>
            <div className="testimonialCard">
                <h2>Testimonial</h2>
                <section>
                    <article>
                        <img src={user} alt="User" />
                        <h4>{"Adarsh"}</h4>
                        <p>{"feedback"}</p>
                    </article>
                    <article>
                        <img src={user} alt="User" />
                        <h4>{name}</h4>
                        <p>{feedback}</p>
                    </article>
                    <article>
                        <img src={user} alt="User" />
                        <h4>{name}</h4>
                        <p>{feedback}</p>
                    </article>
                </section>
            </div>
        </div>
    )
}


export default Testimonial
