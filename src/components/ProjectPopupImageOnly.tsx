import { Dispatch, FunctionComponent, SetStateAction } from 'react'

import noImage from '../assets/img/no-image.webp'
import { Project } from '../pages/Projects'

interface Props {
  popup: Project
  setImageOnly: Dispatch<SetStateAction<boolean>>
}

const PopupProjectImageOnly: FunctionComponent<Props> = ({
  setImageOnly,
  popup
}) => {
  const { file, title } = popup

  return (
    <div className="w-full h-full bg-slate-900">
      <img
        className={`object-contain ${file ? 'w-full h-full' : 'w-16 h-16'}`}
        src={file ?? noImage}
        alt={title ?? 'no title'}
        onClick={() => setImageOnly(false)}
      />
    </div>
  )
}

export default PopupProjectImageOnly
