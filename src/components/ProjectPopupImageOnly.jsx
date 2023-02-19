const PopupProjectImageOnly = ({ setImageOnly, popup }) => {
  const { file, title } = popup

  return (
    <div className='w-full h-full bg-slate-900'>
      <img
        className={`object-contain ${file ? 'w-full h-full' : 'w-16 h-16'}`}
        src={
          file
            ? `/src/assets/img/projects/${file}`
            : '/src/assets/img/no-image.webp'
        }
        alt={title}
        onClick={() => setImageOnly(false)}
      />
    </div>
  )
}

export default PopupProjectImageOnly
