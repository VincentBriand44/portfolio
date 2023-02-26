import { useState } from 'react'

import next from '../assets/img/next.webp'
import previous from '../assets/img/previous.webp'
import projects from '../assets/json/projects.json'

const ProjectIcon = ({ icon }) => {
  const [page, setPage] = useState(
    window.location.hash.split('__')[1] <= Math.ceil(projects.length / 9) &&
      window.location.hash.split('__')[1] > 0
      ? window.location.hash.split('__')[1]
      : 1
  )
  console.log(page)

  return projects.length > 9 && icon === 'previous' ? (
    <a
      href={`#projects__${page <= 0 ? Math.ceil(projects.length / 9) : page}`}
      title='Précédent'
      onClick={() =>
        setPage(page === 1 ? Math.ceil(projects.length / 9) : page - 1)
      }
    >
      <img src={previous} alt='Précédent' draggable={false} />
    </a>
  ) : (
    projects.length > 9 && (
      <a
        href={`#projects__${page <= 0 ? Math.ceil(projects.length / 9) : page}`}
        title='Suivant'
        onClick={() =>
          setPage(page === Math.ceil(projects.length / 9) ? 1 : page + 1)
        }
      >
        <img src={next} alt='Suivant' draggable={false} />
      </a>
    )
  )
}

export default ProjectIcon
