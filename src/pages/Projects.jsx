import { useState } from 'react'

import ProjectPopup from '../components/ProjectPopup'

import projects from '../assets/json/projects.json'
import ProjectsBox from '../components/ProjectsBox'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)

  return (
    <div
      className='flex items-center justify-center h-full page snap-center'
      id='projects'
    >
      <div className={`grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-3`}>
        {projects?.map(
          (project, index) =>
            index < 9 && (
              <ProjectsBox project={project} setPopup={setPopup} key={index} />
            )
        )}
        {popup?.title && (
          <ProjectPopup popup={popup} setPopup={setPopup} reset={reset} />
        )}
      </div>
    </div>
  )
}

export default Projects
