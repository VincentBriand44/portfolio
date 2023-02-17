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
    <div className="fixed inset-0 w-full h-full popupProject bg-black/60" onClick={() => setPopup({ title: null, link: null })}>
      <img className='object-contain w-full h-full p-4 sm:p-36' src={`/src/assets/img/projects/${file}`} alt={title} />
    </div>
  );
};

export default PopupProject;
