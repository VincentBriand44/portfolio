import { useEffect, useState } from 'react'

import ProjectPopup from '../components/ProjectPopup'

import projects from '../assets/json/projects.json'
import ProjectsBox from '../components/ProjectsBox'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)
  const [empty, setEmpty] = useState([])
  const [page, setPage] = useState(1)

  useEffect(() => {
    let array = []
    for (let i = 0; i < 9 - (projects.length % 9); i++) {
      array.push('')
    }
    setEmpty(array)
  }, [projects])

  return (
    <div
      className='flex items-center justify-center w-full h-full snap-center'
      id='projects'
    >
      <a
        href={`#projects__${
          page === 1 ? Math.ceil(projects.length / 9) : page - 1
        }`}
        title='Précédent'
        onClick={() =>
          setPage(page === 1 ? Math.ceil(projects.length / 9) : page - 1)
        }
      >
        <img src={`/src/assets/img/previous.webp`} alt='Précédent' />
      </a>
      <div className='relative flex items-center max-w-5xl h-full overflow-hidden scroll-smooth snap-x snap-mandatory snap-center'>
        {projects?.map(
          (_, i) =>
            console.log(i) ||
            (i % 9 === 0 && (
              <div
                className='flex min-w-full justify-center origin-center'
                id={`projects__${i / 9 + 1}`}
              >
                <div
                  className='grid justify-items-center grid-cols-2 gap-2 scale-100 lg:gap-10 lg:grid-cols-3 origin-center'
                  key={i}
                >
                  {projects.map(
                    (project, index) =>
                      console.log(`${i}: ${index}`) ||
                      (index >= i && index <= i + 8 && (
                        <ProjectsBox
                          project={project}
                          setPopup={setPopup}
                          key={index}
                        />
                      ))
                  )}
                  {i === projects.length + empty.length - 9 &&
                    empty.map((_, index) => (
                      <ProjectsBox project={reset} key={index} />
                    ))}
                </div>
              </div>
            ))
        )}
      </div>
      {popup?.title && (
        <ProjectPopup popup={popup} setPopup={setPopup} reset={reset} />
      )}
      <a
        href={`#projects__${
          page === 1 ? Math.ceil(projects.length / 9) : page - 1
        }`}
        title='Suivant'
        onClick={() =>
          setPage(page === Math.ceil(projects.length / 9) ? 1 : page + 1)
        }
      >
        <img src={`/src/assets/img/next.webp`} alt='Suivant' />
      </a>
    </div>
  )
}

export default Projects
