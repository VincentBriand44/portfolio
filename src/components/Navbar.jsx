import items from '../json/navbar.json'

const Footer = () => (
  <footer className='flex justify-center'>
    <div className='fixed grid w-screen max-w-2xl grid-cols-4 text-xs pointer-events-none select-none bottom-4 md:text-base md:bottom-16'>
      {items.map(({ title, link, icon }) => (
        <div className='text-center' key={link}>
          <a
            href={`#${link}`}
            className='flex flex-col pointer-events-auto hover:animate-bounce nav-custom'
          >
            <div className='mx-auto border rounded-full w-14 h-14 border-slate-900/[.5] bg-slate-600/[.3] hover:bg-slate-800/[.3]'>
              <img
                src={`/src/img/icons/${icon}.png`}
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

export default Footer
