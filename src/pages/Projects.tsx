import { useEffect, useState } from 'react'

import projects from '../assets/json/projects.json'
import PageEmpty from '../components/PageEmpty'
import ProjectContainer from '../components/ProjectContainer'
import ProjectIcon from '../components/ProjectIcon'
import ProjectNav from '../components/ProjectNav'
import ProjectPopup from '../components/ProjectPopup'

export interface Project {
  title: string | null
  desc: string | null
  file: string | null
  links: string[] | never[]
}

const Projects = () => {
  const reset: Project = { title: null, links: [], desc: null, file: null }
  const [popup, setPopup] = useState<Project>(reset)
  const [page, setPage] = useState(1)
  useEffect(() => {
    const hash: number | undefined = Number(window.location.hash.split('__')[1])
    setPage(hash <= Math.ceil(projects.length / 9) && hash > 0 ? hash : 1)
  }, [])

  return (
    <section
      className="flex flex-col justify-center h-full page snap-center"
      id="projects"
    >
      {projects.length > 0 ? (
        <>
          <div className="flex items-center justify-center">
            <ProjectIcon icon="previous" page={page} setPage={setPage} />

            <div className="relative flex items-center h-full max-w-5xl overflow-hidden scroll-smooth snap-x snap-mandatory snap-center">
              {projects.map((_, i) => (
                <ProjectContainer
                  i={i}
                  key={i}
                  setPopup={setPopup}
                  reset={reset}
                />
              ))}
            </div>

            <ProjectIcon icon="next" page={page} setPage={setPage} />

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
