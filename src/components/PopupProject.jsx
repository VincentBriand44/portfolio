import { useContext, useEffect } from 'react';
import ScrollContext from '../contexts/ScrollContext';

const PopupProject = ({ title, file, setPopup }) => {
  const { setScrollable } = useContext(ScrollContext)

  useEffect(() => {
    setScrollable(false)
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft

    window.onscroll = () => window.scrollTo(scrollLeft, scrollTop)

    return () => setScrollable(true)
  }, [])

  return (
    <div className="popupProject fixed inset-0 h-full w-full bg-black/60" onClick={() => setPopup({ title: null, link: null })}>
      <img className='w-full h-full p-40 object-contain' src={`/src/assets/img/projects/${file}`} alt={title} />
    </div>
  );
};

export default PopupProject;
