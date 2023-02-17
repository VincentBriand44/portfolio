const PopupProject = ({ title, file, setPopup }) => {
  return (
    <div className="popupProject fixed inset-0 h-full w-full bg-black/60" onClick={() => setPopup({ title: null, link: null })}>
      <img src={`/src/assets/img/projects/${file}`} className='w-full h-full p-40 object-contain' alt={title} />
    </div>
  );
};

export default PopupProject;
