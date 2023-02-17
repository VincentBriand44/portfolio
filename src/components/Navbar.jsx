import { useContext } from 'react'

import ScrollContext from '../contexts/ScrollContext'

import items from '../assets/json/navbar.json'

const Footer = () => {
  const { scrollable } = useContext(ScrollContext)

  return scrollable && (
    <footer className='flex justify-center'>
      <div className='fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 md:text-base md:bottom-16'>
        {items.map(({ title, link, icon }) => (
          <div className='text-center' key={title}>
            <a
              href={`#${link}`}
              className='flex flex-col pointer-events-auto hover:animate-pulse active:animate-bounce nav-custom'
            >
              <div className='mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]'>
                <img
                  src={`/src/assets/img/icons/${icon}.png`}
                  alt={title}
                  className='p-4'
                  draggable='false'
                />
              </div>
            </a>
            {title}
          </div>
        ))}
      </div>
    </footer>
  )
}

export default Footer
