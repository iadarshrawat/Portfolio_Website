import React from 'react'
import data from '../assets/data.json'
import "../styles/mediaquery.scss"

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {
          data.projects.map((item, index) => (
            <div className={`timelineItem ${index % 2 === 0 ? "leftTimeline" : "rightTimeline"
              }`}
            >

              <div>
                <h2>{item.title}</h2>
                <p>{item.date}</p>
              </div>


            </div>
          ))
        }
      </div>
    </div>
  )
}


export default Timeline

