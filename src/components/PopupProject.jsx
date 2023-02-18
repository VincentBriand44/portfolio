import { useContext, useEffect } from 'react';
import ScrollContext from '../contexts/ScrollContext';

const PopupProject = ({ title, links, desc, file, setPopup, reset }) => {
  const { setScrollable } = useContext(ScrollContext)

  useEffect(() => {
    setScrollable(false)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)

    return () => setScrollable(true)
  }, [])

  const regex = new RegExp('github')

  console.log(links)

  return (
    <div className="fixed inset-0 flex items-center justify-center w-full h-full p-4 popupProject bg-black/60" onClick={() => setPopup(reset)}>
      <div className="flex flex-col w-full h-full max-w-4xl overflow-hidden rounded-md sm:max-h-96 bg-slate-800 md:flex-wrap" onClick={e => e.stopPropagation()}>
        <div className='flex items-center justify-center w-full h-1/3 md:h-full bg-slate-900 md:w-1/3'>
          <img className={`object-contain ${file ? 'w-full h-full' : 'w-16 h-16'}`} src={file ? `/src/assets/img/projects/${file}` : '/src/assets/img/no-image.webp'} alt={title} />
        </div>
        <div className='flex flex-col items-center justify-between w-full h-full p-4 md:w-2/3'>
          <div className='w-full'>
            <h2 className='font-bold'>{title}</h2>
            <p>{desc}</p>
          </div>
          <div className="flex gap-4 justify-content">
            {links && links.map(link => (
              <a href={link} target='_blank'>
                <button className='px-8 py-2 rounded-md bg-slate-900'>{regex.test(link) ? 'Accèder au Github' : 'Vister le site'}</button>
                {console.log(link)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupProject;
