import { useState } from 'react'

import PopupProject from '../components/PopupProject'

import projects from '../assets/json/projects.json'

const Projects = () => {
  const reset = { title: null, links: null, desc: null, file: null }
  const [popup, setPopup] = useState(reset)

  return (
    <div
      className='flex items-center justify-center h-full page snap-center'
      id='projects'
    >
      <div className={`grid grid-cols-2 gap-2 lg:gap-10 lg:grid-cols-3`}>
        {projects.map(({ title, links, desc, file }, index) =>
          index < 9 && (
            <div
              // href={link ?? undefined}
              key={index}
              className={`lg:flex-col flex flex-col mb-2 w-32 md:w-48 lg:w-64 aspect-video bg-black/[.3] rounded-lg select-none font-bold bg-center bg-no-repeat ${file ? 'bg-cover' : 'bg-32'}`}
              style={{
                backgroundImage: file ? `url(/src/assets/img/projects/${file})` : 'url(/src/assets/img/no-image.webp)'
              }}
              onClick={() => setPopup({ title: title, links: links, desc: desc, file: file })}
            >
              <div className='bg-black/[.3] hover:bg-black/[.1] w-full flex h-full p-2 items-center justify-center rounded-lg'>
                <p>{title}</p>
              </div>
            </div>
          )
        )}
        {popup.title && <PopupProject title={popup.title} links={popup.links} desc={popup.desc} file={popup.file} setPopup={setPopup} reset={reset} />}
      </div>
    </div >
  )
}

export default Projects
