import { useEffect, useState } from 'react'

import PageEmpty from '../components/PageEmpty'
import ProjectPopup from '../components/ProjectPopup'
import ProjectsBox from '../components/ProjectsBox'

import projects from '../assets/json/projects.json'
import ProjectIcon from '../components/ProjectIcon'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)
  const [empty, setEmpty] = useState([])

  useEffect(() => {
    let array = []
    for (let i = 0; i < 9 - (projects.length % 9); i++) {
      array.push('')
    }
    setEmpty(array)
  }, [projects])

  return (
    <section
      className='flex items-center justify-center h-full page snap-center'
      id='projects'
    >
      {projects.length > 0 ? (
        <>
          {projects.length > 9 && <ProjectIcon icon='previous' />}
          <div className='relative flex items-center h-full max-w-5xl overflow-hidden scroll-smooth snap-x snap-mandatory snap-center'>
            {projects.map(
              (_, i) =>
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
            )}
          </div>
          {popup?.title && (
            <ProjectPopup popup={popup} setPopup={setPopup} reset={reset} />
          )}
          {projects.length > 9 && <ProjectIcon icon='next' />}
        </>
      ) : (
        <PageEmpty text="Aucun projet n'a été trouvé" />
      )}
    </section>
  )
}

export default Projects
