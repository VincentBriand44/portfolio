import { useEffect, useState } from 'react'

import ProjectsBox from './ProjectsBox'

import projects from '../assets/json/projects.json'

const ProjectContainer = ({ i, setPopup, reset }) => {
  const [empty, setEmpty] = useState([])

  useEffect(() => {
    let array = []
    for (let i = 0; i < 9 - (projects.length % 9); i++) {
      array.push('')
    }
    setEmpty(array)
  }, [projects])

  return (
    i % 9 === 0 && (
      <div
        className='flex justify-center min-w-full origin-center'
        id={`projects__${i / 9 + 1}`}
        key={i}
      >
        <div className='grid grid-cols-2 gap-2 origin-center scale-100 justify-items-center lg:gap-10 lg:grid-cols-3'>
          {projects.map(
            (project, index) =>
              index >= i &&
              index <= i + 8 && (
                <ProjectsBox
                  project={project}
                  setPopup={setPopup}
                  key={index}
                />
              )
          )}
          {i === projects.length + empty.length - 9 &&
            empty.map((_, index) => (
              <ProjectsBox project={reset} key={index} />
            ))}
        </div>
      </div>
    )
  )
}

export default ProjectContainer
