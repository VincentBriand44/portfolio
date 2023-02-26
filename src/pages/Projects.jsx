import { useState } from 'react'

import PageEmpty from '../components/PageEmpty'
import ProjectPopup from '../components/ProjectPopup'

import projects from '../assets/json/projects.json'
import ProjectContainer from '../components/ProjectContainer'
import ProjectIcon from '../components/ProjectIcon'
import ProjectNav from '../components/ProjectNav'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)

  const [page, setPage] = useState(
    window.location.hash.split('__')[1] <= Math.ceil(projects.length / 9) &&
      window.location.hash.split('__')[1] > 0
      ? parseInt(window.location.hash.split('__')[1])
      : 1
  )
  console.log(page)
  // bug: miss change page when click on icon (ex: 1 -> 2 <- 1)
  // bug: start to projects__2 when refresh page

  return (
    <section
      className='flex flex-col justify-center h-full page snap-center'
      id='projects'
    >
      {projects.length > 0 ? (
        <>
          <div className='flex items-center justify-center'>
            <ProjectIcon icon='previous' page={page} setPage={setPage} />

            <div className='relative flex items-center h-full max-w-5xl overflow-hidden scroll-smooth snap-x snap-mandatory snap-center'>
              {projects.map((_, i) => (
                <ProjectContainer
                  i={i}
                  key={i}
                  setPopup={setPopup}
                  reset={reset}
                />
              ))}
            </div>

            <ProjectIcon icon='next' page={page} setPage={setPage} />

            {popup?.title && (
              <ProjectPopup popup={popup} setPopup={setPopup} reset={reset} />
            )}
          </div>

          <ProjectNav page={page} setPage={setPage} />
        </>
      ) : (
        <PageEmpty text="Aucun projet n'a été trouvé" />
      )}
    </section>
  )
}

export default Projects
