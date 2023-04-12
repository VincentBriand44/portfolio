import { Dispatch, FunctionComponent, SetStateAction } from 'react'

import noImage from '../assets/img/no-image.webp'
import { Project } from '../pages/Projects'

interface Props {
  project: Project
  setPopup: Dispatch<SetStateAction<Project>>
}

const ProjectsBox: FunctionComponent<Props> = ({ project, setPopup }) => {
  const { title, links, desc, file } = project

  return (
    <div
      // href={link ?? undefined}
      className={`lg:flex-col flex flex-col mb-2 w-32 md:w-48 lg:w-64 aspect-video bg-black/[.3] rounded-lg select-none font-bold bg-center bg-no-repeat ${
        file ? 'bg-cover' : 'bg-32'
      }`}
      style={
        title
          ? {
              backgroundImage: `url(${file ?? noImage})`
            }
          : {}
      }
      onClick={() =>
        title &&
        setPopup({
          title: title,
          links: links,
          desc: desc,
          file: file
        })
      }
    >
      <div className="bg-black/[.3] hover:bg-black/[.1] w-full flex h-full p-2 items-center justify-center rounded-lg">
        <p>{title}</p>
      </div>
    </div>
  )
}

export default ProjectsBox
