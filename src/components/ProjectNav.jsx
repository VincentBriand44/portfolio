import { useEffect, useState } from 'react'
import projects from '../assets/json/projects.json'

const ProjectNav = ({ page, setPage }) => {
  const [pages, setPages] = useState([])

  useEffect(() => {
    let array = []
    for (let i = 0; i < Math.ceil(projects.length / 9); i++) {
      array.push('')
    }
    setPages(array)
  }, [projects])

  return (
    projects.length > 9 && (
      <div className='flex justify-center w-full gap-2 mt-2'>
        {projects.length > 0 &&
          pages.map((_, index) => (
            <a
              href={`#projects__${index + 1}`}
              key={index}
              className={`w-4 h-4 rounded-full cursor-pointer bg-slate-800 hover:bg-slate-900 transition-all ${
                page === index + 1 && 'bg-slate-900 w-8'
              }`}
              onClick={() => setPage(index + 1)}
            ></a>
          ))}
      </div>
    )
  )
}

export default ProjectNav
