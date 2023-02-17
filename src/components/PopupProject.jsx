const PopupProject = ({ title, file }) => {
  return (
    <div className="popupProject">
      <div className="popupProjectBox">
        <span id="popupProjectClose">X</span>
        <img src={file} alt={title} />
      </div>
    </div>
  );
};

export default PopupProject;
