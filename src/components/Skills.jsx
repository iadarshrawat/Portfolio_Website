import React, { useState } from 'react'
import "../styles/skills.scss"
import right from '../assets/right.png'

function Skills() {
  
  const skills = [
    { cnt: '01', title: 'Programming', list: ['C++', 'Java', 'C', 'JavaScript', 'TypeScript'] },
    { cnt: '02', title: 'Web Development', list: ['HTML5 & CSS','PostgreSql', 'MongoDB', 'Reactjs and Nextjs',"Nodejs"] },
    { cnt: '03', title: 'Technical Skills', list: ['Git and Github', 'Docker', 'AWS and Other Cloud', 'Github Action (CI/CD)', 'Kubernetes (k8s)'] },
    { cnt: '04', title: 'Soft Skills', list: ['Teamwork', 'Problem-Solving', 'Documentation', 'Communication', 'Adaptability'] },
  ];

  return (
<>
    <div className="skills-container">
      <h1 className="skill-title">SKILLS</h1>
      <div className="skill-row">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.title}>
           <img src={right} alt="" height={70}/>
            <div className="skill-card-title">{skill.title}</div>
            <div className="skill-list">
              <ul className='list-items'>
                {skill.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  )
    
}

export default Skills