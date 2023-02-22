import { useContext } from 'react'

import ScrollContext from '../contexts/ScrollContext'

import coding from '../assets/img/icons/coding.webp'
import mail from '../assets/img/icons/mail.webp'
import pencil from '../assets/img/icons/pencil.webp'
import project from '../assets/img/icons/project.webp'

const Footer = () => {
  const { scrollable } = useContext(ScrollContext)

  const items = [
    {
      title: 'Présentation',
      link: 'presentation',
      icon: pencil
    },
    {
      title: 'Languages',
      link: 'languages',
      icon: coding
    },
    {
      title: 'Projets',
      link: 'projects',
      icon: project
    },
    {
      title: 'Contact',
      link: 'contact',
      icon: mail
    }
  ]

  return (
    scrollable && (
      <footer className='flex justify-center'>
        <div className='fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 nav:text-base nav:bottom-12'>
          {items.map(({ title, link, icon }) => (
            <div className='text-center text-gray-100' key={title}>
              <a
                href={`#${link}`}
                className='flex flex-col pointer-events-auto hover:animate-pulse active:animate-bounce nav-custom'
              >
                <div className='mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]'>
                  <img
                    src={icon}
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
  )
}

export default Footer
