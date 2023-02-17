import { useState } from 'react'
import projects from '../assets/json/projects.json'
import PopupProject from '../components/PopupProject'


const Projects = () => {
  const [popup, setPopup] = useState({ title: null, link: null })

  return (
    <div
      className='flex items-center justify-center h-full page snap-center'
      id='projects'
    >
      <div className={`grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-3`}>
        {projects.map(
          ({ title, file, link }, index) =>
            index < 9 && (
              <div
                // href={link ?? undefined}
                key={index}
                className='lg:flex-col flex flex-col mb-2 w-32 md:w-48 lg:w-64 aspect-video bg-black/[.3] rounded-lg select-none bg-cover font-bold bg-center'
                style={{ backgroundImage: `url(/src/assets/img/projects/${file})` }}
                onClick={() => file && setPopup({ title: title, file: file })}
              >
                <div className='bg-black/[.3] hover:bg-black/[.1] w-full flex h-full p-2 items-center justify-center rounded-lg'>
                  <p>{title}</p>
                </div>
              </div>
            )
        )}
        {popup.title !== null && <PopupProject title={popup.title} file={popup.file} setPopup={setPopup} />}
      </div>
    </div>
  )
}

export default Projects
