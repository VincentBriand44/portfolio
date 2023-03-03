import {
  Dispatch,
  FunctionComponent,
  SetStateAction,
  useContext,
  useEffect,
  useState
} from 'react'

import ScrollContext from '../contexts/ScrollContext'
import ProjectPopupBox from './ProjectPopupBox'
import ProjectPopupImageOnly from './ProjectPopupImageOnly'

type Project = {
  title: string | null
  desc: string | null
  file: string | null
  links: string[] | never[]
}
type Props = {
  popup: Project
  setPopup: Dispatch<SetStateAction<Project>>
  reset: Project
}

const ProjectPopup: FunctionComponent<Props> = ({ popup, setPopup, reset }) => {
  const { setScrollable } = useContext(ScrollContext)

  const [imageOnly, setImageOnly] = useState(false)

  useEffect(() => {
    setScrollable(false)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)

    return () => setScrollable(true)
  }, [])

  return (
    <div
      className='fixed inset-0 flex items-center justify-center w-full h-full p-4 bg-black/60'
      onClick={() => setPopup(reset)}
    >
      <div
        className='flex flex-col w-full h-full max-w-4xl overflow-hidden rounded-md sm:max-h-96 bg-slate-800 md:flex-wrap'
        onClick={e => e.stopPropagation()}
      >
        {imageOnly ? (
          <ProjectPopupImageOnly setImageOnly={setImageOnly} popup={popup} />
        ) : (
          <ProjectPopupBox popup={popup} setImageOnly={setImageOnly} />
        )}
      </div>
    </div>
  )
}

export default ProjectPopup
