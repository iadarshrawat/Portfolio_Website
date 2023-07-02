import React from 'react'
import data from "../assets/data.json"
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import "../styles/mediaquery.scss"

const Work = () => {
  return <div id='work'>
    <h2>WORK</h2>
    <section>
      <article>
        <Carousel
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        showStatus={false}
        infiniteLoop
        interval={2000}
        autoPlay={true}
        >
          {
              data.projects.map(i=>(
                <div key={i.title} className='workItem'>
                  <img src={i.imgSrc} alt={i.title} />
                  <aside>
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                    <a target={"blank"} href={i.url}> View Demo</a>
                  </aside>
                </div>
              ))
          }
        </Carousel>
      </article>
    </section>
  </div>
}

export default Work