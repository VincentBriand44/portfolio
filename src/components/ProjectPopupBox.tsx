import { Dispatch, FunctionComponent, SetStateAction } from 'react'

import noImage from '../assets/img/no-image.webp'
import { Project } from '../pages/Projects'

interface Props {
  popup: Project
  setImageOnly: Dispatch<SetStateAction<boolean>>
}

const ProjectPopupBox: FunctionComponent<Props> = ({ popup, setImageOnly }) => {
  const { title, links, desc, file } = popup

  const regex = new RegExp('github')

  return (
    <>
      <div className="flex items-center justify-center w-full h-1/3 md:h-full bg-slate-900 md:w-1/3">
        <img
          className={`object-contain ${file ? 'w-full h-full' : 'w-16 h-16'}`}
          src={file ?? noImage}
          alt={title ?? 'no title'}
          onClick={() => file && setImageOnly(true)}
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full p-4 md:w-2/3">
        <div className="w-full contents">
          <h2 className="text-2xl font-bold">{title}</h2>
          {desc && (
            <p className="w-full h-full p-4 overflow-y-scroll">{desc}</p>
          )}
        </div>
        <div className="flex justify-center w-full gap-4 mt-4">
          {links?.map((link) => (
            <a href={link} target="_blank" key={link}>
              <button className="px-8 py-2 rounded-md bg-slate-900 hover:ring-2 ring-inset">
                {regex.test(link) ? 'Accèder au Github' : 'Vister le site'}
              </button>
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default ProjectPopupBox
