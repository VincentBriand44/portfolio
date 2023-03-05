import { Dispatch, FunctionComponent, SetStateAction, useState } from 'react'

import projects from '../assets/json/projects.json'
import { Project } from '../pages/Projects'

import ProjectsBox from './ProjectsBox'

interface Props {
  i: number
  setPopup: Dispatch<SetStateAction<Project>>
  reset: Project
}

const ProjectContainer: FunctionComponent<Props> = ({ i, setPopup, reset }) => {
  const [empty, setEmpty] = useState(
    Array.from({ length: 9 - (projects.length % 9) }).fill('') as string[]
  )

  return i % 9 === 0 ? (
    <div
      className="flex justify-center min-w-full origin-center"
      id={`projects__${i / 9 + 1}`}
      key={i}
    >
      <div className="grid grid-cols-2 gap-2 origin-center scale-100 justify-items-center lg:gap-10 lg:grid-cols-3">
        {projects.map(
          (project, index) =>
            index >= i &&
            index <= i + 8 && (
              <ProjectsBox project={project} setPopup={setPopup} key={index} />
            )
        )}
        {i === projects.length + empty.length - 9 &&
          empty.map((_, index) => (
            <ProjectsBox project={reset} setPopup={setPopup} key={index} />
          ))}
      </div>
    </div>
  ) : null
}

export default ProjectContainer
