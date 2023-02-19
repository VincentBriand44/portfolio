import { useState } from 'react'

import ProjectPopup from '../components/ProjectPopup'

import projects from '../assets/json/projects.json'
import ProjectsBox from '../components/ProjectsBox'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)

  return (
    <div
      className='flex items-center justify-center w-full h-full snap-center'
      id='projects'
    >
      <a href='#projects__1' title='Next'>
        Précédent
      </a>
      <div className='relative flex items-center justify-center h-full overflow-x-scroll scroll-smooth snap-x snap-mandatory snap-center'>
        {projects?.map(
          (_, i) =>
            console.log(i) ||
            (i % 9 === 0 && (
              <div
                className='grid w-full min-w-full grid-cols-2 gap-2 overflow-hidden origin-center scale-100 lg:gap-10 lg:grid-cols-3'
                key={i}
                id={`projects__${i / 9 + 1}`}
              >
                {/*
                    console.log(`${i}: ${index}`) ||
                    (index + i >= i * 2 && index + i <= i &&
                 */}
                {projects.map((project, index) => (
                  <ProjectsBox
                    project={project}
                    setPopup={setPopup}
                    key={index}
                  />
                ))}
              </div>
            ))
        )}
      </div>
      {popup?.title && (
        <ProjectPopup popup={popup} setPopup={setPopup} reset={reset} />
      )}
      <a href='#projects__2' title='Next'>
        Suivant
      </a>
    </div>
  )
}

export default Projects
